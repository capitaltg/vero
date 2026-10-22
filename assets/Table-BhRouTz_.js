import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as l}from"./index-DL7Mpk60.js";import{M as c,C as s,a as t}from"./index-CbmbA81t.js";import{Scrollable as i,Stacked as o,StackedHeaders as a,StickyHeader as h,Sortable as x,ColumnGroups as j,Empty as p}from"./DataTable.stories-DDbz3Fyt.js";import{T as m,D as u,P as b,S as y,C as g,R as f,a as w}from"./Table.stories-C3y3XBYH.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BDAsZMSS.js";import"./index-KklXjS-Z.js";import"./index-CwPCC0ZT.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./styles-CafxXXJc.js";import"./utils-CU3My8Oi.js";import"./Table-Bls2z3sO.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-BeEkWZrd.js";import"./chevrons-up-down-CPJXHd7n.js";function r(d){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:m}),`
`,e.jsx(n.h1,{id:"table",children:"Table"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Experimental."}),` Both components are exported for early feedback. They are complete and covered
by tests, but the API may change, or they may be removed, without a major version bump. Each
export is tagged `,e.jsx(n.code,{children:"@experimental"}),`, and the first table to mount logs a one-time warning in
development builds. See the `,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/blob/main/src/components/Table/PLAN.md",rel:"nofollow",children:"Table plan"}),`
for status.`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Accessible, 508-friendly tables styled after the
`,e.jsx(n.a,{href:"https://designsystem.digital.gov/components/table/",rel:"nofollow",children:"USWDS Table"}),`, with sorting, column grouping
and responsive behavior built on `,e.jsx(n.a,{href:"https://tanstack.com/table",rel:"nofollow",children:"TanStack Table"}),"."]}),`
`,e.jsx(n.p,{children:"Vero ships two components over one render layer:"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Component"}),e.jsx("th",{children:"Use it when"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"Table"})," — the primitives"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[`The content is static or bespoke and writing it as markup is clearer than describing it as
data. Compose it with `,e.jsx("code",{children:"TableHeader"}),", ",e.jsx("code",{children:"TableBody"}),","," ",`
`,e.jsx("code",{children:"TableRow"}),", ",e.jsx("code",{children:"TableHead"})," and ",e.jsx("code",{children:"TableCell"}),`, exactly as you
would the native elements.`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"DataTable"})," — config driven"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["You have rows and a column definition. Pass ",e.jsx("code",{children:"data"})," and ",e.jsx("code",{children:"columns"}),` and
you get sorting, grouped headers, row headers, an empty state and both responsive modes with
nothing else to wire up. It renders through the same primitives.`]})})]})]})]}),`
`,e.jsxs(n.p,{children:[`Don't mix the two inside one table: either compose the primitives yourself, or drive a
`,e.jsx(n.code,{children:"DataTable"})," and customize it through its seams (",e.jsx(n.code,{children:"ColumnDef.cell"})," renderers, ",e.jsx(n.code,{children:"meta"}),`, and the
`,e.jsx(n.code,{children:"caption"})," / ",e.jsx(n.code,{children:"footer"})," / ",e.jsx(n.code,{children:"emptyState"})," slots)."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick start"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@capitaltg/vero';

<Table caption="Quarterly revenue">
  <TableHeader>
    <TableRow>
      <TableHead scope="col">Quarter</TableHead>
      <TableHead scope="col">Revenue</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableHead scope="row">Q1</TableHead>
      <TableCell>$1.2M</TableCell>
    </TableRow>
  </TableBody>
</Table>;
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"caption"})," prop is a convenience for the common case; compose ",e.jsx(n.code,{children:"<TableCaption>"}),` yourself when
the caption needs its own markup.`]}),`
`,e.jsx(n.p,{children:"The same table, config driven:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { DataTable, type DataTableColumnDef } from '@capitaltg/vero';

interface Person {
  name: string;
  role: string;
  salary: number;
}

const columns: DataTableColumnDef<Person>[] = [
  // One column per table should be the row header.
  { accessorKey: 'name', header: 'Name', meta: { isRowHeader: true } },
  { accessorKey: 'role', header: 'Role' },
  {
    accessorKey: 'salary',
    header: 'Salary',
    meta: { align: 'right' },
    cell: info => \`$\${info.getValue<number>().toLocaleString()}\`,
  },
];

<DataTable caption="Team roster" columns={columns} data={people} />;
`})}),`
`,e.jsxs(n.p,{children:["Every table needs an accessible name. Prefer a visible ",e.jsx(n.code,{children:"caption"}),`; if a heading beside the table
already names it, pass `,e.jsx(n.code,{children:"captionHidden"}),` to keep the caption for screen readers only, or use
`,e.jsx(n.code,{children:"aria-label"}),"."]}),`
`,e.jsxs(n.h2,{id:"table-props",children:[e.jsx(n.code,{children:"Table"})," props"]}),`
`,e.jsx(t,{of:b}),`
`,e.jsxs(n.p,{children:["Alongside ",e.jsx(n.code,{children:"caption"})," / ",e.jsx(n.code,{children:"captionHidden"}),", ",e.jsx(n.code,{children:"Table"}),` takes the styling and responsive props shared with
`,e.jsx(n.code,{children:"DataTable"}),": ",e.jsx(n.code,{children:"variant"})," (",e.jsx(n.code,{children:"bordered"})," | ",e.jsx(n.code,{children:"borderless"}),"), ",e.jsx(n.code,{children:"striped"}),", ",e.jsx(n.code,{children:"density"})," (",e.jsx(n.code,{children:"default"})," | ",e.jsx(n.code,{children:"compact"}),`),
`,e.jsx(n.code,{children:"stickyHeader"}),", ",e.jsx(n.code,{children:"responsive"})," (",e.jsx(n.code,{children:"scroll"})," | ",e.jsx(n.code,{children:"stack"})," | ",e.jsx(n.code,{children:"none"}),"), ",e.jsx(n.code,{children:"stackBreakpoint"})," (",e.jsx(n.code,{children:"sm"})," | ",e.jsx(n.code,{children:"md"})," | ",e.jsx(n.code,{children:"lg"}),`)
and `,e.jsx(n.code,{children:"stackedStyle"})," (",e.jsx(n.code,{children:"default"})," | ",e.jsx(n.code,{children:"headers"}),"). Everything else lands on the ",e.jsx(n.code,{children:"<table>"})," element."]}),`
`,e.jsxs(n.p,{children:["The children are thin wrappers over the native elements: ",e.jsx(n.code,{children:"TableCaption"})," (",e.jsx(n.code,{children:"<caption>"}),`, with
`,e.jsx(n.code,{children:"hidden"})," for a screen-reader-only caption), ",e.jsx(n.code,{children:"TableHeader"})," (",e.jsx(n.code,{children:"<thead>"}),"), ",e.jsx(n.code,{children:"TableBody"})," (",e.jsx(n.code,{children:"<tbody>"}),` —
use several for row-group sections), `,e.jsx(n.code,{children:"TableFooter"})," (",e.jsx(n.code,{children:"<tfoot>"}),"), ",e.jsx(n.code,{children:"TableRow"})," (",e.jsx(n.code,{children:"<tr>"}),"), ",e.jsx(n.code,{children:"TableHead"}),`
(`,e.jsx(n.code,{children:"<th>"}),", with ",e.jsx(n.code,{children:"scope"})," defaulting to ",e.jsx(n.code,{children:"col"}),") and ",e.jsx(n.code,{children:"TableCell"})," (",e.jsx(n.code,{children:"<td>"}),`). Both cell components accept a
`,e.jsx(n.code,{children:"label"}),", shown above the value while the table is stacked."]}),`
`,e.jsxs(n.h2,{id:"datatable-props",children:[e.jsx(n.code,{children:"DataTable"})," props"]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"data"})}),e.jsx("td",{children:e.jsx("code",{children:"TData[]"})}),e.jsx("td",{children:"—"}),e.jsx("td",{children:"The rows to render."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"columns"})}),e.jsx("td",{children:e.jsx("code",{children:"DataTableColumnDef<TData>[]"})}),e.jsx("td",{children:"—"}),e.jsx("td",{children:e.jsxs(n.p,{children:["TanStack Table column definitions, with Vero's options on ",e.jsx("code",{children:"meta"}),`. Nest them to
get grouped headers. Plain `,e.jsx("code",{children:"ColumnDef"})," arrays work too."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"caption"})," / ",e.jsx("code",{children:"captionHidden"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"ReactNode"})," / ",e.jsx("code",{children:"boolean"})]})}),e.jsx("td",{children:"—"}),e.jsx("td",{children:"The table's caption and accessible name; optionally screen-reader only."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"enableSorting"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["Turn on column sorting. Individual columns opt out with ",e.jsx("code",{children:"enableSorting: false"}),"."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"initialSorting"})}),e.jsx("td",{children:e.jsx("code",{children:"SortingState"})}),e.jsx("td",{children:e.jsx("code",{children:"[]"})}),e.jsx("td",{children:"Starting sort for the uncontrolled case."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"sorting"})," / ",e.jsx("code",{children:"onSortingChange"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"SortingState"})," / ",e.jsx("code",{children:"OnChangeFn"})]})}),e.jsx("td",{children:"—"}),e.jsx("td",{children:"Controlled sorting state."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"responsive"})}),e.jsx("td",{children:e.jsx("code",{children:"'scroll' | 'stack' | 'none'"})}),e.jsx("td",{children:e.jsx("code",{children:"'scroll'"})}),e.jsx("td",{children:"How the table adapts to narrow viewports. See below."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stackBreakpoint"})}),e.jsx("td",{children:e.jsx("code",{children:"'sm' | 'md' | 'lg'"})}),e.jsx("td",{children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{children:"Width below which a stacked table becomes cards."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stackedStyle"})}),e.jsx("td",{children:e.jsx("code",{children:"'default' | 'headers'"})}),e.jsx("td",{children:e.jsx("code",{children:"'default'"})}),e.jsx("td",{children:"Whether each card gets a heading. Only applies while stacked."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"variant"})}),e.jsx("td",{children:e.jsx("code",{children:"'bordered' | 'borderless'"})}),e.jsx("td",{children:e.jsx("code",{children:"'bordered'"})}),e.jsx("td",{children:"Grid line style."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"striped"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"Shade alternating body rows."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"density"})}),e.jsx("td",{children:e.jsx("code",{children:"'default' | 'compact'"})}),e.jsx("td",{children:e.jsx("code",{children:"'default'"})}),e.jsx("td",{children:"Cell padding. Not recommended together with stacked mode."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stickyHeader"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"Pin the header row while the rows scroll past it."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"emptyState"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:e.jsx("code",{children:"'No data available'"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["Shown in place of rows when ",e.jsx("code",{children:"data"})," is empty."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"footer"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:"—"}),e.jsx("td",{children:e.jsxs(n.p,{children:["Content for a ",e.jsx("code",{children:"<tfoot>"})," row spanning every column."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"getRowId"})}),e.jsx("td",{children:e.jsx("code",{children:"(row, index) => string"})}),e.jsx("td",{children:"—"}),e.jsx("td",{children:"Stable row identity, forwarded to TanStack."})]})]})]}),`
`,e.jsxs(n.h3,{id:"per-column-options-meta",children:["Per-column options (",e.jsx(n.code,{children:"meta"}),")"]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Field"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isRowHeader"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["Render this column's cells as ",e.jsx("code",{children:'<th scope="row">'}),`. Mark exactly one column
per table.`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"align"})}),e.jsx("td",{children:e.jsx("code",{children:"'left' | 'center' | 'right'"})}),e.jsx("td",{children:"Horizontal alignment of the header and its cells."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stackedLabel"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx(n.p,{children:`Label used for this column's cells while stacked. Defaults to the header text — set it when
the header is JSX, or when the header is too long to repeat on every card.`})})]})]})]}),`
`,e.jsxs(n.p,{children:["Type your column array as ",e.jsx(n.code,{children:"DataTableColumnDef<T>[]"}),` (exported from Vero) to get autocomplete and
typo checking on these fields. Plain TanStack `,e.jsx(n.code,{children:"ColumnDef"})," arrays and ",e.jsx(n.code,{children:"createColumnHelper"}),` output
are accepted too, just without that checking on `,e.jsx(n.code,{children:"meta"}),"."]}),`
`,e.jsxs(n.p,{children:["Vero deliberately doesn't add these fields to TanStack's global ",e.jsx(n.code,{children:"ColumnMeta"}),` type: that would
change the types of every app that imports Vero, and break apps that already define a field such
as `,e.jsx(n.code,{children:"align"})," of their own. If you'd rather have them on ",e.jsx(n.code,{children:"ColumnMeta"}),` everywhere, for example to use
`,e.jsx(n.code,{children:"createColumnHelper"})," with full checking, opt in from your own app:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import type { DataTableColumnMeta } from '@capitaltg/vero';
import type { RowData } from '@tanstack/react-table';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> extends DataTableColumnMeta {}
}
`})}),`
`,e.jsx(n.h2,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,e.jsx(n.p,{children:"This is the part you get for free, and it works the same on both components."}),`
`,e.jsx(n.h3,{id:"scrolling--the-default",children:"Scrolling — the default"}),`
`,e.jsxs(n.p,{children:[`Wide tables get a horizontal scroll container. It only becomes a focusable, labeled
`,e.jsx(n.code,{children:'role="region"'}),` when the content actually overflows, so a table that fits never adds a stray tab
stop, and one that doesn't fit stays reachable by keyboard.`]}),`
`,e.jsx(s,{of:i}),`
`,e.jsxs(n.p,{children:["Unlike USWDS we don't force ",e.jsx(n.code,{children:"white-space: nowrap"}),` on cells, so text wraps by default and narrow
tables simply get narrower. Add `,e.jsx(n.code,{children:"whitespace-nowrap"}),` to the columns that should never be squeezed.
To keep a whole table on one line per row and let it scroll instead, put the class on the table
itself. Cells inherit it:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DataTable caption="Cases" className="whitespace-nowrap" columns={columns} data={cases} />
`})}),`
`,e.jsxs(n.p,{children:[`If the table also stacks, scope it to the stack breakpoint, so long values can still wrap inside
the cards on narrow screens: `,e.jsx(n.code,{children:'className="md:whitespace-nowrap"'}),` for the default
`,e.jsx(n.code,{children:'stackBreakpoint="md"'})," (",e.jsx(n.code,{children:"sm:"})," or ",e.jsx(n.code,{children:"lg:"})," to match the others)."]}),`
`,e.jsx(n.h3,{id:"stacking-into-cards",children:"Stacking into cards"}),`
`,e.jsxs(n.p,{children:["With ",e.jsx(n.code,{children:'responsive="stack"'}),", each row below ",e.jsx(n.code,{children:"stackBreakpoint"}),` becomes a card and every cell renders
its column header above its value. Resize your browser below 768px to watch these reflow — the
docs canvas is rendered at the page's own width.`]}),`
`,e.jsx(s,{of:o}),`
`,e.jsxs(n.p,{children:["The label comes from each cell's ",e.jsx(n.code,{children:"label"})," prop. USWDS uses a ",e.jsx(n.code,{children:"data-label"}),` attribute drawn with
`,e.jsx(n.code,{children:"content: attr(data-label)"}),`; here it is a real element, so it can hold any React content, and it
is only rendered while the table is stacked.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DataTable"})," fills ",e.jsx(n.code,{children:"label"})," in from your column definitions (or ",e.jsx(n.code,{children:"meta.stackedLabel"}),`), so there is
nothing to wire up.`]}),`
`,e.jsxs(n.li,{children:["With the primitives, pass ",e.jsx(n.code,{children:"label"}),` on each body cell — usually its column header, or something
more specific when that reads better on a card.`]}),`
`]}),`
`,e.jsx(s,{of:y}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"stackBreakpoint"})}),e.jsx("th",{children:"Stacks below"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sm"})}),e.jsx("td",{children:"640px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"md"})," (default)"]})}),e.jsx("td",{children:"768px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"lg"})}),e.jsx("td",{children:"1024px"})]})]})]}),`
`,e.jsxs(n.p,{children:[`Two things to know before choosing this mode. Below the breakpoint the header row is hidden, so
the grid's row/column semantics give way to the card layout and the per-cell labels carry the
meaning — that also means sortable headers are only reachable at wider widths. It suits
record-style data; for wide numeric tables, `,e.jsx(n.code,{children:'responsive="scroll"'})," keeps the grid intact."]}),`
`,e.jsx(n.h3,{id:"cards-with-headings",children:"Cards with headings"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'stackedStyle="headers"'}),` promotes the first cell of each row to the card's heading instead of
labeling it like the rest — good when that first column identifies the record.`]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h3,{id:"sticky-header",children:"Sticky header"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"stickyHeader"}),` keeps the column headers visible while the rows scroll. The table needs a scrolling
ancestor for that: the page itself, or a height-constrained container. Pair it with
`,e.jsx(n.code,{children:'responsive="none"'}),` so the default horizontal scroll wrapper doesn't become a non-scrolling sticky
context. USWDS advises against combining it with scrollable or stacked variants.`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"sorting",children:"Sorting"}),`
`,e.jsxs(n.p,{children:["Sortable headers render a real ",e.jsx(n.code,{children:"<button>"}),"; the ",e.jsx(n.code,{children:"<th>"})," carries ",e.jsx(n.code,{children:"aria-sort"}),`, and each change is
announced through a polite live region. Sorting cycles ascending → descending → unsorted.`]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"grouped-columns",children:"Grouped columns"}),`
`,e.jsxs(n.p,{children:["Nest ",e.jsx(n.code,{children:"columns"})," to get multi-level headers. Spanning headers get ",e.jsx(n.code,{children:'scope="colgroup"'}),` and the right
`,e.jsx(n.code,{children:"colSpan"})," automatically."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.p,{children:"With the primitives you write the spanning headers yourself:"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h2,{id:"row-group-sections",children:"Row-group sections"}),`
`,e.jsxs(n.p,{children:["Several ",e.jsx(n.code,{children:"<TableBody>"}),` blocks give you visual sections, each introduced by a spanning header. This
is markup-only — no collapsing or aggregation yet.`]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h2,{id:"style-variants",children:"Style variants"}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(n.h2,{id:"empty-state",children:"Empty state"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"empty-values",children:"Empty values"}),`
`,e.jsxs(n.p,{children:[`A cell whose value is missing renders empty. Whether to show a placeholder instead, and what it
says, is up to your app: "—", "Not provided" and "None on file" each fit different fields. Do it in
the column's `,e.jsx(n.code,{children:"cell"})," renderer, or in a helper your app's columns share:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type { DataTableColumnDef } from '@capitaltg/vero';

// A dash for sighted users, words for screen readers.
const EmptyValue = () => (
  <>
    <span aria-hidden="true">—</span>
    <span className="sr-only">No value</span>
  </>
);

// Only null, undefined and '' are empty: 0 and false are real values.
const orEmpty = (value: unknown) =>
  value == null || value === '' ? <EmptyValue /> : String(value);

const columns: DataTableColumnDef<Driver>[] = [
  { accessorKey: 'name', header: 'Name', meta: { isRowHeader: true } },
  { accessorKey: 'points', header: 'Points', cell: info => orEmpty(info.getValue()) },
  {
    accessorKey: 'altBirthDate',
    header: 'Alternate birth date',
    cell: info => orEmpty(info.getValue()),
  },
];
`})}),`
`,e.jsx(n.p,{children:"Two things to avoid:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A truthiness check"})," such as ",e.jsx(n.code,{children:"value ? value : <EmptyValue />"}),". It turns a real ",e.jsx(n.code,{children:"0"}),` into a
dash.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"aria-label"})," on a plain ",e.jsx(n.code,{children:"<span>"}),"."]}),` ARIA doesn't allow a name on an element with no role, so
screen readers may not announce it. Use visually hidden text, as above.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"coming-from-react-uswds",children:"Coming from react-uswds"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Table"})," is the direct counterpart of react-uswds's ",e.jsx(n.code,{children:"<Table>"}),` — the wrapper you compose your own
rows inside — so most markup ports across unchanged.`]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"react-uswds"}),e.jsx("th",{children:"Vero"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"bordered"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:'variant="bordered"'})," (the default) / ",e.jsx("code",{children:'variant="borderless"'})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"striped"})}),e.jsx("td",{children:e.jsx("code",{children:"striped"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"compact"})}),e.jsx("td",{children:e.jsx("code",{children:'density="compact"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"scrollable"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:'responsive="scroll"'})," — on by default, and only focusable when it overflows"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'stackedStyle="default"'})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:'responsive="stack"'}),", with ",e.jsx("code",{children:"label"}),` on each cell (
`,e.jsx("code",{children:"DataTable"})," fills it in)"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'stackedStyle="headers"'})}),e.jsx("td",{children:e.jsx("code",{children:'responsive="stack" stackedStyle="headers"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stickyHeader"})}),e.jsx("td",{children:e.jsx("code",{children:"stickyHeader"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"caption"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"caption"}),", or compose ",e.jsx("code",{children:"<TableCaption>"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"fullWidth"})}),e.jsx("td",{children:"Not needed — Vero's table is always full width"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"fixed"})}),e.jsx("td",{children:e.jsx("code",{children:'className="table-fixed"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Sorting (USWDS JS)"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"DataTable"})," with ",e.jsx("code",{children:"enableSorting"}),", powered by TanStack Table"]})})]})]})]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Every table has an accessible name — a ",e.jsx(n.code,{children:"<caption>"}),", ",e.jsx(n.code,{children:"captionHidden"}),", or ",e.jsx(n.code,{children:"aria-label"}),"."]}),`
`,e.jsxs(n.li,{children:["Column headers are ",e.jsx(n.code,{children:'<th scope="col">'}),", group headers ",e.jsx(n.code,{children:'scope="colgroup"'}),`, and the column marked
`,e.jsx(n.code,{children:"meta.isRowHeader"})," renders ",e.jsx(n.code,{children:'<th scope="row">'}),"."]}),`
`,e.jsxs(n.li,{children:["Sortable headers are buttons inside the ",e.jsx(n.code,{children:"<th>"}),"; the ",e.jsx(n.code,{children:"<th>"}),` carries
`,e.jsx(n.code,{children:'aria-sort="ascending | descending | none"'})," and changes are announced politely."]}),`
`,e.jsxs(n.li,{children:["The scroll container becomes ",e.jsx(n.code,{children:'role="region"'})," with ",e.jsx(n.code,{children:'tabindex="0"'}),` and a visible focus ring only
when it actually scrolls, so keyboard users can reach off-screen columns without a phantom tab
stop on tables that fit.`]}),`
`,e.jsx(n.li,{children:`Stacked mode labels every cell with its column header, so the data stays perceivable once the
header row is hidden.`}),`
`,e.jsxs(n.li,{children:["Every state above is covered by ",e.jsx(n.code,{children:"vitest-axe"}),`. Stacked mode trades table semantics for the card
layout by design — a manual screen-reader pass is still worth doing for your specific content.`]}),`
`]})]})}function z(d={}){const{wrapper:n}={...l(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(r,{...d})}):r(d)}export{z as default};
