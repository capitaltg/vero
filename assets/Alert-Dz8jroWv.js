import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as l}from"./index-DL7Mpk60.js";import{M as h,D as d,C as c,a as x}from"./index-Dwd4rZEB.js";import{D as t,a as r,b as j,A as u}from"./DocsLayout-CUwxVCnV.js";import{A as g}from"./Alert-Ce0KNJTj.js";import{A as i,P as o}from"./Alert.stories-CfeK1Sq0.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFC7Cztk.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./styles-DnVuGKPq.js";import"./utils-DrFeXHBK.js";import"./index-CBgW3S2s.js";import"./x-DEnjg7Le.js";import"./createLucideIcon-BeEkWZrd.js";import"./Button-DJBoR_IJ.js";import"./useAriaDisabled-BVkOu7OW.js";import"./index-Cg8zIP29.js";import"./constants-jTWlLmnl.js";function a(s){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:i}),`
`,e.jsx(n.h1,{id:"alert",children:"Alert"}),`
`,e.jsx(d,{of:i}),`
`,e.jsxs(t,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use an alert and how to write one. Adapted from the"," ",e.jsx(n.a,{href:"https://designsystem.digital.gov/components/alert/",children:"USWDS alert guidance"}),"."]}),title:"Guidance",children:[e.jsx(r,{id:"when-to-use",children:"When to use"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"To tell users about the system's status"}),`, such as an error, a warning or an update, whether
or not they need to act on it.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"To confirm a result or ask for a correction"}),`, such as "Your application was submitted" or
"Fix the errors below".`]}),`
`]}),e.jsx(r,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"An action that destroys the user's work"}),`, such as deleting an account: ask for confirmation
in a `,e.jsx(n.a,{href:"?path=/docs/overlays-feedback-dialog--docs",children:"Dialog"}),", not an alert."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"An error in one field of a long form:"}),` show it next to the field too, not only in an alert
at the top.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Short help for one control:"})," use a ",e.jsx(n.a,{href:"?path=/docs/overlays-feedback-tooltip--docs",children:"Tooltip"}),`
or text next to the control.`]}),`
`]}),e.jsx(r,{id:"usability",children:"Usability guidance"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pick the variant by what happened:"})," ",e.jsx(n.code,{children:"danger"})," for a failure, ",e.jsx(n.code,{children:"warning"}),` for something that may
need action, `,e.jsx(n.code,{children:"success"})," for a completed action, and ",e.jsx(n.code,{children:"info"})," for anything else."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keep the heading short"}),", one line at most, and put the details in the message."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Say what to do next."})," If users have to act, tell them how, in plain language."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Be polite."})," Don't blame the user for an error."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use alerts sparingly."}),` Too many get ignored. Show only the ones that matter to what the user
is doing now.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Let users dismiss alerts that aren't essential"}),", with ",e.jsx(n.code,{children:"isClosable"}),`. The alert doesn't hide
itself: remove it in `,e.jsx(n.code,{children:"onClose"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Don't hide an alert and reveal it later."})," Add it to the page when it applies."]}),`
`]})]}),`
`,e.jsxs(t,{id:"try-it",intro:"Change the values below to see how the alert responds.",title:"Try it",children:[e.jsx(c,{of:o}),e.jsx(x,{of:o})]}),`
`,e.jsx(t,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(j,{})}),`
`,e.jsxs(t,{id:"accessibility",intro:"What the alert handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(r,{id:"built-in",children:"Built in"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"It's an alert to assistive technology"})," (",e.jsx(n.code,{children:'role="alert"'}),`), so screen readers announce it when
it's added to the page, interrupting what they're reading. With a `,e.jsx(n.code,{children:"heading"}),`, the heading names
the alert through `,e.jsx(n.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The heading is a real heading"}),", an ",e.jsx(n.code,{children:"h2"}),` by default, so screen reader users can find it in the
page's headings list.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The icon is hidden from screen readers"})," (",e.jsx(n.code,{children:"aria-hidden"}),"), so it isn't read as an image."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:'The close button is a native button named "Close".'}),` Tab reaches it, Enter and Space press it,
and it shows a focus ring.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Contrast:"}),` the text is at least 15:1 against each variant's background, and the close icon
6.2:1.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"In forced colors"}),` (Windows High Contrast), the text, icon, left border and the close button's
focus outline stay visible.`]}),`
`]}),e.jsx(r,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Choose the role."})," Every alert has ",e.jsx(n.code,{children:'role="alert"'}),`, which interrupts the user. That's right for
errors and urgent messages that appear after something the user did. For others, pass your own
`,e.jsx(n.code,{children:"role"})," (",e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues/162",rel:"nofollow",children:"#162"}),"):",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'role="status"'})," for a message that shouldn't interrupt, such as a success message;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'role="region"'})," with an ",e.jsx(n.code,{children:"aria-label"}),` for a standing notice that's part of the page when it
loads. Screen readers don't reliably announce alerts that are there on page load anyway.`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Add the alert when it applies"}),", rather than rendering it hidden and showing it later."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Say the type in words."}),` Color and the icon don't reach screen reader users, and the
`,e.jsx(n.code,{children:"warning"})," and ",e.jsx(n.code,{children:"info"}),` icons are only 2:1 against their backgrounds. Start the heading or message
with a word such as "Error" or "Warning".`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Choose ",e.jsx(n.code,{children:"headingLevel"})]})," to fit the page's heading structure. It defaults to ",e.jsx(n.code,{children:"h2"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Remove a closed alert and move focus."})," The close button only calls ",e.jsx(n.code,{children:"onClose"}),`. Remove the alert
there, and move focus somewhere sensible, such as the control that showed the alert. Otherwise
focus is lost when the button disappears
(`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues/165",rel:"nofollow",children:"#165"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Don't put actions that need an answer in an alert"}),`, such as "Delete account?" with Cancel and
Delete buttons. Use a `,e.jsx(n.a,{href:"?path=/docs/overlays-feedback-dialog--docs",children:"Dialog"}),`, which moves focus
to the question.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(n.a,{href:"https://designsystem.digital.gov/components/alert/accessibility-tests/",rel:"nofollow",children:"USWDS alert accessibility tests"}),`
on your own page, including a screen reader pass.`]}),`
`]}),e.jsxs(n.p,{children:[`For an accessibility review, see
`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+in%3Atitle+Alert",rel:"nofollow",children:"all open accessibility issues for Alert"}),"."]})]}),`
`,e.jsx(t,{id:"api-reference",intro:"The props declared in Vero's types. Standard HTML attributes aren't listed.",title:"API reference",children:e.jsx(u,{of:g})})]})}function X(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{X as default};
