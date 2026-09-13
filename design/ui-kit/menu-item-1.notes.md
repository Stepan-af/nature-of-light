# UI kit — "менюшка1" Catalog nav item + mega-dropdown (component set 910:1958)

Header nav item "Каталог" with a hover/open dropdown panel. Used in the header (home/header: instance 910:1983).

## Default (910:1959)
- Pill: **padding 8px 14px, radius 30px**, transparent; text **DM Sans Medium 13px / 19.5px `#757575`**.

## Variant2 — open dropdown (910:1961), 579 x 267, column gap 7px, overflow hidden
- Same "Каталог" pill on top (77 x 36).
- **Panel** ("копия1", `<a>`): **552 x 219, fill `#0f0f10`, radius 30px**. (Render shows the panel against the dark header background with no visible border/shadow; consider `box-shadow: 0 20px 60px rgba(0,0,0,.4)` when overlaying light pages.)
  - **Header row** (left/right 24px, top 20px, height 22px, space-between):
    - 6px green dot `#2E7D32` (`assets/dot-green-6.svg`) + gap 8px + "ВЫБЕРИТЕ КАТЕГОРИЮ" **DM Sans SemiBold 13px, uppercase, `#757575`, opacity 0.6**.
    - Close: round button **padding 6px, radius 100px, fill `rgba(255,255,255,0.05)`** with 10px x icon (`assets/icon-close-10.svg`). A second 23px x-circle outline icon (`assets/icon-close-circle-23.svg`, stroke `#757575`) is placed on top at x=505 — use one close control (the 23px circle is what renders).
  - **Cards row** (left 24px, top 58px, gap 12px): 3 cards, each **160px wide**, column gap 10px, centred:
    - Image **aspect 160/110 (160x110), radius 16px, border 1px `rgba(255,255,255,0.04)`**, object-fit cover.
    - Caption **DM Sans Medium 13px, line-height normal, white, centred**.
    - Cards: "Все проекты" (`assets/portfolio-loft-glass-roof.jpg`), "Жилые дома" (`assets/menu-card-residential-staircase.jpg`), "Коммерческие" (`assets/home-portfolio-roof-skylight.jpg`).
- Interaction: hover/click on "Каталог" opens panel below the pill; close button hides it.
