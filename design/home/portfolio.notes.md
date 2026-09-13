# Home — Portfolio dark bento ("HomePortfolio", node 86:1392)

Page position y=1394, full-bleed **1560 x 921**, background **`#0d0d0c`** (warm near-black). Sits directly after the category cards (no rounded corners on the section in this frame).

## Ambient glow
- 500x500 circle (radius 250) at left 545px, top -184px, radial gradient `rgba(45,90,61,0.07)` → transparent at 70%, **blur 100px**. Very subtle green glow top-centre; barely visible.

## Header row (86:1395) — left 195px, top 80px, width 1265px; flex, items aligned to bottom (end)
- **H2** two lines, letter-spacing -1.5px, **line-height 50.4px**, size **48px**:
  - Line 1 "Более 840 проектов." — Playfair Display **Regular (400)**, color **`#f0efe9`** (warm off-white).
  - Line 2 "Вот несколько." — Playfair Display **Italic 400**, color **`rgba(255,255,255,0.3)`**.
  - (Code mentions Instrument Serif as the parent font; the rendered runs are Playfair Display.) Heading padding-top 8px, block height 109px; 14px empty label slot above.
- **"Все" button** (right side; render shows it at x≈855–910 of a 1024 thumb → ~ right edge of the bento grid, not at 1265): pill, **radius 100px, border 1px `rgba(255,255,255,0.3)`**, transparent fill, padding **13px 29px**, Inter Bold 14px / 21px, letter-spacing -0.1px, text **`#757575`**. Implement right-aligned to the grid's right edge (x = 195+1234).

## Bento grid (86:1404) — top offset 32px below header, width **1234px**, height ~597–606px
Columns: **484.23px | 345.88px | 345.89px**, gap **12px** (visual gutters in render ≈ 26–40px because images are absolutely positioned: col2 starts at x=510, col3 at x=888 → effective gaps ~26px and ~43px; recommend a clean grid `484fr 335fr 346fr` with gap 26–28px).
Rows: 2 rows; top row ~243px tall, bottom row ~317px tall, row gap ~44px (tiles at top 0/−2 and 287).

### Tile 1 — Featured project card (col 1, spans 2 rows), 484x606
- Fill `rgba(255,255,255,0.08)`, **border 1px `rgba(255,255,255,0.14)`**, **radius 24px**, **shadow `0 8px 40px rgba(0,0,0,0.28)`**, overflow hidden, padding 1px.
- Photo covers entire card (image 146% width, offset -23% → object-fit cover centred): `assets/home-portfolio-featured-winter-garden.jpg`.
- **Tag chip** top-left (14px,14px): "Зимний сад" — Inter Bold 10px / 15px white, padding 5px 13px, radius 100px, fill `rgba(255,255,255,0.08)`, **border 1px solid white**.
- **Caption bar** bottom (top 525px → ~80px high), padding 16px. In the render it's a **frosted/gradient strip**: dark grey at left fading to lighter translucent grey (glass, backdrop blur ~20px, `rgba(255,255,255,0.08–0.2)`), bottom corners follow 24px radius.
  - Title "Атмосфера 42 м²" — Inter SemiBold 13px / 19.5px, `#f0efe9`.
  - Row (pt 4px, space-between, height 28px): location "Красногорск, КП «Гринфилд»" Inter Regular 10px / 15px `rgba(255,255,255,0.45)`; price "580 000 ₽" **Instrument Serif Regular 24px / 24px** white (right-aligned).

### Tiles 2–5 — plain photo tiles, radius 24px, object-fit cover, no border/text
- Top middle (x510, y0) 335x243 — staircase with glass railing: `assets/photo-staircase-glass-railing.jpg`
- Bottom middle (x510, y287) 335x317 — brick facade with glazed balconies: `assets/home-portfolio-brick-balconies.jpg`
- Top right (x888, y−2) 346x238 — roof skylight lantern: `assets/home-portfolio-roof-skylight.jpg`
- Bottom right (x888, y287) 345x315 — glass-roof hall with plants (object-position bottom): `assets/home-portfolio-glass-roof-hall.png`

Hi-res originals: see `assets/photos/` (download_assets on 86:1392).

## Hover (not in frame)
Likely: photo tiles show caption/zoom on hover, "Все" pill border → white. Not specified in Figma.
