import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as s}from"./index-B0WjJBI_.js";import{B as pe}from"./Button-DJBoR_IJ.js";import{a as ue,T as he}from"./Tooltip-Cj8dK7Rm.js";import{F as b}from"./FormItem-w-KWj7d7.js";import{I as t}from"./Input-BjeEkKn3.js";import{C as be}from"./circle-question-mark-DHikYJlp.js";import{C as ye}from"./Combobox-BFQTSsZP.js";import{D as ve}from"./DateRangePicker-DMS53onl.js";import{D as je}from"./DatePicker-D_9uveRd.js";import{M as Pe}from"./MultiSelect-BOoBGzfy.js";import{A as Ce}from"./Autocomplete-ngdpsVt2.js";import{S as ke}from"./Select-VIvb_Gvi.js";import{T as qe}from"./Textarea-Cs2KzWh6.js";const xe=()=>e.jsx(ue,{children:e.jsx(b,{elementId:"api-key-element-id",hintText:"Enter your unique API key",isRequired:!0,label:"API Key",labelSlot:e.jsx(he,{content:"Your API key can be found in your account settings",children:e.jsx(pe,{"aria-label":"Where to find your API key",className:"h-auto p-1",size:"sm",variant:"ghost",children:e.jsx(be,{className:"h-4 w-4 text-muted-foreground"})})}),children:e.jsx(t,{id:"api-key-element-id",placeholder:"Enter your API Key",type:"password"})})});xe.__docgenInfo={description:"",methods:[],displayName:"FormItemRequiredWithLabelSlot"};const Fe=`import { Button } from '@/components/Button';
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
          <Button
            aria-label="Where to find your API key"
            className="h-auto p-1"
            size="sm"
            variant="ghost"
          >
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </Button>
        </Tooltip>
      }
    >
      <Input id="api-key-element-id" placeholder="Enter your API Key" type="password" />
    </FormItem>
  </TooltipProvider>
);
`,ge=()=>e.jsx(ue,{children:e.jsx(b,{elementId:"password-label-slot-element-id",hintText:"Must be at least 8 characters long",label:"Password",labelSlot:e.jsx(he,{content:"Password must be at least 8 characters with uppercase, lowercase, and numbers",children:e.jsx(pe,{"aria-label":"Password requirements",className:"h-auto p-1",size:"sm",variant:"ghost",children:e.jsx(be,{className:"h-4 w-4 text-muted-foreground"})})}),children:e.jsx(t,{id:"password-label-slot-element-id",placeholder:"Enter your password",type:"password"})})});ge.__docgenInfo={description:"",methods:[],displayName:"FormItemWithLabelSlot"};const We=`import { HelpCircle } from 'lucide-react';
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
          <Button
            aria-label="Password requirements"
            className="h-auto p-1"
            size="sm"
            variant="ghost"
          >
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </Button>
        </Tooltip>
      }
    >
      <Input
        id="password-label-slot-element-id"
        placeholder="Enter your password"
        type="password"
      />
    </FormItem>
  </TooltipProvider>
);
`,Re={title:"Inputs & Forms/FormItem",component:b,parameters:{},argTypes:{label:{control:"text",table:{type:{summary:"ReactNode"}}},labelSlot:{control:"text",table:{type:{summary:"ReactNode"}}},elementId:{control:"text",table:{type:{summary:"string"}}},hintText:{control:"text",table:{type:{summary:"string"}}},errorText:{control:"text",table:{type:{summary:"string"}}},isRequired:{control:"boolean",table:{type:{summary:"boolean"}}},className:{type:"string"}}},l={args:{label:"Email",hintText:"We'll only use it to send receipts",elementId:"playground-email",children:e.jsx(t,{id:"playground-email",placeholder:"Enter your email",type:"email"})}},n={args:{label:"Email",elementId:"default-element-id",children:e.jsx(t,{id:"default-element-id",placeholder:"Enter your email",type:"email"})}},i={args:{label:"Password",elementId:"password-element-id",hintText:"Must be at least 8 characters long",children:e.jsx(t,{id:"password-element-id",placeholder:"Enter your password",type:"password"})}},d={args:{label:"Username",elementId:"username-element-id",errorText:"Username is already taken",children:e.jsx(t,{id:"username-element-id",placeholder:"Choose a username"})}},m={args:{label:"Email",elementId:"email-element-id",hintText:"We will never share your email",errorText:"Please enter a valid email address",children:e.jsx(t,{id:"email-element-id",placeholder:"Enter your email",type:"email"})}},c={args:{label:"Email",elementId:"email-required-element-id",hintText:"This field is required",isRequired:!0,children:e.jsx(t,{id:"email-required-element-id",placeholder:"Enter your email",type:"email"})}},p={args:{children:e.jsx(t,{})},render:()=>e.jsx(ge,{}),parameters:{docs:{source:{code:We}}}},u={args:{children:e.jsx(t,{})},render:()=>e.jsx(xe,{}),parameters:{docs:{source:{code:Fe}}}},g=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"svelte",label:"Svelte"}],w={input:"Input",textarea:"Textarea",select:"Select",autocomplete:"Autocomplete",combobox:"Combobox",multiSelect:"MultiSelect",datePicker:"DatePicker",dateRangePicker:"DateRangePicker"},Le=({control:a})=>{const[y,x]=s.useState(""),[r,I]=s.useState(""),[Ie,we]=s.useState([]),[fe,Se]=s.useState(),[Te,Ee]=s.useState({});switch(a){case"input":return e.jsx(t,{placeholder:"Enter a value",value:y,onChange:o=>x(o.target.value)});case"textarea":return e.jsx(qe,{placeholder:"Enter a value",value:y,onChange:o=>x(o.target.value)});case"select":return e.jsx(ke,{options:g,value:r,onChange:I});case"autocomplete":return e.jsx(Ce,{getOptionLabel:o=>o.label,getOptionValue:o=>o.value,options:g,value:r,onChange:I});case"combobox":return e.jsx(ye,{options:g,value:r,onChange:I});case"multiSelect":return e.jsx(Pe,{options:g,value:Ie,onChange:we});case"datePicker":return e.jsx(je,{value:fe,onChange:Se});case"dateRangePicker":return e.jsx(ve,{value:Te,onChange:Ee})}},Ae=()=>{const[a,y]=s.useState("autocomplete"),x=Object.keys(w).map(r=>({value:r,label:w[r]}));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",maxWidth:360},children:[e.jsx(b,{elementId:"error-state-picker",hintText:"Choose a control to preview its error state",label:"Component",children:e.jsx(ye,{options:x,placeholder:"Select a component...",value:a,onChange:r=>r&&y(r)})}),e.jsx(b,{elementId:`error-state-${a}`,errorText:"This field is required",label:w[a],children:e.jsx(Le,{control:a})})]})},h={name:"Error State (by control)",args:{children:e.jsx(t,{})},parameters:{controls:{disable:!0}},render:()=>e.jsx(Ae,{})};var f,S,T,E,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    hintText: "We'll only use it to send receipts",
    elementId: 'playground-email',
    children: <Input id="playground-email" placeholder="Enter your email" type="email" />
  }
}`,...(T=(S=l.parameters)==null?void 0:S.docs)==null?void 0:T.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(v=(E=l.parameters)==null?void 0:E.docs)==null?void 0:v.description}}};var j,P,C,k,q;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    elementId: 'default-element-id',
    children: <Input id="default-element-id" placeholder="Enter your email" type="email" />
  }
}`,...(C=(P=n.parameters)==null?void 0:P.docs)==null?void 0:C.source},description:{story:`The default state of the FormItem component.
Shows a basic form field with a label and input.`,...(q=(k=n.parameters)==null?void 0:k.docs)==null?void 0:q.description}}};var F,W,R,L,A;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    elementId: 'password-element-id',
    hintText: 'Must be at least 8 characters long',
    children: <Input id="password-element-id" placeholder="Enter your password" type="password" />
  }
}`,...(R=(W=i.parameters)==null?void 0:W.docs)==null?void 0:R.source},description:{story:`FormItem with hint text.
Demonstrates how to provide additional context or instructions for a form field.`,...(A=(L=i.parameters)==null?void 0:L.docs)==null?void 0:A.description}}};var N,B,D,_,O;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    elementId: 'username-element-id',
    errorText: 'Username is already taken',
    children: <Input id="username-element-id" placeholder="Choose a username" />
  }
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source},description:{story:`FormItem with error state.
Shows how validation errors are displayed to the user.`,...(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.description}}};var M,H,z,U,K;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    elementId: 'email-element-id',
    hintText: 'We will never share your email',
    errorText: 'Please enter a valid email address',
    children: <Input id="email-element-id" placeholder="Enter your email" type="email" />
  }
}`,...(z=(H=m.parameters)==null?void 0:H.docs)==null?void 0:z.source},description:{story:`FormItem with both hint and error text.
Demonstrates how to show both helper text and error messages.`,...(K=(U=m.parameters)==null?void 0:U.docs)==null?void 0:K.description}}};var V,Y,Q,$,G;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    elementId: 'email-required-element-id',
    hintText: 'This field is required',
    isRequired: true,
    children: <Input id="email-required-element-id" placeholder="Enter your email" type="email" />
  }
}`,...(Q=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Q.source},description:{story:`FormItem with required field indicator.
Shows how to mark a field as required with a red asterisk.`,...(G=($=c.parameters)==null?void 0:$.docs)==null?void 0:G.description}}};var J,X,Z,ee,te;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:`FormItem with a label slot.
Demonstrates how to add additional components to the right of the label.`,...(te=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var re,oe,ae,se,le;u.parameters={...u.parameters,docs:{...(re=u.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ae=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:ae.source},description:{story:`FormItem with both required indicator and label slot.
Shows how the required asterisk and label slot work together.`,...(le=(se=u.parameters)==null?void 0:se.docs)==null?void 0:le.description}}};var ne,ie,de,me,ce;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(de=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:de.source},description:{story:`Pick a control from the in-canvas **Component** combobox to see how it looks
inside a FormItem with an error. Every control here should show a
destructive-colored border while the error is present.`,...(ce=(me=h.parameters)==null?void 0:me.docs)==null?void 0:ce.description}}};const Ne=["Playground","Default","WithHintText","WithError","WithHintAndError","Required","WithLabelSlot","RequiredWithLabelSlot","ErrorStateByControl"],Je=Object.freeze(Object.defineProperty({__proto__:null,Default:n,ErrorStateByControl:h,Playground:l,Required:c,RequiredWithLabelSlot:u,WithError:d,WithHintAndError:m,WithHintText:i,WithLabelSlot:p,__namedExportsOrder:Ne,default:Re},Symbol.toStringTag,{value:"Module"}));export{Je as F,l as P};
