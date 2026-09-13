# UI kit — "менюшка 2" Portfolio nav item + dropdown (component set 910:1988)

Identical structure and styling to `menu-item-1` (see menu-item-1.notes.md) with these differences:
- Label **"Портфолио"** (DM Sans Medium 13px / 19.5px `#757575`, pill padding 8px 14px, radius 30px).
- Panel 552 x 219, `#0f0f10`, radius 30px; header "ВЫБЕРИТЕ КАТЕГОРИЮ" with green 6px dot; close button slot is an empty 22x22 round `rgba(255,255,255,0.05)` with a 25x23 x-circle icon overlaid at x=503 (`assets/icon-close-circle-25.svg`).
- Cards (160 x 110, radius 16px, border 1px `rgba(255,255,255,0.04)`, caption DM Sans Medium 13px white centred):
  - "Все проекты" — `assets/menu-portfolio-card-all.png`
  - "Жилые дома" — `assets/menu-portfolio-card-residential.png`
  - "Коммерческие" — `assets/menu-portfolio-card-commercial.png`
- Used in header instance 910:2012.
