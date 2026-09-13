# UI kit — "главная навигация" (section 740:4922)

Figma section → metadata only; children extracted individually into `main-navigation.tsx` (154:302, 154:357, 154:365, 204:2388, 204:2381). Variants are shown on a dark `#10111a`-ish board. "Default / Variant2 / Variant3" map to **default / hover / pressed(active)** by convention (Figma names are not explicit).

## Nav text link (Главная 154:302; Каталог 154:319, Портфолио 154:325, Услуги 154:335, Контакты 154:343 are identical except text)
- DM Sans Medium **13px / 19.5px**, height 20px, no background.
- Default: **`rgba(255,255,255,0.59)`**
- Variant2 (hover): **`#ffffff`**
- Variant3 (active/pressed): **`#92c895`** (light green)
- NOTE: the live header (home/header) uses pill links instead (active `#1d1e24` pill, inactive `#757575`) — see ui-kit/menu-item-1/2 notes.

## "Партнёрам" button (154:357)
- Padding **7px 14px**, radius **6px**, fill **`rgba(26,35,126,0.06)`**, border **1px `rgba(26,35,126,0.14)`** (indigo tint), text **DM Sans SemiBold 13px / 19.5px white**. All three variants export identically (render shows a subtle lighter 1px outline around a near-black fill).

## "Заказать" button (154:365)
- Padding **7px 18px**, radius **6px**, DM Sans SemiBold 13px / 19.5px white.
- Default fill **`rgba(117,117,117,0.09)`** (+ visible 1px light border ~`rgba(255,255,255,0.15)` in render)
- Variant2 fill **`rgba(46,125,50,0.2)`**
- Variant3 fill **`rgba(58,81,59,0.56)`**

## Hero CTA "Перейти в каталог" (204:2388) — 184 x 47
- Height **47px**, padding **12px 24px**, radius **6px**, DM Sans SemiBold **14px / 21px**, letter-spacing **0.14px**, white.
- Default fill **`rgba(117,117,117,0.09)`**; Variant2 **`rgba(46,125,50,0.2)`**; Variant3 **`rgba(39,146,44,0.23)`**.
- Render shows a **1px semi-transparent light border (~`rgba(255,255,255,0.18)`) and faint inner glow** on all variants — a Figma stroke/effect not present in exported classes. Implement: `border:1px solid rgba(255,255,255,.18); box-shadow: inset 0 0 12px rgba(255,255,255,.04); backdrop-filter: blur(8px)`.

## Hero secondary "Наши работы" (204:2381) — 150 x 47
- Same metrics as above.
- Default: transparent fill, border 1px `rgba(255,255,255,0)` (render still shows light outline, see note above); Variant2 **`rgba(46,125,50,0.1)`**; Variant3 **`rgba(7,239,19,0.1)`** (vivid green tint).
