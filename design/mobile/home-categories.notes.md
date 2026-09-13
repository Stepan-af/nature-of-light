# Mobile home — "Что мы строим" categories (nodes 325:5529 heading, 325:5562 / 325:5533 / 325:5547 cards)

Only 325:5562 was extracted via get_design_context (`home-category-card.tsx`); the heading and the two other cards are identical in structure and were described from `screens/home-mobile.png` to save Figma calls.

- Section starts y≈664 on light ground `#f5f5f5`.
- **H2 "Что мы строим"** (325:5529, x=9, 302x67): **Playfair Display Bold ≈28px**, `#1a1a1a` (desktop 38px scaled down; line ~42px).
- **Grid: 2 columns x 183px, column gap 10px (x=12 and x=205), row gap ≈21px** (rows at y=750 and y=1154). Third card "Навесы" wraps to row 2 col 1; right cell empty.
- **Card** 183 x 383: fill `rgba(255,255,255,0.98)`, border 1px transparent, **radius 16px**, overflow hidden.
  - Photo: 182 x **220px**, object-fit cover (component "ФОТО фобилка" — mobile photo variant). Козырьки: mobile export `assets/mobile-cat-kozyrki.*`; for Зимние сады / Навесы reuse `assets/home-cat-zimnie-sady.png` / `assets/home-cat-navesy.png` with object-fit cover.
  - Body padding **20px 20px 22px**:
    - Title **Playfair Display Bold 15px / 33px `#1a1a1a`**.
    - Description (pt 8px) **DM Sans Regular 8px / 16px `#757575`**, width 165px (3 lines). ⚠ 8px is below legible size — recommend 11–12px on implementation.
    - Link (pt 14px, gap 6px): "Смотреть всё →" **DM Sans SemiBold 13px / 19.5px `#2e7d32`**.
  - NOTE: the third card ("Навесы", 325:5547) in the render uses larger body text (~15px / 22px `#757575`, title ~22px) and its description overflows — the file is inconsistent; follow the 325:5562 spec.
- Content: Козырьки / "Стеклянные и поликарбонатные козырьки над входом, балконом, крыльцом. От 45 000 ₽." · Зимние сады / "Панорамные застеклённые конструкции — расширяют пространство дома круглый год." · Навесы / "Навесы над парковкой, террасой, входной группой для частных и коммерческих объектов."
