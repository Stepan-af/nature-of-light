# Home hero — v2 (Figma node 82:42, 2026-09-26)

Designer: «сделал плашку более читаемой, уменьшил блюр, растянул фотку… слишком много пустого пространства».

## Geometry (desktop artboard 1560)
- Card (boolean `Subtract` 82:43): x 0, 1559×644, image fill FILL (cover) of the original photo, 1280×960 (imageRef `f227fffd…`). There is no higher-res original.
- Corners: TL r≈80, TR r≈80–88, BL r≈70.
- Badge notch, measured from the 2× mask: a band y 394–594 (200px high) open to the right edge, starting at x≈1111.5 (447.5px from the right).
  - notch top-left concave r≈70, bottom-left r≈80; the upper part's bottom-right corner r≈80;
  - the 50px bar under the notch: top-right r≈20, bottom-right r≈24.
- Rating badge (82:76): frame 378×161 at x 1131.7, y 411 in the card (bottom 72). Visible shape is still the 290×161 blob (same path as `rating-badge-shape.svg`), so right offset ≈ 137px.

## Text column (82:46)
- x 90.65, y 16 in the card; frame 712×555. Title text box 546 wide, 56px Playfair ExtraBold, lh 59.92, ls −1.5 (the render wraps it to 4 lines).
- Eyebrow pill: `rgba(117,117,117,0.58)` (was 217/0.2 — more readable).
- Panels behind title / lead: `#757575` 12%, stats panel 20%, all with a soft edge (foreground blur σ 7.4). Blur behind the text reduced compared with v1.
- «Перейти в каталог» button bg `rgba(117,117,117,0.09)`; «Наши работы» transparent border.

## Implementation notes
- The card is `max-width: 1559px` with the page gutter, so it is ~1392px wide at 1440 and 1512px at 1560.
- Below 1200px the v1 notch (345px wide, badge right 34px) is kept so the text column has room; below 1024px the vertical badge.
