import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{r as fe}from"./index-D4H_InIO.js";import{c as we}from"./utils-l21BANrb.js";import{a as Re,R as Ce}from"./Radio-PVgbpzaW.js";import"./constants-BFjZK9t2.js";import"./styles-hHSuIYOZ.js";import"./index-DKzzznqW.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-DwviEg3j.js";import"./index-D8GmRN1t.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-DjHbRFSh.js";import"./index-DsCZslo7.js";import"./index-DAnQV6hb.js";import"./index-YtIeenAn.js";import"./index-C6Lf2F3X.js";import"./index-DXU_LAI1.js";import"./index-CIFsUU6l.js";import"./createLucideIcon-CRH11QI6.js";import"./Label-CjB5ZDVY.js";const b=fe.forwardRef(({options:e,value:n,onChange:y,className:x,orientation:s="vertical",variant:t="default",...be},xe)=>o.jsx(Re,{ref:xe,value:n,onValueChange:y,className:we("grid gap-3",s==="horizontal"&&t==="default"&&"flex flex-row gap-5",s==="vertical"&&t==="default"&&"flex flex-col gap-2 space-y-1",t==="tile"&&"grid-cols-1 md:grid-cols-2 lg:grid-cols-3",t==="button"&&s==="horizontal"&&"flex flex-row gap-0 [&>*:first-child]:ml-0 [&>*:first-child]:rounded-l-sm [&>*:last-child]:rounded-r-sm [&>*]:-ml-[1px] [&>*]:rounded-none",t==="button"&&s==="vertical"&&"flex flex-col gap-0 [&>*:first-child]:mt-0 [&>*:first-child]:rounded-t-sm [&>*:last-child]:rounded-b-sm [&>*]:-mt-[1px] [&>*]:rounded-none",x,{...be}),children:e.map(i=>o.jsx(Ce,{id:i.value,value:i.value,label:i.label,description:i.description,variant:t,isChecked:n===i.value},i.value))}));b.displayName="RadioGroup";b.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioOption"}],raw:"RadioOption[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'tile' | 'button'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'tile'"},{name:"literal",value:"'button'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};const Ke={title:"Inputs & Forms/RadioGroup",component:b,parameters:{},argTypes:{value:{control:"text",description:"Currently selected value",type:{name:"string",required:!1}},onChange:{description:"Callback when selection changes",type:{name:"function",required:!0},action:"selection changed"},options:{control:"object",description:"Array of radio options",type:{name:"array",value:{name:"object",value:{}},required:!0}},orientation:{control:"radio",options:["horizontal","vertical"],description:"Layout orientation of the radio group (only applies to default and button variants)",type:{name:"string",required:!1},table:{type:{summary:"horizontal | vertical"}}},variant:{control:"radio",options:["default","tile","button"],description:"Visual variant of radio buttons",type:{name:"string",required:!1},table:{type:{summary:"default | tile | button"}}}},tags:["autodocs"]},a=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],ye=[{value:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{value:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{value:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],r=({value:e="",...n})=>{const[y,x]=fe.useState(e);return o.jsxs("div",{className:"space-y-4",children:[o.jsx(b,{...n,value:y,onChange:s=>{var t;x(s),(t=n.onChange)==null||t.call(n,s)}}),o.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",y||"none"]})]})},l={args:{options:a,value:"",onChange:()=>{}},tags:["!autodocs"]},p={render:e=>o.jsx(r,{...e}),args:{options:a,value:"",onChange:()=>{}}},d={render:e=>o.jsx(r,{...e}),args:{options:a,value:"option2",onChange:()=>{}}},u={render:e=>o.jsx(r,{...e}),args:{options:a,value:"",onChange:()=>{},orientation:"horizontal"}},c={render:e=>o.jsx(r,{...e}),args:{options:a,value:"",onChange:()=>{},orientation:"vertical"}},m={render:e=>o.jsx(r,{...e}),args:{options:ye,value:"",onChange:()=>{},variant:"tile"}},g={render:e=>o.jsx(r,{...e}),args:{options:ye,value:"business",onChange:()=>{},variant:"tile"}},h={render:e=>o.jsx(r,{...e}),args:{options:a,value:"",onChange:()=>{},variant:"button",orientation:"horizontal"}},v={render:e=>o.jsx(r,{...e}),args:{options:a,value:"",onChange:()=>{},variant:"button",orientation:"vertical"}},f={render:e=>o.jsx(r,{...e}),args:{options:a,value:"option2",onChange:()=>{},variant:"button"}};var w,R,C,S,G;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {}
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(C=(R=l.parameters)==null?void 0:R.docs)==null?void 0:C.source},description:{story:`Interactive playground for the RadioGroup component.
Use the controls to experiment with different props and states.`,...(G=(S=l.parameters)==null?void 0:S.docs)==null?void 0:G.description}}};var j,O,z,D,T;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {}
  }
}`,...(z=(O=p.parameters)==null?void 0:O.docs)==null?void 0:z.source},description:{story:`The default state of the RadioGroup component.
Shows a basic vertical radio group with no initial selection.`,...(T=(D=p.parameters)==null?void 0:D.docs)==null?void 0:T.description}}};var q,B,V,N,W;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: 'option2',
    onChange: () => {}
  }
}`,...(V=(B=d.parameters)==null?void 0:B.docs)==null?void 0:V.source},description:{story:`RadioGroup with a pre-selected value.
Demonstrates how the group appears with an initial selection.`,...(W=(N=d.parameters)==null?void 0:N.docs)==null?void 0:W.description}}};var E,_,k,F,I;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    orientation: 'horizontal'
  }
}`,...(k=(_=u.parameters)==null?void 0:_.docs)==null?void 0:k.source},description:{story:`RadioGroup with horizontal layout.
Shows radio options arranged in a horizontal line.`,...(I=(F=u.parameters)==null?void 0:F.docs)==null?void 0:I.description}}};var P,A,H,L,U;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    orientation: 'vertical'
  }
}`,...(H=(A=c.parameters)==null?void 0:A.docs)==null?void 0:H.source},description:{story:`RadioGroup with vertical layout.
Shows radio options stacked vertically.`,...(U=(L=c.parameters)==null?void 0:L.docs)==null?void 0:U.description}}};var J,K,M,Q,X;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: tileOptions,
    value: '',
    onChange: () => {},
    variant: 'tile'
  }
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source},description:{story:`RadioGroup with tile variant.
Shows radio options as larger tiles with descriptions.`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,$,ee,oe;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: tileOptions,
    value: 'business',
    onChange: () => {},
    variant: 'tile'
  }
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:`Tile variant RadioGroup with a pre-selected value.
Demonstrates how tile radio options appear with an initial selection.`,...(oe=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:oe.description}}};var te,re,ae,ne,se;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    variant: 'button',
    orientation: 'horizontal'
  }
}`,...(ae=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ae.source},description:{story:`RadioGroup with button variant.
Shows radio options styled as buttons.`,...(se=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:se.description}}};var ie,le,pe,de,ue;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    variant: 'button',
    orientation: 'vertical'
  }
}`,...(pe=(le=v.parameters)==null?void 0:le.docs)==null?void 0:pe.source},description:{story:`Button variant RadioGroup with vertical layout.
Shows radio options styled as buttons arranged vertically.`,...(ue=(de=v.parameters)==null?void 0:de.docs)==null?void 0:ue.description}}};var ce,me,ge,he,ve;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: 'option2',
    onChange: () => {},
    variant: 'button'
  }
}`,...(ge=(me=f.parameters)==null?void 0:me.docs)==null?void 0:ge.source},description:{story:`Button variant RadioGroup with a pre-selected value.
Demonstrates how button radio options appear with an initial selection.`,...(ve=(he=f.parameters)==null?void 0:he.docs)==null?void 0:ve.description}}};const Me=["Playground","Default","WithSelection","Horizontal","Vertical","Tile","TileWithSelection","Button","ButtonVertical","ButtonWithSelection"];export{h as Button,v as ButtonVertical,f as ButtonWithSelection,p as Default,u as Horizontal,l as Playground,m as Tile,g as TileWithSelection,c as Vertical,d as WithSelection,Me as __namedExportsOrder,Ke as default};
