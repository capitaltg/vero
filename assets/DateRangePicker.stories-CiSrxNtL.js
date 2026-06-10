import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{D as d}from"./DateRangePicker-Co2SXZxL.js";import{r as l}from"./index-B0WjJBI_.js";import{b as V}from"./Calendar-CkWIp6FY.js";import"./utils-CU3My8Oi.js";import"./z-index-CmEG1ohp.js";import"./Button-CBLCRCsu.js";import"./useAriaDisabled-BVkOu7OW.js";import"./index-BOrrHd12.js";import"./index-EiwPuDyL.js";import"./constants-D9UEAID0.js";import"./styles-CafxXXJc.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-BeEkWZrd.js";import"./Popover-DN_Rd6an.js";import"./index-B5oA2Zbg.js";import"./index-DKzZmXCh.js";import"./index-CoRj-x2w.js";import"./index-KklXjS-Z.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CwPCC0ZT.js";import"./index-OiR64VEf.js";import"./index-BllD4pgw.js";import"./index-Cdcq5Wwr.js";import"./index-DKWC2_YT.js";import"./floating-ui.react-dom-Dsj8ROC4.js";import"./index-DBA0bpW4.js";import"./index-BHtEszHx.js";import"./chevron-right-Dw3Smd9x.js";const N=({placeholder:t={from:"Start date",to:"End date"},...a})=>{const[o,_]=l.useState(a.value||{});return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{placeholder:t,value:o,onChange:_,...a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",o.from?o.to?e.jsxs(e.Fragment,{children:[o.from.toLocaleDateString()," - ",o.to.toLocaleDateString()]}):o.from.toLocaleDateString():"none"]})]})};N.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerDefault",props:{placeholder:{defaultValue:{value:"{ from: 'Start date', to: 'End date' }",computed:!1},required:!1}}};const W=()=>{const[t,a]=l.useState({from:V(new Date,-2),to:new Date});return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{placeholder:{from:"Start date",to:"End date"},value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",t.from?t.to?e.jsxs(e.Fragment,{children:[t.from.toLocaleDateString()," - ",t.to.toLocaleDateString()]}):t.from.toLocaleDateString():"none"]})]})};W.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerWithValue"};const E=()=>{const[t,a]=l.useState({});return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{placeholder:{from:"Check-in date",to:"Check-out date"},value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",t.from?t.to?e.jsxs(e.Fragment,{children:[t.from.toLocaleDateString()," - ",t.to.toLocaleDateString()]}):t.from.toLocaleDateString():"none"]})]})};E.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerCustomPlaceholders"};const q=`import { useState } from 'react';
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
`,I=`import { addWeeks } from 'date-fns';
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
`,F=`import { useState } from 'react';
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
`,ue={title:"Data & Display/DateRangePicker",component:d,parameters:{},tags:["autodocs"],argTypes:{placeholder:{control:"object",description:"Placeholder text for the start and end date inputs",table:{type:{summary:"{ from?: string, to?: string }"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",description:"Whether the component is disabled",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the component"},name:{control:"text",description:"The name attribute for form submission. This is required for the date range picker value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the date range picker is required for form validation. When true, the form cannot be submitted without a date range selection.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the date range picker when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}}},r={args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},tags:["!autodocs"]},n={render:t=>e.jsx(N,{...t}),args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},parameters:{docs:{source:{code:q,language:"tsx"}}}},s={render:()=>e.jsx(W,{}),args:{value:{from:V(new Date,-2),to:new Date},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},parameters:{docs:{source:{code:I,language:"tsx"}}}},c={render:()=>e.jsx(E,{}),args:{value:{},onChange:()=>{},placeholder:{from:"Check-in date",to:"Check-out date"}},parameters:{docs:{source:{code:F,language:"tsx"}}}};var i,m,p,u,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:`Interactive playground for the DateRangePicker component.
Use the controls to experiment with different props and states.`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};var h,f,D,v,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(D=(f=n.parameters)==null?void 0:f.docs)==null?void 0:D.source},description:{story:`The default state of the DateRangePicker component.
Shows the basic date range picker with no pre-selected dates.`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.description}}};var k,x,y,P,R;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:`DateRangePicker with pre-selected date range.
Demonstrates how the component appears with initial start and end dates.`,...(R=(P=s.parameters)==null?void 0:P.docs)==null?void 0:R.description}}};var C,b,w,j,L;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source},description:{story:`DateRangePicker with custom placeholder text.
Shows how to customize the placeholder messages for both start and end dates.`,...(L=(j=c.parameters)==null?void 0:j.docs)==null?void 0:L.description}}};const ge=["Playground","Default","WithValue","CustomPlaceholders"];export{c as CustomPlaceholders,n as Default,r as Playground,s as WithValue,ge as __namedExportsOrder,ue as default};
