import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{s as m}from"./styles-Dlcbwdhh.js";import{c as P}from"./utils-CytzSlOG.js";import{r as U}from"./index-D4H_InIO.js";import{L as _}from"./Label-D9BEXrVN.js";import{I as i}from"./Input-Qdt5QVCC.js";import"./index-CNI2vRWb.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-BekKX9Q6.js";const l=U.forwardRef(({label:o,hintText:d,errorText:n,className:q,children:D},H)=>e.jsxs("div",{ref:H,className:P("space-y-1",q),"data-error":n?"true":void 0,children:[e.jsxs("div",{className:"space-y-1",children:[o?typeof o=="string"?e.jsx(_,{className:"font-bold",children:o}):o:null,d?e.jsx("p",{className:m.text.hint,children:d}):null]}),D,n?e.jsx("p",{className:m.text.error,children:n}):null]}));l.displayName="FormItem";l.__docgenInfo={description:"",methods:[],displayName:"FormItem",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},hintText:{required:!1,tsType:{name:"ReactNode"},description:""},errorText:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const K={title:"Components/FormItem",component:l,parameters:{},tags:["autodocs"]},r={args:{label:"Email",children:e.jsx(i,{type:"email",placeholder:"Enter your email"})}},a={args:{label:"Password",hintText:"Must be at least 8 characters long",children:e.jsx(i,{type:"password",placeholder:"Enter your password"})}},t={args:{label:"Username",errorText:"Username is already taken",children:e.jsx(i,{placeholder:"Choose a username"})}},s={args:{label:"Email",hintText:"We will never share your email",errorText:"Please enter a valid email address",children:e.jsx(i,{type:"email",placeholder:"Enter your email"})}};var c,p,h,u,y;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    children: <Input type="email" placeholder="Enter your email" />
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source},description:{story:`The default state of the FormItem component.
Shows a basic form field with a label and input.`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.description}}};var x,f,g,w,E;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    hintText: 'Must be at least 8 characters long',
    children: <Input type="password" placeholder="Enter your password" />
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source},description:{story:`FormItem with hint text.
Demonstrates how to provide additional context or instructions for a form field.`,...(E=(w=a.parameters)==null?void 0:w.docs)==null?void 0:E.description}}};var I,T,b,N,j;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    errorText: 'Username is already taken',
    children: <Input placeholder="Choose a username" />
  }
}`,...(b=(T=t.parameters)==null?void 0:T.docs)==null?void 0:b.source},description:{story:`FormItem with error state.
Shows how validation errors are displayed to the user.`,...(j=(N=t.parameters)==null?void 0:N.docs)==null?void 0:j.description}}};var v,F,W,R,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    hintText: 'We will never share your email',
    errorText: 'Please enter a valid email address',
    children: <Input type="email" placeholder="Enter your email" />
  }
}`,...(W=(F=s.parameters)==null?void 0:F.docs)==null?void 0:W.source},description:{story:`FormItem with both hint and error text.
Demonstrates how to show both helper text and error messages.`,...(S=(R=s.parameters)==null?void 0:R.docs)==null?void 0:S.description}}};const Q=["Default","WithHintText","WithError","WithHintAndError"];export{r as Default,t as WithError,s as WithHintAndError,a as WithHintText,Q as __namedExportsOrder,K as default};
