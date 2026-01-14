import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as m}from"./index-D4H_InIO.js";import{C as c}from"./Combobox-sNBR3vFC.js";import"./Button-BwlrdoZf.js";import"./useAriaDisabled-DHTVgRPt.js";import"./utils-CU3My8Oi.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";import"./CommandItem-CiFaxsn-.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CQ-IqFoI.js";import"./index-DB-GfMvg.js";import"./index-Ak5Mws-w.js";import"./index-CWZjxdH8.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DLaBReRc.js";import"./CommandList-DmlIjmFM.js";import"./Popover-OaSsjRLr.js";import"./z-index-CmEG1ohp.js";import"./index-DonjGF9j.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./check-CT0OM3mY.js";const I=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],q=({value:o="",...t})=>{const[a,r]=m.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{...t,emptyMessage:"No frameworks found",options:I,placeholder:"Choose your framework",searchPlaceholder:"Search frameworks...",value:a,onChange:r}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};q.__docgenInfo={description:"",methods:[],displayName:"ComboboxCustomPlaceholders",props:{value:{defaultValue:{value:"''",computed:!1},required:!1}}};const M=`import { useState } from 'react';
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
        {...args}
        emptyMessage="No frameworks found"
        options={options}
        placeholder="Choose your framework"
        searchPlaceholder="Search frameworks..."
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,T=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],R=({value:o="",...t})=>{const[a,r]=m.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{...t,options:T,placeholder:"Select framework...",value:a,onChange:r}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};R.__docgenInfo={description:"",methods:[],displayName:"ComboboxDefault",props:{value:{defaultValue:{value:"''",computed:!1},required:!1}}};const E=`import { useState } from 'react';
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
        {...args}
        options={options}
        placeholder="Select framework..."
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,$=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],_=({value:o="react",...t})=>{const[a,r]=m.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{...t,options:$,placeholder:"Select framework...",value:a,onChange:r}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};_.__docgenInfo={description:"",methods:[],displayName:"ComboboxWithValue",props:{value:{defaultValue:{value:"'react'",computed:!1},required:!1}}};const z=`import { useState } from 'react';
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
        {...args}
        options={options}
        placeholder="Select framework..."
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,ge={title:"Inputs & Forms/Combobox",component:c,parameters:{},tags:["autodocs"],argTypes:{value:{control:"text",description:"The selected value",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Placeholder text for the combobox",table:{type:{summary:"string"}}},searchPlaceholder:{control:"text",description:"Placeholder text for the search input",table:{type:{summary:"string"}}},emptyMessage:{control:"text",description:"Message to display when no options are found",table:{type:{summary:"string"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",description:"Whether the component is disabled",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the component"},listClassName:{type:"string",description:"Additional class names to apply to the options list"},name:{control:"text",description:"The name attribute for form submission. This is required for the combobox value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the combobox is required for form validation. When true, the form cannot be submitted without a selection.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the combobox when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}}},i=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],s={args:{options:i,value:"",placeholder:"Select framework...",onChange:()=>{}},tags:["!autodocs"]},l={render:o=>e.jsx(R,{...o}),args:{options:i,value:"",placeholder:"Select framework...",onChange:()=>{}},parameters:{docs:{source:{code:E,language:"tsx"}}}},n={render:o=>e.jsx(_,{...o}),args:{options:i,value:"react",placeholder:"Select framework...",onChange:()=>{}},parameters:{docs:{source:{code:z,language:"tsx"}}}},u={render:o=>e.jsx(q,{...o}),args:{options:i,value:"",placeholder:"Choose your framework",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found",onChange:()=>{}},parameters:{docs:{source:{code:M,language:"tsx"}}}};var p,d,b,h,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    options,
    value: '',
    placeholder: 'Select framework...',
    onChange: () => {}
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(b=(d=s.parameters)==null?void 0:d.docs)==null?void 0:b.source},description:{story:`Interactive playground for the Combobox component.
Use the controls to experiment with different props and states.`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.description}}};var g,f,x,C,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <ComboboxDefault {...args} />,
  args: {
    options,
    value: '',
    placeholder: 'Select framework...',
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
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:`The default state of the Combobox component.
Shows a searchable dropdown with framework options.`,...(y=(C=l.parameters)==null?void 0:C.docs)==null?void 0:y.description}}};var S,w,V,P,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <ComboboxWithValue {...args} />,
  args: {
    options,
    value: 'react',
    placeholder: 'Select framework...',
    onChange: () => {}
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
Demonstrates how the component appears with an initial selection.`,...(k=(P=n.parameters)==null?void 0:P.docs)==null?void 0:k.description}}};var N,j,W,A,D;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <ComboboxCustomPlaceholders {...args} />,
  args: {
    options,
    value: '',
    placeholder: 'Choose your framework',
    searchPlaceholder: 'Search frameworks...',
    emptyMessage: 'No frameworks found',
    onChange: () => {}
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomPlaceholders,
        language: 'tsx'
      }
    }
  }
}`,...(W=(j=u.parameters)==null?void 0:j.docs)==null?void 0:W.source},description:{story:`Combobox with custom placeholder text.
Shows how to customize the placeholder and search text.`,...(D=(A=u.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};const fe=["Playground","Default","WithValue","CustomPlaceholders"];export{u as CustomPlaceholders,l as Default,s as Playground,n as WithValue,fe as __namedExportsOrder,ge as default};
