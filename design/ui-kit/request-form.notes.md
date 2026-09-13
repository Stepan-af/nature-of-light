# UI kit — "заявка" request-form fields (section 613:5192)

Section → metadata only. Extracted field 284:960; siblings 284:978 (02 Телефон / "Номер телефона") and 284:996 (03 Telegram / "Почта") are identical. Submit button "форма" 284:1089 (536x65, 3 variants) not separately extracted — its Default is documented in contacts/contacts.notes.md (border 1px `#757575`, radius 4px, padding 18px 28px, DM Sans Bold 14px ls 0.84px `#757575` + white "→" DM Sans Light 18px). Suggested hover: border + label white.

Dark underline field (used on contacts page, background `#0e0e0c`), width 536px:
- Label: **JetBrains Mono Medium 9px / 13.5px, letter-spacing 1.26px, uppercase**.
- Input row: **height 57px, padding 18px 0 14px**, border-bottom 1px; text **DM Sans Regular 16px, line-height normal**.

| State | Label color | Underline | Text |
|---|---|---|---|
| Default (placeholder) | `rgba(255,255,255,0.35)` | 1px `rgba(255,255,255,0.18)` | placeholder `rgba(255,255,255,0.5)` |
| Variant2 (hover/focus) | `rgba(255,255,255,0.35)` | 1px **`#ffffff`** | placeholder **white** |
| Variant3 (filled) | **white** | 1px white | value white ("Анастасия") |
