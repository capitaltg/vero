import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as h}from"./index-DL7Mpk60.js";import{M as a,D as d,C as x,a as p}from"./index-CMjXWZPS.js";import{D as u,a as o,b as j,c as t,d as i,e as g,f as m}from"./DocsLayout-CEYntYd9.js";import{C as b}from"./CheckboxGroup-Cq7LeKgv.js";import{C as r,P as c}from"./CheckboxGroup.stories-CIMWDQsX.js";import{C as f}from"./Checkbox-DKYTaitW.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C7Tx3m9I.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./utils-DrFeXHBK.js";import"./createLucideIcon-BeEkWZrd.js";import"./x-DEnjg7Le.js";import"./check-C42IfL-F.js";import"./useFormGroupLayout-ZWE7ybff.js";import"./Button-DJBoR_IJ.js";import"./useAriaDisabled-BVkOu7OW.js";import"./index-Cg8zIP29.js";import"./constants-jTWlLmnl.js";import"./styles-DnVuGKPq.js";import"./index-CBgW3S2s.js";import"./form-controls-UvU-3cIH.js";import"./useAriaLabelled-RfpmMyng.js";import"./index-71yw2hYF.js";import"./index-eyHDLC5v.js";import"./index-CE4V37Zw.js";import"./index-Cf-CwZ9y.js";import"./graphic-DRi997Gx.js";import"./Label-C0TlDhz9.js";function l(n){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
`,e.jsx(s.h1,{id:"checkboxgroup",children:"CheckboxGroup"}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(u,{}),`
`,e.jsxs(o,{id:"try-it",intro:"Change the values below to see how the checkbox group responds.",title:"Try it",children:[e.jsx(x,{of:c}),e.jsx(p,{of:c})]}),`
`,e.jsxs(o,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a checkbox group and how to write and arrange its options. Adapted from the"," ",e.jsx(s.a,{href:"https://designsystem.digital.gov/components/checkbox/",children:"USWDS checkbox guidance"}),"."]}),title:"Guidance",variant:"guidance",children:[e.jsxs(j,{children:[e.jsx(t,{kind:"use",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"To let users choose any number of options from a list"}),`, including none. Checkboxes show
what's selected at a glance, and each one is easy to uncheck.`]}),`
`,e.jsxs(s.li,{children:[`For a single yes-or-no choice, such as accepting terms, use one
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-checkbox--docs",children:"Checkbox"})," on its own."]}),`
`]})}),e.jsx(t,{kind:"avoid",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Only one option can be chosen:"})," use a ",e.jsx(s.a,{href:"?path=/docs/inputs-forms-radiogroup--docs",children:"RadioGroup"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A setting that takes effect immediately"}),`, such as turning notifications on or off: use a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-switchgroup--docs",children:"SwitchGroup"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A long list"}),`, where checkboxes would take up too much space: consider a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-multiselect--docs",children:"MultiSelect"}),"."]}),`
`]})})]}),e.jsx(i,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Name the group."}),` Say what the options are for, and add "Select all that apply" so it's clear
that more than one can be chosen. See `,e.jsx(s.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"List options vertically."})," Keep the default ",e.jsx(s.code,{children:'orientation="vertical"'}),`: in a row, it's harder to
tell which label goes with which box. Use `,e.jsx(s.code,{children:"columns"})," to spread a long list across columns."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use positive statements."}),` Write "Email me about new features", not "Don't email me about new
features". Checking a box to turn something off is confusing.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Make each label clear when checked and when unchecked."}),` If a label can't do both, use two
radio buttons with their own labels instead.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Order options logically"}),", such as by how often they're chosen, or alphabetically."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Give touch users large enough targets."})," The ",e.jsx(s.code,{children:"tile"})," style makes the whole card clickable."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use one style per group."})," Don't mix ",e.jsx(s.code,{children:"default"})," and ",e.jsx(s.code,{children:"tile"}),` checkboxes: a few tiles among plain
checkboxes can look like recommended options. A group built from `,e.jsx(s.code,{children:"options"}),` already uses one
style for every option.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Use the ",e.jsx(s.code,{children:"button"})," style only for short options"]}),`, such as filters in a compact toolbar, and see
`,e.jsx(s.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"})," before you choose it."]}),`
`]})]}),`
`,e.jsx(o,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(g,{})}),`
`,e.jsxs(o,{id:"accessibility",intro:"What the group handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(i,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Each option is a checkbox to assistive technology"})," (",e.jsx(s.code,{children:'role="checkbox"'})," with ",e.jsx(s.code,{children:"aria-checked"}),`),
named by its label through `,e.jsx(s.code,{children:"aria-labelledby"}),". Its ",e.jsx(s.code,{children:"description"}),` is linked with
`,e.jsx(s.code,{children:"aria-describedby"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keyboard:"}),` Tab and Shift+Tab move between options, and Space checks or unchecks the focused
one, as with native checkboxes.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Each option gets a unique id"}),", built from the group's ",e.jsx(s.code,{children:"id"})," and the option's ",e.jsx(s.code,{children:"id"}),`, so its label
is linked to it and clicking the label toggles it.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Disabled options stay focusable"})," and are marked ",e.jsx(s.code,{children:"aria-disabled"}),`, so screen reader users can
still find them and hear that they're unavailable. Clicks and Space don't change them.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast:"}),` the unchecked box's border is 4.8:1 against white and the checked fill 7.1:1, above
the 3:1 that WCAG requires for form controls.`]}),`
`]}),e.jsx(i,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Name the group."})," The group renders a plain ",e.jsx(s.code,{children:"div"}),` with no role or name
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/161",rel:"nofollow",children:"#161"}),`), so screen readers announce each option
without the question it answers. Wrap it in a `,e.jsx(s.code,{children:"fieldset"})," with a ",e.jsx(s.code,{children:"legend"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<fieldset>
  <legend>Which topics interest you? Select all that apply.</legend>
  <CheckboxGroup onChange={setTopics} options={topics} value={selected} />
</fieldset>
`})}),`
`,e.jsxs(s.p,{children:["Or pass ",e.jsx(s.code,{children:'role="group"'})," and ",e.jsx(s.code,{children:"aria-labelledby"})," pointing to a visible heading."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Give each group a different ",e.jsx(s.code,{children:"id"})]}),` when two groups on a page share option ids, so their
checkboxes don't get the same ids.`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Show requirements and errors yourself."})," The group has no ",e.jsx(s.code,{children:"required"}),` or error props. Put the
requirement in the legend text, and link any error message to the group with
`,e.jsx(s.code,{children:"aria-describedby"}),"."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Pass an ",e.jsx(s.code,{children:"id"})," to ",e.jsx(s.code,{children:"Checkbox"})," children."]}),` Without one, clicking a child's label doesn't toggle it
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/200",rel:"nofollow",children:"#200"}),"). Groups built from ",e.jsx(s.code,{children:"options"}),` aren't
affected.`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Prefer the ",e.jsx(s.code,{children:"default"})," style where keyboard users need to see focus."]})," For now, the ",e.jsx(s.code,{children:"tile"}),` and
`,e.jsx(s.code,{children:"button"}),` styles show no focus indicator
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/198",rel:"nofollow",children:"#198"}),")."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Avoid the ",e.jsx(s.code,{children:"button"})," style where users rely on Windows High Contrast mode."]}),` Its checked state is
shown by color only, and doesn't show at all in that mode
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/199",rel:"nofollow",children:"#199"}),")."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(s.a,{href:"https://designsystem.digital.gov/components/checkbox/accessibility-tests/",rel:"nofollow",children:"USWDS checkbox accessibility tests"}),`
on your own form, including a screen reader pass: these checks can't cover your labels and
layout.`]}),`
`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+%28in%3Atitle+Checkbox+OR+in%3Atitle+CheckboxGroup%29",rel:"nofollow",children:"all open accessibility issues for Checkbox and CheckboxGroup"}),"."]})]}),`
`,e.jsx(o,{id:"api-reference",intro:"Each component's props, as declared in Vero's types. Standard HTML attributes and Radix props aren't listed.",title:"API reference",children:e.jsx(m,{components:[b,f]})})]})}function $(n={}){const{wrapper:s}={...h(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{$ as default};
