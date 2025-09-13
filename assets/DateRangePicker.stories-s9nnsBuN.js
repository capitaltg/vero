import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as V}from"./index-D4H_InIO.js";import{c as f}from"./utils-l21BANrb.js";import{g as Z}from"./z-index-CmEG1ohp.js";import{C as U,f as l,a as $,b as A}from"./Calendar-BXwVz5zU.js";import{P as G,a as H,b as J}from"./Popover-hyTCyids.js";import{B as K}from"./Button-YgMv2nag.js";import"./createLucideIcon-CRH11QI6.js";import"./constants-BFjZK9t2.js";import"./styles-hHSuIYOZ.js";import"./index-DKzzznqW.js";import"./chevron-right-BRUXFm_s.js";import"./index-DwviEg3j.js";import"./index-D8GmRN1t.js";import"./index-DXGtwV5R.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DsCZslo7.js";import"./index-CHmAJ0Sv.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-C6Lf2F3X.js";import"./index-CIFsUU6l.js";import"./useAriaDisabled-DHTVgRPt.js";const c=V.forwardRef(({value:e,onChange:a,placeholder:o={from:"Pick start date",to:"Pick end date"},className:p,zIndex:W,isDisabled:_=!1,...z},F)=>{const O=Z("popover",W),B=r=>{const{from:n,to:M}=e;if(!n)return a({from:r,to:void 0});if(r<n)return a({from:r,to:void 0});if(n&&M)return a({from:r,to:void 0});if(r>n)return a({from:n,to:r});if(r.getTime()===n.getTime())return a({from:void 0,to:void 0})};return t.jsx("div",{className:f("grid gap-2",p),children:t.jsxs(G,{children:[t.jsx(H,{asChild:!0,children:t.jsxs(K,{ref:F,id:"date",variant:"input",className:f("w-full justify-start px-3 text-left font-normal",!e.from&&!e.to&&"text-muted-foreground"),isDisabled:_,...z,"data-component":"date-range-picker",children:[t.jsx(U,{className:"mr-2 h-4 w-4"}),e.from?e.to?t.jsxs(t.Fragment,{children:[l(e.from,"LLLL dd, y")," - ",l(e.to,"LLLL dd, y")]}):l(e.from,"LLLL dd, y"):t.jsx("span",{children:o.from})]})}),t.jsx(J,{className:"w-auto px-0 py-0",align:"start",zIndex:O,children:t.jsx($,{autoFocus:!0,mode:"range",defaultMonth:e.from,selected:{from:e.from,to:e.to},onSelect:r=>{r&&a(r)},showOutsideDays:!1,onDayClick:B,numberOfMonths:2,modifiers:{today:()=>!1}})})]})})});c.displayName="DateRangePicker";c.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker",props:{value:{required:!0,tsType:{name:"DateRange"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(range: DateRange) => void",signature:{arguments:[{type:{name:"DateRange"},name:"range"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  from?: string;
  to?: string;
}`,signature:{properties:[{key:"from",value:{name:"string",required:!1}},{key:"to",value:{name:"string",required:!1}}]}},description:"",defaultValue:{value:`{
  from: 'Pick start date',
  to: 'Pick end date',
}`,computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},zIndex:{required:!1,tsType:{name:"number"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const je={title:"Components/DateRangePicker",component:c,parameters:{},tags:["autodocs"]},u=({value:e={},...a})=>{const[o,p]=V.useState(e);return t.jsxs("div",{className:"space-y-4",children:[t.jsx(c,{...a,value:o,onChange:p}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected range:"," ",o.from?o.to?t.jsxs(t.Fragment,{children:[o.from.toLocaleDateString()," - ",o.to.toLocaleDateString()]}):o.from.toLocaleDateString():"none"]})]})},s={args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}},tags:["!autodocs"]},i={render:e=>t.jsx(u,{...e}),args:{value:{},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}}},d={render:e=>t.jsx(u,{...e}),args:{value:{from:A(new Date,-2),to:new Date},onChange:()=>{},placeholder:{from:"Start date",to:"End date"}}},m={render:e=>t.jsx(u,{...e}),args:{value:{},onChange:()=>{},placeholder:{from:"Check-in date",to:"Check-out date"}}};var g,h,x,D,k;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:`Interactive playground for the DateRangePicker component.
Use the controls to experiment with different props and states.`,...(k=(D=s.parameters)==null?void 0:D.docs)==null?void 0:k.description}}};var y,P,v,w,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <DateRangePickerDemo {...args} />,
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date'
    }
  }
}`,...(v=(P=i.parameters)==null?void 0:P.docs)==null?void 0:v.source},description:{story:`The default state of the DateRangePicker component.
Shows the basic date range picker with no pre-selected dates.`,...(j=(w=i.parameters)==null?void 0:w.docs)==null?void 0:j.description}}};var C,R,S,L,b;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <DateRangePickerDemo {...args} />,
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
  }
}`,...(S=(R=d.parameters)==null?void 0:R.docs)==null?void 0:S.source},description:{story:`DateRangePicker with pre-selected date range.
Demonstrates how the component appears with initial start and end dates.`,...(b=(L=d.parameters)==null?void 0:L.docs)==null?void 0:b.description}}};var T,E,N,q,I;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <DateRangePickerDemo {...args} />,
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Check-in date',
      to: 'Check-out date'
    }
  }
}`,...(N=(E=m.parameters)==null?void 0:E.docs)==null?void 0:N.source},description:{story:`DateRangePicker with custom placeholder text.
Shows how to customize the placeholder messages for both start and end dates.`,...(I=(q=m.parameters)==null?void 0:q.docs)==null?void 0:I.description}}};const Ce=["Playground","Default","WithValue","CustomPlaceholders"];export{m as CustomPlaceholders,i as Default,s as Playground,d as WithValue,Ce as __namedExportsOrder,je as default};
