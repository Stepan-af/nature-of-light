# Home — FAQ "Вопросы и ответы" + "Остались вопросы?" form (node 473:952)

Page position x=184, y=3405, **1192 x 672**. Ground `#f5f5f5`.

## Layout
- Column, **gap 32px**: heading, then "Content section" row.
- **H2 "Вопросы и ответы"**: **Playfair Display Regular 400, 32px / 36px, letter-spacing -1px, `#1e1e1e`** (tokens Text/Heading/Heading/Size=32, Line=36, Subheading/Tracking=-1).
- Content row: flex, **gap 32px**, align start. Left = FAQ list (flex 1 → **740px**), right = form card **420px** fixed.

## FAQ accordion (left)
- Items stacked with **gap 12px**. Item = `<button>` white `#ffffff`, **padding 24px**, flex row gap 10px, arrow icon 24x24 at right.
- **Collapsed** ("Compact" variant): radius **20px**, items centred; height ≈ 68px. Question: **Inter Regular 16px / 20px, `#757575`**. Icon: thin arrow **down** ↓ (`assets/icon-arrow-down.svg`, fill `#757575`).
- **Expanded** ("Wide" variant): radius **24px**, items start; text container gap **12px**; question same style; answer = bullet list (disc, indent 21px) **Inter Regular 14px / 18px, `#1e1e1e`**. Icon: arrow **up** ↑ (`assets/icon-arrow-up.svg`).
- No borders/shadows; white cards on light grey.
- Questions shown: "Входит ли демонтаж старых окон в стоимость?" (expanded, x2 duplicates), "Какие материалы используются при изготовлении?", "Есть ли гарантия на выполненные работы?" (x2).
- Expanded answer bullets: "Замер — в день обращения или на следующий день (бесплатно)." / "Изготовление — от 3 до 10 рабочих дней в зависимости от сложности конструкции и загруженности производства." / "Монтаж — от 1 до 3 дней для типовой квартиры (балкон или 2–3 окна). Сложные панорамные системы могут устанавливаться до 5 дней."

## "Остались вопросы?" card (right, 420px)
- **Transparent background, border 1px `#303030`** (token Colors/Border/Neutral/Default), **radius 24px**, **padding 24px**, column **gap 28px**.
- Title block (gap 12px):
  - "Остались вопросы?" — Playfair Display Regular **32px / 36px, -1px**, `#1e1e1e`.
  - Body "Оставьте свою почту и мы обязательно с вами свяжемся. Гарантируем скидку 10% на всю продукцию 😀" — **Inter Regular 16px / 20px, `#757575`** (render wraps at ~270px width).
- Form (gap 12px):
  - **Text field — focused state**: height **62px**, padding 12px 16px, **radius 12px**, **border 1px `#2e7d32`** (green), transparent fill. Floating label "Label" **Inter Medium 14px / 18px `#2e7d32`** on top; value "Mail@mail.com" **Inter Medium 16px / 20px `#1e1e1e`** followed by a 1px x 20px green caret (`assets/input-caret.svg`, stroke `#2E7D32`). See ui-kit/text-field for all states.
  - **Submit "Отправить"**: height **52px**, padding 8px 20px, radius 8px, **no fill, no border** (text button), centred label **Inter Regular 14px / 20px `#2e7d32`**. Full width.

## Interactions
- Accordion toggles between Compact/Wide variants (arrow flips down→up).
- Input focus → green border + green label.
