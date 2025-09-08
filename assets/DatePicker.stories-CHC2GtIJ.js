import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as Z,r as L}from"./index-D4H_InIO.js";import{f as F,C as U,a as $}from"./Calendar-DnLmUV8v.js";import{P as A,a as G,b as H}from"./Popover-hyTCyids.js";import{c as J}from"./utils-l21BANrb.js";import{g as K}from"./z-index-CmEG1ohp.js";import{B as M}from"./Button-YgMv2nag.js";import"./createLucideIcon-CRH11QI6.js";import"./constants-BFjZK9t2.js";import"./styles-hHSuIYOZ.js";import"./index-DKzzznqW.js";import"./chevron-right-BRUXFm_s.js";import"./index-DwviEg3j.js";import"./index-D8GmRN1t.js";import"./index-DXGtwV5R.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DsCZslo7.js";import"./index-CHmAJ0Sv.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-C6Lf2F3X.js";import"./index-CIFsUU6l.js";import"./useAriaDisabled-DHTVgRPt.js";const i=Z.forwardRef(({value:a,onChange:d,placeholder:t="Pick a date",className:c,zIndex:R,isDisabled:V=!1,..._},z)=>{const[E,l]=L.useState(!1),O=K("popover",R),B=W=>{d(W),l(!1)};return e.jsxs(A,{open:E,onOpenChange:l,children:[e.jsx(G,{asChild:!0,children:e.jsxs(M,{ref:z,variant:"input",className:J("w-full justify-start px-3 text-left font-normal",!a&&"text-muted-foreground",c),isDisabled:V,..._,"data-component":"date-picker",children:[e.jsx(U,{className:"mr-2 h-4 w-4"}),a?F(a,"LLLL dd, y"):e.jsx("span",{children:t})]})}),e.jsx(H,{className:"w-auto px-0 py-0",align:"start",zIndex:O,children:e.jsx($,{mode:"single",selected:a,onSelect:B,autoFocus:!0})})]})});i.displayName="DatePicker";i.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"Date"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date?: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Pick a date'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},zIndex:{required:!1,tsType:{name:"number"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const we={title:"Components/DatePicker",component:i,parameters:{},tags:["autodocs"]},p=({value:a,...d})=>{const[t,c]=L.useState(a);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...d,value:t,onChange:c}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected date: ",t?t.toLocaleDateString():"none"]})]})},r={args:{value:void 0,onChange:()=>{},placeholder:"Pick a date"},tags:["!autodocs"]},o={render:a=>e.jsx(p,{...a}),args:{value:void 0,onChange:()=>{},placeholder:"Pick a date"}},s={render:a=>e.jsx(p,{...a}),args:{value:new Date("2024-03-15"),onChange:()=>{},placeholder:"Pick a date"}},n={render:a=>e.jsx(p,{...a}),args:{value:void 0,onChange:()=>{},placeholder:"Select your birthday"}};var m,u,h,g,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:`Interactive playground for the DatePicker component.
Use the controls to experiment with different props and states.`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};var x,P,D,y,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <DatePickerDemo {...args} />,
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date'
  }
}`,...(D=(P=o.parameters)==null?void 0:P.docs)==null?void 0:D.source},description:{story:`The default state of the DatePicker component.
Shows the basic date picker with no pre-selected date.`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.description}}};var k,C,w,j,S;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <DatePickerDemo {...args} />,
  args: {
    value: new Date('2024-03-15'),
    onChange: () => {},
    placeholder: 'Pick a date'
  }
}`,...(w=(C=s.parameters)==null?void 0:C.docs)==null?void 0:w.source},description:{story:`DatePicker with a pre-selected date.
Demonstrates how the component appears with an initial date value.`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.description}}};var N,T,b,q,I;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <DatePickerDemo {...args} />,
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Select your birthday'
  }
}`,...(b=(T=n.parameters)==null?void 0:T.docs)==null?void 0:b.source},description:{story:`DatePicker with custom placeholder text.
Shows how to customize the placeholder message when no date is selected.`,...(I=(q=n.parameters)==null?void 0:q.docs)==null?void 0:I.description}}};const je=["Playground","Default","WithValue","CustomPlaceholder"];export{n as CustomPlaceholder,o as Default,r as Playground,s as WithValue,je as __namedExportsOrder,we as default};
