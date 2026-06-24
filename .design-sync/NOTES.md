# Dugong design-sync notes

Package: `@dugong/design-system` (in `design-system/`), shape: storybook.
Global name: `DugongDS`. Built dist entry: `design-system/dist/dugong-ds.es.js`.

## Build / run

- The DS is a subpackage at `design-system/`; `.design-sync/` + `.ds-sync/` live at repo root.
- Build DS first: `npm --prefix design-system run build` (emits `dist/`).
- Reference storybook: `cd design-system && npx storybook build -c .storybook -o <repo>/.design-sync/sb-reference`.
- Converter: `--node-modules design-system/node_modules --entry design-system/dist/dugong-ds.es.js`.

## [GENERAL] learnings

- **CSS ships as a separate file, not imported by the JS bundle.** Vite library
  mode extracts all `import './*.css'` into `dist/dugong-ds.css`; the JS entry
  (`dugong-ds.es.js`) does NOT import it at runtime. So the converter's scrape
  finds no CSS and writes a self-styling fallback (`[CSS_PLACEHOLDER]` /
  `[CSS_RUNTIME]`). Fix: `cfg.cssEntry = "dist/dugong-ds.css"` (resolved
  relative to the package dir). This one file carries tokens + the Google Fonts
  `@import` + all component classes, so it's the single correct cssEntry.

## Re-sync risks

- `cfg.cssEntry` depends on Vite emitting one combined `dist/dugong-ds.css`. If
  the build is ever split (CSS code-splitting, per-entry CSS), revisit cssEntry.
- Fonts load from the Google Fonts CDN via an `@import` in the stylesheet
  (`[FONT_REMOTE]`, not bundled). Verified rendering assumes that host is
  reachable; an offline build would fall back to system fonts.
- `.d.ts` parse check was skipped at validate time ("typescript not in
  node_modules" of `.ds-sync`); types are parsed from `design-system/dist` at
  build time, which is fine, but the validator's own parse check didn't run.
