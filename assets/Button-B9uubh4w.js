import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as d}from"./index-DL7Mpk60.js";import{M as l,D as c,C as h,a as u}from"./index-AIFAtT5C.js";import{D as i,a as t,b as x,A as p}from"./DocsLayout-CGJ2GL3I.js";import{B as j}from"./Button-DJBoR_IJ.js";import{B as o,P as a}from"./Button.stories-BbFFG9-4.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-G2KODbDz.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./useAriaDisabled-BVkOu7OW.js";import"./utils-DrFeXHBK.js";import"./index-Cg8zIP29.js";import"./constants-jTWlLmnl.js";import"./styles-DnVuGKPq.js";import"./index-CBgW3S2s.js";import"./createLucideIcon-BeEkWZrd.js";function r(s){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsx(n.h1,{id:"button",children:"Button"}),`
`,e.jsx(c,{of:o}),`
`,e.jsxs(i,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a button, which style to choose and how to word it. Adapted from the"," ",e.jsx(n.a,{href:"https://designsystem.digital.gov/components/button/",children:"USWDS button guidance"}),"."]}),title:"Guidance",children:[e.jsx(t,{id:"when-to-use",children:"When to use"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"To let users take an action"}),`, such as submitting a form, saving changes or opening a
dialog. A button does something on the current page, or sends data.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"For the most important actions on a page"}),", styled so they stand out."]}),`
`]}),e.jsx(t,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Going to another page:"}),` use a link. If the link needs the button's look, such as a "Start
your application" link, render an `,e.jsx(n.code,{children:"<a>"})," with ",e.jsx(n.code,{children:"asChild"}),`:
`,e.jsx(n.code,{children:'<Button asChild><a href="/apply">Start your application</a></Button>'}),`. Screen readers then
announce it as a link, and it behaves like one: it opens with Enter, can open in a new tab and
is listed with the page's links.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Several related actions"}),` that would crowd the page: group them in a
`,e.jsx(n.a,{href:"?path=/docs/actions-navigation-dropdownbutton--docs",children:"DropdownButton"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A choice or a setting"}),`, such as picking one option or turning something on: use a
`,e.jsx(n.a,{href:"?path=/docs/inputs-forms-radiogroup--docs",children:"RadioGroup"}),`,
`,e.jsx(n.a,{href:"?path=/docs/inputs-forms-checkboxgroup--docs",children:"CheckboxGroup"}),` or
`,e.jsx(n.a,{href:"?path=/docs/inputs-forms-switch--docs",children:"Switch"}),". Their ",e.jsx(n.code,{children:"button"}),` style looks like a row of
buttons but keeps the right role and checked state.`]}),`
`]}),e.jsx(t,{id:"usability",children:"Usability guidance"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Choose the ",e.jsx(n.code,{children:"variant"})," by how important the action is:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"primary"}),` for the main action, such as Submit or Save. Use one per form or dialog, so it's
clear which action is expected.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"default"})," (outlined) for secondary actions, such as Cancel or Back."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"danger"})," for actions that destroy data, such as Delete. Ask for confirmation before acting."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"link"}),` for less important actions that should look like a link, such as "Edit" next to a
summary. It's still a button, so use it for actions, not for going to another page.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ghost"}),` for compact controls where a border would be noise, such as icon buttons in a
toolbar or a calendar header.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"input"}),` for a button that sits among form fields and opens a picker, as DatePicker and
Autocomplete do. It's styled like a field.`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lead with a verb and keep it short."}),` Write "Save draft", not "Draft". The label should say
what happens when it's pressed.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use sentence case"}),': "Save and continue", not "Save And Continue".']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Don't use too many buttons on a page."})," When everything stands out, nothing does."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Set ",e.jsx(n.code,{children:'type="button"'})," on buttons inside a form that don't submit it."]}),` Button renders a native
`,e.jsx(n.code,{children:"<button>"}),", which submits its form by default."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Use ",e.jsx(n.code,{children:"isLoading"})," for actions that take a moment"]}),`, such as saving. It shows a spinner, keeps
the width and blocks further clicks, so the action isn't sent twice.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Make unavailable actions understandable."}),` If a button is disabled, say why nearby, or leave
it enabled and explain what's missing when it's pressed.`]}),`
`]})]}),`
`,e.jsxs(i,{id:"try-it",intro:"Change the values below to see how the button responds.",title:"Try it",children:[e.jsx(h,{of:a}),e.jsx(u,{of:a})]}),`
`,e.jsx(i,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(x,{})}),`
`,e.jsxs(i,{id:"accessibility",intro:"What the button handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(t,{id:"built-in",children:"Built in"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["It's a native ",e.jsx(n.code,{children:"<button>"})]}),`, so it has the button role, is in the tab order, and Enter and
Space press it. With `,e.jsx(n.code,{children:"asChild"}),", the child element keeps its own role, so an ",e.jsx(n.code,{children:"<a>"}),` stays a
link.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus is visible on every variant:"}),` a 3px ring with a 3px white gap, 3.2:1 against white. In
forced colors (Windows High Contrast), a solid outline takes its place.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"When disabled it stays focusable"})," and is marked ",e.jsx(n.code,{children:"aria-disabled"}),`, so screen reader users can
still find it and hear that it's unavailable. Clicks, Enter and Space don't call `,e.jsx(n.code,{children:"onClick"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"While loading it stays focusable"}),`, so focus isn't lost when an action starts. It's marked
`,e.jsx(n.code,{children:"aria-disabled"})," and ",e.jsx(n.code,{children:"aria-busy"}),`, and the spinner is hidden from screen readers. But see
`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues/217",rel:"nofollow",children:"#217"}),` under
`,e.jsx(n.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Contrast:"})," the text is 6.7:1 on the ",e.jsx(n.code,{children:"default"}),", ",e.jsx(n.code,{children:"primary"})," and ",e.jsx(n.code,{children:"link"}),` variants, 4.6:1 on
`,e.jsx(n.code,{children:"danger"})," (white on red, bold) and 17.7:1 on ",e.jsx(n.code,{children:"input"})," and ",e.jsx(n.code,{children:"ghost"}),`, all above the 4.5:1 that WCAG
requires. The `,e.jsx(n.code,{children:"default"})," and ",e.jsx(n.code,{children:"primary"})," borders are 6.7:1 against white."]}),`
`]}),e.jsx(t,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Name icon-only buttons."}),` A button with only an icon has no name unless you give it one. Add
an `,e.jsx(n.code,{children:"aria-label"}),` that says what it does, and keep the icon hidden from screen readers (lucide
icons are hidden by default):`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Button aria-label="Close" variant="ghost">
  <X aria-hidden="true" className="h-4 w-4" />
</Button>
`})}),`
`,e.jsxs(n.p,{children:["Add a ",e.jsx(n.a,{href:"?path=/docs/overlays-feedback-tooltip--docs",children:"Tooltip"}),` so sighted users can see the name
too.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Use a link for navigation"}),", with ",e.jsx(n.code,{children:"asChild"}),`, as in
`,e.jsx(n.a,{href:"#guidance-when-to-use-something-else",children:"When to use something else"}),`. A button that changes the
page in `,e.jsx(n.code,{children:"onClick"})," isn't announced as a link and can't be opened in a new tab."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Give a loading button a name."}),` For now, a button loses its accessible name while
`,e.jsx(n.code,{children:"isLoading"}),` is set, so screen readers announce a button with no label
(`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues/217",rel:"nofollow",children:"#217"}),`). Until that's fixed, pass an
`,e.jsx(n.code,{children:"aria-label"})," while it loads, such as ",e.jsx(n.code,{children:"aria-label={isLoading ? 'Saving' : undefined}"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Announce the result of a long action."}),` A spinner isn't announced, and screen readers don't
announce `,e.jsx(n.code,{children:"aria-busy"}),` changes on a button. When the action finishes, show a message in a live
region, such as an `,e.jsx(n.a,{href:"?path=/docs/overlays-feedback-alert--docs",children:"Alert"}),`, or move focus to what
changed.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Don't rely on color alone."})," The ",e.jsx(n.code,{children:"danger"}),` variant's red means nothing to a screen reader user
or someone who can't see red, so the label itself must say what happens, such as "Delete
file".`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(n.a,{href:"https://designsystem.digital.gov/components/button/accessibility-tests/",rel:"nofollow",children:"USWDS button accessibility tests"}),`
on your own page, including a screen reader pass.`]}),`
`]}),`
`]}),e.jsxs(n.p,{children:[`For an accessibility review, see
`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+Button",rel:"nofollow",children:"all open accessibility issues for Button"}),"."]})]}),`
`,e.jsx(i,{id:"api-reference",intro:"The props declared in Vero's types. Standard HTML attributes aren't listed.",title:"API reference",children:e.jsx(p,{of:j})})]})}function G(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{G as default};
