# Dugong design system — how to build with it

These are real React components compiled from the Dugong site. Import them and
compose; do not re-implement them. The look is a warm off-white canvas, near-black
ink text, and a single electric-lime accent.

## Setup — no provider needed

Components are self-styled. There is **no** ThemeProvider, context, or root
wrapper to mount — render any component directly. The token + base stylesheet
ships as `styles.css` (it `@import`s `_ds_bundle.css`, which carries every
component's CSS); it loads automatically with the bundle, so designs are styled
out of the box. Fonts (Hanken Grotesk / Inter / JetBrains Mono) load from Google
Fonts via an `@import` in that stylesheet.

## Styling idiom — CSS custom properties, no utility classes

Style your own layout glue with the **same `var(--*)` tokens** the components use.
There is NO Tailwind/utility-class vocabulary here — do not invent class names.
Re-theming = override these variables on `:root` or any ancestor.

| Group | Tokens |
|---|---|
| Surface | `--bg` (page), `--surface`, `--surface-2`, `--bg-2` |
| Text | `--text` (ink), `--text-dim`, `--text-faint` |
| Brand | `--lime`, `--lime-deep` (text-on-light), `--green`, `--pink` |
| Border | `--border`, `--border-strong` |
| Type | `--display` (headings), `--body`, `--mono` |
| Radius | `--radius-sm/md/lg/xl/2xl`, `--radius-pill` |
| Shadow | `--shadow-card`, `--shadow-pop`, `--shadow-cta` |

The lime (`--lime` `#c6fe1e`) is the one accent — use it sparingly for primary
CTAs, active states, and highlights. Headings use `--display` at heavy weights
(700–800) with tight negative letter-spacing.

## Where the truth lives

Before styling, read the bound `styles.css` and `_ds_bundle.css` for the exact
token values, and each component's `.prompt.md` (usage + examples) and `.d.ts`
(prop contract) under `components/<group>/<Name>/`.

## Components

`Button` (primary/ghost/dark, md/lg), `Logo`, `Eyebrow`, `Chip`, `Pill`
(call/reason/read), `Panel`, `SectionHead`, `StepCard`, `FeatureCard`,
`StatCard`, `PriceCard`, `Tabs`, `Faq`, `Marquee`, `FlowList`.

`SectionHead` accepts an `<em>` inside its headline to render that phrase in the
faint accent color — the site's signature two-tone heading.

## Idiomatic snippet

```jsx
<section style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 24px' }}>
  <SectionHead
    eyebrow="Pricing"
    headline={<>Simple pricing. <em>Free to start.</em></>}
    sub="No credit card required."
    center
  />
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
    <PriceCard name="Pro" amount="$39" period="/mo" featured badge="Most popular"
      description="For teams." features={['Unlimited workflows', 'All integrations']}
      ctaLabel="Start free trial →" />
  </div>
</section>
```
