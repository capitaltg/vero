import{I as Q}from"./Input-BCcVyiao.js";import"./jsx-runtime-BO8uF4Og.js";import"./index-D4H_InIO.js";import"./useAriaDisabled-DHTVgRPt.js";import"./styles-Bqt2ynIu.js";import"./utils-CU3My8Oi.js";const re={title:"Inputs & Forms/Input",component:Q,parameters:{},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","search"],description:"The input type attribute",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Placeholder text for the input",table:{type:{summary:"string"}}},value:{control:"text",description:"The value of the input",table:{type:{summary:"string"}}},transform:{control:"select",options:["uppercase","lowercase","trim","none"],description:"Text transformation to apply to the input value",table:{type:{summary:"TextTransform | TextTransform[]"}}},isDisabled:{control:"boolean",description:"Whether the input is disabled",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the input"}}},e={args:{placeholder:"Enter text..."}},r={args:{type:"email",placeholder:"Enter email..."}},t={args:{value:"Hello World",placeholder:"Enter text..."}},a={args:{isDisabled:!0,placeholder:"Disabled input"}},s={args:{transform:"uppercase",placeholder:"Text will be uppercase"}},o={args:{transform:"lowercase",placeholder:"Text will be lowercase"}},n={args:{transform:"trim",placeholder:"Whitespace will be trimmed"}},i={args:{transform:["trim","uppercase"],placeholder:"Text will be trimmed and uppercase"}};var p,c,l,m,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:`The default state of the Input component.
Shows a basic text input field with placeholder text.`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.description}}};var u,h,f,g,w;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'Enter email...'
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source},description:{story:`Input with a specific type attribute.
Demonstrates using the input as an email field.`,...(w=(g=r.parameters)==null?void 0:g.docs)==null?void 0:w.description}}};var b,y,x,T,W;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 'Hello World',
    placeholder: 'Enter text...'
  }
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:`Input with a pre-filled value.
Shows how the input appears with initial text content.`,...(W=(T=t.parameters)==null?void 0:T.docs)==null?void 0:W.description}}};var D,S,I,v,E;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    placeholder: 'Disabled input'
  }
}`,...(I=(S=a.parameters)==null?void 0:S.docs)==null?void 0:I.source},description:{story:`A disabled input field.
Shows how the input appears when it's not interactive.`,...(E=(v=a.parameters)==null?void 0:v.docs)==null?void 0:E.description}}};var A,H,L,M,U;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    transform: 'uppercase',
    placeholder: 'Text will be uppercase'
  }
}`,...(L=(H=s.parameters)==null?void 0:H.docs)==null?void 0:L.source},description:{story:`Input with automatic text transformation to uppercase.
Demonstrates the transform feature for uppercase text.`,...(U=(M=s.parameters)==null?void 0:M.docs)==null?void 0:U.description}}};var V,_,F,N,O;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    transform: 'lowercase',
    placeholder: 'Text will be lowercase'
  }
}`,...(F=(_=o.parameters)==null?void 0:_.docs)==null?void 0:F.source},description:{story:`Input with automatic text transformation to lowercase.
Demonstrates the transform feature for lowercase text.`,...(O=(N=o.parameters)==null?void 0:N.docs)==null?void 0:O.description}}};var P,j,k,q,z;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    transform: 'trim',
    placeholder: 'Whitespace will be trimmed'
  }
}`,...(k=(j=n.parameters)==null?void 0:j.docs)==null?void 0:k.source},description:{story:`Input with automatic whitespace trimming.
Shows how the transform feature removes leading and trailing spaces.`,...(z=(q=n.parameters)==null?void 0:q.docs)==null?void 0:z.description}}};var B,C,G,J,K;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    transform: ['trim', 'uppercase'],
    placeholder: 'Text will be trimmed and uppercase'
  }
}`,...(G=(C=i.parameters)==null?void 0:C.docs)==null?void 0:G.source},description:{story:`Input with multiple text transformations.
Demonstrates combining multiple transform operations.`,...(K=(J=i.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};const te=["Default","WithType","WithValue","Disabled","WithTransformUppercase","WithTransformLowercase","WithTransformTrim","WithMultipleTransforms"];export{e as Default,a as Disabled,i as WithMultipleTransforms,o as WithTransformLowercase,n as WithTransformTrim,s as WithTransformUppercase,r as WithType,t as WithValue,te as __namedExportsOrder,re as default};
