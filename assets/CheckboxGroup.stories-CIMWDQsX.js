import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as n}from"./index-B0WjJBI_.js";import{C as s}from"./CheckboxGroup-Cq7LeKgv.js";import{C as y}from"./Checkbox-DKYTaitW.js";import{B as vo}from"./Button-DJBoR_IJ.js";const fo=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"}],oo=()=>{const[o,t]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:fo,orientation:"horizontal",value:o,variant:"button",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};oo.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupButton"};const ko=`import { useState } from 'react';
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
`,Oo=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"}],no=()=>{const[o,t]=n.useState(["option2"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:Oo,orientation:"horizontal",value:o,variant:"button",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};no.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupButtonWithSelection"};const yo=`import { useState } from 'react';
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
`,Wo=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"}],ao=()=>{const[o,t]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:Wo,orientation:"horizontal",value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};ao.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupHorizontal"};const To=`import { useState } from 'react';
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
`,wo=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],ro=()=>{const[o,t]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{columns:1,options:wo,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",o.length>0?o.join(", "):"none"]})]})};ro.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupSingleColumn"};const Bo=`import { useState } from 'react';
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
`,zo=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],co=()=>{const[o,t]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{columns:3,options:zo,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",o.length>0?o.join(", "):"none"]})]})};co.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupThreeColumns"};const _o=`import { useState } from 'react';
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
`,Io=[{id:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{id:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{id:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],lo=()=>{const[o,t]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:Io,value:o,variant:"tile",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};lo.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupTile"};const Ro=`import { useState } from 'react';
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
`,Po=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"}],uo=()=>{const[o,t]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:Po,orientation:"vertical",value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",o.length>0?o.join(", "):"none"]})]})};uo.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupVertical"};const $o=`import { useState } from 'react';
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
`,ho=()=>{const[o,t]=n.useState(["email"]),G=O=>j=>t(a=>j?[...a,O]:a.filter(N=>N!==O));return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(y,{id:"children-email",isChecked:o.includes("email"),label:"Email",onCheckedChange:G("email")}),e.jsx(y,{id:"children-sms",isChecked:o.includes("sms"),label:"SMS",onCheckedChange:G("sms")})]})}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected: ",o.join(", ")||"none"]})]})};ho.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupWithChildren"};const qo=`import { useState } from 'react';
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
`,mo=()=>{const[o,t]=n.useState(["email"]),G=n.useRef(null),O=a=>N=>t(V=>N?[...V,a]:V.filter(Co=>Co!==a)),j=()=>{var a;(a=G.current)==null||a.focus()};return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(y,{ref:G,id:"ref-email",isChecked:o.includes("email"),label:"Email",onCheckedChange:O("email")}),e.jsx(y,{id:"ref-sms",isChecked:o.includes("sms"),label:"SMS",onCheckedChange:O("sms")})]})}),e.jsx(vo,{size:"sm",type:"button",variant:"primary",onClick:j,children:"Focus first checkbox"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected: ",o.join(", ")||"none"]})]})};mo.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupWithChildrenRef"};const Ho=`import { Button } from '@/components/Button';
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
`,Mo=[{id:"option1",label:"Option 1",description:"This is a description for option 1 that provides additional context."},{id:"option2",label:"Option 2",description:"This is a description for option 2 that provides additional context."},{id:"option3",label:"Option 3",description:"This is a description for option 3 that provides additional context."},{id:"option4",label:"Option 4",description:"This is a description for option 4 that provides additional context."}],xo=()=>{const[o,t]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:Mo,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",o.length>0?o.join(", "):"none"]})]})};xo.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupWithDescription"};const Ao=`import { useState } from 'react';
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
`,Uo=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],bo=()=>{const[o,t]=n.useState(["option1","option3"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:Uo,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",o.length>0?o.join(", "):"none"]})]})};bo.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupWithSelection"};const Yo=`import { useState } from 'react';
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
`,Jo={title:"Inputs & Forms/CheckboxGroup",component:s,parameters:{docs:{description:{component:"CheckboxGroup lets users select zero, one, or many options from a list. Use it for multi-select choices (e.g. interests, notification preferences).\n\n**Two usage patterns:**\n- **Options:** Pass an `options` array; CheckboxGroup renders Checkbox items and applies layout (default, tile, or button variant, columns, orientation).\n- **Children:** Pass **Checkbox** components as `children` when you need custom layout or structure (or a ref to a specific Checkbox); you manage each Checkbox’s checked state.\n\nWhen multiple CheckboxGroups appear on the same page with overlapping option IDs, give each group a unique `id` so input IDs stay unique (each checkbox input ID becomes `{id}-{option.id}`). You can override the input ID for a single option by passing an optional `inputId` on that option."}}},argTypes:{id:{control:"text",table:{type:{summary:"string"}}},value:{control:"object",type:{name:"array",value:{name:"string"},required:!1}},onChange:{type:{name:"function",required:!0},action:"selection changed"},options:{control:"object",type:{name:"array",value:{name:"object",value:{}},required:!0}},orientation:{control:"radio",options:["horizontal","vertical"],type:{name:"string",required:!1},table:{type:{summary:"horizontal | vertical"}}},variant:{control:"radio",options:["default","tile","button"],type:{name:"string",required:!1},table:{type:{summary:"default | tile | button"}}},columns:{control:"radio",options:[1,2,3,4],type:{name:"number",required:!1}},isDisabled:{control:"boolean",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},i=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"}],go=[{id:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{id:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{id:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],r={args:{options:i,value:[],onChange:()=>{}}},c={render:()=>e.jsx(so,{}),args:{options:i,value:[],onChange:()=>{}},parameters:{docs:{source:{code:No,language:"tsx"}}}},l={render:()=>e.jsx(bo,{}),args:{options:i,value:["option1","option3"],onChange:()=>{}},parameters:{docs:{source:{code:Yo,language:"tsx"}}}},p={render:()=>e.jsx(ao,{}),args:{options:i,value:[],onChange:()=>{},orientation:"horizontal"},parameters:{docs:{source:{code:To,language:"tsx"}}}},d={render:()=>e.jsx(uo,{}),args:{options:i,value:[],onChange:()=>{},orientation:"vertical"},parameters:{docs:{source:{code:$o,language:"tsx"}}}},u={render:()=>e.jsx(lo,{}),args:{options:go,value:[],onChange:()=>{},variant:"tile"},parameters:{docs:{source:{code:Ro,language:"tsx"}}}},h={render:()=>e.jsx(po,{}),args:{options:go,value:["business"],onChange:()=>{},variant:"tile"},parameters:{docs:{source:{code:Eo,language:"tsx"}}}},m={render:()=>e.jsx(oo,{}),args:{options:i,value:[],onChange:()=>{},variant:"button",orientation:"horizontal"},parameters:{docs:{source:{code:ko,language:"tsx"}}}},x={render:()=>e.jsx(to,{}),args:{options:i,value:[],onChange:()=>{},variant:"button",orientation:"vertical"},parameters:{docs:{source:{code:Go,language:"tsx"}}}},b={render:()=>e.jsx(no,{}),args:{options:i,value:["option2"],onChange:()=>{},variant:"button"},parameters:{docs:{source:{code:yo,language:"tsx"}}}},g={render:()=>e.jsx(ro,{}),args:{options:i,columns:1,value:[],onChange:()=>{}},parameters:{docs:{source:{code:Bo,language:"tsx"}}}},C={render:()=>e.jsx(co,{}),args:{options:i,columns:3,value:[],onChange:()=>{}},parameters:{docs:{source:{code:_o,language:"tsx"}}}},v={render:()=>e.jsx(io,{}),args:{options:i,value:["option2"],onChange:()=>{},isDisabled:!0},parameters:{docs:{source:{code:Do,language:"tsx"}}}},f={render:()=>e.jsx(xo,{}),args:{options:[{id:"option1",label:"Option 1",description:"This is a description for option 1 that provides additional context."},{id:"option2",label:"Option 2",description:"This is a description for option 2 that provides additional context."},{id:"option3",label:"Option 3",description:"This is a description for option 3 that provides additional context."},{id:"option4",label:"Option 4",description:"This is a description for option 4 that provides additional context."}],value:[],onChange:()=>{}},parameters:{docs:{source:{code:Ao,language:"tsx"}}}},k={render:()=>e.jsx(ho,{}),args:{children:void 0},parameters:{docs:{source:{code:qo,language:"tsx"}}}},S={render:()=>e.jsx(mo,{}),args:{children:void 0},parameters:{docs:{source:{code:Ho,language:"tsx"}}}};var D,W,T,w,B;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    value: [],
    onChange: () => {}
  }
}`,...(T=(W=r.parameters)==null?void 0:W.docs)==null?void 0:T.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(B=(w=r.parameters)==null?void 0:w.docs)==null?void 0:B.description}}};var z,_,I,R,F;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(I=(_=c.parameters)==null?void 0:_.docs)==null?void 0:I.source},description:{story:`The default state of the CheckboxGroup component.
Shows a basic vertical checkbox group with no initial selection.`,...(F=(R=c.parameters)==null?void 0:R.docs)==null?void 0:F.description}}};var E,P,$,q,H;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...($=(P=l.parameters)==null?void 0:P.docs)==null?void 0:$.source},description:{story:`CheckboxGroup with pre-selected values.
Demonstrates how the group appears with multiple checkboxes selected.`,...(H=(q=l.parameters)==null?void 0:q.docs)==null?void 0:H.description}}};var M,A,U,Y,J;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(U=(A=p.parameters)==null?void 0:A.docs)==null?void 0:U.source},description:{story:`CheckboxGroup with horizontal layout.
Shows checkboxes arranged in a horizontal line.`,...(J=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:J.description}}};var K,L,Q,X,Z;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(L=d.parameters)==null?void 0:L.docs)==null?void 0:Q.source},description:{story:`CheckboxGroup with vertical layout.
Shows checkboxes stacked vertically.`,...(Z=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var ee,oe,te,ne,se;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:te.source},description:{story:`CheckboxGroup with tile variant.
Shows checkboxes as larger tiles with descriptions.`,...(se=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:se.description}}};var ie,ae,re,ce,le;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(re=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:re.source},description:{story:`Tile variant CheckboxGroup with pre-selected values.
Demonstrates how tile checkboxes appear with initial selections.`,...(le=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:le.description}}};var pe,de,ue,he,me;m.parameters={...m.parameters,docs:{...(pe=m.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(de=m.parameters)==null?void 0:de.docs)==null?void 0:ue.source},description:{story:`CheckboxGroup with button variant.
Shows checkboxes styled as buttons.`,...(me=(he=m.parameters)==null?void 0:he.docs)==null?void 0:me.description}}};var xe,be,ge,Ce,ve;x.parameters={...x.parameters,docs:{...(xe=x.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(ge=(be=x.parameters)==null?void 0:be.docs)==null?void 0:ge.source},description:{story:`Button variant CheckboxGroup with vertical layout.
Shows checkboxes styled as buttons arranged vertically.`,...(ve=(Ce=x.parameters)==null?void 0:Ce.docs)==null?void 0:ve.description}}};var fe,ke,Se,Ge,Oe;b.parameters={...b.parameters,docs:{...(fe=b.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Se=(ke=b.parameters)==null?void 0:ke.docs)==null?void 0:Se.source},description:{story:`Button variant CheckboxGroup with pre-selected values.
Demonstrates how button checkboxes appear with initial selections.`,...(Oe=(Ge=b.parameters)==null?void 0:Ge.docs)==null?void 0:Oe.description}}};var ye,je,Ne,Ve,De;g.parameters={...g.parameters,docs:{...(ye=g.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ne=(je=g.parameters)==null?void 0:je.docs)==null?void 0:Ne.source},description:{story:`CheckboxGroup in a single column layout.
Shows checkboxes stacked vertically in one column.`,...(De=(Ve=g.parameters)==null?void 0:Ve.docs)==null?void 0:De.description}}};var We,Te,we,Be,ze;C.parameters={...C.parameters,docs:{...(We=C.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(we=(Te=C.parameters)==null?void 0:Te.docs)==null?void 0:we.source},description:{story:`CheckboxGroup in a three-column layout.
Demonstrates how checkboxes can be arranged in multiple columns.`,...(ze=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:ze.description}}};var _e,Ie,Re,Fe,Ee;v.parameters={...v.parameters,docs:{...(_e=v.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Re=(Ie=v.parameters)==null?void 0:Ie.docs)==null?void 0:Re.source},description:{story:"CheckboxGroup with the entire group disabled.\nSet `isDisabled` on the group to disable every option at once; individual\noptions can also be disabled via `option.isDisabled`.",...(Ee=(Fe=v.parameters)==null?void 0:Fe.docs)==null?void 0:Ee.description}}};var Pe,$e,qe,He,Me;f.parameters={...f.parameters,docs:{...(Pe=f.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(qe=($e=f.parameters)==null?void 0:$e.docs)==null?void 0:qe.source},description:{story:`CheckboxGroup with descriptions in default variant.
Shows checkbox options with descriptions below each label.`,...(Me=(He=f.parameters)==null?void 0:He.docs)==null?void 0:Me.description}}};var Ae,Ue,Ye,Je,Ke;k.parameters={...k.parameters,docs:{...(Ae=k.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ye=(Ue=k.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source},description:{story:"Instead of an `options` array, pass **Checkbox** components as `children` when\nyou need custom layout or structure. In this mode you manage each Checkbox's\n`isChecked`/`onCheckedChange` yourself; CheckboxGroup just provides the group\nwrapper and layout.",...(Ke=(Je=k.parameters)==null?void 0:Je.docs)==null?void 0:Ke.description}}};var Le,Qe,Xe,Ze,eo;S.parameters={...S.parameters,docs:{...(Le=S.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=S.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source},description:{story:"Passing Checkbox components as `children` lets you hold a ref to an individual\nCheckbox — e.g. to move focus to it programmatically.",...(eo=(Ze=S.parameters)==null?void 0:Ze.docs)==null?void 0:eo.description}}};const Ko=["Playground","Default","WithSelection","Horizontal","Vertical","Tile","TileWithSelection","Button","ButtonVertical","ButtonWithSelection","SingleColumn","ThreeColumns","Disabled","WithDescription","WithChildren","WithChildrenAndRef"],ot=Object.freeze(Object.defineProperty({__proto__:null,Button:m,ButtonVertical:x,ButtonWithSelection:b,Default:c,Disabled:v,Horizontal:p,Playground:r,SingleColumn:g,ThreeColumns:C,Tile:u,TileWithSelection:h,Vertical:d,WithChildren:k,WithChildrenAndRef:S,WithDescription:f,WithSelection:l,__namedExportsOrder:Ko,default:Jo},Symbol.toStringTag,{value:"Module"}));export{ot as C,r as P};
