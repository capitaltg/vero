import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as l}from"./index-DL7Mpk60.js";import{M as d,D as h,C as c,a as p}from"./index-AIFAtT5C.js";import{D as t,a as i,b as x,A as j}from"./DocsLayout-CGJ2GL3I.js";import{S as u}from"./StepIndicator-BYT3rdz3.js";import{S as r,P as o}from"./StepIndicator.stories-CKqMySod.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-G2KODbDz.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./utils-DrFeXHBK.js";import"./index-CBgW3S2s.js";import"./check-C42IfL-F.js";import"./createLucideIcon-BeEkWZrd.js";import"./Button-DJBoR_IJ.js";import"./useAriaDisabled-BVkOu7OW.js";import"./index-Cg8zIP29.js";import"./constants-jTWlLmnl.js";import"./styles-DnVuGKPq.js";function a(n){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r}),`
`,e.jsx(s.h1,{id:"stepindicator",children:"StepIndicator"}),`
`,e.jsx(h,{of:r}),`
`,e.jsxs(t,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a step indicator and how to set it up. Adapted from the"," ",e.jsx(s.a,{href:"https://designsystem.digital.gov/components/step-indicator/",children:"USWDS step indicator guidance"}),"."]}),title:"Guidance",children:[e.jsx(i,{id:"when-to-use",children:"When to use"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"For a form or process split across pages"})," that groups into three or more high-level steps."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When users move through the steps in order"}),", with back and next buttons."]}),`
`]}),e.jsx(i,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The number of steps can change"}),` based on the user's answers: a step indicator that grows or
shrinks is confusing. Show only the heading, or no indicator.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Users can complete steps in any order:"}),` use a list of sections with their status, or
`,e.jsx(s.a,{href:"?path=/docs/actions-navigation-tabs--docs",children:"Tabs"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A short form with fewer than three steps:"})," leave it out."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Showing where a page sits in a site:"}),` use
`,e.jsx(s.a,{href:"?path=/docs/actions-navigation-breadcrumbs--docs",children:"Breadcrumbs"}),"."]}),`
`]}),e.jsx(i,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep step labels short"}),`, one or two words, such as "Profile" or "Review". Keep any
`,e.jsx(s.code,{children:"description"})," to a few words too."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Provide navigation separately."}),` The step indicator isn't interactive: put back and next
buttons below the form, as in the interactive example.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Keep the default ",e.jsx(s.code,{children:"variant"})]})," for the USWDS look, with a segment per step. The ",e.jsx(s.code,{children:"counter"}),`
variant shows numbered circles, with a check on completed steps.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Set ",e.jsx(s.code,{children:"headingLevel"})]}),` so the "Step X of Y" heading fits your page's outline. It defaults to
`,e.jsx(s.code,{children:"h4"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Expect only the heading on narrow screens."})," Below 768px, the ",e.jsx(s.code,{children:"default"}),` variant hides its
segments and labels and shows only the heading.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Use ",e.jsx(s.code,{children:"showCurrentAsCompleted"})]})," on a final confirmation page, so every step shows as done."]}),`
`]})]}),`
`,e.jsxs(t,{id:"try-it",intro:"Change the values below to see how the step indicator responds.",title:"Try it",children:[e.jsx(c,{of:o}),e.jsx(p,{of:o})]}),`
`,e.jsx(t,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(x,{})}),`
`,e.jsxs(t,{id:"accessibility",intro:"What the step indicator handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(i,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Each step's status is in text, not only color."}),` Each step has visually hidden text saying
it's "completed" or "not completed", and the current step is marked `,e.jsx(s.code,{children:'aria-current="step"'}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The steps are an ordered list"}),` named "Steps", inside a region named "Step indicator". Pass
your own `,e.jsx(s.code,{children:"aria-label"})," to rename the region."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:'The heading reads "Step 2 of 4 Profile"'}),` to screen readers: a visually hidden "Step" comes
before the number. Its level is set by `,e.jsx(s.code,{children:"headingLevel"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Nothing in it is focusable."}),` It shows progress only, so keyboard users don't tab through
it.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"On narrow screens"}),", the ",e.jsx(s.code,{children:"default"}),` variant's list is hidden from screen readers as well as
visually, so only the heading is announced.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast:"}),` labels are 17.2:1 against white for completed steps, 6.7:1 for the current step
and 5.3:1 for steps not started. The current and completed segments are 6.7:1 and 9.6:1.
Segments for steps not started are light gray (1.25:1), but their status is also given in text.`]}),`
`]}),e.jsx(i,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Set ",e.jsx(s.code,{children:"headingLevel"})]})," to fit the headings around it. The default ",e.jsx(s.code,{children:"h4"})," is rarely right."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Tell users the step changed."})," When users move to the next step, update the page's ",e.jsx(s.code,{children:"<title>"}),`
(for example, "Profile – step 2 of 4") and move focus to the step's heading or the top of the
form, so screen reader users know where they are.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Prefer the ",e.jsx(s.code,{children:"counter"})," variant where users rely on Windows High Contrast mode."]}),` For now, the
`,e.jsx(s.code,{children:"default"}),` variant's segments disappear in that mode
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/219",rel:"nofollow",children:"#219"}),"). The labels and the heading stay."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep labels short."}),` For now, screen readers read each step's label twice when labels are
shown (`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/221",rel:"nofollow",children:"#221"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Give each step indicator a distinct ",e.jsx(s.code,{children:"aria-label"})]})," if a page has more than one."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(s.a,{href:"https://designsystem.digital.gov/components/step-indicator/accessibility-tests/",rel:"nofollow",children:"USWDS step indicator accessibility tests"}),`
on your own form, including a screen reader pass.`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+StepIndicator",rel:"nofollow",children:"all open accessibility issues for StepIndicator"}),"."]})]}),`
`,e.jsx(t,{id:"api-reference",intro:"The props declared in Vero's types. Standard HTML attributes aren't listed.",title:"API reference",children:e.jsx(j,{of:u})})]})}function X(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{X as default};
