import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as a}from"./index-DL7Mpk60.js";import{M as c,D as l,C as d,a as p}from"./index-Dwd4rZEB.js";import{D as i,a as t,b as u,c as x}from"./DocsLayout-CUwxVCnV.js";import{S as w}from"./SwitchGroup-8rLu1mwj.js";import{S as o,P as r}from"./SwitchGroup.stories-QbX4hLd-.js";import{S as j}from"./Switch-BdXkgBu4.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFC7Cztk.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./useFormGroupLayout-ZWE7ybff.js";import"./utils-DrFeXHBK.js";import"./Button-DJBoR_IJ.js";import"./useAriaDisabled-BVkOu7OW.js";import"./index-Cg8zIP29.js";import"./constants-jTWlLmnl.js";import"./styles-DnVuGKPq.js";import"./index-CBgW3S2s.js";import"./createLucideIcon-BeEkWZrd.js";import"./form-controls-UvU-3cIH.js";import"./index-71yw2hYF.js";import"./index-eyHDLC5v.js";import"./index-Cf-CwZ9y.js";import"./constants-DTlHglvA.js";import"./Label-C0TlDhz9.js";function h(n){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o}),`
`,e.jsx(s.h1,{id:"switchgroup",children:"SwitchGroup"}),`
`,e.jsx(l,{of:o}),`
`,e.jsxs(i,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a switch group and how to word and arrange its switches. USWDS has no switch component, so this guidance is Vero's own. The"," ",e.jsx(s.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/switch/",children:"WAI-ARIA switch pattern"})," ","describes how a switch behaves."]}),title:"Guidance",children:[e.jsx(t,{id:"when-to-use",children:"When to use"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"To turn several related settings on or off"}),`, such as notification preferences on a settings
page. Each switch works on its own.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"When each change takes effect immediately"}),`, with no Save or Submit button. That's what users
expect from a switch, as with a light switch.`]}),`
`,e.jsxs(s.li,{children:["For a single setting, use one ",e.jsx(s.a,{href:"?path=/docs/inputs-forms-switch--docs",children:"Switch"})," on its own."]}),`
`]}),e.jsx(t,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The choices are submitted with a form"}),`, and only take effect when the user presses Submit:
use a `,e.jsx(s.a,{href:"?path=/docs/inputs-forms-checkboxgroup--docs",children:"CheckboxGroup"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Only one option can be chosen:"}),` use a
`,e.jsx(s.a,{href:"?path=/docs/inputs-forms-radiogroup--docs",children:"RadioGroup"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The two states aren't on and off"}),`, such as "Monthly" and "Yearly": use a RadioGroup, so each
state has its own label.`]}),`
`]}),e.jsx(t,{id:"usability",children:"Usability guidance"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Name the group."}),` Say what the settings are for, such as "Notifications". See
`,e.jsx(s.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Apply each change right away, and show that it worked."}),` If saving can fail, turn the switch
back and say what went wrong. Don't make users press Save after using a switch.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Label the setting, not the action."}),` Write "Email notifications", not "Turn on email
notifications". The switch shows whether it's on.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep the label the same in both states."}),` Don't change "Notifications on" to "Notifications
off": the label and the switch would then disagree about what's on.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep labels short."}),` Put any explanation in text next to the switch, not in the label: the
whole label becomes the switch's name, which screen readers read every time it's focused.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"List switches vertically."})," Keep the default ",e.jsx(s.code,{children:'orientation="vertical"'}),`: in a row, it's harder to
tell which label goes with which switch. Use `,e.jsx(s.code,{children:"columns"})," to spread a long list across columns."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Order switches logically"}),`, such as by how often they're used, with related settings next to
each other.`]}),`
`]})]}),`
`,e.jsxs(i,{id:"try-it",intro:"Change the values below to see how the switch group responds.",title:"Try it",children:[e.jsx(d,{of:r}),e.jsx(p,{of:r})]}),`
`,e.jsx(i,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(u,{})}),`
`,e.jsxs(i,{id:"accessibility",intro:"What the group handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(t,{id:"built-in",children:"Built in"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Each option is a switch to assistive technology"})," (a ",e.jsx(s.code,{children:"button"})," with ",e.jsx(s.code,{children:'role="switch"'}),` and
`,e.jsx(s.code,{children:"aria-checked"}),"), named by its visible label, a ",e.jsx(s.code,{children:"<label>"})," linked to the switch."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keyboard:"}),` Tab and Shift+Tab move between switches, and Space or Enter turns the focused one
on or off, as the WAI-ARIA switch pattern describes.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Clicking the label toggles the switch."}),` Each label is linked to its switch by id. Options use
their `,e.jsx(s.code,{children:"id"}),", and ",e.jsx(s.code,{children:"Switch"})," children without an ",e.jsx(s.code,{children:"id"})," get a generated one."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Disabled switches stay focusable"})," and are marked ",e.jsx(s.code,{children:"aria-disabled"}),`, so screen reader users can
still find them and hear that they're unavailable. Clicks, label clicks, Space and Enter don't
change them. The group's `,e.jsx(s.code,{children:"isDisabled"})," disables every option."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Focus is visible:"}),` a focused switch gets a 3px ring, which stays visible in Windows High
Contrast mode.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Contrast when on:"}),` the track is 6.7:1 against white and the thumb 6.7:1 against the track,
above the 3:1 that WCAG requires for form controls. The off state is lower; see below.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Reduced motion:"})," the thumb doesn't slide when the user has asked for reduced motion."]}),`
`]}),e.jsx(t,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Name the group."})," The group renders a plain ",e.jsx(s.code,{children:"div"}),` with no role or name
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/161",rel:"nofollow",children:"#161"}),`), so screen readers announce each switch
without the topic it belongs to. Wrap it in a `,e.jsx(s.code,{children:"fieldset"})," with a ",e.jsx(s.code,{children:"legend"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<fieldset>
  <legend>Notifications</legend>
  <SwitchGroup onChange={setEnabled} options={notifications} value={enabled} />
</fieldset>
`})}),`
`,e.jsxs(s.p,{children:["Or pass ",e.jsx(s.code,{children:'role="group"'})," and ",e.jsx(s.code,{children:"aria-labelledby"})," pointing to a visible heading."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Make each option's ",e.jsx(s.code,{children:"id"})," unique on the page."]}),` It's used as the switch's id as is. If two
groups share option ids, the labels all point to the first group's switches, and the other
switches have no name (`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/227",rel:"nofollow",children:"#227"}),")."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Link explanations and errors yourself."}),` The group and its switches have no description or
error props. Put the text next to the switch and link it with `,e.jsx(s.code,{children:"aria-describedby"}),": on a ",e.jsx(s.code,{children:"Switch"}),`
child, or on the group for a message about the whole group.`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Announce failures."}),` If a change can't be saved, turn the switch back and show the error where
screen readers announce it, such as in an `,e.jsx(s.a,{href:"?path=/docs/overlays-feedback-alert--docs",children:"Alert"}),"."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Show the state in text where it matters."}),` For now, an off switch is hard to see: its track
has 1.25:1 contrast against white (`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/205",rel:"nofollow",children:"#205"}),`). In
Windows High Contrast mode, on and off look the same
(`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues/206",rel:"nofollow",children:"#206"}),")."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Test it in your page."}),` USWDS has no switch tests. Check the group against the
`,e.jsx(s.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/switch/",rel:"nofollow",children:"WAI-ARIA switch pattern"}),` in your own page,
including a screen reader pass: these checks can't cover your labels and layout.`]}),`
`]}),`
`]}),e.jsxs(s.p,{children:[`For an accessibility review, see
`,e.jsx(s.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+%28in%3Atitle+Switch+OR+in%3Atitle+SwitchGroup%29",rel:"nofollow",children:"all open accessibility issues for Switch and SwitchGroup"}),"."]})]}),`
`,e.jsx(i,{id:"api-reference",intro:"Each component's props, as declared in Vero's types. Standard HTML attributes and Radix props aren't listed.",title:"API reference",children:e.jsx(x,{components:[w,j]})})]})}function V(n={}){const{wrapper:s}={...a(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(h,{...n})}):h(n)}export{V as default};
