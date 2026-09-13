# UI kit — Text field (component set 302:3212)

Props: `state` = Default | Hovered | Focused | Error | Field; `leftIcon`, `rightIcon` (bool, arrow icon 24px wide slot, padding 10px); `text` (default "Mail@mail.com"). Board background in render is dark `#1e1e1e`, but the field is designed for light surfaces (see home FAQ form).

## Common
- Wrapper width 390px (fluid in use), column gap 8px.
- Input box: **height 62px, padding 12px 16px, radius 12px, border 1px**, flex row gap 8px, items centred.
- Text: **Inter Medium 16px / 20px**.
- Floating label (focused/error): **Inter Medium 14px / 18px** above the value.

## States
| State | Border | Fill | Content |
|---|---|---|---|
| Default | `#2e7d32` (green) | transparent | placeholder/value `#9a9a9a` |
| Hovered | `#963eb9` (purple — likely a leftover; recommend green `#2e7d32` or darker) | **`#efefef`** (token Colors/Surface/Base/Default Hover) | `#9a9a9a` |
| Focused | `#963eb9` in kit (the home FAQ instance uses **`#2e7d32`** — prefer green) | transparent | label "Label" `#2e7d32`; value `#1e1e1e`; 1px x 20px caret `#2e7d32` |
| Error | **`#ec221f`** (token Colors/Border/Danger/Tetriary) | transparent | label `#ec221f`; value `#1e1e1e`; below box: supporting text **Inter Medium 14px / 18px `#ec221f`**, padding 0 16px (total height 88px) |
| Field (filled, unfocused) | `#2e7d32` | transparent | value `#1e1e1e` |

Assets: `assets/icon-textfield-arrow.svg`, `assets/input-caret.svg`.
