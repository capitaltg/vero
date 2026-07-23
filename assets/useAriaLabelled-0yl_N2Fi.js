import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as d}from"./index-DL7Mpk60.js";import{M as s}from"./index-B9m8g_Pk.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B9vIWIK1.js";import"./index-KklXjS-Z.js";import"./index-CwPCC0ZT.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function i(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Utilities/Hooks/useAriaLabelled"}),`
`,e.jsx(n.h1,{id:"usearialabelled",children:"useAriaLabelled"}),`
`,e.jsxs(n.p,{children:["Generates ",e.jsx(n.code,{children:"aria-labelledby"})," and ",e.jsx(n.code,{children:"aria-describedby"})," attributes for form controls that have labels positioned outside the control element (e.g. checkboxes, radios)."]}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"label"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["Label content. Generates ",e.jsx("code",{children:"aria-labelledby"})," pointing to the label element."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"description"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["Description or hint text. Generates ",e.jsx("code",{children:"aria-describedby"}),` pointing to the
description element.`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aria-label"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["Explicit label string. When provided, uses ",e.jsx("code",{children:"aria-label"})," directly and ignores"," ",`
`,e.jsx("code",{children:"label"})," and ",e.jsx("code",{children:"description"}),"."]})})]})]})]}),`
`,e.jsx(n.h2,{id:"returns",children:"Returns"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ariaProps"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["Spread onto the control element (",e.jsx("code",{children:"aria-label"}),", ",e.jsx("code",{children:"aria-labelledby"}),", or"," ",`
`,e.jsx("code",{children:"aria-describedby"}),")."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"labelId"})}),e.jsx("td",{children:"Stable generated ID to set on the label element."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"descriptionId"})}),e.jsx("td",{children:"Stable generated ID to set on the description element."})]})]})]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useAriaLabelled } from '@capitaltg/vero';

function MyControl({ label, description, 'aria-label': ariaLabel }) {
  const { ariaProps, labelId, descriptionId } = useAriaLabelled({
    label,
    description,
    'aria-label': ariaLabel,
  });
  return (
    <div>
      {label && <span id={labelId}>{label}</span>}
      <input type="checkbox" {...ariaProps} />
      {description && <span id={descriptionId}>{description}</span>}
    </div>
  );
}
`})})]})}function m(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{m as default};
