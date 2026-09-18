import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{D as o}from"./DatePicker-XvuCTrn4.js";import{r as d}from"./index-B0WjJBI_.js";import{s as oe}from"./subDays-DYNU6z_C.js";import{a as D}from"./Calendar-C2Ogfn1n.js";import"./Button-BinwIYAK.js";import"./useAriaDisabled-BVkOu7OW.js";import"./utils-CU3My8Oi.js";import"./index-BOrrHd12.js";import"./index-EiwPuDyL.js";import"./constants-D9UEAID0.js";import"./styles-CafxXXJc.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-BeEkWZrd.js";import"./Popover-D7LnbHHd.js";import"./z-index-CmEG1ohp.js";import"./index-B5oA2Zbg.js";import"./index-DKzZmXCh.js";import"./index-CoRj-x2w.js";import"./index-KklXjS-Z.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CwPCC0ZT.js";import"./index-OiR64VEf.js";import"./index-BllD4pgw.js";import"./index-Cdcq5Wwr.js";import"./index-DKWC2_YT.js";import"./floating-ui.react-dom-Dsj8ROC4.js";import"./index-DBA0bpW4.js";import"./index-BHtEszHx.js";import"./chevron-right-Dw3Smd9x.js";const X=({placeholder:t="Pick a date",...a})=>{const[n,r]=d.useState(a.value);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{placeholder:t,value:n,onChange:r,...a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected date: ",n?n.toLocaleDateString():"none"]})]})};X.__docgenInfo={description:"",methods:[],displayName:"DatePickerDefault",props:{placeholder:{defaultValue:{value:"'Pick a date'",computed:!1},required:!1}}};const Y=()=>{const[t,a]=d.useState(new Date("2024-03-15"));return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{placeholder:"Pick a date",value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected date: ",t?t.toLocaleDateString():"none"]})]})};Y.__docgenInfo={description:"",methods:[],displayName:"DatePickerWithValue"};const $=()=>{const[t,a]=d.useState(void 0);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{endMonth:new Date(2025,11),placeholder:"Pick a date",startMonth:new Date(2020,0),value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Navigation is limited to Jan 2020 - Dec 2025, but every day within those months stays selectable. Selected date: ",t?t.toLocaleDateString():"none"]})]})};$.__docgenInfo={description:"Deprecated -- prefer `minDate`/`maxDate`, as shown in the WithMinAndMaxDate\ndemo. `startMonth`/`endMonth` only limit navigation, so every day in January\n2020 and December 2025 below remains selectable.",methods:[],displayName:"DatePickerWithStartAndEndMonth"};const ee=()=>{const[t,a]=d.useState(void 0);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{placeholder:"Select your birthday",value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected date: ",t?t.toLocaleDateString():"none"]})]})};ee.__docgenInfo={description:"",methods:[],displayName:"DatePickerCustomPlaceholder"};const te=()=>{const[t,a]=d.useState(void 0),n=new Date,r=oe(n),s=D(n,30);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{maxDate:s,minDate:r,placeholder:"Pick a date",value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selectable between ",r.toLocaleDateString()," and ",s.toLocaleDateString(),". Selected date: ",t?t.toLocaleDateString():"none"]})]})};te.__docgenInfo={description:"",methods:[],displayName:"DatePickerWithMinAndMaxDate"};const ae=()=>{const[t,a]=d.useState(void 0),n=new Date,r=[D(n,3),D(n,4)];return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{excludeDates:s=>s.getDay()===0||s.getDay()===6||r.some(ne=>ne.toDateString()===s.toDateString()),placeholder:"Pick a weekday",value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Weekends and two blackout days are disabled. Selected date:"," ",t?t.toLocaleDateString():"none"]})]})};ae.__docgenInfo={description:"",methods:[],displayName:"DatePickerWithExcludedDates"};const re=`import { useState } from 'react';
import { DatePicker } from '../src/DatePicker';
import { DatePickerProps } from '../types';

export const DatePickerDefault = ({
  placeholder = 'Pick a date',
  ...args
}: Partial<DatePickerProps>) => {
  const [value, setValue] = useState<Date | undefined>(args.value);
  return (
    <div className="space-y-4">
      <DatePicker placeholder={placeholder} value={value} onChange={setValue} {...args} />
      <p className="text-sm text-muted-foreground">
        Selected date: {value ? value.toLocaleDateString() : 'none'}
      </p>
    </div>
  );
};
`,se=`import { useState } from 'react';
import { DatePicker } from '../src/DatePicker';

export const DatePickerWithValue = () => {
  const [value, setValue] = useState<Date | undefined>(new Date('2024-03-15'));
  return (
    <div className="space-y-4">
      <DatePicker placeholder="Pick a date" value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected date: {value ? value.toLocaleDateString() : 'none'}
      </p>
    </div>
  );
};
`,de=`import { useState } from 'react';
import { DatePicker } from '../src/DatePicker';

/**
 * Deprecated -- prefer \`minDate\`/\`maxDate\`, as shown in the WithMinAndMaxDate
 * demo. \`startMonth\`/\`endMonth\` only limit navigation, so every day in January
 * 2020 and December 2025 below remains selectable.
 */
export const DatePickerWithStartAndEndMonth = () => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  return (
    <div className="space-y-4">
      <DatePicker
        endMonth={new Date(2025, 11)}
        placeholder="Pick a date"
        startMonth={new Date(2020, 0)}
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Navigation is limited to Jan 2020 - Dec 2025, but every day within those months stays
        selectable. Selected date: {value ? value.toLocaleDateString() : 'none'}
      </p>
    </div>
  );
};
`,ce=`import { useState } from 'react';
import { DatePicker } from '../src/DatePicker';

export const DatePickerCustomPlaceholder = () => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  return (
    <div className="space-y-4">
      <DatePicker placeholder="Select your birthday" value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected date: {value ? value.toLocaleDateString() : 'none'}
      </p>
    </div>
  );
};
`,ie=`import { addDays, subDays } from 'date-fns';
import { useState } from 'react';
import { DatePicker } from '../src/DatePicker';

export const DatePickerWithMinAndMaxDate = () => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  const today = new Date();
  const minDate = subDays(today, 7);
  const maxDate = addDays(today, 30);

  return (
    <div className="space-y-4">
      <DatePicker
        maxDate={maxDate}
        minDate={minDate}
        placeholder="Pick a date"
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selectable between {minDate.toLocaleDateString()} and {maxDate.toLocaleDateString()}.
        Selected date: {value ? value.toLocaleDateString() : 'none'}
      </p>
    </div>
  );
};
`,le=`import { addDays } from 'date-fns';
import { useState } from 'react';
import { DatePicker } from '../src/DatePicker';

export const DatePickerWithExcludedDates = () => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  const today = new Date();
  // A couple of blackout days, plus every weekend.
  const blackout = [addDays(today, 3), addDays(today, 4)];

  return (
    <div className="space-y-4">
      <DatePicker
        excludeDates={date =>
          date.getDay() === 0 ||
          date.getDay() === 6 ||
          blackout.some(d => d.toDateString() === date.toDateString())
        }
        placeholder="Pick a weekday"
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Weekends and two blackout days are disabled. Selected date:{' '}
        {value ? value.toLocaleDateString() : 'none'}
      </p>
    </div>
  );
};
`,Re={title:"Data & Display/DatePicker",component:o,parameters:{},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text for the date picker",table:{type:{summary:"string"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",description:"Whether the component is disabled",table:{type:{summary:"boolean"}}},minDate:{control:"date",description:"The earliest date a user can select, inclusive. Days before this are disabled.",table:{type:{summary:"Date"}}},maxDate:{control:"date",description:"The latest date a user can select, inclusive. Days after this are disabled.",table:{type:{summary:"Date"}}},excludeDates:{control:!1,description:"Days to exclude from selection inside the allowed window, as a `Date[]` or a `(date: Date) => boolean` predicate. Excluded days are disabled in the calendar. Unlike `minDate`/`maxDate`, this does not affect which months can be navigated to.",table:{type:{summary:"Date[] | ((date: Date) => boolean)"}}},startMonth:{control:"date",description:"**Deprecated** -- prefer `minDate`. Limits which months the user can navigate to, at month granularity; every day in the boundary month stays selectable. Still honoured, and takes precedence over the month derived from `minDate`, for the uncommon case of browsing a wider range than can be selected.",table:{category:"Deprecated",type:{summary:"Date"}}},endMonth:{control:"date",description:"**Deprecated** -- prefer `maxDate`. Limits which months the user can navigate to, at month granularity; every day in the boundary month stays selectable. Still honoured, and takes precedence over the month derived from `maxDate`, for the uncommon case of browsing a wider range than can be selected.",table:{category:"Deprecated",type:{summary:"Date"}}},className:{type:"string",description:"Additional class names to apply to the component"},name:{control:"text",description:"The name attribute for form submission. This is required for the date picker value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the date picker is required for form validation. When true, the form cannot be submitted without a date selection.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the date picker when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}}},c={args:{value:void 0,onChange:()=>{},placeholder:"Pick a date"},tags:["!autodocs"]},i={render:t=>e.jsx(X,{...t}),args:{value:void 0,onChange:()=>{},placeholder:"Pick a date"},parameters:{docs:{source:{code:re,language:"tsx"}}}},l={render:()=>e.jsx(Y,{}),args:{value:new Date("2024-03-15"),onChange:()=>{},placeholder:"Pick a date"},parameters:{docs:{source:{code:se,language:"tsx"}}}},u={render:()=>e.jsx($,{}),args:{onChange:()=>{},placeholder:"Pick a date",startMonth:new Date(2020,0),endMonth:new Date(2025,11)},parameters:{docs:{source:{code:de,language:"tsx"}}}},m={render:()=>e.jsx(ee,{}),args:{value:void 0,onChange:()=>{},placeholder:"Select your birthday"},parameters:{docs:{source:{code:ce,language:"tsx"}}}},p={render:()=>e.jsx(te,{}),args:{onChange:()=>{},placeholder:"Pick a date"},parameters:{docs:{source:{code:ie,language:"tsx"}}}},h={render:()=>e.jsx(ae,{}),args:{onChange:()=>{},placeholder:"Pick a date"},parameters:{docs:{source:{code:le,language:"tsx"}}}};var g,y,x,f,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:`Interactive playground for the DatePicker component.
Use the controls to experiment with different props and states.`,...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.description}}};var k,P,b,S,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <DatePickerDefault {...args} />,
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
        language: 'tsx'
      }
    }
  }
}`,...(b=(P=i.parameters)==null?void 0:P.docs)==null?void 0:b.source},description:{story:`The default state of the DatePicker component.
Shows the basic date picker with no pre-selected date.`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.description}}};var C,M,W,N,V;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <DatePickerWithValue />,
  args: {
    value: new Date('2024-03-15'),
    onChange: () => {},
    placeholder: 'Pick a date'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithValue,
        language: 'tsx'
      }
    }
  }
}`,...(W=(M=l.parameters)==null?void 0:M.docs)==null?void 0:W.source},description:{story:`DatePicker with a pre-selected date.
Demonstrates how the component appears with an initial date value.`,...(V=(N=l.parameters)==null?void 0:N.docs)==null?void 0:V.description}}};var j,A,E,L,_;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <DatePickerWithStartAndEndMonth />,
  args: {
    onChange: () => {},
    placeholder: 'Pick a date',
    startMonth: new Date(2020, 0),
    endMonth: new Date(2025, 11)
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithStartAndEndMonth,
        language: 'tsx'
      }
    }
  }
}`,...(E=(A=u.parameters)==null?void 0:A.docs)==null?void 0:E.source},description:{story:'**Deprecated -- prefer `minDate`/`maxDate`.**\n\n`startMonth`/`endMonth` limit which months the user can navigate to. They\nwork at month granularity and never blocked selection: every day within the\nboundary months stays selectable, so they cannot express a bound like "no\nearlier than the 15th". They remain honoured, and still take precedence over\nthe months derived from `minDate`/`maxDate`, for the uncommon case of letting\nusers browse a wider range than they can select.',...(_=(L=u.parameters)==null?void 0:L.docs)==null?void 0:_.description}}};var I,T,q,J,z;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <DatePickerCustomPlaceholder />,
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Select your birthday'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomPlaceholder,
        language: 'tsx'
      }
    }
  }
}`,...(q=(T=m.parameters)==null?void 0:T.docs)==null?void 0:q.source},description:{story:`DatePicker with custom placeholder text.
Shows how to customize the placeholder message when no date is selected.`,...(z=(J=m.parameters)==null?void 0:J.docs)==null?void 0:z.description}}};var R,U,F,O,Z;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <DatePickerWithMinAndMaxDate />,
  args: {
    onChange: () => {},
    placeholder: 'Pick a date'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithMinAndMaxDate,
        language: 'tsx'
      }
    }
  }
}`,...(F=(U=p.parameters)==null?void 0:U.docs)==null?void 0:F.source},description:{story:"DatePicker restricted to a specific range of days.\n`minDate` and `maxDate` are inclusive: days outside the window are disabled\nin the calendar and cannot be selected by mouse or keyboard. Navigation is\nlimited to the surrounding months unless `startMonth`/`endMonth` are set\nexplicitly.",...(Z=(O=p.parameters)==null?void 0:O.docs)==null?void 0:Z.description}}};var B,G,H,K,Q;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <DatePickerWithExcludedDates />,
  args: {
    onChange: () => {},
    placeholder: 'Pick a date'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithExcludedDates,
        language: 'tsx'
      }
    }
  }
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:`DatePicker with individual days excluded.
\`excludeDates\` disables days *inside* the allowed window -- blackout dates,
weekends, holidays -- as either an explicit list or a predicate. It does not
change which months can be navigated to, since exclusions are holes rather
than edges.`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};const Ue=["Playground","Default","WithValue","WithStartAndEndMonth","CustomPlaceholder","WithMinAndMaxDate","WithExcludedDates"];export{m as CustomPlaceholder,i as Default,c as Playground,h as WithExcludedDates,p as WithMinAndMaxDate,u as WithStartAndEndMonth,l as WithValue,Ue as __namedExportsOrder,Re as default};
