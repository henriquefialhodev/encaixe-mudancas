# Components

Shared components, styled in `public/css/components.css`. Check this list before creating a component and reuse one when it fits. Page sections (hero, services, zones, FAQ, contacts) live in `css/pages/` and are not listed here.

| Component | Files | What it does | Used in |
|---|---|---|---|
| `skip-link` | `components.css` (`.skip-link`) | Link to jump straight to the main content, visible on keyboard focus | Every page |
| `site-top-bar` | `components.css` (`.site-top-bar`) | Bar above the header with the fictional project notice | Every page |
| `site-header` | `components.css` (`.site-header`, `.site-header-inner`) | Header with the logo, the navigation and the menu button | Every page |
| `logo` | `components.css` (`.logo`, `.logo-brand`, `.logo-sub`) | Brand name and tagline, in the header and the footer | Every page |
| `btn` | `components.css` (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-menu`) | Buttons and button-styled links. `.btn-menu` opens and closes the mobile navigation | Every page |
| `site-nav` | `components.css` (`.site-nav` and children), `js/main.js` | Main navigation: panel on mobile, always visible from 1024px | Every page |
| `label` | `components.css` (`.label`) | Small uppercase text above a title or inside a tape | Every page |
| `site-card` | `components.css` (`.site-card`, `.site-card-title`, `.site-card-text`) | Card with label, title and text | `index.html` (services) |
| `site-tape` | `components.css` (`.site-tape`) | Decorative packing tape between sections, optionally with a label | `index.html` |
| `site-footer` | `components.css` (`.site-footer` and children) | Footer with the logo, navigation, Livro de Reclamações link and copyright | Every page |
