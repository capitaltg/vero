import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as a}from"./index-DL7Mpk60.js";import{M as c,D as h,C as d,a as p}from"./index-AIFAtT5C.js";import{D as o,a as i,b as x,c as u}from"./DocsLayout-CGJ2GL3I.js";import{T as j,a as g}from"./Tooltip-Cj8dK7Rm.js";import{T as n,P as r}from"./Tooltip.stories-BUx-uBc9.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-G2KODbDz.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./styles-DnVuGKPq.js";import"./utils-DrFeXHBK.js";import"./index-Cu56kmkr.js";import"./index-Cf-CwZ9y.js";import"./index-Cg8zIP29.js";import"./index-71yw2hYF.js";import"./index-BnbJOCzs.js";import"./index-eyHDLC5v.js";import"./index-CrHxJ1tp.js";import"./index-hTbK6lay.js";import"./index-CE4V37Zw.js";import"./index-C0VaYEPT.js";import"./Button-DJBoR_IJ.js";import"./useAriaDisabled-BVkOu7OW.js";import"./constants-jTWlLmnl.js";import"./index-CBgW3S2s.js";import"./createLucideIcon-BeEkWZrd.js";function l(t){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:n}),`
`,e.jsx(s.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsx(h,{of:n}),`
`,e.jsxs(o,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a tooltip and what to put in it. Adapted from the"," ",e.jsx(s.a,{href:"https://designsystem.digital.gov/components/tooltip/",children:"USWDS tooltip guidance"}),"."]}),title:"Guidance",children:[e.jsx(i,{id:"when-to-use",children:"When to use"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"For brief, helpful information that isn't essential"}),`, such as what an icon button does or a
keyboard shortcut.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"To give users confidence about an interaction"}),', such as "Copies the link to your clipboard".']}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"As a last resort where space is tight"}),", after looking for a way to keep the text visible."]}),`
`]}),e.jsx(i,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Information users need to complete the task:"}),` put it on the page, as visible text or a
field's description. Tooltips don't show on touch screens.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Anything longer than a short phrase"}),`, or content with links or buttons: use a
`,e.jsx(s.a,{href:"?path=/docs/overlays-feedback-popover--docs",children:"Popover"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Text that repeats the trigger's visible label"}),`, or explains something already obvious: leave
the tooltip out.`]}),`
`]}),e.jsx(i,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep it short"}),", about 44 characters or fewer."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use tooltips only on elements that look interactive"}),`, such as buttons and links, so users
find them.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use them consistently"})," across similar controls, such as every icon button in a toolbar."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Place it with ",e.jsx(s.code,{children:"side"})," and ",e.jsx(s.code,{children:"align"})]})," so it doesn't cover what the user is working on."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Wrap your app in one ",e.jsx(s.code,{children:"TooltipProvider"}),"."]})," Every ",e.jsx(s.code,{children:"Tooltip"})," needs one above it."]}),`
`]})]}),`
`,e.jsxs(o,{id:"try-it",intro:"Change the values below to see how the tooltip responds.",title:"Try it",children:[e.jsx(d,{of:r}),e.jsx(p,{of:r})]}),`
`,e.jsx(o,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(x,{})}),`
`,e.jsxs(o,{id:"accessibility",intro:"What the tooltip handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(i,{id:"built-in",children:"Built in"}),e.jsxs(s.p,{children:["It follows the ",e.jsx(s.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/",rel:"nofollow",children:"WAI-ARIA tooltip pattern"}),"."]}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"It's a tooltip to assistive technology"})," (",e.jsx(s.code,{children:'role="tooltip"'}),`). While it's open, the trigger points
to it with `,e.jsx(s.code,{children:"aria-describedby"}),", so screen readers read it as the trigger's description."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"It opens on hover and on keyboard focus"}),`, right away by default, and closes when the trigger
loses focus or the pointer leaves.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The pointer can move onto the tooltip"}),` without it closing, so users who magnify the screen
can read it.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Escape closes it"}),` when it was opened by keyboard focus (but see
`,e.jsx(s.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"It never takes focus"}),", so it doesn't change the Tab order."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast:"})," the text is 17.2:1 against the tooltip's background."]}),`
`]}),e.jsx(i,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Put it on an element that can take focus"}),", such as a ",e.jsx(s.code,{children:"Button"})," or a link. On a ",e.jsx(s.code,{children:"span"}),` or an
icon, keyboard users can't open it.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Don't put it on a disabled button."}),` A disabled button can't be focused or hovered, so the
tooltip never shows. Explain why it's disabled in visible text instead.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Name icon buttons yourself."}),` The tooltip is a description, not a name: give the button an
`,e.jsx(s.code,{children:"aria-label"})," too, usually with the same text."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep essential information out of tooltips."})," They don't open on touch screens."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Don't put links or buttons in a tooltip."}),` It closes when focus leaves the trigger, so keyboard
users can't reach them. Use a Popover.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Place tooltips where they don't cover what users need."}),` For now, Escape doesn't close a
tooltip while the pointer is over it, so mouse users have to move the pointer away
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/228",rel:"nofollow",children:"#228"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Avoid tooltips over other text where users rely on Windows High Contrast mode."}),` For now, a
tooltip has no visible edge in that mode and blends into the page
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/229",rel:"nofollow",children:"#229"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(s.a,{href:"https://designsystem.digital.gov/components/tooltip/accessibility-tests/",rel:"nofollow",children:"USWDS tooltip accessibility tests"}),`
on your own page, including a screen reader pass.`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+Tooltip",rel:"nofollow",children:"all open accessibility issues for Tooltip"}),"."]})]}),`
`,e.jsx(o,{id:"api-reference",intro:"Each part's props, as declared in Vero's types.",title:"API reference",children:e.jsx(u,{components:[j,g]})})]})}function O(t={}){const{wrapper:s}={...a(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(l,{...t})}):l(t)}export{O as default};
