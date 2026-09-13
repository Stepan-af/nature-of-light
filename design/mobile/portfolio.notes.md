# Mobile portfolio page (frame 415:8653 "iPhone 17 - 4", 402 x 1883)

Reference: `screens/portfolio-mobile.png`. Background `#f5f5f5`. Light header at y=53 (logo + "Природа Света" 14px `#1a1a1a`, burger). Footer instance at y=1445.

- **Title block** (left 19px, top 110px, pt 10px): breadcrumbs "Каталог" DM Sans Regular 10px `#757575` › (Inter 15px `#999`) "Портфолио" DM Sans Medium 13px `#757575`; **H1 "Наши работы" Playfair Display Bold 30px / 57px, ls -0.5px, `#1a1a1a`** (desktop uses Instrument Serif 52px).
- **Filter pills** — two rows (top 182px and 207px), **height 20px, radius 100px, padding 9px 18px, DM Sans Medium 8px / 21px `#757575`**, gaps ≈3–4px:
  - "Все работы" (58px) active: fill `rgba(13,13,12,0.2)`; others fill `rgba(0,0,0,0.06)`: "Козырьки" 58px, "Зимние сады" 66px, "Изделия из стекла" 87px; row 2: "Офисные перегородки" 104px.
- **Masonry, 2 columns x 183px** (x=12–18 and x=205–206, gutter ≈10px), variable heights (Pinterest-style):
  - Col 1: 365px (y=248) → 203 (y=623) → 203 (y=840, x=18) → 317 (y=1056)
  - Col 2: 203 (y=249) → 268 (y=462) → 203 (y=740) → 203 (y=955) → 203 (y=1170)
  - Vertical gap ≈10–14px.
- **Card** (same as desktop home featured card): fill `rgba(255,255,255,0.08)`, **border 1px `rgba(255,255,255,0.14)`, radius 24px, shadow `0 8px 40px rgba(0,0,0,0.28)`**, photo cover.
  - Caption (bottom 80px, padding 16px, frosted grey gradient in render): title **Inter SemiBold 13px / 19.5px `#f0efe9`**; location **Inter Regular 7px / 15px `rgba(255,255,255,0.45)`**; price **Instrument Serif Regular 13px / 24px white** at x=113. (No tag chip on mobile cards.) All cards use placeholder "Атмосфера 42 м² / Красногорск, КП «Гринфилд» / 580 000 ₽".
- Photos: `assets/mobile-portfolio-greenhouse.png`, `-staircase.png`, `-glass-roof-plants.png`, `-skylight.png`, `-brick-house.png`, `-stained-glass.png`, `-spiral-stair.png`, `mobile-portfolio-featured-winter-garden.png`.
