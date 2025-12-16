import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as h}from"./index-D4H_InIO.js";import{I as ie}from"./Input-cPRzvIH7.js";import"./useAriaDisabled-DHTVgRPt.js";import"./styles-Bqt2ynIu.js";import"./utils-CU3My8Oi.js";const pe=()=>{const[y,ce]=h.useState([]),[u,de]=h.useState([]),le=e=>{const s={timestamp:Date.now(),key:e.key,type:"KeyDown"};ce(m=>[s,...m].slice(0,10)),console.log("onKeyDown:",e)},me=e=>{const s={timestamp:Date.now(),key:e.key,type:"KeyUp"};de(m=>[s,...m].slice(0,10)),console.log("onKeyUp:",e)};return t.jsxs("div",{className:"space-y-4",children:[t.jsx(ie,{required:!0,id:"input-with-keyboard-events",placeholder:"Type here to see keyboard events...",onKeyDown:le,onKeyUp:me}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"mb-2 text-sm font-semibold",children:"onKeyDown Events (last 10):"}),t.jsx("div",{className:`max-h-56 space-y-1 overflow-y-auto rounded-md bg-base-200 p-3 font-mono
              text-xs`,children:y.length===0?t.jsx("div",{className:"text-muted-foreground",children:"No events yet..."}):y.map((e,s)=>t.jsxs("div",{className:"text-xs",children:[e.type,": ",e.key]},`${e.timestamp}-${e.type}-${s}`))})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"mb-2 text-sm font-semibold",children:"onKeyUp Events (last 10):"}),t.jsx("div",{className:`max-h-56 space-y-1 overflow-y-auto rounded-md bg-base-200 p-3 font-mono
              text-xs`,children:u.length===0?t.jsx("div",{className:"text-muted-foreground",children:"No events yet..."}):u.map((e,s)=>t.jsxs("div",{className:"text-xs",children:[e.type,": ",e.key]},`${e.timestamp}-${e.type}-${s}`))})]})]})]})};pe.__docgenInfo={description:"",methods:[],displayName:"InputWithKeyboardEvents"};const ye=`import { useState, type KeyboardEvent } from 'react';
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
`,we={title:"Inputs & Forms/Input",component:ie,parameters:{},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","search"],description:"The input type attribute",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Placeholder text for the input",table:{type:{summary:"string"}}},value:{control:"text",description:"The value of the input",table:{type:{summary:"string"}}},transform:{control:"select",options:["uppercase","lowercase","trim","none"],description:"Text transformation to apply to the input value",table:{type:{summary:"TextTransform | TextTransform[]"}}},isDisabled:{control:"boolean",description:"Whether the input is disabled",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the input"}}},r={args:{placeholder:"Enter text..."}},o={args:{type:"email",placeholder:"Enter email..."}},a={args:{value:"Hello World",placeholder:"Enter text..."}},n={args:{isDisabled:!0,placeholder:"Disabled input"}},i={args:{transform:"uppercase",placeholder:"Text will be uppercase"}},p={args:{transform:"lowercase",placeholder:"Text will be lowercase"}},c={args:{transform:"trim",placeholder:"Whitespace will be trimmed"}},d={args:{transform:["trim","uppercase"],placeholder:"Text will be trimmed and uppercase"}},l={args:{transform:"uppercase"},render:()=>t.jsx(pe,{}),parameters:{docs:{source:{code:ye}}}};var g,x,v,f,w;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source},description:{story:`The default state of the Input component.
Shows a basic text input field with placeholder text.`,...(w=(f=r.parameters)==null?void 0:f.docs)==null?void 0:w.description}}};var b,K,D,E,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'Enter email...'
  }
}`,...(D=(K=o.parameters)==null?void 0:K.docs)==null?void 0:D.source},description:{story:`Input with a specific type attribute.
Demonstrates using the input as an email field.`,...(T=(E=o.parameters)==null?void 0:E.docs)==null?void 0:T.description}}};var k,N,W,L,I;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    value: 'Hello World',
    placeholder: 'Enter text...'
  }
}`,...(W=(N=a.parameters)==null?void 0:N.docs)==null?void 0:W.source},description:{story:`Input with a pre-filled value.
Shows how the input appears with initial text content.`,...(I=(L=a.parameters)==null?void 0:L.docs)==null?void 0:I.description}}};var U,S,j,$,H;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    placeholder: 'Disabled input'
  }
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source},description:{story:`A disabled input field.
Shows how the input appears when it's not interactive.`,...(H=($=n.parameters)==null?void 0:$.docs)==null?void 0:H.description}}};var M,_,q,A,C;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    transform: 'uppercase',
    placeholder: 'Text will be uppercase'
  }
}`,...(q=(_=i.parameters)==null?void 0:_.docs)==null?void 0:q.source},description:{story:`Input with automatic text transformation to uppercase.
Demonstrates the transform feature for uppercase text.`,...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.description}}};var P,V,F,O,R;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    transform: 'lowercase',
    placeholder: 'Text will be lowercase'
  }
}`,...(F=(V=p.parameters)==null?void 0:V.docs)==null?void 0:F.source},description:{story:`Input with automatic text transformation to lowercase.
Demonstrates the transform feature for lowercase text.`,...(R=(O=p.parameters)==null?void 0:O.docs)==null?void 0:R.description}}};var z,B,G,J,Q;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    transform: 'trim',
    placeholder: 'Whitespace will be trimmed'
  }
}`,...(G=(B=c.parameters)==null?void 0:B.docs)==null?void 0:G.source},description:{story:`Input with automatic whitespace trimming.
Shows how the transform feature removes leading and trailing spaces.`,...(Q=(J=c.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var X,Y,Z,ee,te;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    transform: ['trim', 'uppercase'],
    placeholder: 'Text will be trimmed and uppercase'
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:`Input with multiple text transformations.
Demonstrates combining multiple transform operations.`,...(te=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var se,re,oe,ae,ne;l.parameters={...l.parameters,docs:{...(se=l.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(re=l.parameters)==null?void 0:re.docs)==null?void 0:oe.source},description:{story:`Input with onKeyDown and onKeyUp event handlers.
Demonstrates that keyboard events are properly handled.
Press any key to see the events logged in the console.`,...(ne=(ae=l.parameters)==null?void 0:ae.docs)==null?void 0:ne.description}}};const be=["Default","WithType","WithValue","Disabled","WithTransformUppercase","WithTransformLowercase","WithTransformTrim","WithMultipleTransforms","WithKeyboardEvents"];export{r as Default,n as Disabled,l as WithKeyboardEvents,d as WithMultipleTransforms,p as WithTransformLowercase,c as WithTransformTrim,i as WithTransformUppercase,o as WithType,a as WithValue,be as __namedExportsOrder,we as default};
