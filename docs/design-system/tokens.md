# Tokens

Every value of the system lives here, and only here.

- [What becomes a custom property](#what-becomes-a-custom-property)
- [Colour](#colour)
- [Contrast](#contrast)
- [Typography](#typography)
- [Spacing](#spacing)
- [Layout](#layout)
- [Shape and sizes](#shape-and-sizes)
- [Motion](#motion)

---

## What becomes a custom property

- **In `tokens.css`:** the colours, font families, font weights, font sizes, `--gutter`, `--section-space` and `--ease-out`. Only these have a name in the tables below.
- **Plain values, written directly in the CSS:** everything else (spacing, layout widths, shape, sizes, line-height, letter-spacing, durations). Each one is in the tables below, and no value outside them is used.
- **Breakpoints** are not custom properties: custom properties do not work inside the condition of an `@media`, so each media query writes the breakpoint by hand. Inside the `@media` the value of a custom property can change, for example `--gutter`.
- **Units:** font sizes in rem, with `html` at `font-size: 62.5%` (1rem = 10px, see [Typography](#scale)). Letter spacing in em. Line heights without a unit. Text width in em. Everything else in px.

---

## Colour

| Short name | Custom property | Hex | Role |
|---|---|---|---|
| `paper` | `--color-paper` | `#F3EEE4` | Page background. Footer text. Button text in `:active`. Secondary button background in `:hover` |
| `surface` | `--color-surface` | `#FFFFFF` | Cards, form steps, fields, estimate panel, fixed bottom bar, secondary buttons |
| `ink` | `--color-ink` | `#1D1C1A` | Main text, borders of cards and buttons, icons, footer background, primary button text, button background in `:active` |
| `muted` | `--color-muted` | `#5A554D` | Secondary text, field help, **form field borders**, disabled and future states |
| `kraft` | `--color-kraft` | `#C49A6C` | Decoration only: tape strips and the total highlight. The only text allowed on top is ink |
| `signal` | `--color-signal` | `#E4570F` | Primary button background, with ink text at weight 600. Footer link in `:hover`. Focus outline in the footer |
| `signal-hover` | `--color-signal-hover` | `#F07A3C` | Primary button background in `:hover`. Lighter than signal, so the contrast goes up |
| `signal-dark` | `--color-signal-dark` | `#A8400A` | Links on a light background and the 3px focus outline on a light background |
| `error` | `--color-error` | `#B42318` | Error messages and the border of fields with an error |
| `success` | `--color-success` | `#1E6B3A` | Request confirmation on `obrigado.html` |
| `line` | `--color-line` | `#D9CFBF` | Thin decorative 1px dividers only (for example, between calculator items) |

**About `signal-hover`:** it is the only value that was not in the project sheet. It comes from the rule that `:hover` cannot darken the orange (see Primary button in `components.md`).

**Never:**

- White (surface) or paper text on signal.
- Signal as a text colour on a light background.
- Text on kraft that is not ink.
- Line as a form field border. Field borders use muted.
- Signal-dark on ink (footer), neither as text nor as the focus outline.

---

## Contrast

WCAG 2.1 AA minimums:

- Normal text: 4.5:1 (criterion 1.4.3).
- Large text (24px, or 18.66px bold): 3:1.
- Component boundaries, required icons and the focus indicator: 3:1 against the adjacent colour (criterion 1.4.11).

The ratios were calculated with the WCAG 2.1 formula. The state tables in `components.md` use the ratios from these tables.

### Text on background

| Text | Background | Where | Ratio | AA |
|---|---|---|---|---|
| ink | paper | Page text, link `:hover` and `:active`, secondary button `:hover` | 14.73 | Yes (also AAA) |
| ink | surface | Text on cards and fields, secondary button | 17.03 | Yes (also AAA) |
| ink | signal | Primary button | 4.60 | Yes, just. That is why the text has weight 600 |
| ink | signal-hover | Primary button `:hover` | 6.13 | Yes |
| ink | kraft | Labels on the tape, total during the highlight | 6.64 | Yes |
| muted | paper | Secondary text outside cards | 6.39 | Yes |
| muted | surface | Field help, secondary text on cards, disabled state | 7.39 | Yes (also AAA) |
| signal-dark | paper | Links | 5.34 | Yes |
| signal-dark | surface | Links on cards | 6.17 | Yes |
| paper | ink | Footer text and links, buttons in `:active` | 14.73 | Yes (also AAA) |
| signal | ink | Footer link `:hover` | 4.60 | Yes |
| error | surface | Error messages in the steps | 6.57 | Yes |
| error | paper | Error messages outside cards | 5.69 | Yes |
| success | surface | Confirmation | 6.52 | Yes |
| success | paper | Confirmation outside cards | 5.64 | Yes |

### Elements that are not text (minimum 3:1)

| Element | Colour | Against | Ratio | AA |
|---|---|---|---|---|
| Border of cards and buttons | ink | paper / surface | 14.73 / 17.03 | Yes |
| Field border | muted | surface / paper | 7.39 / 6.39 | Yes |
| Field border in `:hover` | ink | surface | 17.03 | Yes |
| Border of fields with an error | error | surface | 6.57 | Yes |
| Focus outline on a light background | signal-dark | paper / surface | 5.34 / 6.17 | Yes |
| Focus outline in the footer | signal | ink | 4.60 | Yes |
| Focus outline of the skip link, on the side over the kraft tape | signal-dark | kraft | 2.41 | No. Accepted exception, see Skip link in `components.md` |
| Icons | ink | paper / surface | 14.73 / 17.03 | Yes |

### Forbidden combinations

| Combination | Ratio | Why |
|---|---|---|
| surface (white) on signal | 3.70 | Fails for normal text |
| paper on signal | 3.20 | Fails for normal text |
| signal as text on paper / surface | 3.20 / 3.70 | Fails for normal text |
| signal-dark on ink | 2.76 | Fails for text and for focus. In the footer, links are paper and focus is signal |
| muted on ink | 2.30 | Fails. In the footer, secondary text is also paper |
| kraft on paper | 2.22 | Decoration only |
| line on paper / surface | 1.33 / 1.54 | Never as a field border or as text |

### Backgrounds next to each other

| Pair | Ratio | Consequence |
|---|---|---|
| signal against paper | 3.20 | The orange does not mark the button boundary. The 2px ink border does, so it is never removed from buttons |
| signal-hover against paper | 2.40 | Same as above |
| surface against paper | 1.16 | Too close to tell apart. The secondary button `:hover` adds an underline |

---

## Typography

### Families and files

All under the SIL Open Font License 1.1. Four WOFF2 files, latin subset only, hosted on the site.

| Family | Weight | Use | Official page | WOFF2 file (latin subset) |
|---|---|---|---|---|
| Barlow Condensed | 700 | Headings and logo | [Google Fonts](https://fonts.google.com/specimen/Barlow+Condensed) and [author's repository](https://github.com/jpt/barlow) | [latin-700-normal.woff2](https://cdn.jsdelivr.net/fontsource/fonts/barlow-condensed@latest/latin-700-normal.woff2) |
| Barlow | 400 | Text | [Google Fonts](https://fonts.google.com/specimen/Barlow) and [author's repository](https://github.com/jpt/barlow) | [latin-400-normal.woff2](https://cdn.jsdelivr.net/fontsource/fonts/barlow@latest/latin-400-normal.woff2) |
| Barlow | 600 | Emphasised text, buttons, field labels | (same) | [latin-600-normal.woff2](https://cdn.jsdelivr.net/fontsource/fonts/barlow@latest/latin-600-normal.woff2) |
| IBM Plex Mono | 500 | Labels, reference numbers, m³ | [Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Mono) and [IBM's repository](https://github.com/IBM/plex) | [latin-500-normal.woff2](https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-mono@latest/latin-500-normal.woff2) |

- **Why these links:** the Google Fonts download and the official repositories give full files (TTF or OTF, with every alphabet). The links in the last column are from Fontsource, which distributes the same Google Fonts files already in WOFF2 and split by subset. It is the shortest way to get exactly four small files.
- The latin subset covers everything the site needs in pt-PT: ã, õ, ç, accents, €, ³ and º.
- File names in `assets/fonts/`: `barlow-condensed-700.woff2`, `barlow-400.woff2`, `barlow-600.woff2`, `ibm-plex-mono-500.woff2`.

| Custom property | Value | Used for |
|---|---|---|
| `--font-heading` | `"Barlow Condensed", "Barlow Condensed Fallback", sans-serif` | h1, h2, h3, logo |
| `--font-body` | `"Barlow", "Barlow Fallback", system-ui, sans-serif` | Text, buttons, fields, menu |
| `--font-mono` | `"IBM Plex Mono", "Courier New", ui-monospace, monospace` | Labels, reference, m³, quantities |
| `--font-weight-regular` | `400` | Text |
| `--font-weight-medium` | `500` | Everything in IBM Plex Mono |
| `--font-weight-semibold` | `600` | Buttons, field labels, menu, error messages |
| `--font-weight-bold` | `700` | Headings and logo |

### Fallback fonts

System fonts have a different width. Without an adjustment, the text changes size when the real fonts arrive and the page jumps. At 1024px the navigation used to drop to a second line. That is why `base.css` has three `@font-face` rules that take the computer's Arial with `local()` and shrink it with `size-adjust` until it takes the width of the real font. They have no `font-display`, because nothing is downloaded.

| `font-family` | `src` | `font-weight` | `size-adjust` | Replaces |
|---|---|---|---|---|
| `"Barlow Fallback"` | `local("Arial"), local("ArialMT")` | 400 | 95.16% | Barlow 400 |
| `"Barlow Fallback"` | `local("Arial Bold"), local("Arial-BoldMT")` | 600 | 90.68% | Barlow 600 |
| `"Barlow Condensed Fallback"` | `local("Arial Bold"), local("Arial-BoldMT")` | 700 | 74.99% | Barlow Condensed 700 |

- The `size-adjust` values are the width of the real font divided by the width of Arial, measured in the browser with sentences from the site.
- The mono needs no `@font-face`: Courier New has the same width per letter as IBM Plex Mono.
- Where there is no Arial, as on Android, the browser moves to the next font in the stack, with no adjustment.

### Scale

**Units:** `html` has `font-size: 62.5%`. With the browser text at its default size (16px), 1rem becomes 10px and the maths is simple: 1.6rem = 16px. Because it is a percentage, it still respects the text size the person chooses in the browser settings. All font sizes are in rem. The `body` must set its text size with `--font-size-body`. Without it, all text with no size of its own becomes 10px.

`clamp(minimum, preferred, maximum)` picks a size between the minimum and the maximum that grows with the screen width. The values below go from 360px to 1280px wide. The preferred value mixes `rem` and `vw` so the text keeps growing with browser zoom (criterion 1.4.4).

| Custom property | Value | Mobile | Desktop | Font and weight | Line height | Letter spacing | Used for |
|---|---|---|---|---|---|---|---|
| `--font-size-h1` | `clamp(4rem, 3.061rem + 2.609vw, 6.4rem)` | 40px | 64px | Barlow Condensed 700 | 1.05 | 0 | h1 |
| `--font-size-h2` | `clamp(3rem, 2.452rem + 1.522vw, 4.4rem)` | 30px | 44px | Barlow Condensed 700 | 1.15 | 0 | h2, step headings |
| `--font-size-h3` | `clamp(2.2rem, 1.965rem + 0.6522vw, 2.8rem)` | 22px | 28px | Barlow Condensed 700 | 1.15 | 0.01em | h3, card headings |
| `--font-size-lead` | `clamp(1.8rem, 1.683rem + 0.3261vw, 2.1rem)` | 18px | 21px | Barlow 400 | 1.5 | 0 | Hero lead text |
| `--font-size-body` | `clamp(1.6rem, 1.522rem + 0.2174vw, 1.8rem)` | 16px | 18px | Barlow 400 | 1.6 | 0 | Body text |
| `--font-size-body` | (same) | 16px | 18px | Barlow 600 | 1.2 | 0.01em | Buttons and menu links |
| `--font-size-body` | (same) | 16px | 18px | Barlow 600 | 1.2 | 0 | Field label (`<label>`) |
| `--font-size-input` | `1.6rem` | 16px | 16px | Barlow 400 | 1.2 | 0 | Text inside fields |
| `--font-size-small` | `1.4rem` | 14px | 14px | Barlow 400 (errors 600) | 1.5 | 0 | Help, errors, notices, estimate sentence |
| `--font-size-label` | `1.4rem` | 14px | 14px | IBM Plex Mono 500, uppercase | 1.2 | 0.08em | Mono labels ("PASSO 02 / 04") |
| `--font-size-price` | `2.2rem` | 22px | 22px | Barlow 600 | 1.3 | 0 | Estimate price ("350 € a 420 €"), in the step 4 summary and the panel |
| `--font-size-total` | `clamp(2.8rem, 2.487rem + 0.8696vw, 3.6rem)` | 28px | 36px | IBM Plex Mono 500 | 1.2 | 0 | Total in m³ |
| `--font-size-estimate` | `1.6rem` | 16px | 16px | Total in IBM Plex Mono 500, price in Barlow 600 | 1.2 | 0 | Total and price in the mobile bar |
| `--font-size-logo` | `2.8rem` | 28px | 28px | Barlow Condensed 700 | | 0.02em | "ENCAIXE" in the logo |
| `--font-size-logo-sub` | `1.4rem` | 14px | 14px | IBM Plex Mono 500 | | 0.2em | "MUDANÇAS" in the logo |

### Rules

- **Headings are not uppercase.** Uppercase is kept for the mono labels, so it is the visual sign of "label".
- **Text inside fields is always 16px.** Safari on the iPhone zooms in automatically when a field with smaller text gets focus, and the page ends up misaligned.
- Maximum line length in paragraphs: about 65 characters, written as `37em`. Longer lines are tiring to read.
- **Why `em` and not `ch`:** `ch` is the width of the "0" in the font in use. While Barlow loads, it is the "0" of the fallback font, which has another width, and the boxes change size when Barlow arrives. `em` is the font size, the same in both fonts. In Barlow the "0" takes 0.565em, so 65 characters give about 37em and 48 characters about 27em.
- The uppercase of the labels comes from `text-transform: uppercase`. Some screen readers spell out words written in uppercase in the HTML.
- `<strong>` uses weight 600. There is no 700 file for Barlow, and without this rule the browser would fake a bold.

---

## Spacing

A scale with a 4px base. All values in px, with no custom property except `--section-space`.

| Value | Where it is used |
|---|---|
| 4px | **Inside components:** logo padding (vertical), between the error icon and the message |
| 8px | **Inside components:** between the label and the field, between the icon and the text in a button, logo padding (horizontal) |
| 12px | **Inside components:** field padding, vertical button padding, between elements of a card |
| 16px | **Inside components:** between the − and + buttons and the quantity, between calculator items. Page side margin on mobile |
| 24px | **Inside and between components:** card padding on mobile, horizontal button padding, between fields of the same step |
| 32px | **Between components:** gap between cards in a grid, card padding from 768px |
| 48px | **Between components:** between a section heading and its content, between the form and the estimate panel, between the steps when they show one after another (without JavaScript) |
| 64px | **Between sections** on mobile |
| 96px | **Between sections** from 1024px |

| Custom property | Value | Used for |
|---|---|---|
| `--section-space` | `64px`, and `96px` from 1024px | Space between sections |

**Rule to decide:** the more related two elements are, the smaller the space between them. A label sits 8px from its field and 24px from the next field, and that is what shows which field it belongs to.

---

## Layout

### Widths

| Value | Used for |
|---|---|
| `1152px` | Maximum content width, not counting the side margins. Above this, lines and grids get too wide to read at once |
| `37em` | Maximum width of running text, about 65 characters |
| `27em` | Maximum width of shorter text blocks, about 48 characters |
| `640px` | Maximum width of the form column |
| `320px` | Width of the estimate panel from 1024px |

| Custom property | Value | Used for |
|---|---|---|
| `--gutter` | `16px`, `24px` from 768px, `32px` from 1024px | Page side margins |

### Breakpoints

Two breakpoints, in px: tablet (768px) and desktop (1024px). Media queries use `min-width`: the base CSS is the mobile one and each breakpoint adds what changes from that width.

| Name | Value | Written as |
|---|---|---|
| Tablet | `768px` | `@media (min-width: 768px)` |
| Desktop | `1024px` | `@media (min-width: 1024px)` |

| Width | What changes | Why |
|---|---|---|
| up to 767px | One column. Menu behind a button, which stays up to 1023px. Estimate in a fixed bar at the bottom | Only one readable column fits on a phone |
| 768px | Services and calculator rooms in 2 columns. Side margin 24px. The menu stays behind the button | It is the width of a tablet. Two cards side by side get 344px each (768px minus the 48px of margins and the 32px gap between them, divided by two). The menu does not become visible here because, tested in the browser, the links do not fit on one line next to the logo |
| 1024px | Menu always visible, the "Menu" button disappears. Services in 3 columns. "Como funciona" as a horizontal line. On the quote page, the estimate panel moves next to the form and the calculator goes back to one column. Side margin 32px | From here the menu links fit on one line next to the logo (checked in the browser at exactly 1024px). At 1024px, minus the margins (64px), the panel (320px) and the gap between them (48px), the form gets 592px. Below this, the fields and the calculator were cramped. With the panel next to it, the form is at most 640px wide: in two columns, names like "Cama de solteiro com colchão" took three lines |

---

## Shape and sizes

| Property | Value | Why |
|---|---|---|
| Corner radius | `0` on everything | A printed label has square corners. A single rounded element would break the style |
| Border of cards, buttons, fields, logo and header | `2px` | A visible ink line. On fields, a thicker border also helps people with low vision |
| Border of decorative dividers | `1px` in line | They are only a visual hint, not a component boundary |
| Border of disabled states | `2px` dashed in muted | The dashes show "not available" without relying on colour alone |
| Focus outline | `3px`, offset `2px` from the element | The offset keeps the outline from merging with the 2px ink border |
| Shadows | None | Depth comes from the contrast between paper and surface and from the ink border. Soft shadows were the generic look to avoid. Hard offset shadows were the "neo-brutalist" tic |

| Size | Used for |
|---|---|
| `44px` | Minimum height and width of buttons and of the mobile menu links. Minimum touch target |
| `48px` | Minimum height of fields |
| `16px` | Alert icon |
| `24px` | Button and menu icons |
| `20px` | Minimum height of the kraft tape |

---

## Motion

| Custom property | Value | Used for |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.2, 0, 0, 1)` | Every animation except the page scroll |

`--ease-out` starts fast and brakes at the end. It feels like a response to the click, not a decorative effect.

| Duration | Used for |
|---|---|
| `200ms` | New step entering (quote page, Steps) |
| `300ms` | `:hover` of the buttons (Buttons) and of the menu links (Navigation) |
| `400ms` | Menu opening and closing (Navigation) |
| `600ms` | Total highlight (quote page, Estimate panel) |

### Rules for every animation

- Each animation is described in the Motion field of its component or page section, with what happens for people who asked the system for less motion (`prefers-reduced-motion: reduce`). A new animation uses a duration from this table and `--ease-out`.
- CSS transitions and animations animate `opacity`, `transform`, `background-color` and `color`. The exception is the menu, which animates its height with `grid-template-rows`, because only that way does the panel push the page and take the header border with it. Never `transition: all`, which animates properties that were not meant to animate.
- **Scrolling to a section when an anchor link is clicked:** `scroll-behavior: smooth` on `html`, with the duration and curve decided by the browser. It is written only inside `@media (prefers-reduced-motion: no-preference)`. Outside it, it does not exist, and the page jumps without sliding. Animated scrolling of the whole page is one of the movements that most affects people who asked the system to reduce animations.
