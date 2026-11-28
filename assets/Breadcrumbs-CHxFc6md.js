import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as c}from"./index-DL7Mpk60.js";import{M as l,D as h,C as x,a as p}from"./index-CMjXWZPS.js";import{D as u,a as r,b as m,c as t,d as i,e as j,A as g}from"./DocsLayout-CEYntYd9.js";import{B as a,P as o,a as b}from"./Breadcrumbs.stories-C2D7IL_2.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C7Tx3m9I.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./utils-DrFeXHBK.js";import"./createLucideIcon-BeEkWZrd.js";import"./x-DEnjg7Le.js";import"./check-C42IfL-F.js";import"./styles-DnVuGKPq.js";import"./chevron-right-Dw3Smd9x.js";import"./user-mYAjcJ3w.js";function d(n){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a}),`
`,e.jsx(s.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,e.jsx(h,{of:a}),`
`,e.jsx(u,{}),`
`,e.jsxs(r,{id:"try-it",intro:"Change the values below to see how the breadcrumbs respond.",title:"Try it",children:[e.jsx(x,{of:o}),e.jsx(p,{of:o})]}),`
`,e.jsxs(r,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use breadcrumbs and how to write them. Adapted from the"," ",e.jsx(s.a,{href:"https://designsystem.digital.gov/components/breadcrumb/",children:"USWDS breadcrumb guidance"}),"."]}),title:"Guidance",variant:"guidance",children:[e.jsxs(m,{children:[e.jsx(t,{kind:"use",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When users need to know where they are"}),` in a site with several levels, especially if they
may arrive on an inner page from a search or a link.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"To show how a site is organized"}),", and let users move up to a parent page in one step."]}),`
`]})}),e.jsx(t,{kind:"avoid",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A simple or flat site"}),`, where the main navigation already shows where the user is: leave
breadcrumbs out.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The home page, and often top-level landing pages"}),`, where the place in the hierarchy is
obvious: leave them out.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Side navigation that already shows the path:"})," breadcrumbs may repeat it."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Steps in a process"}),`, such as a multi-page form: use a
`,e.jsx(s.a,{href:"?path=/docs/actions-navigation-stepindicator--docs",children:"StepIndicator"}),`. Breadcrumbs show a
hierarchy, not progress.`]}),`
`]})})]}),e.jsx(i,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use the pages' titles"}),`, worded as they are on each page, so users recognize where a link
goes.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:'Start with "Home" as text.'}),` An icon can sit beside it, but don't use a house icon on its
own.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["End with the current page, without an ",e.jsx(s.code,{children:"href"}),"."]}),` It's shown as plain text and marked as the
current page.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep labels short."}),` A long trail wraps onto more lines, which is harder to scan on small
screens. For a very deep site, consider showing only the parent page on narrow screens.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use one style of separator"})," across the site. The default chevron is a good choice."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Add structured data for search engines yourself"}),` if you want breadcrumbs in search
results: Breadcrumbs doesn't output JSON-LD or RDFa.`]}),`
`]})]}),`
`,e.jsx(r,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(j,{})}),`
`,e.jsxs(r,{id:"accessibility",intro:"What the breadcrumbs handle for you and what you need to add.",title:"Accessibility",children:[e.jsx(i,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"It's a navigation landmark"}),": a ",e.jsx(s.code,{children:"<nav>"}),` named "Breadcrumb", so screen reader users can jump
to it. Pass your own `,e.jsx(s.code,{children:"aria-label"})," to rename it."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The items are an ordered list"}),`, so screen readers announce how many there are and where
each one sits.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["The current page is marked ",e.jsx(s.code,{children:'aria-current="page"'}),"."]})," An item without an ",e.jsx(s.code,{children:"href"}),` is rendered as
text, not a link, and screen readers announce it as the current page.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Links are native ",e.jsx(s.code,{children:"<a>"})," elements"]}),", in the tab order, with the browser's focus outline."]}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"The default chevron separator is hidden from screen readers."})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast:"}),` links are 6.7:1 against white, the current page 17.2:1 and the separators 5.3:1,
above the 4.5:1 that WCAG requires for text.`]}),`
`]}),e.jsx(i,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Give every item except the last an ",e.jsx(s.code,{children:"href"}),"."]}),` Any item without one is marked as the current
page.`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Hide a custom ",e.jsx(s.code,{children:"separator"})," from screen readers."]}),` For now, only the default chevron is
hidden: a text separator such as `,e.jsx(s.code,{children:"/"}),` is read between every link
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/218",rel:"nofollow",children:"#218"}),"). Wrap it in a hidden span:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Breadcrumbs items={items} separator={<span aria-hidden="true">/</span>} />
`})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Keep text in icon items."})," An item whose ",e.jsx(s.code,{children:"label"}),` is only an icon has no name. Keep the text,
as in the icons example, or add a visually hidden label.`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Use one breadcrumb trail per page"}),`, so there's one landmark named "Breadcrumb". Give your
page's other `,e.jsx(s.code,{children:"<nav>"})," landmarks names of their own."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(s.a,{href:"https://designsystem.digital.gov/components/breadcrumb/accessibility-tests/",rel:"nofollow",children:"USWDS breadcrumb accessibility tests"}),`
on your own page, including a screen reader pass.`]}),`
`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+Breadcrumbs",rel:"nofollow",children:"all open accessibility issues for Breadcrumbs"}),"."]})]}),`
`,e.jsx(r,{id:"api-reference",intro:"The props declared in Vero's types. Standard HTML attributes aren't listed.",title:"API reference",children:e.jsx(g,{of:b})})]})}function L(n={}){const{wrapper:s}={...c(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(d,{...n})}):d(n)}export{L as default};
