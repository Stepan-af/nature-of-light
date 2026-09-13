# Mobile contacts page (frame 421:10337 "iPhone 17 - 6", 402 x 1147)

Reference: `screens/contacts-mobile.png`. **Dark page `#0e0e0c`**. Dark header: logo tile 40x40 + "Природа Света" Playfair Display Bold 14px **white** (y=62). Burger button here has a strong **white glow**: `drop-shadow(0 0 18.7px #fff) (0 0 10.7px #fff) (0 0 6.2px #fff) (0 0 3.1px #fff) (0 0 0.9px #fff)` — the menu's "glass" highlight on dark backgrounds. Footer instance at y=710.

⚠ Like other secondary mobile frames, this is a 2-column scaled layout (left text / right form) with tiny type; recommended implementation stacks: breadcrumbs → H1 → lead → form → contact info.

## Left column (x≈19–22)
- Breadcrumbs (top 146px, gap 7px, white): "Услуги" Inter Regular 12px / 16px › Inter 15px "Контакты" DM Sans Medium 12px / 19.5px.
- **H1** "Оставьте заявку и мы  подберём решение под ваш бюджет" — **Playfair Display ExtraBold 24px / 27px white**, width 158px (5 lines), top 170px.
- Lead (pt 25px, top 301px): **DM Sans Regular 10px / 14px `rgba(255,255,255,0.45)`**, width 170px.

## Right column form (x = 50%+1px ≈ 202px, width 184–208px)
- Caption (top 121px): JetBrains Mono Regular 6px / 13.5px, ls 1.26px, uppercase, white (desktop uses 35% white 9px).
- Fields at top 180 / 249 / 317 (pitch ≈68px), each 47px: label **JetBrains Mono Medium 7px, ls 1.26px, uppercase `rgba(255,255,255,0.35)`**; input height 47px, padding 18px 0 14px, **border-bottom 1px `rgba(255,255,255,0.18)`**, placeholder **DM Sans Regular 12px `rgba(255,255,255,0.5)`**.
  - "02 Телефон" is shown in a **hover state**: border-bottom `#666666`, placeholder `#858585`.
- **Submit** (top 395px): **186 x 38, border 1px `#757575`, radius 4px**; "ОТПРАВИТЬ ФОРМУ" **DM Sans Bold 9px, ls 0.84px `#757575`** at left 15px; "→" DM Sans Light 9px `#757575` at right.

## Contact info strip (top 526px) — horizontally scrollable
- Container width 490px (wider than viewport → `overflow-x: auto`), padding 10px; top divider **1px `#535353`**.
- Three cells (pt 60px area), left 6 / 121 / 302px, 124px tall, padding 28px 32px, dividers border-right 1px `rgba(255,255,255,0.08)`:
  - Label JetBrains Mono Regular 7px ls 1.26px uppercase `rgba(255,255,255,0.3)`; value DM Sans SemiBold 8px / 22.5px white; sub DM Sans Regular 8px `rgba(255,255,255,0.35)`.
  - ПОЗВОНИТЬ НАМ / +7 (495) 123-45-67 / Пн–Пт 9:00–19:00, Сб 10:00–16:00 · НАШ АДРЕС — ЗАХОДИТЕ / Москва, ул. Производственная, 15 / Производство и офис · м. Текстильщики · НАПИСАТЬ НА EMAIL / info@prirodasveta.ru / Ответим в течение рабочего дня.
