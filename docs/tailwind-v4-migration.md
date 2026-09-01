# Tailwind CSS v4 — Migration Plan

Status: **assessed, not started** · Owner: TBD · Target: `@capitaltg/vero` v2.0

> **The browser floor was the open blocker; it has been researched and is not one (§2).**
> Tailwind v4 requires Safari 16.4+ / Chrome 111+ / Firefox 128+. Those landed in March 2023,
> March 2023, and July 2024 — the two largest engines are 3½ years back, and ~95% of tracked
> global usage is above the floor. The residual risk is pinned browsers in managed environments,
> not release cadence, and Vero's 1.x line on v3 remains as a fallback.

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

## 2. Browser support floor — researched, not a blocker

Tailwind v4 is built on `@property` and `color-mix()`. These are not progressive
enhancements — they carry core utility behavior, so transforms, shadows, rings, and
placeholder colors degrade badly rather than gracefully on older engines. No v4
configuration lowers the floor.

### How old the floor actually is

Measured 31 Aug 2026:

| Engine  | v4 floor | Released    | Age at time of writing   | Current stable     |
| ------- | -------- | ----------- | ------------------------ | ------------------ |
| Chrome  | 111      | 7 Mar 2023  | 3 yr 6 mo (~40 releases) | 151 (28 Jul 2026)  |
| Edge    | 111      | Mar 2023    | 3 yr 6 mo                | tracks Chrome      |
| Safari  | 16.4     | 27 Mar 2023 | 3 yr 5 mo                | 26.6 (27 Jul 2026) |
| Firefox | 128      | 9 Jul 2024  | 2 yr 2 mo (~26 releases) | 154 (18 Aug 2026)  |

Firefox 128 is the youngest constraint by a wide margin — Mozilla shipped `@property` late.

### Who actually falls below it

From caniuse usage data (`caniuse-lite` 1.0.30001810), summing every tracked browser version
against the per-engine floor:

- **~92% of tracked global usage is above the floor**; ~4.7% is explicitly below.
- Of that 4.7%, the largest bucket is **old Chrome at 1.99%** — then Firefox 0.85%,
  UC Browser 0.68%, iOS Safari 0.61%, IE 0.27%, desktop Safari 0.12%, QQ Browser 0.10%.
- Excluding UC Browser and QQ Browser, which are not meaningful for US federal traffic, the
  relevant below-floor share is **~3.8%**.

Normalized against enumerated usage only, that is **~95% supported**.

### Why the release cadence argument holds

Chrome, Edge, and Firefox auto-update and have shipped roughly 40 and 26 releases respectively
since the floor. So the exposure is not "users who haven't updated yet" — it is **users who
cannot update**, which is a different and much smaller population.

Two caveats worth keeping in view:

- **Safari is not on a six-week cadence.** It ships with the OS, and Safari 16.4 requires
  macOS 13 Ventura (Oct 2022). Someone on macOS 12 cannot reach the floor without an OS
  upgrade. Observed below-floor Safari is nonetheless small: 0.12% desktop, 0.61% iOS.
- **The old-Chrome tail correlates with managed machines** — locked-down enterprise and
  government fleets that pin versions. That is disproportionately Vero's audience, and it is
  where essentially all of the 1.99% lives.

### What this does not change

**IE is already excluded.** Tailwind v3 explicitly supports no version of IE, including 11.
So IE traffic is unserved by Vero _today_ and v4 is not a regression there. Worth stating
because IE still shows real share in federal traffic — 1.9% of users in the most recent
analytics.usa.gov snapshot available (Feb 2025; Chrome 53.4%, Safari 24.4%, Edge 14.5%,
Firefox 2.9%). That snapshot is stale and should be re-pulled before it is leaned on.

Also note v3 never published a numeric floor — its stated support is "the latest stable
versions of Chrome, Firefox, Edge, and Safari." There is no crisp v3-to-v4 delta to compute,
and staying on v3 was never a promise of deep backward compatibility.

### Conclusion

The floor should not block this migration. It is old, well-covered, and the fallback is real:
the 1.x line stays on v3 for consumers who need it (§5.3).

The one thing still worth confirming is per-consumer: **if a specific agency deployment pins a
browser version below the floor, that is a conversation with that consumer**, not a
library-wide blocker.

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

### 4.7 Corrections worth recording

- **`ring-offset-*` survives.** The v4 documentation summary consulted first said it had been
  removed, which would have hit 13 focus-indicator call sites. Compiling against v4.3.3
  directly shows `ring-offset-2` and `ring-offset-background` both generating normally. No
  work needed — this moves Vero's focus-styling risk from serious to nil.
- **A latent no-op.** `src/components/StepIndicator/constants.ts` uses `text-md`, which has
  never been a Tailwind class in either version. It generates nothing today and will generate
  nothing after. Unrelated to v4, but it likely means the intended size was never applied.

### 4.8 Checked and clear — don't re-investigate

Recorded so nobody spends time re-deriving these:

- **Gradient utilities.** v4 keeps `bg-gradient-to-*` as a deprecated alias alongside the new
  `bg-linear-to-*`, so even a migration that ignored them would be safe. Vero uses no gradient
  utilities at all — an earlier count of ~20 was regex false positives (`from-` and `to-`
  matching ordinary prose).
- **`prefix: ''`** in the config is a no-op, so v4's move to `@import "tailwindcss" prefix(tw)`
  does not apply.
- **Node version.** CI runs Node 22; `@tailwindcss/upgrade` needs 20+.
- **No test asserts computed styles.** Nothing uses `getComputedStyle` or `toHaveStyle`, so the
  test-suite exposure is whether CSS _processing_ succeeds, not whether assertions shift.

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

### Phase 0 — Confirm the version strategy (no code)

The browser floor is settled (§2). What remains is confirming the 2.0-on-v4 / 1.x-on-v3 split
and how long 1.x gets maintained, since that shapes how much the dual-track story costs. Worth
also asking known agency consumers whether any deployment pins a browser below the floor —
that would be a conversation with them rather than a reason to stop.

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
- Bump `prettier-plugin-tailwindcss` 0.6.11 → 0.8.x, which is the version that sorts v4
  classes. Left alone, class sorting silently keeps applying v3 ordering — and it runs in
  `lint-staged` on every commit, so it would quietly churn every file it touches. Confirm it
  still composes with `prettier-plugin-classnames` and `prettier-plugin-merge`.
- Don't forget the test pipeline: `vitest.config.ts` sets `css: true`, so the suite processes
  CSS through the same toolchain. This phase touches build, Storybook, _and_ tests.

Mostly mechanical, and it fails loudly rather than silently. CI is already on Node 22, which
satisfies the `@tailwindcss/upgrade` requirement of Node 20+.

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

One documentation consequence that is easy to miss: v4 removes `corePlugins`, and the README
currently points consumers at `corePlugins: { preflight: false }` to opt out of Preflight.
Under v4 that key does not exist — you simply don't import the preflight layer. Any published
guidance mentioning `corePlugins` needs rewriting alongside the config export.

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

- **Per-consumer browser pinning (§2)** — the floor itself is settled and fine; what remains
  is confirming no specific agency deployment pins a browser below it. Not a blocker for the
  work, but worth asking before 2.0 ships.
- **Whether 1.x gets real maintenance** or only security fixes, and for how long. Changes how
  much the dual-track story costs over the next year.
- **Visual regression tooling choice** — worth doing regardless of v4, and cheaper to justify
  as part of this than on its own.
- **Whether `preflight-mini` survives.** It currently sits in `@layer theme`, chosen when that
  name meant nothing to Tailwind (see `fix/preflight-mini-base-layer`, PR #19). In v4 `theme`
  is a real Tailwind layer and the lowest-priority one, so the mini-preflight's position
  changes meaning. It may be removable entirely in favor of v4's granular `preflight` import —
  a simplification, but one that needs checking against why each rule was added.
- **The `@apply` sites — 12 across three files**, not the five in `src/styles/components.css`
  alone: `.storybook/preview.css` (7), `src/app/styles.css` (2), `src/styles/components.css`
  (3). The Storybook one matters most, because v4 requires `@reference` in stylesheets that are
  processed separately from the one importing the theme, and Storybook's preview CSS is exactly
  that shape. The three in `components.css` compile into `--tw-ring-color` overrides and should
  survive as-is. Confirm all three files, not just the published one.
