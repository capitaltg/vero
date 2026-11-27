import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as d}from"./index-DL7Mpk60.js";import{M as a,D as h,C as c,a as m}from"./index-AIFAtT5C.js";import{D as s,a as r,b as x,A as p}from"./DocsLayout-CGJ2GL3I.js";import{F as j}from"./FormItem-w-KWj7d7.js";import{F as t,P as o}from"./FormItem.stories-B3qfIC97.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-G2KODbDz.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./styles-DnVuGKPq.js";import"./utils-DrFeXHBK.js";import"./Label-C0TlDhz9.js";import"./index-Cf-CwZ9y.js";import"./index-Cg8zIP29.js";import"./Button-DJBoR_IJ.js";import"./useAriaDisabled-BVkOu7OW.js";import"./constants-jTWlLmnl.js";import"./index-CBgW3S2s.js";import"./createLucideIcon-BeEkWZrd.js";import"./Tooltip-Cj8dK7Rm.js";import"./index-Cu56kmkr.js";import"./index-71yw2hYF.js";import"./index-BnbJOCzs.js";import"./index-eyHDLC5v.js";import"./index-CrHxJ1tp.js";import"./index-hTbK6lay.js";import"./index-CE4V37Zw.js";import"./index-C0VaYEPT.js";import"./Input-BjeEkKn3.js";import"./circle-question-mark-DHikYJlp.js";import"./Combobox-BFQTSsZP.js";import"./CommandItem-8D5J7EVq.js";import"./index-C8pZe9g5.js";import"./index-ByqrEM_-.js";import"./CommandGroup-B7DCbNMb.js";import"./CommandList-Zx6pNQH3.js";import"./Popover-BuTVlq4x.js";import"./chevrons-up-down-CPJXHd7n.js";import"./check-C42IfL-F.js";import"./DateRangePicker-DMS53onl.js";import"./Calendar-ACLC_s1C.js";import"./chevron-right-Dw3Smd9x.js";import"./DatePicker-D1TwI06b.js";import"./MultiSelect-BOoBGzfy.js";import"./x-DEnjg7Le.js";import"./Autocomplete-ngdpsVt2.js";import"./Select-VIvb_Gvi.js";import"./index-C6PL8mjV.js";import"./chevron-down-CLkoBCE4.js";import"./Textarea-Cs2KzWh6.js";function l(n){const i={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:t}),`
`,e.jsx(i.h1,{id:"formitem",children:"FormItem"}),`
`,e.jsx(h,{of:t}),`
`,e.jsxs(s,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["How to label a field and write its hint, required marker and error text. Adapted from the"," ",e.jsx(i.a,{href:"https://designsystem.digital.gov/components/form/",children:"USWDS form guidance"}),"."]}),title:"Guidance",children:[e.jsx(r,{id:"when-to-use",children:"When to use"}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"For every single form field"}),` that needs a label: an
`,e.jsx(i.a,{href:"?path=/docs/inputs-forms-input--docs",children:"Input"}),`, a
`,e.jsx(i.a,{href:"?path=/docs/inputs-forms-textarea--docs",children:"Textarea"}),`, a
`,e.jsx(i.a,{href:"?path=/docs/inputs-forms-select--docs",children:"Select"}),` and the other field components. FormItem lays
out the label, hint and error text the same way for each, and links them to the field.`]}),`
`]}),e.jsx(r,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"A group of checkboxes, radio buttons or switches:"})," they need a ",e.jsx(i.code,{children:"fieldset"})," and ",e.jsx(i.code,{children:"legend"}),`, not a
label. See `,e.jsx(i.a,{href:"?path=/docs/inputs-forms-checkboxgroup--docs",children:"CheckboxGroup"}),` and
`,e.jsx(i.a,{href:"?path=/docs/inputs-forms-radiogroup--docs",children:"RadioGroup"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"A single checkbox, radio button or switch:"})," it has its own ",e.jsx(i.code,{children:"label"})," prop."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"A label you lay out yourself:"})," use a ",e.jsx(i.a,{href:"?path=/docs/inputs-forms-label--docs",children:"Label"}),"."]}),`
`]}),e.jsx(r,{id:"usability",children:"Usability guidance"}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Keep labels short and specific."}),` "Email address", not "Please enter your email address
below".`]}),`
`,e.jsxs(i.li,{children:[e.jsxs(i.strong,{children:["Put instructions in ",e.jsx(i.code,{children:"hintText"}),", not in the label or the placeholder."]}),` Hints stay visible
while users type. Use them for formats and examples, such as "For example, 12/31/1990".`]}),`
`,e.jsxs(i.li,{children:[e.jsxs(i.strong,{children:["Mark required fields with ",e.jsx(i.code,{children:"isRequired"})]}),`, and explain the asterisk once, at the top of the
form: "Fields marked with an asterisk (*) are required." Or mark the optional fields instead,
with "(optional)" in the label. A form with one field needs neither.`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Write errors that say how to fix the problem."}),` "Enter an email address, like
name@example.com", not "Invalid input". Show them after users leave the field or submit the
form, not while they're typing.`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Keep the error next to its field."}),` FormItem puts it right under the field, where screen
magnifier users will find it.`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Lay forms out in a single column"}),", in the same order in the code as on screen."]}),`
`,e.jsxs(i.li,{children:[e.jsxs(i.strong,{children:["Use ",e.jsx(i.code,{children:"labelSlot"})," for short help"]}),`, such as an info button with a
`,e.jsx(i.a,{href:"?path=/docs/overlays-feedback-tooltip--docs",children:"Tooltip"}),`. Put anything users need in order to answer
in `,e.jsx(i.code,{children:"hintText"}),", where everyone sees it."]}),`
`]})]}),`
`,e.jsxs(s,{id:"try-it",intro:"Change the values below to see how the form item responds.",title:"Try it",children:[e.jsx(c,{of:o}),e.jsx(m,{of:o})]}),`
`,e.jsx(s,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(x,{})}),`
`,e.jsxs(s,{id:"accessibility",intro:"What the form item handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(r,{id:"built-in",children:"Built in"}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsxs(i.strong,{children:["A string ",e.jsx(i.code,{children:"label"})," names the field."]})," It renders a ",e.jsx(i.code,{children:"<label>"})," whose ",e.jsx(i.code,{children:"for"})," is the field's ",e.jsx(i.code,{children:"id"}),`, so
screen readers announce it and clicking it focuses the field.`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Hint and error text are linked to the field"})," with ",e.jsx(i.code,{children:"aria-describedby"}),`, hint first, so screen
readers read them after the label. Any `,e.jsx(i.code,{children:"aria-describedby"})," the field already has is kept."]}),`
`,e.jsxs(i.li,{children:[e.jsxs(i.strong,{children:[e.jsx(i.code,{children:"errorText"})," marks the field invalid"]})," with ",e.jsx(i.code,{children:"aria-invalid"}),`. The error is shown as text under
the field, not by color alone, and the field's border turns red.`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"It needs an id to link to."})," Without an ",e.jsx(i.code,{children:"elementId"})," or an ",e.jsx(i.code,{children:"id"}),` on the child, it throws an
error.`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Contrast"}),` (in the USWDS theme), against white: label text is 17.7:1, hint text 5.3:1, and
error text and the error border 7.0:1.`]}),`
`]}),e.jsx(r,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsxs(i.strong,{children:["Put the ",e.jsx(i.code,{children:"id"})," on the field."]})," FormItem reads the child's ",e.jsx(i.code,{children:"id"}),", and ",e.jsx(i.code,{children:"elementId"}),` doesn't set it:
if you pass `,e.jsx(i.code,{children:"elementId"})," without a matching ",e.jsx(i.code,{children:"id"}),` on the child, the label isn't linked and nothing
warns you (`,e.jsx(i.a,{href:"https://github.com/capitaltg/vero/issues/163",rel:"nofollow",children:"#163"}),")."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<FormItem hintText="For example, name@example.com" label="Email">
  <Input autoComplete="email" id="email" type="email" />
</FormItem>
`})}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsxs(i.strong,{children:["Set ",e.jsx(i.code,{children:"required"})," or ",e.jsx(i.code,{children:"aria-required"})," on the field."]})," ",e.jsx(i.code,{children:"isRequired"}),` only adds an asterisk to the
label, which screen readers read as "star"
(`,e.jsx(i.a,{href:"https://github.com/capitaltg/vero/issues/211",rel:"nofollow",children:"#211"}),")."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Make errors heard."}),` The error isn't announced when it appears
(`,e.jsx(i.a,{href:"https://github.com/capitaltg/vero/issues/212",rel:"nofollow",children:"#212"}),`). On submit, move focus to the first
invalid field, or to an error summary that links to each one. For errors shown on blur, also
announce them with your own `,e.jsx(i.code,{children:'aria-live="polite"'})," region."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsxs(i.strong,{children:["Set a ",e.jsx(i.code,{children:"label"})," when you use ",e.jsx(i.code,{children:"hintText"}),"."]}),` Without a label, the hint isn't shown, and the field's
`,e.jsx(i.code,{children:"aria-describedby"}),` points at an element that doesn't exist
(`,e.jsx(i.a,{href:"https://github.com/capitaltg/vero/issues/210",rel:"nofollow",children:"#210"}),")."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Link a custom label yourself."})," When ",e.jsx(i.code,{children:"label"}),` isn't a string, FormItem renders it as is: give it
a `,e.jsx(i.code,{children:"<label htmlFor>"})," or point the field's ",e.jsx(i.code,{children:"aria-labelledby"})," at it."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsxs(i.strong,{children:["Give buttons in ",e.jsx(i.code,{children:"labelSlot"})," a name."]})," An icon-only button needs an ",e.jsx(i.code,{children:"aria-label"}),`, such as
"Password requirements".`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(i.a,{href:"https://designsystem.digital.gov/components/text-input/accessibility-tests/",rel:"nofollow",children:"USWDS text input accessibility tests"}),`
on your own form, including a screen reader pass.`]}),`
`]}),`
`]}),e.jsxs(i.p,{children:[`For an accessibility review, see
`,e.jsx(i.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+FormItem",rel:"nofollow",children:"all open accessibility issues for FormItem"}),"."]})]}),`
`,e.jsx(s,{id:"api-reference",intro:"The props declared in Vero's types. Standard HTML attributes aren't listed.",title:"API reference",children:e.jsx(p,{of:j})})]})}function ue(n={}){const{wrapper:i}={...d(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(l,{...n})}):l(n)}export{ue as default};
