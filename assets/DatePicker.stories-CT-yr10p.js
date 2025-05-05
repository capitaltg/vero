import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{f as j,C as S,a as N}from"./Calendar-DaGs2ES-.js";import{P as T,a as b,b as q}from"./Popover-DHD1Bpsv.js";import{c as L}from"./utils-CytzSlOG.js";import{r as _}from"./index-D4H_InIO.js";import{B as E}from"./Button-C_imVjo7.js";import"./createLucideIcon-B89bYmoG.js";import"./chevron-right-MP11DFyI.js";import"./styles-Dlcbwdhh.js";import"./index-DB-GfMvg.js";import"./index-BekKX9Q6.js";import"./Combination-Bv7TbtME.js";import"./index-CNI2vRWb.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DAnQV6hb.js";import"./index-BRrdJNcL.js";import"./index-Ak5Mws-w.js";import"./index-LL0F0lhE.js";import"./index-DDORxvzF.js";import"./index-DaWVWvyQ.js";import"./index-BwobEAja.js";const s=_.forwardRef(({value:o,onChange:x,placeholder:C="Pick a date",className:D},v)=>e.jsxs(T,{children:[e.jsx(b,{asChild:!0,children:e.jsxs(E,{ref:v,variant:"input",className:L("w-full justify-start text-left font-normal",!o&&"text-muted-foreground",D),"data-component":"date-picker",children:[e.jsx(S,{className:"mr-2 h-4 w-4"}),o?j(o,"LLLL dd, y"):e.jsx("span",{children:C})]})}),e.jsx(q,{className:"w-auto p-0",children:e.jsx(N,{mode:"single",selected:o,onSelect:x,initialFocus:!0})})]}));s.displayName="DatePicker";s.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"Date"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date?: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Pick a date'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const te={title:"Components/DatePicker",component:s,parameters:{},tags:["autodocs"]},a={args:{value:void 0,onChange:()=>{},placeholder:"Pick a date"}},t={args:{value:new Date("2024-03-15"),onChange:()=>{},placeholder:"Pick a date"}},r={args:{value:void 0,onChange:()=>{},placeholder:"Select your birthday"}};var n,i,c,d,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date'
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:`The default state of the DatePicker component.
Shows the basic date picker with no pre-selected date.`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.description}}};var m,l,u,h,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: new Date('2024-03-15'),
    onChange: () => {},
    placeholder: 'Pick a date'
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:`DatePicker with a pre-selected date.
Demonstrates how the component appears with an initial date value.`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};var g,P,y,w,k;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Select your birthday'
  }
}`,...(y=(P=r.parameters)==null?void 0:P.docs)==null?void 0:y.source},description:{story:`DatePicker with custom placeholder text.
Shows how to customize the placeholder message when no date is selected.`,...(k=(w=r.parameters)==null?void 0:w.docs)==null?void 0:k.description}}};const re=["Default","WithValue","CustomPlaceholder"];export{r as CustomPlaceholder,a as Default,t as WithValue,re as __namedExportsOrder,te as default};
