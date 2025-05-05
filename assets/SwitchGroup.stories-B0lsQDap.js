import{j as a}from"./jsx-runtime-BO8uF4Og.js";import{R as Z,r as J}from"./index-D4H_InIO.js";import{c as y}from"./utils-CytzSlOG.js";import{S as ee}from"./Switch-B7oif9ZK.js";import"./Label-DnzvTyk4.js";import"./styles-Dlcbwdhh.js";import"./index-CNI2vRWb.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-BekKX9Q6.js";import"./index-DB-GfMvg.js";import"./index-DXU_LAI1.js";import"./index-DDORxvzF.js";const p=Z.forwardRef(({options:e,value:r,onChange:s,className:g,columns:K=1},Q)=>{const X=J.useCallback((n,h)=>{h?(w=>s([...r,w]))(n):(w=>s(r.filter(Y=>Y!==w)))(n)},[s,r]);return a.jsx("div",{ref:Q,className:y("",g),children:a.jsx("div",{className:y("grid gap-3",`grid-cols-${K}`),children:e.map(n=>a.jsx(ee,{id:n.id,label:n.label,isChecked:r.includes(n.id),isDisabled:n.isDisabled,onCheckedChange:h=>X(n.id,h)},n.id))})})});p.displayName="SwitchGroup";p.__docgenInfo={description:"",methods:[],displayName:"SwitchGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SwitchOption"}],raw:"SwitchOption[]"},description:""},value:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},columns:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:"",defaultValue:{value:"1",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""}}};const t=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],we={title:"Components/SwitchGroup",component:p,parameters:{},argTypes:{value:{control:"object",description:"Array of selected switch IDs",type:{name:"array",value:{name:"string"},required:!1}},onChange:{description:"Callback when selection changes",type:{name:"function",required:!0}},options:{control:"object",description:"Array of switch options",type:{name:"array",value:{name:"object",value:{}},required:!0}},columns:{control:"radio",options:[1,2,3,4],description:"Number of columns in the grid",type:{name:"number",required:!1}}},tags:["autodocs"]},m=({value:e=[],...r})=>{const[s,g]=J.useState(e);return a.jsxs("div",{className:"space-y-4",children:[a.jsx(p,{...r,value:s,onChange:g}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",s.length>0?s.join(", "):"none"]})]})},o={args:{options:t,value:[],onChange:()=>{}},tags:["!autodocs"]},i={render:e=>a.jsx(m,{...e}),args:{options:t,columns:2,value:[],onChange:()=>{}}},c={render:e=>a.jsx(m,{...e}),args:{options:t,value:["notifications","emails"],onChange:()=>{},columns:2}},l={render:e=>a.jsx(m,{...e}),args:{options:t,columns:1,value:[],onChange:()=>{}}},d={render:e=>a.jsx(m,{...e}),args:{options:t,columns:3,value:[],onChange:()=>{}}},u={render:e=>a.jsx(m,{...e}),args:{options:[...t,{id:"backup",label:"Automatic backup"},{id:"location",label:"Location tracking (disabled)",isDisabled:!0},{id:"sync",label:"Cloud sync"},{id:"analytics",label:"Usage analytics (disabled)",isDisabled:!0},{id:"beta",label:"Beta features"}],columns:2,value:[],onChange:()=>{}}};var b,f,S,v,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {}
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source},description:{story:`Interactive playground for the SwitchGroup component.
Use the controls to experiment with different props and states.`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.description}}};var x,D,j,G,k;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <SwitchGroupDemo {...args} />,
  args: {
    options,
    columns: 2,
    value: [],
    onChange: () => {}
  }
}`,...(j=(D=i.parameters)==null?void 0:D.docs)==null?void 0:j.source},description:{story:`The default state of the SwitchGroup component.
Shows a group of switches arranged in a single column with no initial selections.`,...(k=(G=i.parameters)==null?void 0:G.docs)==null?void 0:k.description}}};var q,T,A,I,N;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <SwitchGroupDemo {...args} />,
  args: {
    options,
    value: ['notifications', 'emails'],
    onChange: () => {},
    columns: 2
  }
}`,...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.source},description:{story:`SwitchGroup with pre-selected values.
Demonstrates how the group appears with multiple switches toggled on.`,...(N=(I=c.parameters)==null?void 0:I.docs)==null?void 0:N.description}}};var R,O,E,W,_;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <SwitchGroupDemo {...args} />,
  args: {
    options,
    columns: 1,
    value: [],
    onChange: () => {}
  }
}`,...(E=(O=l.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:`SwitchGroup in a single column layout.
Shows switches stacked vertically in one column.`,...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.description}}};var M,U,B,L,P;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <SwitchGroupDemo {...args} />,
  args: {
    options,
    columns: 3,
    value: [],
    onChange: () => {}
  }
}`,...(B=(U=d.parameters)==null?void 0:U.docs)==null?void 0:B.source},description:{story:`SwitchGroup in a three-column layout.
Demonstrates how switches can be arranged in multiple columns.`,...(P=(L=d.parameters)==null?void 0:L.docs)==null?void 0:P.description}}};var V,$,z,F,H;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <SwitchGroupDemo {...args} />,
  args: {
    options: [...options, {
      id: 'backup',
      label: 'Automatic backup'
    }, {
      id: 'location',
      label: 'Location tracking (disabled)',
      isDisabled: true
    }, {
      id: 'sync',
      label: 'Cloud sync'
    }, {
      id: 'analytics',
      label: 'Usage analytics (disabled)',
      isDisabled: true
    }, {
      id: 'beta',
      label: 'Beta features'
    }],
    columns: 2,
    value: [],
    onChange: () => {}
  }
}`,...(z=($=u.parameters)==null?void 0:$.docs)==null?void 0:z.source},description:{story:`SwitchGroup with an extended list of options.
Shows how the component handles a larger set of switches, including disabled states.`,...(H=(F=u.parameters)==null?void 0:F.docs)==null?void 0:H.description}}};const ye=["Playground","Default","WithSelection","SingleColumn","ThreeColumns","WithManyOptions"];export{i as Default,o as Playground,l as SingleColumn,d as ThreeColumns,u as WithManyOptions,c as WithSelection,ye as __namedExportsOrder,we as default};
