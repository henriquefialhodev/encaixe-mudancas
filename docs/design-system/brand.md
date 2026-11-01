# Brand

- [Visual direction](#visual-direction)
- [Logo](#logo)
- [Icons](#icons)
- [Images](#images)

---

## Visual direction

**Shipping label: paper, ink, tape, signal.**

- **Paper:** the background is paper-coloured and the content lives on white cards, like labels stuck on a box.
- **Ink:** text, borders and icons in the same dark colour. Square corners and 2px borders, like a printed label.
- **Tape:** strips of kraft tape separate the sections.
- **Signal:** orange appears only on actions. If it is orange, it does something.

**What it tells the visitor:** an organised company that identifies and handles every object with method. Everything has a label, a number and a volume. The price is clear and the process has counted steps. It is the feeling of "this is under control", which is what worries someone who is moving house.

**What to avoid:**

- Gradients, soft shadows, rounded corners and glass effects.
- The "neo-brutalism" of offset black shadows and saturated colours. It looks like the same style, but it is an overused visual tic and it gets tiring.
- Stock illustrations and AI-generated photos of people.
- Orange as decoration (headings, icons, section backgrounds).
- Text over photos.
- Uppercase outside the mono labels. If everything is uppercase, the labels stop standing out.

---

## Logo

Typographic logo, with an optional symbol for the favicon and the Open Graph image.

### Wordmark

Two lines inside a rectangle with a 2px border, like a shipping label.

| Line | Text | Font | Weight | Size in the header | Letter spacing |
|---|---|---|---|---|---|
| 1 | ENCAIXE | Barlow Condensed | 700 | `--font-size-logo` (28px) | 0.02em |
| 2 | MUDANÇAS | IBM Plex Mono | 500 | `--font-size-logo-sub` (14px) | 0.2em |

- Both lines are left-aligned. At 14px and with the wide spacing, "MUDANÇAS" takes 87px, practically the same width as "ENCAIXE" (88.5px). The two lines form one block.
- Padding inside the rectangle: 4px top and bottom, 8px on the sides.
- The uppercase comes from `text-transform: uppercase`. In the HTML the text stays "Encaixe Mudanças", so the screen reader reads it as words and not letter by letter.
- **In the header, the logo is HTML text inside the link to the home page, not an image.** The fonts are already loaded, so it costs no extra request, it grows with zoom, and the link name is the text itself.

### Symbol

A square drawn with a 2px stroke, with the top right corner missing. A smaller filled square fits into that space. It is a box with a piece fitting into it, which is the name of the company ("encaixe" means "fit").

- Used in the favicon and the Open Graph image.
- In these versions, the file is an SVG with the text converted to outlines (in Figma, "Outline stroke" and "Flatten"). An SVG used as an image does not load the site fonts, so the text has to become shapes.
- In the favicon at 16px and 32px only the symbol is used, with a thicker stroke than the icons, so it does not disappear. In `favicon.svg`, the symbol is drawn with a stroke of 3 and scaled to 75%, which gives 2.25px on the 32px grid.
- The favicon background has rounded corners, with a 4px radius. It is the only exception to the radius of 0 in the rest of the system, accepted because at 16px, in a browser tab, it is barely visible.

### Versions

| Version | Logo colour | Background | Contrast |
|---|---|---|---|
| Light background | ink | paper or surface | 14.73 / 17.03 |
| Dark background (footer) | paper | ink | 14.73 |

- Never in orange, because orange is reserved for actions.
- Never in kraft and never over photos.
- Clear space around it: at least the height of the "MUDANÇAS" line.
- Size in the header: 108.5 × 58.2px, border included. It is also the minimum size of the wordmark. Below that, only the symbol is used.

---

## Icons

- **Style:** stroke, no fill, square corners (`square` caps, `miter` joins), in the text colour (`currentColor`).
- **Grid:** 24 × 24.
- **Stroke width:** 2px, the same as the borders.
- **Sizes:**

| Size | Where |
|---|---|
| 16px | Alert icon in error messages |
| 24px | Buttons, menu, − and +, step indicator |

- **Source:** drawn by hand or adapted from [Lucide](https://lucide.dev) (ISC licence), changing the caps and joins from round to square.
- They live in the external SVG sprite and are used with `<use>`. The stroke attributes (`fill="none"`, `stroke="currentColor"`, `stroke-width="2"`) sit on each `<symbol>`, because they are read from the symbol and not from the `<svg>` where it is used.
- Decorative icons next to text: `aria-hidden="true"` and `focusable="false"`.
- Icon-only buttons (− and +): the accessible name comes from the button, for example "Adicionar sofá médio (3 lugares)".
- Icons needed: menu, close, plus, minus, right arrow, left arrow, tick, alert, edit and the down arrow of the `<select>`.
- Sprite ids: `icon-menu`, `icon-close`, `icon-plus`, `icon-minus`, `icon-arrow-right`, `icon-arrow-left`, `icon-checkup` (tick), `icon-alert`, `icon-chevron-down`.
- **The calculator items have no icons.** Each item shows only its name and volume, as in the quote page design. The list reads well this way, and it would be 25 icons to draw.

---

## Images

- **Style:** documentary photography, natural colours, natural light, no people with a visible face. No filters, no colour overlays, no text on top.
- **Treatment:** square corners and a 2px ink border, like a photo stuck on a label.

| Image | Ratio | Widths to generate (WebP) | Loading |
|---|---|---|---|
| Hero | 3:2 | 480, 800, 1200, 1536 | Immediate, with `fetchpriority="high"` |
| Services | 4:3 | 480, 800, 1200 | `loading="lazy"` |
| Packing | 4:3 | 480, 800, 1200 | `loading="lazy"` |
| Open Graph | 1200 × 630 (1.91:1) | 1200 only | Not shown on the page |

- The largest hero width is 1536px because that is the width of the original. An image is never generated larger than the original.
- The files are generated with `npm run images` in the `tools/` folder. The script reads the originals from `src-images/` and writes to `public/assets/images/` with the name `name-width.webp` (for example `img-hero-800.webp`), in WebP at quality 75.
- `srcset` with the widths above and `sizes` according to the column the image sits in.
- `width` and `height` always in the HTML, so the browser reserves the space and the page does not jump while the image loads.
- Photos with `loading="lazy"` also get their ratio in the CSS, with `aspect-ratio`. The `height: auto` in `base.css` makes Chrome DevTools ignore the ratio from the attributes and flag the image as having no dimensions.
- The `alt` describes what the image shows and what matters for the page, in pt-PT. Example for the hero: "Sala vazia com caixas de cartão empilhadas e etiquetadas à mão".
