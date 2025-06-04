import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as q}from"./index-D4H_InIO.js";import{f as _,C as E,a as R}from"./Calendar-DaT8kRly.js";import{P as B,a as I,b as W}from"./Popover-CpcXJf__.js";import{c as z}from"./utils-CytzSlOG.js";import{B as F}from"./Button-C2700grw.js";import"./createLucideIcon-B89bYmoG.js";import"./constants-b_t0fEt1.js";import"./styles-DfGEMFtJ.js";import"./index-BwobEAja.js";import"./chevron-right-MP11DFyI.js";import"./index-DwviEg3j.js";import"./index-D8GmRN1t.js";import"./index-DXGtwV5R.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DsCZslo7.js";import"./index-CHmAJ0Sv.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-C6Lf2F3X.js";import"./index-CIFsUU6l.js";const i=q.forwardRef(({value:a,onChange:c,placeholder:r="Pick a date",className:d},V)=>e.jsxs(B,{children:[e.jsx(I,{asChild:!0,children:e.jsxs(F,{ref:V,variant:"input",className:z("w-full justify-start px-3 text-left font-normal",!a&&"text-muted-foreground",d),"data-component":"date-picker",children:[e.jsx(E,{className:"mr-2 h-4 w-4"}),a?_(a,"LLLL dd, y"):e.jsx("span",{children:r})]})}),e.jsx(W,{className:"w-auto px-0 py-0",align:"start",children:e.jsx(R,{mode:"single",selected:a,onSelect:c,initialFocus:!0})})]}));i.displayName="DatePicker";i.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"Date"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date?: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Pick a date'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const le={title:"Components/DatePicker",component:i,parameters:{},tags:["autodocs"]},p=({value:a,...c})=>{const[r,d]=q.useState(a);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...c,value:r,onChange:d}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected date: ",r?r.toLocaleDateString():"none"]})]})},t={args:{value:void 0,onChange:()=>{},placeholder:"Pick a date"},tags:["!autodocs"]},o={render:a=>e.jsx(p,{...a}),args:{value:void 0,onChange:()=>{},placeholder:"Pick a date"}},s={render:a=>e.jsx(p,{...a}),args:{value:new Date("2024-03-15"),onChange:()=>{},placeholder:"Pick a date"}},n={render:a=>e.jsx(p,{...a}),args:{value:void 0,onChange:()=>{},placeholder:"Select your birthday"}};var m,l,u,h,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:`Interactive playground for the DatePicker component.
Use the controls to experiment with different props and states.`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};var f,P,x,D,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <DatePickerDemo {...args} />,
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date'
  }
}`,...(x=(P=o.parameters)==null?void 0:P.docs)==null?void 0:x.source},description:{story:`The default state of the DatePicker component.
Shows the basic date picker with no pre-selected date.`,...(y=(D=o.parameters)==null?void 0:D.docs)==null?void 0:y.description}}};var k,v,C,w,j;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
Shows how to customize the placeholder message when no date is selected.`,...(b=(L=n.parameters)==null?void 0:L.docs)==null?void 0:b.description}}};const ue=["Playground","Default","WithValue","CustomPlaceholder"];export{n as CustomPlaceholder,o as Default,t as Playground,s as WithValue,ue as __namedExportsOrder,le as default};
