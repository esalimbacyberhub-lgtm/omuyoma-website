import type { Enquiry } from './types.js';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

export async function sendEnquiryEmail(e: Enquiry): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = (process.env.CONTACT_TO_EMAIL ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from || to.length === 0) {
    throw new Error('Missing RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL');
  }

  const text = [
    `Name: ${e.name}`,
    `Email: ${e.email}`,
    `Phone: ${e.phone ?? '(not provided)'}`,
    `Received: ${e.receivedAt}`,
    `Sent from: ${e.origin}`,
    '',
    e.message,
  ].join('\n');

  const html = `<table cellpadding="4" style="font-family:sans-serif;font-size:14px">
<tr><td><b>Name</b></td><td>${esc(e.name)}</td></tr>
<tr><td><b>Email</b></td><td>${esc(e.email)}</td></tr>
<tr><td><b>Phone</b></td><td>${esc(e.phone ?? '(not provided)')}</td></tr>
<tr><td><b>Received</b></td><td>${esc(e.receivedAt)}</td></tr>
<tr><td><b>Sent from</b></td><td>${esc(e.origin)}</td></tr></table>
<p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${esc(e.message)}</p>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to,
      reply_to: e.email,
      subject: `Website enquiry from ${e.name}`,
      text,
      html,
    }),
    signal: AbortSignal.timeout(8000),
  });

  if (!res.ok) {
    // Log status and Resend's error body only; never the enquiry content or the key.
    throw new Error(`Resend responded ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
}
