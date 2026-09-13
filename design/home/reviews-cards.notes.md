# Home — Reviews cards (component symbol "Frame 2121454804", node 635:5237)

Page position x=195, y=2993; frame **1257 x 400, overflow hidden** (a horizontal carousel/strip that is clipped — 5 cards exist, ~3 visible; the last visible card is cut by the page edge → implies horizontal scroll / slider). Ground `#f5f5f5`.

## Strip
- Flex row, **gap 15px**, items vertically centred (cards have different heights: the first card is taller because its subtitle wraps to 2 lines, so it appears ~20px taller and offset up).

## Review card
- Background `#ffffff`, **radius 24px**, **padding 24px**, flex column **gap 24px**, no border, no shadow. Content width 356px → card width ≈ **404px**.
- **Profile block** (gap 2px, line-height normal):
  - Name — **Poppins SemiBold 20px**, color **`#0f1125`** (render shows a Noto-Sans–like fallback; spec is Poppins).
  - Object/subtitle — **Poppins Medium 16px**, color **`#717276`**; e.g. "Объект: остекление лоджии в панельном доме", "замена окон в трёхкомнатной квартире".
- **Divider**: 356px, 1px line, stroke **`#E9EFF5`**, round caps (`assets/review-divider.svg`) — implement as `border-top: 1px solid #e9eff5`.
- **Testimonial wrap** (gap 12px):
  - Rating: 5 stars row 128x24 (`assets/rating-stars-5.svg`), star ~20px each, ~6px spacing, fill orange (see svg fill; render `#FF7A1A`-ish orange).
  - Text — **Poppins Medium 15px, line-height 1.9 (28.5px)**, color `#0f1125`.

## Content
1. Антон — "Объект: остекление лоджии в панельном доме" — "Заказал у ребят холодное остекление лоджии алюминиевым профилем. Главное для меня было — надёжность и шумоизоляция, так как дом выходит на оживлённую улицу."
2–5. Дмитрий — "замена окон в трёхкомнатной квартире" — "Решил поменять старые деревянные окна на пластиковые энергосберегающие. Позвонил в несколько фирм, выбрал эту — по срокам и цене устроили сразу. И не прогадал." (placeholder duplicates)

## Behaviour
Implement as horizontally scrollable row (scroll-snap) or slider; no arrows/dots are drawn in this frame.
