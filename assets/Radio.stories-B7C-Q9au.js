import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{R as ee,a as re}from"./Radio-DXbqPSwZ.js";import{r as u}from"./index-D4H_InIO.js";import"./constants-DQNtG7xk.js";import"./styles-B6VxF8L0.js";import"./index-BwobEAja.js";import"./utils-CytzSlOG.js";import"./Label-Yaiz0i84.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./index-DwviEg3j.js";import"./index-DjHbRFSh.js";import"./index-DsCZslo7.js";import"./index-DAnQV6hb.js";import"./index-YtIeenAn.js";import"./index-C6Lf2F3X.js";import"./index-DXU_LAI1.js";import"./index-CIFsUU6l.js";import"./createLucideIcon-B89bYmoG.js";const we={title:"Components/Radio",component:ee,parameters:{},argTypes:{isChecked:{control:"boolean"},isDisabled:{control:"boolean"},variant:{control:"radio",options:["default","tile"]}},decorators:[e=>o.jsx(re,{defaultValue:"option-1",children:o.jsx(e,{})})],tags:["autodocs"]},r=({isChecked:e=!1,...oe})=>{const[p,m]=u.useState(!!e);return u.useEffect(()=>{m(!!e)},[e]),o.jsxs("div",{className:"space-y-4",children:[o.jsx(ee,{...oe,isChecked:p,onClick:()=>m(!p)}),o.jsxs("p",{className:"text-sm text-muted-foreground",children:["Radio ",p?"is selected":"is not selected"]})]})},a={args:{label:"Radio option",id:"radio-playground",value:"option-playground"},tags:["!autodocs"]},i={render:e=>o.jsx(r,{...e}),args:{label:"Radio option",id:"radio-1",value:"option-1"}},t={render:e=>o.jsx(r,{...e}),args:{label:"Tile Radio",description:"This is a description for the tile radio option",id:"radio-tile",value:"option-tile",variant:"tile"}},s={render:e=>o.jsx(r,{...e}),args:{label:"Selected Tile Radio",description:"This tile radio option is selected",id:"radio-tile-selected",value:"option-tile-selected",variant:"tile",isChecked:!0}},d={render:e=>o.jsx(r,{...e}),args:{label:"Disabled Tile Radio",description:"This tile radio option is disabled",id:"radio-tile-disabled",value:"option-tile-disabled",variant:"tile",isDisabled:!0}},n={render:e=>o.jsx(r,{...e}),args:{label:"Selected radio",id:"radio-2",value:"option-2",isChecked:!0}},l={render:e=>o.jsx(r,{...e}),args:{label:"Disabled radio",id:"radio-3",value:"option-3",isDisabled:!0}},c={render:e=>o.jsx(r,{...e}),args:{label:"Disabled selected radio",id:"radio-4",value:"option-4",isChecked:!0,isDisabled:!0}};var b,g,h,D,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Radio option',
    id: 'radio-playground',
    value: 'option-playground'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:`Interactive playground for the Radio component.
Use the controls to experiment with different props and states.`,...(v=(D=a.parameters)==null?void 0:D.docs)==null?void 0:v.description}}};var R,S,f,x,T;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Radio option',
    id: 'radio-1',
    value: 'option-1'
  }
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source},description:{story:`The default state of the Radio component.
Shows a basic radio button with a label.`,...(T=(x=i.parameters)==null?void 0:x.docs)==null?void 0:T.description}}};var y,w,j,C,k;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Tile Radio',
    description: 'This is a description for the tile radio option',
    id: 'radio-tile',
    value: 'option-tile',
    variant: 'tile'
  }
}`,...(j=(w=t.parameters)==null?void 0:w.docs)==null?void 0:j.source},description:{story:`Radio with tile styling.
Shows a larger radio option with a title and description.`,...(k=(C=t.parameters)==null?void 0:C.docs)==null?void 0:k.description}}};var E,I,N,P,_;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Selected Tile Radio',
    description: 'This tile radio option is selected',
    id: 'radio-tile-selected',
    value: 'option-tile-selected',
    variant: 'tile',
    isChecked: true
  }
}`,...(N=(I=s.parameters)==null?void 0:I.docs)==null?void 0:N.source},description:{story:`Selected tile radio.
Demonstrates how a tile radio option appears when selected.`,...(_=(P=s.parameters)==null?void 0:P.docs)==null?void 0:_.description}}};var O,U,q,z,A;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Disabled Tile Radio',
    description: 'This tile radio option is disabled',
    id: 'radio-tile-disabled',
    value: 'option-tile-disabled',
    variant: 'tile',
    isDisabled: true
  }
}`,...(q=(U=d.parameters)==null?void 0:U.docs)==null?void 0:q.source},description:{story:`Disabled tile radio.
Shows how a tile radio option appears when it's not interactive.`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.description}}};var B,F,G,H,J;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Selected radio',
    id: 'radio-2',
    value: 'option-2',
    isChecked: true
  }
}`,...(G=(F=n.parameters)==null?void 0:F.docs)==null?void 0:G.source},description:{story:`Selected radio button.
Shows how a standard radio button appears when selected.`,...(J=(H=n.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var K,L,M,Q,W;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Disabled radio',
    id: 'radio-3',
    value: 'option-3',
    isDisabled: true
  }
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source},description:{story:`Disabled radio button.
Demonstrates how a standard radio button appears when disabled.`,...(W=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:W.description}}};var X,Y,Z,$,V;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Disabled selected radio',
    id: 'radio-4',
    value: 'option-4',
    isChecked: true,
    isDisabled: true
  }
}`,...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:`Disabled and selected radio button.
Shows a radio button that is both selected and not interactive.`,...(V=($=c.parameters)==null?void 0:$.docs)==null?void 0:V.description}}};const je=["Playground","Default","Tile","TileSelected","TileDisabled","Selected","Disabled","DisabledSelected"];export{i as Default,l as Disabled,c as DisabledSelected,a as Playground,n as Selected,t as Tile,d as TileDisabled,s as TileSelected,je as __namedExportsOrder,we as default};
