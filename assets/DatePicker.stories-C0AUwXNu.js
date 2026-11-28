import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{D as o}from"./DatePicker-I3Nz70ZO.js";import{r as h}from"./index-B0WjJBI_.js";import{s as oe}from"./subDays-Bc6fcRoE.js";import{b as D}from"./Calendar-ACLC_s1C.js";const Y=({placeholder:t="Pick a date",...a})=>{const[n,r]=h.useState(a.value);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{placeholder:t,value:n,onChange:r,...a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected date: ",n?n.toLocaleDateString():"none"]})]})};Y.__docgenInfo={description:"",methods:[],displayName:"DatePickerDefault",props:{placeholder:{defaultValue:{value:"'Pick a date'",computed:!1},required:!1}}};const Z=()=>{const[t,a]=h.useState(new Date("2024-03-15"));return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{placeholder:"Pick a date",value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected date: ",t?t.toLocaleDateString():"none"]})]})};Z.__docgenInfo={description:"",methods:[],displayName:"DatePickerWithValue"};const $=()=>{const[t,a]=h.useState(void 0);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{endMonth:new Date(2025,11),placeholder:"Pick a date",startMonth:new Date(2020,0),value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Navigation is limited to Jan 2020 - Dec 2025, but every day within those months stays selectable. Selected date: ",t?t.toLocaleDateString():"none"]})]})};$.__docgenInfo={description:"Deprecated -- prefer `minDate`/`maxDate`, as shown in the WithMinAndMaxDate\ndemo. `startMonth`/`endMonth` only limit navigation, so every day in January\n2020 and December 2025 below remains selectable.",methods:[],displayName:"DatePickerWithStartAndEndMonth"};const ee=()=>{const[t,a]=h.useState(void 0);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{placeholder:"Select your birthday",value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected date: ",t?t.toLocaleDateString():"none"]})]})};ee.__docgenInfo={description:"",methods:[],displayName:"DatePickerCustomPlaceholder"};const te=()=>{const[t,a]=h.useState(void 0),n=new Date,r=oe(n),s=D(n,30);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{maxDate:s,minDate:r,placeholder:"Pick a date",value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selectable between ",r.toLocaleDateString()," and ",s.toLocaleDateString(),". Selected date: ",t?t.toLocaleDateString():"none"]})]})};te.__docgenInfo={description:"",methods:[],displayName:"DatePickerWithMinAndMaxDate"};const ae=()=>{const[t,a]=h.useState(void 0),n=new Date,r=[D(n,3),D(n,4)];return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{excludeDates:s=>s.getDay()===0||s.getDay()===6||r.some(ne=>ne.toDateString()===s.toDateString()),placeholder:"Pick a weekday",value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Weekends and two blackout days are disabled. Selected date:"," ",t?t.toLocaleDateString():"none"]})]})};ae.__docgenInfo={description:"",methods:[],displayName:"DatePickerWithExcludedDates"};const re=`import { useState } from 'react';
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
`,ce=`import { useState } from 'react';
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
`,de=`import { useState } from 'react';
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
`,ue={title:"Data & Display/DatePicker",component:o,parameters:{},argTypes:{placeholder:{control:"text",table:{type:{summary:"string"}}},zIndex:{control:"number",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",table:{type:{summary:"boolean"}}},minDate:{control:"date",table:{type:{summary:"Date"}}},maxDate:{control:"date",table:{type:{summary:"Date"}}},excludeDates:{control:!1,table:{type:{summary:"Date[] | ((date: Date) => boolean)"}}},startMonth:{control:"date",table:{category:"Deprecated",type:{summary:"Date"}}},endMonth:{control:"date",table:{category:"Deprecated",type:{summary:"Date"}}},className:{type:"string"},name:{control:"text",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}}},c={args:{value:void 0,onChange:()=>{},placeholder:"Pick a date"}},d={render:t=>e.jsx(Y,{...t}),args:{value:void 0,onChange:()=>{},placeholder:"Pick a date"},parameters:{docs:{source:{code:re,language:"tsx"}}}},i={render:()=>e.jsx(Z,{}),args:{value:new Date("2024-03-15"),onChange:()=>{},placeholder:"Pick a date"},parameters:{docs:{source:{code:se,language:"tsx"}}}},l={render:()=>e.jsx($,{}),args:{onChange:()=>{},placeholder:"Pick a date",startMonth:new Date(2020,0),endMonth:new Date(2025,11)},parameters:{docs:{source:{code:ce,language:"tsx"}}}},u={render:()=>e.jsx(ee,{}),args:{value:void 0,onChange:()=>{},placeholder:"Select your birthday"},parameters:{docs:{source:{code:de,language:"tsx"}}}},m={render:()=>e.jsx(te,{}),args:{onChange:()=>{},placeholder:"Pick a date"},parameters:{docs:{source:{code:ie,language:"tsx"}}}},p={render:()=>e.jsx(ae,{}),args:{onChange:()=>{},placeholder:"Pick a date"},parameters:{docs:{source:{code:le,language:"tsx"}}}};var g,y,x,k,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date'
  }
}`,...(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.description}}};var P,f,S,b,w;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(S=(f=d.parameters)==null?void 0:f.docs)==null?void 0:S.source},description:{story:`The default state of the DatePicker component.
Shows the basic date picker with no pre-selected date.`,...(w=(b=d.parameters)==null?void 0:b.docs)==null?void 0:w.description}}};var M,C,W,N,j;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(C=i.parameters)==null?void 0:C.docs)==null?void 0:W.source},description:{story:`DatePicker with a pre-selected date.
Demonstrates how the component appears with an initial date value.`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.description}}};var V,E,A,_,L;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(A=(E=l.parameters)==null?void 0:E.docs)==null?void 0:A.source},description:{story:'**Deprecated -- prefer `minDate`/`maxDate`.**\n\n`startMonth`/`endMonth` limit which months the user can navigate to. They\nwork at month granularity and never blocked selection: every day within the\nboundary months stays selectable, so they cannot express a bound like "no\nearlier than the 15th". They remain honoured, and still take precedence over\nthe months derived from `minDate`/`maxDate`, for the uncommon case of letting\nusers browse a wider range than they can select.',...(L=(_=l.parameters)==null?void 0:_.docs)==null?void 0:L.description}}};var I,T,q,J,z;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(q=(T=u.parameters)==null?void 0:T.docs)==null?void 0:q.source},description:{story:`DatePicker with custom placeholder text.
Shows how to customize the placeholder message when no date is selected.`,...(z=(J=u.parameters)==null?void 0:J.docs)==null?void 0:z.description}}};var O,F,R,U,B;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=(F=m.parameters)==null?void 0:F.docs)==null?void 0:R.source},description:{story:"DatePicker restricted to a specific range of days.\n`minDate` and `maxDate` are inclusive: days outside the window are disabled\nin the calendar and cannot be selected by mouse or keyboard. Navigation is\nlimited to the surrounding months unless `startMonth`/`endMonth` are set\nexplicitly.",...(B=(U=m.parameters)==null?void 0:U.docs)==null?void 0:B.description}}};var G,H,K,Q,X;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(H=p.parameters)==null?void 0:H.docs)==null?void 0:K.source},description:{story:`DatePicker with individual days excluded.
\`excludeDates\` disables days *inside* the allowed window -- blackout dates,
weekends, holidays -- as either an explicit list or a predicate. It does not
change which months can be navigated to, since exclusions are holes rather
than edges.`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};const me=["Playground","Default","WithValue","WithStartAndEndMonth","CustomPlaceholder","WithMinAndMaxDate","WithExcludedDates"],xe=Object.freeze(Object.defineProperty({__proto__:null,CustomPlaceholder:u,Default:d,Playground:c,WithExcludedDates:p,WithMinAndMaxDate:m,WithStartAndEndMonth:l,WithValue:i,__namedExportsOrder:me,default:ue},Symbol.toStringTag,{value:"Module"}));export{xe as D,c as P};
