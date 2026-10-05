# Encaixe Mudanças

Fictional business. Practice and portfolio project.

## Mode
- Frontend (HTML, CSS, JavaScript): study. Give me the steps in pseudocode and I write the code.
- Everything else (backend, external services): client. Ready, explained code.

## What it is
Small moving company in Braga, Portugal. The site lets people build a moving quote request in 4 steps, with a volume calculator and an indicative price estimate.

## Stack
HTML, CSS and vanilla JavaScript (ES modules). No backend. Quote submission is simulated (sessionStorage). Busy dates are generated in JS relative to today (for example today plus 3, 8 and 15 days), so the demo never goes out of date.

## Structure
- Published on Netlify from `public/` (see `netlify.toml`). Nothing outside `public/` is published.
- `public/`: the HTML pages, `assets/` (fonts, `icons/sprite.svg`, images, `images/og/`), `css/` (`tokens.css`, `base.css`, `layout.css`, `components.css`, `pages/`) and `js/`.
- JavaScript as ES modules: `js/main.js` on every page, `js/quote/` for the quote form (`config.js`, `busy-dates.js`, `validation.js`, `volume-calculator.js`, `price-estimate.js`, and `quote-form.js` as the entry point), `js/thank-you.js` for obrigado.html.
- `docs/`: `design-system.md` and `ficha.md`.
- The README has the table of which CSS and JS each page loads.

## Pages
- index.html: header, hero, services, how it works (timeline), service areas, FAQ, contacts, footer
- orcamento.html: 4-step quote form, sticky side panel on desktop, fixed bottom bar on mobile
- obrigado.html: reference number, summary, next steps
- privacidade.html, cookies.html, termos.html, 404.html
- Footer on every page: fictional project notice and link to Livro de Reclamações Eletrónico

## Features
- Responsive menu: toggle button with aria-expanded, keyboard accessible, Esc closes it, always visible from 1024px up
- FAQ: details and summary, no JS
- Multi-step form: one step visible, "Step X of 4" indicator with step names, validates only the current step, focus moves to the first invalid field or to the new step heading, going back keeps data, summary with Edit buttons, keyboard only works
- Form without JS: all fieldsets are shown and can be filled in, the submit button is hidden and a visible notice says JavaScript is needed to send the request. The JS shows the button and hides the notice. Personal data never goes into the URL.
- Validation: postal code 0000-000, date not in the past or busy, valid email, 9-digit phone, required GDPR consent, error messages in pt-PT that say how to fix the error, linked with aria-describedby
- Volume calculator: items generated from an array of objects, grouped by room, minus and plus buttons with full accessible names, quantity from 0 to 20, live total in m3 (aria-live polite), suggested vehicle from a config object, textarea fallback without JS
- Price estimate: range rounded to 10 EUR, based on volume, distance band, floors without elevator and extras, all values in one config object, updates on every relevant change, always labelled as indicative and fictional
- Simulated submit: only when all steps are valid, reference ENC-YYYY-NNNN, data saved to sessionStorage, obrigado.html shows the summary or a generic message with a link to the quote page if there is no data, no console errors
- Technical: meta tags, Open Graph, favicon, structured data MovingCompany (practice only, the site is noindex). The whole site is noindex through `public/_headers`. No sitemap, robots.txt or manifest.

## Brand
The full visual system is in `docs/design-system.md`. It loads through `.claude/rules/design-system.md` when working on HTML, CSS or the icon sprite.
- I write tokens.css myself from the token table (study mode). Do not write it for me.
- `tokens.css` holds colours, font families, font weights, font sizes, `--gutter`, `--section-space` and `--ease-out`. No hardcoded values for these in other files.
- Everything else (spacing, layout widths, shape, sizes, line-height, letter-spacing, durations) is written as plain values taken from `docs/design-system.md`. No value that is not in the design system.

## Rules
- Mobile-first. WCAG 2.1 AA. Technical SEO.
- Class names and custom properties in kebab-case.
- CSS split into base.css, layout.css, components.css and pages/ (one file per page).
- Fonts self-hosted (WOFF2). No Google Fonts CDN.
- Icons in an external SVG sprite (assets/icons/sprite.svg), used with <use>. Decorative icons get aria-hidden="true".
- Relative paths.
- Animations only when they add something. Always respect prefers-reduced-motion.
- Visible notice that this is a fictional portfolio project. Emails use @example.com. Phone numbers have no tel: link.
- Code formatted with Prettier.

## Git
- One branch per feature: feat/short-name, fix/short-name.
- Suggest the commit messages (Conventional Commits) and the pull request description. I create the commits and the pull request.

## Done
- Tested in Chrome, in WebKit (Playwright) and on a real phone. No console errors.
- Lighthouse, mobile mode, incognito window: 100 in accessibility and SEO, 90 or more in performance and best practices.
- Keyboard and screen reader check.
- README in English: description, live link, screenshot, decisions and difficulties, how to run locally.

## Status
- Next: feat/setup
