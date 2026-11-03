# Omuyoma & Co. Advocates — Marketing Website

Public marketing site for Omuyoma & Co. Advocates, separate from the Practice OS
client portal (`code-kindness-lab` repo). This site is intentionally static — no
Supabase, no auth — and is meant to live at the root domain once DNS is switched,
with Practice OS moving to `app.omuyomaadvocates.co.ke`.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite` — no `tailwind.config.js` / `postcss.config.js`)
- `react-router-dom` for client-side routing

## Structure

```
src/
  components/   Header, Footer, Layout (shared chrome)
  pages/        Home, About, PracticeAreas, Contact
  data/         practiceAreas.ts — placeholder copy, swap for Omuyoma's confirmed list
```

## Local development

```
npm install
npm run dev
```

`npm run dev` serves only the front end. To test the contact form locally run
`vercel dev` with a `.env.local` (see `.env.example`).

## Contact form backend

`POST /api/contact` (`api/contact.ts`) validates the enquiry, applies a honeypot,
minimum-fill-time, Origin and per-IP rate check, then emails the firm through Resend.
Delivery is a list of "sinks" in `api/_lib/handlers.ts`; add a sink there to also save
enquiries to the office app's database.

Environment variables (Vercel → Settings → Environment Variables; never commit values):

- `RESEND_API_KEY` — Resend key with sending access only
- `CONTACT_TO_EMAIL` — inbox(es) that receive enquiries (comma-separated for several)
- `CONTACT_FROM_EMAIL` — e.g. `Omuyoma Website <website@omuyomaadvocates.co.ke>`

## Still needed before launch

- [ ] Real firm bio / About copy from Omuyoma
- [ ] Confirmed practice area list + descriptions (currently placeholder in `src/data/practiceAreas.ts`)
- [ ] Real contact details (phone number is a placeholder in Header/Footer/Contact)
- [ ] Omuyoma's professional photo (About page has a placeholder block)
- [ ] Partners to approve the confidentiality note on the contact form (`src/pages/Contact.tsx`)
- [ ] Firm logo, if distinct from what's used on Practice OS letterheads
- [ ] SEO pass: Open Graph image, sitemap.xml, Google Business Profile

## Deployment

New, separate Vercel project (do not deploy into the existing Practice OS project).
Routes are prerendered at build time (`scripts/prerender.mjs`); `api/` holds the serverless functions.

## DNS cutover (do last, after this site is verified on its Vercel preview URL)

- `omuyomaadvocates.co.ke` (root) → this site
- `app.omuyomaadvocates.co.ke` (new subdomain) → existing Practice OS Vercel project
- Update any hardcoded root-domain links inside Practice OS (login redirects, PDF
  letterhead footers, etc.) to point to the new app subdomain
