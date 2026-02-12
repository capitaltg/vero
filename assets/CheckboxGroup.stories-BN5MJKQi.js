import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as s}from"./index-D4H_InIO.js";import{C as n}from"./CheckboxGroup-COBgl4Zn.js";import"./useFormGroupLayout-DdrH40kK.js";import"./utils-CU3My8Oi.js";import"./Checkbox-DguXjC58.js";import"./form-controls-DjFriuce.js";import"./index-D8GmRN1t.js";import"./index-DB-GfMvg.js";import"./index-DXU_LAI1.js";import"./index-DDORxvzF.js";import"./index-DLaBReRc.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./useAriaDisabled-DHTVgRPt.js";import"./Label-7TaJ5dQy.js";import"./check-CT0OM3mY.js";import"./createLucideIcon-CRH11QI6.js";const Ae=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"}],we=()=>{const[o,t]=s.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:Ae,orientation:"horizontal",value:o,variant:"button",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};we.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupButton"};const Re=`import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const defaultOptions = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
];

export const CheckboxGroupButton = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <CheckboxGroup
        options={defaultOptions}
        orientation="horizontal"
        value={value}
        variant="button"
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,Le=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"}],We=()=>{const[o,t]=s.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:Le,orientation:"vertical",value:o,variant:"button",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};We.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupButtonVertical"};const Ue=`import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const defaultOptions = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
];

export const CheckboxGroupButtonVertical = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <CheckboxGroup
        options={defaultOptions}
        orientation="vertical"
        value={value}
        variant="button"
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,Je=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"}],De=()=>{const[o,t]=s.useState(["option2"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:Je,orientation:"horizontal",value:o,variant:"button",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};De.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupButtonWithSelection"};const Ke=`import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const defaultOptions = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
];

export const CheckboxGroupButtonWithSelection = () => {
  const [value, setValue] = useState<string[]>(['option2']);
  return (
    <div className="space-y-4">
      <CheckboxGroup
        options={defaultOptions}
        orientation="horizontal"
        value={value}
        variant="button"
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,Me=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],ze=()=>{const[o,t]=s.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:Me,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",o.length>0?o.join(", "):"none"]})]})};ze.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupDefault"};const Qe=`import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const options = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
  { id: 'option4', label: 'Option 4' },
];

export const CheckboxGroupDefault = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <CheckboxGroup options={options} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,Xe=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"}],Be=()=>{const[o,t]=s.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:Xe,orientation:"horizontal",value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};Be.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupHorizontal"};const Ye=`import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const options = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
];

export const CheckboxGroupHorizontal = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <CheckboxGroup options={options} orientation="horizontal" value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,Ze=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],_e=()=>{const[o,t]=s.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{columns:1,options:Ze,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",o.length>0?o.join(", "):"none"]})]})};_e.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupSingleColumn"};const eo=`import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const options = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
  { id: 'option4', label: 'Option 4' },
];

export const CheckboxGroupSingleColumn = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <CheckboxGroup columns={1} options={options} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,oo=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],Ie=()=>{const[o,t]=s.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{columns:3,options:oo,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",o.length>0?o.join(", "):"none"]})]})};Ie.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupThreeColumns"};const to=`import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const options = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
  { id: 'option4', label: 'Option 4' },
];

export const CheckboxGroupThreeColumns = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <CheckboxGroup columns={3} options={options} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,no=[{id:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{id:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{id:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],Fe=()=>{const[o,t]=s.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:no,value:o,variant:"tile",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};Fe.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupTile"};const so=`import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const tileOptions = [
  {
    id: 'startup',
    label: 'Startup',
    description: 'Perfect for new businesses and small teams',
  },
  {
    id: 'business',
    label: 'Business',
    description: 'For medium-sized businesses and growing teams',
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    description: 'For large organizations and enterprise teams',
  },
];

export const CheckboxGroupTile = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <CheckboxGroup options={tileOptions} value={value} variant="tile" onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,io=[{id:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{id:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{id:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],$e=()=>{const[o,t]=s.useState(["business"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:io,value:o,variant:"tile",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};$e.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupTileWithSelection"};const ao=`import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const tileOptions = [
  {
    id: 'startup',
    label: 'Startup',
    description: 'Perfect for new businesses and small teams',
  },
  {
    id: 'business',
    label: 'Business',
    description: 'For medium-sized businesses and growing teams',
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    description: 'For large organizations and enterprise teams',
  },
];

export const CheckboxGroupTileWithSelection = () => {
  const [value, setValue] = useState<string[]>(['business']);
  return (
    <div className="space-y-4">
      <CheckboxGroup options={tileOptions} value={value} variant="tile" onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,ro=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"}],Ee=()=>{const[o,t]=s.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:ro,orientation:"vertical",value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};Ee.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupVertical"};const co=`import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const options = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
];

export const CheckboxGroupVertical = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <CheckboxGroup options={options} orientation="vertical" value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,po=[{id:"option1",label:"Option 1",description:"This is a description for option 1 that provides additional context."},{id:"option2",label:"Option 2",description:"This is a description for option 2 that provides additional context."},{id:"option3",label:"Option 3",description:"This is a description for option 3 that provides additional context."},{id:"option4",label:"Option 4",description:"This is a description for option 4 that provides additional context."}],He=()=>{const[o,t]=s.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:po,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",o.length>0?o.join(", "):"none"]})]})};He.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupWithDescription"};const lo=`import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const optionsWithDescription = [
  {
    id: 'option1',
    label: 'Option 1',
    description: 'This is a description for option 1 that provides additional context.',
  },
  {
    id: 'option2',
    label: 'Option 2',
    description: 'This is a description for option 2 that provides additional context.',
  },
  {
    id: 'option3',
    label: 'Option 3',
    description: 'This is a description for option 3 that provides additional context.',
  },
  {
    id: 'option4',
    label: 'Option 4',
    description: 'This is a description for option 4 that provides additional context.',
  },
];

export const CheckboxGroupWithDescription = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <CheckboxGroup options={optionsWithDescription} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,uo=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],Pe=()=>{const[o,t]=s.useState(["option1","option3"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:uo,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",o.length>0?o.join(", "):"none"]})]})};Pe.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupWithSelection"};const mo=`import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const options = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
  { id: 'option4', label: 'Option 4' },
];

export const CheckboxGroupWithSelection = () => {
  const [value, setValue] = useState<string[]>(['option1', 'option3']);
  return (
    <div className="space-y-4">
      <CheckboxGroup options={options} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,Fo={title:"Inputs & Forms/CheckboxGroup",component:n,parameters:{},argTypes:{value:{control:"object",description:"Array of selected checkbox IDs",type:{name:"array",value:{name:"string"},required:!1}},onChange:{description:"Callback when selection changes",type:{name:"function",required:!0},action:"selection changed"},options:{control:"object",description:"Array of checkbox options",type:{name:"array",value:{name:"object",value:{}},required:!0}},orientation:{control:"radio",options:["horizontal","vertical"],description:"Layout orientation of the checkbox group (only applies to default and button variants)",type:{name:"string",required:!1},table:{type:{summary:"horizontal | vertical"}}},variant:{control:"radio",options:["default","tile","button"],description:"Visual variant of checkboxes",type:{name:"string",required:!1},table:{type:{summary:"default | tile | button"}}},columns:{control:"radio",options:[1,2,3,4],description:"Number of columns for default variant (only applies when orientation is vertical)",type:{name:"number",required:!1}}},tags:["autodocs"]},i=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"}],qe=[{id:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{id:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{id:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],a={args:{options:i,value:[],onChange:()=>{}},tags:["!autodocs"]},r={render:()=>e.jsx(ze,{}),args:{options:i,value:[],onChange:()=>{}},parameters:{docs:{source:{code:Qe,language:"tsx"}}}},c={render:()=>e.jsx(Pe,{}),args:{options:i,value:["option1","option3"],onChange:()=>{}},parameters:{docs:{source:{code:mo,language:"tsx"}}}},p={render:()=>e.jsx(Be,{}),args:{options:i,value:[],onChange:()=>{},orientation:"horizontal"},parameters:{docs:{source:{code:Ye,language:"tsx"}}}},l={render:()=>e.jsx(Ee,{}),args:{options:i,value:[],onChange:()=>{},orientation:"vertical"},parameters:{docs:{source:{code:co,language:"tsx"}}}},u={render:()=>e.jsx(Fe,{}),args:{options:qe,value:[],onChange:()=>{},variant:"tile"},parameters:{docs:{source:{code:so,language:"tsx"}}}},d={render:()=>e.jsx($e,{}),args:{options:qe,value:["business"],onChange:()=>{},variant:"tile"},parameters:{docs:{source:{code:ao,language:"tsx"}}}},m={render:()=>e.jsx(we,{}),args:{options:i,value:[],onChange:()=>{},variant:"button",orientation:"horizontal"},parameters:{docs:{source:{code:Re,language:"tsx"}}}},h={render:()=>e.jsx(We,{}),args:{options:i,value:[],onChange:()=>{},variant:"button",orientation:"vertical"},parameters:{docs:{source:{code:Ue,language:"tsx"}}}},x={render:()=>e.jsx(De,{}),args:{options:i,value:["option2"],onChange:()=>{},variant:"button"},parameters:{docs:{source:{code:Ke,language:"tsx"}}}},b={render:()=>e.jsx(_e,{}),args:{options:i,columns:1,value:[],onChange:()=>{}},parameters:{docs:{source:{code:eo,language:"tsx"}}}},g={render:()=>e.jsx(Ie,{}),args:{options:i,columns:3,value:[],onChange:()=>{}},parameters:{docs:{source:{code:to,language:"tsx"}}}},v={render:()=>e.jsx(He,{}),args:{options:[{id:"option1",label:"Option 1",description:"This is a description for option 1 that provides additional context."},{id:"option2",label:"Option 2",description:"This is a description for option 2 that provides additional context."},{id:"option3",label:"Option 3",description:"This is a description for option 3 that provides additional context."},{id:"option4",label:"Option 4",description:"This is a description for option 4 that provides additional context."}],value:[],onChange:()=>{}},parameters:{docs:{source:{code:lo,language:"tsx"}}}};var C,f,k,S,O;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    value: [],
    onChange: () => {}
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source},description:{story:`Interactive playground for the CheckboxGroup component.
Use the controls to experiment with different props and states.`,...(O=(S=a.parameters)==null?void 0:S.docs)==null?void 0:O.description}}};var G,y,j,N,V;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <CheckboxGroupDefault />,
  args: {
    options: defaultOptions,
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
}`,...(j=(y=r.parameters)==null?void 0:y.docs)==null?void 0:j.source},description:{story:`The default state of the CheckboxGroup component.
Shows a basic vertical checkbox group with no initial selection.`,...(V=(N=r.parameters)==null?void 0:N.docs)==null?void 0:V.description}}};var T,w,W,D,z;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <CheckboxGroupWithSelection />,
  args: {
    options: defaultOptions,
    value: ['option1', 'option3'],
    onChange: () => {}
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithSelection,
        language: 'tsx'
      }
    }
  }
}`,...(W=(w=c.parameters)==null?void 0:w.docs)==null?void 0:W.source},description:{story:`CheckboxGroup with pre-selected values.
Demonstrates how the group appears with multiple checkboxes selected.`,...(z=(D=c.parameters)==null?void 0:D.docs)==null?void 0:z.description}}};var B,_,I,F,$;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <CheckboxGroupHorizontal />,
  args: {
    options: defaultOptions,
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source},description:{story:`CheckboxGroup with horizontal layout.
Shows checkboxes arranged in a horizontal line.`,...($=(F=p.parameters)==null?void 0:F.docs)==null?void 0:$.description}}};var E,H,P,q,A;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <CheckboxGroupVertical />,
  args: {
    options: defaultOptions,
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
}`,...(P=(H=l.parameters)==null?void 0:H.docs)==null?void 0:P.source},description:{story:`CheckboxGroup with vertical layout.
Shows checkboxes stacked vertically.`,...(A=(q=l.parameters)==null?void 0:q.docs)==null?void 0:A.description}}};var R,L,U,J,K;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <CheckboxGroupTile />,
  args: {
    options: tileOptions,
    value: [],
    onChange: () => {},
    variant: 'tile'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeTile,
        language: 'tsx'
      }
    }
  }
}`,...(U=(L=u.parameters)==null?void 0:L.docs)==null?void 0:U.source},description:{story:`CheckboxGroup with tile variant.
Shows checkboxes as larger tiles with descriptions.`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var M,Q,X,Y,Z;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <CheckboxGroupTileWithSelection />,
  args: {
    options: tileOptions,
    value: ['business'],
    onChange: () => {},
    variant: 'tile'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeTileWithSelection,
        language: 'tsx'
      }
    }
  }
}`,...(X=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:`Tile variant CheckboxGroup with pre-selected values.
Demonstrates how tile checkboxes appear with initial selections.`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,oe,te,ne,se;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <CheckboxGroupButton />,
  args: {
    options: defaultOptions,
    value: [],
    onChange: () => {},
    variant: 'button',
    orientation: 'horizontal'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeButton,
        language: 'tsx'
      }
    }
  }
}`,...(te=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:te.source},description:{story:`CheckboxGroup with button variant.
Shows checkboxes styled as buttons.`,...(se=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:se.description}}};var ie,ae,re,ce,pe;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <CheckboxGroupButtonVertical />,
  args: {
    options: defaultOptions,
    value: [],
    onChange: () => {},
    variant: 'button',
    orientation: 'vertical'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeButtonVertical,
        language: 'tsx'
      }
    }
  }
}`,...(re=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:re.source},description:{story:`Button variant CheckboxGroup with vertical layout.
Shows checkboxes styled as buttons arranged vertically.`,...(pe=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:pe.description}}};var le,ue,de,me,he;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <CheckboxGroupButtonWithSelection />,
  args: {
    options: defaultOptions,
    value: ['option2'],
    onChange: () => {},
    variant: 'button'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeButtonWithSelection,
        language: 'tsx'
      }
    }
  }
}`,...(de=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:de.source},description:{story:`Button variant CheckboxGroup with pre-selected values.
Demonstrates how button checkboxes appear with initial selections.`,...(he=(me=x.parameters)==null?void 0:me.docs)==null?void 0:he.description}}};var xe,be,ge,ve,Ce;b.parameters={...b.parameters,docs:{...(xe=b.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <CheckboxGroupSingleColumn />,
  args: {
    options: defaultOptions,
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
}`,...(ge=(be=b.parameters)==null?void 0:be.docs)==null?void 0:ge.source},description:{story:`CheckboxGroup in a single column layout.
Shows checkboxes stacked vertically in one column.`,...(Ce=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:Ce.description}}};var fe,ke,Se,Oe,Ge;g.parameters={...g.parameters,docs:{...(fe=g.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <CheckboxGroupThreeColumns />,
  args: {
    options: defaultOptions,
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
}`,...(Se=(ke=g.parameters)==null?void 0:ke.docs)==null?void 0:Se.source},description:{story:`CheckboxGroup in a three-column layout.
Demonstrates how checkboxes can be arranged in multiple columns.`,...(Ge=(Oe=g.parameters)==null?void 0:Oe.docs)==null?void 0:Ge.description}}};var ye,je,Ne,Ve,Te;v.parameters={...v.parameters,docs:{...(ye=v.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <CheckboxGroupWithDescription />,
  args: {
    options: [{
      id: 'option1',
      label: 'Option 1',
      description: 'This is a description for option 1 that provides additional context.'
    }, {
      id: 'option2',
      label: 'Option 2',
      description: 'This is a description for option 2 that provides additional context.'
    }, {
      id: 'option3',
      label: 'Option 3',
      description: 'This is a description for option 3 that provides additional context.'
    }, {
      id: 'option4',
      label: 'Option 4',
      description: 'This is a description for option 4 that provides additional context.'
    }],
    value: [],
    onChange: () => {}
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithDescription,
        language: 'tsx'
      }
    }
  }
}`,...(Ne=(je=v.parameters)==null?void 0:je.docs)==null?void 0:Ne.source},description:{story:`CheckboxGroup with descriptions in default variant.
Shows checkbox options with descriptions below each label.`,...(Te=(Ve=v.parameters)==null?void 0:Ve.docs)==null?void 0:Te.description}}};const $o=["Playground","Default","WithSelection","Horizontal","Vertical","Tile","TileWithSelection","Button","ButtonVertical","ButtonWithSelection","SingleColumn","ThreeColumns","WithDescription"];export{m as Button,h as ButtonVertical,x as ButtonWithSelection,r as Default,p as Horizontal,a as Playground,b as SingleColumn,g as ThreeColumns,u as Tile,d as TileWithSelection,l as Vertical,v as WithDescription,c as WithSelection,$o as __namedExportsOrder,Fo as default};
