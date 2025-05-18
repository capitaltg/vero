import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{r as z}from"./index-D4H_InIO.js";import{c as h}from"./utils-CytzSlOG.js";import{C as J}from"./Checkbox-DYIrgyHE.js";import"./Label-CSZ77ikx.js";import"./styles-DfGEMFtJ.js";import"./index-CNI2vRWb.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-BekKX9Q6.js";import"./index-DB-GfMvg.js";import"./index-DXU_LAI1.js";import"./index-DDORxvzF.js";import"./index-DaWVWvyQ.js";import"./check-CLInojLm.js";import"./createLucideIcon-B89bYmoG.js";const d=z.forwardRef(({options:e,value:n,onChange:o,className:g,columns:m=2},B)=>r.jsx("div",{ref:B,className:h("",g),children:r.jsx("div",{className:h("grid gap-3",m===1&&"grid-cols-1",m===2&&"grid-cols-2",m===3&&"grid-cols-3",m===4&&"grid-cols-4"),children:e.map(s=>r.jsx("div",{className:"flex items-center space-x-2",children:r.jsx(J,{id:s.id,label:s.label,isChecked:n.includes(s.id),onCheckedChange:F=>{o(F?[...n,s.id]:n.filter(H=>H!==s.id))}})},s.id))})}));d.displayName="CheckboxGroup";d.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"CheckboxOption"}],raw:"CheckboxOption[]"},description:""},value:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},columns:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:"",defaultValue:{value:"2",computed:!1}}}};const ce={title:"Components/CheckboxGroup",component:d,parameters:{},tags:["autodocs"]},l=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],u=({value:e=[],...n})=>{const[o,g]=z.useState(e);return r.jsxs("div",{className:"space-y-4",children:[r.jsx(d,{...n,value:o,onChange:g}),r.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",o.length>0?o.join(", "):"none"]})]})},a={args:{options:l,value:[],onChange:()=>{}},tags:["!autodocs"]},t={render:e=>r.jsx(u,{...e}),args:{options:l,value:[],onChange:()=>{}}},i={render:e=>r.jsx(u,{...e}),args:{options:l,value:["option1","option3"],onChange:()=>{}}},c={render:e=>r.jsx(u,{...e}),args:{options:l,columns:1,value:[],onChange:()=>{}}},p={render:e=>r.jsx(u,{...e}),args:{options:l,columns:3,value:[],onChange:()=>{}}};var x,C,b,v,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {}
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(b=(C=a.parameters)==null?void 0:C.docs)==null?void 0:b.source},description:{story:`Interactive playground for the CheckboxGroup component.
Use the controls to experiment with different props and states.`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.description}}};var y,k,j,w,G;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <CheckboxGroupDemo {...args} />,
  args: {
    options,
    value: [],
    onChange: () => {}
  }
}`,...(j=(k=t.parameters)==null?void 0:k.docs)==null?void 0:j.source},description:{story:`The default state of the CheckboxGroup component.
Shows a group of checkboxes with no initial selection.`,...(G=(w=t.parameters)==null?void 0:w.docs)==null?void 0:G.description}}};var S,D,N,T,O;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <CheckboxGroupDemo {...args} />,
  args: {
    options,
    value: ['option1', 'option3'],
    onChange: () => {}
  }
}`,...(N=(D=i.parameters)==null?void 0:D.docs)==null?void 0:N.source},description:{story:`CheckboxGroup with pre-selected values.
Demonstrates how the group appears with multiple checkboxes selected.`,...(O=(T=i.parameters)==null?void 0:T.docs)==null?void 0:O.description}}};var q,_,A,E,I;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <CheckboxGroupDemo {...args} />,
  args: {
    options,
    columns: 1,
    value: [],
    onChange: () => {}
  }
}`,...(A=(_=c.parameters)==null?void 0:_.docs)==null?void 0:A.source},description:{story:`CheckboxGroup in a single column layout.
Shows checkboxes stacked vertically in one column.`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.description}}};var R,P,V,W,U;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <CheckboxGroupDemo {...args} />,
  args: {
    options,
    columns: 3,
    value: [],
    onChange: () => {}
  }
}`,...(V=(P=p.parameters)==null?void 0:P.docs)==null?void 0:V.source},description:{story:`CheckboxGroup in a three-column layout.
Demonstrates how checkboxes can be arranged in multiple columns.`,...(U=(W=p.parameters)==null?void 0:W.docs)==null?void 0:U.description}}};const pe=["Playground","Default","WithSelection","SingleColumn","ThreeColumns"];export{t as Default,a as Playground,c as SingleColumn,p as ThreeColumns,i as WithSelection,pe as __namedExportsOrder,ce as default};
