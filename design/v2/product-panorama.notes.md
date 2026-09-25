# Product page «Зимний сад Панорама» (Figma v2)

File `BUsHXUP4BQwMVWXWo8x1eQ`. Desktop frame `1002:1522` (1559×6209), mobile frame `1048:942` (402×6913).
Renders: `product-panorama-desktop.png`, `product-panorama-mobile.png`. Reference code: `product-panorama.tsx`.
Implemented in `src/pages/catalog/[category]/[product].astro` + `src/components/product/`.

Content width on desktop is **1391px** (84px side padding) — wider than the site `.container` (1200px),
so the page uses its own `.pd-container` (`src/components/product/product.css`).

Common colours: page `#f6f6f4`, dark band `#111018`, heading `#1a1a1a` / `#111018`, muted `#717770`,
table lines `#d8ddd7`, «Характеристики» background `#eceeeb`. Section headings: Playfair Display Bold 42/52, −1px.
Body 15/1.55. Fonts: DM Sans → Inter.

## 1002:1538 Первый экран (bg #f6f6f4, pt 28, pb 72, gap 28)
- Breadcrumbs centred, 11px `#717770`: «Главная / Каталог / Зимние сады».
- Row gap 16: gallery 900×684 + purchase card (flex 1 ≈ 475, h 684).
- Gallery: thumbnail column 120px, thumbs 120×104 r8, gap 12 (6 thumbs); main photo 764×684 r14, padding 20:
  badge top-left (bg rgba(17,16,24,.8), pill, 10px white uppercase «ЗИМНИЙ САД»),
  counter bottom-left (bg rgba(255,255,255,.87), pill, camera icon 14px + «1 / 6», 11px).
- Purchase card: white, r14, padding 38, gap 24, shadow `0 12px 36px rgba(17,16,24,.07)`.
  - Title Playfair Bold 48/52.8, −1px, #111018.
  - Lead 15/1.55 #717770.
  - Price: label JetBrains Mono 11px, ls 1px, uppercase «СТОИМОСТЬ ПРОЕКТА»; value Playfair Bold 38 «от 470 000 ₽».
  - 3 rows (border-top #d8ddd7, py 13, 12px): Профиль — Тёплый алюминий; Стекло — Закалённое / триплекс; Размер — По вашему проекту.
  - Button (UI kit 1075:1687 «кнопка для доп страницы»): 38px, border 1px #26902b, r24, px18, DM Sans Medium 13 #757575,
    «Оставить Заявку и Расчитать стоимость →». Hover: bg rgba(35,115,39,.12); pressed: bg rgba(26,56,28,.19).
  - Note 12px #717770: «Замер и визуализацияю. Гарантия на конструкцию- 5 лет» (typos fixed in content).
- Mobile: no breadcrumbs; gallery = 3 thumbs column (~120 wide) + main photo (~209×340); card below full width, padding ~38, title 26px.

## 1002:1575 Преимущества (bg #111018, py 82, gap 44)
- Title centred, Playfair 42/52 white.
- 4 cards in a row, gap 18: border-top rgba(255,255,255,.15), pt 24, pr 24, gap 16; icon 28px (sun, file-braces, wrench, shield-check, stroke #DCEBDD);
  title Playfair Bold 22 white; text 13/1.5 rgba(255,255,255,.6).
- Mobile: title left-aligned 26px, one card visible (carousel) → implemented as scroll-snap row.

## 1002:1594 Подробности (bg #f6f6f4, py 104, gap 78)
- Block 1: image 820×600 r14 left, text right (gap 16): title, text, italic quote (Playfair Italic 24/1.25), pill «Смотреть портфолио →».
- Block 2: text left, image 820×540 right: title, text, facts row gap 42: value Playfair Bold 32 black, label 11px muted.
- Mobile: image on top (345×~600 / 540), text below.

## 1002:1617 Характеристики (bg #eceeeb, py 104, gap 80)
- Left 520px: title + text (gap 20), image 520×280 r14, two previews 181×137 / 185×141 r20 (opacity .6 in Figma — rendered at full opacity).
- Right: table rows border-top #d8ddd7, py 21, 13px; label w230 #717770, value SemiBold #111018.
- Mobile: previews in a horizontal row (second one cut off), table label column ~105px.

## 1002:1649 Комплектация = «От эскиза до готового пространства» (bg white, py 104, gap 52)
- Title left. Row: image 720×470 r14 + steps list (flex 1): border-top #d8ddd7, py 24, gap 18;
  number Playfair Regular 18 #2e7d32 w32; title Playfair Bold 22; text 13/1.5 muted.

## 1002:1680 Вопросы и ответы (bg #f6f6f4, py 104, gap 32, centred)
- Info 360px: title **Inter Bold 36** «О зимнем саде - коротко», text 16/24 #757575.
- List 740px, gap 12: white cards r20 (open r24), p24, question 16/20 #757575, answer list 14/18 #1e1e1e, arrow icons 24px.
- Design duplicates questions (demo copy); content keeps 4 distinct questions.

## 1002:1712 Финальный призыв (1559×520, py 76)
- Photo cover + overlay rgba(7,16,11,.71); title Playfair Bold 60/64, −1.5px, white, width 840, bottom-left.
- Not present in the mobile frame (kept on mobile at a smaller size).
