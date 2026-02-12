import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{D as d}from"./DatePicker-uA-e4GKO.js";import{r as i}from"./index-D4H_InIO.js";import"./Button-BwlrdoZf.js";import"./useAriaDisabled-DHTVgRPt.js";import"./utils-CU3My8Oi.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";import"./Popover-OaSsjRLr.js";import"./z-index-CmEG1ohp.js";import"./index-DB-GfMvg.js";import"./index-CWZjxdH8.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-Ak5Mws-w.js";import"./index-DonjGF9j.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./index-DLaBReRc.js";import"./Calendar-BGTKP2ji.js";import"./chevron-right-BRUXFm_s.js";const q=({placeholder:t="Pick a date",...a})=>{const[l,R]=i.useState(a.value);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{placeholder:t,value:l,onChange:R,...a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected date: ",l?l.toLocaleDateString():"none"]})]})};q.__docgenInfo={description:"",methods:[],displayName:"DatePickerDefault",props:{placeholder:{defaultValue:{value:"'Pick a date'",computed:!1},required:!1}}};const I=()=>{const[t,a]=i.useState(new Date("2024-03-15"));return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{placeholder:"Pick a date",value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected date: ",t?t.toLocaleDateString():"none"]})]})};I.__docgenInfo={description:"",methods:[],displayName:"DatePickerWithValue"};const T=()=>{const[t,a]=i.useState(void 0);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{endMonth:new Date(2025,11),placeholder:"Pick a date",startMonth:new Date(2020,0),value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected date: ",t?t.toLocaleDateString():"none"]})]})};T.__docgenInfo={description:"",methods:[],displayName:"DatePickerWithStartAndEndMonth"};const z=()=>{const[t,a]=i.useState(void 0);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{placeholder:"Select your birthday",value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected date: ",t?t.toLocaleDateString():"none"]})]})};z.__docgenInfo={description:"",methods:[],displayName:"DatePickerCustomPlaceholder"};const F=`import { useState } from 'react';
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
`,O=`import { useState } from 'react';
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
`,U=`import { useState } from 'react';
import { DatePicker } from '../src/DatePicker';

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
        Selected date: {value ? value.toLocaleDateString() : 'none'}
      </p>
    </div>
  );
};
`,Z=`import { useState } from 'react';
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
`,ve={title:"Data & Display/DatePicker",component:d,parameters:{},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text for the date picker",table:{type:{summary:"string"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",description:"Whether the component is disabled",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the component"},name:{control:"text",description:"The name attribute for form submission. This is required for the date picker value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the date picker is required for form validation. When true, the form cannot be submitted without a date selection.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the date picker when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}}},r={args:{value:void 0,onChange:()=>{},placeholder:"Pick a date"},tags:["!autodocs"]},o={render:t=>e.jsx(q,{...t}),args:{value:void 0,onChange:()=>{},placeholder:"Pick a date"},parameters:{docs:{source:{code:F,language:"tsx"}}}},n={render:()=>e.jsx(I,{}),args:{value:new Date("2024-03-15"),onChange:()=>{},placeholder:"Pick a date"},parameters:{docs:{source:{code:O,language:"tsx"}}}},s={render:()=>e.jsx(T,{}),args:{onChange:()=>{},placeholder:"Pick a date",startMonth:new Date(2020,0),endMonth:new Date(2025,11)},parameters:{docs:{source:{code:U,language:"tsx"}}}},c={render:()=>e.jsx(z,{}),args:{value:void 0,onChange:()=>{},placeholder:"Select your birthday"},parameters:{docs:{source:{code:Z,language:"tsx"}}}};var u,p,m,h,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:`Interactive playground for the DatePicker component.
Use the controls to experiment with different props and states.`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};var D,P,f,v,k;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(f=(P=o.parameters)==null?void 0:P.docs)==null?void 0:f.source},description:{story:`The default state of the DatePicker component.
Shows the basic date picker with no pre-selected date.`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.description}}};var x,y,S,C,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source},description:{story:`DatePicker with a pre-selected date.
Demonstrates how the component appears with an initial date value.`,...(b=(C=n.parameters)==null?void 0:C.docs)==null?void 0:b.description}}};var w,N,V,W,j;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(V=(N=s.parameters)==null?void 0:N.docs)==null?void 0:V.source},description:{story:`DatePicker with restricted start and end months.
Shows how to limit the selectable date range within the specified months and years.`,...(j=(W=s.parameters)==null?void 0:W.docs)==null?void 0:j.description}}};var M,E,A,_,L;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(E=c.parameters)==null?void 0:E.docs)==null?void 0:A.source},description:{story:`DatePicker with custom placeholder text.
Shows how to customize the placeholder message when no date is selected.`,...(L=(_=c.parameters)==null?void 0:_.docs)==null?void 0:L.description}}};const ke=["Playground","Default","WithValue","WithStartAndEndMonth","CustomPlaceholder"];export{c as CustomPlaceholder,o as Default,r as Playground,s as WithStartAndEndMonth,n as WithValue,ke as __namedExportsOrder,ve as default};
