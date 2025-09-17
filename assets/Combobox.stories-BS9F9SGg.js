import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as J,r as M}from"./index-D4H_InIO.js";import{P as K,a as Q,b as X}from"./Popover-hyTCyids.js";import{c as d}from"./utils-l21BANrb.js";import{g as Y}from"./z-index-CmEG1ohp.js";import{B as $}from"./Button-YgMv2nag.js";import{C as ee,a as oe}from"./CommandList-DVBTa2PJ.js";import{C as re,a as ae,b as se,c as te,d as ne}from"./CommandItem-xfb4P4v8.js";import{C as me}from"./check-CT0OM3mY.js";import"./styles-hHSuIYOZ.js";import"./index-DwviEg3j.js";import"./index-D8GmRN1t.js";import"./index-DXGtwV5R.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DsCZslo7.js";import"./index-CHmAJ0Sv.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-C6Lf2F3X.js";import"./index-CIFsUU6l.js";import"./useAriaDisabled-DHTVgRPt.js";import"./constants-BFjZK9t2.js";import"./index-DKzzznqW.js";import"./createLucideIcon-CRH11QI6.js";import"./index-D9Bpvn5I.js";const i=J.forwardRef(({options:o,value:r,onChange:l,placeholder:c="Select an item...",searchPlaceholder:A="Search items...",emptyMessage:B="No items found",className:U,listClassName:W,zIndex:Z,isDisabled:F=!1,...G},L)=>{var g;const[h,f]=M.useState(!1),H=Y("dropdown",Z);return e.jsxs(K,{open:h,onOpenChange:f,children:[e.jsx(Q,{asChild:!0,children:e.jsxs($,{ref:L,variant:"input",role:"combobox","aria-expanded":h,className:d("w-full justify-between px-3",!r&&"text-muted-foreground",U),isDisabled:F,...G,children:[r?(g=o.find(a=>a.value===r))==null?void 0:g.label:c,e.jsx(ee,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(X,{align:"start",className:"w-[--radix-popover-trigger-width] px-0 py-0",zIndex:H,children:e.jsxs(re,{children:[e.jsx(ae,{placeholder:A}),e.jsxs(oe,{className:d("max-h-[16.5rem] overflow-y-auto",W),children:[e.jsx(se,{children:B}),e.jsx(te,{children:o.map(a=>e.jsxs(ne,{value:a.value,onSelect:x=>{l(x===r?"":x),f(!1)},children:[e.jsx(me,{className:d("mr-2 h-4 w-4",r===a.value?"opacity-100":"opacity-0")}),a.label]},a.value))})]})]})})]})});i.displayName="Combobox";i.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"ComboboxOption"}],raw:"ComboboxOption[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an item...'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search items...'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No items found'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},listClassName:{required:!1,tsType:{name:"string"},description:""},zIndex:{required:!1,tsType:{name:"number"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ze={title:"Inputs & Forms/Combobox",component:i,parameters:{},tags:["autodocs"]},p=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],u=({value:o="",...r})=>{const[l,c]=M.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...r,value:l,onChange:c}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",l||"none"]})]})},s={args:{options:p,value:"",onChange:()=>{},placeholder:"Select framework..."},tags:["!autodocs"]},t={render:o=>e.jsx(u,{...o}),args:{options:p,value:"",onChange:()=>{},placeholder:"Select framework..."}},n={render:o=>e.jsx(u,{...o}),args:{options:p,value:"react",onChange:()=>{},placeholder:"Select framework..."}},m={render:o=>e.jsx(u,{...o}),args:{options:p,value:"",onChange:()=>{},placeholder:"Choose your framework",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found"}};var b,C,v,y,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select framework...'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(v=(C=s.parameters)==null?void 0:C.docs)==null?void 0:v.source},description:{story:`Interactive playground for the Combobox component.
Use the controls to experiment with different props and states.`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.description}}};var S,j,k,N,T;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <ComboboxDemo {...args} />,
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select framework...'
  }
}`,...(k=(j=t.parameters)==null?void 0:j.docs)==null?void 0:k.source},description:{story:`The default state of the Combobox component.
Shows a searchable dropdown with framework options.`,...(T=(N=t.parameters)==null?void 0:N.docs)==null?void 0:T.description}}};var P,q,D,I,V;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <ComboboxDemo {...args} />,
  args: {
    options,
    value: 'react',
    onChange: () => {},
    placeholder: 'Select framework...'
  }
}`,...(D=(q=n.parameters)==null?void 0:q.docs)==null?void 0:D.source},description:{story:`Combobox with a pre-selected value.
Demonstrates how the component appears with an initial selection.`,...(V=(I=n.parameters)==null?void 0:I.docs)==null?void 0:V.description}}};var R,O,E,_,z;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <ComboboxDemo {...args} />,
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Choose your framework',
    searchPlaceholder: 'Search frameworks...',
    emptyMessage: 'No frameworks found'
  }
}`,...(E=(O=m.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:`Combobox with custom placeholder text.
Shows how to customize the placeholder and search text.`,...(z=(_=m.parameters)==null?void 0:_.docs)==null?void 0:z.description}}};const Me=["Playground","Default","WithValue","CustomPlaceholders"];export{m as CustomPlaceholders,t as Default,s as Playground,n as WithValue,Me as __namedExportsOrder,ze as default};
