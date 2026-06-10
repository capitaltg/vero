import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as t}from"./index-DL7Mpk60.js";import{M as r}from"./index-BaBvMk_V.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-lddcrJxg.js";import"./index-KklXjS-Z.js";import"./index-CwPCC0ZT.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Utilities/Functions/cn"}),`
`,e.jsx(n.h1,{id:"cn",children:"cn"}),`
`,e.jsxs(n.p,{children:["Merges Tailwind CSS class names, resolving conflicts via ",e.jsx(n.code,{children:"tailwind-merge"})," and handling conditionals via ",e.jsx(n.code,{children:"clsx"}),". Use this anywhere you need to combine or conditionally apply Tailwind classes."]}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"...inputs"})}),e.jsx("td",{children:e.jsx("code",{children:"ClassValue[]"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["Any combination of strings, arrays, or objects accepted by ",e.jsx("code",{children:"clsx"}),`. Falsy values
are ignored.`]})})]})})]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { cn } from '@capitaltg/vero';

// Merge static and conditional classes
cn('px-4 py-2', isActive && 'bg-primary text-white', className)

// Resolve conflicts — last value wins
cn('text-red-500', 'text-blue-500') // → 'text-blue-500'
`})})]})}function u(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{u as default};
