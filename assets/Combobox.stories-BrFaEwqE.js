import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{C as c}from"./Combobox-_Bf94zQv.js";import{r as i}from"./index-D4H_InIO.js";import"./Button-BwlrdoZf.js";import"./useAriaDisabled-DHTVgRPt.js";import"./utils-CU3My8Oi.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";import"./CommandItem-CiFaxsn-.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CQ-IqFoI.js";import"./index-DB-GfMvg.js";import"./index-Ak5Mws-w.js";import"./index-CWZjxdH8.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DLaBReRc.js";import"./CommandList-DmlIjmFM.js";import"./Popover-OaSsjRLr.js";import"./z-index-CmEG1ohp.js";import"./index-DonjGF9j.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./check-CT0OM3mY.js";const M=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],W=({value:o="",...t})=>{const[a,r]=i.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{options:M,placeholder:"Select framework...",value:a,onChange:r,...t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};W.__docgenInfo={description:"",methods:[],displayName:"ComboboxDefault",props:{value:{defaultValue:{value:"''",computed:!1},required:!1}}};const q=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],_=({value:o="react",...t})=>{const[a,r]=i.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{options:q,placeholder:"Select framework...",value:a,onChange:r,...t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};_.__docgenInfo={description:"",methods:[],displayName:"ComboboxWithValue",props:{value:{defaultValue:{value:"'react'",computed:!1},required:!1}}};const E=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],I=({value:o="",...t})=>{const[a,r]=i.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{emptyMessage:"No frameworks found",options:E,placeholder:"Choose your framework",searchPlaceholder:"Search frameworks...",value:a,onChange:r,...t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};I.__docgenInfo={description:"",methods:[],displayName:"ComboboxCustomPlaceholders",props:{value:{defaultValue:{value:"''",computed:!1},required:!1}}};const T=`import { useState } from 'react';
import { Combobox } from '../src/Combobox';
import { ComboboxProps } from '../types';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const ComboboxDefault = ({ value: initialValue = '', ...args }: Partial<ComboboxProps>) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Combobox
        options={options}
        placeholder="Select framework..."
        value={value}
        onChange={setValue}
        {...args}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,$=`import { useState } from 'react';
import { Combobox } from '../src/Combobox';
import { ComboboxProps } from '../types';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const ComboboxWithValue = ({
  value: initialValue = 'react',
  ...args
}: Partial<ComboboxProps>) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Combobox
        options={options}
        placeholder="Select framework..."
        value={value}
        onChange={setValue}
        {...args}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,z=`import { useState } from 'react';
import { Combobox } from '../src/Combobox';
import { ComboboxProps } from '../types';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const ComboboxCustomPlaceholders = ({
  value: initialValue = '',
  ...args
}: Partial<ComboboxProps>) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Combobox
        emptyMessage="No frameworks found"
        options={options}
        placeholder="Choose your framework"
        searchPlaceholder="Search frameworks..."
        value={value}
        onChange={setValue}
        {...args}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,ge={title:"Inputs & Forms/Combobox",component:c,parameters:{},tags:["autodocs"],argTypes:{value:{control:"text",description:"The selected value",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Placeholder text for the combobox",table:{type:{summary:"string"}}},searchPlaceholder:{control:"text",description:"Placeholder text for the search input",table:{type:{summary:"string"}}},emptyMessage:{control:"text",description:"Message to display when no options are found",table:{type:{summary:"string"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",description:"Whether the component is disabled",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the component"},listClassName:{type:"string",description:"Additional class names to apply to the options list"}}},m=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],s={args:{options:m,value:"",onChange:()=>{},placeholder:"Select framework..."},tags:["!autodocs"]},l={render:o=>e.jsx(W,{...o}),args:{options:m,value:"",onChange:()=>{},placeholder:"Select framework..."},parameters:{docs:{source:{code:T,language:"tsx"}}}},n={render:o=>e.jsx(_,{...o}),args:{options:m,value:"react",onChange:()=>{},placeholder:"Select framework..."},parameters:{docs:{source:{code:$,language:"tsx"}}}},u={render:o=>e.jsx(I,{...o}),args:{options:m,value:"",onChange:()=>{},placeholder:"Choose your framework",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found"},parameters:{docs:{source:{code:z,language:"tsx"}}}};var p,d,b,v,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select framework...'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(b=(d=s.parameters)==null?void 0:d.docs)==null?void 0:b.source},description:{story:`Interactive playground for the Combobox component.
Use the controls to experiment with different props and states.`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.description}}};var g,x,f,C,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <ComboboxDefault {...args} />,
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select framework...'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
        language: 'tsx'
      }
    }
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:`The default state of the Combobox component.
Shows a searchable dropdown with framework options.`,...(S=(C=l.parameters)==null?void 0:C.docs)==null?void 0:S.description}}};var y,w,V,P,k;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <ComboboxWithValue {...args} />,
  args: {
    options,
    value: 'react',
    onChange: () => {},
    placeholder: 'Select framework...'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithValue,
        language: 'tsx'
      }
    }
  }
}`,...(V=(w=n.parameters)==null?void 0:w.docs)==null?void 0:V.source},description:{story:`Combobox with a pre-selected value.
Demonstrates how the component appears with an initial selection.`,...(k=(P=n.parameters)==null?void 0:P.docs)==null?void 0:k.description}}};var N,j,D,A,R;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <ComboboxCustomPlaceholders {...args} />,
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Choose your framework',
    searchPlaceholder: 'Search frameworks...',
    emptyMessage: 'No frameworks found'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomPlaceholders,
        language: 'tsx'
      }
    }
  }
}`,...(D=(j=u.parameters)==null?void 0:j.docs)==null?void 0:D.source},description:{story:`Combobox with custom placeholder text.
Shows how to customize the placeholder and search text.`,...(R=(A=u.parameters)==null?void 0:A.docs)==null?void 0:R.description}}};const xe=["Playground","Default","WithValue","CustomPlaceholders"];export{u as CustomPlaceholders,l as Default,s as Playground,n as WithValue,xe as __namedExportsOrder,ge as default};
