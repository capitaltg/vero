import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{S as s}from"./SwitchGroup-BVyUl08I.js";import{r as n}from"./index-B0WjJBI_.js";import{S as v}from"./Switch-D-k5vrVh.js";import{B as We}from"./Button-DJBoR_IJ.js";const De=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],ve=()=>{const[t,o]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{columns:2,options:De,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};ve.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupDefault"};const Re=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"}],we=()=>{const[t,o]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:Re,orientation:"horizontal",value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};we.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupHorizontal"};const Ie=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],xe=()=>{const[t,o]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:Ie,orientation:"vertical",value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};xe.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupVertical"};const Me=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],Ce=()=>{const[t,o]=n.useState(["notifications","emails"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{columns:2,options:Me,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};Ce.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupWithSelection"};const _e=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],ye=()=>{const[t,o]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{columns:1,options:_e,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};ye.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupSingleColumn"};const Ee=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],Ge=()=>{const[t,o]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{columns:3,options:Ee,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};Ge.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupThreeColumns"};const ze=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"},{id:"backup",label:"Automatic backup"},{id:"location",label:"Location tracking (disabled)",isDisabled:!0},{id:"sync",label:"Cloud sync"},{id:"analytics",label:"Usage analytics (disabled)",isDisabled:!0},{id:"beta",label:"Beta features"}],ke=()=>{const[t,o]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{columns:2,options:ze,value:t,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",t.length>0?t.join(", "):"none"]})]})};ke.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupWithManyOptions"};const je=()=>{const[t,o]=n.useState(["wifi"]),S=b=>w=>o(a=>w?[...a,b]:a.filter(x=>x!==b));return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(v,{id:"children-wifi",isChecked:t.includes("wifi"),label:"Wi-Fi",onCheckedChange:S("wifi")}),e.jsx(v,{id:"children-bluetooth",isChecked:t.includes("bluetooth"),label:"Bluetooth",onCheckedChange:S("bluetooth")})]})}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Enabled: ",t.join(", ")||"none"]})]})};je.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupWithChildren"};const Ne=()=>{const[t,o]=n.useState(["wifi"]),S=n.useRef(null),b=a=>x=>o(C=>x?[...C,a]:C.filter(Ve=>Ve!==a)),w=()=>{var a;(a=S.current)==null||a.focus()};return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(v,{ref:S,id:"ref-wifi",isChecked:t.includes("wifi"),label:"Wi-Fi",onCheckedChange:b("wifi")}),e.jsx(v,{id:"ref-bluetooth",isChecked:t.includes("bluetooth"),label:"Bluetooth",onCheckedChange:b("bluetooth")})]})}),e.jsx(We,{size:"sm",type:"button",variant:"primary",onClick:w,children:"Focus first switch"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Enabled: ",t.join(", ")||"none"]})]})};Ne.__docgenInfo={description:"",methods:[],displayName:"SwitchGroupWithChildrenRef"};const Ae=`import { useState } from 'react';
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
`,Oe=`import { useState } from 'react';
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
`,Fe=`import { useState } from 'react';
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
`,Pe=`import { useState } from 'react';
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
`,i=[{id:"notifications",label:"Enable notifications"},{id:"emails",label:"Receive emails"},{id:"marketing",label:"Marketing communications"},{id:"updates",label:"Auto-updates"}],Ue={title:"Inputs & Forms/SwitchGroup",component:s,parameters:{},argTypes:{value:{control:"object",type:{name:"array",value:{name:"string"},required:!1}},onChange:{type:{name:"function",required:!0}},options:{control:"object",type:{name:"array",value:{name:"object",value:{}},required:!0}},orientation:{control:"radio",options:["horizontal","vertical"],type:{name:"string",required:!1},table:{type:{summary:"horizontal | vertical"}}},columns:{control:"radio",options:[1,2,3,4],type:{name:"number",required:!1}},isDisabled:{control:"boolean",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},r={args:{options:i,value:[],onChange:()=>{}}},c={render:()=>e.jsx(ve,{}),args:{options:i,columns:2,value:[],onChange:()=>{}},parameters:{docs:{source:{code:Ae,language:"tsx"}}}},l={render:()=>e.jsx(we,{}),args:{options:i,value:[],onChange:()=>{},orientation:"horizontal"},parameters:{docs:{source:{code:Oe,language:"tsx"}}}},u={render:()=>e.jsx(xe,{}),args:{options:i,value:[],onChange:()=>{},orientation:"vertical"},parameters:{docs:{source:{code:Fe,language:"tsx"}}}},d={render:()=>e.jsx(Ce,{}),args:{options:i,value:["notifications","emails"],onChange:()=>{},columns:2},parameters:{docs:{source:{code:He,language:"tsx"}}}},p={render:()=>e.jsx(ye,{}),args:{options:i,columns:1,value:[],onChange:()=>{}},parameters:{docs:{source:{code:$e,language:"tsx"}}}},m={render:()=>e.jsx(Ge,{}),args:{options:i,columns:3,value:[],onChange:()=>{}},parameters:{docs:{source:{code:qe,language:"tsx"}}}},h={render:()=>e.jsx(ke,{}),args:{options:[...i,{id:"backup",label:"Automatic backup"},{id:"location",label:"Location tracking (disabled)",isDisabled:!0},{id:"sync",label:"Cloud sync"},{id:"analytics",label:"Usage analytics (disabled)",isDisabled:!0},{id:"beta",label:"Beta features"}],columns:2,value:[],onChange:()=>{}},parameters:{docs:{source:{code:Pe,language:"tsx"}}}},g={render:()=>e.jsx(je,{}),args:{children:void 0},parameters:{docs:{source:{code:Be,language:"tsx"}}}},f={render:()=>e.jsx(Ne,{}),args:{children:void 0},parameters:{docs:{source:{code:Te,language:"tsx"}}}};var y,G,k,j,N;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {}
  }
}`,...(k=(G=r.parameters)==null?void 0:G.docs)==null?void 0:k.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(N=(j=r.parameters)==null?void 0:j.docs)==null?void 0:N.description}}};var V,W,D,R,I;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(D=(W=c.parameters)==null?void 0:W.docs)==null?void 0:D.source},description:{story:`The default state of the SwitchGroup component.
Shows a group of switches arranged in a single column with no initial selections.`,...(I=(R=c.parameters)==null?void 0:R.docs)==null?void 0:I.description}}};var M,_,E,z,A;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(E=(_=l.parameters)==null?void 0:_.docs)==null?void 0:E.source},description:{story:`SwitchGroup with horizontal layout.
Shows switches arranged in a horizontal line.`,...(A=(z=l.parameters)==null?void 0:z.docs)==null?void 0:A.description}}};var B,T,O,F,H;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(O=(T=u.parameters)==null?void 0:T.docs)==null?void 0:O.source},description:{story:`SwitchGroup with vertical layout.
Shows switches stacked vertically in one column.`,...(H=(F=u.parameters)==null?void 0:F.docs)==null?void 0:H.description}}};var $,q,P,U,L;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(P=(q=d.parameters)==null?void 0:q.docs)==null?void 0:P.source},description:{story:`SwitchGroup with pre-selected values.
Demonstrates how the group appears with multiple switches toggled on.`,...(L=(U=d.parameters)==null?void 0:U.docs)==null?void 0:L.description}}};var J,K,Q,X,Y;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:`SwitchGroup in a single column layout.
Shows switches stacked vertically in one column.`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,te,oe,ne;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:`SwitchGroup in a three-column layout.
Demonstrates how switches can be arranged in multiple columns.`,...(ne=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};var se,ae,ie,re,ce;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:ie.source},description:{story:`SwitchGroup with an extended list of options.
Shows how the component handles a larger set of switches, including disabled states.`,...(ce=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ce.description}}};var le,ue,de,pe,me;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:de.source},description:{story:"Instead of an `options` array, pass **Switch** components as `children` when\nyou need custom layout or structure. In this mode you manage each Switch's\n`isChecked`/`onCheckedChange` yourself; SwitchGroup just provides the group\nwrapper and layout.",...(me=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};var he,ge,fe,Se,be;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(fe=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:fe.source},description:{story:"Passing Switch components as `children` lets you hold a ref to an individual\nSwitch — e.g. to move focus to it programmatically.",...(be=(Se=f.parameters)==null?void 0:Se.docs)==null?void 0:be.description}}};const Le=["Playground","Default","Horizontal","Vertical","WithSelection","SingleColumn","ThreeColumns","WithManyOptions","WithChildren","WithChildrenAndRef"],Ze=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Horizontal:l,Playground:r,SingleColumn:p,ThreeColumns:m,Vertical:u,WithChildren:g,WithChildrenAndRef:f,WithManyOptions:h,WithSelection:d,__namedExportsOrder:Le,default:Ue},Symbol.toStringTag,{value:"Module"}));export{r as P,Ze as S};
