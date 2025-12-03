import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{S as c}from"./Switch-BtKdx0MS.js";import{r as a}from"./index-D4H_InIO.js";import"./Label-DsEYheYn.js";import"./styles-BasBkTzl.js";import"./utils-CU3My8Oi.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-DB-GfMvg.js";import"./index-DXU_LAI1.js";import"./index-DDORxvzF.js";const q=()=>{const[s,t]=a.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{id:"airplane-mode",isChecked:s,label:"Airplane Mode",onCheckedChange:()=>t(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Switch ",s?"is on":"is off"]})]})};q.__docgenInfo={description:"",methods:[],displayName:"SwitchDefault"};const z=()=>{const[s,t]=a.useState(!0);return a.useEffect(()=>{t(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{id:"notifications",isChecked:s,label:"Notifications",onCheckedChange:()=>t(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Switch ",s?"is on":"is off"]})]})};z.__docgenInfo={description:"",methods:[],displayName:"SwitchChecked"};const B=()=>{const[s,t]=a.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{id:"disabled",isChecked:s,isDisabled:!0,label:"Disabled switch",onCheckedChange:()=>t(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Switch ",s?"is on":"is off"]})]})};B.__docgenInfo={description:"",methods:[],displayName:"SwitchDisabled"};const G=()=>{const[s,t]=a.useState(!0);return a.useEffect(()=>{t(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{id:"disabled-checked",isChecked:s,isDisabled:!0,label:"Disabled checked switch",onCheckedChange:()=>t(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Switch ",s?"is on":"is off"]})]})};G.__docgenInfo={description:"",methods:[],displayName:"SwitchDisabledChecked"};const H=()=>{const[s,t]=a.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{id:"dark-mode",isChecked:s,label:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-bold",children:"Dark Mode"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"Enable dark mode theme"})]}),onCheckedChange:()=>t(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Switch ",s?"is on":"is off"]})]})};H.__docgenInfo={description:"",methods:[],displayName:"SwitchWithCustomLabel"};const J=`import { useState } from 'react';
import { Switch } from '../src/Switch';

export const SwitchDefault = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Switch
        id="airplane-mode"
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
        id="notifications"
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
        id="disabled"
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
        id="disabled-checked"
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
        id="dark-mode"
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
`,me={title:"Inputs & Forms/Switch",component:c,parameters:{},argTypes:{isChecked:{control:"boolean"},isDisabled:{control:"boolean"},onCheckedChange:{action:"checked changed"}},tags:["autodocs"]},o={args:{label:"Airplane Mode",id:"airplane-mode"},tags:["!autodocs"]},d={render:()=>e.jsx(q,{}),args:{label:"Airplane Mode",id:"airplane-mode"},parameters:{docs:{source:{code:J,language:"tsx"}}}},i={render:()=>e.jsx(z,{}),args:{label:"Notifications",id:"notifications",isChecked:!0},parameters:{docs:{source:{code:K,language:"tsx"}}}},r={render:()=>e.jsx(B,{}),args:{label:"Disabled switch",id:"disabled",isDisabled:!0},parameters:{docs:{source:{code:Q,language:"tsx"}}}},n={render:()=>e.jsx(G,{}),args:{label:"Disabled checked switch",id:"disabled-checked",isChecked:!0,isDisabled:!0},parameters:{docs:{source:{code:V,language:"tsx"}}}},l={render:()=>e.jsx(H,{}),args:{label:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-bold",children:"Dark Mode"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"Enable dark mode theme"})]}),id:"dark-mode"},parameters:{docs:{source:{code:X,language:"tsx"}}}};var h,m,p,u,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Airplane Mode',
    id: 'airplane-mode'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:`Interactive playground for the Switch component.
Use the controls to experiment with different props and states.`,...(C=(u=o.parameters)==null?void 0:u.docs)==null?void 0:C.description}}};var f,k,b,g,x;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <SwitchDefault />,
  args: {
    label: 'Airplane Mode',
    id: 'airplane-mode'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
        language: 'tsx'
      }
    }
  }
}`,...(b=(k=d.parameters)==null?void 0:k.docs)==null?void 0:b.source},description:{story:`The default state of the Switch component.
Shows a basic toggle switch with a label.`,...(x=(g=d.parameters)==null?void 0:g.docs)==null?void 0:x.description}}};var w,S,D,N,j;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <SwitchChecked />,
  args: {
    label: 'Notifications',
    id: 'notifications',
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
}`,...(D=(S=i.parameters)==null?void 0:S.docs)==null?void 0:D.source},description:{story:`A switch in its checked state.
Demonstrates how the switch appears when toggled on.`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.description}}};var y,v,I,E,_;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <SwitchDisabled />,
  args: {
    label: 'Disabled switch',
    id: 'disabled',
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
}`,...(I=(v=r.parameters)==null?void 0:v.docs)==null?void 0:I.source},description:{story:`A disabled switch.
Shows how the switch appears when it's not interactive.`,...(_=(E=r.parameters)==null?void 0:E.docs)==null?void 0:_.description}}};var A,M,L,W,P;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <SwitchDisabledChecked />,
  args: {
    label: 'Disabled checked switch',
    id: 'disabled-checked',
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
}`,...(L=(M=n.parameters)==null?void 0:M.docs)==null?void 0:L.source},description:{story:`A disabled switch in its checked state.
Demonstrates a non-interactive switch that's toggled on.`,...(P=(W=n.parameters)==null?void 0:W.docs)==null?void 0:P.description}}};var R,T,F,O,U;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <SwitchWithCustomLabel />,
  args: {
    label: <div className="flex flex-col">
        <span className="font-bold">Dark Mode</span>
        <span className="text-sm text-muted-foreground">Enable dark mode theme</span>
      </div>,
    id: 'dark-mode'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithCustomLabel,
        language: 'tsx'
      }
    }
  }
}`,...(F=(T=l.parameters)==null?void 0:T.docs)==null?void 0:F.source},description:{story:`A switch with custom label content.
Shows how to use rich content in the switch label.`,...(U=(O=l.parameters)==null?void 0:O.docs)==null?void 0:U.description}}};const pe=["Playground","Default","Checked","Disabled","DisabledChecked","WithCustomLabel"];export{i as Checked,d as Default,r as Disabled,n as DisabledChecked,o as Playground,l as WithCustomLabel,pe as __namedExportsOrder,me as default};
