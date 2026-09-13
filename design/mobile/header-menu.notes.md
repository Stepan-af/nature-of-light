# Mobile header & menu (nodes 480:1202, 480:1203, 549:1120 on frame 325:930)

- **480:1202** ("Component 7") = iOS status bar mock (9:41, Dynamic Island, signal/wifi/battery). Saved as `mobile/ios-status-bar.tsx` for completeness only — **not part of the site**.
- **480:1203** logo block (x=28, y=58, 154x40), overlaid on the hero photo (no header bar background on mobile — transparent header over hero):
  - Logo tile **40x40** (radius ≈8px, white tile with logo, `assets/logo-mark.jpg`), gap 8px.
  - "Природа Света" — **Playfair Display Bold ≈16px / 21px, white** (103x21).
  - No tagline on mobile.
- **549:1120** "Menu" instance (x=7, y=63, 380x49): the burger/glass menu component — Variant1 closed / Variant2 open panel. Full spec in `ui-kit/mobile-menu.notes.md` (+ `ui-kit/mobile-menu.tsx`). Burger sits right-aligned at x≈332–378, y≈72–102.
- Behaviour: header scrolls with page (overlaid on hero); on open, the dark `#0f0f10` radius-30 panel with the 5 nav links drops below the burger.
- Not separately extracted via get_design_context (480:1203, 549:1120) to stay within the Figma call budget — values taken from metadata.xml sizes + screens/home-mobile.png.
