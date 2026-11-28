import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as d}from"./index-DL7Mpk60.js";import{M as l,D as h,C as u,a as p}from"./index-CMjXWZPS.js";import{D as x,a as t,b as m,c as i,d as o,e as j,A as b}from"./DocsLayout-CEYntYd9.js";import{D as r,P as a,a as g}from"./DropdownButton.stories-CpJFOMOp.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C7Tx3m9I.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./utils-DrFeXHBK.js";import"./createLucideIcon-BeEkWZrd.js";import"./x-DEnjg7Le.js";import"./check-C42IfL-F.js";import"./index-Cu56kmkr.js";import"./index-Cf-CwZ9y.js";import"./index-Cg8zIP29.js";import"./index-71yw2hYF.js";import"./index-BnbJOCzs.js";import"./index-eyHDLC5v.js";import"./index-fFdRnNGy.js";import"./index-C6PL8mjV.js";import"./index-CrHxJ1tp.js";import"./index-ByqrEM_-.js";import"./index-CE4V37Zw.js";import"./index-BC4UKXW_.js";import"./index-hTbK6lay.js";import"./Button-DJBoR_IJ.js";import"./useAriaDisabled-BVkOu7OW.js";import"./constants-jTWlLmnl.js";import"./styles-DnVuGKPq.js";import"./index-CBgW3S2s.js";import"./chevron-down-CLkoBCE4.js";import"./user-mYAjcJ3w.js";function c(s){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r}),`
`,e.jsx(n.h1,{id:"dropdownbutton",children:"DropdownButton"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(x,{}),`
`,e.jsxs(t,{id:"try-it",intro:"Change the values below to see how the dropdown button responds.",title:"Try it",children:[e.jsx(u,{of:a}),e.jsx(p,{of:a})]}),`
`,e.jsxs(t,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a dropdown button and how to write its menu. USWDS has no matching component, so this guidance is Vero's own. The component follows the"," ",e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/",children:"WAI-ARIA menu button pattern"}),"."]}),title:"Guidance",variant:"guidance",children:[e.jsxs(m,{children:[e.jsx(i,{kind:"use",children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"To group related actions"}),` that would crowd the page as separate buttons, such as Edit,
Duplicate and Delete on a table row.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"For secondary actions"}),", where hiding them behind one button keeps the main action clear."]}),`
`]})}),e.jsx(i,{kind:"avoid",children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"One or two actions:"})," use separate ",e.jsx(n.a,{href:"?path=/docs/actions-navigation-button--docs",children:"Buttons"}),`.
Actions in a menu are harder to find than actions on the page.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The main action on a page"}),", such as Submit: use a ",e.jsx(n.code,{children:"primary"}),`
`,e.jsx(n.a,{href:"?path=/docs/actions-navigation-button--docs",children:"Button"}),". Don't hide it in a menu."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Going to other pages:"}),` use links, or the
`,e.jsx(n.a,{href:"?path=/docs/actions-navigation-navbar--docs",children:"Navbar"}),". Menu items are actions, with an ",e.jsx(n.code,{children:"onClick"}),`
and no `,e.jsx(n.code,{children:"href"}),", so they can't be opened in a new tab."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Choosing a value in a form:"})," use a ",e.jsx(n.a,{href:"?path=/docs/inputs-forms-select--docs",children:"Select"}),` or a
`,e.jsx(n.a,{href:"?path=/docs/inputs-forms-radiogroup--docs",children:"RadioGroup"}),`. A menu runs an action; it doesn't hold a
value.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Showing content or a small form:"}),` use a
`,e.jsx(n.a,{href:"?path=/docs/overlays-feedback-popover--docs",children:"Popover"}),"."]}),`
`]})})]}),e.jsx(o,{id:"usability",children:"Usability guidance"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label the button with what the menu holds"}),`, such as "Actions" or "Export". The chevron that
shows it opens a menu is added for you.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keep the menu short"}),", and group related items with ",e.jsx(n.code,{children:"'separator'"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lead each item with a verb"}),', such as "Download PDF", and keep the wording short.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Put destructive items last"}),`, after a separator, and ask for confirmation before acting on
them.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Give every item a different ",e.jsx(n.code,{children:"label"}),"."]})," Items are keyed by their label."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Leave out items that never apply"}),` in the current context. Disable an item only when it can
become available, and explain why it isn't, nearby or in the item's label.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use icons on all items or none"}),", so the labels line up."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Use ",e.jsx(n.code,{children:'align="end"'})]})," for a button near the right edge, so the menu opens inward."]}),`
`]})]}),`
`,e.jsx(t,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(j,{})}),`
`,e.jsxs(t,{id:"accessibility",intro:"What the dropdown button handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(o,{id:"built-in",children:"Built in"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The button tells assistive technology it opens a menu"}),", with ",e.jsx(n.code,{children:'aria-haspopup="menu"'}),` and
`,e.jsx(n.code,{children:"aria-expanded"}),", and points to the open menu with ",e.jsx(n.code,{children:"aria-controls"}),`. Its name is its text: the
chevron is hidden from screen readers.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The menu is an ARIA menu"})," (",e.jsx(n.code,{children:'role="menu"'}),"), named by the button through ",e.jsx(n.code,{children:"aria-labelledby"}),`.
Each item is a `,e.jsx(n.code,{children:"menuitem"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard on the button:"})," Enter, Space and Down Arrow open the menu and focus the first item."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard in the menu:"}),` Up and Down Arrow move between items, without wrapping; Home and End
go to the first and last item; typing a letter moves to the next item starting with it. Enter
or Space chooses the focused item and closes the menu. Escape closes it without choosing.
Either way, focus returns to the button.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tab doesn't leave an open menu."}),` The WAI-ARIA pattern closes the menu on Tab; this one keeps
focus in it until Escape or a choice. Clicking outside also closes it.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Disabled items stay focusable"})," and are marked ",e.jsx(n.code,{children:"aria-disabled"}),`, as the WAI-ARIA pattern
recommends, so screen reader users can hear that they're unavailable. Clicks, Enter and Space
don't call their `,e.jsx(n.code,{children:"onClick"})," or close the menu."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A disabled button stays focusable"})," and is marked ",e.jsx(n.code,{children:"aria-disabled"}),`. Clicks, Enter, Space and
Down Arrow don't open the menu.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus is visible:"})," the button has ",e.jsx(n.a,{href:"?path=/docs/actions-navigation-button--docs",children:"Button's"}),`
focus ring, and the focused item a light blue background with blue text (5.1:1). In forced
colors (Windows High Contrast), both show a solid outline.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Contrast:"}),` the button's text and border match
`,e.jsx(n.a,{href:"?path=/docs/actions-navigation-button--docs",children:"Button's variants"}),"."]}),`
`]}),e.jsx(o,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Name an icon-only button."})," If ",e.jsx(n.code,{children:"children"})," is only an icon, pass an ",e.jsx(n.code,{children:"aria-label"}),` that says
what the menu is for, such as `,e.jsx(n.code,{children:'aria-label="Row actions"'}),`. On a table row, include the row in
the name, such as "Actions for invoice 1042", so screen reader users can tell the buttons
apart.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Explain disabled items."})," ",e.jsx(n.code,{children:"aria-disabled"})," says an item is unavailable, not why."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Manage focus when an action removes the button"}),`, such as Delete on a table row. Focus
returns to the button, so if it's gone, move focus to a sensible place, such as the next row
or the table's heading.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Announce the result of an action"}),` that has no visible effect where focus is, such as
"Copied to clipboard", with a live region, such as an
`,e.jsx(n.a,{href:"?path=/docs/overlays-feedback-alert--docs",children:"Alert"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test it in your page."}),` USWDS has no tests for this component. Check it against the
`,e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/",rel:"nofollow",children:"WAI-ARIA menu button pattern"}),` with a
keyboard and a screen reader.`]}),`
`]}),e.jsxs(n.p,{children:[`For an accessibility review, see
`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+DropdownButton",rel:"nofollow",children:"all open accessibility issues for DropdownButton"}),"."]})]}),`
`,e.jsx(t,{id:"api-reference",intro:"The props declared in Vero's types. Standard HTML attributes and Radix DropdownMenu trigger props aren't listed.",title:"API reference",children:e.jsx(b,{of:g})})]})}function ne(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}export{ne as default};
