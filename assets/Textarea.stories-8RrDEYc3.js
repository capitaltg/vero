import{j as G}from"./jsx-runtime-BO8uF4Og.js";import{s as H}from"./styles-DfGEMFtJ.js";import{c as J}from"./utils-CytzSlOG.js";import{r as K}from"./index-D4H_InIO.js";const n=K.forwardRef(({className:I,isDisabled:z=!1,...B},F)=>G.jsx("textarea",{ref:F,disabled:z,className:J(H.input,"min-h-[5rem]",I),...B}));n.displayName="Textarea";n.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const U={title:"Components/Textarea",component:n,parameters:{},tags:["autodocs"]},e={args:{placeholder:"Type your message here..."}},s={args:{value:"This is a pre-filled textarea with some content that demonstrates how it looks with text inside it.",placeholder:"Type your message here..."}},t={args:{isDisabled:!0,placeholder:"This textarea is disabled"}},a={args:{rows:8,placeholder:"This textarea has 8 rows..."}},r={args:{readOnly:!0,value:"This is read-only content that cannot be modified.",placeholder:"This textarea is read-only"}},o={args:{className:"min-h-[12rem] font-mono",placeholder:"This textarea has custom styling..."}};var i,c,d,l,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here...'
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source},description:{story:`The default state of the Textarea component.
Shows a basic multiline text input field with placeholder text.`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.description}}};var m,h,u,y,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 'This is a pre-filled textarea with some content that demonstrates how it looks with text inside it.',
    placeholder: 'Type your message here...'
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source},description:{story:`Textarea with pre-filled content.
Demonstrates how the component appears with initial text content.`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.description}}};var g,w,f,T,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    placeholder: 'This textarea is disabled'
  }
}`,...(f=(w=t.parameters)==null?void 0:w.docs)==null?void 0:f.source},description:{story:`A disabled textarea.
Shows how the component appears when it's not interactive.`,...(b=(T=t.parameters)==null?void 0:T.docs)==null?void 0:b.description}}};var S,D,v,N,O;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    rows: 8,
    placeholder: 'This textarea has 8 rows...'
  }
}`,...(v=(D=a.parameters)==null?void 0:D.docs)==null?void 0:v.source},description:{story:`Textarea with custom height.
Demonstrates how to control the initial height using rows.`,...(O=(N=a.parameters)==null?void 0:N.docs)==null?void 0:O.description}}};var R,W,_,j,C;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    value: 'This is read-only content that cannot be modified.',
    placeholder: 'This textarea is read-only'
  }
}`,...(_=(W=r.parameters)==null?void 0:W.docs)==null?void 0:_.source},description:{story:`A read-only textarea.
Shows how the component appears when content can be viewed but not modified.`,...(C=(j=r.parameters)==null?void 0:j.docs)==null?void 0:C.description}}};var E,V,k,A,q;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    className: 'min-h-[12rem] font-mono',
    placeholder: 'This textarea has custom styling...'
  }
}`,...(k=(V=o.parameters)==null?void 0:V.docs)==null?void 0:k.source},description:{story:`Textarea with custom styling.
Demonstrates how to apply custom styles using className.`,...(q=(A=o.parameters)==null?void 0:A.docs)==null?void 0:q.description}}};const X=["Default","WithValue","Disabled","WithRows","ReadOnly","WithCustomStyle"];export{e as Default,t as Disabled,r as ReadOnly,o as WithCustomStyle,a as WithRows,s as WithValue,X as __namedExportsOrder,U as default};
