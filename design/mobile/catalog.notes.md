# Mobile catalog page (frame 394:7392 "iPhone 17 - 2", 402 x 2329)

Reference: `screens/catalog-mobile.png`. Background **`#f5f5f5`**. Status bar mock at top (ignore). Footer instance at y=1891 (see mobile/footer).

## Header (light variant, 480:1205) — y=56, left 25px, width 348px
- Logo tile **40x40, radius 7px** (image scaled 129% / offset -14.5% inside → cropped logo) + gap 8px + "Природа Света" **Playfair Display Bold 14px / 21px `#1a1a1a`** (dark text on light pages).
- Burger "Menu" (549:1112 Variant1) right-aligned at top 56px: glass button fill `rgba(82,82,77,0.33)`, radius 8px, 3 bars `#d9d9d9` (on light bg render shows grey glass pill).

## Title block (394:7743) — left 25px, top 96px, 302x67, pt 11px
- Breadcrumbs (gap 7px, Inter Regular, line-height 16px): "Главная" **10px `#999`** › **15px `#999`** "Каталог" **12px `#0e0e0e`**.
- **H1 "Что мы строим"** (copy differs from desktop "Наш каталог"): **Playfair Display Bold 30px, ls -0.5px, `#1a1a1a`** (line box 31px; top ≈ 128px).

## Filter chips row (top 169px): gap 6px, height 22px, radius 24px, padding 8px 18px, **DM Sans Medium 10px / 19.5px `#757575`**
- "Все" (left 125px, 37px wide, padding 8px 8px 8px 9px): **active** — fill `rgba(16,42,18,0.2)`, border 1px `rgba(46,125,50,0.42)`.
- "Козырьки" (60px) default: border 1px `#26902b`.
- "Зимние сады" (74px) hover variant: fill `rgba(35,115,39,0.12)`, border 1px `rgba(0,0,0,0.09)`.
- "Лестницы" (66px) default: border 1px `#26902b`.
- NOTE: row starts at x=125 in Figma (overlapping title area); implement as a horizontally scrollable chip row below the H1 starting at the 12–25px gutter.

## Product grid
- **2 columns x 183px** at x≈13 and x≈203 (50%+1px) → gutter ≈7px, side margins ≈13px; **rows at y = 207, 612, 1013, 1423 → row pitch ≈405px (card 383 + gap ≈22px)**. 8 cards (Козырьки in col 1, Зимние сады in col 2, repeated placeholders).
- **Card** 183 x 383: white, border 1px transparent, **radius 16px**, overflow hidden.
  - Photo 182 x 220 (object-fit cover; col 1 `assets/mobile-cat-kozyrki.png`, col 2 `assets/home-cat-zimnie-sady.png` object-position bottom).
  - **Chip** top-left (≈10px,11px): fill `#2e7d32`, border 1px white, radius 20px, padding 3px 10px, height 24.5px, **JetBrains Mono Bold 8px / 16.5px, ls 0.66px, uppercase, white** ("КОЗЫРЬКИ").
  - Body padding 20px 20px 22px: title **Playfair Display Bold 15px / 33px `#1a1a1a`**; description (pt 8px) **DM Sans Regular 8px / 16px `#757575`** (width 165 / 129px); link (pt 14px, gap 6px) "Смотреть всё →" **DM Sans SemiBold 8px / 19.5px `#2e7d32`**.
  - ⚠ Text sizes 8px are too small for real devices — scale to ≥11–12px, keep proportions.
  - Mobile catalog cards show NO price/availability/material rows (unlike desktop catalog cards) — consider reusing desktop card content at mobile scale.
