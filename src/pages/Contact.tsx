import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';

type Field = 'name' | 'email' | 'phone' | 'message';
type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'mt-2 w-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-[15px] text-[var(--color-heading)] outline-none focus-visible:border-[var(--color-gold)] aria-[invalid=true]:border-[var(--color-error)]';
const labelClass = 'block text-[15px] text-[var(--color-heading)]';

function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '', website: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<Field, string>>>({});
  const startedAt = useRef(0);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  const set = (k: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setError('');
    setFieldErrors({});
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, startedAt: startedAt.current }),
      });
      const data = (await res.json().catch(() => null)) as
        | { ok: true }
        | { ok: false; error?: string; fieldErrors?: Partial<Record<Field, string>> }
        | null;
      if (res.ok && data?.ok) {
        setStatus('success');
        return;
      }
      setFieldErrors((data && !data.ok && data.fieldErrors) || {});
      setError((data && !data.ok && data.error) || 'Something went wrong. Please try again, or email or call us.');
    } catch {
      setError('We could not reach the server. Please check your connection and try again, or email or call us.');
    }
    setStatus('error');
  }

  if (status === 'success') {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="self-start border border-[var(--color-gold)] bg-[var(--color-surface)] p-8 outline-none"
      >
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-heading)]">Thank you</h2>
        <p className="mt-3 text-[15px] text-[var(--color-muted)]">
          Your message has been sent. We will get back to you as soon as we can. For anything urgent, please call
          +254 741 159 158.
        </p>
      </div>
    );
  }

  const fieldProps = (k: Field) => ({
    id: k,
    name: k,
    value: values[k],
    onChange: set(k),
    className: inputClass,
    'aria-invalid': fieldErrors[k] ? true : undefined,
    'aria-describedby': fieldErrors[k] ? `${k}-error` : undefined,
  });
  const fieldError = (k: Field) =>
    fieldErrors[k] ? (
      <p id={`${k}-error`} className="mt-1.5 text-sm text-[var(--color-error)]">{fieldErrors[k]}</p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {status === 'error' && (
        <div role="alert" className="border border-[var(--color-error)] bg-[var(--color-surface)] px-4 py-3 text-[15px] text-[var(--color-heading)]">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="name" className={labelClass}>Name</label>
        <input {...fieldProps('name')} type="text" required maxLength={100} autoComplete="name" />
        {fieldError('name')}
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input {...fieldProps('email')} type="email" required maxLength={254} autoComplete="email" />
        {fieldError('email')}
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone <span className="text-[var(--color-muted)]">(optional)</span>
        </label>
        <input {...fieldProps('phone')} type="tel" maxLength={20} autoComplete="tel" />
        {fieldError('phone')}
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea {...fieldProps('message')} rows={5} required maxLength={5000} />
        {fieldError('message')}
      </div>
      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} />
      </div>
      <p className="text-sm text-[var(--color-muted)]">
        Please do not include confidential or sensitive details in this form. Sending a message does not create an
        advocate–client relationship until we confirm in writing.
      </p>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="rounded-sm bg-[var(--color-blue)] px-6 py-3 text-[15px] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-heading)] md:text-4xl">
        Contact
      </h1>

      <div className="mt-14 grid gap-14 md:grid-cols-2">
        <div>
          <dl className="space-y-6 text-[15px]">
            <div>
              <dt className="text-[var(--color-gold)]">Office</dt>
              <dd className="mt-1 text-[var(--color-muted)]">
                Summit House, 4th Floor, Room 410<br />
                Moi Avenue, Nairobi<br />
                P.O. Box 24083-00100, Nairobi
              </dd>
            </div>
            <div>
              <dt className="text-[var(--color-gold)]">Email</dt>
              <dd className="mt-1">
                <a href="mailto:admin@omuyomaadvocates.com" className="text-[var(--color-heading)] underline decoration-[var(--color-gold)] underline-offset-4">
                  admin@omuyomaadvocates.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[var(--color-gold)]">Phone</dt>
              <dd className="mt-1">
                <a href="tel:+254741159158" className="text-[var(--color-heading)] underline decoration-[var(--color-gold)] underline-offset-4">
                  +254 741 159 158
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[var(--color-gold)]">Existing client?</dt>
              <dd className="mt-1">
                <a href="https://app.omuyomaadvocates.co.ke" className="text-[var(--color-heading)] underline decoration-[var(--color-gold)] underline-offset-4">
                  Sign in to the client portal
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
