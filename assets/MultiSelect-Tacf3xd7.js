import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as c}from"./index-DL7Mpk60.js";import{M as h,D as a,C as d,a as p}from"./index-Dwd4rZEB.js";import{D as o,a as n,b as x,A as m}from"./DocsLayout-CUwxVCnV.js";import{M as u}from"./MultiSelect-BOoBGzfy.js";import{M as i,P as r}from"./MultiSelect.stories-CzkrWrq_.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFC7Cztk.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./useAriaDisabled-BVkOu7OW.js";import"./styles-DnVuGKPq.js";import"./utils-DrFeXHBK.js";import"./index-Cu56kmkr.js";import"./index-Cf-CwZ9y.js";import"./index-Cg8zIP29.js";import"./index-71yw2hYF.js";import"./index-BnbJOCzs.js";import"./index-eyHDLC5v.js";import"./constants-jTWlLmnl.js";import"./index-CBgW3S2s.js";import"./CommandItem-8D5J7EVq.js";import"./createLucideIcon-BeEkWZrd.js";import"./index-C8pZe9g5.js";import"./index-hTbK6lay.js";import"./index-CrHxJ1tp.js";import"./index-ByqrEM_-.js";import"./index-CE4V37Zw.js";import"./CommandGroup-B7DCbNMb.js";import"./CommandList-Zx6pNQH3.js";import"./Popover-BuTVlq4x.js";import"./chevrons-up-down-CPJXHd7n.js";import"./check-C42IfL-F.js";import"./x-DEnjg7Le.js";function l(t){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:i}),`
`,e.jsx(s.h1,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsx(a,{of:i}),`
`,e.jsxs(o,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a multi-select and which of Vero's other list inputs to use instead. USWDS has no multi-select component, and its"," ",e.jsx(s.a,{href:"https://designsystem.digital.gov/components/select/",children:"select guidance"})," recommends checkboxes for choosing several options, so this guidance is written for Vero."]}),title:"Guidance",children:[e.jsx(n,{id:"when-to-use",children:"When to use"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"To choose several options from a long list"}),`, more than about 15, where checkboxes would take
up too much space, such as tagging a record with topics.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When users know what they're looking for"})," and can find it by typing."]}),`
`]}),e.jsx(n,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A short list:"})," use a ",e.jsx(s.a,{href:"?path=/docs/inputs-forms-checkboxgroup--docs",children:"CheckboxGroup"}),`. Every
option is visible, checkboxes are familiar, and it's better supported by screen readers (see
`,e.jsx(s.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Only one option can be chosen:"})," use a ",e.jsx(s.a,{href:"?path=/docs/inputs-forms-select--docs",children:"Select"}),` for up
to about 15 options, or `,e.jsx(s.a,{href:"?path=/docs/data-display-autocomplete--docs",children:"Autocomplete"}),` or
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-combobox--docs",children:"Combobox"})," for a longer list."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Options come from a server as the user types:"}),` MultiSelect needs every option up front.
Autocomplete can fetch options, but chooses only one.`]}),`
`]}),e.jsx(n,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Say that more than one can be chosen."}),' Add "Select all that apply" to the label or hint text.']}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Make each option's ",e.jsx(s.code,{children:"value"})," contain its label."]}),` The search matches values, not labels
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/249",rel:"nofollow",children:"#249"}),"), so with ",e.jsx(s.code,{children:"value: 'mx'"}),` and
`,e.jsx(s.code,{children:"label: 'Mexico'"}),', typing "Mexico" finds nothing. Values such as ',e.jsx(s.code,{children:"'mexico'"})," work."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep option labels short."}),` Each chosen option shows as a chip on the trigger, and the trigger
grows as chips wrap.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Order options logically"}),", such as alphabetically or by how often they're chosen."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Word the search for your data."})," Set ",e.jsx(s.code,{children:"searchPlaceholder"})," and ",e.jsx(s.code,{children:"emptyMessage"}),`, such as "Search
topics" and "No topics found".`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Check limits yourself."}),` If users must choose at least one, or no more than a few, check on
submit and say so in the label.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Don't act on a change."}),` The list stays open as options are chosen. Wait for a submit button
before doing anything with the values.`]}),`
`]})]}),`
`,e.jsxs(o,{id:"try-it",intro:"Change the values below to see how the multi-select responds.",title:"Try it",children:[e.jsx(d,{of:r}),e.jsx(p,{of:r})]}),`
`,e.jsx(o,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(x,{})}),`
`,e.jsxs(o,{id:"accessibility",intro:"What the multi-select handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(n,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The trigger is a button"})," (",e.jsx(s.code,{children:'role="button"'}),") with ",e.jsx(s.code,{children:"aria-expanded"})," and ",e.jsx(s.code,{children:"aria-haspopup"}),`. It opens
a popover with a search field and a list. The search field follows the
`,e.jsx(s.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",rel:"nofollow",children:"WAI-ARIA combobox pattern"}),": a ",e.jsx(s.code,{children:"combobox"}),`
that controls a `,e.jsx(s.code,{children:"listbox"})," of ",e.jsx(s.code,{children:"option"}),"s, with ",e.jsx(s.code,{children:"aria-activedescendant"})," on the highlighted option."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keyboard:"}),` Enter or Space opens the list and moves focus to the search field. Typing filters
the list, and Up and Down Arrow move the highlight. Enter chooses or unchooses the highlighted
option and keeps the list open. Escape or Tab closes it and returns focus to the trigger.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Each chip has a remove button"}),`, named "Remove" and the option's label. Tab reaches it, and
Enter or Space removes the option. Focus then moves to the next chip, or to the trigger when
none is left.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When disabled the trigger stays focusable"})," and is marked ",e.jsx(s.code,{children:"aria-disabled"}),`, so screen reader
users can still find it. Clicks, Enter, Space and the arrow keys don't open it.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Focus is visible"}),` on the trigger and on each remove button, including in Windows High
Contrast mode.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast:"}),` the trigger's border is 6.7:1 against white, chip text 13.8:1 and the remove icon
3.1:1 against the chip. A chosen option's box is 6.7:1.`]}),`
`]}),e.jsx(n,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Name it with ",e.jsx(s.code,{children:"aria-labelledby"}),"."]})," The trigger isn't a ",e.jsx(s.code,{children:"<button>"}),", so a ",e.jsx(s.code,{children:"<label htmlFor>"}),` can't
name it (`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/248",rel:"nofollow",children:"#248"}),"). Point ",e.jsx(s.code,{children:"aria-labelledby"}),` at the
label's id. `,e.jsx(s.code,{children:"FormItem"})," gives a string label the id ",e.jsx(s.code,{children:"form-item-{id}-label"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<FormItem hintText="Select all that apply." label="Topics">
  <MultiSelect
    aria-labelledby="form-item-topics-label"
    id="topics"
    onChange={setTopics}
    options={topics}
    value={selected}
  />
</FormItem>
`})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Prefer a CheckboxGroup where screen reader users are a priority."}),` For now, the search field
has no accessible name (`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/246",rel:"nofollow",children:"#246"}),`), the list doesn't
say which options are chosen (`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/247",rel:"nofollow",children:"#247"}),`), and the
remove buttons are nested inside the trigger, where some screen readers may not reach them
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/248",rel:"nofollow",children:"#248"}),")."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Validate a required multi-select yourself."})," ",e.jsx(s.code,{children:"required"}),` doesn't stop the form from submitting,
and the trigger isn't marked required
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/245",rel:"nofollow",children:"#245"}),`). Show the requirement in the label, check
the value on submit, and show the error with `,e.jsx(s.code,{children:"FormItem"}),"'s ",e.jsx(s.code,{children:"errorText"}),`, which sets
`,e.jsx(s.code,{children:"aria-describedby"})," and ",e.jsx(s.code,{children:"aria-invalid"}),"."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Ignore changes while disabled."}),` For now, keyboard users can still remove chips from a disabled
multi-select (`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/250",rel:"nofollow",children:"#250"}),`), so don't update your state
in `,e.jsx(s.code,{children:"onChange"})," while ",e.jsx(s.code,{children:"isDisabled"})," is set."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Expect weak cues in the list."}),` For now, the empty boxes next to unchosen options are 2.3:1
against white, below the 3:1 WCAG requires
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/251",rel:"nofollow",children:"#251"}),`), and the highlighted option looks the same
as the others in Windows High Contrast mode
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/252",rel:"nofollow",children:"#252"}),")."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Test it in your page,"}),` with the keyboard and a screen reader. USWDS has no multi-select, so
there are no USWDS accessibility tests to follow; the
`,e.jsx(s.a,{href:"https://designsystem.digital.gov/components/combo-box/accessibility-tests/",rel:"nofollow",children:"USWDS combo box accessibility tests"}),`
cover most of the same ground.`]}),`
`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+MultiSelect",rel:"nofollow",children:"all open accessibility issues for MultiSelect"}),"."]})]}),`
`,e.jsx(o,{id:"api-reference",intro:"The props declared in Vero's types. Standard HTML attributes aren't listed.",title:"API reference",children:e.jsx(m,{of:u})})]})}function $(t={}){const{wrapper:s}={...c(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(l,{...t})}):l(t)}export{$ as default};
