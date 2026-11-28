import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as d}from"./index-DL7Mpk60.js";import{M as h,D as c,C as x,a as m}from"./index-CMjXWZPS.js";import{D as u,a as n,b as j,c as t,d as r,e as p,A as f}from"./DocsLayout-CEYntYd9.js";import{L as b}from"./Label-C0TlDhz9.js";import{L as o,P as l}from"./Label.stories-BGrdSUlz.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C7Tx3m9I.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./utils-DrFeXHBK.js";import"./createLucideIcon-BeEkWZrd.js";import"./x-DEnjg7Le.js";import"./check-C42IfL-F.js";import"./styles-DnVuGKPq.js";import"./index-Cf-CwZ9y.js";import"./index-Cg8zIP29.js";function a(i){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:o}),`
`,e.jsx(s.h1,{id:"label",children:"Label"}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(u,{}),`
`,e.jsxs(n,{id:"try-it",intro:"Change the values below to see how the label responds.",title:"Try it",children:[e.jsx(x,{of:l}),e.jsx(m,{of:l})]}),`
`,e.jsxs(n,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a Label on its own. Adapted from the"," ",e.jsx(s.a,{href:"https://designsystem.digital.gov/components/form/",children:"USWDS form guidance"}),", which has no separate label page. The"," ",e.jsx(s.a,{href:"?path=/docs/inputs-forms-formitem--docs",children:"FormItem"})," page has the full guidance for labels, hints and errors."]}),title:"Guidance",variant:"guidance",children:[e.jsxs(j,{children:[e.jsx(t,{kind:"use",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When you lay out a field yourself"}),` and FormItem's layout doesn't fit, such as a label beside
its field in a compact filter bar.`]}),`
`,e.jsxs(s.li,{children:["In most forms, use a ",e.jsx(s.a,{href:"?path=/docs/inputs-forms-formitem--docs",children:"FormItem"}),` instead. It renders a
Label for you and links the hint and error text too.`]}),`
`]})}),e.jsx(t,{kind:"avoid",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A field with hint or error text:"}),` use a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-formitem--docs",children:"FormItem"}),", which links them to the field."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A name for a group of checkboxes or radio buttons:"})," use a ",e.jsx(s.code,{children:"fieldset"})," and ",e.jsx(s.code,{children:"legend"}),`. See
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-checkboxgroup--docs",children:"CheckboxGroup"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A single checkbox, radio button or switch:"})," use its own ",e.jsx(s.code,{children:"label"})," prop."]}),`
`]})})]}),e.jsx(r,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep labels short and specific"}),', such as "Email address".']}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Put the label above or before its field"}),", in the same order in the code as on screen."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Mark required fields the same way across the form"}),`, and explain the marker once at the top.
The Required example adds an asterisk with CSS.`]}),`
`]})]}),`
`,e.jsx(n,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(p,{})}),`
`,e.jsxs(n,{id:"accessibility",intro:"What the label handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(r,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["It's a native ",e.jsx(s.code,{children:"<label>"})]}),", so with ",e.jsx(s.code,{children:"htmlFor"})," set to a field's ",e.jsx(s.code,{children:"id"}),` it gives the field its
accessible name, and clicking it focuses the field.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast"})," (in the USWDS theme): the label text is 17.7:1 against white."]}),`
`]}),e.jsx(r,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Point it at the field."})," Set ",e.jsx(s.code,{children:"htmlFor"})," to the field's ",e.jsx(s.code,{children:"id"}),`, or wrap the field in the Label.
Without either, the label is only text, and the field has no name.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Check how to label fields that aren't native inputs."})," A ",e.jsx(s.code,{children:"<label>"}),` names native fields, such
as an `,e.jsx(s.a,{href:"?path=/docs/inputs-forms-input--docs",children:"Input"}),` or
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-textarea--docs",children:"Textarea"}),`. Fields such as Select and Combobox are
built on a button, so check their pages for how to label them.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Mark required fields on the field"}),", with ",e.jsx(s.code,{children:"required"})," or ",e.jsx(s.code,{children:"aria-required"}),`. An asterisk in the
label is read as "star", and doesn't tell screen reader users the field is required.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Link hints and errors yourself"})," with ",e.jsx(s.code,{children:"aria-describedby"}),` on the field, or use a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-formitem--docs",children:"FormItem"}),", which does it for you."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use enough contrast for a required marker."}),` Red text needs 4.5:1, like the
`,e.jsx(s.code,{children:"text-destructive"})," color the Required example uses."]}),`
`]}),e.jsxs(s.p,{children:[`Searching issue titles for "Label" also matches other components' label issues. For an accessibility
review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+FormItem",rel:"nofollow",children:"all open accessibility issues for FormItem"}),`,
which renders Label.`]})]}),`
`,e.jsx(n,{id:"api-reference",intro:"The props declared in Vero's types. Standard HTML attributes aren't listed.",title:"API reference",children:e.jsx(f,{of:b})})]})}function X(i={}){const{wrapper:s}={...d(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(a,{...i})}):a(i)}export{X as default};
