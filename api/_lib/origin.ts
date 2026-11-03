const PRODUCTION_ORIGINS = new Set([
  'https://omuyomaadvocates.co.ke',
  'https://www.omuyomaadvocates.co.ke',
  'https://omuyoma-website.vercel.app',
]);
// Vercel preview deployments, e.g. https://omuyoma-website-git-branch-team.vercel.app
const VERCEL_PREVIEW_RE = /^https:\/\/[a-z0-9-]+\.vercel\.app$/;
// Local `vercel dev` / vite only, never in production.
const LOCAL_RE = /^http:\/\/(localhost|127\.0\.0\.1):\d{2,5}$/;

/**
 * Browsers always send Origin on cross-origin and same-origin POST fetches. This is a
 * CSRF/drive-by-abuse check, not a security boundary: non-browser clients can forge it.
 */
export function isAllowedOrigin(origin: string | undefined): boolean {
  if (!origin) return false;
  if (PRODUCTION_ORIGINS.has(origin) || VERCEL_PREVIEW_RE.test(origin)) return true;
  return process.env.VERCEL_ENV !== 'production' && LOCAL_RE.test(origin);
}
