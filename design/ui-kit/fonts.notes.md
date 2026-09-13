# UI kit — "шрифты" fonts (section 817:949)

Figma section → metadata only (no call spent). The section lists exactly two brand fonts as text samples:
1. **Playfair Display** — display/headings (weights used: 400 Regular & Italic, 700 Bold, 800 ExtraBold).
2. **DM Sans** — UI/body (weights used: 300 Light, 400 Regular, 500 Medium, 600 SemiBold, 700 Bold; Figma uses optical size `"opsz" 14`).

Fonts additionally used in page designs (not declared in the kit — confirm with designer):
- **JetBrains Mono** (400/500/700) — eyebrow labels, chips, footer column labels, tagline under logo.
- **Inter** (400/500/600/700) — FAQ, text field, portfolio cards, services page, reviews heading (token Typography/Family/Content = Inter).
- **Instrument Serif** 400 — portfolio page H1 and card prices.
- **Poppins** 500/600 — review cards.
- **Ancizar Serif** 400 — "Наши преимущества" H2 (render fell back to sans; likely should be Playfair Display).
- **Consolas** — services step numbers (use JetBrains Mono).
All except Consolas are available on Google Fonts (Cyrillic subsets: Playfair Display, DM Sans (latin-ext only — check Cyrillic support!), JetBrains Mono, Inter, Poppins (no Cyrillic), Instrument Serif (no Cyrillic)). NOTE: DM Sans, Poppins and Instrument Serif lack Cyrillic glyphs on Google Fonts; Figma renders Russian text in these with a fallback (the renders show a Noto Sans–like face). Implementers should pick Cyrillic-capable fallbacks (e.g. Inter / Manrope for DM Sans & Poppins; Playfair Display / Cormorant for Instrument Serif).
