import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as g}from"./index-B0WjJBI_.js";import{I as ue}from"./Input-BjeEkKn3.js";const ye=()=>{const[y,he]=g.useState([]),[h,ge]=g.useState([]),xe=e=>{const r={timestamp:Date.now(),key:e.key,type:"KeyDown"};he(u=>[r,...u].slice(0,10)),console.log("onKeyDown:",e)},fe=e=>{const r={timestamp:Date.now(),key:e.key,type:"KeyUp"};ge(u=>[r,...u].slice(0,10)),console.log("onKeyUp:",e)};return t.jsxs("div",{className:"space-y-4",children:[t.jsx(ue,{required:!0,id:"input-with-keyboard-events",placeholder:"Type here to see keyboard events...",onKeyDown:xe,onKeyUp:fe}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"mb-2 text-sm font-semibold",children:"onKeyDown Events (last 10):"}),t.jsx("div",{className:`max-h-56 space-y-1 overflow-y-auto rounded-md bg-base-200 p-3 font-mono
              text-xs`,children:y.length===0?t.jsx("div",{className:"text-muted-foreground",children:"No events yet..."}):y.map((e,r)=>t.jsxs("div",{className:"text-xs",children:[e.type,": ",e.key]},`${e.timestamp}-${e.type}-${r}`))})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"mb-2 text-sm font-semibold",children:"onKeyUp Events (last 10):"}),t.jsx("div",{className:`max-h-56 space-y-1 overflow-y-auto rounded-md bg-base-200 p-3 font-mono
              text-xs`,children:h.length===0?t.jsx("div",{className:"text-muted-foreground",children:"No events yet..."}):h.map((e,r)=>t.jsxs("div",{className:"text-xs",children:[e.type,": ",e.key]},`${e.timestamp}-${e.type}-${r}`))})]})]})]})};ye.__docgenInfo={description:"",methods:[],displayName:"InputWithKeyboardEvents"};const ve=`import { useState, type KeyboardEvent } from 'react';
import { Input } from '../src/Input';

type LogEntry = {
  timestamp: number;
  key: string;
  type: 'KeyDown' | 'KeyUp';
};

export const InputWithKeyboardEvents = () => {
  const [keyDownLog, setKeyDownLog] = useState<LogEntry[]>([]);
  const [keyUpLog, setKeyUpLog] = useState<LogEntry[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const logEntry: LogEntry = {
      timestamp: Date.now(),
      key: e.key,
      type: 'KeyDown',
    };
    setKeyDownLog(prev => [logEntry, ...prev].slice(0, 10));
    console.log('onKeyDown:', e);
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    const logEntry: LogEntry = {
      timestamp: Date.now(),
      key: e.key,
      type: 'KeyUp',
    };
    setKeyUpLog(prev => [logEntry, ...prev].slice(0, 10));
    console.log('onKeyUp:', e);
  };

  return (
    <div className="space-y-4">
      <Input
        required
        id="input-with-keyboard-events"
        placeholder="Type here to see keyboard events..."
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="mb-2 text-sm font-semibold">onKeyDown Events (last 10):</h3>
          <div
            className="max-h-56 space-y-1 overflow-y-auto rounded-md bg-base-200 p-3 font-mono
              text-xs"
          >
            {keyDownLog.length === 0 ? (
              <div className="text-muted-foreground">No events yet...</div>
            ) : (
              keyDownLog.map((log, idx) => (
                <div key={\`\${log.timestamp}-\${log.type}-\${idx}\`} className="text-xs">
                  {log.type}: {log.key}
                </div>
              ))
            )}
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold">onKeyUp Events (last 10):</h3>
          <div
            className="max-h-56 space-y-1 overflow-y-auto rounded-md bg-base-200 p-3 font-mono
              text-xs"
          >
            {keyUpLog.length === 0 ? (
              <div className="text-muted-foreground">No events yet...</div>
            ) : (
              keyUpLog.map((log, idx) => (
                <div key={\`\${log.timestamp}-\${log.type}-\${idx}\`} className="text-xs">
                  {log.type}: {log.key}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
`,be={title:"Inputs & Forms/Input",component:ue,parameters:{},argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","search"],description:"The input type attribute",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Placeholder text for the input",table:{type:{summary:"string"}}},value:{control:"text",description:"The value of the input",table:{type:{summary:"string"}}},transform:{control:"select",options:["uppercase","lowercase","trim","none"],table:{type:{summary:"TextTransform | TextTransform[]"}}},isDisabled:{control:"boolean",table:{type:{summary:"boolean"}}},required:{control:"boolean",description:"Marks the input as required for form validation. The form cannot be submitted without a value, and screen readers will announce the field as required.",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the input"}}},s={args:{"aria-label":"Example input",placeholder:"Enter text..."}},o={args:{placeholder:"Enter text..."}},a={args:{type:"email",placeholder:"Enter email..."}},n={args:{value:"Hello World",placeholder:"Enter text..."}},i={args:{isDisabled:!0,placeholder:"Disabled input"}},p={args:{transform:"uppercase",placeholder:"Text will be uppercase"}},c={args:{transform:"lowercase",placeholder:"Text will be lowercase"}},l={args:{transform:"trim",placeholder:"Whitespace will be trimmed"}},d={args:{transform:["trim","uppercase"],placeholder:"Text will be trimmed and uppercase"}},m={args:{transform:"uppercase"},render:()=>t.jsx(ye,{}),parameters:{docs:{source:{code:ve}}}};var x,f,v,b,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Example input',
    placeholder: 'Enter text...'
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.description}}};var K,E,D,T,k;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(D=(E=o.parameters)==null?void 0:E.docs)==null?void 0:D.source},description:{story:`The default state of the Input component.
Shows a basic text input field with placeholder text.`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.description}}};var N,I,W,L,U;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'Enter email...'
  }
}`,...(W=(I=a.parameters)==null?void 0:I.docs)==null?void 0:W.source},description:{story:`Input with a specific type attribute.
Demonstrates using the input as an email field.`,...(U=(L=a.parameters)==null?void 0:L.docs)==null?void 0:U.description}}};var S,j,$,_,M;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 'Hello World',
    placeholder: 'Enter text...'
  }
}`,...($=(j=n.parameters)==null?void 0:j.docs)==null?void 0:$.source},description:{story:`Input with a pre-filled value.
Shows how the input appears with initial text content.`,...(M=(_=n.parameters)==null?void 0:_.docs)==null?void 0:M.description}}};var P,q,H,O,A;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    placeholder: 'Disabled input'
  }
}`,...(H=(q=i.parameters)==null?void 0:q.docs)==null?void 0:H.source},description:{story:`A disabled input field.
Shows how the input appears when it's not interactive.`,...(A=(O=i.parameters)==null?void 0:O.docs)==null?void 0:A.description}}};var C,V,z,F,R;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    transform: 'uppercase',
    placeholder: 'Text will be uppercase'
  }
}`,...(z=(V=p.parameters)==null?void 0:V.docs)==null?void 0:z.source},description:{story:`Input with automatic text transformation to uppercase.
Demonstrates the transform feature for uppercase text.`,...(R=(F=p.parameters)==null?void 0:F.docs)==null?void 0:R.description}}};var B,G,J,Q,X;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    transform: 'lowercase',
    placeholder: 'Text will be lowercase'
  }
}`,...(J=(G=c.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:`Input with automatic text transformation to lowercase.
Demonstrates the transform feature for lowercase text.`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,ee,te,re;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    transform: 'trim',
    placeholder: 'Whitespace will be trimmed'
  }
}`,...(ee=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:`Input with automatic whitespace trimming.
Shows how the transform feature removes leading and trailing spaces.`,...(re=(te=l.parameters)==null?void 0:te.docs)==null?void 0:re.description}}};var se,oe,ae,ne,ie;d.parameters={...d.parameters,docs:{...(se=d.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    transform: ['trim', 'uppercase'],
    placeholder: 'Text will be trimmed and uppercase'
  }
}`,...(ae=(oe=d.parameters)==null?void 0:oe.docs)==null?void 0:ae.source},description:{story:`Input with multiple text transformations.
Demonstrates combining multiple transform operations.`,...(ie=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:ie.description}}};var pe,ce,le,de,me;m.parameters={...m.parameters,docs:{...(pe=m.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    transform: 'uppercase'
  },
  render: () => <InputWithKeyboardEvents />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithKeyboardEvents
      }
    }
  }
}`,...(le=(ce=m.parameters)==null?void 0:ce.docs)==null?void 0:le.source},description:{story:`Input with onKeyDown and onKeyUp event handlers.
Demonstrates that keyboard events are properly handled.
Press any key to see the events logged in the console.`,...(me=(de=m.parameters)==null?void 0:de.docs)==null?void 0:me.description}}};const we=["Playground","Default","WithType","WithValue","Disabled","WithTransformUppercase","WithTransformLowercase","WithTransformTrim","WithMultipleTransforms","WithKeyboardEvents"],Te=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Disabled:i,Playground:s,WithKeyboardEvents:m,WithMultipleTransforms:d,WithTransformLowercase:c,WithTransformTrim:l,WithTransformUppercase:p,WithType:a,WithValue:n,__namedExportsOrder:we,default:be},Symbol.toStringTag,{value:"Module"}));export{Te as I,s as P};
