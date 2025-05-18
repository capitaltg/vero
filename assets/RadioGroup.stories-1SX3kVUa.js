import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{r as $}from"./index-D4H_InIO.js";import{c as ae}from"./utils-CytzSlOG.js";import{a as re,R as te}from"./Radio-BVGHuXva.js";import"./Label-CSZ77ikx.js";import"./styles-DfGEMFtJ.js";import"./index-CNI2vRWb.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-BekKX9Q6.js";import"./index-DwviEg3j.js";import"./index-BlgluLTO.js";import"./index-DsCZslo7.js";import"./index-DAnQV6hb.js";import"./index-C6Lf2F3X.js";import"./index-DXU_LAI1.js";import"./index-CbP7PoiL.js";import"./createLucideIcon-B89bYmoG.js";const h=$.forwardRef(({options:e,value:a,onChange:v,className:f,orientation:s="vertical",variant:r="default"},oe)=>o.jsx(re,{ref:oe,value:a,onValueChange:v,className:ae("grid gap-3",s==="horizontal"&&r==="default"&&"flex flex-row space-x-2",s==="vertical"&&r==="default"&&"flex flex-col gap-2 space-y-1",r==="tile"&&"grid-cols-1 md:grid-cols-2 lg:grid-cols-3",f),children:e.map(t=>o.jsx(te,{id:t.value,value:t.value,label:t.label,description:t.description,variant:r,isChecked:a===t.value},t.value))}));h.displayName="RadioGroup";h.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioOption"}],raw:"RadioOption[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'tile'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'tile'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};const be={title:"Components/RadioGroup",component:h,parameters:{},argTypes:{value:{control:"text",description:"Currently selected value",type:{name:"string",required:!1}},onChange:{description:"Callback when selection changes",type:{name:"function",required:!0},action:"selection changed"},options:{control:"object",description:"Array of radio options",type:{name:"array",value:{name:"object",value:{}},required:!0}},orientation:{control:"radio",options:["horizontal","vertical"],description:"Layout orientation of the radio group",type:{name:"string",required:!1}},variant:{control:"radio",options:["default","tile"],description:"Visual variant of radio buttons",type:{name:"string",required:!1}}},tags:["autodocs"]},g=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],ee=[{value:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{value:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{value:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],n=({value:e="",...a})=>{const[v,f]=$.useState(e);return o.jsxs("div",{className:"space-y-4",children:[o.jsx(h,{...a,value:v,onChange:s=>{var r;f(s),(r=a.onChange)==null||r.call(a,s)}}),o.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",v||"none"]})]})},i={args:{options:g,value:"",onChange:()=>{}},tags:["!autodocs"]},l={render:e=>o.jsx(n,{...e}),args:{options:g,value:"",onChange:()=>{}}},p={render:e=>o.jsx(n,{...e}),args:{options:g,value:"option2",onChange:()=>{}}},d={render:e=>o.jsx(n,{...e}),args:{options:g,value:"",onChange:()=>{},orientation:"horizontal"}},c={render:e=>o.jsx(n,{...e}),args:{options:g,value:"",onChange:()=>{},orientation:"vertical"}},u={render:e=>o.jsx(n,{...e}),args:{options:ee,value:"",onChange:()=>{},variant:"tile"}},m={render:e=>o.jsx(n,{...e}),args:{options:ee,value:"business",onChange:()=>{},variant:"tile"}};var y,R,x,w,C;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {}
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(x=(R=i.parameters)==null?void 0:R.docs)==null?void 0:x.source},description:{story:`Interactive playground for the RadioGroup component.
Use the controls to experiment with different props and states.`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.description}}};var b,G,S,j,O;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {}
  }
}`,...(S=(G=l.parameters)==null?void 0:G.docs)==null?void 0:S.source},description:{story:`The default state of the RadioGroup component.
Shows a basic vertical radio group with no initial selection.`,...(O=(j=l.parameters)==null?void 0:j.docs)==null?void 0:O.description}}};var T,z,q,D,N;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: 'option2',
    onChange: () => {}
  }
}`,...(q=(z=p.parameters)==null?void 0:z.docs)==null?void 0:q.source},description:{story:`RadioGroup with a pre-selected value.
Demonstrates how the group appears with an initial selection.`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.description}}};var V,E,W,_,k;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    orientation: 'horizontal'
  }
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source},description:{story:`RadioGroup with horizontal layout.
Shows radio options arranged in a horizontal line.`,...(k=(_=d.parameters)==null?void 0:_.docs)==null?void 0:k.description}}};var P,A,F,H,I;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    orientation: 'vertical'
  }
}`,...(F=(A=c.parameters)==null?void 0:A.docs)==null?void 0:F.source},description:{story:`RadioGroup with vertical layout.
Shows radio options stacked vertically.`,...(I=(H=c.parameters)==null?void 0:H.docs)==null?void 0:I.description}}};var B,L,U,J,K;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: tileOptions,
    value: '',
    onChange: () => {},
    variant: 'tile'
  }
}`,...(U=(L=u.parameters)==null?void 0:L.docs)==null?void 0:U.source},description:{story:`RadioGroup with tile variant.
Shows radio options as larger tiles with descriptions.`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var M,Q,X,Y,Z;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: tileOptions,
    value: 'business',
    onChange: () => {},
    variant: 'tile'
  }
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:`Tile variant RadioGroup with a pre-selected value.
Demonstrates how tile radio options appear with an initial selection.`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};const Ge=["Playground","Default","WithSelection","Horizontal","Vertical","Tile","TileWithSelection"];export{l as Default,d as Horizontal,i as Playground,u as Tile,m as TileWithSelection,c as Vertical,p as WithSelection,Ge as __namedExportsOrder,be as default};
