# Catalog page body — "Наш каталог" (node 108:2355)

Frame "App" inside the catalog page 108:2353 (1559 wide). Page ground **`#f5f5f5`** (render shows light grey). Header (see home/header) sits above; footer below.

## Container
- Content column **1200px max, padding 48px 24px** → 1152px content, centred (left edge at page x≈200 in this frame; treat as the standard centred 1200 container).

## Title row (108:2390) — height 73px, pt 10px, flex space-between, items aligned bottom
- **H1 "Наш каталог"**: **Playfair Display ExtraBold 42px / 63px, letter-spacing -1px, `#1a1a1a`**.
- **Filter chips** (right, gap 8px): pill buttons **height 38px, padding 8px 18px, radius 24px**, label **DM Sans Medium 13px / 19.5px `#757575`**.
  - **Active ("Все")**: fill **`rgba(16,42,18,0.2)`** (renders as grey-green `#c9cfc9`-ish on light bg), **border 1px `rgba(46,125,50,0.42)`**.
  - **Inactive** ("Козырьки", "Зимние сады", "Лестницы" (fixed 100px wide)): transparent, **border 1px `#26902b`** (green).

## Product grid (108:2403) — top margin 32px
- **4 columns x 276px, gap 16px**, rows 360.5px (2 rows shown, 8 cards).

## Product card
- `#ffffff`, **border 1px `rgba(0,0,0,0.09)`**, **radius 14px**, overflow hidden, no shadow. Whole card is a button/link.
- **Image** 276x**200px**, object-fit cover.
- **Category chip** overlay at (10px, 10px): **height 24.5px, padding 3px 10px, radius 20px, fill `#2e7d32`, border 1px solid white**; text **JetBrains Mono Bold 11px / 16.5px, letter-spacing 0.66px, uppercase, white** ("КОЗЫРЬКИ", "ЗИМНИЕ САДЫ"). Some cards have no chip.
- **Body** padding **16px 16px 18px**, column; title block grows (flex) so price rows align at the bottom across cards.
  - Title: **Playfair Display Bold 15px / 20.25px, `#1a1a1a`**, max 242px, wraps to 2 lines; pb 8px.
  - Availability: **DM Sans Regular 15px / 18px, `#2e7d32`** ("Под заказ" / "В наличие"); pb 4px.
  - Material: **DM Sans Regular 12px / 18px, `#757575`** ("Закалённое стекло 8 мм"); pb 12px.
  - Bottom row space-between: price **Playfair Display Bold 16px / 24px, `#2e7d32`** ("от 45 000 ₽"); link **"Подробнее →" DM Sans Medium 12px / 18px `#757575`**.

## Cards (row1 → row2)
1. Козырёк стеклянный «Классик» — Под заказ — Закалённое стекло 8 мм — от 45 000 ₽ — chip Козырьки — `assets/catalog-kozyrek-klassik.jpg`
2. Зеркальные работы — Под заказ — Поликарбонат 10 мм — от 38 000 ₽ — chip Козырьки — `assets/catalog-zerkalnye-raboty.jpg`
3. Зимний сад «Панорама» — Под заказ — Алюминий + стекло — от 380 000 ₽ — chip Зимние сады — `assets/photo-staircase-glass-railing.jpg`
4. Зимний сад «Мансардный» — Под заказ — Алюминий + триплекс — от 550 000 ₽ — chip Зимние сады — `assets/catalog-zimniy-sad-mansardnyy.jpg`
5. Навес над парковкой — Под заказ — Поликарбонат / Профнастил — от 95 000 ₽ — chip Козырьки — `assets/catalog-naves-parkovka.jpg`
6. Козырёк «Веер» консольный — Под заказ — Дерево / Металл + поликарбонат — от 62 000 ₽ — chip Козырьки — `assets/catalog-kozyrek-veer.jpg`
7. Навес-беседка комбинированный — Под заказ — Дерево / Металл + поликарбонат — от 180 000 ₽ — chip Зимние сады — `assets/catalog-naves-besedka.jpg`
8. Зимний сад «Лёгкий» пристройка — **В наличие** — ПВХ профиль + стекло — от 280 000 ₽ — chip Зимние сады — `assets/catalog-zimniy-sad-legkiy.jpg`
(Several chips in the Figma are absolutely positioned loose layers; in the render every card shows a chip top-left.)

## Interactions
Filter chips toggle active state; card hover not drawn (suggest border-color darken / image zoom).
