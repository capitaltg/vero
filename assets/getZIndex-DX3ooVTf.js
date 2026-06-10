import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as t}from"./index-DL7Mpk60.js";import{M as o}from"./index-BaBvMk_V.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-lddcrJxg.js";import"./index-KklXjS-Z.js";import"./index-CwPCC0ZT.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function d(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Utilities/Z-Index/getZIndex"}),`
`,e.jsx(n.h1,{id:"getzindex",children:"getZIndex"}),`
`,e.jsx(n.p,{children:"Returns the z-index value for a given overlay type, applying an optional per-instance override. Used internally by overlay components — available if you need the same value in custom components."}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsx("code",{children:"keyof ZIndexConfig"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["The overlay type: ",e.jsx("code",{children:"'popover'"}),", ",e.jsx("code",{children:"'tooltip'"}),", ",e.jsx("code",{children:"'overlay'"}),","," ",`
`,e.jsx("code",{children:"'dialog'"}),", or ",e.jsx("code",{children:"'dropdown'"}),"."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"override"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx(n.p,{children:"Optional. When provided, this value is returned directly instead of the configured default."})})]})]})]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { getZIndex } from '@capitaltg/vero';

// Returns the configured default for 'dropdown'
const z = getZIndex('dropdown');

// Returns 999 regardless of the configured default
const z = getZIndex('dropdown', 999);
`})}),`
`,e.jsxs(n.p,{children:["Per-component ",e.jsx(n.code,{children:"zIndex"})," props on overlay components (e.g. ",e.jsx(n.code,{children:"<Select zIndex={999} />"}),") call this internally, so you only need ",e.jsx(n.code,{children:"getZIndex"})," directly when building custom overlays."]})]})}function u(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{u as default};
