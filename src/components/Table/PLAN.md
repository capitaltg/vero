# Table Component — Implementation Plan

Status: **v1 implemented (internal / unreleased)** · Owner: TBD · Branch: `feat/table-component`

> Landed but intentionally **not part of the public API yet**: the root barrel export in
> `src/index.ts` is still commented out, so nothing ships until it's uncommented. The Storybook
> stories are visible (they carried `tags: ['!dev']` until the docs page landed), and the docs
> page carries a "Preview" callout to remove at release.

> v1 shipped on this branch: semantic primitives + `DataTable<T>`, column grouping,
> row headers, sorting (`aria-sort` + live announcements), visual row-group sections
> (primitives), scroll + stacked responsive modes, style variants, Storybook stories with
> `?raw` demos, and `vitest-axe` + interaction tests (all green; ~89 KB brotlied). Manual
> screen-reader passes (esp. stacked mode) still recommended per the §7 checklist.
>
> Follow-up (responsive parity pass): stacked mode now matches USWDS
> `usa-table--stacked` / `usa-table--stacked-header` rule for rule, works from the
> primitives with no extra markup (labels are derived from the header row), gained
> `stackedStyle="headers"`, and `stickyHeader` was added for
> `usa-table--sticky-header` parity. The `striped` variant's colors were also fixed —
> they used `bg-muted/40` and `bg-muted/50`, and Tailwind cannot apply an opacity
> modifier to Vero's raw `var(--token)` colors, so those rules compiled to nothing.
>
> Naming (settled before release, while nothing is exported): the primitives' root is `Table`
> and the config-driven component is `DataTable`. `Table` is what react-uswds calls its
> composable wrapper and what the `Table*` children belong to; `DataTable` is the common name
> for the config/TanStack-driven kind. `Table` also gained `caption` / `captionHidden`
> convenience props — `DataTable` now forwards its own caption straight through to them
> instead of rendering `<TableCaption>` itself.

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
tables; also the render target for `DataTable`.

- `Table` — `<table>` + scrollable/stacked responsive wrapper, `vero-table` marker
- `TableCaption` — `<caption>` (supports visually-hidden)
- `TableHeader` — `<thead>`
- `TableBody` — `<tbody>` (multiple allowed → visual row-group sections)
- `TableFooter` — `<tfoot>`
- `TableRow` — `<tr>`
- `TableHead` — `<th>`; `scope` prop (`col | row | colgroup | rowgroup`), sort affordance hooks
- `TableCell` — `<td>`; optional `data-label` for stacked mode

Exported flat, like Dialog: `Table, TableCaption, TableHeader, TableBody, TableFooter,
TableRow, TableHead, TableCell`. The primitive wrapper takes the bare `Table` name — it is the
direct counterpart of react-uswds's `<Table>`, and it matches the `Table*` children it is
composed with. The config-driven component below is therefore `DataTable`.

### Layer 2 — `DataTable<T>` (config-driven, TanStack-powered)

```tsx
<DataTable data={rows} columns={columns} caption="…" />
```

Runs `useReactTable` internally, renders through the Layer-1 primitives via `flexRender`.
Generic over `<T>` using the `Autocomplete` forwardRef-cast pattern. All v1 features below
are configured through `columns` (`ColumnDef[]`) + `DataTable` props + slot render props.

**Interchange rule:** the two layers share a render layer but are not mixed mid-table. You
either compose primitives yourself _or_ drive a `DataTable` and customize via its seams
(`ColumnDef.cell` renderers, `meta`, and slot props for caption/footer/toolbar/empty state).

---

## 3. File layout (matches Vero conventions)

```
src/components/Table/
  index.ts                      # flat barrel: DataTable + Table primitives + types
  types.ts                      # DataTableProps<T> (config), TableProps (primitive), ColumnMeta augmentation, etc.
  constants.ts                  # cva definitions (tableVariants) + stacked-mode class maps
  PLAN.md                       # this document (remove or relocate before public release)
  src/
    Table.tsx                   # primitives (Table + TableHeader/Body/Row/Head/Cell/…)
    DataTable.tsx               # config-driven component (TanStack-powered)
    Table.test.tsx              # primitives tests
    DataTable.test.tsx          # config-driven tests
  stories/
    Table.stories.tsx           # primitives + composed examples
    Table.mdx                   # the hand-written docs page for both components
    DataTable.stories.tsx       # config-driven examples (one story per feature)
  demos/
    Table*.tsx / DataTable*.tsx # one file per story example, shown as source via ?raw
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

- `Table` (primitives): Default, WithCaption, RowHeaders, ColumnGroups (multi-level
  headers), RowGroupSections, Borderless/Striped/Compact style variants, Scrollable,
  Stacked.
- `DataTable` (config-driven): Default, Sortable, ColumnGroups, RowHeaders, RowGroupSections,
  Scrollable, Stacked, EmptyState, CustomCellRenderers.
- A dedicated **Accessibility** story per component demonstrating caption, `scope`,
  `aria-sort`, and the live-region announcement, with notes for consuming devs.

Each phase below lists the stories it must add.

---

## 5. v1 — The accessible foundation ✅ (build now)

### 5.1 Primitives

Semantic, styled Layer-1 components (§2). USWDS style variants via cva: default, striped,
borderless, compact; optional `stickyHeader`.

### 5.2 `DataTable<T>`

`data` + `columns` → `useReactTable` → primitives via `flexRender`. Slot props:
`caption`, `emptyState`, `footer`.

### 5.3 Caption / accessible name

`<caption>` always available (via `TableCaption`, or the `caption` prop on either component).
Support visually-hidden captions (`styles`-based `sr-only`) so a table can be named for AT
without a visible title. **A table must always have an accessible name.**

### 5.4 Row headers

`<th scope="row">` for the row's header cell. In `DataTable`, designate via
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
aggregation in v1. Supported in primitives directly; `DataTable` helper to derive sections
from a grouping key (render-only, not TanStack `getGroupedRowModel`).

### 5.8 Responsive

- **Scrollable (default, always on):** focusable scroll container — `role="region"`,
  `tabindex="0"`, `aria-label` (derived from caption), visible focus ring, applied only
  when the table actually overflows so it never becomes a phantom tab stop. Unlike USWDS
  we do not force `white-space: nowrap` on cells, so text wraps by default; add
  `whitespace-nowrap` per column to get the USWDS "never squeeze a column" behavior.
- **Stacked (opt-in, `responsive="stack"`):** below `stackBreakpoint` each row becomes a
  card and each cell renders its column header above its value from `data-label`
  (`content: attr(data-label)`), exactly as USWDS does. Both layers fill `data-label` in
  automatically: `DataTable` from the column definitions, `Table` by reading the header
  row (an explicit `data-label` on a cell always wins). `stackedStyle="headers"` promotes
  each row's first cell to the card's heading (USWDS `usa-table--stacked-header`).

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
- [x] Stacked mode: each cell labeled with its column header (`data-label` on every body
      cell; rendered as `::before` generated content, the USWDS approach).
- [ ] Color is never the only signal (sort direction, selection, groups also use icon/text).
- [ ] Contrast meets WCAG AA against Vero tokens in default + `.dark` + `.theme-uswds`.
- [ ] All interactive affordances are keyboard-operable with visible focus.
- [ ] `vitest-axe` passes for every story/state.
- [ ] Manual screen-reader smoke test (VoiceOver / NVDA) per phase.

---

## 8. Open questions / decisions to revisit

- ~~Primitive-path stacked mode: ship in v1 (consumer supplies labels) or defer entirely?~~
  _Resolved: shipped. `Table` derives each cell's label from the header row, so
  hand-composed tables stack with no extra markup; `data-label` overrides it._
- Stacking keys off viewport width (like USWDS). A container query would stack a table
  that sits in a narrow column of a wide page; revisit with the Tailwind v4 migration,
  which has container queries built in.
- Do we align pagination with a future dedicated Vero `Pagination` component, or build
  table-local controls first? (Phase 2 decision.)
- When we add collapsible grouping/expansion: native semantics vs `treegrid`. (Phase 3.)
- Should style variants (striped/compact/borderless) be cva variants on `Table`, or a
  theme-level concern? _Current: cva variants._
- Final home for this PLAN.md before public release (docs site vs delete).
