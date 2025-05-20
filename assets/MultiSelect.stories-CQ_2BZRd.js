import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as Z,r as U}from"./index-D4H_InIO.js";import{c as f}from"./utils-CytzSlOG.js";import{C as ee,a as re,b as ae,c as te,d as se}from"./CommandItem-C6-4Vm_e.js";import{C as oe,a as ne}from"./CommandList-BKMEM19U.js";import{P as le,a as ie,b as ce}from"./Popover-CvV8cXTf.js";import{B as me}from"./Button-CYoANYDv.js";import{C as de}from"./check-CLInojLm.js";import{X as pe}from"./x-BfDvlftu.js";import"./index-CNI2vRWb.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-BekKX9Q6.js";import"./createLucideIcon-B89bYmoG.js";import"./index-DRiW-JRG.js";import"./index-DwviEg3j.js";import"./index-DsCZslo7.js";import"./index-D6t6XU86.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-CbP7PoiL.js";import"./styles-DfGEMFtJ.js";import"./index-CWhMmZjO.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-C6Lf2F3X.js";import"./index-BwobEAja.js";const p=Z.forwardRef(({options:a,value:t,onChange:o,placeholder:h="Select items...",searchPlaceholder:z="Search items...",emptyMessage:X="No items found",className:$,listClassName:F},H)=>{const[x,J]=U.useState(!1),K=t.map(r=>{var s;return((s=a.find(g=>g.value===r))==null?void 0:s.label)||r}),Q=()=>t.length===0?e.jsx("span",{className:"self-center text-muted-foreground",children:h}):e.jsx("div",{className:"flex flex-1 flex-wrap gap-1",children:K.map((r,s)=>e.jsxs("div",{className:"flex items-center gap-1 rounded-sm bg-secondary px-2 py-0.5 text-sm text-secondary-foreground",children:[r,e.jsx(pe,{role:"button","aria-label":`Remove ${r}`,className:"h-3 w-3 cursor-pointer opacity-50 hover:opacity-100",strokeWidth:3,onClick:g=>{g.stopPropagation(),o(t.filter((ue,Y)=>Y!==s))}})]},t[s]))});return e.jsxs(le,{open:x,onOpenChange:J,children:[e.jsx(ie,{asChild:!0,children:e.jsxs(me,{ref:H,variant:"input",role:"combobox","aria-expanded":x,className:f("flex h-auto min-h-[2.5rem] w-full items-stretch justify-between px-3 py-1.5",$),children:[e.jsx("div",{className:"flex flex-1 text-left",children:Q()}),e.jsx(oe,{className:"ml-2 h-4 w-4 shrink-0 self-center opacity-50"})]})}),e.jsx(ce,{align:"start",className:"w-[--radix-popover-trigger-width] px-0 py-0",children:e.jsxs(ee,{children:[e.jsx(re,{placeholder:z}),e.jsxs(ne,{className:f("max-h-[16.5rem] overflow-y-auto",F),children:[e.jsx(ae,{children:X}),e.jsx(te,{children:a.map(r=>e.jsx(se,{value:r.value,onSelect:()=>{o(t.includes(r.value)?t.filter(s=>s!==r.value):[...t,r.value])},children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:f("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary-400",t.includes(r.value)?"bg-primary-400 text-white":"opacity-50"),children:t.includes(r.value)?e.jsx(de,{className:"h-3 w-3",strokeWidth:3}):null}),r.label]})},r.value))})]})]})})]})});p.displayName="MultiSelect";p.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:""},value:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select items...'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search items...'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No items found'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},listClassName:{required:!1,tsType:{name:"string"},description:""}}};const Ge={title:"Components/MultiSelect",component:p,parameters:{},tags:["autodocs"]},d=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],u=({value:a=[],...t})=>{const[o,h]=U.useState(a);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(p,{...t,value:o,onChange:h}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})},n={args:{options:d,value:[],onChange:()=>{},placeholder:"Select frameworks..."},tags:["!autodocs"]},l={render:a=>e.jsx(u,{...a}),args:{options:d,value:[],onChange:()=>{},placeholder:"Select frameworks..."}},i={render:a=>e.jsx(u,{...a}),args:{options:d,value:["react","vue"],onChange:()=>{},placeholder:"Select frameworks..."}},c={render:a=>e.jsx(u,{...a}),args:{options:d,value:[],onChange:()=>{},placeholder:"Choose your frameworks",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found"}},m={render:a=>e.jsx(u,{...a}),args:{options:[...d,{value:"next",label:"Next.js"},{value:"nuxt",label:"Nuxt.js"},{value:"gatsby",label:"Gatsby"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],value:[],onChange:()=>{},placeholder:"Select frameworks..."}};var v,y,w,S,j;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source},description:{story:`Interactive playground for the MultiSelect component.
Use the controls to experiment with different props and states.`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.description}}};var b,C,N,M,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <MultiSelectDemo {...args} />,
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  }
}`,...(N=(C=l.parameters)==null?void 0:C.docs)==null?void 0:N.source},description:{story:`The default state of the MultiSelect component.
Shows a searchable dropdown that allows multiple selections from a list of frameworks.`,...(k=(M=l.parameters)==null?void 0:M.docs)==null?void 0:k.description}}};var P,T,D,R,q;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <MultiSelectDemo {...args} />,
  args: {
    options,
    value: ['react', 'vue'],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  }
}`,...(D=(T=i.parameters)==null?void 0:T.docs)==null?void 0:D.source},description:{story:`MultiSelect with pre-selected values.
Demonstrates how the component appears with multiple items already selected.`,...(q=(R=i.parameters)==null?void 0:R.docs)==null?void 0:q.description}}};var O,A,W,V,_;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <MultiSelectDemo {...args} />,
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Choose your frameworks',
    searchPlaceholder: 'Search frameworks...',
    emptyMessage: 'No frameworks found'
  }
}`,...(W=(A=c.parameters)==null?void 0:A.docs)==null?void 0:W.source},description:{story:`MultiSelect with custom placeholder text.
Shows how to customize the placeholder and search text for better user guidance.`,...(_=(V=c.parameters)==null?void 0:V.docs)==null?void 0:_.description}}};var E,I,G,B,L;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(G=(I=m.parameters)==null?void 0:I.docs)==null?void 0:G.source},description:{story:`MultiSelect with an extended list of options.
Demonstrates how the component handles a larger set of choices with scrolling.`,...(L=(B=m.parameters)==null?void 0:B.docs)==null?void 0:L.description}}};const Be=["Playground","Default","WithSelection","CustomPlaceholders","WithManyOptions"];export{c as CustomPlaceholders,l as Default,n as Playground,m as WithManyOptions,i as WithSelection,Be as __namedExportsOrder,Ge as default};
