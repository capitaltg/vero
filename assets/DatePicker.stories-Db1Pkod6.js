import{j as a}from"./jsx-runtime-BO8uF4Og.js";import{R as J,r as _}from"./index-D4H_InIO.js";import{B as K}from"./Button-YgMv2nag.js";import{P as Q,a as X,b as Y}from"./Popover-hyTCyids.js";import{c as ee}from"./utils-l21BANrb.js";import{g as ae}from"./z-index-CmEG1ohp.js";import{f as te,C as re,a as oe}from"./Calendar-DiqQMQy6.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-BFjZK9t2.js";import"./styles-hHSuIYOZ.js";import"./index-DKzzznqW.js";import"./index-DwviEg3j.js";import"./index-DXGtwV5R.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DsCZslo7.js";import"./index-CHmAJ0Sv.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-C6Lf2F3X.js";import"./index-CIFsUU6l.js";import"./createLucideIcon-CRH11QI6.js";import"./chevron-right-BRUXFm_s.js";const d=J.forwardRef(({value:e,startMonth:p,endMonth:t,onChange:l,placeholder:z="Pick a date",className:O,zIndex:A,isDisabled:B=!1,...Z},F)=>{const[U,m]=_.useState(!1),$=ae("popover",A),G=H=>{l(H),m(!1)};return a.jsxs(Q,{open:U,onOpenChange:m,children:[a.jsx(X,{asChild:!0,children:a.jsxs(K,{ref:F,variant:"input",className:ee("w-full justify-start px-3 text-left font-normal",!e&&"text-muted-foreground",O),isDisabled:B,...Z,"data-component":"date-picker",children:[a.jsx(re,{className:"mr-2 h-4 w-4"}),e?te(e,"LLLL dd, y"):a.jsx("span",{children:z})]})}),a.jsx(Y,{className:"w-auto px-0 py-0",align:"start",zIndex:$,children:a.jsx(oe,{mode:"single",startMonth:p,endMonth:t,selected:e,onSelect:G,autoFocus:!0})})]})});d.displayName="DatePicker";d.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"Date"},description:""},startMonth:{required:!1,tsType:{name:"Date"},description:""},endMonth:{required:!1,tsType:{name:"Date"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date?: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Pick a date'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},zIndex:{required:!1,tsType:{name:"number"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ie={title:"Data & Display/DatePicker",component:d,parameters:{},tags:["autodocs"]},c=({value:e,...p})=>{const[t,l]=_.useState(e);return a.jsxs("div",{className:"space-y-4",children:[a.jsx(d,{...p,value:t,onChange:l}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected date: ",t?t.toLocaleDateString():"none"]})]})},r={args:{value:void 0,onChange:()=>{},placeholder:"Pick a date"},tags:["!autodocs"]},o={render:e=>a.jsx(c,{...e}),args:{value:void 0,onChange:()=>{},placeholder:"Pick a date"}},s={render:e=>a.jsx(c,{...e}),args:{value:new Date("2024-03-15"),onChange:()=>{},placeholder:"Pick a date"}},n={render:e=>a.jsx(c,{...e}),args:{onChange:()=>{},placeholder:"Pick a date",startMonth:new Date(2020,0),endMonth:new Date(2025,11)}},i={render:e=>a.jsx(c,{...e}),args:{value:void 0,onChange:()=>{},placeholder:"Select your birthday"}};var u,h,g,f,D;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source},description:{story:`Interactive playground for the DatePicker component.
Use the controls to experiment with different props and states.`,...(D=(f=r.parameters)==null?void 0:f.docs)==null?void 0:D.description}}};var P,x,y,k,v;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <DatePickerDemo {...args} />,
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date'
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:`The default state of the DatePicker component.
Shows the basic date picker with no pre-selected date.`,...(v=(k=o.parameters)==null?void 0:k.docs)==null?void 0:v.description}}};var w,C,S,j,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <DatePickerDemo {...args} />,
  args: {
    value: new Date('2024-03-15'),
    onChange: () => {},
    placeholder: 'Pick a date'
  }
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source},description:{story:`DatePicker with a pre-selected date.
Demonstrates how the component appears with an initial date value.`,...(T=(j=s.parameters)==null?void 0:j.docs)==null?void 0:T.description}}};var b,q,M,N,I;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <DatePickerDemo {...args} />,
  args: {
    onChange: () => {},
    placeholder: 'Pick a date',
    startMonth: new Date(2020, 0),
    endMonth: new Date(2025, 11)
  }
}`,...(M=(q=n.parameters)==null?void 0:q.docs)==null?void 0:M.source},description:{story:`DatePicker with restricted start and end months.
Shows how to limit the selectable date range within the specified months and years.`,...(I=(N=n.parameters)==null?void 0:N.docs)==null?void 0:I.description}}};var E,L,R,V,W;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <DatePickerDemo {...args} />,
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Select your birthday'
  }
}`,...(R=(L=i.parameters)==null?void 0:L.docs)==null?void 0:R.source},description:{story:`DatePicker with custom placeholder text.
Shows how to customize the placeholder message when no date is selected.`,...(W=(V=i.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};const Ee=["Playground","Default","WithValue","WithStartAndEndMonth","CustomPlaceholder"];export{i as CustomPlaceholder,o as Default,r as Playground,n as WithStartAndEndMonth,s as WithValue,Ee as __namedExportsOrder,Ie as default};
