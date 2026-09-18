import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{D as r}from"./DateRangePicker-CegRRIwR.js";import{r as u}from"./index-B0WjJBI_.js";import{d as O,a as K}from"./Calendar-C2Ogfn1n.js";import{s as Q}from"./subDays-DYNU6z_C.js";import"./utils-CU3My8Oi.js";import"./z-index-CmEG1ohp.js";import"./Button-BinwIYAK.js";import"./useAriaDisabled-BVkOu7OW.js";import"./index-BOrrHd12.js";import"./index-EiwPuDyL.js";import"./constants-D9UEAID0.js";import"./styles-CafxXXJc.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-BeEkWZrd.js";import"./Popover-D7LnbHHd.js";import"./index-B5oA2Zbg.js";import"./index-DKzZmXCh.js";import"./index-CoRj-x2w.js";import"./index-KklXjS-Z.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CwPCC0ZT.js";import"./index-OiR64VEf.js";import"./index-BllD4pgw.js";import"./index-Cdcq5Wwr.js";import"./index-DKWC2_YT.js";import"./floating-ui.react-dom-Dsj8ROC4.js";import"./index-DBA0bpW4.js";import"./index-BHtEszHx.js";import"./chevron-right-Dw3Smd9x.js";const Z=({placeholder:e={from:"Start date",to:"End date"},...n})=>{const[a,o]=u.useState(n.value||{});return t.jsxs("div",{className:"space-y-4",children:[t.jsx(r,{placeholder:e,value:a,onChange:o,...n}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",a.from?a.to?t.jsxs(t.Fragment,{children:[a.from.toLocaleDateString()," - ",a.to.toLocaleDateString()]}):a.from.toLocaleDateString():"none"]})]})};Z.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerDefault",props:{placeholder:{defaultValue:{value:"{ from: 'Start date', to: 'End date' }",computed:!1},required:!1}}};const B=()=>{const[e,n]=u.useState({from:O(new Date,-2),to:new Date});return t.jsxs("div",{className:"space-y-4",children:[t.jsx(r,{placeholder:{from:"Start date",to:"End date"},value:e,onChange:n}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",e.from?e.to?t.jsxs(t.Fragment,{children:[e.from.toLocaleDateString()," - ",e.to.toLocaleDateString()]}):e.from.toLocaleDateString():"none"]})]})};B.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerWithValue"};const G=()=>{const[e,n]=u.useState({});return t.jsxs("div",{className:"space-y-4",children:[t.jsx(r,{placeholder:{from:"Check-in date",to:"Check-out date"},value:e,onChange:n}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",e.from?e.to?t.jsxs(t.Fragment,{children:[e.from.toLocaleDateString()," - ",e.to.toLocaleDateString()]}):e.from.toLocaleDateString():"none"]})]})};G.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerCustomPlaceholders"};const H=()=>{const[e,n]=u.useState({}),a=new Date,o=Q(a),p=K(a,30);return t.jsxs("div",{className:"space-y-4",children:[t.jsx(r,{maxDate:p,minDate:o,placeholder:{from:"Start date",to:"End date"},value:e,onChange:n}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selectable between ",o.toLocaleDateString()," and ",p.toLocaleDateString(),". Selected range:"," ",e.from?`${e.from.toLocaleDateString()}${e.to?` - ${e.to.toLocaleDateString()}`:""}`:"none"]})]})};H.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerWithMinAndMaxDate"};const J=()=>{const[e,n]=u.useState({}),a=o=>o.getDay()===0||o.getDay()===6;return t.jsxs("div",{className:"space-y-4",children:[t.jsx(r,{excludeDates:a,placeholder:{from:"Start date",to:"End date"},value:e,onChange:n}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Weekends are disabled, and a range may not span one — picking an end date across a weekend starts a new range instead. Selected range:"," ",e.from?`${e.from.toLocaleDateString()}${e.to?` - ${e.to.toLocaleDateString()}`:""}`:"none"]})]})};J.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerWithExcludedDates"};const X=`import { useState } from 'react';
import { DateRangePicker } from '../src/DateRangePicker';
import type { DateRange, DateRangePickerProps } from '../types';

export const DateRangePickerDefault = ({
  placeholder = { from: 'Start date', to: 'End date' },
  ...args
}: Partial<DateRangePickerProps>) => {
  const [value, setValue] = useState<DateRange>(args.value || {});
  return (
    <div className="space-y-4">
      <DateRangePicker placeholder={placeholder} value={value} onChange={setValue} {...args} />
      <p className="text-sm text-muted-foreground">
        Selected range:{' '}
        {value.from ? (
          value.to ? (
            <>
              {value.from.toLocaleDateString()} - {value.to.toLocaleDateString()}
            </>
          ) : (
            value.from.toLocaleDateString()
          )
        ) : (
          'none'
        )}
      </p>
    </div>
  );
};
`,Y=`import { addWeeks } from 'date-fns';
import { useState } from 'react';
import { DateRangePicker } from '../src/DateRangePicker';
import type { DateRange } from '../types';

export const DateRangePickerWithValue = () => {
  const [value, setValue] = useState<DateRange>({
    from: addWeeks(new Date(), -2), // 2 weeks before
    to: new Date(),
  });
  return (
    <div className="space-y-4">
      <DateRangePicker
        placeholder={{
          from: 'Start date',
          to: 'End date',
        }}
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selected range:{' '}
        {value.from ? (
          value.to ? (
            <>
              {value.from.toLocaleDateString()} - {value.to.toLocaleDateString()}
            </>
          ) : (
            value.from.toLocaleDateString()
          )
        ) : (
          'none'
        )}
      </p>
    </div>
  );
};
`,ee=`import { useState } from 'react';
import { DateRangePicker } from '../src/DateRangePicker';
import type { DateRange } from '../types';

export const DateRangePickerCustomPlaceholders = () => {
  const [value, setValue] = useState<DateRange>({});
  return (
    <div className="space-y-4">
      <DateRangePicker
        placeholder={{
          from: 'Check-in date',
          to: 'Check-out date',
        }}
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selected range:{' '}
        {value.from ? (
          value.to ? (
            <>
              {value.from.toLocaleDateString()} - {value.to.toLocaleDateString()}
            </>
          ) : (
            value.from.toLocaleDateString()
          )
        ) : (
          'none'
        )}
      </p>
    </div>
  );
};
`,te=`import { addDays, subDays } from 'date-fns';
import { useState } from 'react';
import { DateRangePicker } from '../src/DateRangePicker';
import type { DateRange } from '../types';

export const DateRangePickerWithMinAndMaxDate = () => {
  const [value, setValue] = useState<DateRange>({});
  const today = new Date();
  const minDate = subDays(today, 7);
  const maxDate = addDays(today, 30);

  return (
    <div className="space-y-4">
      <DateRangePicker
        maxDate={maxDate}
        minDate={minDate}
        placeholder={{ from: 'Start date', to: 'End date' }}
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selectable between {minDate.toLocaleDateString()} and {maxDate.toLocaleDateString()}.
        Selected range:{' '}
        {value.from
          ? \`\${value.from.toLocaleDateString()}\${value.to ? \` - \${value.to.toLocaleDateString()}\` : ''}\`
          : 'none'}
      </p>
    </div>
  );
};
`,ae=`import { useState } from 'react';
import { DateRangePicker } from '../src/DateRangePicker';
import type { DateRange } from '../types';

export const DateRangePickerWithExcludedDates = () => {
  const [value, setValue] = useState<DateRange>({});
  const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;

  return (
    <div className="space-y-4">
      <DateRangePicker
        excludeDates={isWeekend}
        placeholder={{ from: 'Start date', to: 'End date' }}
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Weekends are disabled, and a range may not span one — picking an end date across a weekend
        starts a new range instead. Selected range:{' '}
        {value.from
          ? \`\${value.from.toLocaleDateString()}\${value.to ? \` - \${value.to.toLocaleDateString()}\` : ''}\`
          : 'none'}
      </p>
    </div>
  );
};
`,Ve={title:"Data & Display/DateRangePicker",component:r,parameters:{},tags:["autodocs"],argTypes:{placeholder:{control:"object",description:"Placeholder text for the start and end date inputs",table:{type:{summary:"{ from?: string, to?: string }"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",description:"Whether the component is disabled",table:{type:{summary:"boolean"}}},minDate:{control:"date",description:"The earliest date a user can select, inclusive. Days before this are disabled.",table:{type:{summary:"Date"}}},maxDate:{control:"date",description:"The latest date a user can select, inclusive. Days after this are disabled.",table:{type:{summary:"Date"}}},excludeDates:{control:!1,description:"Days to exclude from selection inside the allowed window, as a `Date[]` or a `(date: Date) => boolean` predicate. Excluded days are disabled in the calendar. Unlike `minDate`/`maxDate`, this does not affect which months can be navigated to.",table:{type:{summary:"Date[] | ((date: Date) => boolean)"}}},startMonth:{control:"date",description:"**Deprecated** -- prefer `minDate`. Limits which months the user can navigate to, at month granularity; every day in the boundary month stays selectable. Still honoured, and takes precedence over the month derived from `minDate`, for the uncommon case of browsing a wider range than can be selected.",table:{category:"Deprecated",type:{summary:"Date"}}},endMonth:{control:"date",description:"**Deprecated** -- prefer `maxDate`. Limits which months the user can navigate to, at month granularity; every day in the boundary month stays selectable. Still honoured, and takes precedence over the month derived from `maxDate`, for the uncommon case of browsing a wider range than can be selected.",table:{category:"Deprecated",type:{summary:"Date"}}},className:{type:"string",description:"Additional class names to apply to the component"},name:{control:"text",description:"The name attribute for form submission. This is required for the date range picker value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the date range picker is required for form validation. When true, the form cannot be submitted without a date range selection.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the date range picker when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}}},s={args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},tags:["!autodocs"]},d={render:e=>t.jsx(Z,{...e}),args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},parameters:{docs:{source:{code:X,language:"tsx"}}}},c={render:()=>t.jsx(B,{}),args:{value:{from:O(new Date,-2),to:new Date},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},parameters:{docs:{source:{code:Y,language:"tsx"}}}},i={render:()=>t.jsx(G,{}),args:{value:{},onChange:()=>{},placeholder:{from:"Check-in date",to:"Check-out date"}},parameters:{docs:{source:{code:ee,language:"tsx"}}}},l={render:()=>t.jsx(H,{}),args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},parameters:{docs:{source:{code:te,language:"tsx"}}}},m={render:()=>t.jsx(J,{}),args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},parameters:{docs:{source:{code:ae,language:"tsx"}}}};var g,h,D,f,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date'
    }
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(D=(h=s.parameters)==null?void 0:h.docs)==null?void 0:D.source},description:{story:`Interactive playground for the DateRangePicker component.
Use the controls to experiment with different props and states.`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};var x,v,S,k,b;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <DateRangePickerDefault {...args} />,
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date'
    }
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
        language: 'tsx'
      }
    }
  }
}`,...(S=(v=d.parameters)==null?void 0:v.docs)==null?void 0:S.source},description:{story:`The default state of the DateRangePicker component.
Shows the basic date range picker with no pre-selected dates.`,...(b=(k=d.parameters)==null?void 0:k.docs)==null?void 0:b.description}}};var P,R,C,w,W;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <DateRangePickerWithValue />,
  args: {
    value: {
      from: addWeeks(new Date(), -2),
      // 2 weeks before
      to: new Date()
    },
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date'
    }
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithValue,
        language: 'tsx'
      }
    }
  }
}`,...(C=(R=c.parameters)==null?void 0:R.docs)==null?void 0:C.source},description:{story:`DateRangePicker with pre-selected date range.
Demonstrates how the component appears with initial start and end dates.`,...(W=(w=c.parameters)==null?void 0:w.docs)==null?void 0:W.description}}};var L,E,N,j,V;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <DateRangePickerCustomPlaceholders />,
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Check-in date',
      to: 'Check-out date'
    }
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomPlaceholders,
        language: 'tsx'
      }
    }
  }
}`,...(N=(E=i.parameters)==null?void 0:E.docs)==null?void 0:N.source},description:{story:`DateRangePicker with custom placeholder text.
Shows how to customize the placeholder messages for both start and end dates.`,...(V=(j=i.parameters)==null?void 0:j.docs)==null?void 0:V.description}}};var M,_,$,A,q;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <DateRangePickerWithMinAndMaxDate />,
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date'
    }
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithMinAndMaxDate,
        language: 'tsx'
      }
    }
  }
}`,...($=(_=l.parameters)==null?void 0:_.docs)==null?void 0:$.source},description:{story:"DateRangePicker restricted to a specific range of days.\n`minDate` and `maxDate` are inclusive: days outside the window are disabled\nin the calendar, so neither end of the selected range can fall outside it.\nNavigation is limited to the surrounding months unless `startMonth`/`endMonth`\nare set explicitly.",...(q=(A=l.parameters)==null?void 0:A.docs)==null?void 0:q.description}}};var I,T,F,z,U;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <DateRangePickerWithExcludedDates />,
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date'
    }
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithExcludedDates,
        language: 'tsx'
      }
    }
  }
}`,...(F=(T=m.parameters)==null?void 0:T.docs)==null?void 0:F.source},description:{story:`DateRangePicker with individual days excluded.
\`excludeDates\` disables days *inside* the allowed window, so they cannot be
used as either end of a range. A range may also not span an excluded day:
picking an end date across one starts a new range from that day instead.`,...(U=(z=m.parameters)==null?void 0:z.docs)==null?void 0:U.description}}};const Me=["Playground","Default","WithValue","CustomPlaceholders","WithMinAndMaxDate","WithExcludedDates"];export{i as CustomPlaceholders,d as Default,s as Playground,m as WithExcludedDates,l as WithMinAndMaxDate,c as WithValue,Me as __namedExportsOrder,Ve as default};
