---
paths:
  - "public/**/*.html"
  - "public/**/*.css"
  - "public/assets/icons/*.svg"
---

# Design system

- Before writing, changing or reviewing HTML or CSS, read `docs/design-system.md` in full.
- `tokens.css` holds colours, font families, font weights, font sizes, `--gutter`, `--section-space` and `--ease-out`. No hardcoded values for these outside `tokens.css`.
- Everything else in the token table (section 13) is written as plain values: spacing, layout widths, shape, sizes, line-height, letter-spacing and durations. Do not flag these as hardcoded when the value is in the design system.
- Respect the forbidden colour combinations (section 4) and every component state (section 9).
- If something needs a value the design system doesn't have, stop and tell me. Never invent one.
