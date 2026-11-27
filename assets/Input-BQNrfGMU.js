import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as a}from"./index-DL7Mpk60.js";import{M as d,D as h,C as c,a as u}from"./index-Dwd4rZEB.js";import{D as i,a as t,b as x,A as p}from"./DocsLayout-CUwxVCnV.js";import{I as j}from"./Input-BjeEkKn3.js";import{I as r,P as o}from"./Input.stories-CWx0gHAS.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFC7Cztk.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./useAriaDisabled-BVkOu7OW.js";import"./styles-DnVuGKPq.js";import"./utils-DrFeXHBK.js";function l(n){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r}),`
`,e.jsx(s.h1,{id:"input",children:"Input"}),`
`,e.jsx(h,{of:r}),`
`,e.jsxs(i,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a single-line text field and how to set it up. Adapted from the"," ",e.jsx(s.a,{href:"https://designsystem.digital.gov/components/text-input/",children:"USWDS text input guidance"}),"."]}),title:"Guidance",children:[e.jsx(t,{id:"when-to-use",children:"When to use"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"For short, free-form answers"}),` that vary from user to user, such as a name, an email address
or a reference number.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When users already know the answer"}),` and typing it is quicker than picking it, such as a
date of birth.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When users may want to paste the answer"}),", such as a code from an email."]}),`
`]}),e.jsx(t,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Answers longer than a line or two:"})," use a ",e.jsx(s.a,{href:"?path=/docs/inputs-forms-textarea--docs",children:"Textarea"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A choice from a fixed list:"})," use a ",e.jsx(s.a,{href:"?path=/docs/inputs-forms-select--docs",children:"Select"}),`, a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-radiogroup--docs",children:"RadioGroup"}),`, or a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-combobox--docs",children:"Combobox"})," for a long list."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A date that users look up rather than know:"}),` use a
`,e.jsx(s.a,{href:"?path=/docs/data-display-datepicker--docs",children:"DatePicker"}),"."]}),`
`]}),e.jsx(t,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Give every input a visible label."})," Wrap it in a ",e.jsx(s.a,{href:"?path=/docs/inputs-forms-formitem--docs",children:"FormItem"}),`,
which adds the label, hint and error text and links them to the input.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Don't use placeholder text in place of a label or hint."}),` It disappears as soon as users
type, and it's hard to read for many people. Put instructions and examples in `,e.jsx(s.code,{children:"hintText"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Size the field to the answer it expects."}),` The input fills its container. Set a width with
`,e.jsx(s.code,{children:"className"}),", such as ",e.jsx(s.code,{children:"max-w-[13ex]"})," for a ZIP code, so the field hints at how much to type."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Set ",e.jsx(s.code,{children:"type"})," and ",e.jsx(s.code,{children:"autoComplete"}),"."]})," ",e.jsx(s.code,{children:'type="email"'})," or ",e.jsx(s.code,{children:'type="tel"'}),` brings up the right keyboard on
phones, and `,e.jsx(s.code,{children:'autoComplete="email"'})," lets browsers fill in known details."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use one field for one value."}),` Don't split a phone number or Social Security number across
several inputs: the extra labels confuse screen reader users, and pasting breaks.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Show errors only after users have finished with the field"}),`, on blur or on submit, not while
they're still typing.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Use ",e.jsx(s.code,{children:"transform"})," sparingly."]})," It changes text as users type: ",e.jsx(s.code,{children:"uppercase"})," and ",e.jsx(s.code,{children:"lowercase"}),` move
the caret to the end when users edit mid-text
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/213",rel:"nofollow",children:"#213"}),"), and ",e.jsx(s.code,{children:"trim"}),` removes spaces between words
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/214",rel:"nofollow",children:"#214"}),"). Use ",e.jsx(s.code,{children:"trim"}),` only for values without
spaces, such as an email address, or trim the value yourself when you save it.`]}),`
`]})]}),`
`,e.jsxs(i,{id:"try-it",intro:"Change the values below to see how the input responds.",title:"Try it",children:[e.jsx(c,{of:o}),e.jsx(u,{of:o})]}),`
`,e.jsx(i,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(x,{})}),`
`,e.jsxs(i,{id:"accessibility",intro:"What the input handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(t,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["It's a native ",e.jsx(s.code,{children:"<input>"})]}),`, so it's a text box to assistive technology, and it takes every
standard attribute, such as `,e.jsx(s.code,{children:"type"}),", ",e.jsx(s.code,{children:"autoComplete"}),", ",e.jsx(s.code,{children:"required"})," and ",e.jsx(s.code,{children:"aria-describedby"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Focus is visible:"}),` a 3px ring in the focus color, set off from the field by a 3px gap, shows
when it's reached by keyboard. In Windows High Contrast mode an outline shows instead.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["When disabled with ",e.jsx(s.code,{children:"isDisabled"})," it stays focusable"]})," and is marked ",e.jsx(s.code,{children:"aria-disabled"}),`, so screen
reader users can still find it and hear that it's unavailable. Clicks don't focus it, and
typing, pasting and dropping text are blocked.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast"}),` (in the USWDS theme): the border is 6.7:1 against white, above the 3:1 that WCAG
requires for form controls, and placeholder text is 5.3:1. The focus ring is 3.2:1.`]}),`
`]}),e.jsx(t,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Label it."}),` The input has no label of its own. Wrap it in a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-formitem--docs",children:"FormItem"})," with a string ",e.jsx(s.code,{children:"label"}),`, or point a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-label--docs",children:"Label"})," at its ",e.jsx(s.code,{children:"id"}),". Use ",e.jsx(s.code,{children:"aria-label"}),` only when the purpose
is clear from what's around it, such as a search field next to a Search button. Placeholder text
isn't a label.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Give it an ",e.jsx(s.code,{children:"id"}),", and match FormItem's ",e.jsx(s.code,{children:"elementId"})," to it"]}),` if you set one. FormItem doesn't set
the id, so a mismatch leaves the input unlabeled
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/163",rel:"nofollow",children:"#163"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Mark required fields on the input."})," Set ",e.jsx(s.code,{children:"required"})," or ",e.jsx(s.code,{children:"aria-required"}),`. FormItem's
`,e.jsx(s.code,{children:"isRequired"}),` only adds an asterisk to the label
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/211",rel:"nofollow",children:"#211"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Set ",e.jsx(s.code,{children:"autoComplete"})," on fields that collect the user's own details"]}),", such as ",e.jsx(s.code,{children:"name"}),", ",e.jsx(s.code,{children:"email"}),` or
`,e.jsx(s.code,{children:"postal-code"}),", so browsers and assistive tools can fill them in (WCAG SC 1.3.5)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Make errors heard."})," FormItem's ",e.jsx(s.code,{children:"errorText"}),` is linked to the input, but it isn't announced
when it appears (`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/212",rel:"nofollow",children:"#212"}),`). Show errors on submit and
move focus to the first invalid field or an error summary.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Prefer ",e.jsx(s.code,{children:"readOnly"})," to ",e.jsx(s.code,{children:"isDisabled"})]}),` when users need to review or copy a value: a disabled input
blocks the arrow keys and copying. Say why a field is disabled, in its hint text. Don't rely on
`,e.jsx(s.code,{children:"isDisabled"}),` to protect the value: text inserted by dictation or an input method still gets in,
so check it when the form is submitted.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Check border contrast if you use the light or dark theme."}),` There the border is below the 3:1
WCAG requires (`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/125",rel:"nofollow",children:"#125"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(s.a,{href:"https://designsystem.digital.gov/components/text-input/accessibility-tests/",rel:"nofollow",children:"USWDS text input accessibility tests"}),`
on your own form, including a screen reader pass.`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+%28in%3Atitle+Input+OR+in%3Atitle+FormItem%29",rel:"nofollow",children:"all open accessibility issues for Input and FormItem"}),"."]})]}),`
`,e.jsx(i,{id:"api-reference",intro:"The props declared in Vero's types. Standard HTML attributes aren't listed.",title:"API reference",children:e.jsx(p,{of:j})})]})}function q(n={}){const{wrapper:s}={...a(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{q as default};
