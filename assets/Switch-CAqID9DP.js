import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as h}from"./index-DL7Mpk60.js";import{M as c,D as l,C as d,a as u}from"./index-Dwd4rZEB.js";import{D as i,a as n,b as x,A as w}from"./DocsLayout-CUwxVCnV.js";import{S as j}from"./Switch-BdXkgBu4.js";import{S as r,P as o}from"./Switch.stories-BOjvDIEj.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFC7Cztk.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./useAriaDisabled-BVkOu7OW.js";import"./form-controls-UvU-3cIH.js";import"./styles-DnVuGKPq.js";import"./utils-DrFeXHBK.js";import"./index-71yw2hYF.js";import"./index-Cg8zIP29.js";import"./index-eyHDLC5v.js";import"./index-Cf-CwZ9y.js";import"./constants-DTlHglvA.js";import"./Label-C0TlDhz9.js";function a(t){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...h(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r}),`
`,e.jsx(s.h1,{id:"switch",children:"Switch"}),`
`,e.jsx(l,{of:r}),`
`,e.jsxs(i,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a single switch and how to word it. USWDS has no switch component, so this guidance is Vero's own. The"," ",e.jsx(s.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/switch/",children:"WAI-ARIA switch pattern"})," ","describes how a switch behaves."]}),title:"Guidance",children:[e.jsx(n,{id:"when-to-use",children:"When to use"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"For a single setting that takes effect immediately"}),`, such as turning notifications on, with
no Save or Submit button.`]}),`
`,e.jsxs(s.li,{children:[`For several related settings, use a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-switchgroup--docs",children:"SwitchGroup"}),`, which has the full guidance for sets
of switches.`]}),`
`]}),e.jsx(n,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The choice is submitted with a form"}),`, such as accepting terms: use a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-checkbox--docs",children:"Checkbox"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The two states aren't on and off"}),`, such as "Monthly" and "Yearly": use a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-radiogroup--docs",children:"RadioGroup"}),", so each state has its own label."]}),`
`]}),e.jsx(n,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Apply the change right away, and show that it worked."}),` If saving can fail, turn the switch
back and say what went wrong.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Label the setting, not the action."}),` Write "Email notifications", not "Turn on email
notifications". The switch shows whether it's on.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep the label the same in both states."}),` Don't change "Notifications on" to "Notifications
off": the label and the switch would then disagree about what's on.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep the label short."}),` Put any explanation in text next to the switch, not in the label: the
whole label becomes the switch's name, which screen readers read every time it's focused.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Clicking the label toggles the switch"}),", which gives touch users a larger target."]}),`
`]})]}),`
`,e.jsxs(i,{id:"try-it",intro:"Change the values below to see how the switch responds.",title:"Try it",children:[e.jsx(d,{of:o}),e.jsx(u,{of:o})]}),`
`,e.jsx(i,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(x,{})}),`
`,e.jsxs(i,{id:"accessibility",intro:"What the switch handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(n,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"It's a switch to assistive technology"})," (a ",e.jsx(s.code,{children:"button"})," with ",e.jsx(s.code,{children:'role="switch"'})," and ",e.jsx(s.code,{children:"aria-checked"}),`),
named by its visible label, a `,e.jsx(s.code,{children:"<label>"})," linked to the switch. Without an ",e.jsx(s.code,{children:"id"}),`, it gets a
generated one, so the label is always linked and clicking it toggles the switch.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keyboard:"}),` Tab reaches it, and Space or Enter turns it on or off, as the WAI-ARIA switch
pattern describes.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"It must have a name."})," Without a ",e.jsx(s.code,{children:"label"})," or an ",e.jsx(s.code,{children:"aria-label"}),`, it throws an error, so an unnamed
switch can't ship unnoticed (but see `,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/164",rel:"nofollow",children:"#164"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When disabled it stays focusable"})," and is marked ",e.jsx(s.code,{children:"aria-disabled"}),`, so screen reader users can
still find it and hear that it's unavailable. Clicks, label clicks, Space and Enter don't change
it.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"required"})," sets ",e.jsx(s.code,{children:"aria-required"})]}),", so screen readers announce it."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Your ",e.jsx(s.code,{children:"aria-describedby"})," is passed through"]})," to the switch unchanged."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Focus is visible:"}),` a focused switch gets a 3px ring, which stays visible in Windows High
Contrast mode.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast when on:"}),` the track is 6.7:1 against white and the thumb 6.7:1 against the track,
above the 3:1 that WCAG requires for form controls. The off state is lower; see below.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Reduced motion:"})," the thumb doesn't slide when the user has asked for reduced motion."]}),`
`]}),e.jsx(n,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Prefer a visible ",e.jsx(s.code,{children:"label"}),"."]})," Use ",e.jsx(s.code,{children:"aria-label"}),` only when the purpose is clear from what's around
the switch, such as a row in a table of settings.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Show a requirement in the label text too"}),', such as "(required)": ',e.jsx(s.code,{children:"aria-required"}),` only reaches
screen reader users.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Link explanations and errors yourself."}),` The switch has no description or error prop. Put the
text next to it and link it with `,e.jsx(s.code,{children:"aria-describedby"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Announce failures."}),` If a change can't be saved, turn the switch back and show the error where
screen readers announce it, such as in an `,e.jsx(s.a,{href:"?path=/docs/overlays-feedback-alert--docs",children:"Alert"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Show the state in text where it matters."}),` For now, an off switch is hard to see: its track
has 1.25:1 contrast against white (`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/205",rel:"nofollow",children:"#205"}),`). In
Windows High Contrast mode, on and off look the same
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/206",rel:"nofollow",children:"#206"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Test it in your page."}),` USWDS has no switch tests. Check it against the
`,e.jsx(s.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/switch/",rel:"nofollow",children:"WAI-ARIA switch pattern"}),` in your own page,
including a screen reader pass.`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+%28in%3Atitle+Switch+OR+in%3Atitle+SwitchGroup%29",rel:"nofollow",children:"all open accessibility issues for Switch and SwitchGroup"}),"."]})]}),`
`,e.jsx(i,{id:"api-reference",intro:"The props declared in Vero's types. Standard HTML attributes and Radix props aren't listed.",title:"API reference",children:e.jsx(w,{of:j})})]})}function L(t={}){const{wrapper:s}={...h(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(a,{...t})}):a(t)}export{L as default};
