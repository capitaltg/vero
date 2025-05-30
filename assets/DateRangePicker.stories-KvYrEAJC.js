import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as _}from"./index-D4H_InIO.js";import{c as g}from"./utils-CytzSlOG.js";import{C as M,f as l,a as O}from"./Calendar-1OKNMGT7.js";import{P as W,a as z,b as U}from"./Popover-Ccl_Mdpx.js";import{B as $}from"./Button-CYoANYDv.js";import"./createLucideIcon-B89bYmoG.js";import"./chevron-right-MP11DFyI.js";import"./styles-DfGEMFtJ.js";import"./index-DwviEg3j.js";import"./index-BekKX9Q6.js";import"./index-D6t6XU86.js";import"./index-CNI2vRWb.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DsCZslo7.js";import"./index-CWhMmZjO.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-C6Lf2F3X.js";import"./index-CbP7PoiL.js";import"./index-BwobEAja.js";const c=_.forwardRef(({value:e,onChange:a,placeholder:r={from:"Pick start date",to:"Pick end date"},className:p},F)=>{const B=o=>{const{from:n,to:I}=e;if(!n)return a({from:o,to:void 0});if(o<n)return a({from:o,to:void 0});if(n&&I)return a({from:o,to:void 0});if(o>n)return a({from:n,to:o});if(o.getTime()===n.getTime())return a({from:void 0,to:void 0})};return t.jsx("div",{className:g("grid gap-2",p),children:t.jsxs(W,{children:[t.jsx(z,{asChild:!0,children:t.jsxs($,{ref:F,id:"date",variant:"input",className:g("w-full justify-start px-3 text-left font-normal",!e.from&&!e.to&&"text-muted-foreground"),"data-component":"date-range-picker",children:[t.jsx(M,{className:"mr-2 h-4 w-4"}),e.from?e.to?t.jsxs(t.Fragment,{children:[l(e.from,"LLLL dd, y")," - ",l(e.to,"LLLL dd, y")]}):l(e.from,"LLLL dd, y"):t.jsx("span",{children:r.from})]})}),t.jsx(U,{className:"w-auto px-0 py-0",align:"start",children:t.jsx(O,{initialFocus:!0,mode:"range",defaultMonth:e.from,selected:{from:e.from,to:e.to},onDayClick:B,numberOfMonths:2,modifiers:{today:()=>!1}})})]})})});c.displayName="DateRangePicker";c.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker",props:{value:{required:!0,tsType:{name:"DateRange"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(range: DateRange) => void",signature:{arguments:[{type:{name:"DateRange"},name:"range"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  from?: string;
  to?: string;
}`,signature:{properties:[{key:"from",value:{name:"string",required:!1}},{key:"to",value:{name:"string",required:!1}}]}},description:"",defaultValue:{value:`{
  from: 'Pick start date',
  to: 'Pick end date',
}`,computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const ge={title:"Components/DateRangePicker",component:c,parameters:{},tags:["autodocs"]},u=({value:e={},...a})=>{const[r,p]=_.useState(e);return t.jsxs("div",{className:"space-y-4",children:[t.jsx(c,{...a,value:r,onChange:p}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",r.from?r.to?t.jsxs(t.Fragment,{children:[r.from.toLocaleDateString()," - ",r.to.toLocaleDateString()]}):r.from.toLocaleDateString():"none"]})]})},s={args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},tags:["!autodocs"]},i={render:e=>t.jsx(u,{...e}),args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}}},d={render:e=>t.jsx(u,{...e}),args:{value:{from:new Date("2024-03-15"),to:new Date("2024-03-20")},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}}},m={render:e=>t.jsx(u,{...e}),args:{value:{},onChange:()=>{},placeholder:{from:"Check-in date",to:"Check-out date"}}};var f,h,D,x,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
Use the controls to experiment with different props and states.`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.description}}};var P,y,j,C,v;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <DateRangePickerDemo {...args} />,
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date'
    }
  }
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source},description:{story:`The default state of the DateRangePicker component.
Shows the basic date range picker with no pre-selected dates.`,...(v=(C=i.parameters)==null?void 0:C.docs)==null?void 0:v.description}}};var w,R,S,L,E;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <DateRangePickerDemo {...args} />,
  args: {
    value: {
      from: new Date('2024-03-15'),
      to: new Date('2024-03-20')
    },
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date'
    }
  }
}`,...(S=(R=d.parameters)==null?void 0:R.docs)==null?void 0:S.source},description:{story:`DateRangePicker with pre-selected date range.
Demonstrates how the component appears with initial start and end dates.`,...(E=(L=d.parameters)==null?void 0:L.docs)==null?void 0:E.description}}};var N,T,q,b,V;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <DateRangePickerDemo {...args} />,
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Check-in date',
      to: 'Check-out date'
    }
  }
}`,...(q=(T=m.parameters)==null?void 0:T.docs)==null?void 0:q.source},description:{story:`DateRangePicker with custom placeholder text.
Shows how to customize the placeholder messages for both start and end dates.`,...(V=(b=m.parameters)==null?void 0:b.docs)==null?void 0:V.description}}};const fe=["Playground","Default","WithValue","CustomPlaceholders"];export{m as CustomPlaceholders,i as Default,s as Playground,d as WithValue,fe as __namedExportsOrder,ge as default};
