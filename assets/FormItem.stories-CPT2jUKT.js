import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{B as Y}from"./Button-BwlrdoZf.js";import{a as O,T as Q}from"./Tooltip-DVYgiTk4.js";import{F as d}from"./FormItem-D06MO0pk.js";import{I as t}from"./Input-cPRzvIH7.js";import{c as X}from"./createLucideIcon-CRH11QI6.js";import"./index-D4H_InIO.js";import"./useAriaDisabled-DHTVgRPt.js";import"./utils-CU3My8Oi.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./z-index-CmEG1ohp.js";import"./index-DB-GfMvg.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-Ak5Mws-w.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./Label-7TaJ5dQy.js";import"./index-C1hSi-0V.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],G=X("circle-question-mark",Z),J=()=>e.jsx(O,{children:e.jsx(d,{elementId:"api-key-element-id",hintText:"Enter your unique API key",isRequired:!0,label:"API Key",labelSlot:e.jsx(Q,{content:"Your API key can be found in your account settings",children:e.jsx(Y,{className:"h-auto p-1",size:"sm",variant:"ghost",children:e.jsx(G,{className:"h-4 w-4 text-muted-foreground"})})}),children:e.jsx(t,{placeholder:"Enter your API Key",type:"password"})})});J.__docgenInfo={description:"",methods:[],displayName:"FormItemRequiredWithLabelSlot"};const $=`import { Button } from '@/components/Button';
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
`,V=()=>e.jsx(O,{children:e.jsx(d,{elementId:"password-label-slot-element-id",hintText:"Must be at least 8 characters long",label:"Password",labelSlot:e.jsx(Q,{content:"Password must be at least 8 characters with uppercase, lowercase, and numbers",children:e.jsx(Y,{className:"h-auto p-1",size:"sm",variant:"ghost",children:e.jsx(G,{className:"h-4 w-4 text-muted-foreground"})})}),children:e.jsx(t,{placeholder:"Enter your password",type:"password"})})});V.__docgenInfo={description:"",methods:[],displayName:"FormItemWithLabelSlot"};const ee=`import { HelpCircle } from 'lucide-react';
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
`,Fe={title:"Inputs & Forms/FormItem",component:d,parameters:{},tags:["autodocs"],argTypes:{label:{control:"text",description:"The label for the form item. If a string is provided, it will be wrapped in a `<Label>` component. If a ReactNode is provided, it will be rendered as-is.",table:{type:{summary:"ReactNode"}}},labelSlot:{control:"text",description:"An optional slot to display next to the label, such as an info icon with a tooltip or popover.",table:{type:{summary:"ReactNode"}}},elementId:{control:"text",description:"The ID used to generate the label, hint, and error IDs for accessibility. If not provided, the ID of the top-level child element will be used if available. This ID must be unique on the page and must be used as the `id` attribute of the child form element so that it can be assocated with the label.",table:{type:{summary:"string"}}},hintText:{control:"text",description:"Hint text to display below the label and above the form element.",table:{type:{summary:"string"}}},errorText:{control:"text",description:"Error text to display below the form element. If provided, the form item will be styled to indicate an error.",table:{type:{summary:"string"}}},isRequired:{control:"boolean",description:"Whether the form item is required. If true, an asterisk (*) will be displayed next to the label.",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional classes to apply to the form item container."}}},r={args:{label:"Email",elementId:"default-element-id",children:e.jsx(t,{placeholder:"Enter your email",type:"email"})}},o={args:{label:"Password",elementId:"password-element-id",hintText:"Must be at least 8 characters long",children:e.jsx(t,{placeholder:"Enter your password",type:"password"})}},a={args:{label:"Username",elementId:"username-element-id",errorText:"Username is already taken",children:e.jsx(t,{placeholder:"Choose a username"})}},s={args:{label:"Email",elementId:"email-element-id",hintText:"We will never share your email",errorText:"Please enter a valid email address",children:e.jsx(t,{placeholder:"Enter your email",type:"email"})}},i={args:{label:"Email",elementId:"email-required-element-id",hintText:"This field is required",isRequired:!0,children:e.jsx(t,{placeholder:"Enter your email",type:"email"})}},l={args:{children:e.jsx(t,{})},render:()=>e.jsx(V,{}),parameters:{docs:{source:{code:ee}}}},n={args:{children:e.jsx(t,{})},render:()=>e.jsx(J,{}),parameters:{docs:{source:{code:$}}}};var m,c,p,u,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    elementId: 'default-element-id',
    children: <Input placeholder="Enter your email" type="email" />
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:`The default state of the FormItem component.
Shows a basic form field with a label and input.`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var b,y,I,x,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    elementId: 'password-element-id',
    hintText: 'Must be at least 8 characters long',
    children: <Input placeholder="Enter your password" type="password" />
  }
}`,...(I=(y=o.parameters)==null?void 0:y.docs)==null?void 0:I.source},description:{story:`FormItem with hint text.
Demonstrates how to provide additional context or instructions for a form field.`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.description}}};var f,g,T,S,q;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    elementId: 'username-element-id',
    errorText: 'Username is already taken',
    children: <Input placeholder="Choose a username" />
  }
}`,...(T=(g=a.parameters)==null?void 0:g.docs)==null?void 0:T.source},description:{story:`FormItem with error state.
Shows how validation errors are displayed to the user.`,...(q=(S=a.parameters)==null?void 0:S.docs)==null?void 0:q.description}}};var E,F,v,W,j;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    elementId: 'email-element-id',
    hintText: 'We will never share your email',
    errorText: 'Please enter a valid email address',
    children: <Input placeholder="Enter your email" type="email" />
  }
}`,...(v=(F=s.parameters)==null?void 0:F.docs)==null?void 0:v.source},description:{story:`FormItem with both hint and error text.
Demonstrates how to show both helper text and error messages.`,...(j=(W=s.parameters)==null?void 0:W.docs)==null?void 0:j.description}}};var P,R,k,L,N;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    elementId: 'email-required-element-id',
    hintText: 'This field is required',
    isRequired: true,
    children: <Input placeholder="Enter your email" type="email" />
  }
}`,...(k=(R=i.parameters)==null?void 0:R.docs)==null?void 0:k.source},description:{story:`FormItem with required field indicator.
Shows how to mark a field as required with a red asterisk.`,...(N=(L=i.parameters)==null?void 0:L.docs)==null?void 0:N.description}}};var A,C,B,D,H;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(B=(C=l.parameters)==null?void 0:C.docs)==null?void 0:B.source},description:{story:`FormItem with a label slot.
Demonstrates how to add additional components to the right of the label.`,...(H=(D=l.parameters)==null?void 0:D.docs)==null?void 0:H.description}}};var _,M,z,K,U;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=(M=n.parameters)==null?void 0:M.docs)==null?void 0:z.source},description:{story:`FormItem with both required indicator and label slot.
Shows how the required asterisk and label slot work together.`,...(U=(K=n.parameters)==null?void 0:K.docs)==null?void 0:U.description}}};const ve=["Default","WithHintText","WithError","WithHintAndError","Required","WithLabelSlot","RequiredWithLabelSlot"];export{r as Default,i as Required,n as RequiredWithLabelSlot,a as WithError,s as WithHintAndError,o as WithHintText,l as WithLabelSlot,ve as __namedExportsOrder,Fe as default};
