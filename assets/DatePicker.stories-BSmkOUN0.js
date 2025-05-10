import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as q}from"./index-D4H_InIO.js";import{c as _}from"./utils-CytzSlOG.js";import{P as E,a as R,b as B}from"./Popover-DHD1Bpsv.js";import{B as I}from"./Button-C_imVjo7.js";import{f as W,C as z,a as F}from"./Calendar-DaGs2ES-.js";import"./styles-Dlcbwdhh.js";import"./index-DB-GfMvg.js";import"./index-BekKX9Q6.js";import"./Combination-Bv7TbtME.js";import"./index-CNI2vRWb.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DAnQV6hb.js";import"./index-BRrdJNcL.js";import"./index-Ak5Mws-w.js";import"./index-LL0F0lhE.js";import"./index-DDORxvzF.js";import"./index-DaWVWvyQ.js";import"./index-BwobEAja.js";import"./createLucideIcon-B89bYmoG.js";import"./chevron-right-MP11DFyI.js";const i=q.forwardRef(({value:a,onChange:c,placeholder:r="Pick a date",className:d},V)=>e.jsxs(E,{children:[e.jsx(R,{asChild:!0,children:e.jsxs(I,{ref:V,variant:"input",className:_("w-full justify-start text-left font-normal",!a&&"text-muted-foreground",d),"data-component":"date-picker",children:[e.jsx(z,{className:"mr-2 h-4 w-4"}),a?W(a,"LLLL dd, y"):e.jsx("span",{children:r})]})}),e.jsx(B,{className:"w-auto p-0",children:e.jsx(F,{mode:"single",selected:a,onSelect:c,initialFocus:!0})})]}));i.displayName="DatePicker";i.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"Date"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date?: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Pick a date'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const de={title:"Components/DatePicker",component:i,parameters:{},tags:["autodocs"]},p=({value:a,...c})=>{const[r,d]=q.useState(a);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...c,value:r,onChange:d}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected date: ",r?r.toLocaleDateString():"none"]})]})},t={args:{value:void 0,onChange:()=>{},placeholder:"Pick a date"},tags:["!autodocs"]},o={render:a=>e.jsx(p,{...a}),args:{value:void 0,onChange:()=>{},placeholder:"Pick a date"}},s={render:a=>e.jsx(p,{...a}),args:{value:new Date("2024-03-15"),onChange:()=>{},placeholder:"Pick a date"}},n={render:a=>e.jsx(p,{...a}),args:{value:void 0,onChange:()=>{},placeholder:"Select your birthday"}};var m,l,u,h,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:`Interactive playground for the DatePicker component.
Use the controls to experiment with different props and states.`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};var f,P,D,x,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <DatePickerDemo {...args} />,
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date'
  }
}`,...(D=(P=o.parameters)==null?void 0:P.docs)==null?void 0:D.source},description:{story:`The default state of the DatePicker component.
Shows the basic date picker with no pre-selected date.`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};var k,v,C,w,j;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <DatePickerDemo {...args} />,
  args: {
    value: new Date('2024-03-15'),
    onChange: () => {},
    placeholder: 'Pick a date'
  }
}`,...(C=(v=s.parameters)==null?void 0:v.docs)==null?void 0:C.source},description:{story:`DatePicker with a pre-selected date.
Demonstrates how the component appears with an initial date value.`,...(j=(w=s.parameters)==null?void 0:w.docs)==null?void 0:j.description}}};var S,N,T,L,b;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <DatePickerDemo {...args} />,
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Select your birthday'
  }
}`,...(T=(N=n.parameters)==null?void 0:N.docs)==null?void 0:T.source},description:{story:`DatePicker with custom placeholder text.
Shows how to customize the placeholder message when no date is selected.`,...(b=(L=n.parameters)==null?void 0:L.docs)==null?void 0:b.description}}};const pe=["Playground","Default","WithValue","CustomPlaceholder"];export{n as CustomPlaceholder,o as Default,t as Playground,s as WithValue,pe as __namedExportsOrder,de as default};
