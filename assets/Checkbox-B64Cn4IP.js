import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as l}from"./index-DL7Mpk60.js";import{M as h,D as a,C as d,a as x}from"./index-CL23-Nq0.js";import{D as n,a as o,b as u,A as j}from"./DocsLayout-Dr2VwGxh.js";import{C as p}from"./Checkbox-CGle5Tbu.js";import{C as r,P as t}from"./Checkbox.stories-CDhzgQX9.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-yxFQREfa.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./form-controls-UvU-3cIH.js";import"./constants-jTWlLmnl.js";import"./styles-DnVuGKPq.js";import"./utils-DrFeXHBK.js";import"./index-CBgW3S2s.js";import"./useAriaDisabled-BVkOu7OW.js";import"./useAriaLabelled-RfpmMyng.js";import"./index-Cg8zIP29.js";import"./index-71yw2hYF.js";import"./index-eyHDLC5v.js";import"./index-CE4V37Zw.js";import"./index-Cf-CwZ9y.js";import"./Label-C0TlDhz9.js";import"./graphic-DRi997Gx.js";import"./check-C42IfL-F.js";import"./createLucideIcon-BeEkWZrd.js";function c(i){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:r}),`
`,e.jsx(s.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(a,{of:r}),`
`,e.jsxs(n,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a single checkbox and how to word it. Adapted from the"," ",e.jsx(s.a,{href:"https://designsystem.digital.gov/components/checkbox/",children:"USWDS checkbox guidance"}),"."]}),title:"Guidance",children:[e.jsx(o,{id:"when-to-use",children:"When to use"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"For a single yes-or-no choice"}),`, such as accepting terms or opting in to emails. Unchecked
means no; checked means yes.`]}),`
`,e.jsxs(s.li,{children:[`For several related options, use a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-checkboxgroup--docs",children:"CheckboxGroup"}),`, which has the full guidance for
lists of checkboxes.`]}),`
`]}),e.jsx(o,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A setting that takes effect immediately"}),`, such as turning notifications on: use a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-switch--docs",children:"Switch"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The label can't make both states clear:"}),` use two radio buttons with their own labels, in a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-radiogroup--docs",children:"RadioGroup"}),"."]}),`
`]}),e.jsx(o,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use a positive statement."}),` Write "Email me about new features", not "Don't email me about new
features".`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Make the label clear when checked and when unchecked."}),` "I agree to the terms" works; "Terms"
doesn't.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Don't put a single checkbox in a ",e.jsx(s.code,{children:"fieldset"}),"."]})," A fieldset and legend are for groups."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Give touch users a large enough target."}),` Clicking the label toggles the checkbox, when it has
an `,e.jsx(s.code,{children:"id"})," (see ",e.jsx(s.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"}),"). The ",e.jsx(s.code,{children:"tile"}),` style makes the whole card
clickable.`]}),`
`]})]}),`
`,e.jsxs(n,{id:"try-it",intro:"Change the values below to see how the checkbox responds.",title:"Try it",children:[e.jsx(d,{of:t}),e.jsx(x,{of:t})]}),`
`,e.jsx(n,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(u,{})}),`
`,e.jsxs(n,{id:"accessibility",intro:"What the checkbox handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(o,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"It's a checkbox to assistive technology"})," (",e.jsx(s.code,{children:'role="checkbox"'})," with ",e.jsx(s.code,{children:"aria-checked"}),`), named by its
`,e.jsx(s.code,{children:"label"})," through ",e.jsx(s.code,{children:"aria-labelledby"}),". Its ",e.jsx(s.code,{children:"description"})," is linked with ",e.jsx(s.code,{children:"aria-describedby"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keyboard:"})," Tab reaches it, and Space checks or unchecks it, as with a native checkbox."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"It must have a name."})," Without a ",e.jsx(s.code,{children:"label"})," or an ",e.jsx(s.code,{children:"aria-label"}),`, it throws an error, so an unnamed
checkbox can't ship unnoticed (but see `,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/164",rel:"nofollow",children:"#164"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When disabled it stays focusable"})," and is marked ",e.jsx(s.code,{children:"aria-disabled"}),`, so screen reader users can
still find it and hear that it's unavailable. Clicks and Space don't change it.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"required"})," sets ",e.jsx(s.code,{children:"aria-required"})]}),", so screen readers announce it."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast:"}),` the unchecked box's border is 4.8:1 against white and the checked fill 7.1:1, above
the 3:1 that WCAG requires for form controls.`]}),`
`]}),e.jsx(o,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Prefer a visible ",e.jsx(s.code,{children:"label"}),"."]})," Use ",e.jsx(s.code,{children:"aria-label"}),` only when the purpose is clear from what's around
the checkbox, such as a row checkbox in a table.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Pass an ",e.jsx(s.code,{children:"id"}),"."]}),` Without one, clicking the label doesn't toggle the checkbox
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/200",rel:"nofollow",children:"#200"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Show a requirement in the label text too"}),', such as "(required)": ',e.jsx(s.code,{children:"aria-required"}),` only reaches
screen reader users.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Link error messages yourself."}),` The checkbox has no error prop. Put the error text next to it
and link it with `,e.jsx(s.code,{children:"aria-describedby"}),". For now, don't combine this with ",e.jsx(s.code,{children:"description"}),`: only one of
the two is announced (`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/201",rel:"nofollow",children:"#201"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Prefer the ",e.jsx(s.code,{children:"default"})," style where keyboard users need to see focus."]})," For now, the ",e.jsx(s.code,{children:"tile"}),` and
`,e.jsx(s.code,{children:"button"}),` styles show no focus indicator
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/198",rel:"nofollow",children:"#198"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Avoid the ",e.jsx(s.code,{children:"button"})," style where users rely on Windows High Contrast mode."]}),` Its checked state is
shown by color only, and doesn't show at all in that mode
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/199",rel:"nofollow",children:"#199"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(s.a,{href:"https://designsystem.digital.gov/components/checkbox/accessibility-tests/",rel:"nofollow",children:"USWDS checkbox accessibility tests"}),`
on your own form, including a screen reader pass.`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+%28in%3Atitle+Checkbox+OR+in%3Atitle+CheckboxGroup%29",rel:"nofollow",children:"all open accessibility issues for Checkbox and CheckboxGroup"}),"."]})]}),`
`,e.jsx(n,{id:"api-reference",intro:"The props declared in Vero's types. Standard HTML attributes and Radix props aren't listed.",title:"API reference",children:e.jsx(j,{of:p})})]})}function K(i={}){const{wrapper:s}={...l(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(c,{...i})}):c(i)}export{K as default};
