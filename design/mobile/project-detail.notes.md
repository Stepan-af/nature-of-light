# Mobile project detail (frame 399:8092 "iPhone 17 - 3", 402 x 1102)

Reference: `screens/project-mobile.png`. Background `#f5f5f5`. Light header (logo 40x40 radius 7 + "Природа Света" Playfair Display Bold 14px `#1a1a1a`, burger right) at y=56. Footer instance at y=664.

⚠ This frame is a **scaled-down 2-column copy of the desktop layout** (text 7–10px) rather than a true mobile layout. Recommended implementation: single column — gallery, thumbnails, title/tag, parameters card, CTA card, prev/next — reusing desktop component styles at 100% size. Measured values from Figma:

- **Breadcrumbs** (left 16px, top 108px, gap 8px): "Каталог" DM Sans Regular 10px `#757575` › (13px, opacity .4) "«Классик» ×3 для ЖК" DM Sans Regular 10px `#1a1a1a`.
- **Left column (x=20)**:
  - Main image **195 x 275, radius 19px** (object-fit cover, photo `assets/project-gallery-main-glass-dome.jpg`).
  - Thumbnails **2x2 grid, 94 x 69, radius 4px, gap ≈7px** (rows y=422/498; `assets/project-gallery-thumb-3.jpg`).
- **Right column (x≈245, width 163px)**:
  - H1 "Классик» ×3 для ЖК" **Playfair Display ExtraBold 13px / 32.2px, ls -0.5px** (desktop: Bold 28px).
  - Parameters card: white, border 1px `rgba(0,0,0,0.09)`, **radius 14px**, padding 20px; label "ПАРАМЕТРЫ ПРОЕКТА" DM Sans Regular 9px ls 1.08px uppercase `#757575`; rows ≈43–44px with 1px bottom border `rgba(0,0,0,0.09)`: key DM Sans Regular 8px `#757575`, value Playfair Display Bold 10px `#1a1a1a` (Стоимость 74 700 ₽ · Площадь 3×4.5 м · Город Москва · Год 2024 · Срок монтажа 5 дней). Card gap to CTA 5px.
  - CTA card: **fill `#2e7d32`, radius 14px**, 163x91; title "Хотите похожую конструкцию?" Playfair Display Bold 8px white; sub "Рассчитаем стоимость и сроки — бесплатно" DM Sans Regular 8px / 12px `rgba(255,255,255,0.75)` centred; button **white, radius 8px, 142x24, "Оставить заявку" DM Sans Bold 9px `#2e7d32`** (uses the Variant2 white button).
  - Prev/Next (top 531px): two white cards, border 1px `rgba(0,0,0,0.09)`, **radius 10px**; labels "ПРЕД."/"СЛЕД." JetBrains Mono Regular 9px ls 0.72px `#757575`; titles DM Sans SemiBold 7px `#1a1a1a`.
- No "О проекте" description block on mobile (present on desktop).
