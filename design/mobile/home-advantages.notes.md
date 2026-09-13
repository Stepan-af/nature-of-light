# Mobile home — Advantages (heading 363:6205, cards strip 487:2137)

Heading (363:6205, x=12, y=2788, 302x67) described from screenshot: **"Наши преимущества" Playfair Display Bold ≈28px `#1a1a1a`** on `#f5f5f5` (mobile uses Playfair, not the desktop "Ancizar Serif").

## Cards strip (487:2137) — y=2876, horizontally scrolling carousel
- Flex row, **gap 11px**, each card **385 x 150** (almost full 402 viewport width with 12px left inset) → only one card visible; implement as `overflow-x: auto; scroll-snap-type: x mandatory`. No pagination dots drawn.
- **Card**: fill `rgba(255,255,255,0.98)`, **border 1px `rgba(0,0,0,0.09)`, radius 14px**.
  - Icon tile at (12, 23): **44x44, radius 10px, fill `rgba(46,125,50,0.08)`, border 1px `rgba(46,125,50,0.13)`**, 20px line icon (stroke `#99A1AF`). All four use the green tint on mobile.
  - Text block padding **54px 13px** (so title starts ≈68px from top), gap 5px:
    - Title (pt 14px): **Playfair Display Bold 17px / 25.5px `#1a1a1a`**.
    - Subtitle (pt 8px): **DM Sans Regular 16px / 17px `#757575`**.
- Content (different from desktop copy!):
  1. Точный замер — Быстрая установка (icon expand arrows = `assets/icon-adv-measure.svg`)
  2. Профессиональный монтаж — Гарантия качества (price-tag icon `icon-adv-factory-part1/2`)
  3. Индивидуальные решения — Уникальный дизайн (plus icon `icon-svc-plus-v/h`)
  4. Соблюдение сроков — Пунктуальность и надежность (clock `icon-adv-warranty-part1/2`)
