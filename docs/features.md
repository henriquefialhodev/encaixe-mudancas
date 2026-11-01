# Features

Each feature with its acceptance criteria.

- Responsive menu: toggle button with aria-expanded, keyboard accessible, Esc closes it, always visible from 1024px up
- FAQ: details and summary, no JS
- Multi-step form: one step visible, "Step X of 4" indicator with step names, validates only the current step, focus moves to the first invalid field or to the new step heading, going back keeps data, summary with Edit buttons, keyboard only works
- Form without JS: all fieldsets are shown and can be filled in, the submit button is hidden and a visible notice says JavaScript is needed to send the request. The JS shows the buttons. The notice is hidden by CSS through the `js` class that the inline script in `<head>` adds to `<html>`. Personal data never goes into the URL.
- Validation: postal code 0000-000, date not in the past or busy, valid email, 9-digit phone, required GDPR consent, error messages in pt-PT that say how to fix the error, linked with aria-describedby
- Volume calculator: items generated from an array of objects, grouped by room, minus and plus buttons with full accessible names, quantity from 0 to 20, live total in m3 (aria-live polite), suggested vehicle from a config object, textarea fallback without JS
- Price estimate: range rounded to 10 EUR, based on volume, distance band, floors without elevator and extras, all values in one config object, updates on every relevant change, always labelled as indicative and fictional
- Simulated submit: only when all steps are valid, reference ENC-YYYY-NNNN, data saved to sessionStorage, obrigado.html shows the summary or a generic message with a link to the quote page if there is no data, no console errors
- Technical: meta tags, Open Graph, favicon, structured data MovingCompany (practice only, the site is noindex). The whole site is noindex through `public/_headers`. No sitemap, robots.txt or manifest.
