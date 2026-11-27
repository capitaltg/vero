import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as d}from"./index-DL7Mpk60.js";import{M as c,D as h,C as l,a as p}from"./index-Dwd4rZEB.js";import{D as i,a as r,b as x,c as m}from"./DocsLayout-CUwxVCnV.js";import{N as o,P as t,a as j,b as u,c as b,d as g,e as f,f as w,g as v,h as y,i as N,j as k,k as S}from"./Navbar.stories-CxtYavOc.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFC7Cztk.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./experimental-VNRjj4Pl.js";import"./utils-DrFeXHBK.js";import"./index-Cu56kmkr.js";import"./index-Cf-CwZ9y.js";import"./index-Cg8zIP29.js";import"./index-71yw2hYF.js";import"./index-BnbJOCzs.js";import"./index-eyHDLC5v.js";import"./styles-DnVuGKPq.js";import"./index-CBgW3S2s.js";import"./chevron-down-CLkoBCE4.js";import"./createLucideIcon-BeEkWZrd.js";import"./graphic-DRi997Gx.js";import"./check-C42IfL-F.js";import"./constants-DTlHglvA.js";import"./index-fFdRnNGy.js";import"./index-C6PL8mjV.js";import"./index-CrHxJ1tp.js";import"./index-ByqrEM_-.js";import"./index-CE4V37Zw.js";import"./index-BC4UKXW_.js";import"./index-hTbK6lay.js";import"./user-mYAjcJ3w.js";import"./circle-question-mark-DHikYJlp.js";import"./Badge-CI8RaF_F.js";import"./Button-DJBoR_IJ.js";import"./useAriaDisabled-BVkOu7OW.js";import"./constants-jTWlLmnl.js";import"./Popover-BuTVlq4x.js";function a(s){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o}),`
`,e.jsx(n.h1,{id:"navbar",children:"Navbar"}),`
`,e.jsx(h,{of:o}),`
`,e.jsxs(i,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use the navbar and how to organize its links. Adapted from the"," ",e.jsx(n.a,{href:"https://designsystem.digital.gov/components/header/",children:"USWDS header guidance"}),"."]}),title:"Guidance",children:[e.jsx(r,{id:"when-to-use",children:"When to use"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"As the header on every page of a site or app"}),`, holding the brand, the main sections and
the user's account menu. Keep it in the same place on every page.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"For a modest number of main sections"}),`, each with at most a handful of subpages in a
dropdown.`]}),`
`]}),e.jsx(r,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Many sections or a deep hierarchy:"}),` add a side navigation for the lower levels, rather than
long dropdowns.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Switching views within a page:"})," use ",e.jsx(n.a,{href:"?path=/docs/actions-navigation-tabs--docs",children:"Tabs"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Showing where a page sits in the hierarchy:"}),` use
`,e.jsx(n.a,{href:"?path=/docs/actions-navigation-breadcrumbs--docs",children:"Breadcrumbs"})," below the navbar."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Commands, such as Sign out:"})," put them in the ",e.jsx(n.code,{children:"NavbarProfile"})," menu. ",e.jsx(n.code,{children:"NavbarNav"}),` and its
dropdowns are for links to pages.`]}),`
`]}),e.jsx(r,{id:"usability",children:"Usability guidance"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Put the important sections at the top level"}),`, ordered by demand, with the most-used first.
Items that don't fit move into "More", where they're harder to find, so keep the list short.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use short, plain labels."})," Avoid jargon and internal names."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Organize by what users come to do"}),", not by your organization's structure."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keep dropdowns short."}),` USWDS suggests six links or fewer. Dropdowns open on click, not on
hover, as USWDS recommends.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mark the current page."})," Set ",e.jsx(n.code,{children:"active"})," on its ",e.jsx(n.code,{children:"NavbarItem"})," or ",e.jsx(n.code,{children:"NavbarDropdownItem"}),`, and on
the `,e.jsx(n.code,{children:"NavbarDropdown"})," that holds it."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Use familiar icons for ",e.jsx(n.code,{children:"NavbarAction"}),"s"]}),", such as a bell for notifications. The ",e.jsx(n.code,{children:"label"}),` is
read by screen readers but not shown.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test your navigation with users"}),", and again after you change it."]}),`
`]})]}),`
`,e.jsxs(i,{id:"try-it",intro:"Change the values below to see how the navbar responds.",title:"Try it",children:[e.jsx(l,{of:t}),e.jsx(p,{of:t})]}),`
`,e.jsx(i,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(x,{})}),`
`,e.jsxs(i,{id:"accessibility",intro:"What the navbar handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(r,{id:"built-in",children:"Built in"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Landmarks and lists:"})," ",e.jsx(n.code,{children:"Navbar"})," is a ",e.jsx(n.code,{children:"<header>"}),", and ",e.jsx(n.code,{children:"NavbarNav"})," is a ",e.jsx(n.code,{children:"<nav>"}),` named "Main"
(change it with `,e.jsx(n.code,{children:"aria-label"}),`). Its items are a list, so screen readers announce how many
there are.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The current page"})," is marked ",e.jsx(n.code,{children:'aria-current="page"'})," by ",e.jsx(n.code,{children:"active"}),`, and shown by bold text, a
bar and a background. The bold text remains in forced colors (Windows High Contrast).`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Nav dropdowns:"})," the button reports ",e.jsx(n.code,{children:"aria-expanded"}),`, and Enter or Space opens it. Tab moves
through its links in order, then on to the next item. Escape closes it and returns focus to
the button, and tabbing away or clicking outside closes it. Only one is open at a time.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Profile menu:"}),` Enter, Space or Down opens it with focus on the first item. Up, Down, Home
and End move between items, and Escape closes it and returns focus to the avatar button.
Switch and checkbox items are checkable menu items with `,e.jsx(n.code,{children:"aria-checked"}),`, and choosing one
leaves the menu open. Disabled items are skipped and can't be chosen.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Small screens:"})," the menu button is named by ",e.jsx(n.code,{children:"toggleLabel"}),` ("Menu") and reports
`,e.jsx(n.code,{children:"aria-expanded"}),`. The panel follows it in focus order and isn't a focus trap: it's part of the
page, not an overlay. Escape inside the panel closes an open dropdown first, then the panel,
and returns focus to the button. The profile items become plain buttons and links in a list
named "Account", and its switch and checkbox items become a `,e.jsx(n.code,{children:"switch"})," and a ",e.jsx(n.code,{children:"checkbox"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Actions:"})," a ",e.jsx(n.code,{children:"NavbarAction"})," is named by its ",e.jsx(n.code,{children:"label"}),`, with the badge count added, e.g.
"Notifications (3 unread)" with `,e.jsx(n.code,{children:"badgeLabel"}),`. The icon and the visible badge are hidden from
screen readers.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus is visible"}),` on every link and button: a 3px ring, 3.2:1 against white, shown as an
outline in forced colors. Profile menu items show focus with a background instead.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Contrast:"}),` link text is 9.7:1 against white, and the current page's text 6.2:1 on its
background.`]}),`
`]}),e.jsx(r,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Add a skip link"}),` before the navbar that jumps to your main content, so keyboard users
don't have to tab through the whole navbar on every page.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Give each ",e.jsx(n.code,{children:"<nav>"})," a different name"]}),` when the page has more than one, such as a footer
nav: keep "Main" for this one.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Name the brand."})," A logo image needs ",e.jsx(n.code,{children:"alt"})," text, such as the product name."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Write a clear ",e.jsx(n.code,{children:"label"})," for every ",e.jsx(n.code,{children:"NavbarAction"})]}),", and pass ",e.jsx(n.code,{children:"badgeLabel"}),` to say what the
count means, e.g. "3 unread".`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Name popovers opened from an action."}),` In the Actions example, the notifications panel is
named by its heading through `,e.jsx(n.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Translate the built-in labels"})," for other languages with ",e.jsx(n.code,{children:"aria-label"}),", ",e.jsx(n.code,{children:"toggleLabel"}),` and
`,e.jsx(n.code,{children:"moreLabel"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Prefer ",e.jsx(n.code,{children:"NavbarProfileCheckboxItem"})," to ",e.jsx(n.code,{children:"NavbarProfileSwitchItem"})," for now."]}),` The switch's
off state has 1.25:1 contrast (`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues/205",rel:"nofollow",children:"#205"}),`), and on
and off look the same in Windows High Contrast mode
(`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues/206",rel:"nofollow",children:"#206"}),`). The checkbox's checkmark shows in
both.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keep small-screen actions few."})," Below ",e.jsx(n.code,{children:"collapseBelow"}),`, actions in the bar come after the
menu button and the open panel in focus order, though they're shown before the button
(`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues/233",rel:"nofollow",children:"#233"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Close the panel with the menu button or from inside the panel."}),` For now, Escape does
nothing while the menu button itself has focus
(`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues/234",rel:"nofollow",children:"#234"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(n.a,{href:"https://designsystem.digital.gov/components/header/accessibility-tests/",rel:"nofollow",children:"USWDS header accessibility tests"}),`
on your own site, including a screen reader pass and a check at 400% zoom.`]}),`
`]}),e.jsxs(n.p,{children:[`For an accessibility review, see
`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+Navbar",rel:"nofollow",children:"all open accessibility issues for Navbar"}),`,
and `,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues/205",rel:"nofollow",children:"#205"}),` and
`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues/206",rel:"nofollow",children:"#206"}),`, which are titled after Switch, where they
were found.`]})]}),`
`,e.jsx(i,{id:"api-reference",intro:e.jsxs(e.Fragment,{children:["Each part's props, as declared in Vero's types. Props inherited from standard HTML attributes or Radix, such as ",e.jsx(n.code,{children:"onSelect"})," and ",e.jsx(n.code,{children:"asChild"})," on"," ",e.jsx(n.code,{children:"NavbarProfileItem"}),", aren't listed."]}),title:"API reference",children:e.jsx(m,{components:[j,u,b,g,f,w,v,y,N,k,S]})})]})}function xe(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{xe as default};
