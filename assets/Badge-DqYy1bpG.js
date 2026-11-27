import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as d}from"./index-DL7Mpk60.js";import{M as l,D as c,C as h,a as g}from"./index-AIFAtT5C.js";import{D as t,a as o,b as u,A as x}from"./DocsLayout-CGJ2GL3I.js";import{B as j}from"./Badge-CI8RaF_F.js";import{B as i,P as r}from"./Badge.stories-Cv6AAbmv.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-G2KODbDz.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./utils-DrFeXHBK.js";import"./index-CBgW3S2s.js";function a(n){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i}),`
`,e.jsx(s.h1,{id:"badge",children:"Badge"}),`
`,e.jsx(c,{of:i}),`
`,e.jsxs(t,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a badge and how to word it. Adapted from the"," ",e.jsx(s.a,{href:"https://designsystem.digital.gov/components/tag/",children:"USWDS tag guidance"}),", USWDS's name for a badge."]}),title:"Guidance",children:[e.jsx(o,{id:"when-to-use",children:"When to use"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"To label an item's status or category"}),', such as "Approved" or "Draft" in a table row.']}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"To show a count"}),", such as the number of unread messages next to a link."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"To draw attention to new or important content"}),`, such as "New" next to a recently added
feature.`]}),`
`]}),e.jsx(o,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Users can click it:"})," use a ",e.jsx(s.a,{href:"?path=/docs/actions-navigation-button--docs",children:"Button"}),`. A badge
isn't interactive: it can't be focused and has no button role.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"It's a message users need to read or act on:"}),` use an
`,e.jsx(s.a,{href:"?path=/docs/overlays-feedback-alert--docs",children:"Alert"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"To highlight new content on a page users expect to change often"}),`, such as a news feed: putting
the new items first may be enough. Bold text or a background color can also mark them.`]}),`
`]}),e.jsx(o,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Don't put badges where they look like buttons."}),` Users often mistake them for buttons,
especially next to real ones. Test with users if you're unsure.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep the text short"}),": one or two words, or a number."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use each variant for one meaning across your app"}),", such as ",e.jsx(s.code,{children:"success"}),` for "Approved"
everywhere, so users learn what the colors mean.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Don't overdo it."})," If everything has a badge, nothing stands out."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Use the ",e.jsx(s.code,{children:"light"})," tone for a quieter badge"]}),", such as in a dense table, and ",e.jsx(s.code,{children:"dark"}),` where it needs
to stand out.`]}),`
`]})]}),`
`,e.jsxs(t,{id:"try-it",intro:"Change the values below to see how the badge responds.",title:"Try it",children:[e.jsx(h,{of:r}),e.jsx(g,{of:r})]}),`
`,e.jsx(t,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(u,{})}),`
`,e.jsxs(t,{id:"accessibility",intro:"What the badge handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(o,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"It's plain text to assistive technology."})," The badge is a ",e.jsx(s.code,{children:"<div>"}),` with no role, so screen
readers read its text where it appears, like any other text. Its variant and color aren't
announced.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"It isn't focusable"}),", so it doesn't add a stop for keyboard users."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast:"}),` the text is at least 4.6:1 against the badge's background in every variant and
tone, above the 4.5:1 that WCAG requires for small text. The lowest are the `,e.jsx(s.code,{children:"dark"})," ",e.jsx(s.code,{children:"success"}),` and
`,e.jsx(s.code,{children:"danger"})," badges; every ",e.jsx(s.code,{children:"light"})," badge is at least 5.6:1."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"In Windows High Contrast mode"}),` every badge shows as an outlined pill with its text, so badges
stay visible, but all variants look the same.`]}),`
`]}),e.jsx(o,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Put the meaning in the text, not just the color."}),` Write "Approved" or "Overdue", not a colored
badge with a vague word. Screen readers don't announce the color, some users can't tell the colors
apart, and in Windows High Contrast mode every variant looks the same.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Give counts some context."}),` A badge reading "3" next to "Messages" is read as "Messages 3". Add
visually hidden text, such as "unread" in a span with Tailwind's `,e.jsx(s.code,{children:"sr-only"}),` class, so it's clear
what the number means.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Announce badges that change while the page is open"}),`, such as a count that goes up. The badge
has no live region: put the change in an `,e.jsx(s.code,{children:"aria-live"})," region, or announce it some other way."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Check the contrast of custom colors"})," passed in ",e.jsx(s.code,{children:"className"}),`: text needs 4.5:1 against the
badge's background.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(s.a,{href:"https://designsystem.digital.gov/components/tag/accessibility-tests/",rel:"nofollow",children:"USWDS tag accessibility tests"}),`
on your own page, including a screen reader pass.`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+Badge",rel:"nofollow",children:"all open accessibility issues for Badge"}),"."]})]}),`
`,e.jsx(t,{id:"api-reference",intro:"The props declared in Vero's types. Standard HTML attributes aren't listed.",title:"API reference",children:e.jsx(x,{of:j})})]})}function M(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{M as default};
