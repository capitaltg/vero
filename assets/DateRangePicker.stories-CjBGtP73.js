import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{D as d}from"./DateRangePicker-HD_mMMS8.js";import{r as l}from"./index-D4H_InIO.js";import{b as N}from"./Calendar-BGTKP2ji.js";import"./utils-CU3My8Oi.js";import"./z-index-CmEG1ohp.js";import"./Button-BwlrdoZf.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";import"./Popover-OaSsjRLr.js";import"./index-DB-GfMvg.js";import"./index-CWZjxdH8.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-Ak5Mws-w.js";import"./index-DonjGF9j.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./index-DLaBReRc.js";import"./chevron-right-BRUXFm_s.js";const b=({placeholder:t={from:"Start date",to:"End date"},...a})=>{const[o,_]=l.useState(a.value||{});return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{placeholder:t,value:o,onChange:_,...a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",o.from?o.to?e.jsxs(e.Fragment,{children:[o.from.toLocaleDateString()," - ",o.to.toLocaleDateString()]}):o.from.toLocaleDateString():"none"]})]})};b.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerDefault",props:{placeholder:{defaultValue:{value:"{ from: 'Start date', to: 'End date' }",computed:!1},required:!1}}};const E=()=>{const[t,a]=l.useState({from:N(new Date,-2),to:new Date});return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{placeholder:{from:"Start date",to:"End date"},value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",t.from?t.to?e.jsxs(e.Fragment,{children:[t.from.toLocaleDateString()," - ",t.to.toLocaleDateString()]}):t.from.toLocaleDateString():"none"]})]})};E.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerWithValue"};const W=()=>{const[t,a]=l.useState({});return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{placeholder:{from:"Check-in date",to:"Check-out date"},value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",t.from?t.to?e.jsxs(e.Fragment,{children:[t.from.toLocaleDateString()," - ",t.to.toLocaleDateString()]}):t.from.toLocaleDateString():"none"]})]})};W.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerCustomPlaceholders"};const I=`import { useState } from 'react';
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
`,F=`import { addWeeks } from 'date-fns';
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
`,z=`import { useState } from 'react';
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
`,pe={title:"Data & Display/DateRangePicker",component:d,parameters:{},tags:["autodocs"],argTypes:{placeholder:{control:"object",description:"Placeholder text for the start and end date inputs",table:{type:{summary:"{ from?: string, to?: string }"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",description:"Whether the component is disabled",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the component"}}},r={args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},tags:["!autodocs"]},n={render:t=>e.jsx(b,{...t}),args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},parameters:{docs:{source:{code:I,language:"tsx"}}}},s={render:()=>e.jsx(E,{}),args:{value:{from:N(new Date,-2),to:new Date},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},parameters:{docs:{source:{code:F,language:"tsx"}}}},c={render:()=>e.jsx(W,{}),args:{value:{},onChange:()=>{},placeholder:{from:"Check-in date",to:"Check-out date"}},parameters:{docs:{source:{code:z,language:"tsx"}}}};var i,m,p,u,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
Shows the basic date range picker with no pre-selected dates.`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.description}}};var x,k,P,R,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(P=(k=s.parameters)==null?void 0:k.docs)==null?void 0:P.source},description:{story:`DateRangePicker with pre-selected date range.
Demonstrates how the component appears with initial start and end dates.`,...(C=(R=s.parameters)==null?void 0:R.docs)==null?void 0:C.description}}};var y,w,j,L,V;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(w=c.parameters)==null?void 0:w.docs)==null?void 0:j.source},description:{story:`DateRangePicker with custom placeholder text.
Shows how to customize the placeholder messages for both start and end dates.`,...(V=(L=c.parameters)==null?void 0:L.docs)==null?void 0:V.description}}};const ue=["Playground","Default","WithValue","CustomPlaceholders"];export{c as CustomPlaceholders,n as Default,r as Playground,s as WithValue,ue as __namedExportsOrder,pe as default};
