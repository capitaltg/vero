import{T as I}from"./Textarea-Cs2KzWh6.js";const U={title:"Inputs & Forms/Textarea",component:I,parameters:{},argTypes:{placeholder:{control:"text",description:"Placeholder text for the textarea",table:{type:{summary:"string"}}},value:{control:"text",description:"The value of the textarea",table:{type:{summary:"string"}}},isDisabled:{control:"boolean",table:{type:{summary:"boolean"}}},isGrowable:{control:"boolean",table:{type:{summary:"boolean"}}},readOnly:{control:"boolean",description:"Whether the textarea is read-only",table:{type:{summary:"boolean"}}},rows:{control:"number",description:"Number of visible text lines",table:{type:{summary:"number"}}},required:{control:"boolean",description:"Marks the textarea as required for form validation. The form cannot be submitted without a value, and screen readers will announce the field as required.",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the textarea"}}},e={args:{"aria-label":"Example textarea",placeholder:"Type your message here..."}},t={args:{placeholder:"Type your message here..."}},a={args:{value:"This is a pre-filled textarea with some content that demonstrates how it looks with text inside it.",placeholder:"Type your message here..."}},r={args:{isDisabled:!0,placeholder:"This textarea is disabled"}},s={args:{readOnly:!0,value:"This is read-only content that cannot be modified.",placeholder:"This textarea is read-only"}},o={args:{className:"min-h-[12rem] font-mono",placeholder:"This textarea has custom styling..."}},n={args:{isGrowable:!0,placeholder:"This textarea will grow as you type..."}};var i,l,c,d,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Example textarea',
    placeholder: 'Type your message here...'
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.description}}};var m,h,u,y,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here...'
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source},description:{story:`The default state of the Textarea component.
Shows a basic multiline text input field with placeholder text.`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var g,x,w,T,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 'This is a pre-filled textarea with some content that demonstrates how it looks with text inside it.',
    placeholder: 'Type your message here...'
  }
}`,...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source},description:{story:`Textarea with pre-filled content.
Demonstrates how the component appears with initial text content.`,...(f=(T=a.parameters)==null?void 0:T.docs)==null?void 0:f.description}}};var S,v,D,O,_;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    placeholder: 'This textarea is disabled'
  }
}`,...(D=(v=r.parameters)==null?void 0:v.docs)==null?void 0:D.source},description:{story:`A disabled textarea.
Shows how the component appears when it's not interactive.`,...(_=(O=r.parameters)==null?void 0:O.docs)==null?void 0:_.description}}};var k,G,N,P,W;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    value: 'This is read-only content that cannot be modified.',
    placeholder: 'This textarea is read-only'
  }
}`,...(N=(G=s.parameters)==null?void 0:G.docs)==null?void 0:N.source},description:{story:`A read-only textarea.
Shows how the component appears when content can be viewed but not modified.`,...(W=(P=s.parameters)==null?void 0:P.docs)==null?void 0:W.description}}};var A,E,q,j,C;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    className: 'min-h-[12rem] font-mono',
    placeholder: 'This textarea has custom styling...'
  }
}`,...(q=(E=o.parameters)==null?void 0:E.docs)==null?void 0:q.source},description:{story:`Textarea with custom styling.
Demonstrates how to apply custom styles using className.`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.description}}};var M,R,V,z,F;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    isGrowable: true,
    placeholder: 'This textarea will grow as you type...'
  }
}`,...(V=(R=n.parameters)==null?void 0:R.docs)==null?void 0:V.source},description:{story:`Auto-growing textarea.
Shows how the textarea expands vertically as content is added.`,...(F=(z=n.parameters)==null?void 0:z.docs)==null?void 0:F.description}}};const B=["Playground","Default","WithValue","Disabled","ReadOnly","WithCustomStyle","Growable"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Disabled:r,Growable:n,Playground:e,ReadOnly:s,WithCustomStyle:o,WithValue:a,__namedExportsOrder:B,default:U},Symbol.toStringTag,{value:"Module"}));export{e as P,J as T};
