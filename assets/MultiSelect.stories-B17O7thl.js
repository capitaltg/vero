import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{c as m}from"./utils-CytzSlOG.js";import{R as I,r as B}from"./index-D4H_InIO.js";import{C as z,a as U,b as $,c as F,d as H}from"./CommandItem-C0nNAu4W.js";import{P as J,a as K,b as L}from"./Popover-DHD1Bpsv.js";import{B as Q}from"./Button-C_imVjo7.js";import{C as X}from"./chevrons-up-down-CIK3_eWz.js";import{C as Y}from"./check-CLInojLm.js";import"./index-CNI2vRWb.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-BekKX9Q6.js";import"./createLucideIcon-B89bYmoG.js";import"./index-BRrdJNcL.js";import"./styles-Dlcbwdhh.js";import"./index-DB-GfMvg.js";import"./Combination-Bv7TbtME.js";import"./index-DAnQV6hb.js";import"./index-Ak5Mws-w.js";import"./index-LL0F0lhE.js";import"./index-DDORxvzF.js";import"./index-DaWVWvyQ.js";import"./index-BwobEAja.js";const i=I.forwardRef(({options:O,value:r,onChange:R,placeholder:A="Select items...",searchPlaceholder:D="Search items...",emptyMessage:E="No items found",className:V},W)=>{const[c,_]=B.useState(!1);return e.jsxs(J,{open:c,onOpenChange:_,children:[e.jsx(K,{asChild:!0,children:e.jsxs(Q,{ref:W,variant:"input",role:"combobox","aria-expanded":c,className:m("w-full justify-between",r.length===0&&"text-muted-foreground",V),children:[r.length>0?`${r.length} selected`:A,e.jsx(X,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(L,{align:"start",className:"w-[--radix-popover-trigger-width] p-0",children:e.jsxs(z,{children:[e.jsx(U,{placeholder:D}),e.jsx($,{children:E}),e.jsx(F,{className:"max-h-[12rem] overflow-y-auto",children:O.map(a=>e.jsx(H,{value:a.value,onSelect:()=>{R(r.includes(a.value)?r.filter(G=>G!==a.value):[...r,a.value])},children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:m("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary-400",r.includes(a.value)?"bg-primary-400 text-primary-400-foreground":"opacity-50"),children:r.includes(a.value)?e.jsx(Y,{className:"h-3 w-3"}):null}),a.label]})},a.value))})]})})]})});i.displayName="MultiSelect";i.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:""},value:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select items...'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search items...'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No items found'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const be={title:"Components/MultiSelect",component:i,parameters:{},tags:["autodocs"]},l=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],t={args:{options:l,value:[],onChange:()=>{},placeholder:"Select frameworks..."}},s={args:{options:l,value:["react","vue"],onChange:()=>{},placeholder:"Select frameworks..."}},o={args:{options:l,value:[],onChange:()=>{},placeholder:"Choose your frameworks",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found"}},n={args:{options:[...l,{value:"next",label:"Next.js"},{value:"nuxt",label:"Nuxt.js"},{value:"gatsby",label:"Gatsby"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],value:[],onChange:()=>{},placeholder:"Select frameworks..."}};var p,u,d,h,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source},description:{story:`The default state of the MultiSelect component.
Shows a searchable dropdown that allows multiple selections from a list of frameworks.`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};var g,v,x,w,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    options,
    value: ['react', 'vue'],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source},description:{story:`MultiSelect with pre-selected values.
Demonstrates how the component appears with multiple items already selected.`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.description}}};var S,b,C,j,N;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Choose your frameworks',
    searchPlaceholder: 'Search frameworks...',
    emptyMessage: 'No frameworks found'
  }
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source},description:{story:`MultiSelect with custom placeholder text.
Shows how to customize the placeholder and search text for better user guidance.`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.description}}};var k,M,P,T,q;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    options: [...options, {
      value: 'next',
      label: 'Next.js'
    }, {
      value: 'nuxt',
      label: 'Nuxt.js'
    }, {
      value: 'gatsby',
      label: 'Gatsby'
    }, {
      value: 'remix',
      label: 'Remix'
    }, {
      value: 'astro',
      label: 'Astro'
    }],
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  }
}`,...(P=(M=n.parameters)==null?void 0:M.docs)==null?void 0:P.source},description:{story:`MultiSelect with an extended list of options.
Demonstrates how the component handles a larger set of choices with scrolling.`,...(q=(T=n.parameters)==null?void 0:T.docs)==null?void 0:q.description}}};const Ce=["Default","WithSelection","CustomPlaceholders","WithManyOptions"];export{o as CustomPlaceholders,t as Default,n as WithManyOptions,s as WithSelection,Ce as __namedExportsOrder,be as default};
