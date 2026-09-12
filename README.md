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

## Still needed before launch

- [ ] Real firm bio / About copy from Omuyoma
- [ ] Confirmed practice area list + descriptions (currently placeholder in `src/data/practiceAreas.ts`)
- [ ] Real contact details (phone number is a placeholder in Header/Footer/Contact)
- [ ] Omuyoma's professional photo (About page has a placeholder block)
- [ ] Contact form endpoint — currently points to a placeholder Formspree ID in
      `src/pages/Contact.tsx` (`action="https://formspree.io/f/YOUR_FORM_ID"`);
      create a Formspree account (or swap for another form service) and update it
- [ ] Firm logo, if distinct from what's used on Practice OS letterheads
- [ ] SEO pass: Open Graph image, sitemap.xml, Google Business Profile

## Deployment

New, separate Vercel project (do not deploy into the existing Practice OS project).
`vercel.json` already includes the SPA rewrite needed for client-side routing.

## DNS cutover (do last, after this site is verified on its Vercel preview URL)

- `omuyomaadvocates.co.ke` (root) → this site
- `app.omuyomaadvocates.co.ke` (new subdomain) → existing Practice OS Vercel project
- Update any hardcoded root-domain links inside Practice OS (login redirects, PDF
  letterhead footers, etc.) to point to the new app subdomain
