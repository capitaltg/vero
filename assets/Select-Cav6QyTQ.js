import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as c}from"./index-DL7Mpk60.js";import{M as d,D as h,C as p,a as x}from"./index-CMjXWZPS.js";import{D as j,a as t,b as u,c as o,d as i,e as m,f as g}from"./DocsLayout-CEYntYd9.js";import{S as b,a as f,b as y,c as w,d as S,e as v}from"./Select-VIvb_Gvi.js";import{S as r,P as l}from"./Select.stories-DQ9uXMnJ.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C7Tx3m9I.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./utils-DrFeXHBK.js";import"./createLucideIcon-BeEkWZrd.js";import"./x-DEnjg7Le.js";import"./check-C42IfL-F.js";import"./index-Cu56kmkr.js";import"./index-Cf-CwZ9y.js";import"./index-Cg8zIP29.js";import"./index-71yw2hYF.js";import"./index-BnbJOCzs.js";import"./index-eyHDLC5v.js";import"./index-C6PL8mjV.js";import"./index-CrHxJ1tp.js";import"./index-ByqrEM_-.js";import"./index-hTbK6lay.js";import"./index-CE4V37Zw.js";import"./index-C0VaYEPT.js";import"./useAriaDisabled-BVkOu7OW.js";import"./styles-DnVuGKPq.js";import"./chevron-down-CLkoBCE4.js";function a(n){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r}),`
`,e.jsx(s.h1,{id:"select",children:"Select"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(j,{}),`
`,e.jsxs(t,{id:"try-it",intro:"Change the values below to see how the select responds.",title:"Try it",children:[e.jsx(p,{of:l}),e.jsx(x,{of:l})]}),`
`,e.jsxs(t,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a select, which of Vero's other list inputs to use instead, and how to set one up. Adapted from the"," ",e.jsx(s.a,{href:"https://designsystem.digital.gov/components/select/",children:"USWDS select guidance"}),"."]}),title:"Guidance",variant:"guidance",children:[e.jsxs(u,{children:[e.jsx(o,{kind:"use",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"To choose one option from a list of about 7 to 15"}),", when there isn't room to show them all."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use it sparingly."}),` A select hides its options until it's opened, and many users find it
harder to use than a list of radio buttons.`]}),`
`]})}),e.jsx(o,{kind:"avoid",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Fewer than seven options:"})," use a ",e.jsx(s.a,{href:"?path=/docs/inputs-forms-radiogroup--docs",children:"RadioGroup"}),`, so
every option is visible.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"More than about 15 options"}),`, or users know what they're looking for: use an input they can
search. `,e.jsx(s.a,{href:"?path=/docs/data-display-autocomplete--docs",children:"Autocomplete"}),` searches a list you pass in,
or fetches options as the user types, and has the best screen reader support of the searchable
inputs. `,e.jsx(s.a,{href:"?path=/docs/inputs-forms-combobox--docs",children:"Combobox"})," takes the same ",e.jsx(s.code,{children:"value"})," and ",e.jsx(s.code,{children:"label"}),`
options as Select, but has more open accessibility issues.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"More than one option can be chosen:"}),` use a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-checkboxgroup--docs",children:"CheckboxGroup"}),`, or a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-multiselect--docs",children:"MultiSelect"})," for a long list."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Moving to another page:"}),` use links, such as the
`,e.jsx(s.a,{href:"?path=/docs/actions-navigation-navbar--docs",children:"Navbar"}),", not a select."]}),`
`]})})]}),e.jsx(i,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Give it a visible label."}),` Don't rely on the placeholder: "Select a state" disappears once a
state is chosen. See `,e.jsx(s.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Order options logically"}),", such as alphabetically or by how often they're chosen."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use a good default."})," If most users choose the same option, pass it as the ",e.jsx(s.code,{children:"value"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Don't act on a change."}),` Don't submit the form or go to another page when an option is chosen.
Users often change their choice, and screen reader users hear each option as they move through
the list. Use a submit button.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Avoid dependent options."})," Don't change one select's options based on another field."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep option labels short."})," A long label is cut off with an ellipsis in the trigger."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Group long lists"})," with ",e.jsx(s.code,{children:"SelectGroup"})," and ",e.jsx(s.code,{children:"SelectLabel"}),`, built from the parts, as in the From
Parts example.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Test it with your users."}),' Usability experts call the select the "UI of last resort".']}),`
`]})]}),`
`,e.jsx(t,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(m,{})}),`
`,e.jsxs(t,{id:"accessibility",intro:"What the select handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(i,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[`It follows the
`,e.jsx(s.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/",rel:"nofollow",children:"WAI-ARIA select-only combobox pattern"}),"."]}),`
The trigger is a `,e.jsx(s.code,{children:"combobox"})," with ",e.jsx(s.code,{children:"aria-expanded"})," and ",e.jsx(s.code,{children:"aria-controls"}),", and it opens a ",e.jsx(s.code,{children:"listbox"}),` of
`,e.jsx(s.code,{children:"option"}),"s. Screen readers announce the label and the chosen option separately."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keyboard:"}),` Enter, Space or Down Arrow opens the list. Up and Down Arrow move between options,
Home and End jump to the first and last, and typing jumps to a matching option. Enter chooses the
option, closes the list and returns focus to the trigger. Escape closes it without a change.
While the list is open, Tab stays in it.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["A ",e.jsx(s.code,{children:"<label>"})," names it."]})," Give the select an ",e.jsx(s.code,{children:"id"})," and point a ",e.jsx(s.code,{children:"FormItem"})," or a ",e.jsx(s.code,{children:"<label htmlFor>"}),`
at it. `,e.jsx(s.code,{children:"FormItem"}),"'s ",e.jsx(s.code,{children:"aria-describedby"})," is added to any you pass."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"required"})," works."]})," Inside a form, the select renders a hidden native ",e.jsx(s.code,{children:"<select required>"}),`, so
the browser blocks submission with no option chosen, and the trigger gets `,e.jsx(s.code,{children:"aria-required"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When disabled it stays focusable"})," and is marked ",e.jsx(s.code,{children:"aria-disabled"}),`, so screen reader users can
still find it. Clicks, Enter, Space and the arrow keys don't open it. (`,e.jsx(s.code,{children:"disabled"})," on ",e.jsx(s.code,{children:"SelectRoot"}),`
removes it from the tab order instead.)`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Focus is visible:"})," a ring around the trigger, and an outline in Windows High Contrast mode."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast:"}),` the trigger's border is 6.7:1 against white and the placeholder text 5.3:1. The
highlighted option's text is 5.1:1 against its background.`]}),`
`]}),e.jsx(i,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Always give it a visible label"}),", with ",e.jsx(s.code,{children:"FormItem"})," or a ",e.jsx(s.code,{children:"<label htmlFor>"}),", and an ",e.jsx(s.code,{children:"id"}),` on the
select. The placeholder isn't a label.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Mark a required select in two places."})," Pass ",e.jsx(s.code,{children:"required"}),`, and show the requirement in the label,
such as "(required)" or `,e.jsx(s.code,{children:"FormItem"}),"'s ",e.jsx(s.code,{children:"isRequired"}),". ",e.jsx(s.code,{children:"isRequired"}),` only adds an asterisk
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/211",rel:"nofollow",children:"#211"}),"), and ",e.jsx(s.code,{children:"required"}),` alone only reaches screen
reader users and the browser.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Link error messages"})," with ",e.jsx(s.code,{children:"FormItem"}),"'s ",e.jsx(s.code,{children:"errorText"}),", which sets ",e.jsx(s.code,{children:"aria-describedby"}),` and
`,e.jsx(s.code,{children:"aria-invalid"})," on the select."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Expect no clear highlight in Windows High Contrast mode."}),` For now, the highlighted option looks
almost the same as the others in that mode
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/252",rel:"nofollow",children:"#252"}),`). Where that matters and the list is short,
prefer a RadioGroup.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(s.a,{href:"https://designsystem.digital.gov/components/select/accessibility-tests/",rel:"nofollow",children:"USWDS select accessibility tests"}),`
on your own form, including a screen reader pass.`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+Select+NOT+selected+NOT+selects",rel:"nofollow",children:"all open accessibility issues for Select"}),"."]})]}),`
`,e.jsx(t,{id:"api-reference",intro:e.jsxs(e.Fragment,{children:["Each part's props, as declared in Vero's types. Props inherited from standard HTML attributes or Radix aren't listed; see the"," ",e.jsx(s.a,{href:"https://www.radix-ui.com/primitives/docs/components/select#api-reference",children:"Radix Select API reference"})," ","for those. Use ",e.jsx(s.code,{children:"Select"})," for a plain list of options. Use the parts, starting with"," ",e.jsx(s.code,{children:"SelectRoot"}),", when you need groups, labels, separators or disabled items, as in the From Parts example. With the parts, pass ",e.jsx(s.code,{children:"zIndex"})," to ",e.jsx(s.code,{children:"SelectContent"}),", which has no default (",e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/254",children:"#254"}),")."," ",e.jsx(s.code,{children:"SelectGroup"}),", ",e.jsx(s.code,{children:"SelectLabel"})," and ",e.jsx(s.code,{children:"SelectSeparator"})," take only standard HTML attributes, so they have no entry. ",e.jsx(s.code,{children:"SingleSelect"})," is an older name for ",e.jsx(s.code,{children:"Select"}),", kept so existing code still works; use ",e.jsx(s.code,{children:"Select"})," instead."]}),title:"API reference",children:e.jsx(g,{components:[b,f,y,w,S,v]})})]})}function ne(n={}){const{wrapper:s}={...c(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{ne as default};
