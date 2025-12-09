import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{B as Y}from"./Button-BwlrdoZf.js";import{T as O,a as Q}from"./Tooltip-DxcvpkUa.js";import{F as m}from"./FormItem-BThRJZS-.js";import{I as r}from"./Input-BCcVyiao.js";import{c as X}from"./createLucideIcon-CRH11QI6.js";import"./index-D4H_InIO.js";import"./useAriaDisabled-DHTVgRPt.js";import"./utils-CU3My8Oi.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./z-index-CmEG1ohp.js";import"./index-DB-GfMvg.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-Ak5Mws-w.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./Label-7TaJ5dQy.js";import"./index-C1hSi-0V.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],G=X("circle-question-mark",Z),J=()=>e.jsx(O,{children:e.jsx(m,{elementId:"api-key-element-id",hintText:"Enter your unique API key",isRequired:!0,label:"API Key",labelSlot:e.jsx(Q,{content:"Your API key can be found in your account settings",children:e.jsx(Y,{className:"h-auto p-1",size:"sm",variant:"ghost",children:e.jsx(G,{className:"h-4 w-4 text-muted-foreground"})})}),children:e.jsx(r,{placeholder:"Enter your API Key",type:"password"})})});J.__docgenInfo={description:"",methods:[],displayName:"FormItemRequiredWithLabelSlot"};const $=`import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Tooltip, TooltipProvider } from '@/components/Tooltip';
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
`,V=()=>e.jsx(O,{children:e.jsx(m,{elementId:"password-label-slot-element-id",hintText:"Must be at least 8 characters long",label:"Password",labelSlot:e.jsx(Q,{content:"Password must be at least 8 characters with uppercase, lowercase, and numbers",children:e.jsx(Y,{className:"h-auto p-1",size:"sm",variant:"ghost",children:e.jsx(G,{className:"h-4 w-4 text-muted-foreground"})})}),children:e.jsx(r,{placeholder:"Enter your password",type:"password"})})});V.__docgenInfo={description:"",methods:[],displayName:"FormItemWithLabelSlot"};const ee=`import { HelpCircle } from 'lucide-react';
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
`,qe={title:"Inputs & Forms/FormItem",component:m,parameters:{},tags:["autodocs"]},t={args:{label:"Email",elementId:"default-element-id",children:e.jsx(r,{placeholder:"Enter your email",type:"email"})}},o={args:{label:"Password",elementId:"password-element-id",hintText:"Must be at least 8 characters long",children:e.jsx(r,{placeholder:"Enter your password",type:"password"})}},a={args:{label:"Username",elementId:"username-element-id",errorText:"Username is already taken",children:e.jsx(r,{placeholder:"Choose a username"})}},s={args:{label:"Email",elementId:"email-element-id",hintText:"We will never share your email",errorText:"Please enter a valid email address",children:e.jsx(r,{placeholder:"Enter your email",type:"email"})}},i={args:{label:"Email",elementId:"email-required-element-id",hintText:"This field is required",isRequired:!0,children:e.jsx(r,{placeholder:"Enter your email",type:"email"})}},l={args:{children:e.jsx(r,{})},render:()=>e.jsx(V,{}),parameters:{docs:{source:{code:ee}}}},n={args:{children:e.jsx(r,{})},render:()=>e.jsx(J,{}),parameters:{docs:{source:{code:$}}}};var d,c,p,u,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    elementId: 'default-element-id',
    children: <Input placeholder="Enter your email" type="email" />
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:`The default state of the FormItem component.
Shows a basic form field with a label and input.`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var I,y,b,x,w;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    elementId: 'password-element-id',
    hintText: 'Must be at least 8 characters long',
    children: <Input placeholder="Enter your password" type="password" />
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source},description:{story:`FormItem with hint text.
Demonstrates how to provide additional context or instructions for a form field.`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.description}}};var g,f,T,S,F;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    elementId: 'username-element-id',
    errorText: 'Username is already taken',
    children: <Input placeholder="Choose a username" />
  }
}`,...(T=(f=a.parameters)==null?void 0:f.docs)==null?void 0:T.source},description:{story:`FormItem with error state.
Shows how validation errors are displayed to the user.`,...(F=(S=a.parameters)==null?void 0:S.docs)==null?void 0:F.description}}};var E,q,W,j,P;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    elementId: 'email-element-id',
    hintText: 'We will never share your email',
    errorText: 'Please enter a valid email address',
    children: <Input placeholder="Enter your email" type="email" />
  }
}`,...(W=(q=s.parameters)==null?void 0:q.docs)==null?void 0:W.source},description:{story:`FormItem with both hint and error text.
Demonstrates how to show both helper text and error messages.`,...(P=(j=s.parameters)==null?void 0:j.docs)==null?void 0:P.description}}};var k,v,L,R,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    elementId: 'email-required-element-id',
    hintText: 'This field is required',
    isRequired: true,
    children: <Input placeholder="Enter your email" type="email" />
  }
}`,...(L=(v=i.parameters)==null?void 0:v.docs)==null?void 0:L.source},description:{story:`FormItem with required field indicator.
Shows how to mark a field as required with a red asterisk.`,...(C=(R=i.parameters)==null?void 0:R.docs)==null?void 0:C.description}}};var N,A,B,H,_;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(B=(A=l.parameters)==null?void 0:A.docs)==null?void 0:B.source},description:{story:`FormItem with a label slot.
Demonstrates how to add additional components to the right of the label.`,...(_=(H=l.parameters)==null?void 0:H.docs)==null?void 0:_.description}}};var M,D,z,K,U;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(z=(D=n.parameters)==null?void 0:D.docs)==null?void 0:z.source},description:{story:`FormItem with both required indicator and label slot.
Shows how the required asterisk and label slot work together.`,...(U=(K=n.parameters)==null?void 0:K.docs)==null?void 0:U.description}}};const We=["Default","WithHintText","WithError","WithHintAndError","Required","WithLabelSlot","RequiredWithLabelSlot"];export{t as Default,i as Required,n as RequiredWithLabelSlot,a as WithError,s as WithHintAndError,o as WithHintText,l as WithLabelSlot,We as __namedExportsOrder,qe as default};
