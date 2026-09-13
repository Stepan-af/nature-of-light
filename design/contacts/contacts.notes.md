# Contacts / request page body (node 108:2843, page frame 108:2842)

Frame 1559 x 1482. **Whole page is dark: background `#0e0e0c`.** Standard dark header on top (active pill **Контакты**, header width 1555 here). (The page frame likely has the standard footer below — see screens/contacts-desktop.png.)

## Hero form section (108:2875)
- Centred container **max 1200px, padding-top 80px, side padding 24px, min-height 732px**.
- **Grid 2 columns x 536px, column gap 80px**, both columns vertically centred.

### Left column (gap 51px)
- **Breadcrumbs** (row, gap 7px, white): "Главная" **Inter Regular 15px / 16px** (link) · "›" Inter Regular 15px · "Контакты" **DM Sans Medium 13px / 19.5px**. All white. (Differs from light-page breadcrumb style in project detail.)
- **H1** (gap 7px below crumbs, pt 32px on block): "Оставьте заявку и мы  подберём решение под ваш бюджет" — **Playfair Display ExtraBold 55px / 60px, letter-spacing -2px, white**, width 536px (4 lines).
- **Lead** (pt 28px): **DM Sans Regular 15px / 27px, `rgba(255,255,255,0.45)`**, width 380px. "После отправки формы наш менеджер перезвонит в течение 30 минут, уточнит детали и запишет на бесплатный замер."

### Right column — underline form
- Intro caption: **JetBrains Mono Regular 9px / 13.5px, ls 1.26px, uppercase, `rgba(255,255,255,0.35)`** — "ЗАПОЛНИТЕ ФОРМУ, МЫ СВЯЖЕМСЯ С ВАМИ В БЛИЖАЙШЕЕ ВРЕМЯ И УТОЧНИМ ВСЕ ДЕТАЛИ."
- Fields (pt 24px, stacked, no gap):
  - Label: **JetBrains Mono Medium 9px / 13.5px, ls 1.26px, uppercase, `rgba(255,255,255,0.35)`** — "01 ИМЯ", "02 ТЕЛЕФОН", "03 TELEGRAM", then "НЕОБЯЗАТЕЛЬНО" (label for an optional 4th item; no input drawn).
  - Input: **height 57px, padding 18px 0 14px, border-bottom 1px `rgba(255,255,255,0.18)`**, no other borders/background; placeholder **DM Sans Regular 16px `rgba(255,255,255,0.5)`** ("Ваше имя", "Номер телефона", "Почта").
- **Submit button "ОТПРАВИТЬ ФОРМУ"** (≈54px below the НЕОБЯЗАТЕЛЬНО label; top 62.5px within its 102.5px block): full width 536px, **border 1px `#757575`, radius 4px, padding 18px 28px, transparent**, space-between: label **DM Sans Bold 14px / 21px, ls 0.84px, uppercase, `#757575`**; arrow "→" **DM Sans Light 18px / 27px white**. Hover likely → white border/text.
- Consent (pt 14px): **DM Sans Regular 11px / 16.5px `rgba(255,255,255,0.2)`** — "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности".

## Contact info strip (108:2919) — pt 60px
- Centred **max 1200, padding 0 24px, border-top 1px `rgba(255,255,255,0.08)`**; **grid 3 x 384px**, row 124px.
- Cells padding **28px 32px** (first cell no left padding, last no right padding); **vertical dividers: border-right 1px `rgba(255,255,255,0.08)`** on cells 1–2.
- Per cell: label **JetBrains Mono Regular 9px / 13.5px, ls 1.26px, uppercase `rgba(255,255,255,0.3)`**; value (pt 10px) **DM Sans SemiBold 15px / 22.5px white**; sub (pt 4px) **DM Sans Regular 12px / 18px `rgba(255,255,255,0.35)`**.
  1. ПОЗВОНИТЬ НАМ — +7 (495) 123-45-67 — Пн–Пт 9:00–19:00, Сб 10:00–16:00
  2. НАШ АДРЕС — ЗАХОДИТЕ — Москва, ул. Производственная, 15 — Производство и офис · м. Текстильщики
  3. НАПИСАТЬ НА EMAIL — info@prirodasveta.ru — Ответим в течение рабочего дня
