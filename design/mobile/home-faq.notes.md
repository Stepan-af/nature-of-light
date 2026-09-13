# Mobile home — FAQ + "Остались вопросы?" (node 473:899 "QA section (adapt)")

Position x=15, y=3348, **373 x 1314** (≈15px side margins on 402 viewport). Ground `#f5f5f5`.

- Column **gap 32px**: H2, then content column **gap 44px** (accordion list, then form card).
- **H2 "Вопросы и ответы"**: **Playfair Display Regular 32px / 36px, ls -1px, `#1e1e1e`** (same as desktop).
- **Accordion** (gap 12px), items full width (373px), fill `rgba(255,255,255,0.98)`, **padding 24px**, gap 10px, 24px arrow icon:
  - Expanded (radius **24px**, align start): question **Inter Regular 16px / 20px `#757575`** (wraps to 2 lines); answer list **Inter Regular 14px / 18px `#1e1e1e`**, disc bullets indent 21px, 12px below question; icon ↑ (`assets/icon-arrow-up.svg`).
  - Collapsed (radius **20px**, align centre): question + icon ↓ (`assets/icon-arrow-down.svg`).
- **Form card** — wrapper padding 0 16px (card width 341px): **border 1px `#303030`, radius 24px, padding 24px, gap 28px**, transparent.
  - "Остались вопросы?" Playfair Display Regular 32px / 36px `#1e1e1e`.
  - Body Inter Regular 16px / 20px `#757575` (5 lines).
  - Text field (focused): height 62px, padding 12px 16px, radius 12px, border 1px `#2e7d32`; label Inter Medium 14px/18px `#2e7d32`; value Inter Medium 16px/20px `#1e1e1e` + green caret.
  - "Отправить" text button: height 52px, radius 8px, Inter Regular 14px/20px `#2e7d32`, centred.
- Identical component styling to desktop (home/faq-contact-form.notes.md) — only stacks vertically.
