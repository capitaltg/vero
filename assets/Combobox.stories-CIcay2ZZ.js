import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as H,r as M}from"./index-D4H_InIO.js";import{B as J}from"./Button-eEoo75We.js";import{C as K,a as Q,b as X,c as Y,d as $}from"./CommandItem-xfb4P4v8.js";import{C as ee,a as oe}from"./CommandList-DVBTa2PJ.js";import{P as re,a as ae,b as se}from"./Popover-BMLVvNmP.js";import{c as d}from"./utils-l21BANrb.js";import{g as te}from"./z-index-CmEG1ohp.js";import{C as ne}from"./check-CT0OM3mY.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-CYXQNxVE.js";import"./styles-B37qHJ5_.js";import"./index-DKzzznqW.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./createLucideIcon-CRH11QI6.js";import"./index-D9Bpvn5I.js";import"./index-DwviEg3j.js";import"./index-DsCZslo7.js";import"./index-DXGtwV5R.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-CIFsUU6l.js";import"./index-CHmAJ0Sv.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-C6Lf2F3X.js";const l=H.forwardRef(({options:o,value:r,onChange:i,placeholder:p="Select an item...",searchPlaceholder:A="Search items...",emptyMessage:B="No items found",className:U,listClassName:W,zIndex:Z,...G},L)=>{var f;const[h,g]=M.useState(!1),F=te("dropdown",Z);return e.jsxs(re,{open:h,onOpenChange:g,children:[e.jsx(ae,{asChild:!0,children:e.jsxs(J,{ref:L,variant:"input",role:"combobox","aria-expanded":h,className:d("w-full justify-between px-3",!r&&"text-muted-foreground",U),...G,children:[r?(f=o.find(a=>a.value===r))==null?void 0:f.label:p,e.jsx(ee,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(se,{align:"start",className:"w-[--radix-popover-trigger-width] px-0 py-0",zIndex:F,children:e.jsxs(K,{children:[e.jsx(Q,{placeholder:A}),e.jsxs(oe,{className:d("max-h-[16.5rem] overflow-y-auto",W),children:[e.jsx(X,{children:B}),e.jsx(Y,{children:o.map(a=>e.jsxs($,{value:a.value,onSelect:x=>{i(x===r?"":x),g(!1)},children:[e.jsx(ne,{className:d("mr-2 h-4 w-4",r===a.value?"opacity-100":"opacity-0")}),a.label]},a.value))})]})]})})]})});l.displayName="Combobox";l.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"ComboboxOption"}],raw:"ComboboxOption[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an item...'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search items...'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No items found'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},listClassName:{required:!1,tsType:{name:"string"},description:""},zIndex:{required:!1,tsType:{name:"number"},description:""}}};const Ee={title:"Components/Combobox",component:l,parameters:{},tags:["autodocs"]},c=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],u=({value:o="",...r})=>{const[i,p]=M.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{...r,value:i,onChange:p}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",i||"none"]})]})},s={args:{options:c,value:"",onChange:()=>{},placeholder:"Select framework..."},tags:["!autodocs"]},t={render:o=>e.jsx(u,{...o}),args:{options:c,value:"",onChange:()=>{},placeholder:"Select framework..."}},n={render:o=>e.jsx(u,{...o}),args:{options:c,value:"react",onChange:()=>{},placeholder:"Select framework..."}},m={render:o=>e.jsx(u,{...o}),args:{options:c,value:"",onChange:()=>{},placeholder:"Choose your framework",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found"}};var C,b,v,w,y;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
Shows a searchable dropdown with framework options.`,...(P=(N=t.parameters)==null?void 0:N.docs)==null?void 0:P.description}}};var T,q,D,I,R;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <ComboboxDemo {...args} />,
  args: {
    options,
    value: 'react',
    onChange: () => {},
    placeholder: 'Select framework...'
  }
}`,...(D=(q=n.parameters)==null?void 0:q.docs)==null?void 0:D.source},description:{story:`Combobox with a pre-selected value.
Demonstrates how the component appears with an initial selection.`,...(R=(I=n.parameters)==null?void 0:I.docs)==null?void 0:R.description}}};var V,O,E,_,z;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
Shows how to customize the placeholder and search text.`,...(z=(_=m.parameters)==null?void 0:_.docs)==null?void 0:z.description}}};const _e=["Playground","Default","WithValue","CustomPlaceholders"];export{m as CustomPlaceholders,t as Default,s as Playground,n as WithValue,_e as __namedExportsOrder,Ee as default};
