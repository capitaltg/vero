import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as s}from"./index-DL7Mpk60.js";import{M as t}from"./index-zUPq3N8Z.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CE_PrAnt.js";import"./index-KklXjS-Z.js";import"./index-CwPCC0ZT.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function o(n){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Utilities/Hooks/useFormGroupLayout"}),`
`,e.jsx(r.h1,{id:"useformgrouplayout",children:"useFormGroupLayout"}),`
`,e.jsxs(r.p,{children:["Returns a ",e.jsx(r.code,{children:"className"})," string for form group containers. Used internally by ",e.jsx(r.code,{children:"CheckboxGroup"}),", ",e.jsx(r.code,{children:"RadioGroup"}),", and ",e.jsx(r.code,{children:"SwitchGroup"})," — available for consumers building custom group components."]}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"variant"})}),e.jsx("td",{children:e.jsx("code",{children:"'default' | 'tile' | 'button'"})}),e.jsx("td",{children:e.jsx("code",{children:"'default'"})}),e.jsx("td",{children:e.jsxs(r.p,{children:["Controls the layout style. ",e.jsx("code",{children:"default"})," and ",e.jsx("code",{children:"tile"})," use a grid;"," ",`
`,e.jsx("code",{children:"button"})," produces a flush button group."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"orientation"})}),e.jsx("td",{children:e.jsx("code",{children:"'horizontal' | 'vertical'"})}),e.jsx("td",{children:e.jsx("code",{children:"'vertical'"})}),e.jsx("td",{children:e.jsxs(r.p,{children:[e.jsx("code",{children:"horizontal"})," produces a flex row; ",e.jsx("code",{children:"vertical"}),` uses a responsive column
grid.`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"columns"})}),e.jsx("td",{children:e.jsx("code",{children:"1 | 2 | 3 | 4"})}),e.jsx("td",{children:e.jsx("code",{children:"2"})}),e.jsx("td",{children:e.jsxs(r.p,{children:["Number of columns for vertical grid layouts. Ignored when ",e.jsx("code",{children:"orientation"})," is"," ",`
`,e.jsx("code",{children:"'horizontal'"}),"."]})})]})]})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { useFormGroupLayout } from '@capitaltg/vero';

function MyOptionGroup({ orientation = 'vertical', columns = 1, children }) {
  const layoutClasses = useFormGroupLayout({ orientation, columns });
  return <div className={layoutClasses}>{children}</div>;
}
`})})]})}function m(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}export{m as default};
