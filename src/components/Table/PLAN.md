# Table Component — Implementation Plan

Status: **v1 implemented** · Owner: TBD · Branch: `feat/table-component`

> v1 shipped on this branch: semantic primitives + `Table<T>`, column grouping,
> row headers, sorting (`aria-sort` + live announcements), visual row-group sections
> (primitives), scroll + stacked responsive modes, style variants, Storybook stories with
> `?raw` demos, and `vitest-axe` + interaction tests (all green; ~89 KB brotlied). Manual
> screen-reader passes (esp. stacked mode) still recommended per the §7 checklist.

A full-class, 508-compliant Table component for `@capitaltg/vero`, styled like the
[USWDS Table](https://designsystem.digital.gov/components/table/) using Tailwind + Vero
design tokens, with all machinery powered by
[TanStack Table](https://tanstack.com/table) (`@tanstack/react-table`).

> This is a living document. v1 is settled; v2+ is a backlog to iterate on _after_ v1 lands.

---

## 1. Principles (apply to every phase)

- **Accessibility / 508 compliance is the primary product.** Every feature ships with an
  a11y story and passing `vitest-axe` assertions before it's considered done.
- **Native `<table>` semantics by default.** Real `<table>/<thead>/<tbody>/<tr>/<th>/<td>`.
  We only reach for `role="grid"`/`treegrid` when we add interactive cell-level keyboard
  navigation or interactive tree/row grouping (an explicit, later, opt-in feature).
- **USWDS look via Vero tokens.** Style with cva + `cn` + `styles.*`, using the semantic
  scales and role tokens in `src/styles/theme.css` / `tailwind.config.js`. Styling is
  expected to change later — keep it isolated in cva definitions so a re-theme is cheap.
- **Match Vero conventions exactly.** Folder layout, `forwardRef` + `displayName`,
  generic-over-`<T>` forwardRef cast (see `Autocomplete`), flat compound exports (see
  `Dialog`), `vero-table` marker class, `@/` imports, JSDoc on every prop.
- **Storybook is a first-class deliverable.** Dedicated stories for _every_ feature and
  variant (see §4). Stories are how we build, review, and document this — for us and for
  consuming devs.

---

## 2. Architecture — Hybrid API

Two layers over one shared rendering surface:

### Layer 1 — Semantic primitives (dumb, styled, composable)

Styled wrappers around native table elements. Used directly for small/static/bespoke
tables; also the render target for `Table`.

- `TableRoot` — `<table>` + scrollable/stacked responsive wrapper, `vero-table` marker
- `TableCaption` — `<caption>` (supports visually-hidden)
- `TableHeader` — `<thead>`
- `TableBody` — `<tbody>` (multiple allowed → visual row-group sections)
- `TableFooter` — `<tfoot>`
- `TableRow` — `<tr>`
- `TableHead` — `<th>`; `scope` prop (`col | row | colgroup | rowgroup`), sort affordance hooks
- `TableCell` — `<td>`; optional `data-label` for stacked mode

Exported flat, like Dialog: `TableRoot, TableCaption, TableHeader, TableBody, TableFooter,
TableRow, TableHead, TableCell`. (The config-driven component below takes the bare `Table`
name; the primitive `<table>` wrapper is `TableRoot`.)

### Layer 2 — `Table<T>` (config-driven, TanStack-powered)

```tsx
<Table data={rows} columns={columns} caption="…" />
```

Runs `useReactTable` internally, renders through the Layer-1 primitives via `flexRender`.
Generic over `<T>` using the `Autocomplete` forwardRef-cast pattern. All v1 features below
are configured through `columns` (`ColumnDef[]`) + `Table` props + slot render props.

**Interchange rule:** the two layers share a render layer but are not mixed mid-table. You
either compose primitives yourself _or_ drive a `Table` and customize via its seams
(`ColumnDef.cell` renderers, `meta`, and slot props for caption/footer/toolbar/empty state).

---

## 3. File layout (matches Vero conventions)

```
src/components/Table/
  index.ts                      # flat barrel: Table + TableRoot primitives + types
  types.ts                      # TableProps<T> (config), TableRootProps (primitive), ColumnMeta augmentation, etc.
  constants.ts                  # cva definitions (tableVariants) + stacked-mode class maps
  PLAN.md                       # this document (remove or relocate before public release)
  src/
    TableRoot.tsx               # primitives (TableRoot + TableHeader/Body/Row/Head/Cell/…)
    Table.tsx                   # config-driven component (TanStack-powered)
    TableRoot.test.tsx          # primitives tests
    Table.test.tsx              # config-driven tests
  stories/
    TableRoot.stories.tsx       # primitives + composed examples
    Table.stories.tsx           # config-driven examples (one story per feature)
  demos/
    TableRoot*.tsx / Table*.tsx # one file per story example, shown as source via ?raw
```

- Add `export * from './components/Table'` to `src/index.ts` (alphabetical: between
  `SwitchGroup` and `Tabs`).
- Augment TanStack's `ColumnMeta` interface (module augmentation in `types.ts`) with
  `isRowHeader?`, `align?`, `stackedLabel?`, etc.
- New dependency: `@tanstack/react-table` (~13–15 KB gzipped, tree-shakeable — within the
  150 KB `size-limit` budget). Add to `dependencies`.

---

## 4. Storybook strategy (first-class)

**Rule: every feature and every variant gets its own dedicated, named story.** Stories use
the Vero `demos/` + `?raw` pattern so each example renders live _and_ shows its source.
`@storybook/addon-a11y` runs on all of them.

Baseline story set (grows with each phase):

- `TableRoot` (primitives): Default, WithCaption, RowHeaders, ColumnGroups (multi-level
  headers), RowGroupSections, Borderless/Striped/Compact style variants, Scrollable,
  Stacked.
- `Table` (config-driven): Default, Sortable, ColumnGroups, RowHeaders, RowGroupSections,
  Scrollable, Stacked, EmptyState, CustomCellRenderers.
- A dedicated **Accessibility** story per component demonstrating caption, `scope`,
  `aria-sort`, and the live-region announcement, with notes for consuming devs.

Each phase below lists the stories it must add.

---

## 5. v1 — The accessible foundation ✅ (build now)

### 5.1 Primitives

Semantic, styled Layer-1 components (§2). USWDS style variants via cva: default, striped,
borderless, compact; optional `stickyHeader`.

### 5.2 `Table<T>`

`data` + `columns` → `useReactTable` → primitives via `flexRender`. Slot props:
`caption`, `emptyState`, `footer`.

### 5.3 Caption / accessible name

`<caption>` always available (via `TableCaption` or `Table`'s `caption` prop).
Support visually-hidden captions (`styles`-based `sr-only`) so a table can be named for AT
without a visible title. **A table must always have an accessible name.**

### 5.4 Row headers

`<th scope="row">` for the row's header cell. In `Table`, designate via
`ColumnDef.meta.isRowHeader`. Primitives: consumer sets `scope="row"` on `TableHead`.

### 5.5 Column grouping (multi-level headers)

Nested `columns` in `ColumnDef` → TanStack header groups → multiple `<tr>` in `<thead>`
with correct `colSpan` and `scope="colgroup"` on spanning headers.

### 5.6 Column sorting

- TanStack `getSortedRowModel`, `sortingState`.
- Header renders a real `<button>` inside the `<th>`; `<th>` carries
  `aria-sort="ascending|descending|none"`.
- Sort direction icon (lucide `ChevronUp`/`ChevronDown`/`ChevronsUpDown`).
- `aria-live="polite"` `.sr-only` status region announces the new sort (column + direction),
  following the Autocomplete announcement pattern.
- Per-column opt-in/out; tri-state (asc → desc → none) configurable.

### 5.7 Visual row-group sections

Multiple `<tbody>` sections, each introduced by a group-header row using
`<th scope="colgroup">` (or `rowgroup` as appropriate). **Static only** — no collapse, no
aggregation in v1. Supported in primitives directly; `Table` helper to derive sections
from a grouping key (render-only, not TanStack `getGroupedRowModel`).

### 5.8 Responsive

- **Scrollable (default, always on):** focusable scroll container — `role="region"`,
  `tabindex="0"`, `aria-label` (derived from caption), visible focus ring. Works for any
  table.
- **Stacked (opt-in, `responsive="stack"`):** below a breakpoint each row becomes a card;
  each cell shows its column header via `data-label`. **`Table` populates `data-label`
  automatically** (it knows the headers). Primitive-path stacked requires the consumer to
  pass `data-label`/`stackedLabel` per cell — documented, lower priority.

### 5.9 Testing (v1)

- `vitest-axe` `expectNoViolations` for: default, with caption, row headers, column groups,
  row-group sections, sorted (each direction), scrollable, stacked, empty state.
- Interaction tests (user-event): clicking a sort header toggles `aria-sort` and updates
  order; live region announces; keyboard activation of sort button.
- Contract tests: `scope` values correct; `role="region"` + `aria-label` present on scroll
  wrapper; row-header `<th scope="row">` rendered where designated.

### 5.10 Stories (v1)

All baseline stories in §4 that don't depend on a later phase.

---

## 6. v2+ — Backlog (iterate after v1)

Each item is a clean add-on because the render layer is stable. Each ships with its own
stories and axe coverage. Rough priority order:

### Phase 2 — Interaction essentials

- **Row selection.** Checkbox column using Vero `Checkbox`; select-all in header;
  `aria-selected` where semantically appropriate; announce selection count. Indeterminate
  select-all state.
- **Pagination.** Client-side `getPaginationRowModel`; accessible page controls (reuse/align
  with any Vero Pagination); announce page changes; page-size select.
- **Filtering / global search.** Column filters + optional global search box; result-count
  announcements; clear affordance. Debounced.

Stories: RowSelection, SelectAll, Pagination, PageSizes, ColumnFilters, GlobalSearch.

### Phase 3 — Advanced grouping

- **Collapsible aggregated groups.** TanStack `getGroupedRowModel` + aggregation
  (count/sum/avg/custom). Expand/collapse with `aria-expanded`, focus management, and
  announcements. Decide `treegrid` vs native semantics here.
- **Expandable detail rows.** `getExpandedRowModel` master-detail; expander button a11y;
  detail row association.

Stories: GroupedAggregated, GroupedCollapsible, ExpandableRows, MasterDetail.

### Phase 4 — Column management

- Column resizing (keyboard-operable handles, `aria-label`).
- Column reordering (accessible drag alternative / keyboard move).
- Column pinning (left/right) + sticky columns.
- Column visibility toggle menu.

Stories: ResizableColumns, ReorderColumns, PinnedColumns, ColumnVisibility.

### Phase 5 — Scale & interaction depth

- **`role="grid"` keyboard cell navigation** (arrow keys, Home/End, PageUp/Down, roving
  tabindex) — opt-in, for spreadsheet-like tables.
- **Virtualization** (`@tanstack/react-virtual`) for large datasets, with an a11y-safe
  strategy (row count semantics, focus retention).
- Sticky header refinements; sticky first column.

Stories: KeyboardGridNav, VirtualizedRows, StickyHeaderAndColumn.

### Phase 6 — Nice-to-haves

- Editable cells (inline edit a11y).
- Server-side data mode (manual sorting/pagination/filtering; loading + skeleton states;
  announce loading).
- Export (CSV) affordance.
- Density toggle control.
- Custom empty / error / loading slots standardized.

Stories: EditableCells, ServerSideData, LoadingStates, DensityToggle.

---

## 7. Accessibility checklist (living)

- [ ] Every table has an accessible name (`<caption>` or `aria-label`/`aria-labelledby`).
- [ ] `<th>` with correct `scope` (`col`/`row`/`colgroup`/`rowgroup`) everywhere.
- [ ] Sortable headers: `<button>` + `aria-sort`; live-region announcement.
- [ ] Scroll container: `role="region"`, `tabindex="0"`, `aria-label`, visible focus.
- [ ] Stacked mode: each cell labeled with its column header.
- [ ] Color is never the only signal (sort direction, selection, groups also use icon/text).
- [ ] Contrast meets WCAG AA against Vero tokens in default + `.dark` + `.theme-uswds`.
- [ ] All interactive affordances are keyboard-operable with visible focus.
- [ ] `vitest-axe` passes for every story/state.
- [ ] Manual screen-reader smoke test (VoiceOver / NVDA) per phase.

---

## 8. Open questions / decisions to revisit

- Primitive-path stacked mode: ship in v1 (consumer supplies labels) or defer entirely?
  _Current: defer; `Table` stacked only in v1._
- Do we align pagination with a future dedicated Vero `Pagination` component, or build
  table-local controls first? (Phase 2 decision.)
- When we add collapsible grouping/expansion: native semantics vs `treegrid`. (Phase 3.)
- Should style variants (striped/compact/borderless) be cva variants on `TableRoot`, or a
  theme-level concern? _Current: cva variants._
- Final home for this PLAN.md before public release (docs site vs delete).
