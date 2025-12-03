import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{D as c}from"./DateRangePicker-BTCJHFmL.js";import{r as d}from"./index-D4H_InIO.js";import{b as V}from"./Calendar-hHjErXy4.js";import"./utils-CU3My8Oi.js";import"./z-index-CmEG1ohp.js";import"./Button-Dp8g_T52.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-CVEkm9yF.js";import"./styles-BasBkTzl.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";import"./Popover-DBV-TgdM.js";import"./index-DB-GfMvg.js";import"./index-CWZjxdH8.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-Ak5Mws-w.js";import"./index-BnJEnLsy.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./index-DLaBReRc.js";import"./chevron-right-BRUXFm_s.js";const N=()=>{const[e,a]=d.useState({});return t.jsxs("div",{className:"space-y-4",children:[t.jsx(c,{placeholder:{from:"Start date",to:"End date"},value:e,onChange:a}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",e.from?e.to?t.jsxs(t.Fragment,{children:[e.from.toLocaleDateString()," - ",e.to.toLocaleDateString()]}):e.from.toLocaleDateString():"none"]})]})};N.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerDefault"};const E=()=>{const[e,a]=d.useState({from:V(new Date,-2),to:new Date});return t.jsxs("div",{className:"space-y-4",children:[t.jsx(c,{placeholder:{from:"Start date",to:"End date"},value:e,onChange:a}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",e.from?e.to?t.jsxs(t.Fragment,{children:[e.from.toLocaleDateString()," - ",e.to.toLocaleDateString()]}):e.from.toLocaleDateString():"none"]})]})};E.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerWithValue"};const W=()=>{const[e,a]=d.useState({});return t.jsxs("div",{className:"space-y-4",children:[t.jsx(c,{placeholder:{from:"Check-in date",to:"Check-out date"},value:e,onChange:a}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",e.from?e.to?t.jsxs(t.Fragment,{children:[e.from.toLocaleDateString()," - ",e.to.toLocaleDateString()]}):e.from.toLocaleDateString():"none"]})]})};W.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerCustomPlaceholders"};const _=`import { useState } from 'react';
import { DateRangePicker } from '../src/DateRangePicker';
import type { DateRange } from '../types';

export const DateRangePickerDefault = () => {
  const [value, setValue] = useState<DateRange>({});
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
`,b=`import { addWeeks } from 'date-fns';
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
`,I=`import { useState } from 'react';
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
`,me={title:"Data & Display/DateRangePicker",component:c,parameters:{},tags:["autodocs"]},o={args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},tags:["!autodocs"]},r={render:()=>t.jsx(N,{}),args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},parameters:{docs:{source:{code:_,language:"tsx"}}}},n={render:()=>t.jsx(E,{}),args:{value:{from:V(new Date,-2),to:new Date},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},parameters:{docs:{source:{code:b,language:"tsx"}}}},s={render:()=>t.jsx(W,{}),args:{value:{},onChange:()=>{},placeholder:{from:"Check-in date",to:"Check-out date"}},parameters:{docs:{source:{code:I,language:"tsx"}}}};var l,m,i,u,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source},description:{story:`Interactive playground for the DateRangePicker component.
Use the controls to experiment with different props and states.`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.description}}};var g,h,f,D,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <DateRangePickerDefault />,
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
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source},description:{story:`The default state of the DateRangePicker component.
Shows the basic date range picker with no pre-selected dates.`,...(S=(D=r.parameters)==null?void 0:D.docs)==null?void 0:S.description}}};var v,x,k,P,C;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(k=(x=n.parameters)==null?void 0:x.docs)==null?void 0:k.source},description:{story:`DateRangePicker with pre-selected date range.
Demonstrates how the component appears with initial start and end dates.`,...(C=(P=n.parameters)==null?void 0:P.docs)==null?void 0:C.description}}};var R,y,w,L,j;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source},description:{story:`DateRangePicker with custom placeholder text.
Shows how to customize the placeholder messages for both start and end dates.`,...(j=(L=s.parameters)==null?void 0:L.docs)==null?void 0:j.description}}};const ie=["Playground","Default","WithValue","CustomPlaceholders"];export{s as CustomPlaceholders,r as Default,o as Playground,n as WithValue,ie as __namedExportsOrder,me as default};
