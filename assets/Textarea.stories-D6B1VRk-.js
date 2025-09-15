import{j as K}from"./jsx-runtime-BO8uF4Og.js";import{u as M}from"./useAriaDisabled-DHTVgRPt.js";import{s as Q}from"./styles-hHSuIYOZ.js";import{c as U}from"./utils-l21BANrb.js";import{R as X,r as m}from"./index-D4H_InIO.js";const p=X.forwardRef(({className:P,isDisabled:$=!1,isGrowable:c=!1,...B},i)=>{const l=m.useRef(null),J=M({isDisabled:$});return m.useEffect(()=>{if(c&&l.current){const e=l.current,d=()=>{e.style.height="auto",e.style.height=`${e.scrollHeight}px`};return e.addEventListener("input",d),d(),()=>e.removeEventListener("input",d)}},[c]),K.jsx("textarea",{ref:e=>{typeof i=="function"?i(e):i&&(i.current=e),l.current=e},className:U(Q.input,"min-h-[5rem]",c&&"resize-none overflow-hidden",P),...B,...J})});p.displayName="Textarea";p.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isGrowable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const se={title:"Inputs & Forms/Textarea",component:p,parameters:{},tags:["autodocs"]},t={args:{placeholder:"Type your message here..."}},a={args:{value:"This is a pre-filled textarea with some content that demonstrates how it looks with text inside it.",placeholder:"Type your message here..."}},s={args:{isDisabled:!0,placeholder:"This textarea is disabled"}},r={args:{readOnly:!0,value:"This is read-only content that cannot be modified.",placeholder:"This textarea is read-only"}},o={args:{className:"min-h-[12rem] font-mono",placeholder:"This textarea has custom styling..."}},n={args:{isGrowable:!0,placeholder:"This textarea will grow as you type..."}};var u,h,y,f,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here...'
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:`The default state of the Textarea component.
Shows a basic multiline text input field with placeholder text.`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.description}}};var g,w,T,b,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 'This is a pre-filled textarea with some content that demonstrates how it looks with text inside it.',
    placeholder: 'Type your message here...'
  }
}`,...(T=(w=a.parameters)==null?void 0:w.docs)==null?void 0:T.source},description:{story:`Textarea with pre-filled content.
Demonstrates how the component appears with initial text content.`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.description}}};var S,D,R,E,N;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    placeholder: 'This textarea is disabled'
  }
}`,...(R=(D=s.parameters)==null?void 0:D.docs)==null?void 0:R.source},description:{story:`A disabled textarea.
Shows how the component appears when it's not interactive.`,...(N=(E=s.parameters)==null?void 0:E.docs)==null?void 0:N.description}}};var O,j,A,V,W;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    value: 'This is read-only content that cannot be modified.',
    placeholder: 'This textarea is read-only'
  }
}`,...(A=(j=r.parameters)==null?void 0:j.docs)==null?void 0:A.source},description:{story:`A read-only textarea.
Shows how the component appears when content can be viewed but not modified.`,...(W=(V=r.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};var _,G,k,q,C;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    className: 'min-h-[12rem] font-mono',
    placeholder: 'This textarea has custom styling...'
  }
}`,...(k=(G=o.parameters)==null?void 0:G.docs)==null?void 0:k.source},description:{story:`Textarea with custom styling.
Demonstrates how to apply custom styles using className.`,...(C=(q=o.parameters)==null?void 0:q.docs)==null?void 0:C.description}}};var H,I,L,z,F;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    isGrowable: true,
    placeholder: 'This textarea will grow as you type...'
  }
}`,...(L=(I=n.parameters)==null?void 0:I.docs)==null?void 0:L.source},description:{story:`Auto-growing textarea.
Shows how the textarea expands vertically as content is added.`,...(F=(z=n.parameters)==null?void 0:z.docs)==null?void 0:F.description}}};const re=["Default","WithValue","Disabled","ReadOnly","WithCustomStyle","Growable"];export{t as Default,s as Disabled,n as Growable,r as ReadOnly,o as WithCustomStyle,a as WithValue,re as __namedExportsOrder,se as default};
