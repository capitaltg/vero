import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as r}from"./index-DL7Mpk60.js";import{M as i}from"./index-B9m8g_Pk.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B9vIWIK1.js";import"./index-KklXjS-Z.js";import"./index-CwPCC0ZT.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Utilities/Z-Index/resetZIndexConfig"}),`
`,e.jsx(t.h1,{id:"resetzindexconfig",children:"resetZIndexConfig"}),`
`,e.jsx(t.p,{children:"Resets all z-index values to their defaults. Useful in tests to isolate configuration between test cases."}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`import { resetZIndexConfig } from '@capitaltg/vero';

afterEach(() => {
  resetZIndexConfig();
});
`})})]})}function u(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{u as default};
