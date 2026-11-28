import{j as n}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as l}from"./index-DL7Mpk60.js";import{M as c,D as h,C as u,a as x}from"./index-CMjXWZPS.js";import{D as p,a as i,b as j,c as o,d as t,e as g,A as b}from"./DocsLayout-CEYntYd9.js";import{B as m}from"./Button-DJBoR_IJ.js";import{B as a,P as r}from"./Button.stories-BbFFG9-4.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C7Tx3m9I.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./utils-DrFeXHBK.js";import"./createLucideIcon-BeEkWZrd.js";import"./x-DEnjg7Le.js";import"./check-C42IfL-F.js";import"./useAriaDisabled-BVkOu7OW.js";import"./index-Cg8zIP29.js";import"./constants-jTWlLmnl.js";import"./styles-DnVuGKPq.js";import"./index-CBgW3S2s.js";function d(s){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:a}),`
`,n.jsx(e.h1,{id:"button",children:"Button"}),`
`,n.jsx(h,{of:a}),`
`,n.jsx(p,{}),`
`,n.jsxs(i,{id:"try-it",intro:"Change the values below to see how the button responds.",title:"Try it",children:[n.jsx(u,{of:r}),n.jsx(x,{of:r})]}),`
`,n.jsxs(i,{id:"guidance",intro:n.jsxs(n.Fragment,{children:["When to use a button, which style to choose and how to word it. Adapted from the"," ",n.jsx(e.a,{href:"https://designsystem.digital.gov/components/button/",children:"USWDS button guidance"}),"."]}),title:"Guidance",variant:"guidance",children:[n.jsxs(j,{children:[n.jsx(o,{kind:"use",children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"To let users take an action"}),`, such as submitting a form, saving changes or opening a
dialog. A button does something on the current page, or sends data.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"For the most important actions on a page"}),", styled so they stand out."]}),`
`]})}),n.jsx(o,{kind:"avoid",children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Going to another page:"}),` use a link. If the link needs the button's look, such as a "Start
your application" link, render an `,n.jsx(e.code,{children:"<a>"})," with ",n.jsx(e.code,{children:"asChild"}),`:
`,n.jsx(e.code,{children:'<Button asChild><a href="/apply">Start your application</a></Button>'}),`. Screen readers then
announce it as a link, and it behaves like one: it opens with Enter, can open in a new tab and
is listed with the page's links.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Several related actions"}),` that would crowd the page: group them in a
`,n.jsx(e.a,{href:"?path=/docs/actions-navigation-dropdownbutton--docs",children:"DropdownButton"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"A choice or a setting"}),`, such as picking one option or turning something on: use a
`,n.jsx(e.a,{href:"?path=/docs/inputs-forms-radiogroup--docs",children:"RadioGroup"}),`,
`,n.jsx(e.a,{href:"?path=/docs/inputs-forms-checkboxgroup--docs",children:"CheckboxGroup"}),` or
`,n.jsx(e.a,{href:"?path=/docs/inputs-forms-switch--docs",children:"Switch"}),". Their ",n.jsx(e.code,{children:"button"}),` style looks like a row of
buttons but keeps the right role and checked state.`]}),`
`]})})]}),n.jsx(t,{id:"usability",children:"Usability guidance"}),n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Choose the ",n.jsx(e.code,{children:"variant"})," by how important the action is:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"primary"}),` for the main action, such as Submit or Save. Use one per form or dialog, so it's
clear which action is expected.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"default"})," (outlined) for secondary actions, such as Cancel or Back."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"danger"})," for actions that destroy data, such as Delete. Ask for confirmation before acting."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"link"}),` for less important actions that should look like a link, such as "Edit" next to a
summary. It's still a button, so use it for actions, not for going to another page.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ghost"}),` for compact controls where a border would be noise, such as icon buttons in a
toolbar or a calendar header.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"input"}),` for a button that sits among form fields and opens a picker, as DatePicker and
Autocomplete do. It's styled like a field.`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Lead with a verb and keep it short."}),` Write "Save draft", not "Draft". The label should say
what happens when it's pressed.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use sentence case"}),': "Save and continue", not "Save And Continue".']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Don't use too many buttons on a page."})," When everything stands out, nothing does."]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Set ",n.jsx(e.code,{children:'type="button"'})," on buttons inside a form that don't submit it."]}),` Button renders a native
`,n.jsx(e.code,{children:"<button>"}),", which submits its form by default."]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Use ",n.jsx(e.code,{children:"isLoading"})," for actions that take a moment"]}),`, such as saving. It shows a spinner, keeps
the width and blocks further clicks, so the action isn't sent twice.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Make unavailable actions understandable."}),` If a button is disabled, say why nearby, or leave
it enabled and explain what's missing when it's pressed.`]}),`
`]})]}),`
`,n.jsx(i,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:n.jsx(g,{})}),`
`,n.jsxs(i,{id:"accessibility",intro:"What the button handles for you and what you need to add.",title:"Accessibility",children:[n.jsx(t,{id:"built-in",children:"Built in"}),n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["It's a native ",n.jsx(e.code,{children:"<button>"})]}),`, so it has the button role, is in the tab order, and Enter and
Space press it. With `,n.jsx(e.code,{children:"asChild"}),", the child element keeps its own role, so an ",n.jsx(e.code,{children:"<a>"}),` stays a
link.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Focus is visible on every variant:"}),` a 3px ring with a 3px white gap, 3.2:1 against white. In
forced colors (Windows High Contrast), a solid outline takes its place.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"When disabled it stays focusable"})," and is marked ",n.jsx(e.code,{children:"aria-disabled"}),`, so screen reader users can
still find it and hear that it's unavailable. Clicks, Enter and Space don't call `,n.jsx(e.code,{children:"onClick"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"While loading it stays focusable"}),`, so focus isn't lost when an action starts. It's marked
`,n.jsx(e.code,{children:"aria-disabled"})," and ",n.jsx(e.code,{children:"aria-busy"}),`, and the spinner is hidden from screen readers. But see
`,n.jsx(e.a,{href:"https://github.com/capitaltg/vero/issues/217",rel:"nofollow",children:"#217"}),` under
`,n.jsx(e.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Contrast:"})," the text is 6.7:1 on the ",n.jsx(e.code,{children:"default"}),", ",n.jsx(e.code,{children:"primary"})," and ",n.jsx(e.code,{children:"link"}),` variants, 4.6:1 on
`,n.jsx(e.code,{children:"danger"})," (white on red, bold) and 17.7:1 on ",n.jsx(e.code,{children:"input"})," and ",n.jsx(e.code,{children:"ghost"}),`, all above the 4.5:1 that WCAG
requires. The `,n.jsx(e.code,{children:"default"})," and ",n.jsx(e.code,{children:"primary"})," borders are 6.7:1 against white."]}),`
`]}),n.jsx(t,{id:"your-responsibility",children:"Your responsibility"}),n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Name icon-only buttons."}),` A button with only an icon has no name unless you give it one. Add
an `,n.jsx(e.code,{children:"aria-label"}),` that says what it does, and keep the icon hidden from screen readers (lucide
icons are hidden by default):`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button aria-label="Close" variant="ghost">
  <X aria-hidden="true" className="h-4 w-4" />
</Button>
`})}),`
`,n.jsxs(e.p,{children:["Add a ",n.jsx(e.a,{href:"?path=/docs/overlays-feedback-tooltip--docs",children:"Tooltip"}),` so sighted users can see the name
too.`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Use a link for navigation"}),", with ",n.jsx(e.code,{children:"asChild"}),`, as in
`,n.jsx(e.a,{href:"#guidance-when-to-use-something-else",children:"When to use something else"}),`. A button that changes the
page in `,n.jsx(e.code,{children:"onClick"})," isn't announced as a link and can't be opened in a new tab."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Give a loading button a name."}),` For now, a button loses its accessible name while
`,n.jsx(e.code,{children:"isLoading"}),` is set, so screen readers announce a button with no label
(`,n.jsx(e.a,{href:"https://github.com/capitaltg/vero/issues/217",rel:"nofollow",children:"#217"}),`). Until that's fixed, pass an
`,n.jsx(e.code,{children:"aria-label"})," while it loads, such as ",n.jsx(e.code,{children:"aria-label={isLoading ? 'Saving' : undefined}"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Announce the result of a long action."}),` A spinner isn't announced, and screen readers don't
announce `,n.jsx(e.code,{children:"aria-busy"}),` changes on a button. When the action finishes, show a message in a live
region, such as an `,n.jsx(e.a,{href:"?path=/docs/overlays-feedback-alert--docs",children:"Alert"}),`, or move focus to what
changed.`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Don't rely on color alone."})," The ",n.jsx(e.code,{children:"danger"}),` variant's red means nothing to a screen reader user
or someone who can't see red, so the label itself must say what happens, such as "Delete
file".`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Test it in your page."}),` Run the
`,n.jsx(e.a,{href:"https://designsystem.digital.gov/components/button/accessibility-tests/",rel:"nofollow",children:"USWDS button accessibility tests"}),`
on your own page, including a screen reader pass.`]}),`
`]}),`
`]}),n.jsxs(e.p,{children:[`For an accessibility review, see
`,n.jsx(e.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+Button",rel:"nofollow",children:"all open accessibility issues for Button"}),"."]})]}),`
`,n.jsx(i,{id:"api-reference",intro:"The props declared in Vero's types. Standard HTML attributes aren't listed.",title:"API reference",children:n.jsx(b,{of:m})})]})}function R(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(d,{...s})}):d(s)}export{R as default};
