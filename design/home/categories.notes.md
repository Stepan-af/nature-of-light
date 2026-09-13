# Home — "Что мы строим" category cards (node 82:97)

Page position: x=180, y=769, 1200 x 533. Section background in the render is light grey **`#f4f4f4`/`#f5f5f5`** (page ground); cards are white.

## Container
- Outer container 1200px wide with **padding 25px top, 24px left/right** → inner content width **1152px** (this 1200/24/1152 container is the site-wide content column; page side margin = (1559−1200)/2 ≈ 180px).
- Section label slot (82:98, 18px high, empty here).
- **H2 "Что мы строим"**: padding-top 10px; Playfair Display Bold **38px**, line-height 57px (1.5), letter-spacing -0.5px, color **`#1a1a1a`**.
- Grid starts after 40px padding-top.

## Grid
- CSS grid, **3 columns (373.33px each), column-gap 16px**, row height 383.28px (cards stretch to equal height).

## Card (data-name "Button" — whole card is clickable)
- Background `#ffffff`, border 1px transparent, **radius 16px**, overflow hidden. No visible shadow in render (flat white on light grey).
- **Image**: full card width (~371px), **height 220px**, object-fit cover (Зимние сады/Козырьки use object-position bottom). Top corners follow card radius 16px; bottom of image is straight.
- **Category tag overlay** on the image: bottom-left (left 16px, top 179.5px → 16px from image bottom), 24.5px high, text padding-left 10px; JetBrains Mono Bold (600 weight in code) **11px**, line-height 16.5px, letter-spacing 0.66px, uppercase, white. Only visible on the "Навесы" card in render (no background chip visible — plain white text over photo; likely a translucent dark chip intended).
- **Body**: padding 20px 20px 22px.
  - Title: Playfair Display Bold **22px / 33px**, `#1a1a1a`.
  - Description (pt 8px): DM Sans Regular **14px / 22.4px (1.6)**, color `#757575`, width ~332px (2–3 lines).
  - Link row (pt 14px, gap 6px, height 34px): "Смотреть всё" + "→" — DM Sans SemiBold **13px / 19.5px**, color **`#2e7d32`** (green accent).

## Content (order in render, left→right)
1. Козырьки — "Стеклянные и поликарбонатные козырьки над входом, балконом, крыльцом. От 45 000 ₽." — `assets/home-cat-kozyrki.png`
2. Зимние сады — "Панорамные застеклённые конструкции — расширяют пространство дома круглый год." — `assets/home-cat-zimnie-sady.png`
3. Навесы — "Навесы над парковкой, террасой, входной группой для частных и коммерческих объектов." — `assets/home-cat-navesy.png`

## Hover
Not shown in this frame. The photo containers are component instances with variants ("ФОТО/Variant3", "Property 1=Default") → implies an image hover variant (e.g. zoom/alternate photo). Suggest subtle image scale 1.03–1.05 and link arrow shift on hover.
