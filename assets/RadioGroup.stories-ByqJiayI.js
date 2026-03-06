import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as n}from"./index-D4H_InIO.js";import{R as a}from"./RadioGroup-BEXz9X73.js";import{a as y}from"./Radio-B1nQAVO0.js";import{B as ro}from"./Button-DvVXU3_x.js";import"./useFormGroupLayout-COYHMi0M.js";import"./utils-CU3My8Oi.js";import"./form-controls-DjFriuce.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./useAriaDisabled-DJP5ZKD9.js";import"./index-DB-GfMvg.js";import"./index-D8GmRN1t.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-DQwFizlT.js";import"./index-Ak5Mws-w.js";import"./index-DAnQV6hb.js";import"./index-YtIeenAn.js";import"./index-DDORxvzF.js";import"./index-DXU_LAI1.js";import"./index-DLaBReRc.js";import"./Label-7TaJ5dQy.js";import"./createLucideIcon-CRH11QI6.js";const lo=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Ue=()=>{const[o,t]=n.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:lo,orientation:"horizontal",value:o,variant:"button",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};Ue.__docgenInfo={description:"",methods:[],displayName:"RadioGroupButton"};const uo=`import { useState } from 'react';
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
`,po=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Ae=()=>{const[o,t]=n.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:po,orientation:"vertical",value:o,variant:"button",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};Ae.__docgenInfo={description:"",methods:[],displayName:"RadioGroupButtonVertical"};const co=`import { useState } from 'react';
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
`,mo=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Le=()=>{const[o,t]=n.useState("option2");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:mo,value:o,variant:"button",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};Le.__docgenInfo={description:"",methods:[],displayName:"RadioGroupButtonWithSelection"};const vo=`import { useState } from 'react';
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
`,ho=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Me=()=>{const[o,t]=n.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:ho,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};Me.__docgenInfo={description:"",methods:[],displayName:"RadioGroupDefault"};const go=`import { useState } from 'react';
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
`,fo=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Je=()=>{const[o,t]=n.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:fo,orientation:"horizontal",value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};Je.__docgenInfo={description:"",methods:[],displayName:"RadioGroupHorizontal"};const xo=`import { useState } from 'react';
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
`,Ro=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],Ke=()=>{const[o,t]=n.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{columns:1,options:Ro,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};Ke.__docgenInfo={description:"",methods:[],displayName:"RadioGroupSingleColumn"};const bo=`import { useState } from 'react';
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
`,yo=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],Qe=()=>{const[o,t]=n.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{columns:3,options:yo,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};Qe.__docgenInfo={description:"",methods:[],displayName:"RadioGroupThreeColumns"};const So=`import { useState } from 'react';
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
`,Co=[{value:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{value:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{value:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],Xe=()=>{const[o,t]=n.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:Co,value:o,variant:"tile",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};Xe.__docgenInfo={description:"",methods:[],displayName:"RadioGroupTile"};const Go=`import { useState } from 'react';
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
`,Oo=[{value:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{value:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{value:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],Ze=()=>{const[o,t]=n.useState("business");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:Oo,value:o,variant:"tile",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};Ze.__docgenInfo={description:"",methods:[],displayName:"RadioGroupTileWithSelection"};const No=`import { useState } from 'react';
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
`,jo=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],eo=()=>{const[o,t]=n.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:jo,orientation:"vertical",value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};eo.__docgenInfo={description:"",methods:[],displayName:"RadioGroupVertical"};const Vo=`import { useState } from 'react';
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
`,oo=()=>{const[o,t]=n.useState("yes");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{value:o,onChange:t,children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(y,{id:"children-yes",label:"Yes",value:"yes"}),e.jsx(y,{id:"children-no",label:"No",value:"no"})]})}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected: ",o]})]})};oo.__docgenInfo={description:"",methods:[],displayName:"RadioGroupWithChildren"};const Wo=`import { useState } from 'react';
import { Radio } from '../../Radio';
import { RadioGroup } from '../src/RadioGroup';

export const RadioGroupWithChildren = () => {
  const [value, setValue] = useState('yes');

  return (
    <div className="space-y-4">
      <RadioGroup value={value} onChange={setValue}>
        <div className="flex flex-col gap-2">
          <Radio id="children-yes" label="Yes" value="yes" />
          <Radio id="children-no" label="No" value="no" />
        </div>
      </RadioGroup>
      <p className="text-sm text-muted-foreground">Selected: {value}</p>
    </div>
  );
};
`,to=()=>{const[o,t]=n.useState("yes"),S=n.useRef(null),io=()=>{var C;(C=S.current)==null||C.focus()};return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{value:o,onChange:t,children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(y,{ref:S,id:"ref-yes",label:"Yes",value:"yes"}),e.jsx(y,{id:"ref-no",label:"No",value:"no"})]})}),e.jsx(ro,{size:"sm",type:"button",variant:"primary",onClick:io,children:"Focus first radio"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected: ",o]})]})};to.__docgenInfo={description:"",methods:[],displayName:"RadioGroupWithChildrenRef"};const wo=`import { Button } from '@/components/Button';
import { type ComponentRef, useRef, useState } from 'react';
import { Radio } from '../../Radio';
import { RadioGroup } from '../src/RadioGroup';

export const RadioGroupWithChildrenRef = () => {
  const [value, setValue] = useState('yes');
  const firstRadioRef = useRef<ComponentRef<typeof Radio>>(null);

  const focusFirstRadio = () => {
    firstRadioRef.current?.focus();
  };

  return (
    <div className="space-y-4">
      <RadioGroup value={value} onChange={setValue}>
        <div className="flex flex-col gap-2">
          <Radio ref={firstRadioRef} id="ref-yes" label="Yes" value="yes" />
          <Radio id="ref-no" label="No" value="no" />
        </div>
      </RadioGroup>
      <Button size="sm" type="button" variant="primary" onClick={focusFirstRadio}>
        Focus first radio
      </Button>
      <p className="text-sm text-muted-foreground">Selected: {value}</p>
    </div>
  );
};
`,To=[{value:"option1",label:"Option 1",description:"This is a description for option 1 that provides additional context."},{value:"option2",label:"Option 2",description:"This is a description for option 2 that provides additional context."},{value:"option3",label:"Option 3",description:"This is a description for option 3 that provides additional context."}],no=()=>{const[o,t]=n.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:To,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};no.__docgenInfo={description:"",methods:[],displayName:"RadioGroupWithDescription"};const Bo=`import { useState } from 'react';
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
`,zo=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],ao=()=>{const[o,t]=n.useState("option2");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:zo,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};ao.__docgenInfo={description:"",methods:[],displayName:"RadioGroupWithSelection"};const Do=`import { useState } from 'react';
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
`,lt={title:"Inputs & Forms/RadioGroup",component:a,parameters:{docs:{description:{component:"RadioGroup lets users choose a single option from a list. Use it for mutually exclusive choices (e.g. payment method, shipping speed).\n\n**Two usage patterns:**\n- **Options:** Pass an `options` array; RadioGroup renders Radio items and applies layout (default, tile, or button variant, columns, orientation).\n- **Children:** Pass **Radio** components as `children` when you need custom layout or structure; wrap them in RadioGroup so they receive the correct context.\n\nWhen multiple RadioGroups appear on the same page with overlapping option values, give each group a unique `id` so input IDs stay unique (each radio input ID becomes `{id}-{option.value}`). You can override the input ID for a single option by passing an optional `id` on that option."}}},argTypes:{id:{control:"text",description:"Optional ID for the group. Used to derive unique input IDs for each option when multiple groups share option values (e.g. `payment-method` → inputs get `payment-method-credit-card`, etc.).",table:{type:{summary:"string"}}},value:{control:"text",description:"Currently selected value",type:{name:"string",required:!1}},onChange:{description:"Callback when selection changes",type:{name:"function",required:!0},action:"selection changed"},options:{control:"object",description:"Array of radio options. Each option: `value`, `label`, optional `description`, optional `id` (overrides the generated input ID when you need a specific DOM id).",type:{name:"array",value:{name:"object",value:{}},required:!0}},orientation:{control:"radio",options:["horizontal","vertical"],description:"Layout orientation of the radio group (only applies to default and button variants)",type:{name:"string",required:!1},table:{type:{summary:"horizontal | vertical"}}},variant:{control:"radio",options:["default","tile","button"],description:"Visual variant of radio buttons",type:{name:"string",required:!1},table:{type:{summary:"default | tile | button"}}},columns:{control:"radio",options:[1,2,3,4],description:"Number of columns for default and tile variants (only applies when orientation is vertical). Defaults to 1.",type:{name:"number",required:!1}}},tags:["autodocs"]},s=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],so=[{value:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{value:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{value:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],i={args:{options:s,value:"",onChange:()=>{}},tags:["!autodocs"]},r={render:()=>e.jsx(Me,{}),args:{options:s,value:"",onChange:()=>{}},parameters:{docs:{source:{code:go,language:"tsx"}}}},l={render:()=>e.jsx(ao,{}),args:{options:s,value:"option2",onChange:()=>{}},parameters:{docs:{source:{code:Do,language:"tsx"}}}},u={render:()=>e.jsx(Je,{}),args:{options:s,value:"",onChange:()=>{},orientation:"horizontal"},parameters:{docs:{source:{code:xo,language:"tsx"}}}},p={render:()=>e.jsx(eo,{}),args:{options:s,value:"",onChange:()=>{},orientation:"vertical"},parameters:{docs:{source:{code:Vo,language:"tsx"}}}},d={render:()=>e.jsx(Xe,{}),args:{options:so,value:"",onChange:()=>{},variant:"tile"},parameters:{docs:{source:{code:Go,language:"tsx"}}}},c={render:()=>e.jsx(Ze,{}),args:{options:so,value:"business",onChange:()=>{},variant:"tile"},parameters:{docs:{source:{code:No,language:"tsx"}}}},m={render:()=>e.jsx(Ue,{}),args:{options:s,value:"",onChange:()=>{},variant:"button",orientation:"horizontal"},parameters:{docs:{source:{code:uo,language:"tsx"}}}},v={render:()=>e.jsx(Ae,{}),args:{options:s,value:"",onChange:()=>{},variant:"button",orientation:"vertical"},parameters:{docs:{source:{code:co,language:"tsx"}}}},h={render:()=>e.jsx(Le,{}),args:{options:s,value:"option2",onChange:()=>{},variant:"button"},parameters:{docs:{source:{code:vo,language:"tsx"}}}},g={render:()=>e.jsx(Ke,{}),args:{options:s,columns:1,value:"",onChange:()=>{}},parameters:{docs:{source:{code:bo,language:"tsx"}}}},f={render:()=>e.jsx(Qe,{}),args:{options:s,columns:3,value:"",onChange:()=>{}},parameters:{docs:{source:{code:So,language:"tsx"}}}},x={render:()=>e.jsx(oo,{}),args:{value:"yes",onChange:()=>{},children:void 0},parameters:{docs:{source:{code:Wo,language:"tsx"}}}},R={render:()=>e.jsx(to,{}),args:{value:"yes",onChange:()=>{},children:void 0},parameters:{docs:{source:{code:wo,language:"tsx"}}}},b={render:()=>e.jsx(no,{}),args:{options:[{value:"option1",label:"Option 1",description:"This is a description for option 1 that provides additional context."},{value:"option2",label:"Option 2",description:"This is a description for option 2 that provides additional context."},{value:"option3",label:"Option 3",description:"This is a description for option 3 that provides additional context."}],value:"",onChange:()=>{}},parameters:{docs:{source:{code:Bo,language:"tsx"}}}};var G,O,N,j,V;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {}
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(N=(O=i.parameters)==null?void 0:O.docs)==null?void 0:N.source},description:{story:`Interactive playground for the RadioGroup component.
Use the controls to experiment with different props and states.`,...(V=(j=i.parameters)==null?void 0:j.docs)==null?void 0:V.description}}};var W,w,T,B,z;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(T=(w=r.parameters)==null?void 0:w.docs)==null?void 0:T.source},description:{story:`The default state of the RadioGroup component.
Shows a basic vertical radio group with no initial selection.`,...(z=(B=r.parameters)==null?void 0:B.docs)==null?void 0:z.description}}};var D,_,I,F,$;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(_=l.parameters)==null?void 0:_.docs)==null?void 0:I.source},description:{story:`RadioGroup with a pre-selected value.
Demonstrates how the group appears with an initial selection.`,...($=(F=l.parameters)==null?void 0:F.docs)==null?void 0:$.description}}};var q,E,P,H,k;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(P=(E=u.parameters)==null?void 0:E.docs)==null?void 0:P.source},description:{story:`RadioGroup with horizontal layout.
Shows radio options arranged in a horizontal line.`,...(k=(H=u.parameters)==null?void 0:H.docs)==null?void 0:k.description}}};var Y,U,A,L,M;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(A=(U=p.parameters)==null?void 0:U.docs)==null?void 0:A.source},description:{story:`RadioGroup with vertical layout.
Shows radio options stacked vertically.`,...(M=(L=p.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};var J,K,Q,X,Z;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:`RadioGroup with tile variant.
Shows radio options as larger tiles with descriptions.`,...(Z=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var ee,oe,te,ne,ae;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(oe=c.parameters)==null?void 0:oe.docs)==null?void 0:te.source},description:{story:`Tile variant RadioGroup with a pre-selected value.
Demonstrates how tile radio options appear with an initial selection.`,...(ae=(ne=c.parameters)==null?void 0:ne.docs)==null?void 0:ae.description}}};var se,ie,re,le,ue;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(ie=m.parameters)==null?void 0:ie.docs)==null?void 0:re.source},description:{story:`RadioGroup with button variant.
Shows radio options styled as buttons.`,...(ue=(le=m.parameters)==null?void 0:le.docs)==null?void 0:ue.description}}};var pe,de,ce,me,ve;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ce=(de=v.parameters)==null?void 0:de.docs)==null?void 0:ce.source},description:{story:`Button variant RadioGroup with vertical layout.
Shows radio options styled as buttons arranged vertically.`,...(ve=(me=v.parameters)==null?void 0:me.docs)==null?void 0:ve.description}}};var he,ge,fe,xe,Re;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(fe=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:fe.source},description:{story:`Button variant RadioGroup with a pre-selected value.
Demonstrates how button radio options appear with an initial selection.`,...(Re=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:Re.description}}};var be,ye,Se,Ce,Ge;g.parameters={...g.parameters,docs:{...(be=g.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Se=(ye=g.parameters)==null?void 0:ye.docs)==null?void 0:Se.source},description:{story:`RadioGroup in a single column layout.
Shows radio options stacked vertically in one column.`,...(Ge=(Ce=g.parameters)==null?void 0:Ce.docs)==null?void 0:Ge.description}}};var Oe,Ne,je,Ve,We;f.parameters={...f.parameters,docs:{...(Oe=f.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(je=(Ne=f.parameters)==null?void 0:Ne.docs)==null?void 0:je.source},description:{story:`RadioGroup in a three-column layout.
Demonstrates how radio options can be arranged in multiple columns.`,...(We=(Ve=f.parameters)==null?void 0:Ve.docs)==null?void 0:We.description}}};var we,Te,Be,ze,De;x.parameters={...x.parameters,docs:{...(we=x.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <RadioGroupWithChildren />,
  args: {
    value: 'yes',
    onChange: () => {},
    children: undefined // Explicitly add children prop to satisfy required prop
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithChildren,
        language: 'tsx'
      }
    }
  }
}`,...(Be=(Te=x.parameters)==null?void 0:Te.docs)==null?void 0:Be.source},description:{story:`RadioGroup with Radio components as children.
Use this pattern when you need custom layout or structure instead of the options array.`,...(De=(ze=x.parameters)==null?void 0:ze.docs)==null?void 0:De.description}}};var _e,Ie,Fe,$e,qe;R.parameters={...R.parameters,docs:{...(_e=R.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => <RadioGroupWithChildrenRef />,
  args: {
    value: 'yes',
    onChange: () => {},
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
}`,...(Fe=(Ie=R.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.source},description:{story:`RadioGroup with Radio as children and a ref on one radio for focus control.
Demonstrates using a ref to programmatically focus a specific radio (e.g. for accessibility or after validation).`,...(qe=($e=R.parameters)==null?void 0:$e.docs)==null?void 0:qe.description}}};var Ee,Pe,He,ke,Ye;b.parameters={...b.parameters,docs:{...(Ee=b.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(He=(Pe=b.parameters)==null?void 0:Pe.docs)==null?void 0:He.source},description:{story:`RadioGroup with descriptions in default variant.
Shows radio options with descriptions below each label.`,...(Ye=(ke=b.parameters)==null?void 0:ke.docs)==null?void 0:Ye.description}}};const ut=["Playground","Default","WithSelection","Horizontal","Vertical","Tile","TileWithSelection","Button","ButtonVertical","ButtonWithSelection","SingleColumn","ThreeColumns","WithChildren","WithChildrenAndRef","WithDescription"];export{m as Button,v as ButtonVertical,h as ButtonWithSelection,r as Default,u as Horizontal,i as Playground,g as SingleColumn,f as ThreeColumns,d as Tile,c as TileWithSelection,p as Vertical,x as WithChildren,R as WithChildrenAndRef,b as WithDescription,l as WithSelection,ut as __namedExportsOrder,lt as default};
