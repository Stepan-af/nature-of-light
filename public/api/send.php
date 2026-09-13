<?php
/**
 * Lead form handler for «Природа Света».
 *
 * Contract (see CLAUDE.md → Forms contract):
 *   POST /api/send.php  fields: source, name, phone, email, comment, context, website (honeypot)
 *   Accept: application/json → JSON { ok: bool, message: string, errors?: {field: message} }
 *   otherwise (no-JS form post) → 303 redirect back to the Referer with ?sent=1 or ?error=1
 *
 * Delivery: e-mail (PHP mail()) and Telegram (Bot API). Success when at least
 * one configured channel delivered. Settings: config.php (copy of config.example.php).
 *
 * Compatible with PHP 7.4 and 8.x; needs no extensions besides json
 * (curl is used when available, otherwise allow_url_fopen streams).
 */

declare(strict_types=1);

define('LEAD_FORM', true);

const LIMITS = [
    'source' => 100,
    'name' => 100,
    'phone' => 30,
    'email' => 254,
    'comment' => 2000,
    'context' => 300,
];
const MAX_BODY_BYTES = 65536;

header('X-Robots-Tag: noindex, nofollow');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

$wantsJson = wants_json();

// ------------------------------------------------------------------ method
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond($wantsJson, 405, false, 'Метод не поддерживается.');
}

// ------------------------------------------------------------------ config
$configFile = __DIR__ . '/config.php';
if (!is_file($configFile)) {
    error_log('[lead-form] config.php is missing next to send.php');
    respond($wantsJson, 500, false, 'Форма временно не работает. Пожалуйста, позвоните нам.');
}
/** @var array $config */
$config = require $configFile;
if (!is_array($config)) {
    error_log('[lead-form] config.php must return an array');
    respond($wantsJson, 500, false, 'Форма временно не работает. Пожалуйста, позвоните нам.');
}
$fallbackPhone = (string) ($config['fallback_phone'] ?? '');
$failMessage = 'Не удалось отправить заявку. Попробуйте ещё раз'
    . ($fallbackPhone !== '' ? ' или позвоните нам: ' . $fallbackPhone : '') . '.';

// ------------------------------------------------------------------ same origin
if (!is_same_origin((array) ($config['allowed_hosts'] ?? []))) {
    respond($wantsJson, 403, false, 'Запрос отклонён.');
}

// ------------------------------------------------------------------ body size
if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > MAX_BODY_BYTES) {
    respond($wantsJson, 413, false, 'Слишком большой запрос.');
}

// ------------------------------------------------------------------ input
$input = read_input();

// Honeypot: bots fill every field. Pretend success, send nothing.
if (trim((string) ($input['website'] ?? '')) !== '') {
    respond($wantsJson, 200, true, 'Спасибо! Заявка отправлена.');
}

$data = [];
foreach (LIMITS as $field => $_) {
    $data[$field] = clean_text((string) ($input[$field] ?? ''), $field === 'comment');
}

// ------------------------------------------------------------------ validation
$errors = [];
foreach (LIMITS as $field => $max) {
    if (str_length($data[$field]) > $max) {
        $errors[$field] = 'Слишком длинное значение (не более ' . $max . ' символов).';
    }
}

$phoneDigits = preg_replace('/\D+/', '', $data['phone']);
if ($data['phone'] !== '' && !isset($errors['phone'])) {
    if (strlen($phoneDigits) < 10 || strlen($phoneDigits) > 15) {
        $errors['phone'] = 'Проверьте номер телефона: нужно не меньше 10 цифр.';
    }
}
if ($data['email'] !== '' && !isset($errors['email'])) {
    if (filter_var($data['email'], FILTER_VALIDATE_EMAIL) === false) {
        $errors['email'] = 'Проверьте адрес электронной почты.';
    }
}
if ($data['phone'] === '' && $data['email'] === '') {
    $errors['phone'] = 'Укажите телефон или e-mail для связи.';
    $errors['email'] = 'Укажите телефон или e-mail для связи.';
}
if ($data['source'] === '' || !preg_match('/^[a-z0-9][a-z0-9:_\-.]*$/i', $data['source'])) {
    $data['source'] = 'unknown';
}

if ($errors) {
    respond($wantsJson, 422, false, 'Проверьте правильность заполнения формы.', $errors);
}

// ------------------------------------------------------------------ rate limit
$storageDir = storage_dir((string) ($config['storage_dir'] ?? ''));
$rate = (array) ($config['rate_limit'] ?? []);
if (!rate_limit_ok(
    $storageDir,
    client_ip(),
    (int) ($rate['max_requests'] ?? 5),
    (int) ($rate['window_seconds'] ?? 600)
)) {
    header('Retry-After: ' . (int) ($rate['window_seconds'] ?? 600));
    respond($wantsJson, 429, false, 'Слишком много заявок подряд. Попробуйте позже'
        . ($fallbackPhone !== '' ? ' или позвоните нам: ' . $fallbackPhone : '') . '.');
}

// ------------------------------------------------------------------ compose
$lead = [
    'Форма' => $data['source'],
    'Интерес' => $data['context'],
    'Имя' => $data['name'],
    'Телефон' => $data['phone'] !== '' ? format_phone($data['phone'], $phoneDigits) : '',
    'E-mail' => $data['email'],
    'Комментарий' => $data['comment'],
    'Страница' => clean_text((string) ($_SERVER['HTTP_REFERER'] ?? ''), false),
    'Время' => (new DateTimeImmutable('now', new DateTimeZone('Europe/Moscow')))->format('d.m.Y H:i') . ' (МСК)',
];

// ------------------------------------------------------------------ deliver
$delivered = [];
$failed = [];
$configured = 0;

if (!empty($config['dry_run'])) {
    $line = json_encode(['lead' => $lead, 'ip' => client_ip()], JSON_UNESCAPED_UNICODE) . PHP_EOL;
    if (@file_put_contents($storageDir . '/leads-dry-run.log', $line, FILE_APPEND | LOCK_EX) !== false) {
        $delivered[] = 'dry-run';
    } else {
        $failed[] = 'dry-run';
    }
    $configured = 1;
} else {
    $mail = (array) ($config['mail'] ?? []);
    if (!empty($mail['enabled']) && !empty($mail['to']) && !empty($mail['from'])) {
        $configured++;
        if (send_mail($mail, $lead, $data['email'])) {
            $delivered[] = 'mail';
        } else {
            $failed[] = 'mail';
        }
    }

    $tg = (array) ($config['telegram'] ?? []);
    if (!empty($tg['enabled']) && is_real_secret($tg['bot_token'] ?? '') && is_real_secret($tg['chat_id'] ?? '')) {
        $configured++;
        if (send_telegram($tg, $lead)) {
            $delivered[] = 'telegram';
        } else {
            $failed[] = 'telegram';
        }
    }
}

if ($failed) {
    error_log('[lead-form] delivery failed: ' . implode(', ', $failed)
        . ($delivered ? ' (delivered via ' . implode(', ', $delivered) . ')' : ''));
}

if ($configured === 0) {
    error_log('[lead-form] no delivery channel is configured (mail/telegram)');
    respond($wantsJson, 500, false, $failMessage);
}
if (!$delivered) {
    respond($wantsJson, 502, false, $failMessage);
}

respond($wantsJson, 200, true, 'Спасибо! Заявка отправлена — мы свяжемся с вами в ближайшее время.');

// ==================================================================== helpers

/** @return never */
function respond(bool $json, int $status, bool $ok, string $message, array $errors = []): void
{
    if ($json) {
        http_response_code($status);
        header('Content-Type: application/json; charset=utf-8');
        $body = ['ok' => $ok, 'message' => $message];
        if ($errors) {
            $body['errors'] = $errors;
        }
        echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }

    // No-JS fallback: back to the page the form was on.
    if ($status === 405) {
        http_response_code(405);
        header('Content-Type: text/plain; charset=utf-8');
        echo $message;
        exit;
    }
    $target = redirect_target($ok ? 'sent' : 'error');
    http_response_code(303);
    header('Location: ' . $target);
    header('Content-Type: text/plain; charset=utf-8');
    echo $message;
    exit;
}

function wants_json(): bool
{
    $accept = (string) ($_SERVER['HTTP_ACCEPT'] ?? '');
    $requestedWith = strtolower((string) ($_SERVER['HTTP_X_REQUESTED_WITH'] ?? ''));
    return stripos($accept, 'application/json') !== false || $requestedWith === 'xmlhttprequest';
}

/** Referer of the same host with ?sent=1 / ?error=1, or the site root. */
function redirect_target(string $flag): string
{
    $referer = (string) ($_SERVER['HTTP_REFERER'] ?? '');
    $parts = $referer !== '' ? parse_url($referer) : false;
    $host = strtolower((string) ($_SERVER['HTTP_HOST'] ?? ''));
    $path = '/';
    $query = [];
    if (is_array($parts) && isset($parts['host'])) {
        $refHost = strtolower($parts['host'] . (isset($parts['port']) ? ':' . $parts['port'] : ''));
        if ($refHost === $host || strtolower($parts['host']) === preg_replace('/:\d+$/', '', $host)) {
            $path = $parts['path'] ?? '/';
            if (isset($parts['query'])) {
                parse_str($parts['query'], $query);
            }
        }
    }
    unset($query['sent'], $query['error']);
    $query[$flag] = '1';
    return $path . '?' . http_build_query($query);
}

/** Origin (or Referer when Origin is absent) must belong to an allowed host. */
function is_same_origin(array $allowedHosts): bool
{
    $allowed = array_map('strtolower', $allowedHosts);
    if (!empty($_SERVER['HTTP_HOST'])) {
        $allowed[] = strtolower((string) $_SERVER['HTTP_HOST']);
    }
    $source = (string) ($_SERVER['HTTP_ORIGIN'] ?? '');
    if ($source === '' || $source === 'null') {
        $source = (string) ($_SERVER['HTTP_REFERER'] ?? '');
    }
    if ($source === '') {
        return false;
    }
    $parts = parse_url($source);
    if (!is_array($parts) || empty($parts['host'])) {
        return false;
    }
    $host = strtolower($parts['host']);
    $hostWithPort = $host . (isset($parts['port']) ? ':' . $parts['port'] : '');
    return in_array($hostWithPort, $allowed, true) || in_array($host, $allowed, true);
}

/** $_POST for form posts, decoded body for application/json. */
function read_input(): array
{
    $type = strtolower((string) ($_SERVER['CONTENT_TYPE'] ?? ''));
    if (strpos($type, 'application/json') !== false) {
        $raw = (string) file_get_contents('php://input', false, null, 0, MAX_BODY_BYTES);
        $decoded = json_decode($raw, true);
        return is_array($decoded) ? $decoded : [];
    }
    return $_POST;
}

/** Trims, normalizes whitespace and strips control characters / invalid UTF-8. */
function clean_text(string $value, bool $multiline): string
{
    if (function_exists('mb_convert_encoding')) {
        $value = mb_convert_encoding($value, 'UTF-8', 'UTF-8');
    } elseif (!preg_match('//u', $value)) {
        $value = '';
    }
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $value = (string) preg_replace('/[\x00-\x09\x0B-\x1F\x7F]/u', '', $value);
    if ($multiline) {
        $value = (string) preg_replace("/\n{3,}/", "\n\n", $value);
    } else {
        $value = (string) preg_replace('/\s+/u', ' ', $value);
    }
    return trim($value);
}

function str_length(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : (int) preg_match_all('/./us', $value);
}

/** 89161234567 / 9161234567 → +7 (916) 123-45-67; other numbers are kept as typed. */
function format_phone(string $raw, string $digits): string
{
    if (strlen($digits) === 11 && ($digits[0] === '7' || $digits[0] === '8')) {
        $digits = substr($digits, 1);
    }
    if (strlen($digits) === 10) {
        return sprintf('+7 (%s) %s-%s-%s', substr($digits, 0, 3), substr($digits, 3, 3), substr($digits, 6, 2), substr($digits, 8, 2));
    }
    return $raw;
}

/** Rejects empty values and the placeholders from config.example.php. */
function is_real_secret($value): bool
{
    $values = is_array($value) ? $value : [$value];
    foreach ($values as $v) {
        $v = (string) $v;
        if ($v === '' || stripos($v, 'REPLACE') !== false) {
            return false;
        }
    }
    return count($values) > 0;
}

function client_ip(): string
{
    // REMOTE_ADDR only: X-Forwarded-For is trivially spoofable on shared hosting.
    return (string) ($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0');
}

function storage_dir(string $configured): string
{
    $dir = $configured !== '' ? rtrim($configured, '/\\') : rtrim(sys_get_temp_dir(), '/\\') . '/prirodasveta-forms';
    if (!is_dir($dir)) {
        @mkdir($dir, 0700, true);
    }
    return $dir;
}

/** File-based sliding window per IP. Fails open if the folder isn't writable. */
function rate_limit_ok(string $dir, string $ip, int $max, int $window): bool
{
    if ($max <= 0 || !is_dir($dir) || !is_writable($dir)) {
        if ($max > 0) {
            error_log('[lead-form] rate limit disabled: storage dir is not writable: ' . $dir);
        }
        return true;
    }
    $file = $dir . '/rl-' . hash('sha256', $ip . '|' . __FILE__) . '.json';
    $fp = @fopen($file, 'c+');
    if ($fp === false) {
        return true;
    }
    $now = time();
    flock($fp, LOCK_EX);
    $stamps = json_decode((string) stream_get_contents($fp), true);
    $stamps = array_values(array_filter(is_array($stamps) ? $stamps : [], function ($t) use ($now, $window) {
        return is_int($t) && $t > $now - $window;
    }));
    $ok = count($stamps) < $max;
    if ($ok) {
        $stamps[] = $now;
    }
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, (string) json_encode($stamps));
    flock($fp, LOCK_UN);
    fclose($fp);

    // Occasionally clean up stale files.
    if (mt_rand(1, 50) === 1) {
        foreach ((array) glob($dir . '/rl-*.json') as $old) {
            if (is_string($old) && @filemtime($old) < $now - $window) {
                @unlink($old);
            }
        }
    }
    return $ok;
}

function mime_header(string $text): string
{
    return '=?UTF-8?B?' . base64_encode($text) . '?=';
}

function send_mail(array $mail, array $lead, string $replyTo): bool
{
    $from = trim((string) $mail['from']);
    if (filter_var($from, FILTER_VALIDATE_EMAIL) === false) {
        error_log('[lead-form] mail.from is not a valid address');
        return false;
    }
    $recipients = array_filter(array_map('trim', (array) $mail['to']), function ($a) {
        return filter_var($a, FILTER_VALIDATE_EMAIL) !== false;
    });
    if (!$recipients) {
        error_log('[lead-form] mail.to has no valid address');
        return false;
    }

    $lines = [];
    foreach ($lead as $label => $value) {
        if ($value === '') {
            continue;
        }
        $lines[] = strpos($value, "\n") !== false ? $label . ":\n" . $value : $label . ': ' . $value;
    }
    $body = "Новая заявка с сайта\n\n" . implode("\n", $lines) . "\n";

    $subject = (string) ($mail['subject'] ?? 'Новая заявка с сайта');
    if ($lead['Имя'] !== '') {
        $subject .= ' — ' . $lead['Имя'];
    }
    $fromName = (string) ($mail['from_name'] ?? '');

    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
        'From: ' . ($fromName !== '' ? mime_header($fromName) . ' ' : '') . '<' . $from . '>',
        'X-Mailer: prirodasveta-lead-form',
    ];
    // $replyTo already passed FILTER_VALIDATE_EMAIL (no CR/LF possible).
    if ($replyTo !== '' && filter_var($replyTo, FILTER_VALIDATE_EMAIL) !== false) {
        $headers[] = 'Reply-To: ' . $replyTo;
    }

    $params = !empty($mail['envelope_from']) ? '-f' . $from : '';
    $ok = @mail(
        implode(', ', $recipients),
        mime_header($subject),
        rtrim(chunk_split(base64_encode($body), 76, "\r\n")),
        implode("\r\n", $headers),
        $params
    );
    if (!$ok) {
        error_log('[lead-form] mail() returned false');
    }
    return $ok;
}

function send_telegram(array $tg, array $lead): bool
{
    $lines = ['<b>Новая заявка с сайта</b>', ''];
    foreach ($lead as $label => $value) {
        if ($value === '') {
            continue;
        }
        $safe = htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
        $lines[] = strpos($value, "\n") !== false
            ? '<b>' . $label . ':</b>' . "\n" . $safe
            : '<b>' . $label . ':</b> ' . $safe;
    }
    $text = implode("\n", $lines);
    if (str_length($text) > 4000) {
        $text = function_exists('mb_substr') ? mb_substr($text, 0, 4000, 'UTF-8') : substr($text, 0, 4000);
        $text = htmlspecialchars_decode(strip_tags($text)); // truncated HTML could be invalid
        $parseMode = null;
    } else {
        $parseMode = 'HTML';
    }

    $token = trim((string) $tg['bot_token']);
    if (!preg_match('/^\d+:[A-Za-z0-9_-]+$/', $token)) {
        error_log('[lead-form] telegram.bot_token has an invalid format');
        return false;
    }
    $url = 'https://api.telegram.org/bot' . $token . '/sendMessage';
    $anyOk = false;
    foreach ((array) $tg['chat_id'] as $chatId) {
        $payload = ['chat_id' => (string) $chatId, 'text' => $text, 'disable_web_page_preview' => true];
        if ($parseMode) {
            $payload['parse_mode'] = $parseMode;
        }
        $response = http_post_json($url, $payload);
        $decoded = is_string($response) ? json_decode($response, true) : null;
        if (is_array($decoded) && !empty($decoded['ok'])) {
            $anyOk = true;
        } else {
            $description = is_array($decoded) ? (string) ($decoded['description'] ?? '') : 'no response';
            error_log('[lead-form] telegram sendMessage failed for chat ' . $chatId . ': ' . $description);
        }
    }
    return $anyOk;
}

/** @return string|false */
function http_post_json(string $url, array $payload)
{
    $json = (string) json_encode($payload, JSON_UNESCAPED_UNICODE);
    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $json,
            CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CONNECTTIMEOUT => 5,
            CURLOPT_TIMEOUT => 10,
        ]);
        $result = curl_exec($ch);
        if ($result === false) {
            error_log('[lead-form] curl error: ' . curl_error($ch));
        }
        if (PHP_VERSION_ID < 80000) {
            curl_close($ch); // no-op since PHP 8.0, deprecated in 8.5
        }
        return is_string($result) ? $result : false;
    }
    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/json\r\n",
            'content' => $json,
            'timeout' => 10,
            'ignore_errors' => true,
        ],
    ]);
    return @file_get_contents($url, false, $context);
}
