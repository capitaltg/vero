import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as a}from"./index-DL7Mpk60.js";import{M as d,D as c,C as h,a as g}from"./index-AIFAtT5C.js";import{D as n,a as o,b as p,c as x}from"./DocsLayout-CGJ2GL3I.js";import{D as u,a as j,b as m,c as f,d as b}from"./DialogTitle-D9qJLO0z.js";import{D as t,P as r}from"./Dialog.stories-CzKlCdSm.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-G2KODbDz.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./styles-DnVuGKPq.js";import"./utils-DrFeXHBK.js";import"./index-Cu56kmkr.js";import"./index-Cf-CwZ9y.js";import"./index-Cg8zIP29.js";import"./index-71yw2hYF.js";import"./index-BnbJOCzs.js";import"./index-eyHDLC5v.js";import"./index-C8pZe9g5.js";import"./index-hTbK6lay.js";import"./index-CrHxJ1tp.js";import"./index-ByqrEM_-.js";import"./index-CE4V37Zw.js";import"./x-DEnjg7Le.js";import"./createLucideIcon-BeEkWZrd.js";import"./Button-DJBoR_IJ.js";import"./useAriaDisabled-BVkOu7OW.js";import"./constants-jTWlLmnl.js";import"./index-CBgW3S2s.js";import"./Combobox-BFQTSsZP.js";import"./CommandItem-8D5J7EVq.js";import"./CommandGroup-B7DCbNMb.js";import"./CommandList-Zx6pNQH3.js";import"./Popover-BuTVlq4x.js";import"./chevrons-up-down-CPJXHd7n.js";import"./check-C42IfL-F.js";function l(i){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:t}),`
`,e.jsx(s.h1,{id:"dialog",children:"Dialog"}),`
`,e.jsx(c,{of:t}),`
`,e.jsxs(n,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a dialog and how to keep it focused. Adapted from the"," ",e.jsx(s.a,{href:"https://designsystem.digital.gov/components/modal/",children:"USWDS modal guidance"}),"."]}),title:"Guidance",children:[e.jsx(o,{id:"when-to-use",children:"When to use"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"To confirm a decision that needs full attention"}),`, usually one that can't be undone, such as
"Delete this account?". Offer a clear choice, such as Cancel and Delete account.`]}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"To ask a question the user must answer before going on."})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"To show optional information without leaving a task"}),`, such as a privacy policy during sign-up.
Closing it is usually the only action.`]}),`
`]}),e.jsx(o,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Look for something less disruptive first."}),` A dialog blocks the page, so treat it as a last
resort.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A process with several steps:"})," use its own page."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"An error, warning or success message:"}),` show it next to the field it's about, or in an
`,e.jsx(s.a,{href:"?path=/docs/overlays-feedback-alert--docs",children:"Alert"})," at the top of the page."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A few controls or details tied to one button"}),`, where the rest of the page doesn't need to be
blocked: use a `,e.jsx(s.a,{href:"?path=/docs/overlays-feedback-popover--docs",children:"Popover"}),"."]}),`
`]}),e.jsx(o,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Open a dialog only when the user asks for it."}),` Exceptions are warnings such as a session about
to expire.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Make the title say what's being decided"}),`, and label buttons with what they do: "Delete
account", not "Yes".`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Put a Cancel button in a ",e.jsx(s.code,{children:"DialogClose"})]}),`, so it closes the dialog. A plain button in the footer
doesn't.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep it short."})," If the content needs scrolling, move it to its own page."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep the page stable."})," Closing the dialog shouldn't reload or change the page behind it."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep interactions simple."})," A few buttons or fields are fine; a long form isn't."]}),`
`]})]}),`
`,e.jsxs(n,{id:"try-it",intro:"Change the values below to see how the dialog responds.",title:"Try it",children:[e.jsx(h,{of:r}),e.jsx(g,{of:r})]}),`
`,e.jsx(n,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(p,{})}),`
`,e.jsxs(n,{id:"accessibility",intro:"What the dialog handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(o,{id:"built-in",children:"Built in"}),e.jsxs(s.p,{children:["It follows the ",e.jsx(s.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",rel:"nofollow",children:"WAI-ARIA modal dialog pattern"}),"."]}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"It's a dialog to assistive technology"})," (",e.jsx(s.code,{children:'role="dialog"'}),"), named by its ",e.jsx(s.code,{children:"DialogTitle"}),` through
`,e.jsx(s.code,{children:"aria-labelledby"}),". Its ",e.jsx(s.code,{children:"DialogDescription"})," is linked with ",e.jsx(s.code,{children:"aria-describedby"}),`, together with any
`,e.jsx(s.code,{children:"aria-describedby"})," you pass."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The trigger says it opens a dialog"}),", with ",e.jsx(s.code,{children:'aria-haspopup="dialog"'})," and ",e.jsx(s.code,{children:"aria-expanded"}),`, and
`,e.jsx(s.code,{children:"aria-controls"})," while it's open."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Focus moves in when it opens"}),`, to the first field, button or link. The close (X) button comes
last, so it gets focus only when there's nothing else.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Focus stays inside."}),` Tab and Shift+Tab cycle through the dialog's controls, and the rest of the
page is hidden from screen readers (`,e.jsx(s.code,{children:"aria-hidden"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Escape closes it"}),", as do the close button and a click outside."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Focus returns to the trigger"})," when it closes, however it closes."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:'The close button is a native button named "Close"'}),`, with a focus ring. Its icon is 6.6:1
against the dialog's background.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"In forced colors"}),` (Windows High Contrast), the dialog's border and the close button's focus
outline stay visible.`]}),`
`]}),e.jsx(o,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Always include a ",e.jsx(s.code,{children:"DialogTitle"}),"."]}),` Without one the dialog has no name, and nothing warns you. If
it can't have a visible title, pass an `,e.jsx(s.code,{children:"aria-label"})," to ",e.jsx(s.code,{children:"DialogContent"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Keep ",e.jsx(s.code,{children:"DialogDescription"})," short."]}),` Screen readers read it when the dialog opens; put longer
content in the body.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Check where focus starts."}),` In a confirmation, put the safe choice, such as Cancel, before the
destructive one, so it gets focus first. When the dialog starts with text that users need to read
first, use `,e.jsx(s.code,{children:"onOpenAutoFocus"}),` to focus the title or first paragraph instead, after giving it
`,e.jsx(s.code,{children:"tabIndex={-1}"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Pass ",e.jsx(s.code,{children:'role="alertdialog"'})," to ",e.jsx(s.code,{children:"DialogContent"})]}),` for a confirmation that interrupts the user and
needs an answer, such as "Discard your changes?".`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep Escape and the close button working."})," You can stop Escape with ",e.jsx(s.code,{children:"onEscapeKeyDown"}),`, but
users expect it to close the dialog.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Send focus somewhere sensible if the trigger is gone"}),` when the dialog closes, such as after
deleting the row that opened it. Use `,e.jsx(s.code,{children:"onCloseAutoFocus"})," to move it."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep the content short enough to fit the screen."}),` For now, a dialog taller than the viewport is
cut off and can't be scrolled, which also happens when users zoom in
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/237",rel:"nofollow",children:"#237"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Keep ",e.jsx(s.code,{children:"modal"})," at its default (",e.jsx(s.code,{children:"true"}),")."]}),` A non-modal dialog doesn't hide the rest of the page
from screen readers.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(s.a,{href:"https://designsystem.digital.gov/components/modal/accessibility-tests/",rel:"nofollow",children:"USWDS modal accessibility tests"}),`
on your own dialog, including a screen reader pass.`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+Dialog",rel:"nofollow",children:"all open accessibility issues for Dialog"}),"."]})]}),`
`,e.jsx(n,{id:"api-reference",intro:e.jsxs(e.Fragment,{children:["Each part's props, as declared in Vero's types. Props inherited from standard HTML attributes or Radix aren't listed; see the"," ",e.jsx(s.a,{href:"https://www.radix-ui.com/primitives/docs/components/dialog#api-reference",children:"Radix Dialog API reference"})," ","for those. ",e.jsx(s.code,{children:"DialogHeader"}),", ",e.jsx(s.code,{children:"DialogFooter"}),", ",e.jsx(s.code,{children:"DialogTitle"})," and"," ",e.jsx(s.code,{children:"DialogDescription"})," take only standard HTML attributes, so they have no entry."," ",e.jsx(s.code,{children:"DialogPortal"})," is Radix's ",e.jsx(s.code,{children:"Dialog.Portal"})," as is, and"," ",e.jsx(s.code,{children:"DialogContent"})," already renders it."]}),title:"API reference",children:e.jsx(x,{components:[u,j,m,f,b]})})]})}function te(i={}){const{wrapper:s}={...a(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(l,{...i})}):l(i)}export{te as default};
