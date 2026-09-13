# UI kit — "основные кнопки" (section 742:4924)

Figma section → metadata only; extracted children 280:816, 271:438, 271:459, 271:495, 280:791 into `buttons.tsx`. Other children are the same components with different labels (see header comment in buttons.tsx). Variants shown on a dark board (`#1c1614`-ish) — the kit board is dark even though most of these are used on light pages. Variant order = Default / Variant2 (hover) / Variant3 (active/selected).

## Catalog filter chip — active style "Все" (280:816)
- **Height 38px, padding 8px 18px, radius 24px**, DM Sans Medium **13px / 19.5px**.
- Default: fill `rgba(16,42,18,0.2)`, border 1px `rgba(46,125,50,0.42)`, text `#757575`
- Variant2: fill `rgba(36,77,38,0.22)`, border 1px `rgba(137,199,140,0.27)`, text `#757575`
- Variant3: fill `rgba(46,125,50,0.2)`, border 1px `rgba(98,255,106,0.23)`, text **white**

## Catalog filter chip — inactive style "Козырьки" (271:438; also 271:444 Зимние сады, 646:1238 Лестницы)
- Same metrics.
- Default: transparent, **border 1px `#26902b`**, text `#757575`
- Variant2 (hover): fill `rgba(35,115,39,0.12)`, border 1px `rgba(0,0,0,0.15)`, text `#757575`
- Variant3 (selected): fill `rgba(26,56,28,0.19)`, border 1px `rgba(0,0,0,0.09)`, text white (on light page backgrounds use `#1a1a1a` instead — white text is tuned for the dark kit board)

## "Оставить заявку" (271:459) — 300 x 45
- Width 300px, **padding 12px 0**, **radius 8px**, DM Sans Bold **14px / 21px**, centred.
- Default: fill **`#757575`**, text white
- Variant2 (hover): fill **white**, text **`#2e7d32`**
- Variant3 (pressed): fill white, text **`#075b0b`**
- Used on the green CTA card (project detail). On green `#2e7d32` background the white-fill variants are the intended look.

## Portfolio filter pill "Все работы" (271:495; also Козырьки / Зимние сады / Изделия из стекла / Офисные перегородки)
- **Height 39px, padding 9px 18px, radius 100px**, DM Sans Medium **14px / 21px**, no border.
- Default: fill `rgba(13,13,12,0.2)`, text `#757575`
- Variant2 (hover): fill `rgba(13,13,12,0.2)`, text white
- Variant3 (active): fill **`#0d0d0c`**, text white
- (On the light portfolio page the inactive pills use `rgba(0,0,0,0.06)` — see portfolio-list notes.)
- Mobile variants exist at 859:958…859:986 (58–104 x 20px, text-only).

## "Подробнее →" link (280:791)
- DM Sans Medium **12px / 18px**, no background.
- Default `#757575` · Variant2 (hover) `#9ca3af` · Variant3 (active) `#1a1a1a`.
