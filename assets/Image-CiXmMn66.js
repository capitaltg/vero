import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as h}from"./index-DL7Mpk60.js";import{M as d,D as c,C as x,a as m}from"./index-CMjXWZPS.js";import{D as g,a as n,b as j,c as r,d as t,e as p,A as u}from"./DocsLayout-CEYntYd9.js";import{I as a,P as o,a as f}from"./Image.stories-fqhBx-j9.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C7Tx3m9I.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./utils-DrFeXHBK.js";import"./createLucideIcon-BeEkWZrd.js";import"./x-DEnjg7Le.js";import"./check-C42IfL-F.js";import"./Button-DJBoR_IJ.js";import"./useAriaDisabled-BVkOu7OW.js";import"./index-Cg8zIP29.js";import"./constants-jTWlLmnl.js";import"./styles-DnVuGKPq.js";import"./index-CBgW3S2s.js";function l(i){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...h(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsx(s.h1,{id:"image",children:"Image"}),`
`,e.jsx(c,{of:a}),`
`,e.jsx(g,{}),`
`,e.jsxs(n,{id:"try-it",intro:"Change the values below to see how the image responds.",title:"Try it",children:[e.jsx(x,{of:o}),e.jsx(m,{of:o})]}),`
`,e.jsxs(n,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use the Image component and how to describe images. USWDS has no image component, so this guidance is Vero's own. For writing alt text, see the"," ",e.jsx(s.a,{href:"https://www.w3.org/WAI/tutorials/images/",children:"W3C images tutorial"}),"."]}),title:"Guidance",variant:"guidance",children:[e.jsxs(j,{children:[e.jsx(r,{kind:"use",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"For photos and illustrations that load from a URL"}),`, where a placeholder while loading, a
fallback image or lazy loading helps.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"For avatars and thumbnails"}),", with ",e.jsx(s.code,{children:'shape="circle"'})," or ",e.jsx(s.code,{children:'shape="rounded"'}),"."]}),`
`]})}),e.jsx(r,{kind:"avoid",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Icons:"})," use an icon component, such as one from ",e.jsx(s.code,{children:"lucide-react"}),`, which Vero uses. An icon
doesn't need a loading placeholder.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Text:"}),` use real text, not a picture of it. Text in an image can't be resized, restyled or
translated, and screen readers can't read it.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A purely decorative background:"})," use a CSS background image."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Charts and diagrams:"}),` alt text can't hold all their detail. Give the same information as text
or a table next to them.`]}),`
`]})})]}),e.jsx(t,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Pass ",e.jsx(s.code,{children:"width"})," and ",e.jsx(s.code,{children:"height"}),"."]}),` The browser uses their ratio to reserve the image's space while it
loads, so the page doesn't jump. The image fills the width of its wrapper; size the wrapper with
`,e.jsx(s.code,{children:"className"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Turn ",e.jsx(s.code,{children:"isLazy"})," off for images near the top of the page"]}),`, such as a hero image, so they load
straight away. Lazy loading suits images further down.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Pick a ",e.jsx(s.code,{children:"fallback"})," that works wherever the image is used"]}),`, such as a neutral placeholder or a
default avatar.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Check how the image crops."}),` It's cropped to fill its wrapper, so a wrapper with a different
shape, or `,e.jsx(s.code,{children:'shape="circle"'}),", can cut off the edges."]}),`
`]})]}),`
`,e.jsx(n,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(p,{})}),`
`,e.jsxs(n,{id:"accessibility",intro:"What the image handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(t,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["It's a native ",e.jsx(s.code,{children:"<img>"})]}),", so screen readers announce it as an image, named by its ",e.jsx(s.code,{children:"alt"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"alt"})," is required by its type"]}),", so TypeScript flags an image without one."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:'alt=""'})," marks an image as decorative."]}),` It's left out of the accessibility tree, so screen
readers skip it.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The loading placeholder is hidden from screen readers"})," (",e.jsx(s.code,{children:"aria-hidden"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["When the ",e.jsx(s.code,{children:"fallback"})," is shown, the ",e.jsx(s.code,{children:"alt"})," stays the same"]}),", so screen readers announce the ",e.jsx(s.code,{children:"alt"}),`
you wrote for the original image.`]}),`
`]}),e.jsx(t,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Write alt text that says what the image shows or does"}),`, in the context of the page. Keep it
short, and don't start with "Image of": screen readers already say it's an image.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Pass ",e.jsx(s.code,{children:'alt=""'})," for decorative images"]}),`, and for images whose content is already in the text next
to them, such as a photo beside the person's name.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Make sure the alt text still fits when the fallback is shown."}),` If the fallback is a generic
placeholder, the original image's alt text describes something users can't see. If that matters,
change `,e.jsx(s.code,{children:"alt"})," in your ",e.jsx(s.code,{children:"onError"})," handler."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Give images a ",e.jsx(s.code,{children:"fallback"})," where you can."]}),` For now, an image that fails to load with no
`,e.jsx(s.code,{children:"fallback"}),`, or whose fallback also fails, shows the loading placeholder forever, and screen
readers can't reach its alt text. While an image loads, its alt text is hidden from them too
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/215",rel:"nofollow",children:"#215"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Put text and data from images in the page too."}),` If an image holds text or figures users need,
repeat them as text.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Test it in your page"}),` with a screen reader, checking that each image's alt text makes sense
where it's read.`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+Image",rel:"nofollow",children:"all open accessibility issues for Image"}),"."]})]}),`
`,e.jsx(n,{id:"api-reference",intro:"The props declared in Vero's types. Standard img attributes, such as width and height, aren't listed.",title:"API reference",children:e.jsx(u,{of:f})})]})}function q(i={}){const{wrapper:s}={...h(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(l,{...i})}):l(i)}export{q as default};
