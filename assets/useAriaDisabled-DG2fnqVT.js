import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as r}from"./index-DL7Mpk60.js";import{M as d}from"./index-BaBvMk_V.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-lddcrJxg.js";import"./index-KklXjS-Z.js";import"./index-CwPCC0ZT.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Utilities/Hooks/useAriaDisabled"}),`
`,e.jsx(n.h1,{id:"useariadisabled",children:"useAriaDisabled"}),`
`,e.jsxs(n.p,{children:["Provides accessibility-friendly disabled behavior that keeps elements in the tab order while preventing interaction. Prefer this over the native ",e.jsx(n.code,{children:"disabled"})," attribute so keyboard users can still focus and read the element."]}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isDisabled"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"Whether the element is disabled."})]})})]}),`
`,e.jsx(n.h2,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"isDisabled"})," is ",e.jsx(n.code,{children:"false"}),", returns an empty object. When ",e.jsx(n.code,{children:"true"}),", returns ",e.jsx(n.code,{children:"aria-disabled: true"})," plus event handlers that block interaction:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Mouse: ",e.jsx(n.code,{children:"onClick"}),", ",e.jsx(n.code,{children:"onMouseDown"}),", ",e.jsx(n.code,{children:"onMouseUp"})]}),`
`,e.jsxs(n.li,{children:["Touch: ",e.jsx(n.code,{children:"onTouchStart"}),", ",e.jsx(n.code,{children:"onTouchEnd"})]}),`
`,e.jsxs(n.li,{children:["Pointer: ",e.jsx(n.code,{children:"onPointerDown"}),", ",e.jsx(n.code,{children:"onPointerDownCapture"})]}),`
`,e.jsxs(n.li,{children:["Keyboard: ",e.jsx(n.code,{children:"onKeyDown"}),", ",e.jsx(n.code,{children:"onKeyUp"})," — Tab and Escape are still allowed"]}),`
`,e.jsxs(n.li,{children:["Form: ",e.jsx(n.code,{children:"onInput"}),", ",e.jsx(n.code,{children:"onSubmit"}),", ",e.jsx(n.code,{children:"onReset"})]}),`
`,e.jsxs(n.li,{children:["Clipboard: ",e.jsx(n.code,{children:"onCopy"}),", ",e.jsx(n.code,{children:"onCut"}),", ",e.jsx(n.code,{children:"onPaste"})]}),`
`,e.jsxs(n.li,{children:["Drag: ",e.jsx(n.code,{children:"onDrag"}),", ",e.jsx(n.code,{children:"onDragStart"}),", ",e.jsx(n.code,{children:"onDragEnd"}),", ",e.jsx(n.code,{children:"onDrop"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useAriaDisabled } from '@capitaltg/vero';

function MyButton({ isDisabled, children }) {
  const disabledProps = useAriaDisabled({ isDisabled });
  return (
    <button
      className="aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
      {...disabledProps}
    >
      {children}
    </button>
  );
}
`})})]})}function m(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{m as default};
