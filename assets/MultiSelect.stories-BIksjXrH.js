import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as K,r as B}from"./index-D4H_InIO.js";import{c as g}from"./utils-CytzSlOG.js";import{C as L,a as Q,b as X,c as Y,d as Z}from"./CommandItem-BtvL2P75.js";import{P as ee,a as re,b as ae}from"./Popover-DHD1Bpsv.js";import{B as te}from"./Button-Bmp-CLuG.js";import{C as se}from"./chevrons-up-down-CIK3_eWz.js";import{C as oe}from"./check-CLInojLm.js";import"./index-CNI2vRWb.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-BekKX9Q6.js";import"./createLucideIcon-B89bYmoG.js";import"./index-BRrdJNcL.js";import"./styles-Dlcbwdhh.js";import"./index-DB-GfMvg.js";import"./Combination-Bv7TbtME.js";import"./index-DAnQV6hb.js";import"./index-Ak5Mws-w.js";import"./index-LL0F0lhE.js";import"./index-DDORxvzF.js";import"./index-DaWVWvyQ.js";import"./index-BwobEAja.js";const d=K.forwardRef(({options:r,value:a,onChange:s,placeholder:u="Select items...",searchPlaceholder:U="Search items...",emptyMessage:z="No items found",className:$},F)=>{const[h,H]=B.useState(!1);return e.jsxs(ee,{open:h,onOpenChange:H,children:[e.jsx(re,{asChild:!0,children:e.jsxs(te,{ref:F,variant:"input",role:"combobox","aria-expanded":h,className:g("w-full justify-between",a.length===0&&"text-muted-foreground",$),children:[a.length>0?`${a.length} selected`:u,e.jsx(se,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(ae,{align:"start",className:"w-[--radix-popover-trigger-width] p-0",children:e.jsxs(L,{children:[e.jsx(Q,{placeholder:U}),e.jsx(X,{children:z}),e.jsx(Y,{className:"max-h-[12rem] overflow-y-auto",children:r.map(t=>e.jsx(Z,{value:t.value,onSelect:()=>{s(a.includes(t.value)?a.filter(J=>J!==t.value):[...a,t.value])},children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:g("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary-400",a.includes(t.value)?"text-primary-400-foreground bg-primary-400":"opacity-50"),children:a.includes(t.value)?e.jsx(oe,{className:"h-3 w-3"}):null}),t.label]})},t.value))})]})})]})});d.displayName="MultiSelect";d.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:""},value:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select items...'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search items...'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No items found'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const De={title:"Components/MultiSelect",component:d,parameters:{},tags:["autodocs"]},m=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],p=({value:r=[],...a})=>{const[s,u]=B.useState(r);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{...a,value:s,onChange:u}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",s.length>0?s.join(", "):"none"]})]})},o={args:{options:m,value:[],onChange:()=>{},placeholder:"Select frameworks..."}},n={render:r=>e.jsx(p,{...r}),args:{options:m,value:[],onChange:()=>{},placeholder:"Select frameworks..."}},l={render:r=>e.jsx(p,{...r}),args:{options:m,value:["react","vue"],onChange:()=>{},placeholder:"Select frameworks..."}},i={render:r=>e.jsx(p,{...r}),args:{options:m,value:[],onChange:()=>{},placeholder:"Choose your frameworks",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found"}},c={render:r=>e.jsx(p,{...r}),args:{options:[...m,{value:"next",label:"Next.js"},{value:"nuxt",label:"Nuxt.js"},{value:"gatsby",label:"Gatsby"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],value:[],onChange:()=>{},placeholder:"Select frameworks..."}};var f,v,x,S,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source},description:{story:`Interactive playground for the MultiSelect component.
Use the controls to experiment with different props and states.`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.description}}};var w,b,C,j,M;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <MultiSelectDemo {...args} />,
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  }
}`,...(C=(b=n.parameters)==null?void 0:b.docs)==null?void 0:C.source},description:{story:`The default state of the MultiSelect component.
Shows a searchable dropdown that allows multiple selections from a list of frameworks.`,...(M=(j=n.parameters)==null?void 0:j.docs)==null?void 0:M.description}}};var N,k,P,D,T;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <MultiSelectDemo {...args} />,
  args: {
    options,
    value: ['react', 'vue'],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  }
}`,...(P=(k=l.parameters)==null?void 0:k.docs)==null?void 0:P.source},description:{story:`MultiSelect with pre-selected values.
Demonstrates how the component appears with multiple items already selected.`,...(T=(D=l.parameters)==null?void 0:D.docs)==null?void 0:T.description}}};var q,O,R,A,V;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <MultiSelectDemo {...args} />,
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Choose your frameworks',
    searchPlaceholder: 'Search frameworks...',
    emptyMessage: 'No frameworks found'
  }
}`,...(R=(O=i.parameters)==null?void 0:O.docs)==null?void 0:R.source},description:{story:`MultiSelect with custom placeholder text.
Shows how to customize the placeholder and search text for better user guidance.`,...(V=(A=i.parameters)==null?void 0:A.docs)==null?void 0:V.description}}};var E,I,W,_,G;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <MultiSelectDemo {...args} />,
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
}`,...(W=(I=c.parameters)==null?void 0:I.docs)==null?void 0:W.source},description:{story:`MultiSelect with an extended list of options.
Demonstrates how the component handles a larger set of choices with scrolling.`,...(G=(_=c.parameters)==null?void 0:_.docs)==null?void 0:G.description}}};const Te=["Playground","Default","WithSelection","CustomPlaceholders","WithManyOptions"];export{i as CustomPlaceholders,n as Default,o as Playground,c as WithManyOptions,l as WithSelection,Te as __namedExportsOrder,De as default};
