# Encaixe Mudanças

A fictional moving company I built as a practice and portfolio project. I wrote this file to give Claude Code the context it needs: what the project is, how it is built, and the rules I follow.

## What it is
Small moving company in Braga, Portugal. The site lets people build a moving quote request in 4 steps, with a volume calculator and an indicative price estimate.

## Stack
HTML, CSS and vanilla JavaScript (ES modules). No backend. Quote submission is simulated (sessionStorage). Busy dates are generated in JS relative to today (for example today plus 3, 8 and 15 days), so the demo never goes out of date.

## Structure
- Published on Netlify from `public/` (see `netlify.toml`). Nothing outside `public/` is published.
- `public/`: the HTML pages, `assets/` (fonts, `icons/sprite.svg`, images, `images/og/`), `css/` (`tokens.css`, `base.css`, `layout.css`, `components.css`, `pages/`) and `js/`.
- JavaScript as ES modules: `js/main.js` on every page, `js/quote/` for the quote form (`config.js`, `busy-dates.js`, `validation.js`, `volume-calculator.js`, `price-estimate.js`, and `quote-form.js` as the entry point), `js/thank-you.js` for obrigado.html.
- `docs/`: project documents, listed in the Docs section below. `docs/brand/` holds the logo and favicon source files.
- The README has the table of which CSS and JS each page loads.

## Docs (read only when the task needs them)
- `docs/features.md`: every feature with its acceptance criteria. Read before working on a feature or reviewing one.
- `docs/design-system.md`: the visual system. Loads automatically through `.claude/rules/design-system.md` (see Brand).
- `docs/components.md`: the shared components. Read before creating a component.
- `docs/content/`: page copy, one file per page. Read when writing or changing the text of a page.
- `docs/ficha.md`: the original project sheet. Read only when the original brief matters.

## Pages
- index.html: header, hero, services, how it works (timeline), service areas, FAQ, contacts, footer
- orcamento.html: 4-step quote form, sticky side panel on desktop, fixed bottom bar on mobile
- obrigado.html: reference number, summary, next steps
- privacidade.html, cookies.html, termos.html, 404.html
- Footer on every page: fictional project notice and link to Livro de Reclamações Eletrónico

## Brand
The full visual system is in `docs/design-system.md`. It loads through `.claude/rules/design-system.md` when working on HTML, CSS or the icon sprite.
- I write tokens.css myself from the token table. Do not write it for me.
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

## Done
- Tested in Chrome, in WebKit (Playwright) and on a real phone. No console errors.
- Lighthouse, mobile mode, incognito window: 100 in accessibility, 90 or more in performance and best practices. In SEO, every audit passes except "Page is blocked from indexing", which fails on purpose because the site is noindex.
- Keyboard and screen reader check.
- README in English: description, live link, screenshot, decisions and difficulties, how to run locally.

## Status
- Home page done. Quote page layout done: markup of the 4 steps, order summary, navigation buttons, and the estimate panel as a fixed bar below 1024px and a sticky card from 1024px.
- Quote steps done (feat/quote-steps): one step visible at a time, Next and Previous buttons, submit button and order summary on the last step, step indicator (current, completed, "Passo X de 4") and focus on the new step heading.
- Live site checked on 2026-10-27 (share card and structured data). Lighthouse on the live site is left for when the whole site is complete.
- Next: feat/quote-validation (validate only the current step before moving on).
