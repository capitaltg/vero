import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{C as _,a as I,b as M,c as A,d as B}from"./CommandItem-C0nNAu4W.js";import{P as W,a as z,b as G}from"./Popover-DHD1Bpsv.js";import{c as u}from"./utils-CytzSlOG.js";import{R as U,r as F}from"./index-D4H_InIO.js";import{B as H}from"./Button-C_imVjo7.js";import{C as J}from"./chevrons-up-down-CIK3_eWz.js";import{C as K}from"./check-CLInojLm.js";import"./index-CNI2vRWb.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-BekKX9Q6.js";import"./createLucideIcon-B89bYmoG.js";import"./index-BRrdJNcL.js";import"./styles-Dlcbwdhh.js";import"./index-DB-GfMvg.js";import"./Combination-Bv7TbtME.js";import"./index-DAnQV6hb.js";import"./index-Ak5Mws-w.js";import"./index-LL0F0lhE.js";import"./index-DDORxvzF.js";import"./index-DaWVWvyQ.js";import"./index-BwobEAja.js";const n=U.forwardRef(({options:l,value:a,onChange:q,placeholder:O="Select an item...",searchPlaceholder:R="Search items...",emptyMessage:V="No items found",className:D},E)=>{var c;const[i,p]=F.useState(!1);return e.jsxs(W,{open:i,onOpenChange:p,children:[e.jsx(z,{asChild:!0,children:e.jsxs(H,{ref:E,variant:"input",role:"combobox","aria-expanded":i,className:u("w-full justify-between",!a&&"text-muted-foreground",D),children:[a?(c=l.find(o=>o.value===a))==null?void 0:c.label:O,e.jsx(J,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(G,{align:"start",className:"w-[--radix-popover-trigger-width] p-0",children:e.jsxs(_,{children:[e.jsx(I,{placeholder:R}),e.jsx(M,{children:V}),e.jsx(A,{className:"max-h-[12rem] overflow-y-auto",children:l.map(o=>e.jsxs(B,{value:o.value,onSelect:d=>{q(d===a?"":d),p(!1)},children:[e.jsx(K,{className:u("mr-2 h-4 w-4",a===o.value?"opacity-100":"opacity-0")}),o.label]},o.value))})]})})]})});n.displayName="Combobox";n.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"ComboboxOption"}],raw:"ComboboxOption[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an item...'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search items...'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No items found'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Ce={title:"Components/Combobox",component:n,parameters:{},tags:["autodocs"]},m=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],r={args:{options:m,value:"",onChange:()=>{},placeholder:"Select framework..."}},s={args:{options:m,value:"react",onChange:()=>{},placeholder:"Select framework..."}},t={args:{options:m,value:"",onChange:()=>{},placeholder:"Choose your framework",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found"}};var h,f,g,C,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select framework...'
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source},description:{story:`The default state of the Combobox component.
Shows a searchable dropdown with framework options.`,...(x=(C=r.parameters)==null?void 0:C.docs)==null?void 0:x.description}}};var b,v,w,y,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    options,
    value: 'react',
    onChange: () => {},
    placeholder: 'Select framework...'
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source},description:{story:`Combobox with a pre-selected value.
Demonstrates how the component appears with an initial selection.`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.description}}};var j,k,N,P,T;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Choose your framework',
    searchPlaceholder: 'Search frameworks...',
    emptyMessage: 'No frameworks found'
  }
}`,...(N=(k=t.parameters)==null?void 0:k.docs)==null?void 0:N.source},description:{story:`Combobox with custom placeholder text.
Shows how to customize the placeholder and search text.`,...(T=(P=t.parameters)==null?void 0:P.docs)==null?void 0:T.description}}};const xe=["Default","WithValue","CustomPlaceholders"];export{t as CustomPlaceholders,r as Default,s as WithValue,xe as __namedExportsOrder,Ce as default};
