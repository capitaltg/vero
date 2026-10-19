import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{T as o,a as h,b as s,c as a,d as r,e as l,f as W}from"./Table-Bls2z3sO.js";const Y=()=>e.jsxs(o,{caption:"Regional sales by half",children:[e.jsxs(h,{children:[e.jsxs(s,{children:[e.jsx(a,{rowSpan:2,scope:"col",children:"Region"}),e.jsx(a,{className:"text-center",colSpan:2,scope:"colgroup",children:"First half"}),e.jsx(a,{className:"text-center",colSpan:2,scope:"colgroup",children:"Second half"})]}),e.jsxs(s,{children:[e.jsx(a,{className:"text-right",scope:"col",children:"Q1"}),e.jsx(a,{className:"text-right",scope:"col",children:"Q2"}),e.jsx(a,{className:"text-right",scope:"col",children:"Q3"}),e.jsx(a,{className:"text-right",scope:"col",children:"Q4"})]})]}),e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"North"}),e.jsx(l,{className:"text-right",children:"$120k"}),e.jsx(l,{className:"text-right",children:"$140k"}),e.jsx(l,{className:"text-right",children:"$132k"}),e.jsx(l,{className:"text-right",children:"$158k"})]}),e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"South"}),e.jsx(l,{className:"text-right",children:"$98k"}),e.jsx(l,{className:"text-right",children:"$112k"}),e.jsx(l,{className:"text-right",children:"$105k"}),e.jsx(l,{className:"text-right",children:"$121k"})]})]})]});Y.__docgenInfo={description:'Multi-level column headers. Group headers span their child columns with\n`colSpan` and use `scope="colgroup"`; the leaf headers use `scope="col"`.',methods:[],displayName:"TableColumnGroups"};const ee=`import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../src/Table';

/**
 * Multi-level column headers. Group headers span their child columns with
 * \`colSpan\` and use \`scope="colgroup"\`; the leaf headers use \`scope="col"\`.
 */
export const TableColumnGroups = () => (
  <Table caption="Regional sales by half">
    <TableHeader>
      <TableRow>
        <TableHead rowSpan={2} scope="col">
          Region
        </TableHead>
        <TableHead className="text-center" colSpan={2} scope="colgroup">
          First half
        </TableHead>
        <TableHead className="text-center" colSpan={2} scope="colgroup">
          Second half
        </TableHead>
      </TableRow>
      <TableRow>
        <TableHead className="text-right" scope="col">
          Q1
        </TableHead>
        <TableHead className="text-right" scope="col">
          Q2
        </TableHead>
        <TableHead className="text-right" scope="col">
          Q3
        </TableHead>
        <TableHead className="text-right" scope="col">
          Q4
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableHead scope="row">North</TableHead>
        <TableCell className="text-right">$120k</TableCell>
        <TableCell className="text-right">$140k</TableCell>
        <TableCell className="text-right">$132k</TableCell>
        <TableCell className="text-right">$158k</TableCell>
      </TableRow>
      <TableRow>
        <TableHead scope="row">South</TableHead>
        <TableCell className="text-right">$98k</TableCell>
        <TableCell className="text-right">$112k</TableCell>
        <TableCell className="text-right">$105k</TableCell>
        <TableCell className="text-right">$121k</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
`,z=()=>e.jsxs(o,{caption:"Quarterly revenue",children:[e.jsx(h,{children:e.jsxs(s,{children:[e.jsx(a,{scope:"col",children:"Quarter"}),e.jsx(a,{className:"text-right",scope:"col",children:"Revenue"}),e.jsx(a,{className:"text-right",scope:"col",children:"Change"})]})}),e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Q1"}),e.jsx(l,{className:"text-right",children:"$1.2M"}),e.jsx(l,{className:"text-right",children:"+4%"})]}),e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Q2"}),e.jsx(l,{className:"text-right",children:"$1.4M"}),e.jsx(l,{className:"text-right",children:"+17%"})]}),e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Q3"}),e.jsx(l,{className:"text-right",children:"$1.3M"}),e.jsx(l,{className:"text-right",children:"−7%"})]})]})]});z.__docgenInfo={description:'A small, static table composed from the primitives — no `data`/`columns`\nconfig needed. Note `scope="col"` on the column headers and `scope="row"` on\nthe first cell of each body row.',methods:[],displayName:"TableBasic"};const ae=`import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../src/Table';

/**
 * A small, static table composed from the primitives — no \`data\`/\`columns\`
 * config needed. Note \`scope="col"\` on the column headers and \`scope="row"\` on
 * the first cell of each body row.
 */
export const TableBasic = () => (
  <Table caption="Quarterly revenue">
    <TableHeader>
      <TableRow>
        <TableHead scope="col">Quarter</TableHead>
        <TableHead className="text-right" scope="col">
          Revenue
        </TableHead>
        <TableHead className="text-right" scope="col">
          Change
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableHead scope="row">Q1</TableHead>
        <TableCell className="text-right">$1.2M</TableCell>
        <TableCell className="text-right">+4%</TableCell>
      </TableRow>
      <TableRow>
        <TableHead scope="row">Q2</TableHead>
        <TableCell className="text-right">$1.4M</TableCell>
        <TableCell className="text-right">+17%</TableCell>
      </TableRow>
      <TableRow>
        <TableHead scope="row">Q3</TableHead>
        <TableCell className="text-right">$1.3M</TableCell>
        <TableCell className="text-right">−7%</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
`,J=()=>e.jsxs(o,{caption:"Employees by department",children:[e.jsx(h,{children:e.jsxs(s,{children:[e.jsx(a,{scope:"col",children:"Name"}),e.jsx(a,{scope:"col",children:"Role"}),e.jsx(a,{scope:"col",children:"Location"})]})}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(a,{className:"bg-muted",colSpan:3,scope:"colgroup",children:"Engineering"})}),e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Ada Lovelace"}),e.jsx(l,{children:"Engineer"}),e.jsx(l,{children:"London"})]}),e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Grace Hopper"}),e.jsx(l,{children:"Engineer"}),e.jsx(l,{children:"New York"})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(a,{className:"bg-muted",colSpan:3,scope:"colgroup",children:"Research"})}),e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Alan Turing"}),e.jsx(l,{children:"Researcher"}),e.jsx(l,{children:"Manchester"})]})]})]});J.__docgenInfo={description:'Visual row-group sections. Each `<TableBody>` is a section introduced by a\nspanning group header (`scope="colgroup"`). Static grouping — no collapsing\nor aggregation (those are planned for a later phase).',methods:[],displayName:"TableRowGroups"};const le=`import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../src/Table';

/**
 * Visual row-group sections. Each \`<TableBody>\` is a section introduced by a
 * spanning group header (\`scope="colgroup"\`). Static grouping — no collapsing
 * or aggregation (those are planned for a later phase).
 */
export const TableRowGroups = () => (
  <Table caption="Employees by department">
    <TableHeader>
      <TableRow>
        <TableHead scope="col">Name</TableHead>
        <TableHead scope="col">Role</TableHead>
        <TableHead scope="col">Location</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableHead className="bg-muted" colSpan={3} scope="colgroup">
          Engineering
        </TableHead>
      </TableRow>
      <TableRow>
        <TableHead scope="row">Ada Lovelace</TableHead>
        <TableCell>Engineer</TableCell>
        <TableCell>London</TableCell>
      </TableRow>
      <TableRow>
        <TableHead scope="row">Grace Hopper</TableHead>
        <TableCell>Engineer</TableCell>
        <TableCell>New York</TableCell>
      </TableRow>
    </TableBody>
    <TableBody>
      <TableRow>
        <TableHead className="bg-muted" colSpan={3} scope="colgroup">
          Research
        </TableHead>
      </TableRow>
      <TableRow>
        <TableHead scope="row">Alan Turing</TableHead>
        <TableCell>Researcher</TableCell>
        <TableCell>Manchester</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
`,K=()=>e.jsxs(o,{caption:"Quarterly revenue",responsive:"stack",children:[e.jsx(h,{children:e.jsxs(s,{children:[e.jsx(a,{scope:"col",children:"Quarter"}),e.jsx(a,{className:"text-right",scope:"col",children:"Revenue"}),e.jsx(a,{className:"text-right",scope:"col",children:"Change"})]})}),e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(a,{label:"Quarter",scope:"row",children:"Q1"}),e.jsx(l,{className:"text-right",label:"Revenue",children:"$1.2M"}),e.jsx(l,{className:"text-right",label:"Change vs. Q4",children:"+4%"})]}),e.jsxs(s,{children:[e.jsx(a,{label:"Quarter",scope:"row",children:"Q2"}),e.jsx(l,{className:"text-right",label:"Revenue",children:"$1.4M"}),e.jsx(l,{className:"text-right",label:"Change vs. Q1",children:"+17%"})]}),e.jsxs(s,{children:[e.jsx(a,{label:"Quarter",scope:"row",children:"Q3"}),e.jsx(l,{className:"text-right",label:"Revenue",children:"$1.3M"}),e.jsx(l,{className:"text-right",label:"Change vs. Q2",children:"−7%"})]})]})]});K.__docgenInfo={description:'Stacked (card) mode with the primitives. Below the breakpoint each row\nbecomes a card, and each body cell shows its `label` above its value — pass\nthe column header, or anything more specific (see the "Change" column).\n`DataTable` fills the labels in from its column definitions for you.',methods:[],displayName:"TableStacked"};const se=`import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../src/Table';

/**
 * Stacked (card) mode with the primitives. Below the breakpoint each row
 * becomes a card, and each body cell shows its \`label\` above its value — pass
 * the column header, or anything more specific (see the "Change" column).
 * \`DataTable\` fills the labels in from its column definitions for you.
 */
export const TableStacked = () => (
  <Table caption="Quarterly revenue" responsive="stack">
    <TableHeader>
      <TableRow>
        <TableHead scope="col">Quarter</TableHead>
        <TableHead className="text-right" scope="col">
          Revenue
        </TableHead>
        <TableHead className="text-right" scope="col">
          Change
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableHead label="Quarter" scope="row">
          Q1
        </TableHead>
        <TableCell className="text-right" label="Revenue">
          $1.2M
        </TableCell>
        <TableCell className="text-right" label="Change vs. Q4">
          +4%
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHead label="Quarter" scope="row">
          Q2
        </TableHead>
        <TableCell className="text-right" label="Revenue">
          $1.4M
        </TableCell>
        <TableCell className="text-right" label="Change vs. Q1">
          +17%
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHead label="Quarter" scope="row">
          Q3
        </TableHead>
        <TableCell className="text-right" label="Revenue">
          $1.3M
        </TableCell>
        <TableCell className="text-right" label="Change vs. Q2">
          −7%
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
`,re=[{fruit:"Apples",qty:12,price:"$0.50"},{fruit:"Bananas",qty:8,price:"$0.25"},{fruit:"Cherries",qty:30,price:"$0.10"}],x=({label:n,...Z})=>e.jsxs(o,{"aria-label":n,responsive:"none",...Z,children:[e.jsx(W,{children:n}),e.jsx(h,{children:e.jsxs(s,{children:[e.jsx(a,{scope:"col",children:"Fruit"}),e.jsx(a,{className:"text-right",scope:"col",children:"Qty"}),e.jsx(a,{className:"text-right",scope:"col",children:"Price"})]})}),e.jsx(r,{children:re.map(m=>e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:m.fruit}),e.jsx(l,{className:"text-right",children:m.qty}),e.jsx(l,{className:"text-right",children:m.price})]},m.fruit))})]}),X=()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(x,{label:"Bordered (default)"}),e.jsx(x,{striped:!0,label:"Striped"}),e.jsx(x,{label:"Borderless",variant:"borderless"}),e.jsx(x,{density:"compact",label:"Compact"})]});X.__docgenInfo={description:"The `variant`, `striped`, and `density` style options.",methods:[],displayName:"TableStyleVariants"};const oe=`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../src/Table';
import type { TableProps } from '../types';

const rows = [
  { fruit: 'Apples', qty: 12, price: '$0.50' },
  { fruit: 'Bananas', qty: 8, price: '$0.25' },
  { fruit: 'Cherries', qty: 30, price: '$0.10' },
];

const Sample = ({ label, ...props }: { label: string } & TableProps) => (
  <Table aria-label={label} responsive="none" {...props}>
    <TableCaption>{label}</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead scope="col">Fruit</TableHead>
        <TableHead className="text-right" scope="col">
          Qty
        </TableHead>
        <TableHead className="text-right" scope="col">
          Price
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {rows.map(row => (
        <TableRow key={row.fruit}>
          <TableHead scope="row">{row.fruit}</TableHead>
          <TableCell className="text-right">{row.qty}</TableCell>
          <TableCell className="text-right">{row.price}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

/** The \`variant\`, \`striped\`, and \`density\` style options. */
export const TableStyleVariants = () => (
  <div className="flex flex-col gap-8">
    <Sample label="Bordered (default)" />
    <Sample striped label="Striped" />
    <Sample label="Borderless" variant="borderless" />
    <Sample density="compact" label="Compact" />
  </div>
);
`,ne={title:"Data & Display/Table (Experimental)",component:o,parameters:{docs:{description:{component:"⚠️ **Experimental** — exported for early feedback. The API may change, or these components may be removed, without a major version bump. Not yet recommended for production use; see the [Table plan](https://github.com/capitaltg/vero/blob/main/src/components/Table/PLAN.md) for status.\n\nAccessible, USWDS-styled table primitives. Compose `Table` with `TableCaption`, `TableHeader`, `TableBody`, `TableFooter`, `TableRow`, `TableHead`, and `TableCell` for small or bespoke tables. For data-driven tables, see `DataTable`, which renders through these same primitives."}}},argTypes:{variant:{control:"radio",options:["bordered","borderless"],description:"Grid line style."},striped:{control:"boolean",description:"Alternate row background."},density:{control:"radio",options:["default","compact"],description:"Cell padding density."},responsive:{control:"radio",options:["scroll","stack","none"],description:"How the table adapts to narrow viewports."},stackBreakpoint:{control:"radio",options:["sm","md","lg"],description:"Breakpoint below which a stacked table becomes cards."},stackedStyle:{control:"radio",options:["default","headers"],description:"How each card is presented when stacked."},stickyHeader:{control:"boolean",description:"Pin the header row while the body scrolls."}}},T=n=>({controls:{disable:!0},docs:{source:{code:n,language:"tsx"}}}),t={args:{variant:"bordered",striped:!1,density:"default",responsive:"none"},render:n=>e.jsxs(o,{...n,"aria-label":"Fruit inventory",children:[e.jsx(W,{children:"Fruit inventory"}),e.jsx(h,{children:e.jsxs(s,{children:[e.jsx(a,{scope:"col",children:"Fruit"}),e.jsx(a,{className:"text-right",scope:"col",children:"Qty"}),e.jsx(a,{className:"text-right",scope:"col",children:"Price"})]})}),e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Apples"}),e.jsx(l,{className:"text-right",children:"12"}),e.jsx(l,{className:"text-right",children:"$0.50"})]}),e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Bananas"}),e.jsx(l,{className:"text-right",children:"8"}),e.jsx(l,{className:"text-right",children:"$0.25"})]}),e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Cherries"}),e.jsx(l,{className:"text-right",children:"30"}),e.jsx(l,{className:"text-right",children:"$0.10"})]})]})]})},c={render:()=>e.jsx(z,{}),parameters:T(ae)},i={render:()=>e.jsx(Y,{}),parameters:T(ee)},d={render:()=>e.jsx(J,{}),parameters:T(le)},b={render:()=>e.jsx(X,{}),parameters:T(oe)},p={render:()=>e.jsx(K,{}),parameters:{...T(se),viewport:{defaultViewport:"mobile2"}}};var u,g,w,j,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'bordered',
    striped: false,
    density: 'default',
    responsive: 'none'
  },
  render: args => <Table {...args} aria-label="Fruit inventory">
      <TableCaption>Fruit inventory</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead scope="col">Fruit</TableHead>
          <TableHead className="text-right" scope="col">
            Qty
          </TableHead>
          <TableHead className="text-right" scope="col">
            Price
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableHead scope="row">Apples</TableHead>
          <TableCell className="text-right">12</TableCell>
          <TableCell className="text-right">$0.50</TableCell>
        </TableRow>
        <TableRow>
          <TableHead scope="row">Bananas</TableHead>
          <TableCell className="text-right">8</TableCell>
          <TableCell className="text-right">$0.25</TableCell>
        </TableRow>
        <TableRow>
          <TableHead scope="row">Cherries</TableHead>
          <TableCell className="text-right">30</TableCell>
          <TableCell className="text-right">$0.10</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(w=(g=t.parameters)==null?void 0:g.docs)==null?void 0:w.source},description:{story:"Interactive example — change `variant`, `striped`, `density`, and\n`responsive` in the Controls panel to see them applied live.",...(y=(j=t.parameters)==null?void 0:j.docs)==null?void 0:y.description}}};var C,H,N,R,f;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <TableBasic />,
  parameters: withSource(sourcePrimitive)
}`,...(N=(H=c.parameters)==null?void 0:H.docs)==null?void 0:N.source},description:{story:'A basic table composed from the primitives, with a `<caption>`, column\nheaders (`scope="col"`), and a row header per row (`scope="row"`).',...(f=(R=c.parameters)==null?void 0:R.docs)==null?void 0:f.description}}};var v,S,k,Q,B;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <TableColumnGroups />,
  parameters: withSource(sourceColumnGroups)
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source},description:{story:'Multi-level column headers using `colSpan` + `scope="colgroup"` for the group\nheaders and `scope="col"` for the leaf headers.',...(B=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:B.description}}};var $,G,M,A,_;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <TableRowGroups />,
  parameters: withSource(sourceRowGroups)
}`,...(M=(G=d.parameters)==null?void 0:G.docs)==null?void 0:M.source},description:{story:"Visual row-group sections: multiple `<TableBody>` blocks, each introduced by\na spanning group header.",...(_=(A=d.parameters)==null?void 0:A.docs)==null?void 0:_.description}}};var P,E,V,F,D;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <TableStyleVariants />,
  parameters: withSource(sourceStyleVariants)
}`,...(V=(E=b.parameters)==null?void 0:E.docs)==null?void 0:V.source},description:{story:"The `variant` (bordered / borderless), `striped`, and `density` style\noptions.",...(D=(F=b.parameters)==null?void 0:F.docs)==null?void 0:D.description}}};var q,I,L,O,U;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <TableStacked />,
  parameters: {
    ...withSource(sourceStacked),
    viewport: {
      defaultViewport: 'mobile2'
    }
  }
}`,...(L=(I=p.parameters)==null?void 0:I.docs)==null?void 0:L.source},description:{story:'Stacked (card) mode with the primitives — the USWDS `usa-table--stacked`\nvariant. Set `responsive="stack"` and give each body cell a `label` (usually\nits column header); below the breakpoint each row becomes a card with the\nlabel above every value. Add `stackedStyle="headers"` to promote each row\'s\nfirst cell to the card\'s heading.',...(U=(O=p.parameters)==null?void 0:O.docs)==null?void 0:U.description}}};const te=["Playground","Default","ColumnGroups","RowGroupSections","StyleVariants","Stacked"],de=Object.freeze(Object.defineProperty({__proto__:null,ColumnGroups:i,Default:c,Playground:t,RowGroupSections:d,Stacked:p,StyleVariants:b,__namedExportsOrder:te,default:ne},Symbol.toStringTag,{value:"Module"}));export{i as C,c as D,t as P,d as R,p as S,de as T,b as a};
