# UI kit — Mobile navigation "навигация" (549:1111 → component set "Menu" 549:1113)

Board background `#545454`. Figma effect on the component: **Glass Effect (type GLASS, radius 58)** — i.e. a frosted-glass backdrop on the burger/panel; implement with `backdrop-filter: blur(29px)` (radius 58 ≈ blur diameter) + translucent fill.

## Variant1 — closed (burger button)
- Wrapper right-aligned in a 379px row, padding 8px.
- Burger: **46px wide, padding 8px, radius 8px, fill `rgba(82,82,77,0.33)`** (+ glass blur; render shows a 1px light outline ~`rgba(255,255,255,0.35)`), column **gap 4px** of three bars **2px tall, radius 100px, `#d9d9d9`**, full width (30px). Total ≈ 46 x 30px. Rotated 0.43° in Figma (ignore).

## Variant2 — open panel
- Panel **fill `#0f0f10`, radius 30px, padding 20px 24px 24px**, ~381 x 190px, column gap 16px (rotated -0.43° in Figma — ignore).
- Close icon top-right: 19px x-circle outline, stroke `#757575` (`assets/icon-close-circle-19.svg`) at (334, 21.6).
- Link list starting x=74px, y=58.6px, 20px row pitch (line-height 19.5px), **DM Sans Medium**:
  - "Главная" **15px `rgba(255,255,255,0.59)`** (current page / larger)
  - "Каталог" 13px **`#b2b2b2`**
  - "Портфолио" 13px **`#b2b2b2`**
  - "Услуги" 13px **`#757575`**
  - "Контакты" 13px **`#757575`**
  (Render shows Каталог/Портфолио brighter white — i.e. hover state; Услуги/Контакты dimmer.)
- Placement: panel drops below the burger in the mobile header, full width minus ~10px side margins.
