# Природа Света — сайт

Static marketing site for a manufacturer of glass canopies (козырьки), carports (навесы) and winter gardens (зимние сады). Russian only. SEO and speed are the top priorities.

## Stack
- **Astro 7** (static output, `trailingSlash: 'always'`, `build.format: 'directory'`), TypeScript strict.
- Plain CSS: global tokens in `src/styles/tokens.css`, component styles in scoped `<style>` blocks. No Tailwind, no UI frameworks, no client-side frameworks.
- Content: Astro content collections (`src/content.config.ts`) backed by files in `src/content/`. Edited by **Sveltia CMS** at `/admin/` (`public/admin/config.yml` must mirror the schemas).
- **No forms, no server code.** The company doesn't want to hold personal data: visitors reach it only via WhatsApp / Telegram links (`<MessengerLinks>`). Don't add forms, lead capture, or anything that stores visitor data.
- Fonts via the Astro Fonts API (`astro.config.mjs`): `--font-display` Playfair Display, `--font-body` Inter (replaces DM Sans from Figma — no Cyrillic), `--font-mono` JetBrains Mono. Never use DM Sans / Poppins / Instrument Serif; map them to Inter / Inter / Playfair Display.
- Analytics: intentionally **off**. Don't add counters.

## Commands
- `npm run dev` — or `npx astro dev --background` (then `astro dev stop|status|logs`). Dev server: http://localhost:4321
- `npx astro check` — must report 0 errors and 0 warnings.
- `npx astro build` — must succeed.

## Design source
`design/` holds everything extracted from Figma — **read `design/README.md` first**. For each section there is `*.notes.md` (spec: layout, sizes, colors, states) and `*.tsx` (Figma reference code: React + Tailwind with absolute positioning — a measurement reference, never copy it as-is). Full-page renders are in `design/screens/`. Assets are in `design/assets/` (`manifest.json` describes them).
- Copy the assets you need into `src/assets/<area>/` (processed by `astro:assets`) or into a content bundle. Never reference `design/` from `src/`.
- Icons: use the exported SVGs from `design/assets/` (import as components: `import Icon from '@/assets/icons/x.svg'`). Don't draw your own SVG paths.
- Figma mobile frames often use 6–10px text — scale it up to ≥12px (body ≥14px).
- There are no tablet frames: layouts must be fluid between 768 and 1199px.
- The design has placeholder/duplicated copy. Use the Figma text as seed content and keep inconsistencies as they are (the client will fix them in the CMS).

## Conventions
- Breakpoints (literal values in `@media`): mobile `max-width: 767.98px`, tablet `max-width: 1199.98px`. Header switches to burger below 1024px.
- Container: `.container` (1200px + gutters). Section vertical padding: `.section` or `var(--section-pad)`.
- Use tokens from `tokens.css` (`var(--color-green)`, `var(--radius-lg)`, …). If a one-off value from Figma isn't a token, hard-code it in the component's scoped style — don't add tokens without need.
- Images: always `<Image>`/`<Picture>` from `astro:assets` with explicit `widths`/`sizes` for anything larger than an icon; `loading="eager"` + `fetchpriority="high"` only for the LCP image (home hero, page hero). Every content image needs meaningful `alt` in Russian.
- Semantic HTML: one `<h1>` per page, sections with headings, lists as `<ul role="list">`. Astro 7's compiler rejects invalid HTML nesting and strips whitespace between tags JSX-style — add `{' '}` where inline elements need a space.
- JS: only where needed (`<script>` in the component, TypeScript, no libraries). Everything must work without JS except carousels and the gallery lightbox.
- URLs are Latin transliterated slugs; content ids = folder names.
- Prices: `formatPrice` / `formatPriceFrom` from `src/lib/site.ts`. Phone links: `phoneHref()`. Contacts, stats, social links: `settings` from `src/lib/site.ts` (`src/content/data/settings.json`).
- Page SEO: every page passes `title` and `description` to `BaseLayout`. Breadcrumbs via `<Breadcrumbs>` (emits BreadcrumbList JSON-LD). Other JSON-LD via `<JsonLd data={...} />`.

## Shared building blocks (Phase 0 — change only with a clear reason)
- `src/layouts/BaseLayout.astro` — `<html>`, fonts, `<Seo>`, `<SiteSchema>`, header, footer. Props: SEO props + `tone: 'white' | 'light' | 'dark'` (page background).
- `src/components/layout/Header.astro`, `Footer.astro`
- `src/components/ui/Button.astro` — variants `glass | ghost | primary | light | outline`, sizes `sm | md`, renders `<a>` when `href` is set.
- `src/components/ui/Breadcrumbs.astro` — `items: {label, href?}[]`, `tone: 'light' | 'dark'`.
- `src/components/seo/Seo.astro`, `JsonLd.astro`, `SiteSchema.astro`
- `src/lib/site.ts`, `src/styles/tokens.css`, `src/styles/global.css` (utilities: `.container`, `.section`, `.eyebrow`, `.section-title`, `.visually-hidden`)
- `src/content.config.ts` — collection schemas.

## Routes
| URL | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/catalog/` | `src/pages/catalog/index.astro` |
| `/catalog/<category>/` | `src/pages/catalog/[category]/index.astro` |
| `/catalog/<category>/<product>/` | `src/pages/catalog/[category]/[product].astro` |
| `/portfolio/` (filters: `?type=residential\|commercial`, `?category=<id>`) | `src/pages/portfolio/index.astro` |
| `/portfolio/<project>/` | `src/pages/portfolio/[project].astro` |
| `/uslugi/` | `src/pages/uslugi.astro` |
| `/kontakty/` | `src/pages/kontakty.astro` |
| `/politika-konfidencialnosti/`, `/rekvizity/` | `src/pages/*.astro` |
| `/404` | `src/pages/404.astro` |
| `/admin/` | `public/admin/` (Sveltia CMS, noindex) |

## Contacts
- `src/components/ui/MessengerLinks.astro` — WhatsApp + Telegram buttons. Props: `message` (prefilled WhatsApp text, e.g. the product/project name + URL), `tone: 'light' | 'dark' | 'green'`, `details` (show number/username), `stack`.
- Links come from `settings.social.whatsapp` / `settings.social.telegram`; display values from `settings.messengers` (`src/content/data/settings.json`, editable in the CMS).

## File ownership (parallel agents)
Agents work in the same tree at the same time. **Only edit files you own.** If you need a change in a shared file, describe it in your final report instead of editing it.
- **Home:** `src/pages/index.astro`, `src/components/home/**`, `src/assets/home/**`, `src/content/data/{reviews,faq,advantages}.json`
- **Catalog & Portfolio:** `src/pages/catalog/**`, `src/pages/portfolio/**`, `src/components/catalog/**`, `src/components/portfolio/**`, `src/assets/catalog/**`, `src/assets/portfolio/**`, `src/content/products/**`, `src/content/projects/**`
- **Services, Contacts, legal:** `src/pages/{uslugi,kontakty,politika-konfidencialnosti,rekvizity,404}.astro`, `src/components/services/**`, `src/components/contacts/**`, `src/assets/services/**`, `src/assets/contacts/**`, `src/content/data/{service-steps,extra-services}.json`
- **Infrastructure:** `public/admin/**`, `src/pages/robots.txt.ts`, `public/.htaccess`, `public/og-default.jpg`, favicons in `public/`, `src/components/seo/SiteSchema.astro`, `src/lib/schema.ts`, `.github/**`, `docs/**`
