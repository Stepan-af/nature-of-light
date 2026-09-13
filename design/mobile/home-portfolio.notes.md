# Mobile home — Portfolio dark section (node 340:5645 "HomePortfolio")

Page y=1575, **402 x 1173, background `#0d0d0c`** (same subtle green radial glow as desktop, positioned off-canvas — effectively invisible).

- **H2** (left 18px, top 83px, pt 8px): "Более 840 проектов." **Instrument Serif Regular 24px / 41px, ls -1.5px, `#f0efe9`**; "Вот несколько." **Instrument Serif Italic 24px / 41px `rgba(255,255,255,0.3)`**. (Desktop uses Playfair Display 48px — the mobile frame switched to Instrument Serif.)
- No "Все" button on mobile.
- **Grid** (top 213px): 2 columns — x=18 (183px) and x=211 (176–178px); column gap ≈10px; row gap ≈10px.
  - **Featured card** (col 1, rows 1–2): **183 x 606**, fill `rgba(255,255,255,0.08)`, **border 1px `rgba(255,255,255,0.14)`, radius 24px, shadow `0 8px 40px rgba(0,0,0,0.28)`**, photo cover (`Атмосфера 42 м²`).
    - Tag chip (14,14): padding 5px 13px, radius 100px, fill `rgba(255,255,255,0.08)`, border 1px `rgba(255,255,255,0.98)`, **Inter Bold 10px / 15px white** "Зимний сад".
    - Caption bar (top 525px, ~80px, padding 16px, frosted dark gradient like desktop): title **Inter SemiBold 13px / 19.5px `#f0efe9`**; location **Inter Regular 7px / 15px `rgba(255,255,255,0.45)`** (⚠ too small — use ≥10px); price **Instrument Serif Regular 13px / 24px white**, right.
  - Photo tiles **176 x 298** (col 2 rows 1 & 2 at y=213, 521) and **178 x 301** (row 3 both columns at y=833), **radius 24px**, object-fit cover, no text.
- Images: all tiles reuse the staircase photo in this frame (placeholder) — use real portfolio photos in implementation.
- Total section height 1173 (≈39px bottom padding after last row).
