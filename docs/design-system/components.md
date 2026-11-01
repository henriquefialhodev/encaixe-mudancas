# Components

Shared components, styled in `public/css/components.css`, and utilities from `public/css/base.css`. Check this list before creating a component and reuse one when it fits. Page sections are in `pages.md`.

| Component | Classes | Used in |
|---|---|---|
| [Skip link](#skip-link) | `.skip-link` | Every page |
| [Top bar](#top-bar) | `.site-top-bar` | Every page |
| [Header](#header) | `.site-header`, `.site-header-inner` | Every page |
| [Logo](#logo) | `.logo`, `.logo-brand`, `.logo-sub` | Every page (header and footer) |
| [Navigation](#navigation) | `.site-nav` and children | Every page |
| [Footer](#footer) | `.site-footer` and children | Every page |
| [Buttons](#buttons) | `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-menu` | Every page |
| [Link](#link) | Element styles, no class | Every page |
| [Label](#label) | `.label` | Every page |
| [Card](#card) | `.site-card`, `.site-card-title`, `.site-card-text` | `index.html` (services) |
| [Kraft tape](#kraft-tape) | `.site-tape` | `index.html` |
| [Visually hidden](#visually-hidden) | `.visually-hidden` (`base.css`) | Every page |

---

## Common rules

- **Only one primary (orange) button per screen or per step.** This is how the rule "orange only for actions" is read: orange appears only on actions, but not every action is orange. If they all were, "Seguinte" would stop standing out.
- **Minimum touch target: 44 × 44px.**
- **Every animation is in the Motion field of its component** and follows the rules in `tokens.md` (Motion).
- **Disabling is the exception.** The project sheet already defines that "Seguinte" and the submit button validate on click instead of being disabled. A disabled button does not say why it is disabled and it loses focus. The disabled style exists for the calculator − and + buttons and for future cases.
- **`disabled` and `aria-disabled` are not the same thing.** A button with `disabled` leaves the Tab order and, if it had focus, the focus is lost to the start of the page. With `aria-disabled="true"`, the button stays focusable and the screen reader announces "indisponível", but JavaScript has to ignore the click. The − and + buttons use `aria-disabled`.

---

## Skip link

**What it is:** the "Saltar para o conteúdo" link, to jump straight to the main content.

**Classes and file:** `.skip-link`, `components.css`.

**Measurements:** looks like a secondary button. Hidden above the screen, it appears 12px from the top when it gets focus, over the top bar.

**States:** visible only with keyboard focus. The focus outline is the one from the secondary button.

**Accessibility:** a deliberate exception. On the side that sits over the kraft tape, the signal-dark focus outline has 2.41:1, below 3:1. It is accepted because the link has a surface background and an ink border and is clearly visible, and it is only on screen while it has focus.

---

## Top bar

**What it is:** the strip above the header with the notice that this is a fictional project. It uses the kraft tape style.

**Classes and file:** `.site-top-bar`, `components.css`.

**Measurements:** mono label in ink, centred, with 8px of padding top and bottom. The height grows with the text.

**States:** not interactive.

**Accessibility:** the notice is real text, without `aria-hidden`, because it is information and not decoration. It sits inside the `<header>`, before the container, so people who navigate by landmarks with a screen reader pass through it.

---

## Header

**What it is:** the page header, with the logo on the left and the menu on the right.

**Classes and file:** `.site-header`, `.site-header-inner`, `components.css`.

**Measurements:** paper background, 2px ink bottom border. Padding of 12px top and bottom.

**States:** not interactive.

**Mobile and desktop:** padding of 20px top and bottom from 1024px.

---

## Logo

**What it is:** the brand name and tagline, in the header and the footer. The design of the logo (lines, fonts, sizes, versions, clear space) is in `brand.md`.

**Classes and file:** `.logo`, `.logo-brand`, `.logo-sub`, `components.css`.

**States:** the logo is the link to the home page and follows the link states.

**Mobile and desktop:** in the footer it uses the dark background version, with text and border in paper.

---

## Navigation

**What it is:** the main navigation. A panel behind the "Menu" button below 1024px, always visible from 1024px.

**Classes and file:** `.site-nav`, `.site-nav-window`, `.site-nav-panel`, `.site-nav-list`, `.is-instant`, `components.css`. Behaviour in `js/main.js`.

**Measurements (menu links):** Barlow 600, ink, no underline at rest. Inside a menu, the position already shows that they are links.

**States (menu links):**

| State | Look | Contrast |
|---|---|---|
| Normal | Ink text | 14.73 |
| `:hover` | 2px underline, offset 0.3em from the text | 14.73 |
| `:focus-visible` | 3px signal-dark outline, offset 2px | 5.34 |
| `:active` | 3px underline | 14.73 |
| Current page (`aria-current="page"`) | Fixed 3px underline. It does not rely on colour alone | 14.73 |
| Disabled | Does not exist | |

**Mobile and desktop:**

- **Open menu on mobile:** a panel with a surface background below the header, from edge to edge of the screen, with a 2px ink top border. The bottom border is the header's own. Padding of 8px at the top and 24px at the bottom. One link per line, each at least 52px high, separated by a 1px line in line. "Pedir orçamento" comes last, 16px after the last link, full width.
- Closed, the panel has zero height and `visibility: hidden`, so the links do not get focus.
- Without JavaScript, the menu is always open and the button does not show.
- **Menu from 1024px:** the links sit on one line. The gap between them and up to the "Pedir orçamento" button grows with the screen width, `clamp(24px, 2.25vw, 32px)`: 24px at 1024px, where everything has to fit on one line, and 32px from 1440px. There are always at least 24px between the logo and the navigation.
- From 1024px, the `:hover` underline is no longer the text underline. It is a 2px ink line, drawn with `::after` below the link, that grows from left to right. Below 1024px it stays the text underline, with no animation.

**Accessibility:** Esc closes the menu and returns focus to the button only when the focus was inside the menu. If it was somewhere else on the page, it stays where it was.

**Motion:**

| What animates | Properties | Duration | Curve | With `prefers-reduced-motion: reduce` |
|---|---|---|---|---|
| Menu opening and closing, below 1024px | Panel height, from zero to the height of the content, with `grid-template-rows` from `0fr` to `1fr`. `visibility` only becomes hidden at the end of the closing. When a menu link is clicked, the menu closes with no animation (`.is-instant`), so the page stops at the right section | 400ms | `--ease-out` | No animation. The menu opens and closes at once |
| `:hover` of the menu links, from 1024px | 2px line that grows from left to right, with `transform: scaleX` from 0 to 1 | 300ms | `--ease-out` | No animation. The line appears whole |

- On page load, the menu is already closed below 1024px, with no animation. A script in the `<head>`, before the stylesheets, puts the `js` class on `<html>`, and the CSS closes the menu while the button still has `hidden`. Without this, the menu was drawn open and only closed when `main.js` ran, which made the page jump. Without JavaScript the class does not exist and the menu stays open.

---

## Footer

**What it is:** the footer with the logo, the navigation, the fictional project notice, the Livro de Reclamações Eletrónico link and the closing line.

**Classes and file:** `.site-footer`, `.site-footer-inner`, `.site-footer-nav`, `.site-footer-nav-list`, `.site-footer-note`, `.site-footer-complaints`, `.site-footer-copyright`, `components.css`.

**Measurements:** ink background, paper text and links. Logo in the dark background version. Padding of 48px top and bottom.

- **Livro de Reclamações:** a box with a 2px paper border and 16px of padding. The link is weight 600. The box is the link itself, so it is clickable over its whole area, padding included.
- **Closing line:** small text.

**States:** links and focus follow the footer column of [Link](#link), with the underline offset 0.15em.

**Mobile and desktop:**

- **On mobile:** the parts stacked with 32px between them, in this order: logo, links, fictional project notice, Livro de Reclamações Eletrónico, closing line. Each link is at least 44px high, set on the `<a>` itself and not on the list item, because the touch target is the link box.
- **From 1024px:** padding of 64px top and bottom. A three-column grid (`3fr 2fr auto`) with 64px between columns. The first has the logo and the notice, 24px apart, with the notice at most 27em wide. The second has the links, 12px apart. The third has the Livro de Reclamações and takes the width of its text, so it fits on one line. The complaints box gets 16px of padding top and bottom and 20px on the sides.
- **Closing line from 1024px:** below the three columns, 48px away, with a 1px paper top border and 24px of padding at the top.

---

## Buttons

**What it is:** buttons and links styled as buttons. Three variants: primary, secondary and menu.

**Classes and file:** `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-menu`, `components.css`.

### Primary button

Examples: "Pedir orçamento", "Seguinte", "Enviar pedido".

**Measurements:** signal background, ink text in Barlow 600, 2px ink border, square corners. Padding of 12px top and bottom and 24px on the sides. Minimum height 44px. Optional arrow icon to the right of the text, 24px, 8px from the text.

**States:**

| State | Look | Contrast |
|---|---|---|
| Normal | Signal background, ink text, ink border | 4.60 |
| `:hover` | Signal-hover background (lighter). Text and border unchanged | 6.13 |
| `:focus-visible` | Same as normal + 3px signal-dark outline, offset 2px. The background does not change | text 4.60, outline 5.34 / 6.17 |
| `:active` | Ink background, paper text. Stamp effect | 14.73 |
| Disabled | Surface background, muted text, 2px dashed muted border, `not-allowed` cursor. No orange, because orange means "you can click" | 7.39 |

**Why `:hover` gets lighter:** ink on signal gives 4.60, only 0.10 above the minimum. Any darker orange gets closer to ink and the ratio drops below 4.5. A lighter orange moves away from ink and the ratio goes up to 6.13.

**Why the border is never removed:** the button boundary does not depend on the orange. Signal against paper gives only 3.20 and signal-hover gives 2.40. That is fine, because the 2px ink border marks the boundary (14.73 against paper).

### Secondary button

Examples: "Anterior", "Menu".

**Measurements:** surface background, ink text in Barlow 600, 2px ink border. The same measurements as the primary.

**States:**

| State | Look | Contrast |
|---|---|---|
| Normal | Surface background, ink text | 17.03 |
| `:hover` | Paper background + underlined text. Surface and paper are very close (1.16:1), so the underline is what makes the hover visible | 14.73 |
| `:focus-visible` | Same as normal + 3px signal-dark outline, offset 2px | outline 5.34 / 6.17 |
| `:active` | Ink background, paper text | 14.73 |
| Disabled | Same as the disabled primary | 7.39 |

### Menu button

**What it is:** the "Menu" button that opens and closes the navigation, below 1024px.

**Measurements:** a secondary button of at least 44 × 44px, with the menu icon and the word "Menu" as a mono label. Padding of 10px top and bottom and 12px on the sides. With the menu open, the icon becomes a cross and the text becomes "Fechar".

**States:** the same as the secondary button.

**Mobile and desktop:** disappears from 1024px.

### Motion (all buttons)

| What animates | Properties | Duration | Curve | With `prefers-reduced-motion: reduce` |
|---|---|---|---|---|
| `:hover` of the primary and secondary buttons | Background colour and text colour | 300ms | `--ease-out` | No animation. The colours change at once |

- `:active` has no transition. The click changes the colours at once, which is the stamp effect, and the text is never the same colour as the background halfway through a transition.

---

## Link

**What it is:** links in text and buttons that look like links (example: "Editar" in the step 4 summary).

**Classes and file:** element styles in `components.css`, no class.

**States:**

| State | Light background | Footer (ink background) |
|---|---|---|
| Normal | signal-dark, 1px underline (5.34 / 6.17) | paper, 1px underline (14.73) |
| `:hover` | ink, 2px underline (14.73 / 17.03) | signal, 2px underline (4.60) |
| `:focus-visible` | 3px signal-dark outline, offset 2px (5.34 / 6.17) | 3px signal outline, offset 2px (4.60) |
| `:active` | ink, no underline | paper, no underline |
| Disabled | Does not exist. A link with no destination is not a link. If an action is not available, it is not shown | (same) |

- `:visited` stays the same as normal. On a small site, changing the colour only adds one more colour to manage.

**Measurements:** the underline of text links is offset 0.15em from the text.

**Accessibility:** links inside text always keep the underline, because colour alone is not enough to tell a link apart (criterion 1.4.1).

---

## Label

**What it is:** small uppercase text above a heading or inside a tape ("SERVIÇO 01", "PASSO 02 / 04").

**Classes and file:** `.label`, `components.css`.

**Measurements:** IBM Plex Mono 500, `--font-size-label`, line height 1.2, letter spacing 0.08em, uppercase with `text-transform: uppercase`.

**States:** not interactive.

**Accessibility:** the uppercase comes from CSS, not from the HTML, because some screen readers spell out words written in uppercase.

---

## Card

**What it is:** a card with a label, a heading and text. Used for the services. The form steps and the estimate panel use the same look (see `pages.md`).

**Classes and file:** `.site-card`, `.site-card-title`, `.site-card-text`, `components.css`.

**Measurements:** surface background, 2px ink border, square corners, no shadow. Padding of 24px on mobile. Inner order: mono label ("SERVIÇO 01") → h3 heading → text → optional link, with 12px between elements.

**States:**

| State | Look |
|---|---|
| Normal | As above |
| `:hover`, `:focus-visible`, `:active`, disabled | Do not exist. The card is not clickable. Only the link inside it is, and it follows the link states |

**Mobile and desktop:** padding of 32px from 768px.

**Why the whole card is not a link:** the screen reader would read the whole card as the link name, and it would no longer be possible to select the card text.

---

## Kraft tape

**What it is:** a decorative strip of packing tape between sections.

**Classes and file:** `.site-tape`, `components.css`.

**Measurements:** kraft background, at least 20px high, the width of the container, no rotation.

- Variant with text: mono label in ink ("FRÁGIL · ESTE LADO PARA CIMA"), 6.64:1, centred. The tape has 7px of padding top and bottom and 12px on the sides, and grows with the text. Empty, it keeps the 20px minimum.
- Where: between the home page sections and at the top of the estimate panel. At most one tape between two sections. The tape of the estimate panel is styled in `quote.css` (see Estimate panel in `pages.md`).

**States:** not interactive.

**Accessibility:** purely decorative: `aria-hidden="true"`. If the text is only decoration, it keeps `aria-hidden="true"`. The top of the page uses the [Top bar](#top-bar), which carries information.

---

## Visually hidden

**What it is:** a utility class that hides text from the eyes and keeps it for the screen reader. `display: none` and `hidden` hide it from both.

**Classes and file:** `.visually-hidden`, `base.css`, for every page.

**Measurements:** shrinks the text box to 1px and clips the rest: `position: absolute`, `width` and `height` of 1px, `margin: -1px`, `padding` and `border` at 0, `overflow: hidden`, `clip-path: inset(50%)` and `white-space: nowrap`. The 1px values are an accessibility technique and not design spacing, so they are not in the scale.

**States:** not interactive.

**Accessibility:** used in "Passo 1 de 4" of the step indicator and for the "concluído" text of completed steps (see `pages.md`).
