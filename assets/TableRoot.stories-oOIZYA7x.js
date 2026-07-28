import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{T as n,a as p,b as T,c as s,d as a,e as r,f as l}from"./TableRoot-aQZMiTfu.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styles-CafxXXJc.js";import"./utils-CU3My8Oi.js";import"./index-NE6MC3wq.js";const L=()=>e.jsxs(n,{"aria-label":"Regional sales by half",children:[e.jsx(p,{children:"Regional sales by half"}),e.jsxs(T,{children:[e.jsxs(s,{children:[e.jsx(a,{rowSpan:2,scope:"col",children:"Region"}),e.jsx(a,{className:"text-center",colSpan:2,scope:"colgroup",children:"First half"}),e.jsx(a,{className:"text-center",colSpan:2,scope:"colgroup",children:"Second half"})]}),e.jsxs(s,{children:[e.jsx(a,{className:"text-right",scope:"col",children:"Q1"}),e.jsx(a,{className:"text-right",scope:"col",children:"Q2"}),e.jsx(a,{className:"text-right",scope:"col",children:"Q3"}),e.jsx(a,{className:"text-right",scope:"col",children:"Q4"})]})]}),e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"North"}),e.jsx(l,{className:"text-right",children:"$120k"}),e.jsx(l,{className:"text-right",children:"$140k"}),e.jsx(l,{className:"text-right",children:"$132k"}),e.jsx(l,{className:"text-right",children:"$158k"})]}),e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"South"}),e.jsx(l,{className:"text-right",children:"$98k"}),e.jsx(l,{className:"text-right",children:"$112k"}),e.jsx(l,{className:"text-right",children:"$105k"}),e.jsx(l,{className:"text-right",children:"$121k"})]})]})]});L.__docgenInfo={description:'Multi-level column headers. Group headers span their child columns with\n`colSpan` and use `scope="colgroup"`; the leaf headers use `scope="col"`.',methods:[],displayName:"TableRootColumnGroups"};const U=`import {
  TableRoot,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../src/TableRoot';

/**
 * Multi-level column headers. Group headers span their child columns with
 * \`colSpan\` and use \`scope="colgroup"\`; the leaf headers use \`scope="col"\`.
 */
export const TableRootColumnGroups = () => (
  <TableRoot aria-label="Regional sales by half">
    <TableCaption>Regional sales by half</TableCaption>
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
  </TableRoot>
);
`,D=()=>e.jsxs(n,{"aria-label":"Quarterly revenue",children:[e.jsx(p,{children:"Quarterly revenue"}),e.jsx(T,{children:e.jsxs(s,{children:[e.jsx(a,{scope:"col",children:"Quarter"}),e.jsx(a,{className:"text-right",scope:"col",children:"Revenue"}),e.jsx(a,{className:"text-right",scope:"col",children:"Change"})]})}),e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Q1"}),e.jsx(l,{className:"text-right",children:"$1.2M"}),e.jsx(l,{className:"text-right",children:"+4%"})]}),e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Q2"}),e.jsx(l,{className:"text-right",children:"$1.4M"}),e.jsx(l,{className:"text-right",children:"+17%"})]}),e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Q3"}),e.jsx(l,{className:"text-right",children:"$1.3M"}),e.jsx(l,{className:"text-right",children:"−7%"})]})]})]});D.__docgenInfo={description:'A small, static table composed from the primitives — no `data`/`columns`\nconfig needed. Note `scope="col"` on the column headers and `scope="row"` on\nthe first cell of each body row.',methods:[],displayName:"TableRootBasic"};const W=`import {
  TableRoot,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../src/TableRoot';

/**
 * A small, static table composed from the primitives — no \`data\`/\`columns\`
 * config needed. Note \`scope="col"\` on the column headers and \`scope="row"\` on
 * the first cell of each body row.
 */
export const TableRootBasic = () => (
  <TableRoot aria-label="Quarterly revenue">
    <TableCaption>Quarterly revenue</TableCaption>
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
  </TableRoot>
);
`,I=()=>e.jsxs(n,{"aria-label":"Employees by department",children:[e.jsx(p,{children:"Employees by department"}),e.jsx(T,{children:e.jsxs(s,{children:[e.jsx(a,{scope:"col",children:"Name"}),e.jsx(a,{scope:"col",children:"Role"}),e.jsx(a,{scope:"col",children:"Location"})]})}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(a,{className:"bg-muted",colSpan:3,scope:"colgroup",children:"Engineering"})}),e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Ada Lovelace"}),e.jsx(l,{children:"Engineer"}),e.jsx(l,{children:"London"})]}),e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Grace Hopper"}),e.jsx(l,{children:"Engineer"}),e.jsx(l,{children:"New York"})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(a,{className:"bg-muted",colSpan:3,scope:"colgroup",children:"Research"})}),e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Alan Turing"}),e.jsx(l,{children:"Researcher"}),e.jsx(l,{children:"Manchester"})]})]})]});I.__docgenInfo={description:'Visual row-group sections. Each `<TableBody>` is a section introduced by a\nspanning group header (`scope="colgroup"`). Static grouping — no collapsing\nor aggregation (those are planned for a later phase).',methods:[],displayName:"TableRootRowGroups"};const z=`import {
  TableRoot,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../src/TableRoot';

/**
 * Visual row-group sections. Each \`<TableBody>\` is a section introduced by a
 * spanning group header (\`scope="colgroup"\`). Static grouping — no collapsing
 * or aggregation (those are planned for a later phase).
 */
export const TableRootRowGroups = () => (
  <TableRoot aria-label="Employees by department">
    <TableCaption>Employees by department</TableCaption>
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
  </TableRoot>
);
`,J=[{fruit:"Apples",qty:12,price:"$0.50"},{fruit:"Bananas",qty:8,price:"$0.25"},{fruit:"Cherries",qty:30,price:"$0.10"}],m=({label:o,...O})=>e.jsxs(n,{"aria-label":o,responsive:"none",...O,children:[e.jsx(p,{children:o}),e.jsx(T,{children:e.jsxs(s,{children:[e.jsx(a,{scope:"col",children:"Fruit"}),e.jsx(a,{className:"text-right",scope:"col",children:"Qty"}),e.jsx(a,{className:"text-right",scope:"col",children:"Price"})]})}),e.jsx(r,{children:J.map(h=>e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:h.fruit}),e.jsx(l,{className:"text-right",children:h.qty}),e.jsx(l,{className:"text-right",children:h.price})]},h.fruit))})]}),Y=()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(m,{label:"Bordered (default)"}),e.jsx(m,{striped:!0,label:"Striped"}),e.jsx(m,{label:"Borderless",variant:"borderless"}),e.jsx(m,{density:"compact",label:"Compact"})]});Y.__docgenInfo={description:"The `variant`, `striped`, and `density` style options.",methods:[],displayName:"TableRootStyleVariants"};const K=`import {
  TableRoot,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../src/TableRoot';
import type { TableRootProps } from '../types';

const rows = [
  { fruit: 'Apples', qty: 12, price: '$0.50' },
  { fruit: 'Bananas', qty: 8, price: '$0.25' },
  { fruit: 'Cherries', qty: 30, price: '$0.10' },
];

const Sample = ({ label, ...props }: { label: string } & TableRootProps) => (
  <TableRoot aria-label={label} responsive="none" {...props}>
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
  </TableRoot>
);

/** The \`variant\`, \`striped\`, and \`density\` style options. */
export const TableRootStyleVariants = () => (
  <div className="flex flex-col gap-8">
    <Sample label="Bordered (default)" />
    <Sample striped label="Striped" />
    <Sample label="Borderless" variant="borderless" />
    <Sample density="compact" label="Compact" />
  </div>
);
`,re={title:"Data & Display/Table/Primitives",component:n,tags:["!dev"],parameters:{docs:{description:{component:"Accessible, USWDS-styled table primitives. Compose `TableRoot`, `TableCaption`, `TableHeader`, `TableBody`, `TableFooter`, `TableRow`, `TableHead`, and `TableCell` directly for small or bespoke tables. For data-driven tables, see `Table`, which renders through these same primitives."}}},argTypes:{variant:{control:"radio",options:["bordered","borderless"],description:"Grid line style."},striped:{control:"boolean",description:"Alternate row background."},density:{control:"radio",options:["default","compact"],description:"Cell padding density."},responsive:{control:"radio",options:["scroll","stack","none"],description:"How the table adapts to narrow viewports."}}},x=o=>({controls:{disable:!0},docs:{source:{code:o,language:"tsx"}}}),t={args:{variant:"bordered",striped:!1,density:"default",responsive:"none"},render:o=>e.jsxs(n,{...o,"aria-label":"Fruit inventory",children:[e.jsx(p,{children:"Fruit inventory"}),e.jsx(T,{children:e.jsxs(s,{children:[e.jsx(a,{scope:"col",children:"Fruit"}),e.jsx(a,{className:"text-right",scope:"col",children:"Qty"}),e.jsx(a,{className:"text-right",scope:"col",children:"Price"})]})}),e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Apples"}),e.jsx(l,{className:"text-right",children:"12"}),e.jsx(l,{className:"text-right",children:"$0.50"})]}),e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Bananas"}),e.jsx(l,{className:"text-right",children:"8"}),e.jsx(l,{className:"text-right",children:"$0.25"})]}),e.jsxs(s,{children:[e.jsx(a,{scope:"row",children:"Cherries"}),e.jsx(l,{className:"text-right",children:"30"}),e.jsx(l,{className:"text-right",children:"$0.10"})]})]})]})},c={render:()=>e.jsx(D,{}),parameters:x(W)},i={render:()=>e.jsx(L,{}),parameters:x(U)},d={render:()=>e.jsx(I,{}),parameters:x(z)},b={render:()=>e.jsx(Y,{}),parameters:x(K)};var u,g,j,w,R;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'bordered',
    striped: false,
    density: 'default',
    responsive: 'none'
  },
  render: args => <TableRoot {...args} aria-label="Fruit inventory">
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
    </TableRoot>
}`,...(j=(g=t.parameters)==null?void 0:g.docs)==null?void 0:j.source},description:{story:"Interactive example — change `variant`, `striped`, `density`, and\n`responsive` in the Controls panel to see them applied live.",...(R=(w=t.parameters)==null?void 0:w.docs)==null?void 0:R.description}}};var y,C,H,N,f;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <TableRootBasic />,
  parameters: withSource(sourcePrimitive)
}`,...(H=(C=c.parameters)==null?void 0:C.docs)==null?void 0:H.source},description:{story:'A basic table composed from the primitives, with a `<caption>`, column\nheaders (`scope="col"`), and a row header per row (`scope="row"`).',...(f=(N=c.parameters)==null?void 0:N.docs)==null?void 0:f.description}}};var S,v,$,B,Q;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <TableRootColumnGroups />,
  parameters: withSource(sourceColumnGroups)
}`,...($=(v=i.parameters)==null?void 0:v.docs)==null?void 0:$.source},description:{story:'Multi-level column headers using `colSpan` + `scope="colgroup"` for the group\nheaders and `scope="col"` for the leaf headers.',...(Q=(B=i.parameters)==null?void 0:B.docs)==null?void 0:Q.description}}};var k,G,E,A,F;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <TableRootRowGroups />,
  parameters: withSource(sourceRowGroups)
}`,...(E=(G=d.parameters)==null?void 0:G.docs)==null?void 0:E.source},description:{story:"Visual row-group sections: multiple `<TableBody>` blocks, each introduced by\na spanning group header.",...(F=(A=d.parameters)==null?void 0:A.docs)==null?void 0:F.description}}};var M,P,V,_,q;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <TableRootStyleVariants />,
  parameters: withSource(sourceStyleVariants)
}`,...(V=(P=b.parameters)==null?void 0:P.docs)==null?void 0:V.source},description:{story:"The `variant` (bordered / borderless), `striped`, and `density` style\noptions.",...(q=(_=b.parameters)==null?void 0:_.docs)==null?void 0:q.description}}};const ne=["Playground","Default","ColumnGroups","RowGroupSections","StyleVariants"];export{i as ColumnGroups,c as Default,t as Playground,d as RowGroupSections,b as StyleVariants,ne as __namedExportsOrder,re as default};
