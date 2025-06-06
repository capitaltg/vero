import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as L,r as A}from"./index-D4H_InIO.js";import{C as F,a as H,b as J,c as K,d as Q}from"./CommandItem-B8bfBuYk.js";import{C as X,a as Y}from"./CommandList-BNslFHed.js";import{P as Z,a as $,b as ee}from"./Popover-CpcXJf__.js";import{c as d}from"./utils-CytzSlOG.js";import{B as oe}from"./Button-GegCdI1v.js";import{C as re}from"./check-CLInojLm.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./createLucideIcon-B89bYmoG.js";import"./index-D9Bpvn5I.js";import"./index-DwviEg3j.js";import"./index-DsCZslo7.js";import"./index-DXGtwV5R.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-CIFsUU6l.js";import"./styles-DfGEMFtJ.js";import"./index-CHmAJ0Sv.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-C6Lf2F3X.js";import"./constants-CYOFn_yz.js";import"./index-BwobEAja.js";const i=L.forwardRef(({options:o,value:r,onChange:l,placeholder:p="Select an item...",searchPlaceholder:B="Search items...",emptyMessage:U="No items found",className:W,listClassName:z},G)=>{var f;const[h,g]=A.useState(!1);return e.jsxs(Z,{open:h,onOpenChange:g,children:[e.jsx($,{asChild:!0,children:e.jsxs(oe,{ref:G,variant:"input",role:"combobox","aria-expanded":h,className:d("w-full justify-between px-3",!r&&"text-muted-foreground",W),children:[r?(f=o.find(a=>a.value===r))==null?void 0:f.label:p,e.jsx(X,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(ee,{align:"start",className:"w-[--radix-popover-trigger-width] px-0 py-0",children:e.jsxs(F,{children:[e.jsx(H,{placeholder:B}),e.jsxs(Y,{className:d("max-h-[16.5rem] overflow-y-auto",z),children:[e.jsx(J,{children:U}),e.jsx(K,{children:o.map(a=>e.jsxs(Q,{value:a.value,onSelect:x=>{l(x===r?"":x),g(!1)},children:[e.jsx(re,{className:d("mr-2 h-4 w-4",r===a.value?"opacity-100":"opacity-0")}),a.label]},a.value))})]})]})})]})});i.displayName="Combobox";i.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"ComboboxOption"}],raw:"ComboboxOption[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an item...'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search items...'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No items found'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},listClassName:{required:!1,tsType:{name:"string"},description:""}}};const De={title:"Components/Combobox",component:i,parameters:{},tags:["autodocs"]},c=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],u=({value:o="",...r})=>{const[l,p]=A.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...r,value:l,onChange:p}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",l||"none"]})]})},s={args:{options:c,value:"",onChange:()=>{},placeholder:"Select framework..."},tags:["!autodocs"]},t={render:o=>e.jsx(u,{...o}),args:{options:c,value:"",onChange:()=>{},placeholder:"Select framework..."}},n={render:o=>e.jsx(u,{...o}),args:{options:c,value:"react",onChange:()=>{},placeholder:"Select framework..."}},m={render:o=>e.jsx(u,{...o}),args:{options:c,value:"",onChange:()=>{},placeholder:"Choose your framework",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found"}};var C,b,v,w,y;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select framework...'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source},description:{story:`Interactive playground for the Combobox component.
Use the controls to experiment with different props and states.`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.description}}};var S,j,k,N,P;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <ComboboxDemo {...args} />,
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select framework...'
  }
}`,...(k=(j=t.parameters)==null?void 0:j.docs)==null?void 0:k.source},description:{story:`The default state of the Combobox component.
Shows a searchable dropdown with framework options.`,...(P=(N=t.parameters)==null?void 0:N.docs)==null?void 0:P.description}}};var T,q,D,R,V;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <ComboboxDemo {...args} />,
  args: {
    options,
    value: 'react',
    onChange: () => {},
    placeholder: 'Select framework...'
  }
}`,...(D=(q=n.parameters)==null?void 0:q.docs)==null?void 0:D.source},description:{story:`Combobox with a pre-selected value.
Demonstrates how the component appears with an initial selection.`,...(V=(R=n.parameters)==null?void 0:R.docs)==null?void 0:V.description}}};var O,E,I,_,M;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <ComboboxDemo {...args} />,
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Choose your framework',
    searchPlaceholder: 'Search frameworks...',
    emptyMessage: 'No frameworks found'
  }
}`,...(I=(E=m.parameters)==null?void 0:E.docs)==null?void 0:I.source},description:{story:`Combobox with custom placeholder text.
Shows how to customize the placeholder and search text.`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.description}}};const Re=["Playground","Default","WithValue","CustomPlaceholders"];export{m as CustomPlaceholders,t as Default,s as Playground,n as WithValue,Re as __namedExportsOrder,De as default};
