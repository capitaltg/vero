import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as o}from"./index-DL7Mpk60.js";import{M as l,D as h,C as c,a as p}from"./index-Dwd4rZEB.js";import{D as t,a as i,b as x,A as m}from"./DocsLayout-CUwxVCnV.js";import{D as u}from"./DatePicker-D_9uveRd.js";import{D as r,P as a}from"./DatePicker.stories-BrMQ8Yk1.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFC7Cztk.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./Button-DJBoR_IJ.js";import"./useAriaDisabled-BVkOu7OW.js";import"./utils-DrFeXHBK.js";import"./index-Cg8zIP29.js";import"./constants-jTWlLmnl.js";import"./styles-DnVuGKPq.js";import"./index-CBgW3S2s.js";import"./createLucideIcon-BeEkWZrd.js";import"./Popover-BuTVlq4x.js";import"./index-Cu56kmkr.js";import"./index-Cf-CwZ9y.js";import"./index-71yw2hYF.js";import"./index-BnbJOCzs.js";import"./index-eyHDLC5v.js";import"./index-CrHxJ1tp.js";import"./index-ByqrEM_-.js";import"./index-hTbK6lay.js";import"./index-CE4V37Zw.js";import"./Calendar-ACLC_s1C.js";import"./chevron-right-Dw3Smd9x.js";import"./subDays-Bc6fcRoE.js";function d(s){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r}),`
`,e.jsx(n.h1,{id:"datepicker",children:"DatePicker"}),`
`,e.jsx(h,{of:r}),`
`,e.jsxs(t,{id:"guidance",intro:e.jsxs(e.Fragment,{children:["When to use a date picker, and when a text field works better. Adapted from the"," ",e.jsx(n.a,{href:"https://designsystem.digital.gov/components/date-picker/",children:"USWDS date picker guidance"}),"."]}),title:"Guidance",children:[e.jsx(i,{id:"when-to-use",children:"When to use"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"To schedule or record an event"}),", such as an appointment, where seeing a calendar helps."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"When the day of the week matters"}),", such as picking a weekday for a delivery."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"For dates close to today."}),` The calendar opens on the selected date, or on today's date, so
nearby dates take a few key presses or clicks.`]}),`
`,e.jsxs(n.li,{children:[`For a start and an end date, use a
`,e.jsx(n.a,{href:"?path=/docs/data-display-daterangepicker--docs",children:"DateRangePicker"}),"."]}),`
`]}),e.jsx(i,{id:"when-to-use-something-else",children:"When to use something else"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dates users know or can look up"}),`, such as a date of birth or a passport's issue date: use text
fields, such as separate month, day and year `,e.jsx(n.a,{href:"?path=/docs/inputs-forms-input--docs",children:"Inputs"}),`.
Paging back decades in a calendar is slow.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The day of the week doesn't matter:"})," text fields are usually quicker."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Users need to type the date."}),` Vero's date picker is pick-only: there's no text field to type
into. USWDS recommends always letting users type a date, because some people find that faster or
easier. Where that matters, use text fields with a format hint, such as "MM/DD/YYYY".`]}),`
`]}),e.jsx(i,{id:"usability",children:"Usability guidance"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Say what the date is for in a visible label"}),`, such as "Appointment date". See
`,e.jsx(n.a,{href:"#accessibility-your-responsibility",children:"Your responsibility"})," for how to link it."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use the placeholder as an instruction, not as the label."}),` It's replaced by the date once one
is picked.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Limit the choices with ",e.jsx(n.code,{children:"minDate"}),", ",e.jsx(n.code,{children:"maxDate"})," and ",e.jsx(n.code,{children:"excludeDates"})]}),` rather than rejecting a date
after it's picked. Unavailable days are disabled in the calendar.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Explain the limits in hint text"}),`, such as "Weekdays in the next 30 days". The calendar doesn't
say why a day is unavailable.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Set ",e.jsx(n.code,{children:"minDate"})," and ",e.jsx(n.code,{children:"maxDate"})," for dates far from today."]}),` They also set the years in the
calendar's year list. Without them, the list covers this year and the 23 before it, so a future
year can only be reached month by month.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Don't submit the form or start another action when a date is picked."}),` Users may pick the
wrong day, and screen reader users can lose their place.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Disable the picker only when no date can be chosen"}),", and say how to make it available."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The picked date is shown with the month name"}),`, such as "March 14, 2024", so it can't be
misread as day-month or month-day.`]}),`
`]})]}),`
`,e.jsxs(t,{id:"try-it",intro:"Change the values below to see how the date picker responds.",title:"Try it",children:[e.jsx(c,{of:a}),e.jsx(p,{of:a})]}),`
`,e.jsx(t,{id:"examples",intro:"Common setups, each with its source. Use Show code to copy one.",title:"Examples",children:e.jsx(x,{})}),`
`,e.jsxs(t,{id:"accessibility",intro:"What the date picker handles for you and what you need to add.",title:"Accessibility",children:[e.jsx(i,{id:"built-in",children:"Built in"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The trigger is a button"})," with ",e.jsx(n.code,{children:'aria-haspopup="dialog"'})," and ",e.jsx(n.code,{children:"aria-expanded"}),`. Its text, the
placeholder or the picked date, is its name unless you label it.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Opening the calendar moves focus into it"}),`, to the selected day, or to today when no date is
picked. Focus stays in the calendar until it closes.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard in the calendar"}),`, as in the
`,e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/",rel:"nofollow",children:"WAI-ARIA date picker example"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Left and Right arrows move by day, Up and Down by week."}),`
`,e.jsx(n.li,{children:"Home and End move to the start and end of the week."}),`
`,e.jsx(n.li,{children:"Page Up and Page Down move by month; with Shift, by year."}),`
`,e.jsx(n.li,{children:"Enter or Space picks the focused day, closes the calendar and returns focus to the trigger."}),`
`,e.jsx(n.li,{children:"Escape closes the calendar and returns focus to the trigger."}),`
`,e.jsx(n.li,{children:`Tab moves between the previous and next month buttons, the month and year buttons, and the
days.`}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The calendar is a grid"})," (",e.jsx(n.code,{children:'role="grid"'}),`) named by its month and year. Each day is a button
named with its full date, such as "Thursday, March 14th, 2024". The selected day adds
"selected" and is marked `,e.jsx(n.code,{children:"aria-selected"}),`; today's date starts with "Today".`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unavailable days are disabled"}),", and the arrow keys skip them."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"When disabled, the trigger stays focusable"})," and is marked ",e.jsx(n.code,{children:"aria-disabled"}),`, so screen reader
users can still find it. Clicks, Enter and Space don't open the calendar.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["It passes your ",e.jsx(n.code,{children:"aria-describedby"})," and ",e.jsx(n.code,{children:"aria-labelledby"})," to the trigger."]}),` In a
`,e.jsx(n.a,{href:"?path=/docs/inputs-forms-formitem--docs",children:"FormItem"}),`, the hint and error are added to your own
`,e.jsx(n.code,{children:"aria-describedby"}),", and an error sets ",e.jsx(n.code,{children:"aria-invalid"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Contrast:"}),` the trigger's border is 6.7:1 against white and the placeholder text 5.3:1. The
selected day's fill and the focus ring on days are 6.7:1. Days from the next and previous months
are 4.5:1.`]}),`
`]}),e.jsx(i,{id:"your-responsibility",children:"Your responsibility"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Give it a label that includes the date."})," A plain ",e.jsx(n.code,{children:"<label for>"}),`, such as FormItem's string
`,e.jsx(n.code,{children:"label"}),`, replaces the trigger's text as its name, so screen reader users hear "Start date" but
not the picked date (`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues/225",rel:"nofollow",children:"#225"}),`). Point
`,e.jsx(n.code,{children:"aria-labelledby"})," at the label and at the trigger itself:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<FormItem
  hintText="Weekdays in the next 30 days."
  label={
    <Label htmlFor="start" id="start-label">
      Start date
    </Label>
  }
>
  <DatePicker
    aria-labelledby="start-label start"
    id="start"
    maxDate={maxDate}
    minDate={minDate}
    value={start}
    onChange={setStart}
  />
</FormItem>
`})}),`
`,e.jsx(n.p,{children:`The trigger's name is then "Start date Pick a date", and "Start date" plus the date once one is
picked.`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Validate required dates yourself."})," For now, ",e.jsx(n.code,{children:"required"}),` doesn't stop the form from
submitting, and its `,e.jsx(n.code,{children:"aria-required"}),` isn't announced on a button
(`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues/224",rel:"nofollow",children:"#224"}),`). Put "(required)" in the label text, check
for a date on submit, and show the error with FormItem's `,e.jsx(n.code,{children:"errorText"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Explain unavailable dates in hint text."})," Disabled days are skipped and not explained."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Make the label say what the date is for."}),` For now, the calendar dialog has no name of its own
(`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues/220",rel:"nofollow",children:"#220"}),`), so screen readers announce only "dialog"
when it opens.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Expect the month and year buttons to be hard to reach by voice."}),` For now, their names are
"Select calendar month" and "Select calendar year", not the month and year they show
(`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues/223",rel:"nofollow",children:"#223"}),`). The previous and next month buttons and
the arrow keys still work.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Show the picked date outside the calendar where users rely on Windows High Contrast mode."}),`
For now, the selected day isn't visible in the calendar in that mode
(`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues/222",rel:"nofollow",children:"#222"}),"). The trigger still shows the date as text."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Offer typed entry where users need it."}),` The picker has no text field. Some users, including
some screen reader and voice users, find typing a date easier: use text fields instead, as in
`,e.jsx(n.a,{href:"#guidance-when-to-use-something-else",children:"When to use something else"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Test it in your page."}),` Run the
`,e.jsx(n.a,{href:"https://designsystem.digital.gov/components/date-picker/accessibility-tests/",rel:"nofollow",children:"USWDS date picker accessibility tests"}),`
on your own form, including a screen reader pass. They're written for USWDS's typed-entry
picker, so skip the steps for the text field.`]}),`
`]}),`
`]}),e.jsxs(n.p,{children:[`For an accessibility review, see
`,e.jsx(n.a,{href:"https://github.com/capitaltg/vero/issues?q=is%3Aopen+label%3Aa11y+%28in%3Atitle+DatePicker+OR+in%3Atitle+DateRangePicker%29",rel:"nofollow",children:"all open accessibility issues for DatePicker and DateRangePicker"}),"."]})]}),`
`,e.jsx(t,{id:"api-reference",intro:"The props declared in Vero's types. Other button attributes aren't listed.",title:"API reference",children:e.jsx(m,{of:u})})]})}function J(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{J as default};
