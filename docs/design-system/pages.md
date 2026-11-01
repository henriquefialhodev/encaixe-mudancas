# Pages

Each page with its sections in order, and the sections that exist only on that page. Shared components are in `components.md`.

- [Home](#home) (`index.html`)
- [Quote](#quote) (`orcamento.html`)

---

## Home

**File:** `index.html`, styled in `css/pages/home.css`.

**Order:** [Top bar](components.md#top-bar) and [Header](components.md#header), [Hero](#hero), [Services](#services), [How it works](#how-it-works), [Service areas](#service-areas), [FAQ](#faq), [Contacts](#contacts), [Footer](components.md#footer). A [Kraft tape](components.md#kraft-tape) separates some of the sections.

**Every section:** vertical space of `--section-space` (64px, 96px from 1024px). The section heading sits 48px from the content.

### Hero

**Classes:** `.site-hero`, `.site-hero-inner`, `.site-hero-content`, `.site-hero-description`, `.site-hero-actions`, `.site-hero-image`.

**Measurements:** 48px of space at the top and 64px at the bottom. Label, heading, lead text and buttons 16px apart, with 8px more before the lead text and 16px more before the buttons. The buttons sit one above the other, 12px apart. The photo sits 32px from the text.

**States:** only the buttons are interactive (see [Buttons](components.md#buttons)).

**Mobile and desktop:**

- From 768px: 64px top and bottom. The buttons sit side by side, 16px apart. The photo sits 48px from the text. The heading is at most 14em wide and the lead text 37em.
- From 1024px: 96px top and bottom. Two equal columns with 64px between them, vertically centred: text on the left, photo on the right.

**Accessibility:** the hero photo loads immediately, with `fetchpriority="high"` (see Images in `brand.md`).

### Services

**Classes:** `.site-services`, `.site-services-inner`, `.site-services-grid`, `.site-services-image`. The cards are the [Card](components.md#card) component.

**Measurements:** a grid with 32px between pieces. Six pieces, in HTML order: van photo, card 01, card 02, packing photo, card 03, card 04.

**States:** not interactive. Only the links inside the cards are.

**Mobile and desktop:**

- 1 column on mobile, 2 from 768px, 3 from 1024px.
- From 768px the photos fill the height of the cell with `object-fit: cover`, so they take the height of the card next to them without being distorted.
- From 1024px, the van photo moves to the third column of the first row, and the other pieces follow in order.

**Accessibility:** the photos have `loading="lazy"` and their ratio in the CSS with `aspect-ratio` (see Images in `brand.md`).

### How it works

**What it is:** the "Como funciona" timeline.

**Classes:** `.site-work`, `.site-work-inner`, `.site-work-list`, `.site-work-item`.

**Measurements:** an ordered list (`<ol>`) with four stages. Each stage has the mono label ("ETAPA 01"), the h3 heading and the text, 8px apart. A 2px ink line. Each stage has a 16px square marker, centred on the line, drawn with `::before`. The markers are ink. The marker of the last stage is surface with a 2px ink border, to mark the end of the process.

**States:** not interactive.

**Mobile and desktop:**

- Up to 1023px: a vertical line on the left, going down, with 32px between stages. The text sits 28px from the line, 32px from 768px, where each stage is at most 37em wide.
- From 1024px: a horizontal line on top, four equal columns with 32px between them, and the text 32px from the line.

**Accessibility:** the list has `role="list"`. With no markers and outside a `<nav>`, Safari stops announcing it as a list.

### Service areas

**What it is:** the list of municipalities served, as tags.

**Classes:** `.site-zones`, `.site-zones-inner`, `.site-zones-content`, `.site-zones-text`, `.site-zones-list`, `.site-zones-item`.

**Measurements:** a list (`<ul>`) with the municipalities on one line, wrapping to the next line when they do not fit. 8px between tags. Each tag: surface background, 2px ink border, ink text in Barlow 600, line height 1.2. Padding of 8px top and bottom and 12px on the sides.

**States:** the tags are not clickable, so they have no states.

**Mobile and desktop:**

- From 768px: 12px between tags. Tag padding of 10px top and bottom and 16px on the sides.
- One column up to 1023px. From 1024px, two columns (`1fr 2fr`) with 64px between them: heading on the left, content on the right.

**Accessibility:** the list has `role="list"`, for the same reason as the timeline.

### FAQ

**What it is:** the frequently asked questions.

**Classes:** `.site-faq`, `.site-faq-inner`, `.site-faq-list`, `.site-faq-item`, `.site-faq-question`, `.site-faq-question-text`, `.site-faq-answer`.

**Measurements:** each question is a `<details>` with a surface background and a 2px ink border, 12px from the next. The first one starts open. The question (`<summary>`) has the text on the left, in Barlow 600 with line height 1.4, and a 24px icon on the right: plus when closed, minus when open. Padding of 16px and minimum height of 56px. The answer sits below, with the same side padding as the question, the same bottom padding and a maximum width of 37em.

**States:**

| State | Look |
|---|---|
| Normal | Ink text on surface (17.03) |
| `:hover` | Question text underlined, 2px, with the pointer anywhere on the question |
| `:focus-visible` | 3px signal-dark outline, offset 2px |

**Mobile and desktop:**

- From 768px: question padding of 20px top and bottom and 24px on the sides, minimum height 64px.
- One column up to 1023px. From 1024px, two columns (`1fr 2fr`) with 64px between them: heading on the left, content on the right.

### Contacts

**What it is:** the contact box.

**Classes:** `.site-contact`, `.site-contact-inner`, `.site-contact-content`, `.site-contact-text`, `.site-contact-list`, `.site-contact-item`.

**Measurements:** a card with a description list (`<dl>`). Each contact is a pair: the name as a mono label (`<dt>`) and the value below it (`<dd>`), 4px apart.

**States:** the email is a text link and follows the [Link](components.md#link) states. The phone is plain text, with no link.

**Mobile and desktop:**

- Up to 767px: the pairs one below the other, 20px apart. Card padding of 24px.
- From 768px: the pairs in two equal columns, with 32px between them. Card padding of 32px.
- One column up to 1023px. From 1024px, two columns (`1fr 2fr`) with 64px between them: heading on the left, content on the right. The intro text sits in the left column, below the heading.

---

## Quote

**File:** `orcamento.html`, styled in `css/pages/quote.css`. Behaviour in `js/quote/`.

**Order:** [Top bar](components.md#top-bar) and [Header](components.md#header), intro, [No JavaScript notice](#no-javascript-notice), [Step indicator](#step-indicator), the four [Steps](#steps) with their [Form fields](#form-fields) and the [Calculator](#calculator), [Estimate panel](#estimate-panel), [Footer](components.md#footer).

### Layout

**Classes:** `.site-quote`, `.site-quote-layout`, `.site-quote-form`.

**Mobile and desktop:**

- **On mobile:** one column with the form and the fixed bar at the bottom. The bar covers the end of the page, so:
  - `<body>` gets a bottom margin equal to the height of the bar.
  - `<html>` gets `scroll-padding-bottom` with that same height (it tells the browser how much space to leave free when scrolling to an element). This way, when focus moves to a field near the bottom, the field is not hidden under the bar.
- **From 1024px:** two columns. The form on the left (takes the remaining space, up to 640px) and the estimate panel on the right (320px), with 48px between them. The panel sticks to the top while scrolling (`position: sticky`).

### No JavaScript notice

**What it is:** a paragraph at the start of the quote form: "Para enviar o pedido, precisa de ter o JavaScript ativo no browser."

**Classes:** `.site-quote-notice`.

**Measurements:** surface background, 2px ink border, 16px of padding and text in Barlow 600. It is the style of the Livro de Reclamações box in the footer, so no new component is created.

**States:** not interactive.

**Accessibility:** hidden with `.js .site-quote-notice { display: none; }`. The `js` class is put on `<html>` by the script in the `<head>` before the page is drawn, so people with JavaScript never see the notice, not even for an instant.

**Why:** known limit: if JavaScript is on but the form file fails to load, the notice is hidden and so are the buttons, because that file is what shows them. It is the same trade-off as the menu (see Navigation in `components.md`). Hiding the notice only when the file runs would avoid this case, but the notice would appear on load and disappear right after, and the page would jump.

### Step indicator

**Classes:** `.site-quote-progress`, `.site-quote-steps`, `.site-quote-step-number`, `.site-quote-step-name`, `.site-quote-step-completed`, `.is-completed`.

**Measurements:** an ordered list (`<ol>`) with 4 items on one line and `aria-label="Progresso do pedido"`. Above it, the mono label "PASSO 02 / 04".

**States:**

| State | Look | Contrast |
|---|---|---|
| Completed | Ink background, paper text, tick icon. Hidden "concluído" text for screen readers | 14.73 |
| Current | Surface background, 2px ink border, ink text at weight 600. `aria-current="step"` | 17.03 |
| Future | No background, 2px dashed muted border, muted text | 6.39 |
| `:hover`, `:focus-visible`, `:active`, disabled | Do not exist. The indicator is not clickable | |

**Mobile and desktop:**

- On mobile, each item shows only the number ("01"). The step name stays in the HTML, visually hidden, so the screen reader reads "01, Origem e destino" and not just "01". The name of the current step is not repeated below the list, because the card heading (h2) comes right after and says the same.
- On mobile, the step name is hidden with the properties of [Visually hidden](components.md#visually-hidden), written in the rule for the name, because the class in the HTML would apply to every size. From 768px they go back to their normal values.
- From 768px, each item shows the number and the name.

**Accessibility:**

- The label "PASSO 02 / 04" has `aria-hidden="true"`, and next to it a text only for screen readers: "Passo 2 de 4". A screen reader would read "zero dois barra zero quatro".
- The current state is read from `aria-current="step"` in the CSS, as the menu reads `aria-expanded`. JavaScript only changes the attribute.
- Without JavaScript, the indicator and the label are hidden. The 4 steps show one after another, so "Passo 01 / 04" would be wrong. The block has `display: none` in the CSS and `.js .site-quote-progress` shows it, like the No JavaScript notice the other way round. This way it shows in the first paint of the page, without pushing the form.

**Why it is not clickable:** if it were, it would be possible to jump to step 4 without validating the previous ones. To go back there is "Anterior" and the "Editar" buttons of the summary.

### Steps

**Classes:** `.site-quote-step`, `.site-quote-step-body`, `.site-quote-legend`, `.site-quote-navigation-buttons`, `.site-quote-btn-next`, `.site-quote-order-summary` and children.

**Measurements:** each step is a `<fieldset>` with the look of a [Card](components.md#card). The step heading goes inside the `<legend>` as an `<h2>` (HTML allows headings inside `<legend>`). Without JavaScript, the steps show one after another, 48px apart.

**States:** not interactive. The buttons inside follow [Buttons](components.md#buttons). "Seguinte" is the only primary button of each step.

**Accessibility:** the step heading receives focus when the step changes.

**Motion:**

| What animates | Properties | Duration | Curve | With `prefers-reduced-motion: reduce` |
|---|---|---|---|---|
| New step entering | Opacity from 0 to 1 and vertical offset from 8px to 0 | 200ms | `--ease-out` | No animation. The step appears at once |

- **The previous step disappears at once, with no exit animation.** This way there are never two visible steps at the same time and focus goes straight to the heading of the new step.
- **The animation does not delay focus.** Focus moves at the same moment the step appears.

### Form fields

**What it is:** text, email, phone and date inputs, `<select>` and `<textarea>`.

**Classes:** `.site-quote-field`, `.site-quote-group`, `.site-quote-group-body`, `.site-quote-help`, `.site-quote-select`, `.site-quote-select-icon`, `.site-quote-inventory-description`, `.site-quote-error`, `.site-quote-error-icon`, width classes below.

**Measurements:**

- `<label>` above the field, Barlow 600, 8px from the field.
- Help text in muted, 14px, between the label and the field.
- Since almost every field is required, the optional ones are marked with "(opcional)" in the label, instead of an asterisk on all of them.
- Field: surface background, 2px muted border, minimum height 48px, padding 12px, text 16px.
- **Maximum widths**, so the box shows the size of the answer. One class per size, on the `<input>` or `<select>` itself:

| Class | `max-width` | Fields |
|---|---|---|
| `site-quote-input-small` | 192px | Postal codes |
| `site-quote-input-medium` | 256px | Floors, date and phone |
| `site-quote-input-large` | 320px | Distance |

- The other fields (name, email and notes) take the full width.
- `<select>`: the same look, with an arrow from the sprite on the right.
- `<textarea>` ("Descreva o recheio"): the same look, 6 lines high at first. It only stretches vertically (`resize: vertical`), so the person can see everything they wrote without the box leaving the card.

**States:**

| State | Look | Contrast |
|---|---|---|
| Normal | 2px muted border | 7.39 on surface |
| `:hover` | Ink border | 17.03 |
| `:focus-visible` | Ink border + 3px signal-dark outline, offset 2px | outline 6.17 on surface |
| `:active` | Does not apply to text fields. On a field, clicking is focusing | |
| Disabled | Paper background, 2px dashed muted border, muted text. Not used in this project | 6.39 |
| Error | 2px error border. Message below the field in error, 14px, weight 600, with a 16px alert icon before the text | border 6.57, text 6.57 |
| Error + focus | Error border + signal-dark outline | |

**Accessibility:**

- The help text is linked to the field with `aria-describedby`.
- With an error, the field gets `aria-invalid="true"` and the message joins its `aria-describedby`.
- The icon in the error message exists because the error cannot be shown by colour alone (criterion 1.4.1).

### Checkboxes and radio buttons

**What it is:** lift yes or no, GDPR consent.

**Classes:** `.site-quote-choice`, `.site-quote-choice-legend`, `.site-quote-options`, `.site-quote-option`, `.site-quote-checkbox-item`, `.site-quote-checkbox-content`, `.site-quote-privacy`.

**Measurements:** the browser's native controls, with `accent-color` in ink and 20px per side. `accent-color` changes the colour of native controls without redrawing them. The whole row, with its label, is at least 44px high.

**States:** the native ones.

**Accessibility:** the label also checks the box.

### Calculator

**What it is:** the inventory items of the step "Recheio", each with − and + buttons.

**Classes:** inside `.site-quote-step-inventory`. Icons `icon-minus` and `icon-plus`.

**Measurements:**

- Squares of 44 × 44px, surface background, 2px ink border, 24px ink icon.
- The quantity sits between the two: IBM Plex Mono 500, 18px, centred, with a minimum width of 2 characters (`2ch`), so the row does not move when it goes from 9 to 10.
- Above, the item name in Barlow 400 and the unit volume in muted mono ("0,8 M³").
- Not orange. There are dozens of these buttons on the page and orange would stop setting "Seguinte" apart.

**States:**

| State | Look | Contrast |
|---|---|---|
| Normal | Surface background, ink icon | 17.03 |
| `:hover` | Paper background | 14.73 |
| `:focus-visible` | 3px signal-dark outline, offset 2px | 6.17 |
| `:active` | Ink background, paper icon | 14.73 |
| At the limit (− at 0, + at 20) | `aria-disabled="true"`. 2px dashed muted border, muted icon, `not-allowed` cursor. Still focusable and the click does nothing | 7.39 |

**Mobile and desktop:** the room columns: one on mobile, two from 768px, and one again from 1024px, when the estimate panel appears next to the form (see Layout).

**Accessibility:** the accessible name comes from the button, for example "Adicionar sofá médio (3 lugares)". The limit uses `aria-disabled`, not `disabled` (see Common rules in `components.md`).

### Estimate panel

**Classes:** `.site-quote-estimate`, `.site-quote-estimate-top-bar`, `.site-quote-estimate-item`, `.site-quote-estimate-volume`, `.site-quote-estimate-volume-item`, `.site-quote-estimate-vehicle`, `.site-quote-estimate-price`, `.site-quote-estimate-price-item`, `.site-quote-estimate-sub`.

**Measurements:** it is the same HTML element on every width. Only the CSS changes its position.

**States:** not interactive.

**Mobile and desktop:**

- **Below 1024px:** a bar fixed to the bottom of the screen, surface background, 2px ink top border. It shows only the total in m³ and the price range on one line, without the sentence, so the bar stays low.
- **From 1024px:** a card to the right of the form, stuck to the top with `position: sticky`, with the kraft tape at the top. It shows the "VOLUME" label, the total in m³, the suggested vehicle, the price range in Barlow 600 and the sentence "Estimativa indicativa" in small muted text. The sentence says the value is not the final price. That the business is fictional is already in the top bar and the footer.

**Accessibility:**

- **The panel has no `aria-live`.** What changes is announced by a single hidden message with `aria-live="polite"`, which JavaScript fills only with what changed: "Cadeira: 4. Volume: 18,7 m³." on a click on − or +, and "Estimativa: 350 € a 420 €." when another field that counts for the price changes. With `aria-live` on the panel, the screen reader read the whole panel on every click and did not say how many items there were.
- **Without JavaScript, the panel is hidden**, like the step indicator and the navigation buttons. Without the calculator, it would always show 0,0 m³. Like the indicator, it has `display: none` in the CSS and appears with the `js` class on `<html>`.

**Motion:**

| What animates | Properties | Duration | Curve | With `prefers-reduced-motion: reduce` |
|---|---|---|---|---|
| Highlight of the total when it changes | Background of the total from kraft to transparent. The text stays ink (6.64 on kraft, 17.03 on surface) | 600ms | `--ease-out` | No animation. The number changes and the hidden `aria-live` message announces it |

- The highlight repeats on every change of the total. With several clicks in a row, it starts again.
