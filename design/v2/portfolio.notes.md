# Portfolio list — Figma v2 (node 108:3185, frame 108:3183 «ПАРТФОЛИО»), 2026-09-26

`portfolio.png` is a REST render with a **transparent** background (alpha 0 → looks black). The page is NOT dark:
the MCP screenshot shows the light page (#f5f5f5) and the H1 is #1a1a1a, which would be invisible on black. Keep `tone="light"`.

Designer comments:
- «нужно будет поменять шрифт» (H1): now **Playfair Display Bold 52 / 57.2, letter-spacing -1px, #1a1a1a** (was Instrument Serif 400 → mapped to Playfair 400).
- «тут тоже поменял у плашек цвет» (card badges): **solid #757575**, 1px border rgba(255,255,255,.92), radius 100px, padding 4px 12px,
  drop-shadow 0 8px 20px rgba(0,0,0,.08); text Inter Bold 9px/13.5 (scaled to 11px in code), letter-spacing 0.18px, white. (Was frosted white glass with dark text.)
- Filter pills (unchanged): h 39px, padding 9px 18px, radius 100px, bg rgba(0,0,0,.06), text Medium 14/21 #757575; active bg rgba(13,13,12,.2).
  (Code keeps #555 / #4a4a48 text for contrast.)
- Card: bg #f0efe9, radius 22px, shadow 0 4px 20px rgba(0,0,0,.07); caption panel = frosted glass image overlay (approximated with gradient + backdrop blur),
  title Inter SemiBold 13/15.6 white, location Inter 10/15 rgba(255,255,255,.5), price Instrument Serif 24/22.5 white (→ Playfair Display 400).
- Grid: 3 cols × 377px, rows 260px, gap 10px, every 3rd card from the first spans 2 rows.
- Hover («Тут также делаем эффект зума»): photo scale 1.05, ~450ms; disabled for prefers-reduced-motion.
