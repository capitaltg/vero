import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{S as h}from"./Switch-D-k5vrVh.js";import{r as c}from"./index-B0WjJBI_.js";const U=()=>{const[s,t]=c.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(h,{id:"switch-airplane-mode",isChecked:s,label:"Airplane Mode",onCheckedChange:()=>t(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Switch ",s?"is on":"is off"]})]})};U.__docgenInfo={description:"",methods:[],displayName:"SwitchDefault"};const q=()=>{const[s,t]=c.useState(!0);return c.useEffect(()=>{t(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(h,{id:"switch-notifications",isChecked:s,label:"Notifications",onCheckedChange:()=>t(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Switch ",s?"is on":"is off"]})]})};q.__docgenInfo={description:"",methods:[],displayName:"SwitchChecked"};const B=()=>{const[s,t]=c.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(h,{id:"switch-disabled",isChecked:s,isDisabled:!0,label:"Disabled switch",onCheckedChange:()=>t(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Switch ",s?"is on":"is off"]})]})};B.__docgenInfo={description:"",methods:[],displayName:"SwitchDisabled"};const G=()=>{const[s,t]=c.useState(!0);return c.useEffect(()=>{t(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(h,{id:"switch-disabled-checked",isChecked:s,isDisabled:!0,label:"Disabled checked switch",onCheckedChange:()=>t(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Switch ",s?"is on":"is off"]})]})};G.__docgenInfo={description:"",methods:[],displayName:"SwitchDisabledChecked"};const H=()=>{const[s,t]=c.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(h,{id:"switch-dark-mode",isChecked:s,label:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-bold",children:"Dark Mode"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"Enable dark mode theme"})]}),onCheckedChange:()=>t(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Switch ",s?"is on":"is off"]})]})};H.__docgenInfo={description:"",methods:[],displayName:"SwitchWithCustomLabel"};const J=`import { useState } from 'react';
import { Switch } from '../src/Switch';

export const SwitchDefault = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Switch
        id="switch-airplane-mode"
        isChecked={isChecked}
        label="Airplane Mode"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">Switch {isChecked ? 'is on' : 'is off'}</p>
    </div>
  );
};
`,K=`import { useEffect, useState } from 'react';
import { Switch } from '../src/Switch';

export const SwitchChecked = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <div className="space-y-4">
      <Switch
        id="switch-notifications"
        isChecked={isChecked}
        label="Notifications"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">Switch {isChecked ? 'is on' : 'is off'}</p>
    </div>
  );
};
`,Q=`import { useState } from 'react';
import { Switch } from '../src/Switch';

export const SwitchDisabled = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Switch
        id="switch-disabled"
        isChecked={isChecked}
        isDisabled={true}
        label="Disabled switch"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">Switch {isChecked ? 'is on' : 'is off'}</p>
    </div>
  );
};
`,V=`import { useEffect, useState } from 'react';
import { Switch } from '../src/Switch';

export const SwitchDisabledChecked = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <div className="space-y-4">
      <Switch
        id="switch-disabled-checked"
        isChecked={isChecked}
        isDisabled={true}
        label="Disabled checked switch"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">Switch {isChecked ? 'is on' : 'is off'}</p>
    </div>
  );
};
`,X=`import { useState } from 'react';
import { Switch } from '../src/Switch';

export const SwitchWithCustomLabel = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Switch
        id="switch-dark-mode"
        isChecked={isChecked}
        label={
          <div className="flex flex-col">
            <span className="font-bold">Dark Mode</span>
            <span className="text-sm text-muted-foreground">Enable dark mode theme</span>
          </div>
        }
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">Switch {isChecked ? 'is on' : 'is off'}</p>
    </div>
  );
};
`,Y={title:"Inputs & Forms/Switch",component:h,parameters:{},argTypes:{isChecked:{control:"boolean"},isDisabled:{control:"boolean"},onCheckedChange:{action:"checked changed"}}},a={args:{label:"Airplane Mode",id:"switch-playground"}},i={render:()=>e.jsx(U,{}),args:{label:"Airplane Mode",id:"switch-airplane-mode"},parameters:{docs:{source:{code:J,language:"tsx"}}}},o={render:()=>e.jsx(q,{}),args:{label:"Notifications",id:"switch-notifications",isChecked:!0},parameters:{docs:{source:{code:K,language:"tsx"}}}},d={render:()=>e.jsx(B,{}),args:{label:"Disabled switch",id:"switch-disabled",isDisabled:!0},parameters:{docs:{source:{code:Q,language:"tsx"}}}},r={render:()=>e.jsx(G,{}),args:{label:"Disabled checked switch",id:"switch-disabled-checked",isChecked:!0,isDisabled:!0},parameters:{docs:{source:{code:V,language:"tsx"}}}},n={render:()=>e.jsx(H,{}),args:{label:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-bold",children:"Dark Mode"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"Enable dark mode theme"})]}),id:"switch-dark-mode"},parameters:{docs:{source:{code:X,language:"tsx"}}}};var l,m,u,p,C;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Airplane Mode',
    id: 'switch-playground'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(C=(p=a.parameters)==null?void 0:p.docs)==null?void 0:C.description}}};var f,k,w,b,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <SwitchDefault />,
  args: {
    label: 'Airplane Mode',
    id: 'switch-airplane-mode'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
        language: 'tsx'
      }
    }
  }
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source},description:{story:`The default state of the Switch component.
Shows a basic toggle switch with a label.`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.description}}};var x,S,D,N,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <SwitchChecked />,
  args: {
    label: 'Notifications',
    id: 'switch-notifications',
    isChecked: true
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeChecked,
        language: 'tsx'
      }
    }
  }
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source},description:{story:`A switch in its checked state.
Demonstrates how the switch appears when toggled on.`,...(y=(N=o.parameters)==null?void 0:N.docs)==null?void 0:y.description}}};var j,v,I,_,E;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <SwitchDisabled />,
  args: {
    label: 'Disabled switch',
    id: 'switch-disabled',
    isDisabled: true
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDisabled,
        language: 'tsx'
      }
    }
  }
}`,...(I=(v=d.parameters)==null?void 0:v.docs)==null?void 0:I.source},description:{story:`A disabled switch.
Shows how the switch appears when it's not interactive.`,...(E=(_=d.parameters)==null?void 0:_.docs)==null?void 0:E.description}}};var M,A,L,W,T;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <SwitchDisabledChecked />,
  args: {
    label: 'Disabled checked switch',
    id: 'switch-disabled-checked',
    isChecked: true,
    isDisabled: true
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDisabledChecked,
        language: 'tsx'
      }
    }
  }
}`,...(L=(A=r.parameters)==null?void 0:A.docs)==null?void 0:L.source},description:{story:`A disabled switch in its checked state.
Demonstrates a non-interactive switch that's toggled on.`,...(T=(W=r.parameters)==null?void 0:W.docs)==null?void 0:T.description}}};var P,O,z,F,R;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <SwitchWithCustomLabel />,
  args: {
    label: <div className="flex flex-col">
        <span className="font-bold">Dark Mode</span>
        <span className="text-sm text-muted-foreground">Enable dark mode theme</span>
      </div>,
    id: 'switch-dark-mode'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithCustomLabel,
        language: 'tsx'
      }
    }
  }
}`,...(z=(O=n.parameters)==null?void 0:O.docs)==null?void 0:z.source},description:{story:`A switch with custom label content.
Shows how to use rich content in the switch label.`,...(R=(F=n.parameters)==null?void 0:F.docs)==null?void 0:R.description}}};const Z=["Playground","Default","Checked","Disabled","DisabledChecked","WithCustomLabel"],te=Object.freeze(Object.defineProperty({__proto__:null,Checked:o,Default:i,Disabled:d,DisabledChecked:r,Playground:a,WithCustomLabel:n,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{a as P,te as S};
