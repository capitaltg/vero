import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as c}from"./index-DL7Mpk60.js";import{M as a,D as d,C as h,a as p}from"./index-AIFAtT5C.js";import{D as o,a as i,b as u,c as x}from"./DocsLayout-CGJ2GL3I.js";import{R as j}from"./RadioGroup-CeJFEtWB.js";import{R as r,P as t}from"./RadioGroup.stories-CwmtwbWn.js";import{R as g}from"./Radio-BXSjN84s.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-G2KODbDz.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./useFormGroupLayout-ZWE7ybff.js";import"./utils-DrFeXHBK.js";import"./Button-DJBoR_IJ.js";import"./useAriaDisabled-BVkOu7OW.js";import"./index-Cg8zIP29.js";import"./constants-jTWlLmnl.js";import"./styles-DnVuGKPq.js";import"./index-CBgW3S2s.js";import"./createLucideIcon-BeEkWZrd.js";import"./form-controls-UvU-3cIH.js";import"./useAriaLabelled-RfpmMyng.js";import"./index-71yw2hYF.js";import"./index-Cf-CwZ9y.js";import"./index-BC4UKXW_.js";import"./index-C6PL8mjV.js";import"./index-hTbK6lay.js";import"./index-BnbJOCzs.js";import"./index-eyHDLC5v.js";import"./index-CE4V37Zw.js";import"./Label-C0TlDhz9.js";function l(n){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
`,e.jsx(s.h1,{id:"radiogroup",children:"RadioGroup"}),`
`,e.jsx(d,{of:r}),`
`,e.jsxs(o,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a radio group and how to write and arrange its options. Adapted from the"," ",e.jsx(s.a,{href:"https://designsystem.digital.gov/components/radio-buttons/",children:"USWDS radio buttons guidance"}),"."]}),title:"Guidance",children:[e.jsx(i,{id:"when-to-use",children:"When to use"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"To let users choose exactly one option from a short list"}),`, such as a shipping speed or a
payment method. Every option is visible at once, so users can compare them before choosing.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When the options rule each other out."})," Choosing one clears the one chosen before."]}),`
`]}),e.jsx(i,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"More than one option can be chosen:"}),` use a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-checkboxgroup--docs",children:"CheckboxGroup"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A single yes-or-no choice"}),`, such as accepting terms: use one
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-checkbox--docs",children:"Checkbox"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Users may need to choose nothing:"}),` once a radio is selected, it can't be cleared. Use
checkboxes, or add an option such as "None of the above".`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A long list, or little space:"})," consider a ",e.jsx(s.a,{href:"?path=/docs/inputs-forms-select--docs",children:"Select"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A setting that takes effect immediately"}),`, such as turning notifications on: use a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-switch--docs",children:"Switch"}),"."]}),`
`]}),e.jsx(i,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Name the group."}),` Ask the question the options answer, such as "How should we contact you?".
See `,e.jsx(s.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"List options vertically."})," Keep the default ",e.jsx(s.code,{children:'orientation="vertical"'}),`: in a row, it's harder to
tell which label goes with which circle. Use `,e.jsx(s.code,{children:"columns"})," to spread a long list across columns."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Make the labels selectable."}),` Clicking an option's label selects it in a group built from
`,e.jsx(s.code,{children:"options"}),". ",e.jsx(s.code,{children:"Radio"})," children need an ",e.jsx(s.code,{children:"id"}),` for this (see
`,e.jsx(s.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Preselect an option only when you have a reason to"}),`, such as data showing most users choose
it. A default can nudge users toward an answer, and once a radio is selected, users can't go
back to having none.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Order options logically"}),", such as by how often they're chosen, or alphabetically."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Give touch users large enough targets."})," The ",e.jsx(s.code,{children:"tile"})," style makes the whole card clickable."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use one style per group."})," Don't mix ",e.jsx(s.code,{children:"default"})," and ",e.jsx(s.code,{children:"tile"}),` radios. A group built from
`,e.jsx(s.code,{children:"options"})," already uses one style for every option."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Use the ",e.jsx(s.code,{children:"button"})," style only for short options"]}),`, such as a view switcher in a toolbar, and see
`,e.jsx(s.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"})," before you choose it."]}),`
`]})]}),`
`,e.jsxs(o,{id:"try-it",intro:"Change the values below to see how the radio group responds.",title:"Try it",children:[e.jsx(h,{of:t}),e.jsx(p,{of:t})]}),`
`,e.jsx(o,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(u,{})}),`
`,e.jsxs(o,{id:"accessibility",intro:"What the group handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(i,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"It's a radio group to assistive technology"})," (",e.jsx(s.code,{children:'role="radiogroup"'}),`), and each option is a radio
(`,e.jsx(s.code,{children:'role="radio"'})," with ",e.jsx(s.code,{children:"aria-checked"}),"), named by its label through ",e.jsx(s.code,{children:"aria-labelledby"}),`. An option's
`,e.jsx(s.code,{children:"description"})," is linked with ",e.jsx(s.code,{children:"aria-describedby"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keyboard:"}),` the group is a single Tab stop. Tab moves focus to the selected radio, or to the
first one when none is selected, and Tab again leaves the group. The arrow keys move to the next
or previous radio and select it, wrapping at the ends. Space selects the focused radio.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Each option gets a unique id"}),", built from the group's ",e.jsx(s.code,{children:"id"})," and the option's ",e.jsx(s.code,{children:"value"}),`, so its
label is linked to it and clicking the label selects it.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Disabled options stay focusable"})," and are marked ",e.jsx(s.code,{children:"aria-disabled"}),`, so screen reader users can
still find them and hear that they're unavailable. Clicks and Space don't select them (but see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/216",rel:"nofollow",children:"#216"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"required"})," sets ",e.jsx(s.code,{children:"aria-required"})]})," on the group, so screen readers announce it."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast:"}),` the unselected circle's border is 4.8:1 against white and the selected circle 6.7:1,
above the 3:1 that WCAG requires for form controls.`]}),`
`]}),e.jsx(i,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Name the group."})," The group has the ",e.jsx(s.code,{children:"radiogroup"}),` role but no name unless you give it one, so
screen readers announce each option without the question it answers. Wrap it in a `,e.jsx(s.code,{children:"fieldset"}),`
with a `,e.jsx(s.code,{children:"legend"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<fieldset>
  <legend>How should we contact you?</legend>
  <RadioGroup onChange={setContact} options={contactOptions} value={contact} />
</fieldset>
`})}),`
`,e.jsxs(s.p,{children:["Or pass ",e.jsx(s.code,{children:"aria-labelledby"})," pointing to a visible heading, or ",e.jsx(s.code,{children:"aria-label"}),"."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Give each group a different ",e.jsx(s.code,{children:"id"})]}),` when two groups on a page share option values, so their
radios don't get the same ids.`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Show requirements and errors yourself."})," ",e.jsx(s.code,{children:"required"}),` only reaches screen reader users, so put
the requirement in the legend text too, such as "(required)". The group has no error prop: put
the error text next to the group and link it to the group with `,e.jsx(s.code,{children:"aria-describedby"}),"."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Pass an ",e.jsx(s.code,{children:"id"})," to ",e.jsx(s.code,{children:"Radio"})," children."]}),` Without one, clicking a child's label doesn't select it
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/200",rel:"nofollow",children:"#200"}),"). Groups built from ",e.jsx(s.code,{children:"options"}),` aren't
affected.`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Avoid disabled options where you can."}),` Leave out an option that doesn't apply, or say in its
`,e.jsx(s.code,{children:"description"}),` why it's unavailable. For now, the arrow keys get stuck on a disabled radio, and
keyboard users can only leave it with Tab
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/216",rel:"nofollow",children:"#216"}),")."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Prefer the ",e.jsx(s.code,{children:"default"})," style where keyboard users need to see focus."]})," For now, the ",e.jsx(s.code,{children:"tile"}),` and
`,e.jsx(s.code,{children:"button"}),` styles show no focus indicator
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/198",rel:"nofollow",children:"#198"}),")."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Avoid the ",e.jsx(s.code,{children:"button"})," style where users rely on Windows High Contrast mode."]}),` Its selected state
is shown by color only, and doesn't show at all in that mode
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/199",rel:"nofollow",children:"#199"}),")."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(s.a,{href:"https://designsystem.digital.gov/components/radio-buttons/accessibility-tests/",rel:"nofollow",children:"USWDS radio buttons accessibility tests"}),`
on your own form, including a screen reader pass: these checks can't cover your labels and
layout.`]}),`
`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+%28in%3Atitle+Radio+OR+in%3Atitle+RadioGroup%29",rel:"nofollow",children:"all open accessibility issues for Radio and RadioGroup"}),"."]})]}),`
`,e.jsx(o,{id:"api-reference",intro:"Each component's props, as declared in Vero's types. Standard HTML attributes and Radix props aren't listed.",title:"API reference",children:e.jsx(x,{components:[j,g]})})]})}function Q(n={}){const{wrapper:s}={...c(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{Q as default};
