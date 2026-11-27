import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as h}from"./index-DL7Mpk60.js";import{M as c,D as a,C as d,a as p}from"./index-AIFAtT5C.js";import{D as n,a as i,b as x,A as m}from"./DocsLayout-CGJ2GL3I.js";import{C as j}from"./Combobox-BFQTSsZP.js";import{C as t,P as r}from"./Combobox.stories-DfkH9dUX.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-G2KODbDz.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./Button-DJBoR_IJ.js";import"./useAriaDisabled-BVkOu7OW.js";import"./utils-DrFeXHBK.js";import"./index-Cg8zIP29.js";import"./constants-jTWlLmnl.js";import"./styles-DnVuGKPq.js";import"./index-CBgW3S2s.js";import"./createLucideIcon-BeEkWZrd.js";import"./CommandItem-8D5J7EVq.js";import"./index-Cf-CwZ9y.js";import"./index-C8pZe9g5.js";import"./index-71yw2hYF.js";import"./index-hTbK6lay.js";import"./index-CrHxJ1tp.js";import"./index-BnbJOCzs.js";import"./index-ByqrEM_-.js";import"./index-CE4V37Zw.js";import"./CommandGroup-B7DCbNMb.js";import"./CommandList-Zx6pNQH3.js";import"./Popover-BuTVlq4x.js";import"./index-Cu56kmkr.js";import"./index-eyHDLC5v.js";import"./chevrons-up-down-CPJXHd7n.js";import"./check-C42IfL-F.js";function l(o){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...h(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:t}),`
`,e.jsx(s.h1,{id:"combobox",children:"Combobox"}),`
`,e.jsx(a,{of:t}),`
`,e.jsxs(n,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a combobox, which of Vero's other list inputs to use instead, and how to set one up. Adapted from the"," ",e.jsx(s.a,{href:"https://designsystem.digital.gov/components/combo-box/",children:"USWDS combo box guidance"}),"."]}),title:"Guidance",children:[e.jsx(i,{id:"when-to-use",children:"When to use"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"To choose one option from a long list"}),`, more than about 15, where typing a few letters is
faster than scrolling, such as a country or a state.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When space is limited"})," and the list is too long for radio buttons."]}),`
`]}),e.jsx(i,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Screen reader users are a priority:"}),` prefer
`,e.jsx(s.a,{href:"?path=/docs/data-display-autocomplete--docs",children:"Autocomplete"})," with a static ",e.jsx(s.code,{children:"options"}),` list. It
searches the same way, and it reads back the chosen option and the number of matches, which
Combobox doesn't yet do (see `,e.jsx(s.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"}),`). USWDS
also found problems with combo boxes in testing with assistive technology users, and suggests a
select for now.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Options come from a server"}),`, or need custom rendering such as a name with an email address:
use `,e.jsx(s.a,{href:"?path=/docs/data-display-autocomplete--docs",children:"Autocomplete"}),", with ",e.jsx(s.code,{children:"loadOptions"}),` and
`,e.jsx(s.code,{children:"renderOption"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"About 7 to 15 options:"})," use a ",e.jsx(s.a,{href:"?path=/docs/inputs-forms-select--docs",children:"Select"}),`. Fewer than
seven: use a `,e.jsx(s.a,{href:"?path=/docs/inputs-forms-radiogroup--docs",children:"RadioGroup"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"More than one option can be chosen:"}),` use a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-multiselect--docs",children:"MultiSelect"}),`, or a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-checkboxgroup--docs",children:"CheckboxGroup"})," for a short list."]}),`
`]}),e.jsx(i,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Give it a visible label."})," The placeholder on the trigger disappears once an option is chosen."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use option labels users will type."})," The search matches each option's ",e.jsx(s.code,{children:"label"})," and ",e.jsx(s.code,{children:"value"}),`, so
include familiar alternatives, such as "District of Columbia (DC)". Use `,e.jsx(s.code,{children:"filter"}),` for anything
more.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Word the search for your data."})," Set ",e.jsx(s.code,{children:"searchPlaceholder"})," and ",e.jsx(s.code,{children:"emptyMessage"}),`, such as "Search
countries" and "No countries found", instead of the generic defaults.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Choosing the chosen option again clears it"}),", and calls ",e.jsx(s.code,{children:"onChange"})," with ",e.jsx(s.code,{children:"''"}),`. If a value is
required, check for it.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use a good default."})," If most users choose the same option, pass it as the ",e.jsx(s.code,{children:"value"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Don't act on a change."}),` Don't submit the form or go to another page when an option is chosen.
Use a submit button.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Avoid dependent options."})," Don't change one field's options based on another field."]}),`
`]})]}),`
`,e.jsxs(n,{id:"try-it",intro:"Change the values below to see how the combobox responds.",title:"Try it",children:[e.jsx(d,{of:r}),e.jsx(p,{of:r})]}),`
`,e.jsx(n,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(x,{})}),`
`,e.jsxs(n,{id:"accessibility",intro:"What the combobox handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(i,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The trigger is a button"})," with ",e.jsx(s.code,{children:"aria-expanded"})," and ",e.jsx(s.code,{children:"aria-haspopup"}),`. It opens a popover with a
search field and a list. The search field follows the
`,e.jsx(s.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",rel:"nofollow",children:"WAI-ARIA combobox pattern"}),": a ",e.jsx(s.code,{children:"combobox"}),`
that controls a `,e.jsx(s.code,{children:"listbox"})," of ",e.jsx(s.code,{children:"option"}),"s, with ",e.jsx(s.code,{children:"aria-activedescendant"})," on the highlighted option."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keyboard:"}),` Enter or Space opens the list and moves focus to the search field. Typing filters
the list, and Up and Down Arrow move the highlight. Enter chooses the highlighted option, closes
the list and returns focus to the trigger. Escape closes it without a change and returns focus
to the trigger. Down Arrow on the trigger doesn't open the list.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["A ",e.jsx(s.code,{children:"<label>"})," names it."]})," Give the combobox an ",e.jsx(s.code,{children:"id"})," and point a ",e.jsx(s.code,{children:"FormItem"})," or a ",e.jsx(s.code,{children:"<label htmlFor>"}),`
at it. `,e.jsx(s.code,{children:"FormItem"}),"'s ",e.jsx(s.code,{children:"aria-describedby"})," is added to any you pass."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When disabled it stays focusable"})," and is marked ",e.jsx(s.code,{children:"aria-disabled"}),`, so screen reader users can
still find it. Clicks, Enter, Space and the arrow keys don't open it.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Focus is visible:"})," a ring around the trigger, and an outline in Windows High Contrast mode."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast:"}),` the trigger's border is 6.7:1 against white and the placeholder text 5.3:1. The
highlighted option's text is 5.1:1 against its background.`]}),`
`]}),e.jsx(i,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Always give it a visible label"}),", with ",e.jsx(s.code,{children:"FormItem"})," or a ",e.jsx(s.code,{children:"<label htmlFor>"}),", and an ",e.jsx(s.code,{children:"id"}),` on the
combobox.`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Know what screen reader users miss."})," For now:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`with a label, the trigger's name is just the label, so the chosen option isn't read
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/244",rel:"nofollow",children:"#244"}),");"]}),`
`,e.jsxs(s.li,{children:[`the search field has no accessible name
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/246",rel:"nofollow",children:"#246"}),");"]}),`
`,e.jsxs(s.li,{children:[`the list doesn't say which option is chosen
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/247",rel:"nofollow",children:"#247"}),")."]}),`
`]}),`
`,e.jsx(s.p,{children:"Where screen reader users are a priority, prefer Autocomplete or Select."}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Validate a required combobox yourself."})," ",e.jsx(s.code,{children:"required"}),` doesn't stop the form from submitting, and
the trigger isn't marked required
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/245",rel:"nofollow",children:"#245"}),`). Show the requirement in the label, check
the value on submit, and show the error with `,e.jsx(s.code,{children:"FormItem"}),"'s ",e.jsx(s.code,{children:"errorText"}),`, which sets
`,e.jsx(s.code,{children:"aria-describedby"})," and ",e.jsx(s.code,{children:"aria-invalid"}),"."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Tell keyboard users how to leave the list"}),` if they're likely to be new to it. For now, Tab
doesn't close the open list or move on; Escape or choosing an option does
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/253",rel:"nofollow",children:"#253"}),")."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Expect no visible highlight in Windows High Contrast mode."}),` For now, the highlighted option
looks the same as the others in that mode
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/252",rel:"nofollow",children:"#252"}),")."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(s.a,{href:"https://designsystem.digital.gov/components/combo-box/accessibility-tests/",rel:"nofollow",children:"USWDS combo box accessibility tests"}),`
on your own form, including a screen reader pass.`]}),`
`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+Combobox",rel:"nofollow",children:"all open accessibility issues for Combobox"}),"."]})]}),`
`,e.jsx(n,{id:"api-reference",intro:"The props declared in Vero's types. Standard HTML attributes aren't listed.",title:"API reference",children:e.jsx(m,{of:j})})]})}function $(o={}){const{wrapper:s}={...h(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(l,{...o})}):l(o)}export{$ as default};
