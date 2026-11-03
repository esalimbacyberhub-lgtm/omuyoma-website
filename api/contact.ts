import type { VercelRequest, VercelResponse } from '@vercel/node';
import { processEnquiry } from './_lib/handlers.js';
import { isAllowedOrigin } from './_lib/origin.js';
import { rateLimited } from './_lib/ratelimit.js';
import type { ContactResponse } from './_lib/types.js';
import { validateEnquiry } from './_lib/validate.js';

const MAX_BODY_BYTES = 20_000;
const MIN_FILL_MS = 2000; // humans cannot complete the form faster than this

const send = (res: VercelResponse, status: number, body: ContactResponse) => {
  res.setHeader('Cache-Control', 'no-store');
  return res.status(status).json(body);
};

const clientIp = (req: VercelRequest) => {
  const xff = req.headers['x-forwarded-for'];
  const first = (Array.isArray(xff) ? xff[0] : xff)?.split(',')[0]?.trim();
  return first || (req.headers['x-real-ip'] as string | undefined) || 'unknown';
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return send(res, 405, { ok: false, error: 'Method not allowed.' });
  }

  const origin = req.headers.origin;
  if (!isAllowedOrigin(origin)) return send(res, 403, { ok: false, error: 'Request not allowed.' });

  if (!String(req.headers['content-type'] ?? '').toLowerCase().startsWith('application/json')) {
    return send(res, 415, { ok: false, error: 'Unsupported content type.' });
  }
  if (Number(req.headers['content-length'] ?? 0) > MAX_BODY_BYTES) {
    return send(res, 413, { ok: false, error: 'Request too large.' });
  }

  const body: unknown = req.body;
  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return send(res, 400, { ok: false, error: 'Invalid request.' });
  }
  const data = body as Record<string, unknown>;

  // Honeypot: real users never see or fill this. Pretend success so bots learn nothing.
  if (typeof data.website === 'string' && data.website.trim() !== '') {
    return send(res, 200, { ok: true });
  }

  if (rateLimited(clientIp(req))) {
    res.setHeader('Retry-After', '600');
    return send(res, 429, { ok: false, error: 'Too many messages sent. Please try again in a few minutes or call us.' });
  }

  const startedAt = typeof data.startedAt === 'number' ? data.startedAt : NaN;
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
    return send(res, 400, { ok: false, error: 'Please wait a moment and try sending again.' });
  }

  const result = validateEnquiry(data);
  if (!result.ok) return send(res, 400, { ok: false, error: 'Please check the highlighted fields.', fieldErrors: result.fieldErrors });

  try {
    await processEnquiry({ ...result.value, receivedAt: new Date().toISOString(), origin: origin as string });
  } catch {
    // Details are already logged by processEnquiry.
    return send(res, 502, { ok: false, error: 'We could not send your message right now. Please email or call us instead.' });
  }
  return send(res, 200, { ok: true });
}
