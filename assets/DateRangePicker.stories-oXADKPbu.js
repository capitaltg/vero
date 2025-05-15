import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{r as _}from"./index-D4H_InIO.js";import{c as g}from"./utils-CytzSlOG.js";import{P as M,a as O,b as W}from"./Popover-DDWh9vSN.js";import{B as z}from"./Button-Bmp-CLuG.js";import{C as U,f as l,a as $}from"./Calendar-JtkTAKnz.js";import"./styles-Dlcbwdhh.js";import"./index-DB-GfMvg.js";import"./index-BekKX9Q6.js";import"./Combination-Bv7TbtME.js";import"./index-CNI2vRWb.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DAnQV6hb.js";import"./index-BRrdJNcL.js";import"./index-Ak5Mws-w.js";import"./index-LL0F0lhE.js";import"./index-DDORxvzF.js";import"./index-DaWVWvyQ.js";import"./index-BwobEAja.js";import"./createLucideIcon-B89bYmoG.js";import"./chevron-right-MP11DFyI.js";const m=_.forwardRef(({value:e,onChange:a,placeholder:t={from:"Pick start date",to:"Pick end date"},className:p},F)=>{const B=o=>{const{from:n,to:I}=e;if(!n)return a({from:o,to:void 0});if(o<n)return a({from:o,to:void 0});if(n&&I)return a({from:o,to:void 0});if(o>n)return a({from:n,to:o});if(o.getTime()===n.getTime())return a({from:void 0,to:void 0})};return r.jsx("div",{className:g("grid gap-2",p),children:r.jsxs(M,{children:[r.jsx(O,{asChild:!0,children:r.jsxs(z,{ref:F,id:"date",variant:"input",className:g("w-full justify-start text-left font-normal",!e.from&&!e.to&&"text-muted-foreground"),"data-component":"date-range-picker",children:[r.jsx(U,{className:"mr-2 h-4 w-4"}),e.from?e.to?r.jsxs(r.Fragment,{children:[l(e.from,"LLLL dd, y")," - ",l(e.to,"LLLL dd, y")]}):l(e.from,"LLLL dd, y"):r.jsx("span",{children:t.from})]})}),r.jsx(W,{className:"w-auto p-0",align:"start",children:r.jsx($,{initialFocus:!0,mode:"range",defaultMonth:e.from,selected:{from:e.from,to:e.to},onDayClick:B,numberOfMonths:2,modifiers:{today:()=>!1}})})]})})});m.displayName="DateRangePicker";m.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker",props:{value:{required:!0,tsType:{name:"DateRange"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(range: DateRange) => void",signature:{arguments:[{type:{name:"DateRange"},name:"range"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  from?: string;
  to?: string;
}`,signature:{properties:[{key:"from",value:{name:"string",required:!1}},{key:"to",value:{name:"string",required:!1}}]}},description:"",defaultValue:{value:`{
  from: 'Pick start date',
  to: 'Pick end date',
}`,computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const ue={title:"Components/DateRangePicker",component:m,parameters:{},tags:["autodocs"]},u=({value:e={},...a})=>{const[t,p]=_.useState(e);return r.jsxs("div",{className:"space-y-4",children:[r.jsx(m,{...a,value:t,onChange:p}),r.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",t.from?t.to?r.jsxs(r.Fragment,{children:[t.from.toLocaleDateString()," - ",t.to.toLocaleDateString()]}):t.from.toLocaleDateString():"none"]})]})},s={args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}}},i={render:e=>r.jsx(u,{...e}),args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}}},d={render:e=>r.jsx(u,{...e}),args:{value:{from:new Date("2024-03-15"),to:new Date("2024-03-20")},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}}},c={render:e=>r.jsx(u,{...e}),args:{value:{},onChange:()=>{},placeholder:{from:"Check-in date",to:"Check-out date"}}};var f,h,D,x,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date'
    }
  }
}`,...(D=(h=s.parameters)==null?void 0:h.docs)==null?void 0:D.source},description:{story:`Interactive playground for the DateRangePicker component.
Use the controls to experiment with different props and states.`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.description}}};var P,j,y,C,w;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <DateRangePickerDemo {...args} />,
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date'
    }
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source},description:{story:`The default state of the DateRangePicker component.
Shows the basic date range picker with no pre-selected dates.`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.description}}};var v,R,S,L,E;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
Demonstrates how the component appears with initial start and end dates.`,...(E=(L=d.parameters)==null?void 0:L.docs)==null?void 0:E.description}}};var N,T,q,b,V;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <DateRangePickerDemo {...args} />,
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Check-in date',
      to: 'Check-out date'
    }
  }
}`,...(q=(T=c.parameters)==null?void 0:T.docs)==null?void 0:q.source},description:{story:`DateRangePicker with custom placeholder text.
Shows how to customize the placeholder messages for both start and end dates.`,...(V=(b=c.parameters)==null?void 0:b.docs)==null?void 0:V.description}}};const ge=["Playground","Default","WithValue","CustomPlaceholders"];export{c as CustomPlaceholders,i as Default,s as Playground,d as WithValue,ge as __namedExportsOrder,ue as default};
