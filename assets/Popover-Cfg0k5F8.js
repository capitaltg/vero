import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as a}from"./index-DL7Mpk60.js";import{M as c,D as d,C as h,a as p}from"./index-Dwd4rZEB.js";import{D as n,a as i,b as x,c as j}from"./DocsLayout-CUwxVCnV.js";import{P as t,a as g,b as u}from"./Popover-BuTVlq4x.js";import{P as m,a as r}from"./Popover.stories-CtyA0Azl.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFC7Cztk.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./styles-DnVuGKPq.js";import"./utils-DrFeXHBK.js";import"./index-Cu56kmkr.js";import"./index-Cf-CwZ9y.js";import"./index-Cg8zIP29.js";import"./index-71yw2hYF.js";import"./index-BnbJOCzs.js";import"./index-eyHDLC5v.js";import"./index-CrHxJ1tp.js";import"./index-ByqrEM_-.js";import"./index-hTbK6lay.js";import"./index-CE4V37Zw.js";import"./Button-DJBoR_IJ.js";import"./useAriaDisabled-BVkOu7OW.js";import"./constants-jTWlLmnl.js";import"./index-CBgW3S2s.js";import"./createLucideIcon-BeEkWZrd.js";import"./DialogTitle-D9qJLO0z.js";import"./index-C8pZe9g5.js";import"./x-DEnjg7Le.js";import"./FormItem-w-KWj7d7.js";import"./Label-C0TlDhz9.js";import"./Input-BjeEkKn3.js";import"./chevron-down-CLkoBCE4.js";import"./check-C42IfL-F.js";function l(s){const o={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:m}),`
`,e.jsx(o.h1,{id:"popover",children:"Popover"}),`
`,e.jsx(d,{of:t}),`
`,e.jsxs(n,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a popover instead of a dialog or a tooltip. USWDS has no popover component, so this guidance is Vero's own. The popover's panel is a non-modal dialog; see the"," ",e.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",children:"WAI-ARIA dialog pattern"}),"."]}),title:"Guidance",children:[e.jsx(i,{id:"when-to-use",children:"When to use"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"For a few controls or details tied to one button"}),`, such as a small settings form, a color
picker or extra detail about an item, where the user stays on the page and carries on after.`]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"When the content needs to be clicked or typed into."}),` A popover stays open until it's
dismissed, and focus moves into it.`]}),`
`]}),e.jsx(i,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"A decision the user must make before going on"}),`, or anything that should block the page: use
a `,e.jsx(o.a,{href:"?path=/docs/overlays-feedback-dialog--docs",children:"Dialog"}),"."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"A short label or hint shown on hover or focus"}),`, with nothing to click: use a
`,e.jsx(o.a,{href:"?path=/docs/overlays-feedback-tooltip--docs",children:"Tooltip"}),"."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"A list of actions:"}),` use a
`,e.jsx(o.a,{href:"?path=/docs/actions-navigation-dropdownbutton--docs",children:"DropdownButton"}),`, which is a menu with
arrow-key navigation.`]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Choosing from a list of options:"})," use a ",e.jsx(o.a,{href:"?path=/docs/inputs-forms-select--docs",children:"Select"}),`,
`,e.jsx(o.a,{href:"?path=/docs/inputs-forms-combobox--docs",children:"Combobox"}),` or
`,e.jsx(o.a,{href:"?path=/docs/inputs-forms-multiselect--docs",children:"MultiSelect"}),"."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Content users need to complete the task:"})," put it on the page, where it's always visible."]}),`
`]}),e.jsx(i,{id:"usability",children:"Usability guidance"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Make the trigger say what it opens"}),`, such as "Color: Blue" or "Filter", so users know what to
expect.`]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Keep the content small."})," If it needs a long form or scrolling, use a Dialog or a page."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Close it when the job is done"}),", such as after picking a color, by controlling ",e.jsx(o.code,{children:"open"}),` with
`,e.jsx(o.code,{children:"onOpenChange"}),". Users can also close it with Escape or a click outside."]}),`
`,e.jsxs(o.li,{children:[e.jsxs(o.strong,{children:["Place it with ",e.jsx(o.code,{children:"side"})," and ",e.jsx(o.code,{children:"align"})]})," so it doesn't cover what users need to see while using it."]}),`
`,e.jsxs(o.li,{children:[e.jsxs(o.strong,{children:["Set stacking with ",e.jsx(o.code,{children:"zIndex"}),", not ",e.jsx(o.code,{children:"style"}),"."]})," For now, passing ",e.jsx(o.code,{children:"style"}),` drops the z-index
(`,e.jsx(o.a,{href:"https://github.com/capitaltg/vero/issues/230",rel:"nofollow",children:"#230"}),")."]}),`
`]})]}),`
`,e.jsxs(n,{id:"try-it",intro:"Change the values below to see how the popover responds.",title:"Try it",children:[e.jsx(h,{of:r}),e.jsx(p,{of:r})]}),`
`,e.jsx(n,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(x,{})}),`
`,e.jsxs(n,{id:"accessibility",intro:"What the popover handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(i,{id:"built-in",children:"Built in"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"The trigger says it opens a dialog"}),", with ",e.jsx(o.code,{children:'aria-haspopup="dialog"'})," and ",e.jsx(o.code,{children:"aria-expanded"}),`, and
`,e.jsx(o.code,{children:"aria-controls"})," while it's open."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"The panel is a dialog to assistive technology"})," (",e.jsx(o.code,{children:'role="dialog"'}),`), but it has no name until you
give it one (see `,e.jsx(o.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"}),")."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Focus moves in when it opens"}),`, to the first field, button or link, or to the panel itself when
it has none.`]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Tab and Shift+Tab cycle inside the popover"}),`, even when it isn't modal. Escape is the keyboard
way out.`]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Escape closes it and returns focus to the trigger."}),` Inside a Dialog, Escape closes only the
popover.`]}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"A click outside closes it."})}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Contrast:"})," the text is 17.2:1 against the panel."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"In forced colors"})," (Windows High Contrast), the panel's border stays visible."]}),`
`]}),e.jsx(i,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Name the panel."})," Pass ",e.jsx(o.code,{children:"aria-labelledby"}),`, pointing to a heading inside the popover, or an
`,e.jsx(o.code,{children:"aria-label"})," to ",e.jsx(o.code,{children:"PopoverContent"}),", so screen readers say what the dialog is for."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Give the trigger a clear name"}),`, including the current value where there is one, such as
"Color: Blue".`]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Use it for content, not for menus or option lists."}),` The panel has no menu or listbox roles and
no arrow-key navigation. Use DropdownButton, Select or Combobox for those.`]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Don't put the only copy of essential information in a popover."}),` Users have to find the trigger
and open it to see it.`]}),`
`,e.jsxs(o.li,{children:[e.jsxs(o.strong,{children:["Keep ",e.jsx(o.code,{children:"modal"})," at its default (",e.jsx(o.code,{children:"false"}),")"]}),` unless the rest of the page must be blocked. A modal
popover hides the rest of the page from screen readers; if you need that, consider a Dialog.`]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Test it in your page"})," with a keyboard and a screen reader. USWDS has no popover tests to run."]}),`
`]}),e.jsxs(o.p,{children:[`For an accessibility review, see
`,e.jsx(o.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+Popover",rel:"nofollow",children:"all open accessibility issues for Popover"}),"."]})]}),`
`,e.jsx(n,{id:"api-reference",intro:e.jsxs(e.Fragment,{children:["Each part's props, as declared in Vero's types. Props inherited from standard HTML attributes or Radix, such as ",e.jsx(o.code,{children:"onEscapeKeyDown"})," and ",e.jsx(o.code,{children:"collisionPadding"})," on"," ",e.jsx(o.code,{children:"PopoverContent"}),", aren't listed. See the"," ",e.jsx(o.a,{href:"https://www.radix-ui.com/primitives/docs/components/popover#api-reference",children:"Radix Popover API reference"})," ","for those."]}),title:"API reference",children:e.jsx(j,{components:[t,g,u]})})]})}function se(s={}){const{wrapper:o}={...a(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(l,{...s})}):l(s)}export{se as default};
