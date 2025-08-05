import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{r as m}from"./index-D4H_InIO.js";import{S as B}from"./Switch-ByG1og7j.js";import"./styles-B6VxF8L0.js";import"./utils-CytzSlOG.js";import"./index-DwviEg3j.js";import"./index-D8GmRN1t.js";import"./index-DXU_LAI1.js";import"./index-C6Lf2F3X.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./Label-Yaiz0i84.js";const te={title:"Components/Switch",component:B,parameters:{},argTypes:{isChecked:{control:"boolean"},isDisabled:{control:"boolean"},onCheckedChange:{action:"checked changed"}},tags:["autodocs"]},c=({isChecked:e=!1,...F})=>{const[d,l]=m.useState(e);return m.useEffect(()=>{l(!!e)},[e]),s.jsxs("div",{className:"space-y-4",children:[s.jsx(B,{...F,isChecked:d,onCheckedChange:()=>l(!d)}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Switch ",d?"is on":"is off"]})]})},r={args:{label:"Airplane Mode",id:"airplane-mode"},tags:["!autodocs"]},a={render:e=>s.jsx(c,{...e}),args:{label:"Airplane Mode",id:"airplane-mode"}},t={render:e=>s.jsx(c,{...e}),args:{label:"Notifications",id:"notifications",isChecked:!0}},o={render:e=>s.jsx(c,{...e}),args:{label:"Disabled switch",id:"disabled",isDisabled:!0}},i={render:e=>s.jsx(c,{...e}),args:{label:"Disabled checked switch",id:"disabled-checked",isChecked:!0,isDisabled:!0}},n={render:e=>s.jsx(c,{...e}),args:{label:s.jsxs("div",{className:"flex flex-col",children:[s.jsx("span",{className:"font-bold",children:"Dark Mode"}),s.jsx("span",{className:"text-sm text-muted-foreground",children:"Enable dark mode theme"})]}),id:"dark-mode"}};var p,h,u,g,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Airplane Mode',
    id: 'airplane-mode'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source},description:{story:`Interactive playground for the Switch component.
Use the controls to experiment with different props and states.`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.description}}};var w,f,k,x,D;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <SwitchDemo {...args} />,
  args: {
    label: 'Airplane Mode',
    id: 'airplane-mode'
  }
}`,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source},description:{story:`The default state of the Switch component.
Shows a basic toggle switch with a label.`,...(D=(x=a.parameters)==null?void 0:x.docs)==null?void 0:D.description}}};var S,C,j,y,N;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <SwitchDemo {...args} />,
  args: {
    label: 'Notifications',
    id: 'notifications',
    isChecked: true
  }
}`,...(j=(C=t.parameters)==null?void 0:C.docs)==null?void 0:j.source},description:{story:`A switch in its checked state.
Demonstrates how the switch appears when toggled on.`,...(N=(y=t.parameters)==null?void 0:y.docs)==null?void 0:N.description}}};var v,A,E,M,I;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <SwitchDemo {...args} />,
  args: {
    label: 'Disabled switch',
    id: 'disabled',
    isDisabled: true
  }
}`,...(E=(A=o.parameters)==null?void 0:A.docs)==null?void 0:E.source},description:{story:`A disabled switch.
Shows how the switch appears when it's not interactive.`,...(I=(M=o.parameters)==null?void 0:M.docs)==null?void 0:I.description}}};var L,P,R,T,W;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <SwitchDemo {...args} />,
  args: {
    label: 'Disabled checked switch',
    id: 'disabled-checked',
    isChecked: true,
    isDisabled: true
  }
}`,...(R=(P=i.parameters)==null?void 0:P.docs)==null?void 0:R.source},description:{story:`A disabled switch in its checked state.
Demonstrates a non-interactive switch that's toggled on.`,...(W=(T=i.parameters)==null?void 0:T.docs)==null?void 0:W.description}}};var _,O,U,q,z;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <SwitchDemo {...args} />,
  args: {
    label: <div className="flex flex-col">
        <span className="font-bold">Dark Mode</span>
        <span className="text-sm text-muted-foreground">Enable dark mode theme</span>
      </div>,
    id: 'dark-mode'
  }
}`,...(U=(O=n.parameters)==null?void 0:O.docs)==null?void 0:U.source},description:{story:`A switch with custom label content.
Shows how to use rich content in the switch label.`,...(z=(q=n.parameters)==null?void 0:q.docs)==null?void 0:z.description}}};const oe=["Playground","Default","Checked","Disabled","DisabledChecked","WithCustomLabel"];export{t as Checked,a as Default,o as Disabled,i as DisabledChecked,r as Playground,n as WithCustomLabel,oe as __namedExportsOrder,te as default};
