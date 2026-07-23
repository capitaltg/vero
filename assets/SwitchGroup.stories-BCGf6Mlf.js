import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{S as s}from"./SwitchGroup-lp_37IUn.js";import{r as n}from"./index-B0WjJBI_.js";import{S as v}from"./Switch-XK50Afr0.js";import{B as Ve}from"./Button-BinwIYAK.js";import"./useFormGroupLayout-COYHMi0M.js";import"./utils-CU3My8Oi.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useAriaDisabled-BVkOu7OW.js";import"./form-controls-UvU-3cIH.js";import"./styles-CafxXXJc.js";import"./index-B5oA2Zbg.js";import"./index-EiwPuDyL.js";import"./index-B8vvyUb-.js";import"./index-DBA0bpW4.js";import"./index-CoRj-x2w.js";import"./index-KklXjS-Z.js";import"./index-CwPCC0ZT.js";import"./index-BOrrHd12.js";import"./Label-BalUMPW8.js";import"./constants-D9UEAID0.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-BeEkWZrd.js";const We=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],ve=()=>{const[t,o]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{columns:2,options:We,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};ve.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupDefault"};const Re=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"}],we=()=>{const[t,o]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:Re,orientation:"horizontal",value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};we.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupHorizontal"};const Ie=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],Ce=()=>{const[t,o]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:Ie,orientation:"vertical",value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};Ce.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupVertical"};const Me=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],xe=()=>{const[t,o]=n.useState(["notifications","emails"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{columns:2,options:Me,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};xe.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupWithSelection"};const Ae=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],ye=()=>{const[t,o]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{columns:1,options:Ae,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};ye.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupSingleColumn"};const Ee=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],Ge=()=>{const[t,o]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{columns:3,options:Ee,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};Ge.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupThreeColumns"};const _e=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"},{id:"backup",label:"Automatic backup"},{id:"location",label:"Location tracking (disabled)",isDisabled:!0},{id:"sync",label:"Cloud sync"},{id:"analytics",label:"Usage analytics (disabled)",isDisabled:!0},{id:"beta",label:"Beta features"}],ke=()=>{const[t,o]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{columns:2,options:_e,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};ke.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupWithManyOptions"};const je=()=>{const[t,o]=n.useState(["wifi"]),r=c=>w=>o(i=>w?[...i,c]:i.filter(C=>C!==c));return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(v,{id:"children-wifi",isChecked:t.includes("wifi"),label:"Wi-Fi",onCheckedChange:r("wifi")}),e.jsx(v,{id:"children-bluetooth",isChecked:t.includes("bluetooth"),label:"Bluetooth",onCheckedChange:r("bluetooth")})]})}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Enabled: ",t.join(", ")||"none"]})]})};je.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupWithChildren"};const Ne=()=>{const[t,o]=n.useState(["wifi"]),r=n.useRef(null),c=i=>C=>o(x=>C?[...x,i]:x.filter(De=>De!==i)),w=()=>{var i;(i=r.current)==null||i.focus()};return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(v,{ref:r,id:"ref-wifi",isChecked:t.includes("wifi"),label:"Wi-Fi",onCheckedChange:c("wifi")}),e.jsx(v,{id:"ref-bluetooth",isChecked:t.includes("bluetooth"),label:"Bluetooth",onCheckedChange:c("bluetooth")})]})}),e.jsx(Ve,{size:"sm",type:"button",variant:"primary",onClick:w,children:"Focus first switch"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Enabled: ",t.join(", ")||"none"]})]})};Ne.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupWithChildrenRef"};const ze=`import { useState } from 'react';
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
`,Be=`import { useState } from 'react';
import { Switch } from '../../Switch';
import { SwitchGroup } from '../src/SwitchGroup';

export const SwitchGroupWithChildren = () => {
  const [value, setValue] = useState<string[]>(['wifi']);

  const toggle = (id: string) => (isChecked: boolean) =>
    setValue(prev => (isChecked ? [...prev, id] : prev.filter(v => v !== id)));

  return (
    <div className="space-y-4">
      <SwitchGroup>
        <div className="flex flex-col gap-2">
          <Switch
            id="children-wifi"
            isChecked={value.includes('wifi')}
            label="Wi-Fi"
            onCheckedChange={toggle('wifi')}
          />
          <Switch
            id="children-bluetooth"
            isChecked={value.includes('bluetooth')}
            label="Bluetooth"
            onCheckedChange={toggle('bluetooth')}
          />
        </div>
      </SwitchGroup>
      <p className="text-sm text-muted-foreground">Enabled: {value.join(', ') || 'none'}</p>
    </div>
  );
};
`,Te=`import { Button } from '@/components/Button';
import { type ComponentRef, useRef, useState } from 'react';
import { Switch } from '../../Switch';
import { SwitchGroup } from '../src/SwitchGroup';

export const SwitchGroupWithChildrenRef = () => {
  const [value, setValue] = useState<string[]>(['wifi']);
  const firstSwitchRef = useRef<ComponentRef<typeof Switch>>(null);

  const toggle = (id: string) => (isChecked: boolean) =>
    setValue(prev => (isChecked ? [...prev, id] : prev.filter(v => v !== id)));

  const focusFirstSwitch = () => {
    firstSwitchRef.current?.focus();
  };

  return (
    <div className="space-y-4">
      <SwitchGroup>
        <div className="flex flex-col gap-2">
          <Switch
            ref={firstSwitchRef}
            id="ref-wifi"
            isChecked={value.includes('wifi')}
            label="Wi-Fi"
            onCheckedChange={toggle('wifi')}
          />
          <Switch
            id="ref-bluetooth"
            isChecked={value.includes('bluetooth')}
            label="Bluetooth"
            onCheckedChange={toggle('bluetooth')}
          />
        </div>
      </SwitchGroup>
      <Button size="sm" type="button" variant="primary" onClick={focusFirstSwitch}>
        Focus first switch
      </Button>
      <p className="text-sm text-muted-foreground">Enabled: {value.join(', ') || 'none'}</p>
    </div>
  );
};
`,Fe=`import { useState } from 'react';
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
`,Oe=`import { useState } from 'react';
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
`,He=`import { useState } from 'react';
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
`,$e=`import { useState } from 'react';
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
`,qe=`import { useState } from 'react';
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
`,Le=`import { useState } from 'react';
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
`,a=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],gt={title:"Inputs & Forms/SwitchGroup",component:s,parameters:{},argTypes:{value:{control:"object",description:"Array of selected switch IDs",type:{name:"array",value:{name:"string"},required:!1}},onChange:{description:"Callback when selection changes",type:{name:"function",required:!0}},options:{control:"object",description:"Array of switch options",type:{name:"array",value:{name:"object",value:{}},required:!0}},orientation:{control:"radio",options:["horizontal","vertical"],description:"Layout orientation of the switch group",type:{name:"string",required:!1},table:{type:{summary:"horizontal | vertical"}}},columns:{control:"radio",options:[1,2,3,4],description:"Number of columns in the grid (only applies when orientation is vertical)",type:{name:"number",required:!1}},isDisabled:{control:"boolean",description:"Disables the entire group. Individual options can also be disabled via `option.isDisabled`. Applies only in `options` mode; when passing `children`, the group does not disable them — set `isDisabled` on each Switch yourself.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},tags:["autodocs"]},l={args:{options:a,value:[],onChange:()=>{}},tags:["!autodocs"]},u={render:()=>e.jsx(ve,{}),args:{options:a,columns:2,value:[],onChange:()=>{}},parameters:{docs:{source:{code:ze,language:"tsx"}}}},d={render:()=>e.jsx(we,{}),args:{options:a,value:[],onChange:()=>{},orientation:"horizontal"},parameters:{docs:{source:{code:Fe,language:"tsx"}}}},p={render:()=>e.jsx(Ce,{}),args:{options:a,value:[],onChange:()=>{},orientation:"vertical"},parameters:{docs:{source:{code:Oe,language:"tsx"}}}},m={render:()=>e.jsx(xe,{}),args:{options:a,value:["notifications","emails"],onChange:()=>{},columns:2},parameters:{docs:{source:{code:He,language:"tsx"}}}},h={render:()=>e.jsx(ye,{}),args:{options:a,columns:1,value:[],onChange:()=>{}},parameters:{docs:{source:{code:$e,language:"tsx"}}}},g={render:()=>e.jsx(Ge,{}),args:{options:a,columns:3,value:[],onChange:()=>{}},parameters:{docs:{source:{code:qe,language:"tsx"}}}},f={render:()=>e.jsx(ke,{}),args:{options:[...a,{id:"backup",label:"Automatic backup"},{id:"location",label:"Location tracking (disabled)",isDisabled:!0},{id:"sync",label:"Cloud sync"},{id:"analytics",label:"Usage analytics (disabled)",isDisabled:!0},{id:"beta",label:"Beta features"}],columns:2,value:[],onChange:()=>{}},parameters:{docs:{source:{code:Le,language:"tsx"}}}},S={render:()=>e.jsx(je,{}),args:{children:void 0},parameters:{docs:{source:{code:Be,language:"tsx"}}}},b={render:()=>e.jsx(Ne,{}),args:{children:void 0},parameters:{docs:{source:{code:Te,language:"tsx"}}}};var y,G,k,j,N;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {}
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(k=(G=l.parameters)==null?void 0:G.docs)==null?void 0:k.source},description:{story:`Interactive playground for the SwitchGroup component.
Use the controls to experiment with different props and states.`,...(N=(j=l.parameters)==null?void 0:j.docs)==null?void 0:N.description}}};var D,V,W,R,I;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(W=(V=u.parameters)==null?void 0:V.docs)==null?void 0:W.source},description:{story:`The default state of the SwitchGroup component.
Shows a group of switches arranged in a single column with no initial selections.`,...(I=(R=u.parameters)==null?void 0:R.docs)==null?void 0:I.description}}};var M,A,E,_,z;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(E=(A=d.parameters)==null?void 0:A.docs)==null?void 0:E.source},description:{story:`SwitchGroup with horizontal layout.
Shows switches arranged in a horizontal line.`,...(z=(_=d.parameters)==null?void 0:_.docs)==null?void 0:z.description}}};var B,T,F,O,H;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(T=p.parameters)==null?void 0:T.docs)==null?void 0:F.source},description:{story:`SwitchGroup with vertical layout.
Shows switches stacked vertically in one column.`,...(H=(O=p.parameters)==null?void 0:O.docs)==null?void 0:H.description}}};var $,q,L,U,P;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(L=(q=m.parameters)==null?void 0:q.docs)==null?void 0:L.source},description:{story:`SwitchGroup with pre-selected values.
Demonstrates how the group appears with multiple switches toggled on.`,...(P=(U=m.parameters)==null?void 0:U.docs)==null?void 0:P.description}}};var J,K,Q,X,Y;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:`SwitchGroup in a single column layout.
Shows switches stacked vertically in one column.`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,te,oe,ne;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:`SwitchGroup in a three-column layout.
Demonstrates how switches can be arranged in multiple columns.`,...(ne=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};var se,ie,ae,re,ce;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ae=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:ae.source},description:{story:`SwitchGroup with an extended list of options.
Shows how the component handles a larger set of switches, including disabled states.`,...(ce=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ce.description}}};var le,ue,de,pe,me;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <SwitchGroupWithChildren />,
  args: {
    // The children variant takes no value/onChange (the caller manages state).
    children: undefined
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithChildren,
        language: 'tsx'
      }
    }
  }
}`,...(de=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:de.source},description:{story:"Instead of an `options` array, pass **Switch** components as `children` when\nyou need custom layout or structure. In this mode you manage each Switch's\n`isChecked`/`onCheckedChange` yourself; SwitchGroup just provides the group\nwrapper and layout.",...(me=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};var he,ge,fe,Se,be;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <SwitchGroupWithChildrenRef />,
  args: {
    children: undefined
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithChildrenRef,
        language: 'tsx'
      }
    }
  }
}`,...(fe=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:fe.source},description:{story:"Passing Switch components as `children` lets you hold a ref to an individual\nSwitch — e.g. to move focus to it programmatically.",...(be=(Se=b.parameters)==null?void 0:Se.docs)==null?void 0:be.description}}};const ft=["Playground","Default","Horizontal","Vertical","WithSelection","SingleColumn","ThreeColumns","WithManyOptions","WithChildren","WithChildrenAndRef"];export{u as Default,d as Horizontal,l as Playground,h as SingleColumn,g as ThreeColumns,p as Vertical,S as WithChildren,b as WithChildrenAndRef,f as WithManyOptions,m as WithSelection,ft as __namedExportsOrder,gt as default};
