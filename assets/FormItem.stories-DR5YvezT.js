import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as s}from"./index-B0WjJBI_.js";import{B as ie}from"./Button-BinwIYAK.js";import{a as ne,T as le}from"./Tooltip-C1OgxcWL.js";import{F as h}from"./FormItem-5sMtFHLA.js";import{I as t}from"./Input-ij4_0GDl.js";import{c as ge}from"./createLucideIcon-BeEkWZrd.js";import{C as me}from"./Combobox-C4NoQPxh.js";import{D as fe}from"./DateRangePicker-Bnr5gJHy.js";import{D as we}from"./DatePicker-CEgTLq7o.js";import{M as Se}from"./MultiSelect-BzYdTI2W.js";import{A as ve}from"./Autocomplete-BJHzi9Xs.js";import{S as Te}from"./Select-xBgu7X_6.js";import{T as je}from"./Textarea-C6JjZWLa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useAriaDisabled-BVkOu7OW.js";import"./utils-CU3My8Oi.js";import"./index-BOrrHd12.js";import"./index-EiwPuDyL.js";import"./constants-D9UEAID0.js";import"./styles-CafxXXJc.js";import"./index-NE6MC3wq.js";import"./z-index-CmEG1ohp.js";import"./index-B5oA2Zbg.js";import"./index-KklXjS-Z.js";import"./index-CwPCC0ZT.js";import"./index-OiR64VEf.js";import"./index-BllD4pgw.js";import"./index-Cdcq5Wwr.js";import"./floating-ui.react-dom-Dsj8ROC4.js";import"./index-DBA0bpW4.js";import"./Label-BalUMPW8.js";import"./index-CoRj-x2w.js";import"./CommandItem-D7pXXPGo.js";import"./index-CoMQ7c9D.js";import"./index-DKzZmXCh.js";import"./index-BHtEszHx.js";import"./CommandList-C6ABvPPR.js";import"./Popover-D7LnbHHd.js";import"./index-DKWC2_YT.js";import"./check-C42IfL-F.js";import"./Calendar-BrGSkZyr.js";import"./chevron-right-Dw3Smd9x.js";import"./x-DEnjg7Le.js";import"./index-9JfGjY-K.js";import"./index-Chx8Kgs6.js";import"./index-B8vvyUb-.js";import"./chevron-down-CLkoBCE4.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ce=ge("circle-question-mark",Ee),de=()=>e.jsx(ne,{children:e.jsx(h,{elementId:"api-key-element-id",hintText:"Enter your unique API key",isRequired:!0,label:"API Key",labelSlot:e.jsx(le,{content:"Your API key can be found in your account settings",children:e.jsx(ie,{className:"h-auto p-1",size:"sm",variant:"ghost",children:e.jsx(ce,{className:"h-4 w-4 text-muted-foreground"})})}),children:e.jsx(t,{placeholder:"Enter your API Key",type:"password"})})});de.__docgenInfo={description:"",methods:[],displayName:"FormItemRequiredWithLabelSlot"};const Pe=`import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Tooltip, TooltipProvider } from '@/components/Tooltip';
import { HelpCircle } from 'lucide-react';
import { FormItem } from '../src/FormItem';

export const FormItemRequiredWithLabelSlot = () => (
  <TooltipProvider>
    <FormItem
      elementId="api-key-element-id"
      hintText="Enter your unique API key"
      isRequired={true}
      label="API Key"
      labelSlot={
        <Tooltip content="Your API key can be found in your account settings">
          <Button className="h-auto p-1" size="sm" variant="ghost">
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </Button>
        </Tooltip>
      }
    >
      <Input placeholder="Enter your API Key" type="password" />
    </FormItem>
  </TooltipProvider>
);
`,pe=()=>e.jsx(ne,{children:e.jsx(h,{elementId:"password-label-slot-element-id",hintText:"Must be at least 8 characters long",label:"Password",labelSlot:e.jsx(le,{content:"Password must be at least 8 characters with uppercase, lowercase, and numbers",children:e.jsx(ie,{className:"h-auto p-1",size:"sm",variant:"ghost",children:e.jsx(ce,{className:"h-4 w-4 text-muted-foreground"})})}),children:e.jsx(t,{placeholder:"Enter your password",type:"password"})})});pe.__docgenInfo={description:"",methods:[],displayName:"FormItemWithLabelSlot"};const Ce=`import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Tooltip, TooltipProvider } from '@/components/Tooltip';
import { FormItem } from '../src/FormItem';

export const FormItemWithLabelSlot = () => (
  <TooltipProvider>
    <FormItem
      elementId="password-label-slot-element-id"
      hintText="Must be at least 8 characters long"
      label="Password"
      labelSlot={
        <Tooltip content="Password must be at least 8 characters with uppercase, lowercase, and numbers">
          <Button className="h-auto p-1" size="sm" variant="ghost">
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </Button>
        </Tooltip>
      }
    >
      <Input placeholder="Enter your password" type="password" />
    </FormItem>
  </TooltipProvider>
);
`,jt={title:"Inputs & Forms/FormItem",component:h,parameters:{},tags:["autodocs"],argTypes:{label:{control:"text",description:"The label for the form item. If a string is provided, it will be wrapped in a `<Label>` component. If a ReactNode is provided, it will be rendered as-is.",table:{type:{summary:"ReactNode"}}},labelSlot:{control:"text",description:"An optional slot to display next to the label, such as an info icon with a tooltip or popover.",table:{type:{summary:"ReactNode"}}},elementId:{control:"text",description:"The ID used to generate the label, hint, and error IDs for accessibility. If not provided, the ID of the top-level child element will be used if available. This ID must be unique on the page and must be used as the `id` attribute of the child form element so that it can be assocated with the label.",table:{type:{summary:"string"}}},hintText:{control:"text",description:"Hint text to display below the label and above the form element. When provided, FormItem automatically injects `aria-describedby` pointing to the hint element into the child form control.",table:{type:{summary:"string"}}},errorText:{control:"text",description:'Error text to display below the form element. When provided, FormItem automatically injects `aria-invalid="true"` and `aria-describedby` pointing to the error element into the child form control, so screen readers announce the error without any additional wiring.',table:{type:{summary:"string"}}},isRequired:{control:"boolean",description:"Whether the form item is required. If true, an asterisk (*) will be displayed next to the label.",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional classes to apply to the form item container."}}},i={args:{label:"Email",elementId:"default-element-id",children:e.jsx(t,{placeholder:"Enter your email",type:"email"})}},n={args:{label:"Password",elementId:"password-element-id",hintText:"Must be at least 8 characters long",children:e.jsx(t,{placeholder:"Enter your password",type:"password"})}},l={args:{label:"Username",elementId:"username-element-id",errorText:"Username is already taken",children:e.jsx(t,{placeholder:"Choose a username"})}},m={args:{label:"Email",elementId:"email-element-id",hintText:"We will never share your email",errorText:"Please enter a valid email address",children:e.jsx(t,{placeholder:"Enter your email",type:"email"})}},c={args:{label:"Email",elementId:"email-required-element-id",hintText:"This field is required",isRequired:!0,children:e.jsx(t,{placeholder:"Enter your email",type:"email"})}},d={args:{children:e.jsx(t,{})},render:()=>e.jsx(pe,{}),parameters:{docs:{source:{code:Ce}}}},p={args:{children:e.jsx(t,{})},render:()=>e.jsx(de,{}),parameters:{docs:{source:{code:Pe}}}},y=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"svelte",label:"Svelte"}],g={input:"Input",textarea:"Textarea",select:"Select",autocomplete:"Autocomplete",combobox:"Combobox",multiSelect:"MultiSelect",datePicker:"DatePicker",dateRangePicker:"DateRangePicker"},Fe=({control:a})=>{const[b,x]=s.useState(""),[r,I]=s.useState(""),[ue,he]=s.useState([]),[be,xe]=s.useState(),[ye,Ie]=s.useState({});switch(a){case"input":return e.jsx(t,{placeholder:"Enter a value",value:b,onChange:o=>x(o.target.value)});case"textarea":return e.jsx(je,{placeholder:"Enter a value",value:b,onChange:o=>x(o.target.value)});case"select":return e.jsx(Te,{options:y,value:r,onChange:I});case"autocomplete":return e.jsx(ve,{getOptionLabel:o=>o.label,getOptionValue:o=>o.value,options:y,value:r,onChange:I});case"combobox":return e.jsx(me,{options:y,value:r,onChange:I});case"multiSelect":return e.jsx(Se,{options:y,value:ue,onChange:he});case"datePicker":return e.jsx(we,{value:be,onChange:xe});case"dateRangePicker":return e.jsx(fe,{value:ye,onChange:Ie})}},ke=()=>{const[a,b]=s.useState("autocomplete"),x=Object.keys(g).map(r=>({value:r,label:g[r]}));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",maxWidth:360},children:[e.jsx(h,{elementId:"error-state-picker",hintText:"Choose a control to preview its error state",label:"Component",children:e.jsx(me,{options:x,placeholder:"Select a component...",value:a,onChange:r=>r&&b(r)})}),e.jsx(h,{elementId:`error-state-${a}`,errorText:"This field is required",label:g[a],children:e.jsx(Fe,{control:a})})]})},u={name:"Error State (by control)",args:{children:e.jsx(t,{})},parameters:{controls:{disable:!0}},render:()=>e.jsx(ke,{})};var f,w,S,v,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    elementId: 'default-element-id',
    children: <Input placeholder="Enter your email" type="email" />
  }
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source},description:{story:`The default state of the FormItem component.
Shows a basic form field with a label and input.`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.description}}};var j,E,P,C,F;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    elementId: 'password-element-id',
    hintText: 'Must be at least 8 characters long',
    children: <Input placeholder="Enter your password" type="password" />
  }
}`,...(P=(E=n.parameters)==null?void 0:E.docs)==null?void 0:P.source},description:{story:`FormItem with hint text.
Demonstrates how to provide additional context or instructions for a form field.`,...(F=(C=n.parameters)==null?void 0:C.docs)==null?void 0:F.description}}};var k,q,R,W,L;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    elementId: 'username-element-id',
    errorText: 'Username is already taken',
    children: <Input placeholder="Choose a username" />
  }
}`,...(R=(q=l.parameters)==null?void 0:q.docs)==null?void 0:R.source},description:{story:`FormItem with error state.
Shows how validation errors are displayed to the user.`,...(L=(W=l.parameters)==null?void 0:W.docs)==null?void 0:L.description}}};var D,A,N,B,M;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    elementId: 'email-element-id',
    hintText: 'We will never share your email',
    errorText: 'Please enter a valid email address',
    children: <Input placeholder="Enter your email" type="email" />
  }
}`,...(N=(A=m.parameters)==null?void 0:A.docs)==null?void 0:N.source},description:{story:`FormItem with both hint and error text.
Demonstrates how to show both helper text and error messages.`,...(M=(B=m.parameters)==null?void 0:B.docs)==null?void 0:M.description}}};var _,H,O,z,K;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    elementId: 'email-required-element-id',
    hintText: 'This field is required',
    isRequired: true,
    children: <Input placeholder="Enter your email" type="email" />
  }
}`,...(O=(H=c.parameters)==null?void 0:H.docs)==null?void 0:O.source},description:{story:`FormItem with required field indicator.
Shows how to mark a field as required with a red asterisk.`,...(K=(z=c.parameters)==null?void 0:z.docs)==null?void 0:K.description}}};var U,V,Y,Q,$;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: <Input />
  },
  render: () => <FormItemWithLabelSlot />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithLabelSlot
      }
    }
  }
}`,...(Y=(V=d.parameters)==null?void 0:V.docs)==null?void 0:Y.source},description:{story:`FormItem with a label slot.
Demonstrates how to add additional components to the right of the label.`,...($=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:$.description}}};var G,J,X,Z,ee;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: <Input />
  },
  render: () => <FormItemRequiredWithLabelSlot />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeRequiredWithLabelSlot
      }
    }
  }
}`,...(X=(J=p.parameters)==null?void 0:J.docs)==null?void 0:X.source},description:{story:`FormItem with both required indicator and label slot.
Shows how the required asterisk and label slot work together.`,...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,re,oe,ae,se;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Error State (by control)',
  args: {
    children: <Input />
  },
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ErrorStatePlayground />
}`,...(oe=(re=u.parameters)==null?void 0:re.docs)==null?void 0:oe.source},description:{story:`Pick a control from the in-canvas **Component** combobox to see how it looks
inside a FormItem with an error. Every control here should show a
destructive-colored border while the error is present.`,...(se=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:se.description}}};const Et=["Default","WithHintText","WithError","WithHintAndError","Required","WithLabelSlot","RequiredWithLabelSlot","ErrorStateByControl"];export{i as Default,u as ErrorStateByControl,c as Required,p as RequiredWithLabelSlot,l as WithError,m as WithHintAndError,n as WithHintText,d as WithLabelSlot,Et as __namedExportsOrder,jt as default};
