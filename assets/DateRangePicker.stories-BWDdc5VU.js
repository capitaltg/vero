import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{c}from"./utils-CytzSlOG.js";import{r as N}from"./index-D4H_InIO.js";import{C as q,f as d,a as b}from"./Calendar-DaGs2ES-.js";import{P as _,a as V,b as B}from"./Popover-DHD1Bpsv.js";import{B as F}from"./Button-C_imVjo7.js";import"./createLucideIcon-B89bYmoG.js";import"./chevron-right-MP11DFyI.js";import"./styles-Dlcbwdhh.js";import"./index-DB-GfMvg.js";import"./index-BekKX9Q6.js";import"./Combination-Bv7TbtME.js";import"./index-CNI2vRWb.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DAnQV6hb.js";import"./index-BRrdJNcL.js";import"./index-Ak5Mws-w.js";import"./index-LL0F0lhE.js";import"./index-DDORxvzF.js";import"./index-DaWVWvyQ.js";import"./index-BwobEAja.js";const m=N.forwardRef(({value:e,onChange:o,placeholder:L={from:"Pick start date",to:"Pick end date"},className:R},S)=>{const T=r=>{const{from:a,to:E}=e;if(!a)return o({from:r,to:void 0});if(r<a)return o({from:r,to:void 0});if(a&&E)return o({from:r,to:void 0});if(r>a)return o({from:a,to:r});if(r.getTime()===a.getTime())return o({from:void 0,to:void 0})};return t.jsx("div",{className:c("grid gap-2",R),children:t.jsxs(_,{children:[t.jsx(V,{asChild:!0,children:t.jsxs(F,{ref:S,id:"date",variant:"input",className:c("w-full justify-start text-left font-normal",!e.from&&!e.to&&"text-muted-foreground"),"data-component":"date-range-picker",children:[t.jsx(q,{className:"mr-2 h-4 w-4"}),e.from?e.to?t.jsxs(t.Fragment,{children:[d(e.from,"LLLL dd, y")," - ",d(e.to,"LLLL dd, y")]}):d(e.from,"LLLL dd, y"):t.jsx("span",{children:L.from})]})}),t.jsx(B,{className:"w-auto p-0",align:"start",children:t.jsx(b,{initialFocus:!0,mode:"range",defaultMonth:e.from,selected:{from:e.from,to:e.to},onDayClick:T,numberOfMonths:2,modifiers:{today:()=>!1}})})]})})});m.displayName="DateRangePicker";m.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker",props:{value:{required:!0,tsType:{name:"DateRange"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(range: DateRange) => void",signature:{arguments:[{type:{name:"DateRange"},name:"range"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  from?: string;
  to?: string;
}`,signature:{properties:[{key:"from",value:{name:"string",required:!1}},{key:"to",value:{name:"string",required:!1}}]}},description:"",defaultValue:{value:`{
  from: 'Pick start date',
  to: 'Pick end date',
}`,computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const se={title:"Components/DateRangePicker",component:m,parameters:{},tags:["autodocs"]},n={args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}}},s={args:{value:{from:new Date("2024-03-15"),to:new Date("2024-03-20")},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}}},i={args:{value:{},onChange:()=>{},placeholder:{from:"Check-in date",to:"Check-out date"}}};var p,l,f,u,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date'
    }
  }
}`,...(f=(l=n.parameters)==null?void 0:l.docs)==null?void 0:f.source},description:{story:`The default state of the DateRangePicker component.
Shows the basic date range picker with no pre-selected dates.`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};var h,k,D,w,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(D=(k=s.parameters)==null?void 0:k.docs)==null?void 0:D.source},description:{story:`DateRangePicker with pre-selected date range.
Demonstrates how the component appears with initial start and end dates.`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.description}}};var C,P,y,j,v;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Check-in date',
      to: 'Check-out date'
    }
  }
}`,...(y=(P=i.parameters)==null?void 0:P.docs)==null?void 0:y.source},description:{story:`DateRangePicker with custom placeholder text.
Shows how to customize the placeholder messages for both start and end dates.`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.description}}};const ie=["Default","WithValue","CustomPlaceholders"];export{i as CustomPlaceholders,n as Default,s as WithValue,ie as __namedExportsOrder,se as default};
