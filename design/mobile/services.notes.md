# Mobile services page (frame 791:7237 "iPhone 17 - 18", 402 x 1919)

Reference: `screens/services-mobile.png`. Background `#f5f5f5`; light header (logo + "Природа Света" 14px `#1a1a1a`, burger) at y=62; footer instance at y=1481.

- **Breadcrumbs** (left 19px, top 117px, gap 7px): "Портфолио" DM Sans Medium 13px / 19.5px `#757575` (link) › Inter 15px `#999` "Услуги" DM Sans Regular 12px / 16px `#0e0e0e`.
- **H1 "Полный цикл работ"** (top 130px, pt 10px): **Playfair Display Bold 30px / 27px, ls -0.5px, `#1a1a1a`** (2 lines within 213px).
- Intro (top 211px, width 364px): **DM Sans Regular 8px / 13px `#888888`** (⚠ scale to ≥12px).

## Step cards — 2-column grid
- Rows at y = 262 (h 208), 488 (h 197), 708 (h 201), 930 (h 199, single card); container width 370px centred (left 16px); column gap 16px (row 1) / space-between (rows 2–3 → ≈16px); row gap ≈18–27px.
- **Card 177px wide**: fill **`#f9fafb`**, **radius 12px, padding 24px**, column gap 12px (card 06 gap 5px):
  - Top row (139px, space-between): 20px icon (stroke `#99A1AF`) | number **Cousine Regular 12px / 16px `#d1d5dc`** ("01"…"07").
  - Title **Inter SemiBold 16px / 22px `#101828`**.
  - Description (pt 8px): **Inter Regular 10px / 16px `#6a7282`**, width 146px.
  - Duration (pt 4px, gap 4px): 12px green ↗ icon + **DM Sans / Inter Medium 12px / 16px `#2d7a3a`** (card 07 uses 10px).
- Content (mobile copy differs from desktop!):
  1. Консультация — "Уточним потребности, подберём тип конструкции, рассчитаем предварительную стоимость" — В день обращения
  2. Замер — "Специалист выезжает на объект, снимает точные размеры и фиксирует особенности проёма" — 1–2 рабочих дня
  3. Проектирование — "Разрабатываем чертежи, подбираем профиль и фурнитуру, согласуем финальное решение" — 3–5 рабочих дней
  4. Производство — "Изготавливаем конструкции на собственном заводе с контролем качества на каждом этапе" — 7–14 рабочих дней (icon `assets/icon-svc-production.svg`)
  5. Доставка — "Бережно упаковываем и доставляем готовые изделия на объект в согласованное время" — 1–2 рабочих дня
  6. Монтаж — "Профессиональная установка сертифицированной бригадой с соблюдением всех норм" — 2–5 рабочих дней
  7. Гарантия — "Обеспечиваем гарантийное обслуживание и оперативный выезд при любых вопросах" — Бессрочная поддержка

## "Дополнительные услуги" band
- Full-bleed **`#f9fafb`** block, top 1182px, height 300px.
- Heading row (top 1202px, pt 12px): "Дополнительные услуги" **Playfair Display Medium 16px / 19px `#0e0e0e`** at left 25px (2 lines, width 167px); right text (left 196px, width 188px) **Inter Regular 10px / 16px `#888`** "Расширенный перечень работ для комплексного обслуживания объекта".
- **Tiles grid 3 columns x 125px** (x = 15, 143, 270), rows at y = 1291, 1342, 1393 (pitch 51px → gap ≈9px vertical, 3px horizontal), 8 tiles:
  - Tile **125 x 42, fill white, border 1px `#ebebea`, radius 7px**; text **Inter Regular/Medium 7px / 10–20px `#444`**, 1–2 lines, left-aligned with ≈9–24px inset.
  - Order: Демонтаж старых конструкций · Фасадное остекление без сварки · Подгонка конструкций зимой / Покраска стёкол плёнкой · Техническое обслуживание · Ремонт и герметизация покрытий / Монтаж видеостен и подсветки · Противопожарная обработка.
  - ⚠ 7px text — implement as 2-column tiles with 12–13px text.
