import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as a}from"./index-DL7Mpk60.js";import{M as c,C as s,a as o}from"./index-CMjXWZPS.js";import{D as h,a as d,b as x,c as l,d as t,f as j}from"./DocsLayout-CEYntYd9.js";import{T as p,a as u,b,c as m}from"./Table--oTiZGJN.js";import{Scrollable as g,Stacked as f,StackedHeaders as y,StickyHeader as w,Sortable as T,ColumnGroups as v,Empty as k}from"./DataTable.stories-kIRNHkNp.js";import{T as S,D,P as C,S as H,C as R,R as A,a as W}from"./Table.stories-BJ8ALygS.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C7Tx3m9I.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./utils-DrFeXHBK.js";import"./createLucideIcon-BeEkWZrd.js";import"./x-DEnjg7Le.js";import"./check-C42IfL-F.js";import"./experimental-VNRjj4Pl.js";import"./styles-DnVuGKPq.js";import"./index-CBgW3S2s.js";import"./chevrons-up-down-CPJXHd7n.js";function i(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:S}),`
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
`,e.jsx(s,{of:D}),`
`,e.jsx(h,{}),`
`,e.jsxs(d,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a table and how to make it easy to read. Adapted from the"," ",e.jsx(n.a,{href:"https://designsystem.digital.gov/components/table/",children:"USWDS table guidance"}),"."]}),title:"Guidance",variant:"guidance",children:[e.jsxs(x,{children:[e.jsx(l,{kind:"use",children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"For data people compare across rows and columns"}),`, such as statistics, budgets or case
counts.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"For directories"}),`: lists of people, offices or resources where every item has the same
fields.`]}),`
`]})}),e.jsx(l,{kind:"avoid",children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Data that isn't tabular:"})," use a list, or a description list (",e.jsx(n.code,{children:"<dl>"}),`) for label and value
pairs.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Trends and relationships:"}),` a chart may show them more clearly. A table of the same data is
still a useful alternative to the chart.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Page layout:"})," don't use a table to lay out a page or a dashboard. Use CSS grid or flexbox."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Long text:"}),` keep cells short. Content that runs to paragraphs belongs under headings or in
an `,e.jsx(n.a,{href:"?path=/docs/data-display-accordion--docs",children:"Accordion"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Items with different fields:"})," use a list or cards."]}),`
`]})})]}),e.jsx(t,{id:"usability",children:"Usability guidance"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keep it plain."}),` The default bordered style is enough. Extra decoration makes data harder to
scan.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Always have a header row"}),`, with short labels that say what each column holds. When one
column identifies each row, such as a name, make it the row header (`,e.jsx(n.code,{children:"meta.isRowHeader"}),`, or
`,e.jsx(n.code,{children:'<TableHead scope="row">'}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keep each column consistent."}),` Use one unit and one format per column, so values compare
easily. Put the unit in the header, such as "Salary (USD)", rather than in every cell.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Right-align numbers"})," (",e.jsx(n.code,{children:"meta: { align: 'right' }"}),", or ",e.jsx(n.code,{children:"text-right"}),` on the primitives) so the
digits line up. For amounts, percentages and counts, add `,e.jsx(n.code,{children:"tabular-nums"}),` so every digit has the
same width. Phone numbers, ZIP codes and dates don't need either.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Say where the data comes from."}),` Put the source and the last-updated date in the caption,
especially for data that changes often.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Plan for small screens."}),` Any table with more than two columns needs a narrow-screen plan.
The default horizontal scroll suits numeric tables with many columns; `,e.jsx(n.code,{children:'responsive="stack"'}),`
suits directories and record-style data. See `,e.jsx(n.a,{href:"#responsive-behavior",children:"Responsive behavior"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use as few columns as you can."}),` People scan down a column more easily than across a row.
Drop columns people don't need, or swap rows and columns.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sort long tables"}),` when the order matters to people, such as alphabetical or by amount.
Don't count on sorting in a stacked table: the header row and its sort buttons are hidden while
the table is stacked.`]}),`
`]})]}),`
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
`,e.jsx(o,{of:C}),`
`,e.jsxs(n.p,{children:["Alongside ",e.jsx(n.code,{children:"caption"})," / ",e.jsx(n.code,{children:"captionHidden"}),", ",e.jsx(n.code,{children:"Table"}),` takes the styling and responsive props shared with
`,e.jsx(n.code,{children:"DataTable"}),": ",e.jsx(n.code,{children:"variant"})," (",e.jsx(n.code,{children:"bordered"})," | ",e.jsx(n.code,{children:"borderless"}),"), ",e.jsx(n.code,{children:"striped"}),", ",e.jsx(n.code,{children:"density"})," (",e.jsx(n.code,{children:"default"})," | ",e.jsx(n.code,{children:"compact"}),`),
`,e.jsx(n.code,{children:"stickyHeader"}),", ",e.jsx(n.code,{children:"responsive"})," (",e.jsx(n.code,{children:"scroll"})," | ",e.jsx(n.code,{children:"stack"})," | ",e.jsx(n.code,{children:"none"}),"), ",e.jsx(n.code,{children:"stackBreakpoint"})," (",e.jsx(n.code,{children:"sm"})," | ",e.jsx(n.code,{children:"md"})," | ",e.jsx(n.code,{children:"lg"}),`)
and `,e.jsx(n.code,{children:"stackedStyle"})," (",e.jsx(n.code,{children:"default"})," | ",e.jsx(n.code,{children:"headers"}),"). Everything else lands on the ",e.jsx(n.code,{children:"<table>"})," element."]}),`
`,e.jsxs(n.p,{children:["The children are thin wrappers over the native elements: ",e.jsx(n.code,{children:"TableCaption"})," (",e.jsx(n.code,{children:"<caption>"}),`, with
`,e.jsx(n.code,{children:"hidden"})," for a screen-reader-only caption), ",e.jsx(n.code,{children:"TableHeader"})," (",e.jsx(n.code,{children:"<thead>"}),"), ",e.jsx(n.code,{children:"TableBody"})," (",e.jsx(n.code,{children:"<tbody>"}),` —
use several for row-group sections), `,e.jsx(n.code,{children:"TableFooter"})," (",e.jsx(n.code,{children:"<tfoot>"}),"), ",e.jsx(n.code,{children:"TableRow"})," (",e.jsx(n.code,{children:"<tr>"}),"), ",e.jsx(n.code,{children:"TableHead"}),`
(`,e.jsx(n.code,{children:"<th>"}),", with ",e.jsx(n.code,{children:"scope"})," defaulting to ",e.jsx(n.code,{children:"col"}),") and ",e.jsx(n.code,{children:"TableCell"})," (",e.jsx(n.code,{children:"<td>"}),`). Both cell components accept a
`,e.jsx(n.code,{children:"label"}),", shown above the value while the table is stacked. The ",e.jsx(n.a,{href:"#api-reference",children:"API reference"}),` at
the end of this page lists the props of `,e.jsx(n.code,{children:"Table"}),", ",e.jsx(n.code,{children:"TableCaption"}),", ",e.jsx(n.code,{children:"TableHead"})," and ",e.jsx(n.code,{children:"TableCell"}),"."]}),`
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
`,e.jsx(s,{of:g}),`
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
`,e.jsx(s,{of:f}),`
`,e.jsxs(n.p,{children:["The label comes from each cell's ",e.jsx(n.code,{children:"label"})," prop. USWDS uses a ",e.jsx(n.code,{children:"data-label"}),` attribute drawn with
`,e.jsx(n.code,{children:"content: attr(data-label)"}),`; here it is a real element, so it can hold any React content, and it
is only rendered while the table is stacked.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DataTable"})," fills ",e.jsx(n.code,{children:"label"})," in from your column definitions (or ",e.jsx(n.code,{children:"meta.stackedLabel"}),`), so there is
nothing to wire up.`]}),`
`,e.jsxs(n.li,{children:["With the primitives, pass ",e.jsx(n.code,{children:"label"}),` on each body cell — usually its column header, or something
more specific when that reads better on a card.`]}),`
`]}),`
`,e.jsx(s,{of:H}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"stackBreakpoint"})}),e.jsx("th",{children:"Stacks below"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sm"})}),e.jsx("td",{children:"640px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"md"})," (default)"]})}),e.jsx("td",{children:"768px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"lg"})}),e.jsx("td",{children:"1024px"})]})]})]}),`
`,e.jsxs(n.p,{children:[`Two things to know before choosing this mode. Below the breakpoint the header row is hidden, so
cells lose their column headers and the per-cell labels carry the meaning (see
`,e.jsx(n.a,{href:"#accessibility-built-in",children:"Accessibility"}),`) — that also means sortable headers are only reachable at wider widths. It suits
record-style data; for wide numeric tables, `,e.jsx(n.code,{children:'responsive="scroll"'})," keeps the grid intact."]}),`
`,e.jsx(n.h3,{id:"cards-with-headings",children:"Cards with headings"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'stackedStyle="headers"'}),` promotes the first cell of each row to the card's heading instead of
labeling it like the rest — good when that first column identifies the record.`]}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(n.h3,{id:"sticky-header",children:"Sticky header"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"stickyHeader"}),` keeps the column headers visible while the rows scroll. The table needs a scrolling
ancestor for that: the page itself, or a height-constrained container. Pair it with
`,e.jsx(n.code,{children:'responsive="none"'}),` so the default horizontal scroll wrapper doesn't become a non-scrolling sticky
context. USWDS advises against combining it with scrollable or stacked variants.`]}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(n.h2,{id:"sorting",children:"Sorting"}),`
`,e.jsxs(n.p,{children:["Sortable headers render a real ",e.jsx(n.code,{children:"<button>"}),"; the ",e.jsx(n.code,{children:"<th>"})," carries ",e.jsx(n.code,{children:"aria-sort"}),`, and each change is
announced through a polite live region. Each click cycles through the two directions and back to
unsorted. Text columns start ascending; number columns start descending (TanStack's default).`]}),`
`,e.jsx(s,{of:T}),`
`,e.jsx(n.h2,{id:"grouped-columns",children:"Grouped columns"}),`
`,e.jsxs(n.p,{children:["Nest ",e.jsx(n.code,{children:"columns"})," to get multi-level headers. Spanning headers get ",e.jsx(n.code,{children:'scope="colgroup"'}),` and the right
`,e.jsx(n.code,{children:"colSpan"})," automatically."]}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(n.p,{children:"With the primitives you write the spanning headers yourself:"}),`
`,e.jsx(s,{of:R}),`
`,e.jsx(n.h2,{id:"row-group-sections",children:"Row-group sections"}),`
`,e.jsxs(n.p,{children:["Several ",e.jsx(n.code,{children:"<TableBody>"}),` blocks give you visual sections, each introduced by a spanning header. This
is markup-only — no collapsing or aggregation yet.`]}),`
`,e.jsx(s,{of:A}),`
`,e.jsx(n.h2,{id:"style-variants",children:"Style variants"}),`
`,e.jsx(s,{of:W}),`
`,e.jsx(n.h2,{id:"empty-state",children:"Empty state"}),`
`,e.jsx(s,{of:k}),`
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
`,e.jsxs(d,{id:"accessibility",intro:"What Table and DataTable handle for you and what you need to add.",title:"Accessibility",children:[e.jsx(t,{id:"built-in",children:"Built in"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"It's a native HTML table"}),`, so assistive technology gets table, row, header and cell roles,
and screen readers' table navigation works.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Headers are associated with their cells."})," ",e.jsx(n.code,{children:"TableHead"})," defaults to ",e.jsx(n.code,{children:'scope="col"'}),`. In
`,e.jsx(n.code,{children:"DataTable"}),", spanning group headers get ",e.jsx(n.code,{children:'scope="colgroup"'})," and the right ",e.jsx(n.code,{children:"colSpan"}),`, and the
column marked `,e.jsx(n.code,{children:"meta.isRowHeader"})," renders ",e.jsx(n.code,{children:'<th scope="row">'}),`. The empty corner cells that keep
grouped columns aligned are `,e.jsx(n.code,{children:"aria-hidden"})," cells, not empty headers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The caption names the table."})," ",e.jsx(n.code,{children:"caption"})," renders a ",e.jsx(n.code,{children:"<caption>"}),`, which is the table's
accessible name. `,e.jsx(n.code,{children:"captionHidden"}),` hides it visually but keeps it for screen readers. An
`,e.jsx(n.code,{children:"aria-label"})," or ",e.jsx(n.code,{children:"aria-labelledby"})," you pass goes on the ",e.jsx(n.code,{children:"<table>"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sortable headers are buttons"})," (",e.jsx(n.code,{children:"DataTable"})," with ",e.jsx(n.code,{children:"enableSorting"}),"). Each is a ",e.jsx(n.code,{children:"<button>"}),`
inside the `,e.jsx(n.code,{children:"<th>"}),`, named by the header text; the arrow icons are hidden from screen readers.
The `,e.jsx(n.code,{children:"<th>"})," carries ",e.jsx(n.code,{children:"aria-sort"})," (",e.jsx(n.code,{children:"ascending"}),", ",e.jsx(n.code,{children:"descending"})," or ",e.jsx(n.code,{children:"none"}),`), and each change is
announced through a polite live region, such as "Sorted by Role, ascending". The initial sort
isn't announced on load.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard:"})," Tab reaches each sort button, and Enter or Space changes the sort."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A scrolling table is reachable by keyboard."}),` When the table overflows its container, the
wrapper becomes a focusable `,e.jsx(n.code,{children:'role="region"'}),", named by your ",e.jsx(n.code,{children:"aria-label"}),` or a plain-text
`,e.jsx(n.code,{children:"caption"}),", and the arrow keys scroll it. A table that fits adds no tab stop."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus is visible"}),` on the sort buttons and the scroll region: a 3px ring outside a 3px white
gap, 3.2:1 against the gap. In forced colors (Windows High Contrast) the ring becomes a
system-colored outline.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Stacked tables keep their cell structure."}),` In Chromium, a stacked table is still a table
with rows and cells, but the header row is hidden, so cells have no column headers. Each cell's
label is part of its text instead, so a cell reads "Role Engineer". With
`,e.jsx(n.code,{children:'stackedStyle="headers"'}),`, the first cell of each card is read without a label. We checked this
in Chromium only; other browsers may expose stacked tables differently.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Contrast:"}),` text is 13.8:1 on the header and striped-row background and 16.5:1 on the page
background; the empty-state text is 5.1:1. Grid lines are 6.4:1 against the page, and the
faded icon on unsorted columns 3.1:1 against the header.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Forced colors:"}),` text, grid lines, sort icons and focus stay visible. Striping and header
shading are dropped, as expected in that mode.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Tested with ",e.jsx(n.code,{children:"vitest-axe"})]}),`: basic, grouped, row-group, style variant and stacked tables, and
`,e.jsx(n.code,{children:"DataTable"}),` with a caption, sorting, grouped columns, stacking, card headings and the empty
state.`]}),`
`]}),e.jsx(t,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Give every table a name."})," Prefer a visible ",e.jsx(n.code,{children:"caption"}),`. If a heading beside the table already
names it, pass `,e.jsx(n.code,{children:"captionHidden"}),", or use ",e.jsx(n.code,{children:"aria-labelledby"}),` pointing at the heading. If the
caption isn't plain text (JSX), also pass `,e.jsx(n.code,{children:"aria-label"}),`: otherwise a table that scrolls gets a
focusable wrapper with no name.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mark one row header per row"})," when a column identifies the row: ",e.jsx(n.code,{children:"meta.isRowHeader"}),` in
`,e.jsx(n.code,{children:"DataTable"}),", or ",e.jsx(n.code,{children:'<TableHead scope="row">'})," with the primitives."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"With the primitives, write the header scopes yourself."}),` Spanning column headers need
`,e.jsx(n.code,{children:'scope="colgroup"'})," and a ",e.jsx(n.code,{children:"colSpan"}),". Keep to two levels of headers; tables with more need ",e.jsx(n.code,{children:"id"}),`
on each header and `,e.jsx(n.code,{children:"headers"})," on each cell, which Vero doesn't add."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use plain-text headers on sortable columns."}),` When a header is JSX, the sort announcement
uses the column's id instead of its label
(`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues/209",rel:"nofollow",children:"#209"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Expect single-column sorting."}),` Holding Shift while sorting adds a second sort column, but
only the first is announced and both headers report a sort state
(`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues/208",rel:"nofollow",children:"#208"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label every cell when the table stacks."})," ",e.jsx(n.code,{children:"DataTable"}),` fills in labels from the headers.
With the primitives, pass `,e.jsx(n.code,{children:"label"}),` on each body cell. In a table with grouped columns, a card
shows only the leaf header, so set `,e.jsx(n.code,{children:"meta.stackedLabel"})," (or ",e.jsx(n.code,{children:"label"}),`) to include the group, such
as "Q1 revenue". Don't stack a table people need to sort.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Check a sticky header against your layout."}),` In our check, focused links in the rows
scrolled clear of the pinned header, but a fixed navbar or another sticky element on your page
can still cover focused content.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Name links and buttons in cells for their row."}),` Write "Edit Ada Lovelace", or add visually
hidden text, rather than a column of identical "Edit" links.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Show empty values in words for screen readers."}),` Use visually hidden text, as in
`,e.jsx(n.a,{href:"#empty-values",children:"Empty values"}),", not ",e.jsx(n.code,{children:"aria-label"})," on a ",e.jsx(n.code,{children:"<span>"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(n.a,{href:"https://designsystem.digital.gov/components/table/accessibility-tests/",rel:"nofollow",children:"USWDS table accessibility tests"}),`
on your own tables, including a screen reader pass, especially for stacked tables.`]}),`
`]}),e.jsxs(n.p,{children:[`For an accessibility review, see
`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+%28in%3Atitle+Table+OR+in%3Atitle+DataTable%29",rel:"nofollow",children:"all open accessibility issues for Table and DataTable"}),"."]})]}),`
`,e.jsx(d,{id:"api-reference",intro:e.jsxs(e.Fragment,{children:["The props declared in Vero's types for ",e.jsx(n.code,{children:"Table"})," and the parts that take props of their own. Standard HTML attributes aren't listed. ",e.jsx(n.code,{children:"TableHeader"}),","," ",e.jsx(n.code,{children:"TableBody"}),", ",e.jsx(n.code,{children:"TableFooter"})," and ",e.jsx(n.code,{children:"TableRow"})," take only standard HTML attributes, so they have no entry. ",e.jsx(n.code,{children:"DataTable"}),"'s props are in the table under"," ",e.jsx(n.code,{children:"DataTable"})," props above."]}),title:"API reference",children:e.jsx(j,{components:[p,u,b,m]})})]})}function ee(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{ee as default};
