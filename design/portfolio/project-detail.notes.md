# Project detail page body (node 148:1410, page frame 148:1406)

Frame 1559 x 1480, background **`#f5f5f5`** (token Colors/Surface/Base/Secondary). Embedded dark header at top (active pill in this frame: **Услуги** — Figma inconsistency; should be Портфолио). No footer in this frame body.

## Container
- Starts 86px from top; centred **1200px, padding 36px top / 64px bottom (token Size/Space/Gap/Positive/Massive L = 64) / 24px sides**.

## Breadcrumbs (148:1453) — flex row, gap 8px, items centred
- "Портфолио" link — **DM Sans Regular 13px / 19.5px `#757575`**
- "›" separator — same style, **opacity 0.4**
- Current "Зеркальные работы" — **Playfair Display Bold 15px / 20.25px `#1a1a1a`**

## Main grid (pt 28px): **2 columns 772px | 340px, gap 40px**, align start

### Left column (772px)
- **Main image**: container white, **radius 18px**, height **482.5px**, overflow hidden; photo inner radius 19px (object-fit cover). `assets/project-gallery-main-glass-dome.jpg`.
  - Counter "04 / 04" bottom-left (14px, 452px): **JetBrains Mono Regular 11px / 16.5px `rgba(255,255,255,0.5)`**.
  - "Открыть" pill bottom-right (left 664px, top 440px): **fill `rgba(0,0,0,0.45)`, radius 20px, padding 5px 12px**, **DM Sans Regular 12px / 18px `rgba(255,255,255,0.85)`** (opens lightbox).
- **Thumbnails** (pt 12px): **grid 4 x 187px, gap 8px**, row 141.25px, image height 137.25px.
  - Inactive: **radius 20px (render ≈10–12px), 2px transparent border, opacity 0.6**.
  - **Active** (4th): **border 3px `#2e7d32`, radius 10px**, opacity 1.
  - Photos: `project-gallery-thumb-1.jpg`, `-thumb-2.jpg`, `-thumb-3.jpg`, active = main photo.
- **"О проекте"** block (pt 28px):
  - Section label: **JetBrains Mono Bold 10px / 15px, letter-spacing 1.2px, uppercase, `#2e7d32`**.
  - Paragraph (pt 10px): **DM Sans Regular 15px / 27px (1.8) `#1a1a1a`**, full 772px width. "Серия из трёх консольных козырьков «Классик» над входными группами жилого комплекса «Садовые кварталы». Закалённое стекло 10 мм, каркас из нержавеющей стали. Единый архитектурный стиль."

### Right column (340px) — flex column gap 12px
1. **TagBadge** "КОЗЫРЁК": height 24.5px, padding 3px 10px, **radius 20px, fill `rgba(46,125,50,0.08)`, border 1px `rgba(46,125,50,0.16)`**, **JetBrains Mono Bold 11px / 16.5px, ls 0.66px, uppercase, `#2e7d32`**.
2. **H1** (pt 12px) "Зеркальные работы": **Playfair Display Bold 28px** (line-height in Figma 20.25px — use ~1.2 / 34px), `#1a1a1a`.
3. **Parameters card**: white, **border 1px `rgba(0,0,0,0.09)`, radius 14px, padding 20px**.
   - Label "ПАРАМЕТРЫ ПРОЕКТА": **JetBrains Mono Regular 9px / 13.5px, ls 1.08px, uppercase, `#757575`**.
   - Rows (pt 14px), each **43.5px tall with 1px bottom border `rgba(0,0,0,0.09)`** (last row no border), space-between: key **DM Sans Regular 12px / 18px `#757575`**; value **Playfair Display Bold 15px / 22.5px `#1a1a1a`**, right-aligned.
   - Data: Стоимость 74 700 ₽ · Площадь 3×4.5 м · Город Москва · Год 2024 · Срок монтажа 5 дней.
4. **CTA card**: **fill `#2e7d32`, radius 14px, padding 22px 20px**.
   - "Хотите похожую конструкцию?" **Playfair Display Bold 18px / 21.6px white**.
   - "Рассчитаем стоимость и сроки — бесплатно" (pt 8px) **DM Sans Regular 13px / 19.5px `rgba(255,255,255,0.75)`**.
   - Button (pt 16px) "Оставить заявку": **width 300px, padding 12px 0, radius 8px, fill `#757575`** (grey — likely a placeholder state; see ui-kit/buttons for final variant), **DM Sans Bold 14px / 21px white centred**.
5. **Prev/Next** (pt 4px): **grid 2 x 166px, gap 8px**. Each: white, **border 1px `rgba(0,0,0,0.09)`, radius 10px, padding 10px 12px**.
   - Label "ПРЕД." / "СЛЕД." (next right-aligned): **JetBrains Mono Regular 9px / 13.5px, ls 0.72px, `#757575`**.
   - Title (pt 3px): **DM Sans SemiBold 12px / 15.6px `#1a1a1a`** (max 2 lines; next is right-aligned). "Атмосфера 42 м²" / "Стеклянная терраса 22 м²".
