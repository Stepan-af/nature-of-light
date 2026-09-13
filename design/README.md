# «Природа Света» — design extraction (Figma → local)

Source: Figma file `BUsHXUP4BQwMVWXWo8x1eQ` (glass canopies / winter gardens manufacturer, RU). Extracted 2026-09-13 with the Figma MCP (`get_design_context`, `get_screenshot`, `get_variable_defs`, `download_assets`) so that the site can be built **without Figma access**.

How to use this folder:
- `*.tsx` = **verbatim** Figma "reference code" (React + Tailwind arbitrary values, absolute positioning). It is a *measurement reference*, not production code. Remote asset URLs were rewritten to `assets/<file>`. Where a frame embedded a header/footer already saved elsewhere, that block is replaced by a comment pointing at the canonical file.
- `*.notes.md` = human-written spec of the rendered visual (layout, spacing, radii, shadows, blur/glass, type, colours, states, cut-out shapes). **Read notes first**, use `.tsx` for exact numbers.
- `screens/` = full-page renders to compare against.
- Node ids (`data-node-id`) are kept for traceability.

---

## File index

### Root
| File | What |
|---|---|
| `metadata.xml` | Full page/layer tree (ids, names, x/y/w/h) — grep it for positions of anything not covered below |
| `tokens.json` | Figma variables (merged from nodes 82:7 and 744:4958) |
| `README.md` | this file |

### `home/` — desktop home page (frame 82:7, 1559/1560 wide)
| File | Node | Section |
|---|---|---|
| `header.tsx/.notes.md` | 110:4474 | Dark top nav bar (bottom radius 35px) |
| `hero.tsx/.notes.md` | 82:42 | Hero photo with boolean cut-out, glass panels, stats, rating blob badge |
| `categories.tsx/.notes.md` | 82:97 | "Что мы строим" — 3 category cards |
| `portfolio.tsx/.notes.md` | 86:1392 | "Более 840 проектов" dark bento grid |
| `advantages.tsx/.notes.md` | 82:264 | "Наши преимущества" — 4 icon cards |
| `reviews-heading.tsx/.notes.md` | 84:942 | "Почему нас выбирают?" |
| `reviews-cards.tsx/.notes.md` | 635:5237 | Review cards carousel |
| `faq-contact-form.tsx/.notes.md` | 473:952 | FAQ accordion + "Остались вопросы?" form card |
| `footer.tsx/.notes.md` | 293:1733 | Global desktop footer (with giant wordmark) |

### `catalog/`
| `catalog.tsx/.notes.md` | 108:2355 | "Наш каталог" title, filter chips, 4-col product grid |

### `portfolio/`
| File | Node | |
|---|---|---|
| `portfolio-list.tsx/.notes.md` | 108:3185 | "Наши работы" filters + 3-col masonry of PortfolioCards |
| `project-detail.tsx/.notes.md` | 148:1410 | Breadcrumbs, gallery + thumbs, parameters card, green CTA card, prev/next |

### `contacts/`
| `contacts.tsx/.notes.md` | 108:2843 | Dark request page: H1, underline form, 3-col contact strip |

### `services/`
| File | Node | |
|---|---|---|
| `services.tsx/.notes.md` | 781:5611 | "Полный цикл работ" — 7 step cards (2-col) + "Дополнительные услуги" band |
| `extra-services.tsx/.notes.md` | 127:5744 | 4x2 extra-service tiles |

### `ui-kit/` — section "web" (744:4958)
| File | Node(s) | |
|---|---|---|
| `main-navigation.tsx/.notes.md` | 740:4922 → 154:302, 154:357, 154:365, 204:2388, 204:2381 | Nav text link states, "Партнёрам", "Заказать", hero CTA buttons (3 states each) |
| `buttons.tsx/.notes.md` | 742:4924 → 280:816, 271:438, 271:459, 271:495, 280:791 | Catalog filter chips, "Оставить заявку", portfolio filter pill, "Подробнее →" |
| `extra-service.tsx/.notes.md` | 613:5190 → 271:599 | Extra-service tile (default / selected) |
| `request-form.tsx/.notes.md` | 613:5192 → 284:960 | Dark underline input (3 states) |
| `text-field.tsx/.notes.md` | 302:3212 | Outlined text field: Default/Hovered/Focused/Error/Field |
| `colors.notes.md` | 658:1594 | Palette swatches (from metadata, no call) |
| `fonts.notes.md` | 817:949 | Brand fonts (from metadata, no call) |
| `menu-item-1.tsx/.notes.md` | 910:1958 | "Каталог" nav item + dark dropdown panel |
| `menu-item-2.tsx/.notes.md` | 910:1988 | "Портфолио" nav item + dropdown |
| `logo.tsx/.notes.md` | 857:929 | Raster logo |
| `button-variants.notes.md` | 901:1663 | **Failed** (node not found) — see notes |
| `mobile-menu.tsx/.notes.md` | 549:1111 | Mobile burger (glass) + open menu panel |

### `mobile/` — 402px frames
| File | Node | |
|---|---|---|
| `home-hero.tsx/.notes.md` | 325:5444 (+ badge siblings) | Mobile hero with cut-out + vertical rating badge |
| `home-category-card.tsx`, `home-categories.notes.md` | 325:5562 (+325:5529/5533/5547 described) | 2-col category cards |
| `home-portfolio.tsx/.notes.md` | 340:5645 | Dark portfolio section (2-col) |
| `home-advantages.tsx/.notes.md` | 487:2137 (+363:6205) | Horizontal advantage cards carousel |
| `home-reviews.tsx/.notes.md` | 487:2191 (+426:10836) | Review cards carousel |
| `home-faq.tsx/.notes.md` | 473:899 | FAQ + form stacked |
| `header-menu.notes.md`, `ios-status-bar.tsx` | 480:1202, 480:1203, 549:1120 | Mobile header (status bar mock is NOT site UI) |
| `catalog.tsx/.notes.md` | 394:7392 | Mobile catalog |
| `project-detail.tsx/.notes.md` | 399:8092 | Mobile project page |
| `portfolio.tsx/.notes.md` | 415:8653 | Mobile portfolio masonry |
| `contacts.tsx/.notes.md` | 421:10337 | Mobile contacts (dark) |
| `services.tsx/.notes.md` | 791:7237 | Mobile services |
| `footer.tsx/.notes.md` | 487:1603 | Mobile footer |

### `screens/`
`home-desktop.png` (1000x3000, downscaled from 1560x4683), `catalog-desktop.png`, `portfolio-desktop.png`, `project-desktop.png`, `contacts-desktop.png`, `services-desktop.png` (all 1x), `home-mobile.png` (402x5212), `catalog-mobile.png`, `project-mobile.png`, `portfolio-mobile.png`, `contacts-mobile.png`, `services-mobile.png` (1x), plus `home-portfolio-section-export.png` and `uikit-photos-section-export.png` (node exports from download_assets).

### `assets/`
97 files + `manifest.json` (`{filename: {sourceNode, description, width, height}}`; width/height = intrinsic pixels, or SVG viewBox). Deduplicated by URL and by SHA-256. Naming: `home-*`, `catalog-*`, `portfolio-*` (`portfolio-hidden-*` are covered base layers — not visible), `project-*`, `mobile-*`, `icon-*`, `logo-*`, `ios-statusbar-*` (phone mock, ignore). `assets/photos/` = 10 original uploaded photos (`home-portfolio-raw-1..10.jpg`; several are byte-identical to files in `assets/`, see manifest). The UI-kit "фотки" section (613:5194) contained the same 10 originals — duplicates removed.

---

## Design tokens summary

### Colours (role → value)
| Role | Value | Where |
|---|---|---|
| Brand / primary green | `#2E7D32` | links "Смотреть всё", prices, chips, CTA card, focus borders, submit text |
| Green (alt) | `#26902B` (filter chip border), `#2D7A3A` (service durations), `#4CAF50` (palette light green), `#92C895` (nav active on dark), `#075B0B` (pressed text) |
| Dark green | `#122211` | palette; tints `rgba(16,42,18,.2)`, `rgba(46,125,50,.08/.13/.2/.42)` |
| Header / nav bg | `#10111A` | top bar; active pill `#1D1E24` |
| Dark section bg | `#0D0D0C` (portfolio bento), `#0E0E0C` (contacts page), `#0A0B09` (footer), `#0F0F10` (dropdown/menu panels) |
| Dark surface | `#373737` | rating badge |
| Heading text | `#1A1A1A` (token Text/Base/Default `#1E1E1E`) |
| Secondary text / muted UI | `#757575` (token Text/Base/Secondary & Border/Base/Secondary) |
| Other greys | `#444444` (tile text), `#717276` (review meta), `#999999`/`#888888` (breadcrumbs, small text), `#9A9A9A` (input placeholder), `#D9D9D9` (palette / burger bars), `#EBEBEA` (tile border), `#E9EFF5` (review divider), `#303030` (form card border, token Border/Neutral/Default) |
| Page background light | `#F5F5F5` (services uses `#FFFFFF` + `#F9FAFB`) |
| Surface | `#FFFFFF` (token Surface/Base/Default); hover `#EFEFEF` |
| Warm off-white on dark | `#F0EFE9` |
| Stars | `#F59E0B` (hero badge), `#FF7F22` (review cards) |
| Error | `#EC221F` (token Text/Border Danger) |
| Hairlines | `rgba(0,0,0,.09)` light; `rgba(255,255,255,.07/.08/.14/.18)` dark |
| Services page gray scale (Tailwind-ish) | `#101828` text, `#6A7282` body, `#D1D5DC` numbers, `#F9FAFB` cards |

### Font families
- **Playfair Display** (400, 400 italic, 500, 700, 800) — all display headings, card titles, prices, stats, wordmark.
- **DM Sans** (300–700, `opsz 14`) — UI and body text, buttons, nav, footer links.
- **JetBrains Mono** (400/500/700) — uppercase eyebrows, chips, footer column labels, form labels.
- **Inter** (400–700) — FAQ, text field, portfolio cards, services page, reviews heading (token Typography/Family/Content).
- **Instrument Serif** (400/italic) — portfolio list H1 & card prices, mobile portfolio heading.
- **Poppins** (500/600) — review cards. **Cousine/Consolas** — service step numbers. **Ancizar Serif** — one H2 (likely a mistake; use Playfair).
- ⚠ DM Sans / Poppins / Instrument Serif have no Cyrillic on Google Fonts — Figma rendered fallbacks. Pick Cyrillic-capable substitutes (see ui-kit/fonts.notes.md).

### Type scale (desktop, px size / line-height)
| Style | Spec |
|---|---|
| Hero H1 | Playfair ExtraBold 56 / 59.92, ls -1.5 |
| Page H1 | Playfair ExtraBold 42/63 ls -1 (catalog) · 55/60 ls -2 (contacts) · Playfair Bold 48/52.8 (services) · Instrument Serif 52/57.2 ls -1 (portfolio) |
| Section H2 | Playfair Bold 38/57 ls -0.5 · Playfair Regular 48/50.4 ls -1.5 (dark bento) · Playfair Regular 32/36 ls -1 (FAQ, token Heading) · Inter SemiBold 36/52 ls -1 (token Title/Page) · Playfair Bold 30/36 |
| Detail H1 | Playfair Bold 28 |
| Card title L | Playfair Bold 22/33 · 17/25.5 · 18/21.6 |
| Card title S | Playfair Bold 15/20.25 · Inter SemiBold 16/22 · Inter SemiBold 13/15.6–19.5 |
| Stat number | Playfair Bold 26/26 · badge 24/33 |
| Price | Playfair Bold 16/24 (green) · 15/22.5 · Instrument Serif 24 |
| Lead | DM Sans 17/28.9 · 15/27 |
| Body | DM Sans 14/22.4 · 13/20.8 · Inter 16/20 · Inter 14/22.75 · Inter 14/18 (lists) |
| Small / meta | DM Sans 12/16.8–18 · 11/16.5 · Inter 10/15 |
| Nav / buttons | DM Sans Medium 13/19.5 · SemiBold 14/21 ls .14 · Bold 14/21 |
| Eyebrow / chip | JetBrains Mono 9–11 / 13.5–16.5, ls 0.66–1.26, uppercase |
| Footer wordmark | Playfair ExtraBold 180/162 ls -5.4, 6% white |
| Mobile | H1 hero 32/35; page H1 30; section H2 ≈28–32; body 14/28.9; many Figma mobile texts are 6–10px (scale up ≥11–12px) |

### Spacing scale
Tokens: **0, 8, 12, 16, 20, 24, 40** (+64 "Massive L"). Observed: 2, 4, 5, 6, 7, 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 40, 44, 48, 56, 60, 64, 72, 80. Common: card padding 16–24; section padding 56–80 top / 48–72 bottom; grid gaps 10–16 (desktop), 10–16 (mobile); column gap in 2-col hero layouts 40–80.

### Radii
Tokens: 0, **8** (Small L), **12** (Small XL), **16** (Base M). Observed: 4 (outline submit, thumbnails mobile), 6 (hero buttons), 7 (logo tile, mobile tiles), 10 (icon tiles, prev/next, active thumb), 12, 14 (advantage/catalog/param/CTA cards), 16 (category cards, tiles), 18–19 (gallery), 20 (FAQ collapsed, chips), 22 (portfolio cards), 24 (FAQ expanded, reviews, bento cards, form card, filter chips), 30 (nav pills, dropdown panel), 35 (header bottom corners), 100 (pills), blob shapes (hero cut-out, rating badge).

### Shadows & effects
- Bento/portfolio card: `0 8px 40px rgba(0,0,0,.28)`; portfolio list card `0 4px 20px rgba(0,0,0,.07)`; tag chip `0 8px 40px rgba(0,0,0,.08)`.
- Mobile primary button drop-shadow `0 2px 4px rgba(46,125,50,.22)`.
- Glass: blurred `#757575` 20% panels (Gaussian blur 7.4 ≈ CSS blur 15px) behind hero text; Figma "GLASS" effect radius 58 on mobile burger; frosted caption gradients on portfolio cards; burger white glow on dark mobile header.
- Ambient green radial glow 500px blur 100px in dark bento (barely visible).

### Container & breakpoints
- Desktop artboard **1559–1560px**; content container **1200px max, 24px side padding → 1152px content**, centred (≈180px outer margin at 1560). Header/footer/dark sections full-bleed.
- Mobile artboard **402px** (iPhone 17); side gutters 12–25px (most content at 12–19px); status bar mock at top 0–48px.
- Implied breakpoints: ≥1200 (desktop layout), ~768–1199 (fluid/tablet – not designed), <768 → mobile layout designed at 402 (use 360–430 range). No tablet frames exist.

---

## Reusable components observed
| Component | Variants / notes | Reference files |
|---|---|---|
| **Header (desktop)** | dark `#10111A` bar, bottom radius 35, logo + wordmark + pill nav (active `#1D1E24`) + Каталог/Портфолио dropdowns | home/header, ui-kit/menu-item-1, menu-item-2, main-navigation |
| **Mobile header + burger menu** | transparent over hero / light pages, glass burger, dark panel | mobile/header-menu, ui-kit/mobile-menu |
| **Footer** | desktop 5-col + giant wordmark; mobile variant | home/footer, mobile/footer |
| **Buttons** | hero glass CTA (3 states) · secondary outline-glass · "Заказать"/"Партнёрам" small · "Оставить заявку" 300px (grey/white) · outline submit "ОТПРАВИТЬ ФОРМУ →" · text button "Отправить" · "Все" outline pill · "Смотреть всё →"/"Подробнее →" links · mobile solid green CTA | ui-kit/main-navigation, ui-kit/buttons, contacts, home/faq-contact-form, mobile/home-hero |
| **Filter chips** | catalog (38px, green outline, active tinted) · portfolio (39px, grey pills, active dark) · mobile small versions | ui-kit/buttons, catalog, portfolio/portfolio-list, mobile/catalog, mobile/portfolio |
| **Badges / tags** | green solid chip w/ white border (catalog) · glass white chip (portfolio) · outline glass chip (bento) · soft green TagBadge (project detail) · uppercase mono label | catalog, portfolio/portfolio-list, home/portfolio, portfolio/project-detail |
| **Cards** | category card · catalog product card · portfolio card (photo + frosted caption) · bento featured card · advantage icon card · review card · service step card · extra-service tile · parameters card · green CTA card · prev/next card · FAQ item | home/*, catalog, portfolio/*, services/*, ui-kit/extra-service |
| **Form fields** | outlined text field (5 states) · dark underline input (3 states) | ui-kit/text-field, ui-kit/request-form, contacts |
| **Accordion (FAQ)** | compact (↓) / expanded (↑ + bullet list) | home/faq-contact-form, mobile/home-faq |
| **Breadcrumbs** | light (DM Sans 13 grey › Playfair current) · dark (white Inter) · services (Inter 15 #999 › #0E0E0E) | portfolio/project-detail, contacts, services |
| **Gallery** | main image + "Открыть" pill + counter + thumbnail strip with active green border | portfolio/project-detail |
| **Rating** | 5 stars row, rating blob badge | home/hero, home/reviews-cards |
| **Stats row** | Playfair number + DM Sans caption | home/hero |
| **Carousels** | reviews & mobile advantages (horizontal scroll) | home/reviews-cards, mobile/home-advantages, mobile/home-reviews |
| **Logo** | raster only | ui-kit/logo |

---

## Figma calls: failures & gaps
Total Figma MCP calls: **66** (2 variable defs, 48 design contexts incl. 2 failures, 14 screenshots incl. 1 retake, 2 download_assets).
1. `get_design_context 910:1958` — first attempt failed: *"The socket connection was closed unexpectedly"* → retried successfully.
2. `get_design_context 901:1663` (Button component variants) — **failed: "The provided node ID was not found in the file"** (deleted after metadata capture). Documented from metadata only in `ui-kit/button-variants.notes.md`.
3. Sections returned **metadata only** (Figma sections can't be exported as code): `740:4922`, `742:4924`, `613:5190`, `613:5192`, `658:1594`, `817:949`, `613:5194` → representative children were extracted instead; colour & font sections documented from metadata without a call.
4. `get_screenshot 325:930` at maxDimension 2000 produced a 155px-wide image; re-taken at 1x (402x5212). Mobile screenshots saved at 1x (server caps at node size); home-desktop is 1000x3000 (per requested maxDimension 3000).
5. One asset download (`textfield arrow`) timed out on first try; retried OK. No asset URLs remain unresolved.
6. Not separately extracted to save budget (described from screenshots/metadata instead): mobile `325:5529`, `325:5533`, `325:5547`, `363:6205`, `426:10836`, `480:1203`, `549:1120`. Footers/headers duplicated inside page frames were omitted from those `.tsx` files (pointer comments left).
7. Content gaps in the design itself: placeholder duplicated cards/reviews, "Что мы строим"/"Наши преимущества" headings reused on wrong mobile sections, no tablet layouts, no explicit hover specs for most cards, logo only raster.
