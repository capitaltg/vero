import{j as a}from"./jsx-runtime-DSvmvvsx.js";import{D as m}from"./DateRangePicker-DMS53onl.js";import{r as u}from"./index-B0WjJBI_.js";import{d as U,b as Q}from"./Calendar-ACLC_s1C.js";import{s as X}from"./subDays-Bc6fcRoE.js";const B=({placeholder:e={from:"Start date",to:"End date"},...n})=>{const[t,o]=u.useState(n.value||{});return a.jsxs("div",{className:"space-y-4",children:[a.jsx(m,{placeholder:e,value:t,onChange:o,...n}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",t.from?t.to?a.jsxs(a.Fragment,{children:[t.from.toLocaleDateString()," - ",t.to.toLocaleDateString()]}):t.from.toLocaleDateString():"none"]})]})};B.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerDefault",props:{placeholder:{defaultValue:{value:"{ from: 'Start date', to: 'End date' }",computed:!1},required:!1}}};const G=()=>{const[e,n]=u.useState({from:U(new Date,-2),to:new Date});return a.jsxs("div",{className:"space-y-4",children:[a.jsx(m,{placeholder:{from:"Start date",to:"End date"},value:e,onChange:n}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",e.from?e.to?a.jsxs(a.Fragment,{children:[e.from.toLocaleDateString()," - ",e.to.toLocaleDateString()]}):e.from.toLocaleDateString():"none"]})]})};G.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerWithValue"};const H=()=>{const[e,n]=u.useState({});return a.jsxs("div",{className:"space-y-4",children:[a.jsx(m,{placeholder:{from:"Check-in date",to:"Check-out date"},value:e,onChange:n}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",e.from?e.to?a.jsxs(a.Fragment,{children:[e.from.toLocaleDateString()," - ",e.to.toLocaleDateString()]}):e.from.toLocaleDateString():"none"]})]})};H.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerCustomPlaceholders"};const J=()=>{const[e,n]=u.useState({}),t=new Date,o=X(t),g=Q(t,30);return a.jsxs("div",{className:"space-y-4",children:[a.jsx(m,{maxDate:g,minDate:o,placeholder:{from:"Start date",to:"End date"},value:e,onChange:n}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selectable between ",o.toLocaleDateString()," and ",g.toLocaleDateString(),". Selected range:"," ",e.from?`${e.from.toLocaleDateString()}${e.to?` - ${e.to.toLocaleDateString()}`:""}`:"none"]})]})};J.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerWithMinAndMaxDate"};const K=()=>{const[e,n]=u.useState({}),t=o=>o.getDay()===0||o.getDay()===6;return a.jsxs("div",{className:"space-y-4",children:[a.jsx(m,{excludeDates:t,placeholder:{from:"Start date",to:"End date"},value:e,onChange:n}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Weekends are disabled, and a range may not span one — picking an end date across a weekend starts a new range instead. Selected range:"," ",e.from?`${e.from.toLocaleDateString()}${e.to?` - ${e.to.toLocaleDateString()}`:""}`:"none"]})]})};K.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerWithExcludedDates"};const Y=`import { useState } from 'react';
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
`,Z=`import { addWeeks } from 'date-fns';
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
`,ae=`import { addDays, subDays } from 'date-fns';
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
`,te=`import { useState } from 'react';
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
`,ne={title:"Data & Display/DateRangePicker",component:m,parameters:{},argTypes:{placeholder:{control:"object",table:{type:{summary:"{ from?: string, to?: string }"}}},zIndex:{control:"number",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",table:{type:{summary:"boolean"}}},minDate:{control:"date",table:{type:{summary:"Date"}}},maxDate:{control:"date",table:{type:{summary:"Date"}}},excludeDates:{control:!1,table:{type:{summary:"Date[] | ((date: Date) => boolean)"}}},startMonth:{control:"date",table:{category:"Deprecated",type:{summary:"Date"}}},endMonth:{control:"date",table:{category:"Deprecated",type:{summary:"Date"}}},className:{type:"string"},name:{control:"text",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}}},r={args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}}},s={render:e=>a.jsx(B,{...e}),args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},parameters:{docs:{source:{code:Y,language:"tsx"}}}},d={render:()=>a.jsx(G,{}),args:{value:{from:U(new Date,-2),to:new Date},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},parameters:{docs:{source:{code:Z,language:"tsx"}}}},c={render:()=>a.jsx(H,{}),args:{value:{},onChange:()=>{},placeholder:{from:"Check-in date",to:"Check-out date"}},parameters:{docs:{source:{code:ee,language:"tsx"}}}},l={render:()=>a.jsx(J,{}),args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},parameters:{docs:{source:{code:ae,language:"tsx"}}}},i={render:()=>a.jsx(K,{}),args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},parameters:{docs:{source:{code:te,language:"tsx"}}}};var p,D,h,f,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date'
    }
  }
}`,...(h=(D=r.parameters)==null?void 0:D.docs)==null?void 0:h.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.description}}};var y,S,v,k,P;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source},description:{story:`The default state of the DateRangePicker component.
Shows the basic date range picker with no pre-selected dates.`,...(P=(k=s.parameters)==null?void 0:k.docs)==null?void 0:P.description}}};var R,C,b,w,W;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(b=(C=d.parameters)==null?void 0:C.docs)==null?void 0:b.source},description:{story:`DateRangePicker with pre-selected date range.
Demonstrates how the component appears with initial start and end dates.`,...(W=(w=d.parameters)==null?void 0:w.docs)==null?void 0:W.description}}};var E,L,j,N,V;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(j=(L=c.parameters)==null?void 0:L.docs)==null?void 0:j.source},description:{story:`DateRangePicker with custom placeholder text.
Shows how to customize the placeholder messages for both start and end dates.`,...(V=(N=c.parameters)==null?void 0:N.docs)==null?void 0:V.description}}};var M,_,$,A,I;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...($=(_=l.parameters)==null?void 0:_.docs)==null?void 0:$.source},description:{story:"DateRangePicker restricted to a specific range of days.\n`minDate` and `maxDate` are inclusive: days outside the window are disabled\nin the calendar, so neither end of the selected range can fall outside it.\nNavigation is limited to the surrounding months unless `startMonth`/`endMonth`\nare set explicitly.",...(I=(A=l.parameters)==null?void 0:A.docs)==null?void 0:I.description}}};var q,T,F,z,O;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(F=(T=i.parameters)==null?void 0:T.docs)==null?void 0:F.source},description:{story:`DateRangePicker with individual days excluded.
\`excludeDates\` disables days *inside* the allowed window, so they cannot be
used as either end of a range. A range may also not span an excluded day:
picking an end date across one starts a new range from that day instead.`,...(O=(z=i.parameters)==null?void 0:z.docs)==null?void 0:O.description}}};const oe=["Playground","Default","WithValue","CustomPlaceholders","WithMinAndMaxDate","WithExcludedDates"],ie=Object.freeze(Object.defineProperty({__proto__:null,CustomPlaceholders:c,Default:s,Playground:r,WithExcludedDates:i,WithMinAndMaxDate:l,WithValue:d,__namedExportsOrder:oe,default:ne},Symbol.toStringTag,{value:"Module"}));export{ie as D,r as P};
