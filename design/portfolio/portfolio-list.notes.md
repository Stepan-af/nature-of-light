# Portfolio list page — "Наши работы" (node 108:3185, page frame 108:3183)

Page 1559 wide, ground **`#f5f5f5`/`#f4f4f5`**. The frame embeds the standard dark header (active item **Портфолио**) and the standard footer (see home/header.notes.md, home/footer.notes.md — identical; footer markup omitted from the .tsx to avoid duplication).

## Container
- Centered **1200px, padding 56px top / 72px bottom / 24px sides**; starts 89px below the frame top (header occupies top 67px, overlapping by ~43px offset in Figma).

## Title + filters
- **H1 "Наши работы"**: **Instrument Serif Regular 52px / 57.2px, letter-spacing -1px, `#1a1a1a`**. (Render shows a light-weight sans fallback — spec font is Instrument Serif.)
- Filter row: pt **24px**, gap **8px**. Pills **height 39px, padding 9px 18px, radius 100px**, **DM Sans Medium 14px / 21px `#757575`**, no border.
  - **Active "Все работы"**: fill **`rgba(13,13,12,0.2)`** (renders `#d0d0d0`-ish).
  - **Inactive** ("Козырьки", "Зимние сады", "Изделия из стекла", "Офисные перегородки"): fill **`rgba(0,0,0,0.06)`**.

## Masonry/bento grid (pt 40px)
- Grid **3 columns x 377.33px, gap 10px**, **4 rows x 260px** (grid width 1166px — overflows the 1152 content by 14px).
- Layout (col,row):
  - (1, 1–2) tall 530px — Атмосфера 42 м²
  - (2, 1) — «Классик» ×3 для ЖК
  - (3, 1) — Стеклянная терраса 22 м²
  - (2, 2–3) tall — Оранжерея «Тропик» 30 м²
  - (3, 2) — Навес над парковкой 80 м²
  - (1, 3) — «Престиж» входная группа
  - (3, 3) — Кровельная терраса 18 м²
  - (1, 4) — «Лофт» в таунхаусе
  - (2, 4) — Козырёк над входом в офис
  - (3, 4) — Козырёк над входом в офис (duplicate)

## PortfolioCard (`<a>`)
- Fill `#f0efe9` (fallback under photo), **radius 22px**, overflow hidden, **shadow `0 4px 20px rgba(0,0,0,0.07)`**.
- Photo covers card (object-fit cover). Two stacked image layers exist in Figma: a hidden base ("portfolio-hidden-*") and the visible photo on top — use the **visible** one (see manifest descriptions).
- **Tag chip** top-left 12px/12px: **fill `rgba(255,255,255,0.78)`, border 1px `rgba(255,255,255,0.92)`, radius 100px, padding 4px 12px, shadow `0 8px 40px rgba(0,0,0,0.08)`**; text **Inter Bold 9px / 13.5px, letter-spacing 0.18px, `#0d0d0c`** ("Зимний сад", "Козырёк", "Терраса").
- **Caption bar** at bottom (~70px tall; top 189.9px on 260px cards, 459.9px on 530px cards), padding **14px**. In the render it's a **frosted glass gradient**: left side darker grey, right side lighter/whiter translucent (approx `linear-gradient(90deg, rgba(60,60,60,.55), rgba(255,255,255,.25))` + `backdrop-filter: blur(12px)`); spans full card width, bottom corners follow radius.
  - Title: **Inter SemiBold 13px / 15.6px white** (single line, overflow hidden).
  - Row (pt 4px, height 27px, space-between, centered): location **Inter Regular 10px / 15px `rgba(255,255,255,0.5)`**; price **Instrument Serif Regular 24px / 22.5px white**.

## Card data
| Title | Location | Price | Tag | Visible photo |
|---|---|---|---|---|
| Атмосфера 42 м² | Красногорск, КП «Гринфилд» | 580 000 ₽ | Зимний сад | assets/portfolio-atmosfera-42-greenhouse.jpg |
| «Классик» ×3 для ЖК | Москва, ЖК «Садовые кварталы» | 74 700 ₽ | Козырёк | assets/photo-staircase-glass-railing.jpg |
| Оранжерея «Тропик» 30 м² | Дмитров, коттеджный посёлок | 340 000 ₽ | Зимний сад | assets/home-portfolio-featured-winter-garden.jpg |
| «Престиж» входная группа | Москва, Хорошёво | 52 000 ₽ | Козырёк | assets/portfolio-prestizh-house.jpg |
| «Лофт» в таунхаусе | Химки, ЖК «Лесной» | 220 000 ₽ | Зимний сад | assets/portfolio-loft-glass-roof.jpg |
| Стеклянная терраса 22 м² | Ступино, частный дом | 210 000 ₽ | Терраса | assets/home-portfolio-roof-skylight.jpg |
| Навес над парковкой 80 м² | Балашиха, ТЦ «Арена» | 260 000 ₽ | Козырёк | assets/home-portfolio-brick-balconies.jpg |
| Кровельная терраса 18 м² | Истра, загородный дом | 195 000 ₽ | Терраса | assets/portfolio-roof-terrace-stained-glass.jpg |
| Козырёк над входом в офис | Москва, Нагорная | 48 000 ₽ | Козырёк | assets/portfolio-office-entrance-house.jpg |
| Козырёк над входом в офис (dup) | Москва, Нагорная | 48 000 ₽ | Козырёк | assets/portfolio-spiral-stair-glass.jpg |

Cards link to the project detail page (see portfolio/project-detail).
