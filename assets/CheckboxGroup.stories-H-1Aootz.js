import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{c as m}from"./utils-CytzSlOG.js";import{r as I}from"./index-D4H_InIO.js";import{C as V}from"./Checkbox-CBsmjZP3.js";import"./Label-DnzvTyk4.js";import"./styles-Dlcbwdhh.js";import"./index-CNI2vRWb.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-BekKX9Q6.js";import"./index-DB-GfMvg.js";import"./index-DXU_LAI1.js";import"./index-DDORxvzF.js";import"./index-DaWVWvyQ.js";import"./check-CLInojLm.js";import"./createLucideIcon-B89bYmoG.js";const p=I.forwardRef(({options:_,value:c,onChange:l,className:A,columns:a=2},E)=>t.jsx("div",{ref:E,className:m("",A),children:t.jsx("div",{className:m("grid gap-3",a===1&&"grid-cols-1",a===2&&"grid-cols-2",a===3&&"grid-cols-3",a===4&&"grid-cols-4"),children:_.map(e=>t.jsx("div",{className:"flex items-center space-x-2",children:t.jsx(V,{id:e.id,label:e.label,isChecked:c.includes(e.id),onCheckedChange:R=>{l(R?[...c,e.id]:c.filter(W=>W!==e.id))}})},e.id))})}));p.displayName="CheckboxGroup";p.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"CheckboxOption"}],raw:"CheckboxOption[]"},description:""},value:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},columns:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:"",defaultValue:{value:"2",computed:!1}}}};const oe={title:"Components/CheckboxGroup",component:p,parameters:{},tags:["autodocs"]},i=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],o={args:{options:i,value:[],onChange:()=>{}}},r={args:{options:i,value:["option1","option3"],onChange:()=>{}}},n={args:{options:i,value:[],onChange:()=>{},columns:1}},s={args:{options:i,value:[],onChange:()=>{},columns:3}};var d,u,h,g,C;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {}
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:`The default state of the CheckboxGroup component.
Shows a group of checkboxes with no initial selection.`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.description}}};var x,b,f,v,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    options,
    value: ['option1', 'option3'],
    onChange: () => {}
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source},description:{story:`CheckboxGroup with pre-selected options.
Demonstrates how the group appears with multiple selected checkboxes.`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.description}}};var k,w,S,G,T;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {},
    columns: 1
  }
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source},description:{story:`CheckboxGroup in a single column layout.
Shows checkboxes stacked vertically in one column.`,...(T=(G=n.parameters)==null?void 0:G.docs)==null?void 0:T.description}}};var O,j,N,q,D;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {},
    columns: 3
  }
}`,...(N=(j=s.parameters)==null?void 0:j.docs)==null?void 0:N.source},description:{story:`CheckboxGroup in a three-column layout.
Demonstrates how checkboxes can be arranged in multiple columns.`,...(D=(q=s.parameters)==null?void 0:q.docs)==null?void 0:D.description}}};const re=["Default","WithSelection","SingleColumn","ThreeColumns"];export{o as Default,n as SingleColumn,s as ThreeColumns,r as WithSelection,re as __namedExportsOrder,oe as default};
