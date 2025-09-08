import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as se,r as L}from"./index-D4H_InIO.js";import{c as g}from"./utils-l21BANrb.js";import{g as te}from"./z-index-CmEG1ohp.js";import{C as oe,a as ne,b as le,c as ie,d as ce}from"./CommandItem-xfb4P4v8.js";import{C as me,a as de}from"./CommandList-DVBTa2PJ.js";import{P as pe,a as ue,b as he}from"./Popover-hyTCyids.js";import{B as fe}from"./Button-YgMv2nag.js";import{C as ge}from"./check-CT0OM3mY.js";import{X as xe}from"./x-B9-lGSIk.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./createLucideIcon-CRH11QI6.js";import"./index-D9Bpvn5I.js";import"./index-DwviEg3j.js";import"./index-DsCZslo7.js";import"./index-DXGtwV5R.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-CIFsUU6l.js";import"./styles-hHSuIYOZ.js";import"./index-CHmAJ0Sv.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-C6Lf2F3X.js";import"./useAriaDisabled-DHTVgRPt.js";import"./constants-BFjZK9t2.js";import"./index-DKzzznqW.js";const p=se.forwardRef(({options:a,value:s,onChange:o,placeholder:h="Select items...",searchPlaceholder:U="Search items...",emptyMessage:Z="No items found",className:X,listClassName:$,zIndex:F,isDisabled:H=!1,...J},K)=>{const[x,Q]=L.useState(!1),Y=te("dropdown",F),ee=s.map(r=>{var t;return((t=a.find(f=>f.value===r))==null?void 0:t.label)||r}),re=()=>s.length===0?e.jsx("span",{className:"self-center text-muted-foreground",children:h}):e.jsx("div",{className:"flex flex-1 flex-wrap gap-1",children:ee.map((r,t)=>e.jsxs("div",{className:"flex items-center gap-1 rounded-sm bg-secondary px-2 py-0.5 text-sm text-secondary-foreground",children:[r,e.jsx(xe,{role:"button","aria-label":`Remove ${r}`,className:"h-3 w-3 cursor-pointer opacity-50 hover:opacity-100",strokeWidth:3,onClick:f=>{f.stopPropagation(),o(s.filter((ve,ae)=>ae!==t))}})]},s[t]))});return e.jsxs(pe,{open:x,onOpenChange:Q,children:[e.jsx(ue,{asChild:!0,children:e.jsxs(fe,{ref:K,variant:"input",role:"combobox","aria-expanded":x,className:g("flex h-auto min-h-[2.5rem] w-full items-stretch justify-between px-3 py-1.5",X),isDisabled:H,...J,children:[e.jsx("div",{className:"flex flex-1 text-left",children:re()}),e.jsx(me,{className:"ml-2 h-4 w-4 shrink-0 self-center opacity-50"})]})}),e.jsx(he,{align:"start",className:"w-[--radix-popover-trigger-width] px-0 py-0",zIndex:Y,children:e.jsxs(oe,{children:[e.jsx(ne,{placeholder:U}),e.jsxs(de,{className:g("max-h-[16.5rem] overflow-y-auto",$),children:[e.jsx(le,{children:Z}),e.jsx(ie,{children:a.map(r=>e.jsx(ce,{value:r.value,onSelect:()=>{o(s.includes(r.value)?s.filter(t=>t!==r.value):[...s,r.value])},children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:g("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary-400",s.includes(r.value)?"bg-primary-400 text-white":"opacity-50"),children:s.includes(r.value)?e.jsx(ge,{className:"h-3 w-3",strokeWidth:3}):null}),r.label]})},r.value))})]})]})})]})});p.displayName="MultiSelect";p.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:""},value:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select items...'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search items...'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No items found'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},listClassName:{required:!1,tsType:{name:"string"},description:""},zIndex:{required:!1,tsType:{name:"number"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const He={title:"Components/MultiSelect",component:p,parameters:{},tags:["autodocs"]},d=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],u=({value:a=[],...s})=>{const[o,h]=L.useState(a);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(p,{...s,value:o,onChange:h}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})},n={args:{options:d,value:[],onChange:()=>{},placeholder:"Select frameworks..."},tags:["!autodocs"]},l={render:a=>e.jsx(u,{...a}),args:{options:d,value:[],onChange:()=>{},placeholder:"Select frameworks..."}},i={render:a=>e.jsx(u,{...a}),args:{options:d,value:["react","vue"],onChange:()=>{},placeholder:"Select frameworks..."}},c={render:a=>e.jsx(u,{...a}),args:{options:d,value:[],onChange:()=>{},placeholder:"Choose your frameworks",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found"}},m={render:a=>e.jsx(u,{...a}),args:{options:[...d,{value:"next",label:"Next.js"},{value:"nuxt",label:"Nuxt.js"},{value:"gatsby",label:"Gatsby"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],value:[],onChange:()=>{},placeholder:"Select frameworks..."}};var v,y,w,S,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source},description:{story:`Interactive playground for the MultiSelect component.
Use the controls to experiment with different props and states.`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.description}}};var j,C,N,M,k;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <MultiSelectDemo {...args} />,
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  }
}`,...(N=(C=l.parameters)==null?void 0:C.docs)==null?void 0:N.source},description:{story:`The default state of the MultiSelect component.
Shows a searchable dropdown that allows multiple selections from a list of frameworks.`,...(k=(M=l.parameters)==null?void 0:M.docs)==null?void 0:k.description}}};var T,P,D,q,R;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <MultiSelectDemo {...args} />,
  args: {
    options,
    value: ['react', 'vue'],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  }
}`,...(D=(P=i.parameters)==null?void 0:P.docs)==null?void 0:D.source},description:{story:`MultiSelect with pre-selected values.
Demonstrates how the component appears with multiple items already selected.`,...(R=(q=i.parameters)==null?void 0:q.docs)==null?void 0:R.description}}};var I,O,A,V,W;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <MultiSelectDemo {...args} />,
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Choose your frameworks',
    searchPlaceholder: 'Search frameworks...',
    emptyMessage: 'No frameworks found'
  }
}`,...(A=(O=c.parameters)==null?void 0:O.docs)==null?void 0:A.source},description:{story:`MultiSelect with custom placeholder text.
Shows how to customize the placeholder and search text for better user guidance.`,...(W=(V=c.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};var _,E,z,G,B;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=(E=m.parameters)==null?void 0:E.docs)==null?void 0:z.source},description:{story:`MultiSelect with an extended list of options.
Demonstrates how the component handles a larger set of choices with scrolling.`,...(B=(G=m.parameters)==null?void 0:G.docs)==null?void 0:B.description}}};const Je=["Playground","Default","WithSelection","CustomPlaceholders","WithManyOptions"];export{c as CustomPlaceholders,l as Default,n as Playground,m as WithManyOptions,i as WithSelection,Je as __namedExportsOrder,He as default};
