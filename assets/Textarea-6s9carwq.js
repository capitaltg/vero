import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as l}from"./index-DL7Mpk60.js";import{M as d,D as h,C as c,a as x}from"./index-CL23-Nq0.js";import{D as i,a as n,b as u,A as p}from"./DocsLayout-Dr2VwGxh.js";import{T as j}from"./Textarea-Cs2KzWh6.js";import{T as r,P as o}from"./Textarea.stories-BJhc0skZ.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-yxFQREfa.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./useAriaDisabled-BVkOu7OW.js";import"./styles-DnVuGKPq.js";import"./utils-DrFeXHBK.js";function a(t){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r}),`
`,e.jsx(s.h1,{id:"textarea",children:"Textarea"}),`
`,e.jsx(h,{of:r}),`
`,e.jsxs(i,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a multi-line text field and how to size it. Adapted from the"," ",e.jsx(s.a,{href:"https://designsystem.digital.gov/components/text-input/",children:"USWDS text input guidance"}),", which covers text areas too. The ",e.jsx(s.a,{href:"?path=/docs/inputs-forms-input--docs",children:"Input"})," ","page has more guidance that applies to both."]}),title:"Guidance",children:[e.jsx(n,{id:"when-to-use",children:"When to use"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"For free-form answers longer than a line or two"}),`, such as comments, a description of a
problem, or the reason for a request.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When users may want to paste in a long answer"}),`, such as a list or a paragraph from another
document.`]}),`
`]}),e.jsx(n,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Short answers"}),`, such as a name or an email address: use an
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-input--docs",children:"Input"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A choice from a fixed list:"})," use a ",e.jsx(s.a,{href:"?path=/docs/inputs-forms-select--docs",children:"Select"}),` or a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-radiogroup--docs",children:"RadioGroup"}),"."]}),`
`]}),e.jsx(n,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Give every textarea a visible label"}),`, with a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-formitem--docs",children:"FormItem"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Size it to the answer you expect."})," The height tells users how much to write. Set ",e.jsx(s.code,{children:"rows"}),`, or a
height with `,e.jsx(s.code,{children:"className"}),". It's at least 5rem tall."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Use ",e.jsx(s.code,{children:"isGrowable"})," when answers vary a lot in length."]}),` The textarea grows to fit the text, so
users don't have to scroll inside it. It also removes the resize handle.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Say if there's a length limit"}),", in ",e.jsx(s.code,{children:"hintText"}),`, and show how much is left as users type.
Don't rely on `,e.jsx(s.code,{children:"maxLength"})," alone: it silently cuts off pasted text."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Don't use placeholder text in place of a hint."})," It disappears as soon as users type."]}),`
`]})]}),`
`,e.jsxs(i,{id:"try-it",intro:"Change the values below to see how the textarea responds.",title:"Try it",children:[e.jsx(c,{of:o}),e.jsx(x,{of:o})]}),`
`,e.jsx(i,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(u,{})}),`
`,e.jsxs(i,{id:"accessibility",intro:"What the textarea handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(n,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["It's a native ",e.jsx(s.code,{children:"<textarea>"})]}),`, so it's a multi-line text box to assistive technology, and it
takes every standard attribute, such as `,e.jsx(s.code,{children:"rows"}),", ",e.jsx(s.code,{children:"required"})," and ",e.jsx(s.code,{children:"aria-describedby"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Focus is visible:"}),` a 3px ring in the focus color, set off from the field by a 3px gap, shows
when it's reached by keyboard. In Windows High Contrast mode an outline shows instead.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["When disabled with ",e.jsx(s.code,{children:"isDisabled"})," it stays focusable"]})," and is marked ",e.jsx(s.code,{children:"aria-disabled"}),`, so screen
reader users can still find it and hear that it's unavailable. Clicks don't focus it, and
typing, pasting and dropping text are blocked.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast"}),` (in the USWDS theme): the border is 6.7:1 against white, above the 3:1 that WCAG
requires for form controls, and placeholder text is 5.3:1. The focus ring is 3.2:1.`]}),`
`]}),e.jsx(n,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Label it."}),` The textarea has no label of its own. Wrap it in a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-formitem--docs",children:"FormItem"})," with a string ",e.jsx(s.code,{children:"label"}),`, or point a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-label--docs",children:"Label"})," at its ",e.jsx(s.code,{children:"id"}),". Placeholder text isn't a label."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Give it an ",e.jsx(s.code,{children:"id"}),", and match FormItem's ",e.jsx(s.code,{children:"elementId"})," to it"]}),` if you set one. FormItem doesn't set
the id, so a mismatch leaves the textarea unlabeled
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/163",rel:"nofollow",children:"#163"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Mark required fields on the textarea."})," Set ",e.jsx(s.code,{children:"required"})," or ",e.jsx(s.code,{children:"aria-required"}),`. FormItem's
`,e.jsx(s.code,{children:"isRequired"}),` only adds an asterisk to the label
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/211",rel:"nofollow",children:"#211"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Make errors heard."})," FormItem's ",e.jsx(s.code,{children:"errorText"}),` is linked to the textarea, but it isn't announced
when it appears (`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/212",rel:"nofollow",children:"#212"}),`). Show errors on submit and
move focus to the first invalid field or an error summary.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Announce a character count politely"}),", if you add one: put it in an ",e.jsx(s.code,{children:'aria-live="polite"'}),`
region that updates after a pause in typing, not on every keystroke, and link it with
`,e.jsx(s.code,{children:"aria-describedby"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Prefer ",e.jsx(s.code,{children:"readOnly"})," to ",e.jsx(s.code,{children:"isDisabled"})]}),` when users need to review or copy the text: a disabled
textarea blocks the arrow keys and copying. Say why a field is disabled, in its hint text.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Check border contrast if you use the light or dark theme."}),` There the border is below the 3:1
WCAG requires (`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/125",rel:"nofollow",children:"#125"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(s.a,{href:"https://designsystem.digital.gov/components/text-input/accessibility-tests/",rel:"nofollow",children:"USWDS text input accessibility tests"}),`
on your own form, including a screen reader pass.`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+%28in%3Atitle+Textarea+OR+in%3Atitle+FormItem%29",rel:"nofollow",children:"all open accessibility issues for Textarea and FormItem"}),"."]})]}),`
`,e.jsx(i,{id:"api-reference",intro:"The props declared in Vero's types. Standard HTML attributes aren't listed.",title:"API reference",children:e.jsx(p,{of:j})})]})}function q(t={}){const{wrapper:s}={...l(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(a,{...t})}):a(t)}export{q as default};
