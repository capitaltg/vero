import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{S as n}from"./SwitchGroup-D7mmUHAz.js";import{r as s}from"./index-B0WjJBI_.js";import"./useFormGroupLayout-COYHMi0M.js";import"./utils-CU3My8Oi.js";import"./Switch-lNpXV4pP.js";import"./useAriaDisabled-BVkOu7OW.js";import"./form-controls-UvU-3cIH.js";import"./styles-CafxXXJc.js";import"./index-B5oA2Zbg.js";import"./index-EiwPuDyL.js";import"./index-B8vvyUb-.js";import"./index-DBA0bpW4.js";import"./index-CoRj-x2w.js";import"./index-KklXjS-Z.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CwPCC0ZT.js";import"./index-BOrrHd12.js";import"./Label-ByDnJzrD.js";const re=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],ee=()=>{const[t,o]=s.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{columns:2,options:re,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};ee.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupDefault"};const le=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"}],te=()=>{const[t,o]=s.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:le,orientation:"horizontal",value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};te.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupHorizontal"};const ce=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],oe=()=>{const[t,o]=s.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:ce,orientation:"vertical",value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};oe.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupVertical"};const ue=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],ne=()=>{const[t,o]=s.useState(["notifications","emails"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{columns:2,options:ue,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};ne.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupWithSelection"};const de=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],ae=()=>{const[t,o]=s.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{columns:1,options:de,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};ae.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupSingleColumn"};const pe=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],se=()=>{const[t,o]=s.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{columns:3,options:pe,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};se.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupThreeColumns"};const me=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"},{id:"backup",label:"Automatic backup"},{id:"location",label:"Location tracking (disabled)",isDisabled:!0},{id:"sync",label:"Cloud sync"},{id:"analytics",label:"Usage analytics (disabled)",isDisabled:!0},{id:"beta",label:"Beta features"}],ie=()=>{const[t,o]=s.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{columns:2,options:me,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};ie.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupWithManyOptions"};const he=`import { useState } from 'react';
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
`,ge=`import { useState } from 'react';
import { SwitchGroup } from '../src/SwitchGroup';

const options = [
  { id: 'notifications', label: 'Enable notifications' },
  { id: 'emails', label: 'Receive emails' },
  { id: 'marketing', label: 'Marketing communications' },
];

export const SwitchGroupHorizontal = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <SwitchGroup options={options} orientation="horizontal" value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,be=`import { useState } from 'react';
import { SwitchGroup } from '../src/SwitchGroup';

const options = [
  { id: 'notifications', label: 'Enable notifications' },
  { id: 'emails', label: 'Receive emails' },
  { id: 'marketing', label: 'Marketing communications' },
  { id: 'updates', label: 'Auto-updates' },
];

export const SwitchGroupVertical = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <SwitchGroup options={options} orientation="vertical" value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,Se=`import { useState } from 'react';
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
`,ve=`import { useState } from 'react';
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
`,fe=`import { useState } from 'react';
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
`,we=`import { useState } from 'react';
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
`,a=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],He={title:"Inputs & Forms/SwitchGroup",component:n,parameters:{},argTypes:{value:{control:"object",description:"Array of selected switch IDs",type:{name:"array",value:{name:"string"},required:!1}},onChange:{description:"Callback when selection changes",type:{name:"function",required:!0}},options:{control:"object",description:"Array of switch options",type:{name:"array",value:{name:"object",value:{}},required:!0}},orientation:{control:"radio",options:["horizontal","vertical"],description:"Layout orientation of the switch group",type:{name:"string",required:!1},table:{type:{summary:"horizontal | vertical"}}},columns:{control:"radio",options:[1,2,3,4],description:"Number of columns in the grid (only applies when orientation is vertical)",type:{name:"number",required:!1}}},tags:["autodocs"]},i={args:{options:a,value:[],onChange:()=>{}},tags:["!autodocs"]},r={render:()=>e.jsx(ee,{}),args:{options:a,columns:2,value:[],onChange:()=>{}},parameters:{docs:{source:{code:he,language:"tsx"}}}},l={render:()=>e.jsx(te,{}),args:{options:a,value:[],onChange:()=>{},orientation:"horizontal"},parameters:{docs:{source:{code:ge,language:"tsx"}}}},c={render:()=>e.jsx(oe,{}),args:{options:a,value:[],onChange:()=>{},orientation:"vertical"},parameters:{docs:{source:{code:be,language:"tsx"}}}},u={render:()=>e.jsx(ne,{}),args:{options:a,value:["notifications","emails"],onChange:()=>{},columns:2},parameters:{docs:{source:{code:Se,language:"tsx"}}}},d={render:()=>e.jsx(ae,{}),args:{options:a,columns:1,value:[],onChange:()=>{}},parameters:{docs:{source:{code:ve,language:"tsx"}}}},p={render:()=>e.jsx(se,{}),args:{options:a,columns:3,value:[],onChange:()=>{}},parameters:{docs:{source:{code:fe,language:"tsx"}}}},m={render:()=>e.jsx(ie,{}),args:{options:[...a,{id:"backup",label:"Automatic backup"},{id:"location",label:"Location tracking (disabled)",isDisabled:!0},{id:"sync",label:"Cloud sync"},{id:"analytics",label:"Usage analytics (disabled)",isDisabled:!0},{id:"beta",label:"Beta features"}],columns:2,value:[],onChange:()=>{}},parameters:{docs:{source:{code:we,language:"tsx"}}}};var h,g,b,S,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {}
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source},description:{story:`Interactive playground for the SwitchGroup component.
Use the controls to experiment with different props and states.`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.description}}};var f,w,x,y,C;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(w=r.parameters)==null?void 0:w.docs)==null?void 0:x.source},description:{story:`The default state of the SwitchGroup component.
Shows a group of switches arranged in a single column with no initial selections.`,...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.description}}};var G,j,k,N,D;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <SwitchGroupHorizontal />,
  args: {
    options,
    value: [],
    onChange: () => {},
    orientation: 'horizontal'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeHorizontal,
        language: 'tsx'
      }
    }
  }
}`,...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source},description:{story:`SwitchGroup with horizontal layout.
Shows switches arranged in a horizontal line.`,...(D=(N=l.parameters)==null?void 0:N.docs)==null?void 0:D.description}}};var V,I,M,A,E;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <SwitchGroupVertical />,
  args: {
    options,
    value: [],
    onChange: () => {},
    orientation: 'vertical'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeVertical,
        language: 'tsx'
      }
    }
  }
}`,...(M=(I=c.parameters)==null?void 0:I.docs)==null?void 0:M.source},description:{story:`SwitchGroup with vertical layout.
Shows switches stacked vertically in one column.`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.description}}};var R,z,W,_,T;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(z=u.parameters)==null?void 0:z.docs)==null?void 0:W.source},description:{story:`SwitchGroup with pre-selected values.
Demonstrates how the group appears with multiple switches toggled on.`,...(T=(_=u.parameters)==null?void 0:_.docs)==null?void 0:T.description}}};var O,H,$,q,L;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...($=(H=d.parameters)==null?void 0:H.docs)==null?void 0:$.source},description:{story:`SwitchGroup in a single column layout.
Shows switches stacked vertically in one column.`,...(L=(q=d.parameters)==null?void 0:q.docs)==null?void 0:L.description}}};var U,B,P,F,J;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(P=(B=p.parameters)==null?void 0:B.docs)==null?void 0:P.source},description:{story:`SwitchGroup in a three-column layout.
Demonstrates how switches can be arranged in multiple columns.`,...(J=(F=p.parameters)==null?void 0:F.docs)==null?void 0:J.description}}};var K,Q,X,Y,Z;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:`SwitchGroup with an extended list of options.
Shows how the component handles a larger set of switches, including disabled states.`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};const $e=["Playground","Default","Horizontal","Vertical","WithSelection","SingleColumn","ThreeColumns","WithManyOptions"];export{r as Default,l as Horizontal,i as Playground,d as SingleColumn,p as ThreeColumns,c as Vertical,m as WithManyOptions,u as WithSelection,$e as __namedExportsOrder,He as default};
