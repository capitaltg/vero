import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as l}from"./index-DL7Mpk60.js";import{M as c,D as d,C as h,a as x}from"./index-Dwd4rZEB.js";import{D as t,a as i,b as p,c as j}from"./DocsLayout-CUwxVCnV.js";import{T as a,P as o,a as b,b as u,c as g,d as m}from"./Tabs.stories-Cj6q9hfz.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFC7Cztk.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./useAriaDisabled-BVkOu7OW.js";import"./styles-DnVuGKPq.js";import"./utils-DrFeXHBK.js";import"./index-71yw2hYF.js";import"./index-BC4UKXW_.js";import"./index-C6PL8mjV.js";import"./index-Cg8zIP29.js";import"./index-hTbK6lay.js";import"./index-Cf-CwZ9y.js";import"./index-BnbJOCzs.js";import"./index-CE4V37Zw.js";function r(n){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a}),`
`,e.jsx(s.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsx(d,{of:a}),`
`,e.jsxs(t,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use tabs and how to label and arrange them. USWDS has no tabs component, so this guidance is Vero's own. The keyboard behavior follows the"," ",e.jsx(s.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",children:"WAI-ARIA tabs pattern"}),"."]}),title:"Guidance",children:[e.jsx(i,{id:"when-to-use",children:"When to use"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"To switch between related views in one place"}),`, such as the sections of an account's
settings, when users need only one at a time.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When the content splits into a few groups"})," that each have a short, clear name."]}),`
`]}),e.jsx(i,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Users need to compare panels or read them all:"}),` show the content on the page under
headings, or use an `,e.jsx(s.a,{href:"?path=/docs/data-display-accordion--docs",children:"Accordion"}),`, which can show
several sections at once.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Moving to another page:"}),` use links, such as a
`,e.jsx(s.a,{href:"?path=/docs/actions-navigation-navbar--docs",children:"Navbar"}),`. Tabs change content in place; they
don't navigate.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Steps in a process:"}),` use a
`,e.jsx(s.a,{href:"?path=/docs/actions-navigation-stepindicator--docs",children:"StepIndicator"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Too many sections for one row:"}),` use an Accordion or a side navigation. The tab list
doesn't wrap or scroll.`]}),`
`]}),e.jsx(i,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep labels short and distinct"}),`, one or two words each, so users can tell the panels apart
at a glance.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Order tabs by how often they're used"}),`, and open the most-used one first with
`,e.jsx(s.code,{children:"defaultValue"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Don't split one form across tabs."})," Errors in a hidden panel are easy to miss."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Keep the default ",e.jsx(s.code,{children:'activationMode="manual"'})," when showing a panel is slow"]}),`, for example when
it loads data: users can arrow past tabs without loading each one. `,e.jsx(s.code,{children:"automatic"}),` suits panels
that show instantly, and saves a key press.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Avoid disabled tabs."}),` Hide a tab that doesn't apply, or keep it and explain in its panel
why it's empty. If you do disable one, see
`,e.jsx(s.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"For vertical tabs"}),", set ",e.jsx(s.code,{children:'orientation="vertical"'}),` so Up and Down move between them, and lay
out the list yourself with `,e.jsx(s.code,{children:"className"}),": the prop doesn't change the layout."]}),`
`]})]}),`
`,e.jsxs(t,{id:"try-it",intro:"Change the values below to see how the tabs respond.",title:"Try it",children:[e.jsx(h,{of:o}),e.jsx(x,{of:o})]}),`
`,e.jsx(t,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(p,{})}),`
`,e.jsxs(t,{id:"accessibility",intro:"What the tabs handle for you and what you need to add.",title:"Accessibility",children:[e.jsx(i,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"They're tabs to assistive technology."})," ",e.jsx(s.code,{children:"TabsList"})," is a ",e.jsx(s.code,{children:"tablist"})," with ",e.jsx(s.code,{children:"aria-orientation"}),`,
each `,e.jsx(s.code,{children:"TabsTrigger"})," is a ",e.jsx(s.code,{children:"tab"})," with ",e.jsx(s.code,{children:"aria-selected"})," and ",e.jsx(s.code,{children:"aria-controls"}),", and each ",e.jsx(s.code,{children:"TabsContent"}),`
is a `,e.jsx(s.code,{children:"tabpanel"})," named by its tab through ",e.jsx(s.code,{children:"aria-labelledby"}),". Hidden panels use the ",e.jsx(s.code,{children:"hidden"}),`
attribute, so screen readers skip them.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keyboard:"}),` Tab moves into the list, onto the selected tab, and Tab again moves to the
panel. Left and Right (Up and Down when vertical) move between tabs and wrap at the ends.
Home and End move to the first and last tab. With the default `,e.jsx(s.code,{children:"manual"}),` activation, Enter or
Space shows the focused tab's panel; with `,e.jsx(s.code,{children:"automatic"}),`, it shows as soon as the tab gets
focus.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The panel is focusable"}),`, so keyboard users can reach a panel that has no links or fields
of its own.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A disabled tab stays focusable"})," and is marked ",e.jsx(s.code,{children:"aria-disabled"}),`, so screen reader users can
still find it and hear that it's unavailable. Clicks don't select it (but see
`,e.jsx(s.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Focus is visible:"}),` a 3px ring, 3.2:1 against white. In forced colors (Windows High
Contrast) it shows as an outline.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast:"}),` unselected labels are 5.3:1 against white, and the selected tab's white label
is 6.7:1 on its fill.`]}),`
`]}),e.jsx(i,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Name the tab list."})," Pass ",e.jsx(s.code,{children:"aria-label"})," to ",e.jsx(s.code,{children:"TabsList"}),", or ",e.jsx(s.code,{children:"aria-labelledby"}),` pointing to a
visible heading, so screen readers say what the tabs are for:`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<TabsList aria-label="Account settings">…</TabsList>
`})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Name each tab after its panel's content"}),", so the tab makes sense when read on its own."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Avoid ",e.jsx(s.code,{children:"isDisabled"})," for now."]}),` Once a disabled tab has focus, the arrow keys can't move off
it (`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/216",rel:"nofollow",children:"#216"}),"). With ",e.jsx(s.code,{children:'activationMode="automatic"'}),`,
arrowing onto it also selects it and shows its panel
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/231",rel:"nofollow",children:"#231"}),")."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:`Add a selected-tab cue other than the fill where users rely on Windows High Contrast
mode.`}),` In that mode the selected tab looks the same as the others
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/232",rel:"nofollow",children:"#232"}),`). An underline survives it, e.g.
`,e.jsx(s.code,{children:'className="data-[state=active]:underline"'})," on each ",e.jsx(s.code,{children:"TabsTrigger"}),"."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Keep focus and contrast when you restyle."}),` If you change the tabs' colors with
`,e.jsx(s.code,{children:"className"}),`, keep the focus ring, keep labels at 4.5:1, and keep the selected tab clearly
different from the others.`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Test it in your page."}),` USWDS has no tabs tests, so check the keyboard behavior above in
your own layout, and do a screen reader pass.`]}),`
`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+Tabs",rel:"nofollow",children:"all open accessibility issues for Tabs"}),`,
and `,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/216",rel:"nofollow",children:"#216"}),`, which is titled after RadioGroup,
where it was found.`]})]}),`
`,e.jsx(t,{id:"api-reference",intro:e.jsxs(e.Fragment,{children:["Each part's props, as declared in Vero's types. Props inherited from standard HTML attributes or Radix, such as ",e.jsx(s.code,{children:"asChild"})," and ",e.jsx(s.code,{children:"dir"}),", aren't listed."]}),title:"API reference",children:e.jsx(j,{components:[b,u,g,m]})})]})}function X(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{X as default};
