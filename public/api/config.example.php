<?php
/**
 * Lead form handler settings — TEMPLATE.
 *
 * Copy this file to `config.php` in the same folder ON THE SERVER and fill in
 * real values. `config.php` is git-ignored, excluded from FTP deploy cleanup
 * and denied by .htaccess — never commit real tokens or passwords.
 *
 * See docs/forms.md for details.
 */

if (!defined('LEAD_FORM')) {
    http_response_code(403);
    exit;
}

return [
    // Hosts allowed to post the form (Origin / Referer check). The current
    // HTTP_HOST is always allowed; add extra hosts here (with port if not 80/443).
    'allowed_hosts' => [
        'prirodasveta.ru',
        'www.prirodasveta.ru',
        // 'localhost:8080', // local testing with `php -S localhost:8080 -t dist`
    ],

    // ---------------------------------------------------------------- e-mail
    'mail' => [
        'enabled' => true,
        // One address or several: ['sales@prirodasveta.ru', 'boss@prirodasveta.ru']
        'to' => 'info@prirodasveta.ru',
        // Must be a mailbox on the hosting's own domain, otherwise the letter
        // is likely to be rejected as spam (SPF/DKIM).
        'from' => 'noreply@prirodasveta.ru',
        'from_name' => 'Сайт «Природа Света»',
        'subject' => 'Новая заявка с сайта',
        // Pass `-f<from>` to sendmail (sets the envelope sender). Disable if the
        // hosting forbids it (mail() then returns false).
        'envelope_from' => true,
    ],

    // ---------------------------------------------------------------- Telegram
    // 1. Create a bot with @BotFather → token.
    // 2. Add the bot to a group (or write to it), then open
    //    https://api.telegram.org/bot<TOKEN>/getUpdates to find chat.id
    //    (group ids are negative, e.g. -1001234567890).
    'telegram' => [
        'enabled' => true,
        'bot_token' => '000000000:REPLACE_WITH_BOT_TOKEN',
        // One chat id or several: ['-1001234567890', '123456789']
        'chat_id' => 'REPLACE_WITH_CHAT_ID',
    ],

    // ---------------------------------------------------------------- limits
    'rate_limit' => [
        'max_requests' => 5,   // per IP …
        'window_seconds' => 600, // … per 10 minutes
    ],

    // Writable folder for rate-limit files and the dry-run log. Prefer a path
    // OUTSIDE the web root, e.g. '/home/USER/tmp/prirodasveta-forms'.
    // Empty → sys_get_temp_dir() . '/prirodasveta-forms'.
    'storage_dir' => '',

    // Shown to the visitor when delivery fails.
    'fallback_phone' => '+7 (495) 123-45-67',

    // true → nothing is sent; every lead is appended to <storage_dir>/leads-dry-run.log
    // and counted as delivered. For local testing only.
    'dry_run' => false,
];
