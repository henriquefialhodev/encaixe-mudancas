---
paths:
  - "public/**/*.html"
  - "public/**/*.css"
  - "public/assets/icons/*.svg"
---

# Design system

- Before writing, changing or reviewing HTML or CSS, read `docs/design-system/tokens.md` in full. From `docs/design-system/components.md`, read the index table and the entries of the components the task touches. From `docs/design-system/pages.md`, read the section of the page being worked on. Read `docs/design-system/brand.md` when the task touches the logo, icons or images.
- `tokens.css` holds colours, font families, font weights, font sizes, `--gutter`, `--section-space` and `--ease-out`. No hardcoded values for these outside `tokens.css`.
- Everything else (spacing, layout widths, shape, sizes, line-height, letter-spacing, durations) is written as plain values from `tokens.md`. Do not flag these as hardcoded when the value is in `tokens.md`.
- Respect the forbidden colour combinations (`tokens.md`, Contrast) and every state in the States field of each component and page section.
- If something needs a value that is not in `tokens.md`, stop and tell me. Never invent one.
- When a component or page section changes, update its entry in the same commit, following `docs/design-system/README.md`.
