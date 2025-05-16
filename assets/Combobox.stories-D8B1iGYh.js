import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as G,r as A}from"./index-D4H_InIO.js";import{C as F,a as H,b as J,c as K,d as L}from"./CommandItem-BtvL2P75.js";import{P as Q,a as X,b as Y}from"./Popover-DmJ9GSc1.js";import{c as x}from"./utils-CytzSlOG.js";import{B as Z}from"./Button-Bmp-CLuG.js";import{C as $}from"./chevrons-up-down-CIK3_eWz.js";import{C as ee}from"./check-CLInojLm.js";import"./index-CNI2vRWb.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-BekKX9Q6.js";import"./createLucideIcon-B89bYmoG.js";import"./index-BRrdJNcL.js";import"./styles-Dlcbwdhh.js";import"./index-DB-GfMvg.js";import"./Combination-D4uK-xjD.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-Ak5Mws-w.js";import"./index-DRp8lgU7.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./index-DaWVWvyQ.js";import"./index-BwobEAja.js";const i=G.forwardRef(({options:o,value:r,onChange:l,placeholder:p="Select an item...",searchPlaceholder:B="Search items...",emptyMessage:U="No items found",className:W},z)=>{var g;const[u,h]=A.useState(!1);return e.jsxs(Q,{open:u,onOpenChange:h,children:[e.jsx(X,{asChild:!0,children:e.jsxs(Z,{ref:z,variant:"input",role:"combobox","aria-expanded":u,className:x("w-full justify-between",!r&&"text-muted-foreground",W),children:[r?(g=o.find(a=>a.value===r))==null?void 0:g.label:p,e.jsx($,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(Y,{align:"start",className:"w-[--radix-popover-trigger-width] p-0",children:e.jsxs(F,{children:[e.jsx(H,{placeholder:B}),e.jsx(J,{children:U}),e.jsx(K,{className:"max-h-[12rem] overflow-y-auto",children:o.map(a=>e.jsxs(L,{value:a.value,onSelect:f=>{l(f===r?"":f),h(!1)},children:[e.jsx(ee,{className:x("mr-2 h-4 w-4",r===a.value?"opacity-100":"opacity-0")}),a.label]},a.value))})]})})]})});i.displayName="Combobox";i.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"ComboboxOption"}],raw:"ComboboxOption[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an item...'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search items...'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No items found'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Ne={title:"Components/Combobox",component:i,parameters:{},tags:["autodocs"]},c=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],d=({value:o="",...r})=>{const[l,p]=A.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...r,value:l,onChange:p}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",l||"none"]})]})},s={args:{options:c,value:"",onChange:()=>{},placeholder:"Select framework..."},tags:["!autodocs"]},t={render:o=>e.jsx(d,{...o}),args:{options:c,value:"",onChange:()=>{},placeholder:"Select framework..."}},n={render:o=>e.jsx(d,{...o}),args:{options:c,value:"react",onChange:()=>{},placeholder:"Select framework..."}},m={render:o=>e.jsx(d,{...o}),args:{options:c,value:"",onChange:()=>{},placeholder:"Choose your framework",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found"}};var C,b,v,w,y;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
Shows a searchable dropdown with framework options.`,...(P=(N=t.parameters)==null?void 0:N.docs)==null?void 0:P.description}}};var T,D,q,R,V;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <ComboboxDemo {...args} />,
  args: {
    options,
    value: 'react',
    onChange: () => {},
    placeholder: 'Select framework...'
  }
}`,...(q=(D=n.parameters)==null?void 0:D.docs)==null?void 0:q.source},description:{story:`Combobox with a pre-selected value.
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
Shows how to customize the placeholder and search text.`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.description}}};const Pe=["Playground","Default","WithValue","CustomPlaceholders"];export{m as CustomPlaceholders,t as Default,s as Playground,n as WithValue,Pe as __namedExportsOrder,Ne as default};
