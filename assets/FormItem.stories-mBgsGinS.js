import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{s as b}from"./styles-hHSuIYOZ.js";import{c as ce}from"./utils-l21BANrb.js";import{r as pe}from"./index-D4H_InIO.js";import{L as he}from"./Label-CjB5ZDVY.js";import{I as t}from"./Input-CqVoxE-I.js";import{a as Z,T as ee}from"./Tooltip-Dssk17hS.js";import{B as re}from"./Button-YgMv2nag.js";import{c as ue}from"./createLucideIcon-CRH11QI6.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./useAriaDisabled-DHTVgRPt.js";import"./z-index-CmEG1ohp.js";import"./index-DwviEg3j.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DsCZslo7.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-C6Lf2F3X.js";import"./constants-BFjZK9t2.js";import"./index-DKzzznqW.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],te=ue("circle-question-mark",ye),c=pe.forwardRef(({label:r,labelSlot:h,hintText:u,errorText:p,className:ae,children:y,elementId:se,isRequired:oe=!1,...ie},le)=>{var f;const a=se??((f=y.props)==null?void 0:f.id);if(!a)throw new Error("FormItem must have either an `elementId` prop or an `id` attribute specified on the child element");const ne=`form-item-${a}-label`,de=`form-item-${a}-hint`,me=`form-item-${a}-error`;return e.jsxs("div",{ref:le,className:ce("space-y-1",ae),...ie,"data-error":p?"true":void 0,children:[e.jsxs("div",{className:"space-y-1",children:[r?e.jsxs("div",{className:"flex items-center",children:[typeof r=="string"?e.jsxs(he,{className:"font-bold",id:ne,htmlFor:a,children:[r,oe?e.jsx("span",{className:"ml-0.5 text-destructive",children:"*"}):null]}):r,h?e.jsx("div",{className:"ml-2",children:h}):null]}):null,u?e.jsx("p",{className:b.text.hint,id:de,children:u}):null]}),y,p?e.jsx("p",{className:b.text.error,id:me,children:p}):null]})});c.displayName="FormItem";c.__docgenInfo={description:"",methods:[],displayName:"FormItem",props:{label:{required:!1,tsType:{name:"ReactNode"},description:"The label for the form item. If a string is provided, it will be wrapped in a `<Label>` component. If a ReactNode is provided, it will be rendered as-is."},labelSlot:{required:!1,tsType:{name:"ReactNode"},description:"An optional slot to display next to the label, such as an info icon with a tooltip or popover."},hintText:{required:!1,tsType:{name:"string"},description:"Hint text to display below the label and above the form element."},errorText:{required:!1,tsType:{name:"string"},description:"Error text to display below the form element. If provided, the form item will be styled to indicate an error."},className:{required:!1,tsType:{name:"string"},description:"Additional classes to apply to the form item container."},elementId:{required:!1,tsType:{name:"string"},description:"The ID used to generate the label, hint, and error IDs for accessibility. If not provided, the ID of the top-level child element will be used if available. This ID must be unique on the page and must be used as the `id` attribute of the child form element so that it can be assocated with the label."},children:{required:!0,tsType:{name:"ReactElement"},description:"The form element associated with this form item, such as an input or select."},isRequired:{required:!1,tsType:{name:"boolean"},description:"Whether the form item is required. If true, an asterisk (*) will be displayed next to the label.",defaultValue:{value:"false",computed:!1}}}};const _e={title:"Inputs & Forms/FormItem",component:c,parameters:{},tags:["autodocs"]},s={args:{label:"Email",elementId:"default-element-id",children:e.jsx(t,{type:"email",placeholder:"Enter your email"})}},o={args:{label:"Password",elementId:"password-element-id",hintText:"Must be at least 8 characters long",children:e.jsx(t,{type:"password",placeholder:"Enter your password"})}},i={args:{label:"Username",elementId:"username-element-id",errorText:"Username is already taken",children:e.jsx(t,{placeholder:"Choose a username"})}},l={args:{label:"Email",elementId:"email-element-id",hintText:"We will never share your email",errorText:"Please enter a valid email address",children:e.jsx(t,{type:"email",placeholder:"Enter your email"})}},n={args:{label:"Email",elementId:"email-required-element-id",hintText:"This field is required",isRequired:!0,children:e.jsx(t,{type:"email",placeholder:"Enter your email"})}},d={args:{label:"Password",elementId:"password-label-slot-element-id",labelSlot:e.jsx(ee,{content:"Password must be at least 8 characters with uppercase, lowercase, and numbers",children:e.jsx(re,{variant:"ghost",size:"sm",className:"h-auto p-1",children:e.jsx(te,{className:"h-4 w-4 text-muted-foreground"})})}),hintText:"Must be at least 8 characters long",children:e.jsx(t,{type:"password",placeholder:"Enter your password"})},render:r=>e.jsx(Z,{children:e.jsx(c,{...r})})},m={args:{label:"API Key",elementId:"api-key-element-id",isRequired:!0,labelSlot:e.jsx(ee,{content:"Your API key can be found in your account settings",children:e.jsx(re,{variant:"ghost",size:"sm",className:"h-auto p-1",children:e.jsx(te,{className:"h-4 w-4 text-muted-foreground"})})}),hintText:"Enter your unique API key",children:e.jsx(t,{type:"password",placeholder:"Enter your API Key"})},render:r=>e.jsx(Z,{children:e.jsx(c,{...r})})};var w,I,x,g,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    elementId: 'default-element-id',
    children: <Input type="email" placeholder="Enter your email" />
  }
}`,...(x=(I=s.parameters)==null?void 0:I.docs)==null?void 0:x.source},description:{story:`The default state of the FormItem component.
Shows a basic form field with a label and input.`,...(T=(g=s.parameters)==null?void 0:g.docs)==null?void 0:T.description}}};var v,q,E,j,N;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    elementId: 'password-element-id',
    hintText: 'Must be at least 8 characters long',
    children: <Input type="password" placeholder="Enter your password" />
  }
}`,...(E=(q=o.parameters)==null?void 0:q.docs)==null?void 0:E.source},description:{story:`FormItem with hint text.
Demonstrates how to provide additional context or instructions for a form field.`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.description}}};var P,S,k,F,R;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    elementId: 'username-element-id',
    errorText: 'Username is already taken',
    children: <Input placeholder="Choose a username" />
  }
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source},description:{story:`FormItem with error state.
Shows how validation errors are displayed to the user.`,...(R=(F=i.parameters)==null?void 0:F.docs)==null?void 0:R.description}}};var W,A,D,L,H;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    elementId: 'email-element-id',
    hintText: 'We will never share your email',
    errorText: 'Please enter a valid email address',
    children: <Input type="email" placeholder="Enter your email" />
  }
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source},description:{story:`FormItem with both hint and error text.
Demonstrates how to show both helper text and error messages.`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.description}}};var M,B,_,C,z;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    elementId: 'email-required-element-id',
    hintText: 'This field is required',
    isRequired: true,
    children: <Input type="email" placeholder="Enter your email" />
  }
}`,...(_=(B=n.parameters)==null?void 0:B.docs)==null?void 0:_.source},description:{story:`FormItem with required field indicator.
Shows how to mark a field as required with a red asterisk.`,...(z=(C=n.parameters)==null?void 0:C.docs)==null?void 0:z.description}}};var K,U,$,Y,O;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    elementId: 'password-label-slot-element-id',
    labelSlot: <Tooltip content="Password must be at least 8 characters with uppercase, lowercase, and numbers">
        <Button variant="ghost" size="sm" className="h-auto p-1">
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
        </Button>
      </Tooltip>,
    hintText: 'Must be at least 8 characters long',
    children: <Input type="password" placeholder="Enter your password" />
  },
  render: args => <TooltipProvider>
      <FormItem {...args} />
    </TooltipProvider>
}`,...($=(U=d.parameters)==null?void 0:U.docs)==null?void 0:$.source},description:{story:`FormItem with a label slot.
Demonstrates how to add additional components to the right of the label.`,...(O=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:O.description}}};var Q,V,G,J,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'API Key',
    elementId: 'api-key-element-id',
    isRequired: true,
    labelSlot: <Tooltip content="Your API key can be found in your account settings">
        <Button variant="ghost" size="sm" className="h-auto p-1">
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
        </Button>
      </Tooltip>,
    hintText: 'Enter your unique API key',
    children: <Input type="password" placeholder="Enter your API Key" />
  },
  render: args => <TooltipProvider>
      <FormItem {...args} />
    </TooltipProvider>
}`,...(G=(V=m.parameters)==null?void 0:V.docs)==null?void 0:G.source},description:{story:`FormItem with both required indicator and label slot.
Shows how the required asterisk and label slot work together.`,...(X=(J=m.parameters)==null?void 0:J.docs)==null?void 0:X.description}}};const Ce=["Default","WithHintText","WithError","WithHintAndError","Required","WithLabelSlot","RequiredWithLabelSlot"];export{s as Default,n as Required,m as RequiredWithLabelSlot,i as WithError,l as WithHintAndError,o as WithHintText,d as WithLabelSlot,Ce as __namedExportsOrder,_e as default};
