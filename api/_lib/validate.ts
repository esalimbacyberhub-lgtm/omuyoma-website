import type { Enquiry } from './types.js';

export const LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  phone: { min: 7, max: 20 },
  message: { min: 10, max: 5000 },
} as const;

type Field = 'name' | 'email' | 'phone' | 'message';
export type Cleaned = Pick<Enquiry, 'name' | 'email' | 'phone' | 'message'>;
export type ValidationResult =
  | { ok: true; value: Cleaned }
  | { ok: false; fieldErrors: Partial<Record<Field, string>> };

// Remove control characters (keeps \n and \t only when allowed).
const stripControl = (s: string, allowNewlines: boolean) =>
  // eslint-disable-next-line no-control-regex
  s.replace(allowNewlines ? /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g : /[\u0000-\u001F\u007F]/g, '');

const EMAIL_RE = /^[^\s@<>(),;:"\\]+@[^\s@<>(),;:"\\]+\.[^\s@<>(),;:"\\]{2,}$/;
const PHONE_RE = /^\+?[0-9][0-9\s().-]*$/;

const asString = (v: unknown) => (typeof v === 'string' ? v : '');

export function validateEnquiry(input: unknown): ValidationResult {
  const body = (typeof input === 'object' && input !== null ? input : {}) as Record<string, unknown>;
  const fieldErrors: Partial<Record<Field, string>> = {};

  const name = stripControl(asString(body.name), false).trim().replace(/\s+/g, ' ');
  const email = stripControl(asString(body.email), false).trim();
  const phoneRaw = stripControl(asString(body.phone), false).trim();
  const message = stripControl(asString(body.message).replace(/\r\n?/g, '\n'), true).trim();

  if (name.length < LIMITS.name.min) fieldErrors.name = 'Please enter your name.';
  else if (name.length > LIMITS.name.max) fieldErrors.name = `Name must be at most ${LIMITS.name.max} characters.`;
  else if (/[<>]/.test(name)) fieldErrors.name = 'Name contains invalid characters.';

  if (!email) fieldErrors.email = 'Please enter your email address.';
  else if (email.length > LIMITS.email.max || !EMAIL_RE.test(email)) fieldErrors.email = 'Please enter a valid email address.';

  if (phoneRaw && (phoneRaw.length < LIMITS.phone.min || phoneRaw.length > LIMITS.phone.max || !PHONE_RE.test(phoneRaw))) {
    fieldErrors.phone = 'Please enter a valid phone number, or leave it blank.';
  }

  if (message.length < LIMITS.message.min) fieldErrors.message = `Please write at least ${LIMITS.message.min} characters.`;
  else if (message.length > LIMITS.message.max) fieldErrors.message = `Message must be at most ${LIMITS.message.max} characters.`;

  if (Object.keys(fieldErrors).length > 0) return { ok: false, fieldErrors };
  return { ok: true, value: { name, email, phone: phoneRaw || undefined, message } };
}
