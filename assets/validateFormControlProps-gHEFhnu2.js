import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as i}from"./index-DL7Mpk60.js";import{M as o}from"./index-BaBvMk_V.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-lddcrJxg.js";import"./index-KklXjS-Z.js";import"./index-CwPCC0ZT.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function t(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Utilities/Functions/validateFormControlProps"}),`
`,e.jsx(r.h1,{id:"validateformcontrolprops",children:"validateFormControlProps"}),`
`,e.jsxs(r.p,{children:["Validates that a form control has either a ",e.jsx(r.code,{children:"label"})," prop or an ",e.jsx(r.code,{children:"aria-label"})," attribute — but not both. Throws a descriptive error at runtime if the constraint is violated. Use this in custom form controls to enforce the same accessible labeling pattern used across the library."]}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"componentName"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"Used in the thrown error message to identify the component."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"label"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:"The label prop value from the component."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ariaLabel"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsxs(r.p,{children:["The ",e.jsx("code",{children:"aria-label"})," prop value from the component."]})})]})]})]}),`
`,e.jsx(r.h2,{id:"throws",children:"Throws"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["If neither ",e.jsx(r.code,{children:"label"})," nor ",e.jsx(r.code,{children:"aria-label"})," is provided"]}),`
`,e.jsxs(r.li,{children:["If both ",e.jsx(r.code,{children:"label"})," and ",e.jsx(r.code,{children:"aria-label"})," are provided"]}),`
`]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { validateFormControlProps } from '@capitaltg/vero';

const MyInput = React.forwardRef(({ label, 'aria-label': ariaLabel, ...props }, ref) => {
  validateFormControlProps('MyInput', label, ariaLabel);
  // ...
});
`})})]})}function b(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{b as default};
