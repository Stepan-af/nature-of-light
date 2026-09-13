/*
 * Progressive enhancement for every <form data-lead-form> on the site.
 * See CLAUDE.md → "Forms contract" and docs/forms.md.
 *
 * - validates on the client with the same rules as public/api/send.php
 *   (phone: ≥ 10 digits; e-mail: valid address; at least one of them; length limits);
 * - light +7 phone mask that never blocks the user from typing other formats;
 * - submits with fetch (Accept: application/json) and toggles
 *   data-state="submitting|success|error" on the form;
 * - writes messages into [data-form-status] and [data-error-for="<field>"];
 * - dispatches `lead-form:success` / `lead-form:error` CustomEvents on the form.
 *
 * Importing this module from many components is safe: each form is initialised once.
 */

type FieldName = 'name' | 'phone' | 'email' | 'comment' | 'context' | 'source';
type Errors = Partial<Record<string, string>>;

interface ApiResponse {
  ok: boolean;
  message: string;
  errors?: Errors;
}

type Control = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

/** Keep in sync with LIMITS in public/api/send.php. */
const LIMITS: Record<FieldName, number> = {
  source: 100,
  name: 100,
  phone: 30,
  email: 254,
  comment: 2000,
  context: 300,
};

const MESSAGES = {
  required: 'Заполните это поле.',
  nameRequired: 'Укажите, как к вам обращаться.',
  phoneRequired: 'Укажите номер телефона.',
  phoneInvalid: 'Проверьте номер телефона: нужно не меньше 10 цифр.',
  emailRequired: 'Укажите адрес электронной почты.',
  emailInvalid: 'Проверьте адрес электронной почты.',
  contactRequired: 'Укажите телефон или e-mail для связи.',
  consentRequired: 'Необходимо ваше согласие.',
  tooLong: (max: number) => `Слишком длинное значение (не более ${max} символов).`,
  invalidForm: 'Проверьте правильность заполнения формы.',
  sending: 'Отправляем…',
  success: 'Спасибо! Заявка отправлена — мы свяжемся с вами в ближайшее время.',
  failed: 'Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.',
  network: 'Не удалось отправить заявку: проверьте подключение к интернету и попробуйте ещё раз.',
} as const;

const REQUEST_TIMEOUT_MS = 20_000;
const HONEYPOT = 'website';
const initialised = new WeakSet<HTMLFormElement>();

// ---------------------------------------------------------------- helpers

const digits = (value: string) => value.replace(/\D+/g, '');

/** Pragmatic check, close to PHP's FILTER_VALIDATE_EMAIL for real-world addresses. */
const isEmail = (value: string) =>
  value.length <= LIMITS.email && /^[^\s@"<>(),;:\\[\]]+@[^\s@"<>(),;:\\[\]]+\.[^\s@"<>(),;:\\[\]]{2,}$/.test(value);

const isLocalhost = () => ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);

function control(form: HTMLFormElement, name: string): Control | null {
  const el = form.elements.namedItem(name);
  return el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement
    ? el
    : null;
}

function errorSlot(form: HTMLFormElement, name: string): HTMLElement | null {
  return form.querySelector<HTMLElement>(`[data-error-for="${CSS.escape(name)}"]`);
}

function statusSlot(form: HTMLFormElement): HTMLElement | null {
  return form.querySelector<HTMLElement>('[data-form-status]');
}

function submitButtons(form: HTMLFormElement): (HTMLButtonElement | HTMLInputElement)[] {
  return [
    ...form.querySelectorAll<HTMLButtonElement | HTMLInputElement>(
      'button[type="submit"], button:not([type]), input[type="submit"]',
    ),
  ];
}

function setFieldError(form: HTMLFormElement, name: string, message: string | undefined) {
  const slot = errorSlot(form, name);
  const field = control(form, name);
  if (slot) slot.textContent = message ?? '';
  if (!field) return;
  if (message) {
    field.setAttribute('aria-invalid', 'true');
    if (slot) {
      if (!slot.id) slot.id = `${form.id || 'lead-form'}-${name}-error-${Math.random().toString(36).slice(2, 7)}`;
      const describedBy = new Set((field.getAttribute('aria-describedby') ?? '').split(/\s+/).filter(Boolean));
      describedBy.add(slot.id);
      field.setAttribute('aria-describedby', [...describedBy].join(' '));
    }
  } else {
    field.removeAttribute('aria-invalid');
  }
}

function clearErrors(form: HTMLFormElement) {
  form.querySelectorAll<HTMLElement>('[data-error-for]').forEach((slot) => {
    setFieldError(form, slot.dataset.errorFor ?? '', undefined);
  });
  form.querySelectorAll('[aria-invalid="true"]').forEach((el) => el.removeAttribute('aria-invalid'));
}

function setStatus(form: HTMLFormElement, state: 'submitting' | 'success' | 'error' | null, message = '') {
  if (state) form.dataset.state = state;
  else delete form.dataset.state;
  form.setAttribute('aria-busy', String(state === 'submitting'));
  const slot = statusSlot(form);
  if (slot) slot.textContent = message;
}

// ---------------------------------------------------------------- validation

function validate(form: HTMLFormElement): Errors {
  const errors: Errors = {};
  const value = (name: string) => control(form, name)?.value.trim() ?? '';
  const phone = control(form, 'phone');
  const email = control(form, 'email');

  // Generic `required` + length checks for every named control.
  for (const el of form.elements) {
    if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement))
      continue;
    if (!el.name || el.name === HONEYPOT || el.disabled || (el instanceof HTMLInputElement && el.type === 'hidden'))
      continue;
    if (el instanceof HTMLInputElement && el.type === 'checkbox') {
      if (el.required && !el.checked) errors[el.name] = MESSAGES.consentRequired;
      continue;
    }
    const v = el.name === 'phone' && digits(el.value) === '7' ? '' : el.value.trim();
    if (el.required && v === '') {
      errors[el.name] =
        el.name === 'name'
          ? MESSAGES.nameRequired
          : el.name === 'phone'
            ? MESSAGES.phoneRequired
            : el.name === 'email'
              ? MESSAGES.emailRequired
              : MESSAGES.required;
      continue;
    }
    const max = LIMITS[el.name as FieldName];
    if (max && v.length > max) errors[el.name] = MESSAGES.tooLong(max);
  }

  // A bare "+7" left by the phone mask counts as empty.
  const phoneValue = digits(value('phone')) === '7' ? '' : value('phone');
  if (phone && phoneValue !== '' && !errors.phone) {
    const count = digits(phoneValue).length;
    if (count < 10 || count > 15) errors.phone = MESSAGES.phoneInvalid;
  }

  const emailValue = value('email');
  if (email && emailValue !== '' && !errors.email && !isEmail(emailValue)) errors.email = MESSAGES.emailInvalid;

  // The server needs at least one way to reach the visitor.
  if (phoneValue === '' && emailValue === '' && !errors.phone && !errors.email) {
    const target = phone ? 'phone' : email ? 'email' : 'phone';
    errors[target] = MESSAGES.contactRequired;
  }

  // Server limit on hidden context, silently trimmed rather than shown.
  const context = control(form, 'context');
  if (context && context.value.length > LIMITS.context) context.value = context.value.slice(0, LIMITS.context);

  return errors;
}

// ---------------------------------------------------------------- phone mask

/**
 * "9161234567" / "89161234567" → "+7 (916) 123-45-67"; partial input is formatted
 * progressively. The first typed 8 or 7 is treated as the country/trunk prefix.
 */
function formatRuPhone(raw: string): string {
  let d = digits(raw);
  if (d.startsWith('8') || d.startsWith('7')) d = d.slice(1);
  d = d.slice(0, 10);
  let out = '+7';
  if (d.length > 0) out += ` (${d.slice(0, 3)}`;
  if (d.length >= 3) out += ')';
  if (d.length > 3) out += ` ${d.slice(3, 6)}`;
  if (d.length > 6) out += `-${d.slice(6, 8)}`;
  if (d.length > 8) out += `-${d.slice(8, 10)}`;
  return out;
}

function enhancePhone(input: HTMLInputElement) {
  const isRussian = (v: string) => {
    const t = v.trim();
    if (t === '' || t.startsWith('+7') || t.startsWith('7') || t.startsWith('8')) return true;
    // A bare 9XX… mobile number without a prefix.
    return /^\(?9/.test(t);
  };

  input.addEventListener('input', (event) => {
    const e = event as InputEvent;
    const v = input.value;
    // Never interfere with deletions, pastes of foreign numbers or edits in the middle.
    if (e.inputType && !e.inputType.startsWith('insert')) return;
    if (!isRussian(v)) return;
    if (input.selectionStart !== null && input.selectionStart < v.length) return;
    if (digits(v).length > 11) return;
    const formatted = formatRuPhone(v);
    if (formatted !== v) {
      input.value = formatted;
      input.setSelectionRange(formatted.length, formatted.length);
    }
  });

  input.addEventListener('blur', () => {
    if (digits(input.value) === '7' || input.value.trim() === '+7') input.value = '';
  });
}

// ---------------------------------------------------------------- submit

async function submit(form: HTMLFormElement) {
  const phone = control(form, 'phone');
  if (phone && digits(phone.value) === '7') phone.value = '';
  const errors = validate(form);
  clearErrors(form);
  const invalid = Object.entries(errors).filter((entry): entry is [string, string] => Boolean(entry[1]));
  if (invalid.length > 0) {
    for (const [name, message] of invalid) setFieldError(form, name, message);
    setStatus(form, 'error', MESSAGES.invalidForm);
    const first = control(form, invalid[0]![0]);
    first?.focus();
    return;
  }

  const buttons = submitButtons(form);
  buttons.forEach((b) => (b.disabled = true));
  setStatus(form, 'submitting', MESSAGES.sending);

  const action = form.getAttribute('action') || '/api/send.php';
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
      credentials: 'same-origin',
      signal: controller.signal,
    });

    // `astro dev` has no PHP: it answers 404/405 or serves send.php as a raw file.
    // Pretend the lead was sent so the UI flow can be tested. See docs/forms.md.
    const isJson = (response.headers.get('content-type') ?? '').includes('application/json');
    if (isLocalhost() && (response.status === 404 || response.status === 405 || (response.ok && !isJson))) {
      console.warn(
        `[lead-form] ${action} answered ${response.status} without JSON on localhost — simulating success (no PHP in astro dev).`,
        Object.fromEntries(new FormData(form)),
      );
      succeed(form, MESSAGES.success);
      return;
    }

    let data: ApiResponse | null = null;
    try {
      data = (await response.json()) as ApiResponse;
    } catch {
      data = null;
    }

    if (response.ok && data?.ok) {
      succeed(form, data.message || MESSAGES.success);
      return;
    }

    if (data?.errors) {
      for (const [name, message] of Object.entries(data.errors)) setFieldError(form, name, message);
    }
    fail(form, data?.message || MESSAGES.failed);
  } catch (error) {
    console.error('[lead-form]', error);
    fail(form, MESSAGES.network);
  } finally {
    window.clearTimeout(timer);
    buttons.forEach((b) => (b.disabled = false));
  }
}

function succeed(form: HTMLFormElement, message: string) {
  form.reset();
  clearErrors(form);
  setStatus(form, 'success', message);
  form.dispatchEvent(new CustomEvent('lead-form:success', { bubbles: true, detail: { message } }));
}

function fail(form: HTMLFormElement, message: string) {
  setStatus(form, 'error', message);
  form.dispatchEvent(new CustomEvent('lead-form:error', { bubbles: true, detail: { message } }));
}

// ---------------------------------------------------------------- init

function enhance(form: HTMLFormElement) {
  if (initialised.has(form)) return;
  initialised.add(form);
  form.noValidate = true;

  form.querySelectorAll<HTMLInputElement>('input[name="phone"]').forEach(enhancePhone);

  // Clear a field's error as soon as the visitor edits it.
  form.addEventListener('input', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement))
      return;
    if (target.getAttribute('aria-invalid') === 'true') setFieldError(form, target.name, undefined);
    if (target.name === 'phone' || target.name === 'email') {
      // "phone or e-mail" error may sit on the other field.
      setFieldError(form, target.name === 'phone' ? 'email' : 'phone', undefined);
    }
    if (form.dataset.state === 'error' || form.dataset.state === 'success') setStatus(form, null);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.dataset.state === 'submitting') return;
    void submit(form);
  });
}

/** Enhances all lead forms inside `root` (safe to call repeatedly). */
export function initLeadForms(root: ParentNode = document) {
  root.querySelectorAll<HTMLFormElement>('form[data-lead-form]').forEach(enhance);
}

initLeadForms();
