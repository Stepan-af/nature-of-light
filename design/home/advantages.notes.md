# Home — "Наши преимущества" advantages (node 82:264)

Page y=2386, full-bleed 1559 x 474. Background **`#f5f5f5`**, **1px bottom border `rgba(0,0,0,0.09)`**, **padding 72px top/bottom**.

## Container
- Centered, width/max-width **1200px**, padding 0 24px (content 1152px).
- 18px empty SectionLabel slot, then H2 (pt 10px).
- **H2 "Наши преимущества"**: code font **"Ancizar Serif" Regular 38px / 57px, letter-spacing -0.5px, `#1a1a1a`**. NOTE: the Figma render shows a plain grotesque sans (font was probably missing when rendered). Other section H2s on the page use Playfair Display Bold 38px — confirm with the designer; the safest match to the rest of the site is Playfair Display.
- Grid after 40px padding-top.

## Grid
- **4 columns x 276px, gap 16px**, single row 203.89px, cards stretch.

## Advantage card
- Background `#ffffff`, **border 1px `rgba(0,0,0,0.09)`**, **radius 14px**, **padding 24px 20px**, no shadow.
- **Icon tile** 44x44, **radius 10px**, 1px border and 8% tinted fill of an accent color; 20x20 line icon centred (stroke `#99A1AF`, 1.5px).
  - Card 1 green: fill `rgba(46,125,50,0.08)`, border `rgba(46,125,50,0.13)` (accent `#2e7d32`)
  - Card 2 indigo: fill `rgba(26,35,126,0.08)`, border `rgba(26,35,126,0.13)` (accent `#1a237e`)
  - Card 3 brown: fill `rgba(93,64,55,0.08)`, border `rgba(93,64,55,0.13)` (accent `#5d4037`)
  - Card 4 green again (same as card 1)
- **Title** (pt 14px): Playfair Display Bold **17px / 25.5px**, `#1a1a1a`.
- **Text** (pt 8px): DM Sans Regular **13px / 20.8px (1.6)**, `#757575`, width 234px.

## Content
1. Точный замер — "Бесплатный выезд специалиста в Москве и МО. Учитываем все нюансы объекта." — icon `assets/icon-adv-measure.svg` (diagonal expand arrows)
2. Собственное производство — "Изготавливаем на своём заводе — никаких посредников и переплат." — icon parts `icon-adv-factory-part1.svg` (price-tag outline) + `part2` (small circle = tag hole) → price tag glyph ("no overpaying")
3. Монтаж за 1 день — "Большинство конструкций устанавливается за один рабочий день." — `icon-adv-install-part2.svg` (13.5x9.5 rectangle) + `part1` (zigzag line below) → screen/panel with zigzag
4. Гарантия 5 лет — "Официальная гарантия на конструкцию и монтажные работы." — `icon-adv-warranty-part1/2.svg` (clock)

Multi-part icons: layer part1 and part2 absolutely inside a 20x20 box using the inset percentages in `advantages.tsx`.

## Hover
None shown.
