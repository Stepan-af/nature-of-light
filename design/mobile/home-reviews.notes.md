# Mobile home — Reviews (heading 426:10836, cards strip 487:2191)

Heading 426:10836 (x=12, y=3047, 302x67) from screenshot: the Figma frame literally repeats **"Наши преимущества"** (copy error) in Playfair Display Bold ≈28px `#1a1a1a`; intended text is the reviews title (desktop: "Почему нас выбирают?").

## Cards strip (487:2191) — y=3135, horizontal carousel
- Flex row **gap 19px**; cards **383 x 173** (one visible per viewport, 12px left inset) → scroll-snap carousel.
- **Card**: fill `rgba(255,255,255,0.98)`, **radius 24px**, **padding 23px 39px 17px 7px** (asymmetric in Figma; use ~20px all round), no border/shadow.
  - Name: **Poppins SemiBold 12px `#0f1125`**; object line (gap 2px): **Poppins Medium 10px `#717276`** (wraps at 165px).
  - Stars (gap 8px below): 128x24 row, fill `#FF7F22` (`assets/rating-stars-5-mobile.svg`).
  - Divider (gap 6px): 315px 1px `#E9EFF5` (`assets/review-divider-mobile.svg`).
  - Text: **Poppins Medium 10px, line-height 1.52, `#0f1125`**.
- 4 duplicate cards ("Антон — Объект: остекление лоджии в панельном доме — Заказал у ребят холодное остекление лоджии алюминиевым профилем…").
