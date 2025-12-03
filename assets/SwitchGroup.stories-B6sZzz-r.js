import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{S as n}from"./SwitchGroup-Dha4p6bw.js";import{r as d}from"./index-D4H_InIO.js";import"./utils-CU3My8Oi.js";import"./Switch-BtKdx0MS.js";import"./Label-DsEYheYn.js";import"./styles-BasBkTzl.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-DB-GfMvg.js";import"./index-DXU_LAI1.js";import"./index-DDORxvzF.js";const H=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],B=()=>{const[t,o]=d.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{columns:2,options:H,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};B.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupDefault"};const J=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],L=()=>{const[t,o]=d.useState(["notifications","emails"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{columns:2,options:J,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};L.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupWithSelection"};const K=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],P=()=>{const[t,o]=d.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{columns:1,options:K,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};P.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupSingleColumn"};const Q=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],F=()=>{const[t,o]=d.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{columns:3,options:Q,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};F.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupThreeColumns"};const X=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"},{id:"backup",label:"Automatic backup"},{id:"location",label:"Location tracking (disabled)",isDisabled:!0},{id:"sync",label:"Cloud sync"},{id:"analytics",label:"Usage analytics (disabled)",isDisabled:!0},{id:"beta",label:"Beta features"}],z=()=>{const[t,o]=d.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{columns:2,options:X,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};z.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupWithManyOptions"};const Y=`import { useState } from 'react';
import { SwitchGroup } from '../src/SwitchGroup';

const options = [
  { id: 'notifications', label: 'Enable notifications' },
  { id: 'emails', label: 'Receive emails' },
  { id: 'marketing', label: 'Marketing communications' },
  { id: 'updates', label: 'Auto-updates' },
];

export const SwitchGroupDefault = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <SwitchGroup columns={2} options={options} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,Z=`import { useState } from 'react';
import { SwitchGroup } from '../src/SwitchGroup';

const options = [
  { id: 'notifications', label: 'Enable notifications' },
  { id: 'emails', label: 'Receive emails' },
  { id: 'marketing', label: 'Marketing communications' },
  { id: 'updates', label: 'Auto-updates' },
];

export const SwitchGroupWithSelection = () => {
  const [value, setValue] = useState<string[]>(['notifications', 'emails']);
  return (
    <div className="space-y-4">
      <SwitchGroup columns={2} options={options} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,ee=`import { useState } from 'react';
import { SwitchGroup } from '../src/SwitchGroup';

const options = [
  { id: 'notifications', label: 'Enable notifications' },
  { id: 'emails', label: 'Receive emails' },
  { id: 'marketing', label: 'Marketing communications' },
  { id: 'updates', label: 'Auto-updates' },
];

export const SwitchGroupSingleColumn = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <SwitchGroup columns={1} options={options} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,te=`import { useState } from 'react';
import { SwitchGroup } from '../src/SwitchGroup';

const options = [
  { id: 'notifications', label: 'Enable notifications' },
  { id: 'emails', label: 'Receive emails' },
  { id: 'marketing', label: 'Marketing communications' },
  { id: 'updates', label: 'Auto-updates' },
];

export const SwitchGroupThreeColumns = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <SwitchGroup columns={3} options={options} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,oe=`import { useState } from 'react';
import { SwitchGroup } from '../src/SwitchGroup';

const options = [
  { id: 'notifications', label: 'Enable notifications' },
  { id: 'emails', label: 'Receive emails' },
  { id: 'marketing', label: 'Marketing communications' },
  { id: 'updates', label: 'Auto-updates' },
  { id: 'backup', label: 'Automatic backup' },
  { id: 'location', label: 'Location tracking (disabled)', isDisabled: true },
  { id: 'sync', label: 'Cloud sync' },
  { id: 'analytics', label: 'Usage analytics (disabled)', isDisabled: true },
  { id: 'beta', label: 'Beta features' },
];

export const SwitchGroupWithManyOptions = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <SwitchGroup columns={2} options={options} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,s=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],ve={title:"Inputs & Forms/SwitchGroup",component:n,parameters:{},argTypes:{value:{control:"object",description:"Array of selected switch IDs",type:{name:"array",value:{name:"string"},required:!1}},onChange:{description:"Callback when selection changes",type:{name:"function",required:!0}},options:{control:"object",description:"Array of switch options",type:{name:"array",value:{name:"object",value:{}},required:!0}},columns:{control:"radio",options:[1,2,3,4],description:"Number of columns in the grid",type:{name:"number",required:!1}}},tags:["autodocs"]},a={args:{options:s,value:[],onChange:()=>{}},tags:["!autodocs"]},i={render:()=>e.jsx(B,{}),args:{options:s,columns:2,value:[],onChange:()=>{}},parameters:{docs:{source:{code:Y,language:"tsx"}}}},r={render:()=>e.jsx(L,{}),args:{options:s,value:["notifications","emails"],onChange:()=>{},columns:2},parameters:{docs:{source:{code:Z,language:"tsx"}}}},l={render:()=>e.jsx(P,{}),args:{options:s,columns:1,value:[],onChange:()=>{}},parameters:{docs:{source:{code:ee,language:"tsx"}}}},c={render:()=>e.jsx(F,{}),args:{options:s,columns:3,value:[],onChange:()=>{}},parameters:{docs:{source:{code:te,language:"tsx"}}}},u={render:()=>e.jsx(z,{}),args:{options:[...s,{id:"backup",label:"Automatic backup"},{id:"location",label:"Location tracking (disabled)",isDisabled:!0},{id:"sync",label:"Cloud sync"},{id:"analytics",label:"Usage analytics (disabled)",isDisabled:!0},{id:"beta",label:"Beta features"}],columns:2,value:[],onChange:()=>{}},parameters:{docs:{source:{code:oe,language:"tsx"}}}};var p,m,g,h,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {}
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source},description:{story:`Interactive playground for the SwitchGroup component.
Use the controls to experiment with different props and states.`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.description}}};var S,f,v,w,x;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <SwitchGroupDefault />,
  args: {
    options,
    columns: 2,
    value: [],
    onChange: () => {}
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
        language: 'tsx'
      }
    }
  }
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:`The default state of the SwitchGroup component.
Shows a group of switches arranged in a single column with no initial selections.`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.description}}};var y,C,G,k,j;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <SwitchGroupWithSelection />,
  args: {
    options,
    value: ['notifications', 'emails'],
    onChange: () => {},
    columns: 2
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithSelection,
        language: 'tsx'
      }
    }
  }
}`,...(G=(C=r.parameters)==null?void 0:C.docs)==null?void 0:G.source},description:{story:`SwitchGroup with pre-selected values.
Demonstrates how the group appears with multiple switches toggled on.`,...(j=(k=r.parameters)==null?void 0:k.docs)==null?void 0:j.description}}};var D,N,M,I,A;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <SwitchGroupSingleColumn />,
  args: {
    options,
    columns: 1,
    value: [],
    onChange: () => {}
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeSingleColumn,
        language: 'tsx'
      }
    }
  }
}`,...(M=(N=l.parameters)==null?void 0:N.docs)==null?void 0:M.source},description:{story:`SwitchGroup in a single column layout.
Shows switches stacked vertically in one column.`,...(A=(I=l.parameters)==null?void 0:I.docs)==null?void 0:A.description}}};var W,V,E,R,_;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <SwitchGroupThreeColumns />,
  args: {
    options,
    columns: 3,
    value: [],
    onChange: () => {}
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeThreeColumns,
        language: 'tsx'
      }
    }
  }
}`,...(E=(V=c.parameters)==null?void 0:V.docs)==null?void 0:E.source},description:{story:`SwitchGroup in a three-column layout.
Demonstrates how switches can be arranged in multiple columns.`,...(_=(R=c.parameters)==null?void 0:R.docs)==null?void 0:_.description}}};var T,O,U,$,q;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <SwitchGroupWithManyOptions />,
  args: {
    options: [...options, {
      id: 'backup',
      label: 'Automatic backup'
    }, {
      id: 'location',
      label: 'Location tracking (disabled)',
      isDisabled: true
    }, {
      id: 'sync',
      label: 'Cloud sync'
    }, {
      id: 'analytics',
      label: 'Usage analytics (disabled)',
      isDisabled: true
    }, {
      id: 'beta',
      label: 'Beta features'
    }],
    columns: 2,
    value: [],
    onChange: () => {}
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithManyOptions,
        language: 'tsx'
      }
    }
  }
}`,...(U=(O=u.parameters)==null?void 0:O.docs)==null?void 0:U.source},description:{story:`SwitchGroup with an extended list of options.
Shows how the component handles a larger set of switches, including disabled states.`,...(q=($=u.parameters)==null?void 0:$.docs)==null?void 0:q.description}}};const we=["Playground","Default","WithSelection","SingleColumn","ThreeColumns","WithManyOptions"];export{i as Default,a as Playground,l as SingleColumn,c as ThreeColumns,u as WithManyOptions,r as WithSelection,we as __namedExportsOrder,ve as default};
