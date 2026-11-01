# Design system

The visual system of the site, split by the question each file answers.

| File | Question | What it holds |
|---|---|---|
| [`brand.md`](brand.md) | What does the brand look like? | Visual direction, logo, icons, images |
| [`tokens.md`](tokens.md) | Which value do I use? | Colour, contrast, typography, spacing, layout, shape, motion |
| [`components.md`](components.md) | How does this element look and behave? | Every shared component and utility, with its states |
| [`pages.md`](pages.md) | What is on this page? | Each page: its sections in order, its layout from mobile to desktop |

## How the files relate

- Each file only points down: `pages.md` refers to components, `components.md` refers to tokens. A value lives in one place only.
- Colours are written by their short name (`ink`, `signal`). The hex codes and the custom properties are only in `tokens.md`.
- Spacing, sizes and durations without a custom property are written as plain values, and every one of them is in the scales of `tokens.md`. A value that is not in `tokens.md` is not used.

## Component or page section

- Styled in `css/components.css` or `css/base.css`: it is in `components.md`.
- Styled in `css/pages/<page>.css`: it is in `pages.md`, under that page.
- When a page section is needed on a second page, its CSS moves to `components.css` and its documentation moves to `components.md`, in the same commit.

## Fixed order inside each component and section

1. What it is
2. Classes and file
3. Measurements
4. States
5. Mobile and desktop
6. Accessibility
7. Motion
8. Why

A field only appears when it has content. States always appear: "not interactive" is also a state to know.
