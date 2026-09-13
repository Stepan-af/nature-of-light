# Home — Hero ("Group 6", node 82:42)

Frame position on the 1559px home page: x=190, y=118, size **1181 x 644**. So the hero card is inset ~190px from the left and ~188px from the right edge (content column ≈ 1181px, roughly centered), and starts 118px from the top (51px below the 67px header).

## Background photo with cut-out (boolean "Subtract", 82:43)
- One photo (glass winter-garden interior with plants) clipped by a **boolean Subtract shape**. Exported pre-cut as `assets/home-hero-photo-cutout.png` (2362x1288 = 2x, transparent PNG, includes the cut-out and soft shadow). Use it directly as an `<img>` 1181x644, or rebuild with CSS mask.
- Shape: large rounded rectangle, **corner radius ≈ 48–56px** (visually ~50px at top-left, top-right, bottom-left).
- **Bottom-right notch**: a rounded rectangular bite is removed from the bottom-right corner, about 290px wide x ~210px tall (from x≈1040 to right edge, y≈435 to bottom), with concave inner radii ≈ 40–50px, so the photo "wraps" around the rating badge. A second smaller step lower-right (photo continues below badge as a narrow strip at the very bottom right, ~40px high), i.e. the white gap around the badge is ~12–16px wide and follows the badge contour.
- Top edge right of centre: photo top-right has a similar soft S-curve (the top-right corner is lower than the left, see screenshot: top edge rises at left, right part starts ~20px lower with a smooth ramp at x≈560–620).
- A soft blurred shadow/glow under the bottom-left of the card (warm beige/grey, blur ~30px) is baked into the PNG.

## Left text column (82:46) — absolute left 68px inside hero (x=258.67 page), top 16px, width ~540px
Vertical stack (no gap; spacing via padding-top):
1. **Eyebrow chip**: "ПРОИЗВОДСТВО С 2009 ГОДА · МОСКВА" — JetBrains Mono Regular 10px, line-height 15px, letter-spacing 1.2px, uppercase, white. Behind it a pill 247x25, radius 27px, fill `rgba(217,217,217,0.2)`, blur 0.15px (glass pill). (6px dot container left of it is transparent / invisible.)
2. **H1** (padding-top 20px): "Свет и пространство под открытым небом" — **Playfair Display ExtraBold (800) 56px, line-height 59.92px (1.07), letter-spacing -1.5px**, white, width 546px (wraps to 4 lines in render: "Свет и / пространство / под открытым / небом").
3. **Lead paragraph** (padding-top 20px): DM Sans Regular 17px, line-height 28.9px (1.7), white, width 440px, `font-variation-settings: "opsz" 14`.
4. **Buttons row** (padding-top 36px, gap 12px): two buttons 47px high, padding 12px 24px, radius 6px, label DM Sans SemiBold 14px / 21px, letter-spacing 0.14px, white.
   - "Перейти в каталог" (instance "перейти", 184px wide): code fill `rgba(117,117,117,0.09)`; in the render it reads as dark translucent glass with a 1px light border (white ~20% opacity).
   - "Наши работы" (instance "Btn", 150px wide): code transparent bg + `rgba(255,255,255,0)` border; render shows a darker glass fill (#1e1e1e ~70%) with a thin light border. See ui-kit/buttons + ui-kit/button-variants for variant definitions.
5. **Stats row** (padding-top 44px, gap 32px): three items.
   - Number: Playfair Display Bold 26px / 26px, white ("500+", "14", "30 дн.").
   - Caption (padding-top 4px): DM Sans Regular 12px / 16.8px, white ("реализованных проектов", "лет на рынке", "средний срок изготовления").

### Glass legibility panels (behind text)
Behind H1, paragraph and stats there are **blurred translucent rounded rectangles** (vectors 189:241, 197:336, 197:342): fill `#757575` at 20% opacity, radius ~27px, Gaussian layer blur stdDeviation 7.4 (≈ CSS `filter: blur(15px)`), sizes 523x261, 491x148, 491x121. In the render they read as a soft dark haze/frosted area over the photo on the left ~45% of the hero. Implement as a single `backdrop-filter: blur(...)` + `rgba(117,117,117,.2)` blurred shape, or a left-to-right dark gradient overlay. Assets: `assets/home-hero-blur-panel-h1.svg`, `assets/home-hero-blur-panel-lead.svg`, `assets/home-hero-blur-panel-stats.svg`.

## Rating badge (82:76) — bottom-right, x=857 within hero (page x=1047), y=411 (page 529), 290x161
- Background is a **custom blob shape** (`assets/home-hero-rating-badge-shape.svg`, fill `#373737`): rounded rect with radius 65px on the left corners, ~48px bottom-right, and a **concave notch at the top-right** (circle radius 32.5px cut out at top edge x=180–245 → the shape top steps down 65px on its right third, forming an "ear"). Path: `M212.5 32.5C212.5 50.4 227 65 245 65H251.25C272.6 65 290 82.3 290 103.75V113C290 139.5 268.5 161 242 161H65C29.1 161 0 131.9 0 96V65C0 29.1 29.1 0 65 0H180C197.9 0 212.5 14.55 212.5 32.5Z`.
- Padding 35px 38px; content width 190px.
- "4.9 / 5" — Playfair Display Bold 24px / 33px, white.
- "средняя оценка клиентов" — DM Sans Regular 15px / 18px, white, gap 7px above.
- Stars row: 5x "★" DM Sans 14px / 21px, color **`#f59e0b`** (amber), gap 2px, top offset 58px.
- The badge sits in the photo's cut-out with ~12px white gap around it (white page bg `#ffffff` shows through).

## Colors used
`#ffffff` text; `#373737` badge; `#f59e0b` stars; `rgba(117,117,117,.2)` blur panels; `rgba(217,217,217,.2)` eyebrow pill; `rgba(117,117,117,.09)` button fill.
