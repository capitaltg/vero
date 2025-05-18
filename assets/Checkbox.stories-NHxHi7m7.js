import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{r as m}from"./index-D4H_InIO.js";import{C as U}from"./Checkbox-ZnoX0xV0.js";import"./Label-CSZ77ikx.js";import"./styles-DfGEMFtJ.js";import"./utils-CytzSlOG.js";import"./index-CNI2vRWb.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-BekKX9Q6.js";import"./index-DwviEg3j.js";import"./index-DXU_LAI1.js";import"./index-C6Lf2F3X.js";import"./index-CbP7PoiL.js";import"./check-CLInojLm.js";import"./createLucideIcon-B89bYmoG.js";const ee={title:"Components/Checkbox",component:U,parameters:{},argTypes:{isChecked:{control:"boolean"},isDisabled:{control:"boolean"}},tags:["autodocs"]},d=({isChecked:e=!1,...q})=>{const[n,i]=m.useState(e);return m.useEffect(()=>{i(!!e)},[e]),s.jsxs("div",{className:"space-y-4",children:[s.jsx(U,{...q,isChecked:n,onCheckedChange:()=>i(!n)}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",n?"is checked":"is unchecked"]})]})},r={args:{label:"Accept terms and conditions",id:"terms"},tags:["!autodocs"]},o={render:e=>s.jsx(d,{...e}),args:{label:"Accept terms and conditions",id:"terms2"}},t={render:e=>s.jsx(d,{...e}),args:{label:"Checked checkbox",id:"checked",isChecked:!0}},a={render:e=>s.jsx(d,{...e}),args:{label:"Disabled checkbox",id:"disabled",isDisabled:!0}},c={render:e=>s.jsx(d,{...e}),args:{label:"Disabled checked checkbox",id:"disabled-checked",isChecked:!0,isDisabled:!0}};var p,h,l,b,k;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    id: 'terms'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(l=(h=r.parameters)==null?void 0:h.docs)==null?void 0:l.source},description:{story:`Interactive playground for the Checkbox component.
Use the controls to experiment with different props and states.`,...(k=(b=r.parameters)==null?void 0:b.docs)==null?void 0:k.description}}};var u,x,g,C,D;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <CheckboxDemo {...args} />,
  args: {
    label: 'Accept terms and conditions',
    id: 'terms2'
  }
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source},description:{story:`The default state of the Checkbox component.
Shows a basic checkbox with a label and interactive state.`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.description}}};var f,y,j,S,A;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <CheckboxDemo {...args} />,
  args: {
    label: 'Checked checkbox',
    id: 'checked',
    isChecked: true
  }
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source},description:{story:`A checkbox in its checked state.
Demonstrates the appearance of a selected checkbox.`,...(A=(S=t.parameters)==null?void 0:S.docs)==null?void 0:A.description}}};var v,w,E,I,N;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <CheckboxDemo {...args} />,
  args: {
    label: 'Disabled checkbox',
    id: 'disabled',
    isDisabled: true
  }
}`,...(E=(w=a.parameters)==null?void 0:w.docs)==null?void 0:E.source},description:{story:`A disabled checkbox.
Shows how the checkbox appears when it's not interactive.`,...(N=(I=a.parameters)==null?void 0:I.docs)==null?void 0:N.description}}};var P,R,T,_,O;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <CheckboxDemo {...args} />,
  args: {
    label: 'Disabled checked checkbox',
    id: 'disabled-checked',
    isChecked: true,
    isDisabled: true
  }
}`,...(T=(R=c.parameters)==null?void 0:R.docs)==null?void 0:T.source},description:{story:`A disabled checkbox in its checked state.
Demonstrates a non-interactive checkbox that's already selected.`,...(O=(_=c.parameters)==null?void 0:_.docs)==null?void 0:O.description}}};const se=["Playground","Default","Checked","Disabled","DisabledChecked"];export{t as Checked,o as Default,a as Disabled,c as DisabledChecked,r as Playground,se as __namedExportsOrder,ee as default};
