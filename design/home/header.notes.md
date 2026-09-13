# Home — Header / nav bar (node 110:4474)

Screenshot-verified visual description (desktop frame width 1559/1560).

## Layout
- Full-width bar, 1560 x 67 px, background `#10111a` (near-black navy). Top corners square, **bottom-left and bottom-right radius 35px** (a "tab" hanging from the top of the viewport).
- Inner row "Header" (110:4446): left 9px, top 8px, width 1507px, height 50px, horizontal padding 24px, items vertically centered.
- **Logo block (left)**: 50x50 image tile, radius 8px (`assets/logo-mark.jpg` — logo mark on white/light square). 9–10px to the right sits a two-line wordmark:
  - "Природа Света" — Playfair Display Bold 24px, line-height 16.5px, white `#ffffff`.
  - "КОЗЫРЬКИ НАВЕСЫ ЗИМНИЕ САДЫ" — JetBrains Mono Regular 10px, line-height 13.5px, letter-spacing 0.9px, color `#757575`, sits 26px below top of wordmark block.
- **Nav links (center)**: horizontally around x=526–900 (roughly centered in the 1560 bar). Items: Главная, Каталог, Портфолио, Услуги, Контакты.
  - Pill link: padding 8px 14px, radius 30px (full pill), DM Sans Medium 13px, line-height 19.5px (`font-variation-settings: "opsz" 14`).
  - **Active** item (Главная): background `#1d1e24`, text white.
  - **Inactive** items: transparent background, text `#757575`.
  - Gap between pills approx. 0–8px (pill x positions: 526, 599, 672; plain text Услуги at 786, Контакты at 843).
- No CTA button / phone in this bar; right side is empty.

## States
- Active nav pill = `#1d1e24` fill + white text. Hover state presumably same as active (see ui-kit/menu-item-1 and menu-item-2 notes for the component variants "менюшка1"/"менюшка 2").

## Implementation hints
- Implement as flex row: logo left, nav centered (absolute center or grid 1fr auto 1fr), height ~67px, sticky top.
- Bottom radius 35px is the characteristic "dock" shape.
