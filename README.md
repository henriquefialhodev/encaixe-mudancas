# Encaixe Mudanças

Fictional moving company website. Practice and portfolio project.

## Live site

## Screenshot

## About

## Pages, styles and scripts

| Page | CSS | JavaScript |
|---|---|---|
| `index.html` | `css/pages/home.css` | `js/main.js` |
| `orcamento.html` | `css/pages/quote.css` | `js/main.js`, `js/quote/quote-form.js` |
| `obrigado.html` | `css/pages/thank-you.css` | `js/main.js`, `js/thank-you.js` |
| `privacidade.html`, `cookies.html`, `termos.html` | `css/pages/legal.css` | `js/main.js` |
| `404.html` | `css/pages/not-found.css` | `js/main.js` |

Every page also loads `css/tokens.css`, `css/base.css`, `css/layout.css` and `css/components.css`.

## Decisions and difficulties

## Run locally

The site uses ES modules and an external SVG sprite, which don't load from `file://`. Serve the `public/` folder over HTTP, for example with the VS Code Live Server extension or `npx http-server public`.
