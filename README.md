# mackonnerdy.com

Personal brand website for **Mackonner Dy** — professional pickleball player.
_Play With Purpose. Compete With Faith._

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

- `src/app/` — routes: `/` (home), `/about` (journey + results), `/media`
  (media & partners), `/coaching`, `/contact`.
- `src/components/` — `Header`, `Footer`, `HeroVideo` (ambient hero),
  `Reveal` (scroll animation), `ContactForm`, `Placeholder`, `ui` (Container/CTA/Eyebrow).
- `src/content/*.ts` — **all copy lives here.** Edit these to update the site;
  no need to touch JSX.
- `public/media/` — real photos/video go here. See
  [`public/media/README.md`](public/media/README.md) for exact filenames; the
  site shows styled placeholders until files are added.

## Media

The homepage hero expects `public/media/hero/hero.mp4` (+ optional
`hero-poster.jpg`). It's muted, looping, and veiled to stay ambient. Until the
file exists, a styled court backdrop shows in its place.

## Deploy

**Netlify** — `netlify.toml` is included (uses `@netlify/plugin-nextjs`). Connect
the repo and deploy; no extra config.

**Vercel** — zero-config; import the repo and deploy.

The contact form is wired for **Netlify Forms** (`data-netlify`) and falls back
to a `mailto:` action elsewhere.
