# CLAUDE.md — usechris-final (Portfolio V2)

## Project overview

Personal portfolio for **Chris Okafor**, a freelance Full-Stack Developer. This is Portfolio V2, rebuilt from scratch on the `portfolio-version-2` branch. The site is currently in **"Coming Soon" mode** — the main page is a bare placeholder; layout components (SiteHeader, SiteFooter) have been stripped and are pending rebuild.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 6 |
| Styling | Tailwind CSS 4 (`@import "tailwindcss"` syntax) |
| UI primitives | react-icons, embla-carousel-react |
| Forms | react-hook-form + zod + @hookform/resolvers |
| Email | Resend |
| React | React 19 |

No shadcn/ui. No light/dark toggle — the site is dark-only.

## Design system — "Scarlet Punch" palette

All colours are CSS custom properties defined in [app/globals.css](app/globals.css):

```
--color-background:   #0b0808   /* near-black page background */
--color-surface:      #161111   /* card / panel background */
--color-accent:       #dc3545   /* primary red */
--color-accent-light: #ff3b4e   /* hover / highlight red */
--color-foreground:   #f0ecec   /* primary text */
--color-muted:        #9e8e8e   /* secondary / placeholder text */
```

Use these tokens via Tailwind utilities (e.g. `bg-background`, `text-accent`, `border-surface`). Do not hardcode hex values.

## Typography

Four Google Fonts are loaded via `next/font/google` in [app/layout.tsx](app/layout.tsx) and exposed as CSS variables:

| Variable | Font | Typical use |
|---|---|---|
| `--font-source-code-pro` | Source Code Pro | Body default |
| `--font-russo-one` | Russo One | Display headings |
| `--font-squada-one` | Squada One | Sub-headings / labels |
| `--font-revalia` | Revalia | Decorative / accent text |

Reference them with Tailwind's `font-*` utilities (e.g. `font-russo-one`).

## Directory structure

```
app/
  globals.css          — Tailwind theme tokens + base body styles
  layout.tsx           — Root layout: fonts, metadata, HTML shell
  (pages)/
    layout.tsx         — Site layout wrapper (currently stripped/passthrough)
    page.tsx           — Homepage (currently bare placeholder)
    projects/          — (pending)

shared/
  components/          — All reusable UI and section components
  constants/           — Static data (projects list, nav links, etc.)
  hooks/               — Custom React hooks
  actions/             — Next.js Server Actions (e.g. contact form via Resend)

public/                — Static assets (og-image.png, favicons, etc.)
```

## Key conventions

- **Route grouping**: pages live under `app/(pages)/` so the group segment doesn't appear in the URL.
- **Shared components**: all components go in `shared/components/`, not in `app/`.
- **Server Actions**: contact form email is sent via Resend through a server action in `shared/actions/`.
- **No default exports from barrel files** — import directly from the source file.
- **Tailwind v4**: use the new `@theme` block in CSS for custom tokens, not `tailwind.config.js`. Class names derive automatically from token names.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Metadata / SEO

- Canonical domain: `https://usechris.dev`
- OG image: `/public/og-image.png` (1200×630)
- Twitter handle: `@chris_okafor_x`
- LinkedIn: `https://www.linkedin.com/in/christopher-okafor-17084416b`

## Git

- Active branch: `portfolio-version-2`
- Merge target / main branch: `main`
- Commit author: Christopher Okafor
