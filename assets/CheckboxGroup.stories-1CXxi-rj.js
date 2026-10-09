import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as n}from"./index-B0WjJBI_.js";import{C as s}from"./CheckboxGroup-DI_ICKCa.js";import{C as O}from"./Checkbox-D8-RNT4n.js";import{B as vo}from"./Button-BinwIYAK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useFormGroupLayout-COYHMi0M.js";import"./utils-CU3My8Oi.js";import"./form-controls-UvU-3cIH.js";import"./index-EiwPuDyL.js";import"./index-B5oA2Zbg.js";import"./index-B8vvyUb-.js";import"./index-DBA0bpW4.js";import"./index-BHtEszHx.js";import"./index-CoRj-x2w.js";import"./index-KklXjS-Z.js";import"./index-CwPCC0ZT.js";import"./index-BOrrHd12.js";import"./constants-D9UEAID0.js";import"./styles-CafxXXJc.js";import"./index-NE6MC3wq.js";import"./useAriaDisabled-BVkOu7OW.js";import"./useAriaLabelled-RfpmMyng.js";import"./check-C42IfL-F.js";import"./createLucideIcon-BeEkWZrd.js";import"./Label-BalUMPW8.js";const fo=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"}],oo=()=>{const[o,t]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:fo,orientation:"horizontal",value:o,variant:"button",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};oo.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupButton"};const ko=`import { useState } from 'react';
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
`,So=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"}],to=()=>{const[o,t]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:So,orientation:"vertical",value:o,variant:"button",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};to.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupButtonVertical"};const Go=`import { useState } from 'react';
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
`,yo=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"}],no=()=>{const[o,t]=n.useState(["option2"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:yo,orientation:"horizontal",value:o,variant:"button",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};no.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupButtonWithSelection"};const Oo=`import { useState } from 'react';
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
`,jo=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],so=()=>{const[o,t]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:jo,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",o.length>0?o.join(", "):"none"]})]})};so.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupDefault"};const No=`import { useState } from 'react';
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
`,Vo=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],io=()=>{const[o,t]=n.useState(["option2"]);return e.jsx(s,{isDisabled:!0,options:Vo,value:o,onChange:t})};io.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupDisabled"};const Do=`import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const options = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
  { id: 'option4', label: 'Option 4' },
];

export const CheckboxGroupDisabled = () => {
  const [value, setValue] = useState<string[]>(['option2']);
  return <CheckboxGroup isDisabled options={options} value={value} onChange={setValue} />;
};
`,Wo=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"}],ao=()=>{const[o,t]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:Wo,orientation:"horizontal",value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};ao.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupHorizontal"};const wo=`import { useState } from 'react';
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
`,To=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],ro=()=>{const[o,t]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{columns:1,options:To,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",o.length>0?o.join(", "):"none"]})]})};ro.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupSingleColumn"};const Io=`import { useState } from 'react';
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
`,Bo=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],co=()=>{const[o,t]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{columns:3,options:Bo,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",o.length>0?o.join(", "):"none"]})]})};co.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupThreeColumns"};const zo=`import { useState } from 'react';
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
`,_o=[{id:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{id:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{id:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],lo=()=>{const[o,t]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:_o,value:o,variant:"tile",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};lo.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupTile"};const Ro=`import { useState } from 'react';
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
`,Fo=[{id:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{id:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{id:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],po=()=>{const[o,t]=n.useState(["business"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:Fo,value:o,variant:"tile",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};po.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupTileWithSelection"};const Eo=`import { useState } from 'react';
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
`,$o=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"}],uo=()=>{const[o,t]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:$o,orientation:"vertical",value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};uo.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupVertical"};const qo=`import { useState } from 'react';
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
`,ho=()=>{const[o,t]=n.useState(["email"]),r=c=>j=>t(a=>j?[...a,c]:a.filter(N=>N!==c));return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(O,{id:"children-email",isChecked:o.includes("email"),label:"Email",onCheckedChange:r("email")}),e.jsx(O,{id:"children-sms",isChecked:o.includes("sms"),label:"SMS",onCheckedChange:r("sms")})]})}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected: ",o.join(", ")||"none"]})]})};ho.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupWithChildren"};const Po=`import { useState } from 'react';
import { Checkbox } from '../../Checkbox';
import { CheckboxGroup } from '../src/CheckboxGroup';

export const CheckboxGroupWithChildren = () => {
  const [value, setValue] = useState<string[]>(['email']);

  const toggle = (id: string) => (isChecked: boolean) =>
    setValue(prev => (isChecked ? [...prev, id] : prev.filter(v => v !== id)));

  return (
    <div className="space-y-4">
      <CheckboxGroup>
        <div className="flex flex-col gap-2">
          <Checkbox
            id="children-email"
            isChecked={value.includes('email')}
            label="Email"
            onCheckedChange={toggle('email')}
          />
          <Checkbox
            id="children-sms"
            isChecked={value.includes('sms')}
            label="SMS"
            onCheckedChange={toggle('sms')}
          />
        </div>
      </CheckboxGroup>
      <p className="text-sm text-muted-foreground">Selected: {value.join(', ') || 'none'}</p>
    </div>
  );
};
`,mo=()=>{const[o,t]=n.useState(["email"]),r=n.useRef(null),c=a=>N=>t(V=>N?[...V,a]:V.filter(Co=>Co!==a)),j=()=>{var a;(a=r.current)==null||a.focus()};return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(O,{ref:r,id:"ref-email",isChecked:o.includes("email"),label:"Email",onCheckedChange:c("email")}),e.jsx(O,{id:"ref-sms",isChecked:o.includes("sms"),label:"SMS",onCheckedChange:c("sms")})]})}),e.jsx(vo,{size:"sm",type:"button",variant:"primary",onClick:j,children:"Focus first checkbox"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected: ",o.join(", ")||"none"]})]})};mo.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupWithChildrenRef"};const Ho=`import { Button } from '@/components/Button';
import { type ComponentRef, useRef, useState } from 'react';
import { Checkbox } from '../../Checkbox';
import { CheckboxGroup } from '../src/CheckboxGroup';

export const CheckboxGroupWithChildrenRef = () => {
  const [value, setValue] = useState<string[]>(['email']);
  const firstCheckboxRef = useRef<ComponentRef<typeof Checkbox>>(null);

  const toggle = (id: string) => (isChecked: boolean) =>
    setValue(prev => (isChecked ? [...prev, id] : prev.filter(v => v !== id)));

  const focusFirstCheckbox = () => {
    firstCheckboxRef.current?.focus();
  };

  return (
    <div className="space-y-4">
      <CheckboxGroup>
        <div className="flex flex-col gap-2">
          <Checkbox
            ref={firstCheckboxRef}
            id="ref-email"
            isChecked={value.includes('email')}
            label="Email"
            onCheckedChange={toggle('email')}
          />
          <Checkbox
            id="ref-sms"
            isChecked={value.includes('sms')}
            label="SMS"
            onCheckedChange={toggle('sms')}
          />
        </div>
      </CheckboxGroup>
      <Button size="sm" type="button" variant="primary" onClick={focusFirstCheckbox}>
        Focus first checkbox
      </Button>
      <p className="text-sm text-muted-foreground">Selected: {value.join(', ') || 'none'}</p>
    </div>
  );
};
`,Ao=[{id:"option1",label:"Option 1",description:"This is a description for option 1 that provides additional context."},{id:"option2",label:"Option 2",description:"This is a description for option 2 that provides additional context."},{id:"option3",label:"Option 3",description:"This is a description for option 3 that provides additional context."},{id:"option4",label:"Option 4",description:"This is a description for option 4 that provides additional context."}],bo=()=>{const[o,t]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:Ao,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",o.length>0?o.join(", "):"none"]})]})};bo.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupWithDescription"};const Mo=`import { useState } from 'react';
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
`,Uo=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],xo=()=>{const[o,t]=n.useState(["option1","option3"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:Uo,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",o.length>0?o.join(", "):"none"]})]})};xo.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupWithSelection"};const Lo=`import { useState } from 'react';
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
`,ft={title:"Inputs & Forms/CheckboxGroup",component:s,parameters:{docs:{description:{component:"CheckboxGroup lets users select zero, one, or many options from a list. Use it for multi-select choices (e.g. interests, notification preferences).\n\n**Two usage patterns:**\n- **Options:** Pass an `options` array; CheckboxGroup renders Checkbox items and applies layout (default, tile, or button variant, columns, orientation).\n- **Children:** Pass **Checkbox** components as `children` when you need custom layout or structure (or a ref to a specific Checkbox); you manage each Checkbox’s checked state.\n\nWhen multiple CheckboxGroups appear on the same page with overlapping option IDs, give each group a unique `id` so input IDs stay unique (each checkbox input ID becomes `{id}-{option.id}`). You can override the input ID for a single option by passing an optional `inputId` on that option."}}},argTypes:{id:{control:"text",description:"Optional ID for the group. Used to derive unique input IDs for each option when multiple groups share option ids (e.g. `interests` → inputs get `interests-hiking`, etc.).",table:{type:{summary:"string"}}},value:{control:"object",description:"Array of selected checkbox IDs",type:{name:"array",value:{name:"string"},required:!1}},onChange:{description:"Callback when selection changes",type:{name:"function",required:!0},action:"selection changed"},options:{control:"object",description:"Array of checkbox options. Each option: `id` (used in value array), `label`, optional `description`, optional `inputId` (overrides the generated input ID when you need a specific DOM id).",type:{name:"array",value:{name:"object",value:{}},required:!0}},orientation:{control:"radio",options:["horizontal","vertical"],description:"Layout orientation of the checkbox group (only applies to default and button variants)",type:{name:"string",required:!1},table:{type:{summary:"horizontal | vertical"}}},variant:{control:"radio",options:["default","tile","button"],description:"Visual variant of checkboxes",type:{name:"string",required:!1},table:{type:{summary:"default | tile | button"}}},columns:{control:"radio",options:[1,2,3,4],description:"Number of columns for default and tile variants (only applies when orientation is vertical). Defaults to 1.",type:{name:"number",required:!1}},isDisabled:{control:"boolean",description:"Disables the entire group. Individual options can also be disabled via `option.isDisabled`. Applies only in `options` mode; when passing `children`, the group does not disable them — set `isDisabled` on each Checkbox yourself.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},tags:["autodocs"]},i=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"}],go=[{id:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{id:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{id:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],l={args:{options:i,value:[],onChange:()=>{}},tags:["!autodocs"]},p={render:()=>e.jsx(so,{}),args:{options:i,value:[],onChange:()=>{}},parameters:{docs:{source:{code:No,language:"tsx"}}}},d={render:()=>e.jsx(xo,{}),args:{options:i,value:["option1","option3"],onChange:()=>{}},parameters:{docs:{source:{code:Lo,language:"tsx"}}}},u={render:()=>e.jsx(ao,{}),args:{options:i,value:[],onChange:()=>{},orientation:"horizontal"},parameters:{docs:{source:{code:wo,language:"tsx"}}}},h={render:()=>e.jsx(uo,{}),args:{options:i,value:[],onChange:()=>{},orientation:"vertical"},parameters:{docs:{source:{code:qo,language:"tsx"}}}},m={render:()=>e.jsx(lo,{}),args:{options:go,value:[],onChange:()=>{},variant:"tile"},parameters:{docs:{source:{code:Ro,language:"tsx"}}}},b={render:()=>e.jsx(po,{}),args:{options:go,value:["business"],onChange:()=>{},variant:"tile"},parameters:{docs:{source:{code:Eo,language:"tsx"}}}},x={render:()=>e.jsx(oo,{}),args:{options:i,value:[],onChange:()=>{},variant:"button",orientation:"horizontal"},parameters:{docs:{source:{code:ko,language:"tsx"}}}},g={render:()=>e.jsx(to,{}),args:{options:i,value:[],onChange:()=>{},variant:"button",orientation:"vertical"},parameters:{docs:{source:{code:Go,language:"tsx"}}}},C={render:()=>e.jsx(no,{}),args:{options:i,value:["option2"],onChange:()=>{},variant:"button"},parameters:{docs:{source:{code:Oo,language:"tsx"}}}},v={render:()=>e.jsx(ro,{}),args:{options:i,columns:1,value:[],onChange:()=>{}},parameters:{docs:{source:{code:Io,language:"tsx"}}}},f={render:()=>e.jsx(co,{}),args:{options:i,columns:3,value:[],onChange:()=>{}},parameters:{docs:{source:{code:zo,language:"tsx"}}}},k={render:()=>e.jsx(io,{}),args:{options:i,value:["option2"],onChange:()=>{},isDisabled:!0},parameters:{docs:{source:{code:Do,language:"tsx"}}}},S={render:()=>e.jsx(bo,{}),args:{options:[{id:"option1",label:"Option 1",description:"This is a description for option 1 that provides additional context."},{id:"option2",label:"Option 2",description:"This is a description for option 2 that provides additional context."},{id:"option3",label:"Option 3",description:"This is a description for option 3 that provides additional context."},{id:"option4",label:"Option 4",description:"This is a description for option 4 that provides additional context."}],value:[],onChange:()=>{}},parameters:{docs:{source:{code:Mo,language:"tsx"}}}},G={render:()=>e.jsx(ho,{}),args:{children:void 0},parameters:{docs:{source:{code:Po,language:"tsx"}}}},y={render:()=>e.jsx(mo,{}),args:{children:void 0},parameters:{docs:{source:{code:Ho,language:"tsx"}}}};var D,W,w,T,I;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    value: [],
    onChange: () => {}
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(w=(W=l.parameters)==null?void 0:W.docs)==null?void 0:w.source},description:{story:`Interactive playground for the CheckboxGroup component.
Use the controls to experiment with different props and states.`,...(I=(T=l.parameters)==null?void 0:T.docs)==null?void 0:I.description}}};var B,z,_,R,F;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(_=(z=p.parameters)==null?void 0:z.docs)==null?void 0:_.source},description:{story:`The default state of the CheckboxGroup component.
Shows a basic vertical checkbox group with no initial selection.`,...(F=(R=p.parameters)==null?void 0:R.docs)==null?void 0:F.description}}};var E,$,q,P,H;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(q=($=d.parameters)==null?void 0:$.docs)==null?void 0:q.source},description:{story:`CheckboxGroup with pre-selected values.
Demonstrates how the group appears with multiple checkboxes selected.`,...(H=(P=d.parameters)==null?void 0:P.docs)==null?void 0:H.description}}};var A,M,U,L,Y;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(U=(M=u.parameters)==null?void 0:M.docs)==null?void 0:U.source},description:{story:`CheckboxGroup with horizontal layout.
Shows checkboxes arranged in a horizontal line.`,...(Y=(L=u.parameters)==null?void 0:L.docs)==null?void 0:Y.description}}};var J,K,Q,X,Z;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:`CheckboxGroup with vertical layout.
Shows checkboxes stacked vertically.`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var ee,oe,te,ne,se;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:te.source},description:{story:`CheckboxGroup with tile variant.
Shows checkboxes as larger tiles with descriptions.`,...(se=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:se.description}}};var ie,ae,re,ce,le;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(re=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:re.source},description:{story:`Tile variant CheckboxGroup with pre-selected values.
Demonstrates how tile checkboxes appear with initial selections.`,...(le=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:le.description}}};var pe,de,ue,he,me;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ue.source},description:{story:`CheckboxGroup with button variant.
Shows checkboxes styled as buttons.`,...(me=(he=x.parameters)==null?void 0:he.docs)==null?void 0:me.description}}};var be,xe,ge,Ce,ve;g.parameters={...g.parameters,docs:{...(be=g.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ge=(xe=g.parameters)==null?void 0:xe.docs)==null?void 0:ge.source},description:{story:`Button variant CheckboxGroup with vertical layout.
Shows checkboxes styled as buttons arranged vertically.`,...(ve=(Ce=g.parameters)==null?void 0:Ce.docs)==null?void 0:ve.description}}};var fe,ke,Se,Ge,ye;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Se=(ke=C.parameters)==null?void 0:ke.docs)==null?void 0:Se.source},description:{story:`Button variant CheckboxGroup with pre-selected values.
Demonstrates how button checkboxes appear with initial selections.`,...(ye=(Ge=C.parameters)==null?void 0:Ge.docs)==null?void 0:ye.description}}};var Oe,je,Ne,Ve,De;v.parameters={...v.parameters,docs:{...(Oe=v.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ne=(je=v.parameters)==null?void 0:je.docs)==null?void 0:Ne.source},description:{story:`CheckboxGroup in a single column layout.
Shows checkboxes stacked vertically in one column.`,...(De=(Ve=v.parameters)==null?void 0:Ve.docs)==null?void 0:De.description}}};var We,we,Te,Ie,Be;f.parameters={...f.parameters,docs:{...(We=f.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Te=(we=f.parameters)==null?void 0:we.docs)==null?void 0:Te.source},description:{story:`CheckboxGroup in a three-column layout.
Demonstrates how checkboxes can be arranged in multiple columns.`,...(Be=(Ie=f.parameters)==null?void 0:Ie.docs)==null?void 0:Be.description}}};var ze,_e,Re,Fe,Ee;k.parameters={...k.parameters,docs:{...(ze=k.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <CheckboxGroupDisabled />,
  args: {
    options: defaultOptions,
    value: ['option2'],
    onChange: () => {},
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
}`,...(Re=(_e=k.parameters)==null?void 0:_e.docs)==null?void 0:Re.source},description:{story:"CheckboxGroup with the entire group disabled.\nSet `isDisabled` on the group to disable every option at once; individual\noptions can also be disabled via `option.isDisabled`.",...(Ee=(Fe=k.parameters)==null?void 0:Fe.docs)==null?void 0:Ee.description}}};var $e,qe,Pe,He,Ae;S.parameters={...S.parameters,docs:{...($e=S.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Pe=(qe=S.parameters)==null?void 0:qe.docs)==null?void 0:Pe.source},description:{story:`CheckboxGroup with descriptions in default variant.
Shows checkbox options with descriptions below each label.`,...(Ae=(He=S.parameters)==null?void 0:He.docs)==null?void 0:Ae.description}}};var Me,Ue,Le,Ye,Je;G.parameters={...G.parameters,docs:{...(Me=G.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <CheckboxGroupWithChildren />,
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
}`,...(Le=(Ue=G.parameters)==null?void 0:Ue.docs)==null?void 0:Le.source},description:{story:"Instead of an `options` array, pass **Checkbox** components as `children` when\nyou need custom layout or structure. In this mode you manage each Checkbox's\n`isChecked`/`onCheckedChange` yourself; CheckboxGroup just provides the group\nwrapper and layout.",...(Je=(Ye=G.parameters)==null?void 0:Ye.docs)==null?void 0:Je.description}}};var Ke,Qe,Xe,Ze,eo;y.parameters={...y.parameters,docs:{...(Ke=y.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <CheckboxGroupWithChildrenRef />,
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
}`,...(Xe=(Qe=y.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source},description:{story:"Passing Checkbox components as `children` lets you hold a ref to an individual\nCheckbox — e.g. to move focus to it programmatically.",...(eo=(Ze=y.parameters)==null?void 0:Ze.docs)==null?void 0:eo.description}}};const kt=["Playground","Default","WithSelection","Horizontal","Vertical","Tile","TileWithSelection","Button","ButtonVertical","ButtonWithSelection","SingleColumn","ThreeColumns","Disabled","WithDescription","WithChildren","WithChildrenAndRef"];export{x as Button,g as ButtonVertical,C as ButtonWithSelection,p as Default,k as Disabled,u as Horizontal,l as Playground,v as SingleColumn,f as ThreeColumns,m as Tile,b as TileWithSelection,h as Vertical,G as WithChildren,y as WithChildrenAndRef,S as WithDescription,d as WithSelection,kt as __namedExportsOrder,ft as default};
