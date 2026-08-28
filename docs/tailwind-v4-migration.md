# Tailwind CSS v4 — Migration Plan

Status: **assessed, not started** · Owner: TBD · Target: `@capitaltg/vero` v2.0

> **Blocked on one decision.** Tailwind v4 requires Safari 16.4+ / Chrome 111+ / Firefox 128+,
> and no configuration lowers that floor. Nothing in this plan should start until we know
> whether Vero's consumers can accept it (§2). Every other item here is unblocked.

Assessment of what it takes to move Vero from Tailwind 3.4.17 to 4.3.3. The short version:
**the code migration is small, the verification is the cost.** 384 of Vero's 386 real utility
classes compile identically under v4; the breaking changes total roughly 25 call sites. What
dominates the schedule is verifying 32 components across three themes with no visual
regression tooling currently in place.

> This is a living document. Figures describe v1.17.0 at commit `eec7de6` and were produced
> by compilation, not estimation (§1). Effort ranges in §6–7 are judgment and should be
> treated as softer than the measurements.

---

## 1. How these numbers were produced

The interesting risks in a Tailwind major are the _silent_ ones — classes that still exist but
mean something different. So rather than reading the upgrade guide and grepping, the class
surface was measured directly:

1. Extracted Vero's class inventory from source (698 candidate tokens).
2. Compiled it through v3.4.17 with Vero's real `tailwind.config.js`.
3. Compiled the same inventory through v4.3.3 with an equivalent `@theme` block.
4. Diffed both the generated selectors **and** their declaration bodies.

Intersecting with what v3 generates filters out the false positives any class-name regex
picks up (package names, test IDs, `data-component` values).

| Measurement                  | Result | Note                                   |
| ---------------------------- | -----: | -------------------------------------- |
| Candidate tokens scanned     |    698 |                                        |
| Real utilities in use        |    386 | confirmed by v3 generating them        |
| Compile identically under v4 |    384 |                                        |
| Fail to compile at all       |      2 | `fade-in-0`, `hover:bg-opacity-10`     |
| Declaration-level diffs      |    198 | mostly equivalent variable indirection |
| **Genuine behavior changes** |  **6** | §4                                     |

The gap between 198 diffs and 6 real changes is the point. Almost all of the 198 are v4
routing values through CSS variables — `gap-2` moves from `gap: 0.5rem` to
`gap: calc(var(--spacing) * 2)`, which computes to the same thing. Reading the raw diff
without that filter makes the migration look roughly four times larger than it is.

---

## 2. The blocking decision — browser support floor

**Can Vero's consumers accept Safari 16.4+ / Chrome 111+ / Firefox 128+?**

Tailwind v4 is built on `@property` and `color-mix()`. These are not progressive
enhancements — they carry core utility behavior, so transforms, shadows, rings, and
placeholder colors degrade badly rather than gracefully on older engines.

This matters more for Vero than for a typical component library. Vero is USWDS-inspired and
aimed at government work, where agency browser baselines are often set centrally and lag well
behind; USWDS 3.x itself supports considerably older engines than v4 requires.

This needs consumer data, not a maintainer judgment call. **If the answer is no, this plan is
deferred rather than executed** — a legitimate outcome, and the reason it sits at the top.

---

## 3. What already points the right way

Several of the hardest parts of a v4 migration are, by accident or foresight, already done.

- **Token names are already v4-shaped.** The palette is declared as `--color-primary-400`,
  `--color-base-100`, and so on — exactly v4's `@theme` naming convention, where
  `--color-primary-400` generates `bg-primary-400` directly. The double indirection in
  `tailwind.config.js` (mapping a Tailwind color name onto a CSS variable) collapses and
  disappears.
- **The CSS exports already match v4's layers.** v1.17.0 publishes `theme.css`,
  `components.css`, and `utilities.css`. v4's own entry point is
  `@layer theme, base, components, utilities` with one file per layer. The naming maps
  essentially one-to-one.
- **Border radii were pre-aligned.** `tailwind.config.js` already overrides `borderRadius` to
  v4's scale, with a comment saying so. This is normally one of the noisiest visual diffs in a
  v4 migration (`rounded-sm` and `rounded` both shift); here the 26 affected call sites render
  identically.
- **Runtime theming has a first-class answer.** `.dark` and `.theme-uswds` work by redefining
  semantic variables at runtime. v4's `@theme inline` exists precisely for this: it compiles
  `bg-primary` to `background-color: var(--primary)` so the value resolves live. The current
  architecture transfers rather than needing a redesign.

---

## 4. What actually breaks

Six changes, all verified by compilation. Counts are call sites in non-test source.

### 4.1 `outline-none` changed meaning — accessibility risk (6 sites)

v3 emitted `outline: 2px solid transparent` — an invisible outline that **still appears in
Windows High Contrast / forced-colors mode**. v4's `outline-none` emits `outline-style: none`,
which removes it outright. The v3 equivalent is now called `outline-hidden`.

For a 508-focused library this is the most consequential item here, and it is silent: nothing
errors and nothing looks different under normal rendering.

### 4.2 `space-x-*` / `space-y-*` selector change — layout risk (138 sites)

Selector changed from `> :not([hidden]) ~ :not([hidden])` to `:where(> :not(:last-child))`.
Three consequences:

- Hidden children now receive margins.
- The margin moves from all-but-first to all-but-last.
- `:where()` drops specificity to zero, so component classes can now silently override it.

Vero conditionally renders hint and error text throughout its form components — exactly the
pattern this change affects.

### 4.3 `min-w-[--radix-popover-trigger-width]` produces invalid CSS (3 sites)

v4 compiles this to `min-width: --radix-popover-trigger-width` — invalid CSS, silently
dropped. Needs the new parenthesis syntax, `min-w-(--radix-popover-trigger-width)`. Affects
popover width matching in `Autocomplete`, `Combobox`, and `MultiSelect`. Verified broken by
compilation rather than predicted.

### 4.4 `tailwindcss-animate` has no v4 support (~35 class usages)

`fade-in-0` and its siblings stop compiling. Replacement is
[`tw-animate-css`](https://github.com/Wombosvideo/tw-animate-css) (1.4.0), which is CSS-first
and ships the same `accordion-down` / `accordion-up` keyframes Vero relies on. Its 2.0 will
carry breaking changes, so pin deliberately.

### 4.5 `transform` split into discrete properties — visual risk (~8 sites)

v4 uses the discrete `translate` property rather than composing a single `transform`. Radix
animates `transform` directly, so centering utilities and Radix transitions no longer share
one property. Needs real testing on `Dialog`, `Popover`, `Tooltip`, and `Select` rather than
reasoning.

### 4.6 `hover:bg-opacity-10` removed (1 site)

The `*-opacity-*` utilities are gone; use a slash opacity such as `hover:bg-black/10`.

### 4.7 Two corrections worth recording

- **`ring-offset-*` survives.** The v4 documentation summary consulted first said it had been
  removed, which would have hit 13 focus-indicator call sites. Compiling against v4.3.3
  directly shows `ring-offset-2` and `ring-offset-background` both generating normally. No
  work needed — this moves Vero's focus-styling risk from serious to nil.
- **A latent no-op.** `src/components/StepIndicator/constants.ts` uses `text-md`, which has
  never been a Tailwind class in either version. It generates nothing today and will generate
  nothing after. Unrelated to v4, but it likely means the intended size was never applied.

---

## 5. The consumer contract

Everything above is internal. This section changes what consumers have to do, and it is where
the genuine design decisions live.

Two published things stop working as they do now:

- **`tailwind.config.js`** — currently an export and the documented integration path — becomes
  legacy. v4 can load it via `@config`, but it is no longer auto-detected, and Vero's
  `safelist` entry is among the options v4 dropped. That entry appears vestigial anyway, since
  `.theme-uswds` is hand-written CSS rather than a generated utility.
- **The `content` array** is gone in favor of `@source`, and v4 skips `node_modules` by
  default, so consumers must point at Vero's dist explicitly.

### 5.1 Proposed consumer setup

Preserves the split-by-layer model adopted in v1.17.0:

```css
/* consumer app.css — Tailwind v4 */
@import 'tailwindcss';
@import '@capitaltg/vero/theme.css'; /* tokens + @theme inline */
@import '@capitaltg/vero/components.css'; /* component styles */
@source "../node_modules/@capitaltg/vero/dist";
```

### 5.2 Proposed shape of Vero's `theme.css`

Static palettes as ordinary theme variables; swappable semantic aliases through
`@theme inline`, which is what keeps runtime theming working:

```css
/* numbered palettes: static, generate utilities directly */
@theme {
  --color-primary-400: #005ea2;
  --color-base-100: #f7f6f7;
}

/* semantic aliases: redefined at runtime by .dark / .theme-uswds */
:root {
  --primary: #006699;
}
.theme-uswds {
  --primary: var(--color-primary-400);
}

/* inline keeps the utility pointing at the live variable */
@theme inline {
  --color-primary: var(--primary);
}
```

The no-Tailwind consumer path is unaffected in shape: Vero still precompiles a bundle for apps
that don't run Tailwind, so `index.css` and `preflight.css` keep their role.

### 5.3 Can v3 and v4 be supported at once?

Partly, and not usefully. The class surface could be made version-agnostic — 384 of 386
classes already are, and the divergent ones could be avoided. But `outline-none` versus
`outline-hidden` cannot be satisfied in both directions: the v4-correct name does not exist in
v3, and the v3-correct name means something unsafe in v4. More decisively, the config and CSS
entry points have no common form.

**Recommendation:** a major version bump — Vero 2.0 requiring Tailwind v4 — with 1.x kept on
v3 for a defined support window. This is the path essentially every Tailwind-coupled library
took, and it keeps both stories honest instead of shipping one that half-works.

---

## 6. Phases

Numbered because the order carries real dependencies: baseline capture gates verification, and
theme migration gates everything visual. Estimates assume one developer.

### Phase 0 — Settle the browser floor and version strategy (no code)

Answer §2 with actual consumer data, and confirm the 2.0-on-v4 / 1.x-on-v3 split. Everything
downstream is wasted if this lands the other way.

### Phase 1 — Establish visual regression capture, on v3 (1–2 days)

Vero has 191 unit tests and axe coverage, but no visual regression tooling. This runs _before_
any v4 change so the baseline is captured from known-good output. Without it, Phase 6 is 32
components checked by eye and the migration's main risk goes unmanaged.

Storybook is the natural harness — every component has stories, and the existing theme
switcher already covers default, dark, and USWDS.

### Phase 2 — Swap the toolchain (half a day)

- Move to `@tailwindcss/vite` (4.3.3); drop `autoprefixer` and the PostCSS Tailwind plugin.
- Update the Storybook pipeline.
- Bump `tailwind-merge` 2.6.0 → 3.6.0 for v4 class awareness.

Mechanical, and it fails loudly rather than silently.

### Phase 3 — Migrate the theme into CSS (1–2 days)

The core work.

- `tailwind.config.js` → `@theme` + `@theme inline` per §5.2.
- `darkMode: 'class'` → `@custom-variant dark (&:where(.dark, .dark *))`.
- Keyframes move into the theme block.
- `safelist` dropped after confirming it's vestigial.

Start from `npx @tailwindcss/upgrade` for the mechanical parts, then hand-finish the theme —
the tool has no way to know which of Vero's variables are meant to be runtime-swappable.

### Phase 4 — Apply the six breaking changes (half a day)

§4.1 (6 sites), §4.3 (3 sites), §4.6 (1 site), §4.4 (plugin swap), plus the 14 v3-style
`!important` prefixes in `src/stories/design-tokens/components.tsx` and the `text-md` no-op
while it's in view.

On `space-*` (§4.2): with 138 call sites, converting to `gap` is a larger change than the rest
of the migration combined. Keep `space-*`, let Phase 6 find the places the semantics actually
bite, and convert only those.

### Phase 5 — Rework the published surface (1–2 days)

New CSS entry points, the `@theme`-based replacement for the config export, revised exports map
and size budgets, and a consumer migration guide covering `@source`, the config change, and the
browser floor. The `./tailwind.config.js` export needs an explicit deprecation story, not
silent removal.

### Phase 6 — Verify (3–5 days)

The dominant cost. 32 components across default, dark, and USWDS themes, against the Phase 1
baseline. Focus areas in order:

1. Focus indicators everywhere (§4.1 and the ring changes).
2. Radix-positioned overlays (§4.5).
3. Conditionally rendered form text (§4.2).
4. The three popover-width components (§4.3).

Re-run axe across all stories. §4.1 is exactly the class of regression automated a11y checks
catch and human review does not.

### Phase 7 — Release 2.0 (half a day)

Prerelease first, validated against a real consuming app rather than only the internal
example. Then 2.0 with the migration guide, and a stated support window for the 1.x line.

---

## 7. Effort summary

| Bucket                  | Estimate    |  Share |
| ----------------------- | ----------- | -----: |
| Engineering, Phases 1–7 | 8–13 days   |   100% |
| — of which verification | Phases 1, 6 |   ~45% |
| — of which code edits   | Phase 4     | ~1 day |

The verification range is the least certain number here and the one most likely to move.

---

## 8. Open questions / decisions to revisit

- **The browser floor (§2)** — needs consumer data. The only true blocker.
- **Whether 1.x gets real maintenance** or only security fixes, and for how long. Changes how
  much the dual-track story costs over the next year.
- **Visual regression tooling choice** — worth doing regardless of v4, and cheaper to justify
  as part of this than on its own.
- **Whether `preflight-mini` survives.** It currently sits in `@layer theme`, chosen when that
  name meant nothing to Tailwind (see `fix/preflight-mini-base-layer`, PR #19). In v4 `theme`
  is a real Tailwind layer and the lowest-priority one, so the mini-preflight's position
  changes meaning. It may be removable entirely in favor of v4's granular `preflight` import —
  a simplification, but one that needs checking against why each rule was added.
- **The `@apply` sites.** Only five, all in `src/styles/components.css`, all compiling into
  `--tw-ring-color` overrides. They should survive, but v4 may require a `@reference`
  depending on how that file ends up being built. Cheap to confirm, easy to miss.
