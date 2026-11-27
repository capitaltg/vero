import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as l}from"./index-DL7Mpk60.js";import{M as a,D as c,C as h,a as u}from"./index-AIFAtT5C.js";import{D as o,a as n,b as p,A as x}from"./DocsLayout-CGJ2GL3I.js";import{R as j}from"./Radio-BXSjN84s.js";import{R as r,P as t}from"./Radio.stories--LO3-q6L.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-G2KODbDz.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./form-controls-UvU-3cIH.js";import"./constants-jTWlLmnl.js";import"./styles-DnVuGKPq.js";import"./utils-DrFeXHBK.js";import"./index-CBgW3S2s.js";import"./useAriaDisabled-BVkOu7OW.js";import"./useAriaLabelled-RfpmMyng.js";import"./index-71yw2hYF.js";import"./index-Cg8zIP29.js";import"./index-Cf-CwZ9y.js";import"./index-BC4UKXW_.js";import"./index-C6PL8mjV.js";import"./index-hTbK6lay.js";import"./index-BnbJOCzs.js";import"./index-eyHDLC5v.js";import"./index-CE4V37Zw.js";import"./Label-C0TlDhz9.js";import"./createLucideIcon-BeEkWZrd.js";function d(i){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
`,e.jsx(s.h1,{id:"radio",children:"Radio"}),`
`,e.jsx(c,{of:r}),`
`,e.jsxs(o,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use radios as children of a group, and how to set them up. Adapted from the"," ",e.jsx(s.a,{href:"https://designsystem.digital.gov/components/radio-buttons/",children:"USWDS radio buttons guidance"}),"."]}),title:"Guidance",children:[e.jsx(n,{id:"when-to-use",children:"When to use"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[`A radio is always one option in a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-radiogroup--docs",children:"RadioGroup"})]}),`, which has the full guidance for
choosing one option from a list. It doesn't work on its own.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Use ",e.jsx(s.code,{children:"Radio"})," children when you need a custom layout"]}),`, such as content between options. For
everything else, pass `,e.jsx(s.code,{children:"options"})," to the group."]}),`
`]}),e.jsx(n,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A single yes-or-no choice"}),`, such as accepting terms: use a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-checkbox--docs",children:"Checkbox"}),`. A lone radio can't be cleared once it's
selected.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A setting that takes effect immediately:"}),` use a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-switch--docs",children:"Switch"}),"."]}),`
`]}),e.jsx(n,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Select a radio with the group's ",e.jsx(s.code,{children:"value"}),"."]})," A radio's ",e.jsx(s.code,{children:"isChecked"}),` has no effect
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/207",rel:"nofollow",children:"#207"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Make the label selectable."})," Clicking the label selects the radio, when it has an ",e.jsx(s.code,{children:"id"}),` (see
`,e.jsx(s.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use one style per group."})," Don't mix ",e.jsx(s.code,{children:"default"})," and ",e.jsx(s.code,{children:"tile"}),` radios: a few tiles among plain
radios can look like recommended options.`]}),`
`]})]}),`
`,e.jsxs(o,{id:"try-it",intro:"Change the values below to see how the radio responds.",title:"Try it",children:[e.jsx(h,{of:t}),e.jsx(u,{of:t})]}),`
`,e.jsx(o,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(p,{})}),`
`,e.jsxs(o,{id:"accessibility",intro:"What the radio handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(n,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"It's a radio to assistive technology"})," (",e.jsx(s.code,{children:'role="radio"'})," with ",e.jsx(s.code,{children:"aria-checked"}),`), named by its
`,e.jsx(s.code,{children:"label"})," through ",e.jsx(s.code,{children:"aria-labelledby"}),". Its ",e.jsx(s.code,{children:"description"})," is linked with ",e.jsx(s.code,{children:"aria-describedby"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keyboard:"}),` inside its group, the arrow keys move to the next or previous radio and select it,
and Space selects the focused radio. See
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-radiogroup--docs",children:"RadioGroup"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"It must have a name."})," Without a ",e.jsx(s.code,{children:"label"})," or an ",e.jsx(s.code,{children:"aria-label"}),`, it throws an error, so an unnamed
radio can't ship unnoticed (but see `,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/164",rel:"nofollow",children:"#164"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When disabled it stays focusable"})," and is marked ",e.jsx(s.code,{children:"aria-disabled"}),`, so screen reader users can
still find it and hear that it's unavailable. Clicks and Space don't select it.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast:"}),` the unselected circle's border is 4.8:1 against white and the selected circle
6.7:1, above the 3:1 that WCAG requires for form controls.`]}),`
`]}),e.jsx(n,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Prefer a visible ",e.jsx(s.code,{children:"label"}),"."]})," Use ",e.jsx(s.code,{children:"aria-label"}),` only when the purpose is clear from what's around
the radio.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Name the group the radios are in."}),` See
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-radiogroup--docs",children:"RadioGroup"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Pass an ",e.jsx(s.code,{children:"id"}),"."]}),` Without one, clicking the label doesn't select the radio
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/200",rel:"nofollow",children:"#200"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Link error messages to the group, not to a radio."}),` If you do pass your own
`,e.jsx(s.code,{children:"aria-describedby"})," to a radio, don't combine it with ",e.jsx(s.code,{children:"description"}),`: only one of the two is
announced (`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/201",rel:"nofollow",children:"#201"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Avoid disabled radios where you can."}),` For now, the arrow keys get stuck on a disabled radio,
and keyboard users can only leave it with Tab
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/216",rel:"nofollow",children:"#216"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Prefer the ",e.jsx(s.code,{children:"default"})," style where keyboard users need to see focus."]})," For now, the ",e.jsx(s.code,{children:"tile"}),` and
`,e.jsx(s.code,{children:"button"}),` styles show no focus indicator
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/198",rel:"nofollow",children:"#198"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Avoid the ",e.jsx(s.code,{children:"button"})," style where users rely on Windows High Contrast mode."]}),` Its selected state
is shown by color only, and doesn't show at all in that mode
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/199",rel:"nofollow",children:"#199"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(s.a,{href:"https://designsystem.digital.gov/components/radio-buttons/accessibility-tests/",rel:"nofollow",children:"USWDS radio buttons accessibility tests"}),`
on your own form, including a screen reader pass.`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+%28in%3Atitle+Radio+OR+in%3Atitle+RadioGroup%29",rel:"nofollow",children:"all open accessibility issues for Radio and RadioGroup"}),"."]})]}),`
`,e.jsx(o,{id:"api-reference",intro:"The props declared in Vero's types. Standard HTML attributes and Radix props aren't listed.",title:"API reference",children:e.jsx(x,{of:j})})]})}function O(i={}){const{wrapper:s}={...l(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(d,{...i})}):d(i)}export{O as default};
