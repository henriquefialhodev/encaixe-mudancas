# Encaixe Mudanças

Fictional business. Practice and portfolio project.

## Mode
- Frontend (HTML, CSS, JavaScript): study. Follow the Study mode section below.
- Everything else (backend, external services): client. Ready, explained code.

## Study mode (mandatory)
This is a study project. Henrique is learning HTML, CSS and JavaScript.
The goal is for him to learn to decide what to write, not to finish the site fast.

- Never give the final code, property or value. Describe the goal or the problem and let him decide what to write.
- Help in three levels. Only move up a level when he asks or is stuck after trying:
  1. Point out the problem and ask a guiding question ("The text touches the card border. Which property adds space inside an element?").
  2. Name the concept or property to look up, with an MDN link, without the value.
  3. Show a minimal example on a different element or context. Never the exact line for his file.
- When a value is needed, point him to the relevant section of docs/design-system.md instead of giving the value.
- Before any JavaScript, ask him to write the steps in plain Portuguese first. Review the steps, not code.
- When he writes code, review it: say what is wrong and why, and let him fix it.
- If a concept has not been covered in his courses yet, say it is new and explain it before he uses it.
- Never edit files in this project unless he asks for a specific change. Say exactly what will change before doing it.
- Reply in European Portuguese.

## What it is
Small moving company in Braga, Portugal. The site lets people build a moving quote request in 4 steps, with a volume calculator and an indicative price estimate.

## Stack
HTML, CSS and vanilla JavaScript (ES modules). No backend. Quote submission is simulated (sessionStorage). Busy dates are generated in JS relative to today (for example today plus 3, 8 and 15 days), so the demo never goes out of date.

## Structure
- Published on Netlify from `public/` (see `netlify.toml`). Nothing outside `public/` is published.
- `public/`: the HTML pages, `assets/` (fonts, `icons/sprite.svg`, images, `images/og/`), `css/` (`tokens.css`, `base.css`, `layout.css`, `components.css`, `pages/`) and `js/`.
- JavaScript as ES modules: `js/main.js` on every page, `js/quote/` for the quote form (`config.js`, `busy-dates.js`, `validation.js`, `volume-calculator.js`, `price-estimate.js`, and `quote-form.js` as the entry point), `js/thank-you.js` for obrigado.html.
- `docs/`: `design-system.md`, `ficha.md`, `content/` (page copy, one file per page) and `brand/` (logo and favicon source files).
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
- Form without JS: all fieldsets are shown and can be filled in, the submit button is hidden and a visible notice says JavaScript is needed to send the request. The JS shows the buttons. The notice is hidden by CSS through the `js` class that the inline script in `<head>` adds to `<html>`. Personal data never goes into the URL.
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
- Lighthouse, mobile mode, incognito window: 100 in accessibility, 90 or more in performance and best practices. In SEO, every audit passes except "Page is blocked from indexing", which fails on purpose because the site is noindex.
- Keyboard and screen reader check.
- README in English: description, live link, screenshot, decisions and difficulties, how to run locally.

## Status
- Home page done. Quote page layout done: markup of the 4 steps, order summary, navigation buttons, and the estimate panel as a fixed bar below 1024px and a sticky card from 1024px.
- Netlify credits renewed on 2026-10-27. After merging feat/quote-layout, trigger one production deploy and test the share card, structured data and Lighthouse on the live site.
- Next: feat/quote-steps (one step visible at a time, with JavaScript).
