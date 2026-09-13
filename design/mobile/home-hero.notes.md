# Mobile home — Hero (node 325:5444 "Group 6", frame 325:930 "iPhone 17 - 1", 402 wide)

Reference render: `screens/home-mobile.png` (top 633px). Status bar (9:41, notch) is part of the iPhone frame, not the site.

## Photo with cut-out
- Full-bleed **402 x 633** photo, pre-clipped by Subtract boolean: `assets/mobile-hero-photo-cutout.png` (804x1266 @2x, transparent).
- Shape: **top corners square (bleeds under status bar/header)**; **bottom-left radius ≈ 40px**; right edge has a **notch** around the rating badge: photo recedes from x≈296 between y≈390 and y≈580 with concave radii ≈ 40px, then a narrow strip of photo continues to the bottom-right corner (bottom-right radius ≈ 40px). Separation gap from badge ≈ 10–12px (page background `#f5f5f5` shows through).

## Header over hero (instance 480:1202, see mobile/header-menu)
- Logo tile ~40x40 radius 8px at (28, 58) + "Природа Света" Playfair Display Bold ~16px white; burger glass button (46x30) at right (x≈332, y≈72).

## Text column (325:5448) — left 23px, top 16px, width 251px
- **H1** "Свет и пространство под открытым небом": **Playfair Display ExtraBold 32px / 35px, letter-spacing -1.5px, `rgba(255,255,255,0.98)`**, width 225px, top 125px (4 lines).
- **Lead** (top ≈ 277px): **DM Sans Regular 14px / 28.9px, `rgba(255,255,255,0.98)`**, width 319px (3 lines, extends beyond the 251px column).
- **Buttons** (top ≈ 385px, gap 12px), both **height 28px, radius 6px**, label **DM Sans SemiBold 10px / 21px, ls 0.14px, white**:
  - "Перейти в каталог": **solid fill `#2e7d32`**, padding 12px 7px 12px 6px, **drop-shadow 0 2px 4px rgba(46,125,50,0.22)**. (Mobile uses the solid green primary — differs from the desktop glass button.)
  - "Наши работы": transparent, width 88px, padding 0 24px; render shows **dark glass fill (~`rgba(0,0,0,0.45)`) with 1px light border `rgba(255,255,255,0.35)`**.
- **Stats row** (top ≈ 442px, gaps 1px/13px): number **Playfair Display Bold 14px / 26px**; caption **DM Sans Regular 10px / 16.8px** (wraps to 2 lines, widths 84/67/94px). "500+ реализованных проектов", "14 лет на рынке", "30 дн. средний срок изготовления".
- Glass legibility panels: blurred `#757575` 20% rounded rects behind H1, lead and stats (`assets/mobile-hero-blur-panel-h1.svg`, `-lead.svg`, `-stats.svg`) — in the render they read as a soft dark haze over the upper-left.

## Rating badge (siblings outside the group: 325:5483 Subtract 93x176 at (296,401), text 325:686, 325:685, 325:5516)
- **Vertical blob 93 x 176, fill `#373737`**, fully rounded top & bottom (radius ≈ 40px) with a small concave notch at top-right (mirrors the desktop badge rotated to portrait).
- "4.9 / 5" **Playfair Display Bold ~16px white** (centred at y≈436); "средняя оценка клиентов" **DM Sans Regular ~12px / 18px white**, 3 lines; 5 stars **`#f59e0b`** ~12px each at y≈531.
