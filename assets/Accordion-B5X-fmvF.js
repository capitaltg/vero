import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as c}from"./index-DL7Mpk60.js";import{M as d,D as l,C as h,a as x}from"./index-CL23-Nq0.js";import{D as t,a as i,b as p,A as j}from"./DocsLayout-Dr2VwGxh.js";import{A as o,P as r,a as g}from"./Accordion.stories-V2t_uwPa.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-yxFQREfa.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./utils-DrFeXHBK.js";import"./index-71yw2hYF.js";import"./index-C6PL8mjV.js";import"./index-Cg8zIP29.js";import"./index-Cf-CwZ9y.js";import"./index-CE4V37Zw.js";import"./index-hTbK6lay.js";import"./styles-DnVuGKPq.js";import"./index-CBgW3S2s.js";import"./chevron-right-Dw3Smd9x.js";import"./createLucideIcon-BeEkWZrd.js";import"./chevron-down-CLkoBCE4.js";function a(s){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsx(l,{of:o}),`
`,e.jsxs(t,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When an accordion helps and how to set it up. Adapted from the"," ",e.jsx(n.a,{href:"https://designsystem.digital.gov/components/accordion/",children:"USWDS accordion guidance"}),"."]}),title:"Guidance",children:[e.jsx(i,{id:"when-to-use",children:"When to use"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Users need only a few parts of a long page"}),`, such as a list of FAQs where each reader looks
for one answer.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"There's a lot of content and little space"}),", and each section makes sense on its own."]}),`
`]}),e.jsx(i,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Users need to read most or all of the content:"}),` show it as plain text with clear headings.
Hiding it adds a click for each section and makes users guess where things are.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"There isn't much content:"})," don't condense it. A short page doesn't need an accordion."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Users switch between views of the same thing"}),`, such as Details and History: use
`,e.jsx(n.a,{href:"?path=/docs/actions-navigation-tabs--docs",children:"Tabs"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Users need to find text with the browser's find in page:"}),` a closed section's content isn't
rendered, so find in page can't match it.`]}),`
`]}),e.jsx(i,{id:"usability",children:"Usability guidance"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Write specific titles."}),` "How to renew a passport" tells users what's inside; "More
information" doesn't. The title is the only thing users see before they open a section.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Let users open several sections when they might compare them."})," Use ",e.jsx(n.code,{children:'mode="multiple"'}),`. Use
`,e.jsx(n.code,{children:'mode="single"'}),` when the sections are steps or alternatives and one at a time keeps the page
short.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Keep ",e.jsx(n.code,{children:"isCollapsible"})," on"]}),` unless a section must always be open. With it off, users can't close
the open section, only switch to another one.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Leave space between the triggers and anything clickable in the content"}),`, so users don't close a
section by mistake.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Don't rely on the variant's color."})," ",e.jsx(n.code,{children:"success"}),", ",e.jsx(n.code,{children:"danger"})," and ",e.jsx(n.code,{children:"warning"}),` color the triggers, but
the color isn't announced and some users can't see it. If a section's status matters, say it in
the title.`]}),`
`]})]}),`
`,e.jsxs(t,{id:"try-it",intro:"Change the values below to see how the accordion responds.",title:"Try it",children:[e.jsx(h,{of:r}),e.jsx(x,{of:r})]}),`
`,e.jsx(t,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(p,{})}),`
`,e.jsxs(t,{id:"accessibility",intro:"What the accordion handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(i,{id:"built-in",children:"Built in"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["It follows the ",e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",rel:"nofollow",children:"WAI-ARIA accordion pattern"}),"."]}),`
Each title is a native `,e.jsx(n.code,{children:"<button>"})," inside a heading (",e.jsx(n.code,{children:"h3"})," unless you set ",e.jsx(n.code,{children:"headingLevel"}),`), so
screen reader users can jump between sections by heading.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Each button announces whether its section is open"})," with ",e.jsx(n.code,{children:"aria-expanded"}),`. An open section's
button points to its panel with `,e.jsx(n.code,{children:"aria-controls"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Each panel is a ",e.jsx(n.code,{children:"region"})," named by its button"]}),", through ",e.jsx(n.code,{children:"aria-labelledby"}),`. Closed panels are
hidden and their content isn't rendered, so screen readers skip them.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard:"}),` Tab moves through the buttons and any focusable content in open panels. Enter or
Space opens or closes a section. Up and Down Arrow move between the buttons, wrapping at the ends,
and Home and End go to the first and last.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["With ",e.jsx(n.code,{children:"isCollapsible"})," off"]}),", the open section's button is marked ",e.jsx(n.code,{children:"aria-disabled"}),`, so screen
readers announce that it can't be closed. It stays focusable.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus is visible on every variant:"}),` a 3px blue ring with a white gap. In Windows High Contrast
mode an outline shows instead, and the caret stays visible. The caret is hidden from screen
readers, since `,e.jsx(n.code,{children:"aria-expanded"})," already gives the state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Contrast:"})," the title text is at least 4.6:1 against the trigger on every variant (",e.jsx(n.code,{children:"success"}),` and
`,e.jsx(n.code,{children:"danger"})," are the lowest), and the hover colors of the colored variants are darker still."]}),`
`]}),e.jsx(i,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Set ",e.jsx(n.code,{children:"headingLevel"})," to fit your page."]})," It defaults to ",e.jsx(n.code,{children:"h3"}),`. Use the level after the heading the
accordion sits under, so the page's outline doesn't skip a level.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keep titles to text."}),` The title is the button's content and its accessible name. Don't put
links, buttons or headings in it. An icon in a custom title needs `,e.jsx(n.code,{children:"aria-hidden"}),` or a text
alternative.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keep the accordion short when many sections can be open."}),` Each open panel is a landmark
region, and in `,e.jsx(n.code,{children:"multiple"})," mode a long accordion can fill the screen reader's list of landmarks."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Check the contrast of custom colors."})," Text in ",e.jsx(n.code,{children:"triggerClassName"})," and ",e.jsx(n.code,{children:"contentClassName"}),` needs
4.5:1 against its background, and the focus ring needs to show against the trigger.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(n.a,{href:"https://designsystem.digital.gov/components/accordion/accessibility-tests/",rel:"nofollow",children:"USWDS accordion accessibility tests"}),`
on your own page, including a screen reader pass.`]}),`
`]}),e.jsxs(n.p,{children:[`For an accessibility review, see
`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+Accordion",rel:"nofollow",children:"all open accessibility issues for Accordion"}),"."]})]}),`
`,e.jsx(t,{id:"api-reference",intro:"The props declared in Vero's types. Standard HTML attributes and Radix Accordion props, such as dir and orientation, aren't listed.",title:"API reference",children:e.jsx(j,{of:g})})]})}function X(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{X as default};
