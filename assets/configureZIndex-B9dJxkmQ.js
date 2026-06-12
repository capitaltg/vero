import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as i}from"./index-DL7Mpk60.js";import{M as o}from"./index-zUPq3N8Z.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CE_PrAnt.js";import"./index-KklXjS-Z.js";import"./index-CwPCC0ZT.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function r(d){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Utilities/Z-Index/configureZIndex"}),`
`,e.jsx(n.h1,{id:"configurezindex",children:"configureZIndex"}),`
`,e.jsx(n.p,{children:"Sets global z-index defaults for any or all overlay types. Call this once during app initialization, before any components render."}),`
`,e.jsxs(n.p,{children:["All overlay components in Vero (",e.jsx(n.code,{children:"Select"}),", ",e.jsx(n.code,{children:"Combobox"}),", ",e.jsx(n.code,{children:"Popover"}),", ",e.jsx(n.code,{children:"Tooltip"}),", ",e.jsx(n.code,{children:"Dialog"}),", ",e.jsx(n.code,{children:"DropdownButton"}),") use a shared z-index system configured through these functions."]}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"config"})}),e.jsx("td",{children:e.jsx("code",{children:"Partial<ZIndexConfig>"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["An object with any subset of the z-index keys (",e.jsx("code",{children:"popover"}),", ",e.jsx("code",{children:"tooltip"}),","," ",`
`,e.jsx("code",{children:"overlay"}),", ",e.jsx("code",{children:"dialog"}),", ",e.jsx("code",{children:"dropdown"}),") mapped to number values."]})})]})})]}),`
`,e.jsx(n.h2,{id:"default-values",children:"Default values"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Key"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"popover"})}),e.jsx("td",{children:e.jsx("code",{children:"50"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"tooltip"})}),e.jsx("td",{children:e.jsx("code",{children:"50"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"overlay"})}),e.jsx("td",{children:e.jsx("code",{children:"50"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dialog"})}),e.jsx("td",{children:e.jsx("code",{children:"50"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dropdown"})}),e.jsx("td",{children:e.jsx("code",{children:"50"})})]})]})]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { configureZIndex } from '@capitaltg/vero';

configureZIndex({
  popover: 1000,
  tooltip: 2000,
  dialog: 3000,
  dropdown: 1500,
});
`})})]})}function u(d={}){const{wrapper:n}={...i(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(r,{...d})}):r(d)}export{u as default};
