# Services page body — "Полный цикл работ" (node 781:5611, page frame 781:5609)

Body 1559 wide, starts y=67 (under header). **Background white `#ffffff`** (token b&w/white) — note: this page uses a Tailwind-gray palette (`#101828`, `#6a7282`, `#f9fafb`, `#d1d5dc`) unlike other pages (`#1a1a1a`, `#757575`, `#f5f5f5`). Map to site tokens if unifying.

## Breadcrumbs (absolute, top 28px, aligned to content left)
- Row gap 7px, **Inter Regular 15px / 16px**: "Главная" `#999999` › `#999999` "Услуги" **`#0e0e0e`**.

## Intro (781:5666) — 36px spacer above; container 1200, padding 24px top / 32px bottom / 24px sides; flex row **gap 64px**
- **H1 "Полный цикл работ"**: **Playfair Display Bold 48px / 52.8px, `#101828`**, block width 480px.
- Paragraph (pt 8px, width/max 300px): **Inter Regular 14px / 22.75px `#6a7282`** — "Берём на себя весь цикл — от первого звонка до сдачи объекта. Работаем с частными лицами, застройщиками и управляющими компаниями."

## Step cards grid (781:5674) — container 1200, pb 40px
- **Grid 2 columns x 570px, gap 12px**, rows 210.25px (4 rows, 7 cards; last row single card left).
- **Card**: fill **`#f9fafb`**, **radius 12px, padding 24px**, column **gap 12px**, no border/shadow.
  - Top row space-between: 20x20 line icon (stroke `#99A1AF` 1.5px) | step number "01"… **Consolas Regular 12px / 16px `#d1d5dc`** (use a monospace fallback, e.g. JetBrains Mono).
  - Title: **Inter SemiBold 16px / 22px `#101828`**.
  - Description (pt 8px): **Inter Regular 14px / 22.75px `#6a7282`** (3 lines at 522px).
  - Duration row (pt 4px, gap 4px, height 20px): 12px green arrow ↗ (`assets/icon-arrow-up-right-green.svg`) + **Inter Medium 12px / 16px `#2d7a3a`**.
- Steps:
  1. Консультация — В день обращения — icon plus (`icon-svc-plus-v/h`)
  2. Замер — выезд специалиста — Не позднее следующего дня — expand arrows (`icon-svc-measure-part1/2`)
  3. Проектирование — 8 рабочих дней — document (`icon-svc-doc-part1/2`)
  4. Изготовление стёкол и конструкций — от 30 рабочих дней — price-tag (`icon-adv-factory-part1/2`)
  5. Доставка — 1 рабочий день — line chart (`icon-svc-delivery-part1/2`)
  6. Монтаж и демонтаж — 1–3 рабочих дня — screen (`icon-adv-install-part1/2`)
  7. Пост-гарантийное обслуживание — По договору — clock (`icon-adv-warranty-part1/2`)
  (Full description texts are in services.tsx.)

## "Дополнительные услуги" band (781:5836)
- Full-bleed, **fill `#f9fafb`, padding 40px 0**; container 1200 / 24px sides; row space-between:
  - **H2 "Дополнительные услуги"**: **Playfair Display Bold 30px / 36px `#101828`** (pt 6px).
  - Right paragraph (pt 8px, width 240px, right-aligned): **Inter Regular 14px / 22.75px `#6a7282`** — "Расширенный перечень работ для комплексного обслуживания объекта".
- Below: 24px + 122.5px slot where the extra-services cards go → see `services/extra-services.tsx` (node 127:5744).
