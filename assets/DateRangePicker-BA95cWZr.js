import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as d}from"./index-DL7Mpk60.js";import{M as l,D as h,C as c,a as p}from"./index-AIFAtT5C.js";import{D as n,a as i,b as x,A as g}from"./DocsLayout-CGJ2GL3I.js";import{D as u}from"./DateRangePicker-DMS53onl.js";import{D as r,P as a}from"./DateRangePicker.stories-fyjJLxT7.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-G2KODbDz.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./Calendar-ACLC_s1C.js";import"./createLucideIcon-BeEkWZrd.js";import"./constants-jTWlLmnl.js";import"./styles-DnVuGKPq.js";import"./utils-DrFeXHBK.js";import"./index-CBgW3S2s.js";import"./chevron-right-Dw3Smd9x.js";import"./Button-DJBoR_IJ.js";import"./useAriaDisabled-BVkOu7OW.js";import"./index-Cg8zIP29.js";import"./index-Cu56kmkr.js";import"./index-Cf-CwZ9y.js";import"./index-71yw2hYF.js";import"./index-BnbJOCzs.js";import"./index-eyHDLC5v.js";import"./Popover-BuTVlq4x.js";import"./index-CrHxJ1tp.js";import"./index-ByqrEM_-.js";import"./index-hTbK6lay.js";import"./index-CE4V37Zw.js";import"./subDays-Bc6fcRoE.js";function o(s){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r}),`
`,e.jsx(t.h1,{id:"daterangepicker",children:"DateRangePicker"}),`
`,e.jsx(h,{of:r}),`
`,e.jsxs(n,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a date range picker and how to make the two steps clear. Adapted from the"," ",e.jsx(t.a,{href:"https://designsystem.digital.gov/components/date-range-picker/",children:"USWDS date range picker guidance"}),"."]}),title:"Guidance",children:[e.jsx(i,{id:"when-to-use",children:"When to use"}),e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"To pick a start and an end date"}),`, such as a trip, a leave request or a reporting period,
where seeing two months side by side helps.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"?path=/docs/data-display-datepicker--docs",children:"DatePicker"}),` has the full guidance for date pickers.
It applies here too.`]}),`
`]}),e.jsx(i,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"A single date:"})," use a ",e.jsx(t.a,{href:"?path=/docs/data-display-datepicker--docs",children:"DatePicker"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"The day of the week doesn't matter, or users need to type the dates:"}),` use two sets of text
fields, one for the start and one for the end. The picker has no text field to type into.`]}),`
`]}),e.jsx(i,{id:"usability",children:"Usability guidance"}),e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Say that two dates are needed."}),` The first click sets the start and the second the end, but
the trigger only shows `,e.jsx(t.code,{children:"placeholder.from"}),`, so nothing prompts for the end date
(`,e.jsx(t.a,{href:"https://github.com/capitaltg/vero/issues/226",rel:"nofollow",children:"#226"}),`). Use hint text such as "Pick a check-in
date, then a check-out date".`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Know how a new click changes the range."}),` Clicking a day before the start, or any day after a
complete range, starts a new range. Clicking the start again clears it.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Explain excluded dates."})," A range can't span a day in ",e.jsx(t.code,{children:"excludeDates"}),`: picking an end date
across one starts a new range from that day instead. Say so in hint text, such as "Your stay
can't include a weekend".`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"The calendar stays open after both dates are picked"}),`, so users can check the range. Escape,
or clicking outside, closes it.`]}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Don't submit the form or start another action when the range is complete."})}),`
`]})]}),`
`,e.jsxs(n,{id:"try-it",intro:"Change the values below to see how the date range picker responds.",title:"Try it",children:[e.jsx(c,{of:a}),e.jsx(p,{of:a})]}),`
`,e.jsx(n,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(x,{})}),`
`,e.jsxs(n,{id:"accessibility",intro:"What the date range picker handles for you and what you need to add. The calendar works as in DatePicker; the differences are below.",title:"Accessibility",children:[e.jsx(i,{id:"built-in",children:"Built in"}),e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"The trigger is a button"})," with ",e.jsx(t.code,{children:'aria-haspopup="dialog"'})," and ",e.jsx(t.code,{children:"aria-expanded"}),`. Its text, the
placeholder or the picked dates, is its name unless you label it.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Opening the calendar moves focus into it"}),`, to the start date, or to today when no range is
picked. Focus stays in the calendar until it closes.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Keyboard in the calendar"}),` is the same as in
`,e.jsx(t.a,{href:"?path=/docs/data-display-datepicker--docs#accessibility-built-in",children:"DatePicker"}),`: arrows, Home and
End, and Page Up and Page Down move between days, across both months. Enter or Space picks the
focused day and keeps the calendar open. Escape closes it and returns focus to the trigger.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Each month is a grid"})," (",e.jsx(t.code,{children:'role="grid"'}),`) named by its month and year. Each day is a button named
with its full date, and every day in the range is marked `,e.jsx(t.code,{children:"aria-selected"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Unavailable days are disabled"}),", and the arrow keys skip them."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"When disabled, the trigger stays focusable"})," and is marked ",e.jsx(t.code,{children:"aria-disabled"}),`. Clicks, Enter and
Space don't open the calendar.`]}),`
`,e.jsxs(t.li,{children:[e.jsxs(t.strong,{children:["It passes your ",e.jsx(t.code,{children:"aria-describedby"})," and ",e.jsx(t.code,{children:"aria-labelledby"})," to the trigger"]}),", as DatePicker does."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Contrast:"}),` the trigger's border is 6.7:1 against white and the placeholder text 5.3:1. The
start and end days' fill and the focus ring on days are 6.7:1. Days between them have dark blue
text, 5.1:1 on their light blue fill; that fill is only 1.23:1 against white
(`,e.jsx(t.a,{href:"https://github.com/capitaltg/vero/issues/125",rel:"nofollow",children:"#125"}),")."]}),`
`]}),e.jsx(i,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Give it a label that includes the dates."})," As with DatePicker, a plain ",e.jsx(t.code,{children:"<label for>"}),` replaces
the trigger's text as its name (`,e.jsx(t.a,{href:"https://github.com/capitaltg/vero/issues/225",rel:"nofollow",children:"#225"}),`). Point
`,e.jsx(t.code,{children:"aria-labelledby"}),` at the label and at the trigger, as in
`,e.jsx(t.a,{href:"?path=/docs/data-display-datepicker--docs#accessibility-your-responsibility",children:"DatePicker's example"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Tell users to pick two dates"}),`, in the label or hint text. The trigger doesn't prompt for the
end date (`,e.jsx(t.a,{href:"https://github.com/capitaltg/vero/issues/226",rel:"nofollow",children:"#226"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Check for a complete range yourself."}),` A range with only a start date submits as one date. For
now, `,e.jsx(t.code,{children:"required"}),` doesn't stop the form from submitting, and the trigger isn't marked
`,e.jsx(t.code,{children:"aria-required"})," (",e.jsx(t.a,{href:"https://github.com/capitaltg/vero/issues/224",rel:"nofollow",children:"#224"}),`). Put "(required)" in the
label text, check both dates on submit, and show the error with FormItem's `,e.jsx(t.code,{children:"errorText"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Explain unavailable and excluded dates in hint text."}),` Disabled days are skipped and not
explained, and a range that would include an excluded day silently restarts.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Make the label say what the dates are for."}),` For now, the calendar dialog has no name of its
own (`,e.jsx(t.a,{href:"https://github.com/capitaltg/vero/issues/220",rel:"nofollow",children:"#220"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Expect the month and year buttons to be hard to reach by voice"}),`
(`,e.jsx(t.a,{href:"https://github.com/capitaltg/vero/issues/223",rel:"nofollow",children:"#223"}),`). The previous and next month buttons and
the arrow keys still work.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Show the picked range outside the calendar where users rely on Windows High Contrast mode."}),`
For now, the range isn't visible in the calendar in that mode
(`,e.jsx(t.a,{href:"https://github.com/capitaltg/vero/issues/222",rel:"nofollow",children:"#222"}),`). The trigger still shows the dates as
text.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(t.a,{href:"https://designsystem.digital.gov/components/date-range-picker/accessibility-tests/",rel:"nofollow",children:"USWDS date range picker accessibility tests"}),`
on your own form, including a screen reader pass. Skip the steps for the text fields.`]}),`
`]}),e.jsxs(t.p,{children:[`For an accessibility review, see
`,e.jsx(t.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+%28in%3Atitle+DatePicker+OR+in%3Atitle+DateRangePicker%29",rel:"nofollow",children:"all open accessibility issues for DatePicker and DateRangePicker"}),"."]})]}),`
`,e.jsx(n,{id:"api-reference",intro:"The props declared in Vero's types. Other button attributes aren't listed.",title:"API reference",children:e.jsx(g,{of:u})})]})}function N(s={}){const{wrapper:t}={...d(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(o,{...s})}):o(s)}export{N as default};
