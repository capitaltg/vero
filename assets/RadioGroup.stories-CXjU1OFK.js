import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as a}from"./index-D4H_InIO.js";import{R as n}from"./RadioGroup-CEaOp_Lx.js";import"./useFormGroupLayout-DdrH40kK.js";import"./utils-CU3My8Oi.js";import"./Radio-CvzfbRlP.js";import"./form-controls-DjFriuce.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-DB-GfMvg.js";import"./index-D8GmRN1t.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-DQwFizlT.js";import"./index-Ak5Mws-w.js";import"./index-DAnQV6hb.js";import"./index-YtIeenAn.js";import"./index-DDORxvzF.js";import"./index-DXU_LAI1.js";import"./index-DLaBReRc.js";import"./createLucideIcon-CRH11QI6.js";import"./Label-7TaJ5dQy.js";const ke=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Te=()=>{const[o,t]=a.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:ke,orientation:"horizontal",value:o,variant:"button",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};Te.__docgenInfo={description:"",methods:[],displayName:"RadioGroupButton"};const Ue=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const RadioGroupButton = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <RadioGroup
        options={defaultOptions}
        orientation="horizontal"
        value={value}
        variant="button"
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,Ae=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],We=()=>{const[o,t]=a.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:Ae,orientation:"vertical",value:o,variant:"button",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};We.__docgenInfo={description:"",methods:[],displayName:"RadioGroupButtonVertical"};const Le=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const RadioGroupButtonVertical = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <RadioGroup
        options={defaultOptions}
        orientation="vertical"
        value={value}
        variant="button"
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,Me=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Be=()=>{const[o,t]=a.useState("option2");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:Me,value:o,variant:"button",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};Be.__docgenInfo={description:"",methods:[],displayName:"RadioGroupButtonWithSelection"};const Ye=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const RadioGroupButtonWithSelection = () => {
  const [value, setValue] = useState('option2');
  return (
    <div className="space-y-4">
      <RadioGroup options={defaultOptions} value={value} variant="button" onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,Je=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],ze=()=>{const[o,t]=a.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:Je,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};ze.__docgenInfo={description:"",methods:[],displayName:"RadioGroupDefault"};const Ke=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const RadioGroupDefault = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <RadioGroup options={defaultOptions} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,Qe=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],De=()=>{const[o,t]=a.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:Qe,orientation:"horizontal",value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};De.__docgenInfo={description:"",methods:[],displayName:"RadioGroupHorizontal"};const Xe=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const RadioGroupHorizontal = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <RadioGroup
        options={defaultOptions}
        orientation="horizontal"
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,Ze=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],_e=()=>{const[o,t]=a.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{columns:1,options:Ze,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};_e.__docgenInfo={description:"",methods:[],displayName:"RadioGroupSingleColumn"};const eo=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

export const RadioGroupSingleColumn = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <RadioGroup columns={1} options={options} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,oo=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],Ie=()=>{const[o,t]=a.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{columns:3,options:oo,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};Ie.__docgenInfo={description:"",methods:[],displayName:"RadioGroupThreeColumns"};const to=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

export const RadioGroupThreeColumns = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <RadioGroup columns={3} options={options} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,no=[{value:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{value:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{value:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],Fe=()=>{const[o,t]=a.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:no,value:o,variant:"tile",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};Fe.__docgenInfo={description:"",methods:[],displayName:"RadioGroupTile"};const ao=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const tileOptions = [
  {
    value: 'startup',
    label: 'Startup',
    description: 'Perfect for new businesses and small teams',
  },
  {
    value: 'business',
    label: 'Business',
    description: 'For medium-sized businesses and growing teams',
  },
  {
    value: 'enterprise',
    label: 'Enterprise',
    description: 'For large organizations and enterprise teams',
  },
];

export const RadioGroupTile = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <RadioGroup options={tileOptions} value={value} variant="tile" onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,so=[{value:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{value:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{value:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],$e=()=>{const[o,t]=a.useState("business");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:so,value:o,variant:"tile",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};$e.__docgenInfo={description:"",methods:[],displayName:"RadioGroupTileWithSelection"};const io=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const tileOptions = [
  {
    value: 'startup',
    label: 'Startup',
    description: 'Perfect for new businesses and small teams',
  },
  {
    value: 'business',
    label: 'Business',
    description: 'For medium-sized businesses and growing teams',
  },
  {
    value: 'enterprise',
    label: 'Enterprise',
    description: 'For large organizations and enterprise teams',
  },
];

export const RadioGroupTileWithSelection = () => {
  const [value, setValue] = useState('business');
  return (
    <div className="space-y-4">
      <RadioGroup options={tileOptions} value={value} variant="tile" onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,ro=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],qe=()=>{const[o,t]=a.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:ro,orientation:"vertical",value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};qe.__docgenInfo={description:"",methods:[],displayName:"RadioGroupVertical"};const lo=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const RadioGroupVertical = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <RadioGroup
        options={defaultOptions}
        orientation="vertical"
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,po=[{value:"option1",label:"Option 1",description:"This is a description for option 1 that provides additional context."},{value:"option2",label:"Option 2",description:"This is a description for option 2 that provides additional context."},{value:"option3",label:"Option 3",description:"This is a description for option 3 that provides additional context."}],Ee=()=>{const[o,t]=a.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:po,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};Ee.__docgenInfo={description:"",methods:[],displayName:"RadioGroupWithDescription"};const uo=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const optionsWithDescription = [
  {
    value: 'option1',
    label: 'Option 1',
    description: 'This is a description for option 1 that provides additional context.',
  },
  {
    value: 'option2',
    label: 'Option 2',
    description: 'This is a description for option 2 that provides additional context.',
  },
  {
    value: 'option3',
    label: 'Option 3',
    description: 'This is a description for option 3 that provides additional context.',
  },
];

export const RadioGroupWithDescription = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <RadioGroup options={optionsWithDescription} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,co=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],He=()=>{const[o,t]=a.useState("option2");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:co,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};He.__docgenInfo={description:"",methods:[],displayName:"RadioGroupWithSelection"};const mo=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const RadioGroupWithSelection = () => {
  const [value, setValue] = useState('option2');
  return (
    <div className="space-y-4">
      <RadioGroup options={defaultOptions} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,Eo={title:"Inputs & Forms/RadioGroup",component:n,parameters:{docs:{description:{component:"RadioGroup lets users choose a single option from a list. Use it for mutually exclusive choices (e.g. payment method, shipping speed). Options support labels and optional descriptions; layout can be default, tile, or button style, with configurable columns and orientation.\n\nWhen multiple RadioGroups appear on the same page with overlapping option values, give each group a unique `id` so input IDs stay unique (each radio input ID becomes `{id}-{option.value}`). You can override the input ID for a single option by passing an optional `id` on that option."}}},argTypes:{id:{control:"text",description:"Optional ID for the group. Used to derive unique input IDs for each option when multiple groups share option values (e.g. `payment-method` → inputs get `payment-method-credit-card`, etc.).",table:{type:{summary:"string"}}},value:{control:"text",description:"Currently selected value",type:{name:"string",required:!1}},onChange:{description:"Callback when selection changes",type:{name:"function",required:!0},action:"selection changed"},options:{control:"object",description:"Array of radio options. Each option: `value`, `label`, optional `description`, optional `id` (overrides the generated input ID when you need a specific DOM id).",type:{name:"array",value:{name:"object",value:{}},required:!0}},orientation:{control:"radio",options:["horizontal","vertical"],description:"Layout orientation of the radio group (only applies to default and button variants)",type:{name:"string",required:!1},table:{type:{summary:"horizontal | vertical"}}},variant:{control:"radio",options:["default","tile","button"],description:"Visual variant of radio buttons",type:{name:"string",required:!1},table:{type:{summary:"default | tile | button"}}},columns:{control:"radio",options:[1,2,3,4],description:"Number of columns for default variant (only applies when orientation is vertical)",type:{name:"number",required:!1}}},tags:["autodocs"]},s=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Pe=[{value:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{value:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{value:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],i={args:{options:s,value:"",onChange:()=>{}},tags:["!autodocs"]},r={render:()=>e.jsx(ze,{}),args:{options:s,value:"",onChange:()=>{}},parameters:{docs:{source:{code:Ke,language:"tsx"}}}},l={render:()=>e.jsx(He,{}),args:{options:s,value:"option2",onChange:()=>{}},parameters:{docs:{source:{code:mo,language:"tsx"}}}},p={render:()=>e.jsx(De,{}),args:{options:s,value:"",onChange:()=>{},orientation:"horizontal"},parameters:{docs:{source:{code:Xe,language:"tsx"}}}},u={render:()=>e.jsx(qe,{}),args:{options:s,value:"",onChange:()=>{},orientation:"vertical"},parameters:{docs:{source:{code:lo,language:"tsx"}}}},c={render:()=>e.jsx(Fe,{}),args:{options:Pe,value:"",onChange:()=>{},variant:"tile"},parameters:{docs:{source:{code:ao,language:"tsx"}}}},d={render:()=>e.jsx($e,{}),args:{options:Pe,value:"business",onChange:()=>{},variant:"tile"},parameters:{docs:{source:{code:io,language:"tsx"}}}},m={render:()=>e.jsx(Te,{}),args:{options:s,value:"",onChange:()=>{},variant:"button",orientation:"horizontal"},parameters:{docs:{source:{code:Ue,language:"tsx"}}}},v={render:()=>e.jsx(We,{}),args:{options:s,value:"",onChange:()=>{},variant:"button",orientation:"vertical"},parameters:{docs:{source:{code:Le,language:"tsx"}}}},g={render:()=>e.jsx(Be,{}),args:{options:s,value:"option2",onChange:()=>{},variant:"button"},parameters:{docs:{source:{code:Ye,language:"tsx"}}}},h={render:()=>e.jsx(_e,{}),args:{options:s,columns:1,value:"",onChange:()=>{}},parameters:{docs:{source:{code:eo,language:"tsx"}}}},f={render:()=>e.jsx(Ie,{}),args:{options:s,columns:3,value:"",onChange:()=>{}},parameters:{docs:{source:{code:to,language:"tsx"}}}},x={render:()=>e.jsx(Ee,{}),args:{options:[{value:"option1",label:"Option 1",description:"This is a description for option 1 that provides additional context."},{value:"option2",label:"Option 2",description:"This is a description for option 2 that provides additional context."},{value:"option3",label:"Option 3",description:"This is a description for option 3 that provides additional context."}],value:"",onChange:()=>{}},parameters:{docs:{source:{code:uo,language:"tsx"}}}};var b,O,S,R,G;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {}
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(S=(O=i.parameters)==null?void 0:O.docs)==null?void 0:S.source},description:{story:`Interactive playground for the RadioGroup component.
Use the controls to experiment with different props and states.`,...(G=(R=i.parameters)==null?void 0:R.docs)==null?void 0:G.description}}};var C,y,N,V,j;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <RadioGroupDefault />,
  args: {
    options: defaultOptions,
    value: '',
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
}`,...(N=(y=r.parameters)==null?void 0:y.docs)==null?void 0:N.source},description:{story:`The default state of the RadioGroup component.
Shows a basic vertical radio group with no initial selection.`,...(j=(V=r.parameters)==null?void 0:V.docs)==null?void 0:j.description}}};var w,T,W,B,z;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <RadioGroupWithSelection />,
  args: {
    options: defaultOptions,
    value: 'option2',
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
}`,...(W=(T=l.parameters)==null?void 0:T.docs)==null?void 0:W.source},description:{story:`RadioGroup with a pre-selected value.
Demonstrates how the group appears with an initial selection.`,...(z=(B=l.parameters)==null?void 0:B.docs)==null?void 0:z.description}}};var D,_,I,F,$;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <RadioGroupHorizontal />,
  args: {
    options: defaultOptions,
    value: '',
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source},description:{story:`RadioGroup with horizontal layout.
Shows radio options arranged in a horizontal line.`,...($=(F=p.parameters)==null?void 0:F.docs)==null?void 0:$.description}}};var q,E,H,P,k;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <RadioGroupVertical />,
  args: {
    options: defaultOptions,
    value: '',
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
}`,...(H=(E=u.parameters)==null?void 0:E.docs)==null?void 0:H.source},description:{story:`RadioGroup with vertical layout.
Shows radio options stacked vertically.`,...(k=(P=u.parameters)==null?void 0:P.docs)==null?void 0:k.description}}};var U,A,L,M,Y;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <RadioGroupTile />,
  args: {
    options: tileOptions,
    value: '',
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
}`,...(L=(A=c.parameters)==null?void 0:A.docs)==null?void 0:L.source},description:{story:`RadioGroup with tile variant.
Shows radio options as larger tiles with descriptions.`,...(Y=(M=c.parameters)==null?void 0:M.docs)==null?void 0:Y.description}}};var J,K,Q,X,Z;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <RadioGroupTileWithSelection />,
  args: {
    options: tileOptions,
    value: 'business',
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
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:`Tile variant RadioGroup with a pre-selected value.
Demonstrates how tile radio options appear with an initial selection.`,...(Z=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var ee,oe,te,ne,ae;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <RadioGroupButton />,
  args: {
    options: defaultOptions,
    value: '',
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
}`,...(te=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:te.source},description:{story:`RadioGroup with button variant.
Shows radio options styled as buttons.`,...(ae=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:ae.description}}};var se,ie,re,le,pe;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <RadioGroupButtonVertical />,
  args: {
    options: defaultOptions,
    value: '',
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
}`,...(re=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:re.source},description:{story:`Button variant RadioGroup with vertical layout.
Shows radio options styled as buttons arranged vertically.`,...(pe=(le=v.parameters)==null?void 0:le.docs)==null?void 0:pe.description}}};var ue,ce,de,me,ve;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <RadioGroupButtonWithSelection />,
  args: {
    options: defaultOptions,
    value: 'option2',
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
}`,...(de=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:`Button variant RadioGroup with a pre-selected value.
Demonstrates how button radio options appear with an initial selection.`,...(ve=(me=g.parameters)==null?void 0:me.docs)==null?void 0:ve.description}}};var ge,he,fe,xe,be;h.parameters={...h.parameters,docs:{...(ge=h.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <RadioGroupSingleColumn />,
  args: {
    options: defaultOptions,
    columns: 1,
    value: '',
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
}`,...(fe=(he=h.parameters)==null?void 0:he.docs)==null?void 0:fe.source},description:{story:`RadioGroup in a single column layout.
Shows radio options stacked vertically in one column.`,...(be=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:be.description}}};var Oe,Se,Re,Ge,Ce;f.parameters={...f.parameters,docs:{...(Oe=f.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <RadioGroupThreeColumns />,
  args: {
    options: defaultOptions,
    columns: 3,
    value: '',
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
}`,...(Re=(Se=f.parameters)==null?void 0:Se.docs)==null?void 0:Re.source},description:{story:`RadioGroup in a three-column layout.
Demonstrates how radio options can be arranged in multiple columns.`,...(Ce=(Ge=f.parameters)==null?void 0:Ge.docs)==null?void 0:Ce.description}}};var ye,Ne,Ve,je,we;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <RadioGroupWithDescription />,
  args: {
    options: [{
      value: 'option1',
      label: 'Option 1',
      description: 'This is a description for option 1 that provides additional context.'
    }, {
      value: 'option2',
      label: 'Option 2',
      description: 'This is a description for option 2 that provides additional context.'
    }, {
      value: 'option3',
      label: 'Option 3',
      description: 'This is a description for option 3 that provides additional context.'
    }],
    value: '',
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
}`,...(Ve=(Ne=x.parameters)==null?void 0:Ne.docs)==null?void 0:Ve.source},description:{story:`RadioGroup with descriptions in default variant.
Shows radio options with descriptions below each label.`,...(we=(je=x.parameters)==null?void 0:je.docs)==null?void 0:we.description}}};const Ho=["Playground","Default","WithSelection","Horizontal","Vertical","Tile","TileWithSelection","Button","ButtonVertical","ButtonWithSelection","SingleColumn","ThreeColumns","WithDescription"];export{m as Button,v as ButtonVertical,g as ButtonWithSelection,r as Default,p as Horizontal,i as Playground,h as SingleColumn,f as ThreeColumns,c as Tile,d as TileWithSelection,u as Vertical,x as WithDescription,l as WithSelection,Ho as __namedExportsOrder,Eo as default};
