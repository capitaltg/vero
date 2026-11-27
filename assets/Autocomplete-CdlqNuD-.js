import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as h}from"./index-DL7Mpk60.js";import{M as a,D as c,C as d,a as p}from"./index-AIFAtT5C.js";import{D as n,a as t,b as x,A as u}from"./DocsLayout-CGJ2GL3I.js";import{A as m}from"./Autocomplete-ngdpsVt2.js";import{A as i,P as r}from"./Autocomplete.stories-TTFuyAj9.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-G2KODbDz.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./Button-DJBoR_IJ.js";import"./useAriaDisabled-BVkOu7OW.js";import"./utils-DrFeXHBK.js";import"./index-Cg8zIP29.js";import"./constants-jTWlLmnl.js";import"./styles-DnVuGKPq.js";import"./index-CBgW3S2s.js";import"./createLucideIcon-BeEkWZrd.js";import"./CommandItem-8D5J7EVq.js";import"./index-Cf-CwZ9y.js";import"./index-C8pZe9g5.js";import"./index-71yw2hYF.js";import"./index-hTbK6lay.js";import"./index-CrHxJ1tp.js";import"./index-BnbJOCzs.js";import"./index-ByqrEM_-.js";import"./index-CE4V37Zw.js";import"./CommandList-Zx6pNQH3.js";import"./Popover-BuTVlq4x.js";import"./index-Cu56kmkr.js";import"./index-eyHDLC5v.js";import"./check-C42IfL-F.js";import"./x-DEnjg7Le.js";import"./chevrons-up-down-CPJXHd7n.js";import"./index-D2Jrw3qQ.js";function l(o){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...h(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i}),`
`,e.jsx(s.h1,{id:"autocomplete",children:"Autocomplete"}),`
`,e.jsx(c,{of:i}),`
`,e.jsxs(n,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use an autocomplete, which of Vero's other list inputs to use instead, and how to set one up. Adapted from the"," ",e.jsx(s.a,{href:"https://designsystem.digital.gov/components/combo-box/",children:"USWDS combo box guidance"}),"."]}),title:"Guidance",children:[e.jsx(t,{id:"when-to-use",children:"When to use"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"To choose one option from a long list"}),`, more than about 15, where typing a few letters is
faster than scrolling.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When the options come from a server"}),`, such as searching for a person or a library. Pass
`,e.jsx(s.code,{children:"loadOptions"}),", and it fetches matches as the user types."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When options need more than a line of text"}),`, such as a name with an email address. Use
`,e.jsx(s.code,{children:"renderOption"})," and ",e.jsx(s.code,{children:"renderValue"}),"."]}),`
`]}),e.jsx(t,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"About 7 to 15 options:"})," use a ",e.jsx(s.a,{href:"?path=/docs/inputs-forms-select--docs",children:"Select"}),`. Fewer than
seven: use a `,e.jsx(s.a,{href:"?path=/docs/inputs-forms-radiogroup--docs",children:"RadioGroup"}),`. USWDS found problems with
combo boxes in testing with assistive technology users, and suggests a select where one will do.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["A static list of ",e.jsx(s.code,{children:"value"})," and ",e.jsx(s.code,{children:"label"})," options:"]}),`
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-combobox--docs",children:"Combobox"}),` takes them directly, but Autocomplete with
`,e.jsx(s.code,{children:"options"}),` reads back the chosen option and the number of matches to screen readers, which
Combobox doesn't yet do. Prefer Autocomplete where screen reader users are a priority.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"More than one option can be chosen:"}),` use a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-multiselect--docs",children:"MultiSelect"}),`, or a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-checkboxgroup--docs",children:"CheckboxGroup"})," for a short list."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The field asks for the user's own details"}),`, such as their name or country: use an
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-input--docs",children:"Input"})," with ",e.jsx(s.code,{children:"autoComplete"}),`, so browsers can fill it in
(see `,e.jsx(s.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"}),")."]}),`
`]}),e.jsx(t,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Give it a visible label."})," The placeholder on the trigger disappears once an option is chosen."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Pass ",e.jsx(s.code,{children:"getOptionValue"})," and ",e.jsx(s.code,{children:"getOptionLabel"}),"."]})," Without ",e.jsx(s.code,{children:"getOptionValue"}),`, every option's value is
an empty string. The search on static `,e.jsx(s.code,{children:"options"})," matches the label from ",e.jsx(s.code,{children:"getOptionLabel"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use option labels users will type"}),`, and include familiar alternatives, such as "District of
Columbia (DC)".`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Say how many letters start a search."})," With ",e.jsx(s.code,{children:"loadOptions"}),`, nothing is fetched until the user
types `,e.jsx(s.code,{children:"minSearch"}),` characters (2 by default). Say so in hint text, such as "Type at least 2
letters".`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Word the messages for your data."})," Set ",e.jsx(s.code,{children:"emptyMessage"}),", ",e.jsx(s.code,{children:"loadingMessage"})," and ",e.jsx(s.code,{children:"errorMessage"}),`,
such as "No libraries found". Only the first `,e.jsx(s.code,{children:"maxSuggestions"}),` matches (10 by default) are shown,
so a message such as "Type more to narrow the list" helps with large sets.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use a good default."})," If most users choose the same option, pass it as the ",e.jsx(s.code,{children:"value"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Don't act on a change."}),` Don't submit the form or go to another page when an option is chosen.
Use a submit button.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Avoid dependent options."})," Don't change one field's options based on another field."]}),`
`]})]}),`
`,e.jsxs(n,{id:"try-it",intro:"Change the values below to see how the autocomplete responds.",title:"Try it",children:[e.jsx(d,{of:r}),e.jsx(p,{of:r})]}),`
`,e.jsx(n,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(x,{})}),`
`,e.jsxs(n,{id:"accessibility",intro:"What the autocomplete handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(t,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The trigger is a button"})," with ",e.jsx(s.code,{children:"aria-expanded"})," and ",e.jsx(s.code,{children:'aria-haspopup="listbox"'}),`. It opens a
popover with a search field and a list. The search field follows the
`,e.jsx(s.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",rel:"nofollow",children:"WAI-ARIA combobox pattern"}),": a ",e.jsx(s.code,{children:"combobox"}),`
that controls a `,e.jsx(s.code,{children:"listbox"})," of ",e.jsx(s.code,{children:"option"}),"s, with ",e.jsx(s.code,{children:"aria-activedescendant"}),` on the highlighted option.
The search field is named by the `,e.jsx(s.code,{children:"placeholder"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The label and the chosen option are both read."})," With a ",e.jsx(s.code,{children:"FormItem"})," or ",e.jsx(s.code,{children:"<label htmlFor>"}),`, the
trigger's name is the label, the chosen option and "selected", such as "Country Mexico
selected". Your own `,e.jsx(s.code,{children:"aria-labelledby"})," is combined the same way."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Changes are announced."}),` A polite live region reads the number of matches and how to browse
them, the highlighted option, the chosen option, and the loading, empty and error messages. In
the list, the chosen option has hidden "(current selection)" text, and each option has its
position (`,e.jsx(s.code,{children:"aria-posinset"})," and ",e.jsx(s.code,{children:"aria-setsize"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keyboard:"}),` Enter, Space or Down Arrow opens the list and moves focus to the search field.
Up and Down Arrow move the highlight. Enter chooses the highlighted option, closes the list and
returns focus to the trigger. Escape closes it without a change. Delete or Backspace on the
trigger clears the value, and the Clear button returns focus to the trigger.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"FormItem"}),"'s ",e.jsx(s.code,{children:"aria-describedby"})]})," is added to any you pass."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When disabled it stays focusable"})," and is marked ",e.jsx(s.code,{children:"aria-disabled"}),`, so screen reader users can
still find it. Clicks, Enter, Space and the arrow keys don't open it.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Focus is visible:"})," a ring around the trigger, and an outline in Windows High Contrast mode."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast:"}),` the trigger's border is 6.7:1 against white and the placeholder text 5.3:1. The
highlighted option's text is 5.1:1 against its background.`]}),`
`]}),e.jsx(t,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Always give it a visible label"}),", with ",e.jsx(s.code,{children:"FormItem"})," or a ",e.jsx(s.code,{children:"<label htmlFor>"}),", and an ",e.jsx(s.code,{children:"id"}),` on the
autocomplete. Avoid a bare `,e.jsx(s.code,{children:"aria-label"}),`: it replaces the whole name, so the chosen option isn't
read.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Write the ",e.jsx(s.code,{children:"placeholder"})," as an instruction"]}),`, such as "Search for a library". It also names the
search field, so screen reader users hear it when the list opens.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Pass ",e.jsx(s.code,{children:"getOptionLabel"})," with ",e.jsx(s.code,{children:"renderOption"}),"."]})," The announcements use ",e.jsx(s.code,{children:"getOptionLabel"}),` (or the
value), not what `,e.jsx(s.code,{children:"renderOption"})," draws."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Validate a required autocomplete yourself."})," ",e.jsx(s.code,{children:"required"}),` doesn't stop the form from submitting
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/126",rel:"nofollow",children:"#126"}),`). Show the requirement in the label, check
the value on submit, and show the error with `,e.jsx(s.code,{children:"FormItem"}),"'s ",e.jsx(s.code,{children:"errorText"}),`, which sets
`,e.jsx(s.code,{children:"aria-describedby"})," and ",e.jsx(s.code,{children:"aria-invalid"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Don't use it for the user's own details."})," There's no way to set an ",e.jsx(s.code,{children:"autocomplete"}),` token, so
browsers can't fill it in (`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/127",rel:"nofollow",children:"#127"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Tell keyboard users how to leave the list"}),` if they're likely to be new to it. For now, Tab
doesn't close the open list or move on; Escape or choosing an option does
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/253",rel:"nofollow",children:"#253"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Expect no visible highlight in Windows High Contrast mode."}),` For now, the highlighted option
looks the same as the others in that mode
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/252",rel:"nofollow",children:"#252"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(s.a,{href:"https://designsystem.digital.gov/components/combo-box/accessibility-tests/",rel:"nofollow",children:"USWDS combo box accessibility tests"}),`
on your own form, including a screen reader pass. The live region's announcements can sound
different in each screen reader.`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+Autocomplete",rel:"nofollow",children:"all open accessibility issues for Autocomplete"}),`.
Earlier audit findings are tracked in `,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/123",rel:"nofollow",children:"#123"}),"."]})]}),`
`,e.jsx(n,{id:"api-reference",intro:"The props declared in Vero's types. Other button attributes aren't listed.",title:"API reference",children:e.jsx(u,{of:m})})]})}function ee(o={}){const{wrapper:s}={...h(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(l,{...o})}):l(o)}export{ee as default};
