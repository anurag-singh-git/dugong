# Dugong Design System

React components and design tokens extracted from the Dugong marketing site
(`index.html`). Same look, now reusable parts.

## Install / use

```tsx
import { Button, SectionHead, PriceCard } from '@dugong/design-system';
import '@dugong/design-system'; // tokens + base styles (auto-imported by the entry)

<Button variant="primary" size="lg" href="/signup">
  Start for free →
</Button>;
```

## Styling idiom

Everything is driven by **CSS custom properties** defined in
`src/styles/tokens.css` (`--lime`, `--text-dim`, `--radius-lg`, …). Components
ship their own scoped CSS that reads those tokens, so re-theming is a matter of
overriding variables on `:root` (or any ancestor). There are no utility classes
to learn — style your own layout glue with the same `var(--*)` tokens.

Key tokens:

| Group   | Examples |
|---------|----------|
| Surface | `--bg`, `--surface`, `--surface-2`, `--bg-2` |
| Text    | `--text`, `--text-dim`, `--text-faint` |
| Brand   | `--lime`, `--lime-deep`, `--green`, `--pink` |
| Border  | `--border`, `--border-strong` |
| Type    | `--display` (Hanken Grotesk), `--body` (Inter), `--mono` (JetBrains Mono) |
| Radius  | `--radius-sm/md/lg/xl/2xl`, `--radius-pill` |
| Shadow  | `--shadow-card`, `--shadow-pop`, `--shadow-cta` |

## Components

`Logo`, `Button`, `Eyebrow`, `Chip`, `Pill`, `Panel`, `SectionHead`,
`StepCard`, `FeatureCard`, `StatCard`, `PriceCard`, `Tabs`, `Faq`, `Marquee`,
`FlowList`. See each component's Storybook story for usage.

## Develop

```bash
npm install
npm run storybook   # component explorer at :6006
npm run build       # type-check + emit dist/ (ES + UMD + .d.ts + dugong-ds.css)
```
