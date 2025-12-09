import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{C as n}from"./Combobox-DEXKFe9d.js";import{r as u}from"./index-D4H_InIO.js";import"./Button-BwlrdoZf.js";import"./useAriaDisabled-DHTVgRPt.js";import"./utils-CU3My8Oi.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";import"./CommandItem-CiFaxsn-.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CQ-IqFoI.js";import"./index-DB-GfMvg.js";import"./index-Ak5Mws-w.js";import"./index-CWZjxdH8.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DLaBReRc.js";import"./CommandList-DmlIjmFM.js";import"./z-index-CmEG1ohp.js";import"./Popover-Cm8LmWn2.js";import"./index-BnJEnLsy.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./check-CT0OM3mY.js";const A=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],R=()=>{const[o,a]=u.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:A,placeholder:"Select framework...",value:o,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};R.__docgenInfo={description:"",methods:[],displayName:"ComboboxDefault"};const I=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],W=()=>{const[o,a]=u.useState("react");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{options:I,placeholder:"Select framework...",value:o,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};W.__docgenInfo={description:"",methods:[],displayName:"ComboboxWithValue"};const M=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],_=()=>{const[o,a]=u.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{emptyMessage:"No frameworks found",options:M,placeholder:"Choose your framework",searchPlaceholder:"Search frameworks...",value:o,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};_.__docgenInfo={description:"",methods:[],displayName:"ComboboxCustomPlaceholders"};const E=`import { useState } from 'react';
import { Combobox } from '../src/Combobox';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const ComboboxDefault = () => {
  const [value, setValue] = useState<string>('');
  return (
    <div className="space-y-4">
      <Combobox
        options={options}
        placeholder="Select framework..."
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,$=`import { useState } from 'react';
import { Combobox } from '../src/Combobox';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const ComboboxWithValue = () => {
  const [value, setValue] = useState<string>('react');
  return (
    <div className="space-y-4">
      <Combobox
        options={options}
        placeholder="Select framework..."
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,z=`import { useState } from 'react';
import { Combobox } from '../src/Combobox';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const ComboboxCustomPlaceholders = () => {
  const [value, setValue] = useState<string>('');
  return (
    <div className="space-y-4">
      <Combobox
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
`,be={title:"Inputs & Forms/Combobox",component:n,parameters:{},tags:["autodocs"]},c=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],t={args:{options:c,value:"",onChange:()=>{},placeholder:"Select framework..."},tags:["!autodocs"]},r={render:()=>e.jsx(R,{}),args:{options:c,value:"",onChange:()=>{},placeholder:"Select framework..."},parameters:{docs:{source:{code:E,language:"tsx"}}}},s={render:()=>e.jsx(W,{}),args:{options:c,value:"react",onChange:()=>{},placeholder:"Select framework..."},parameters:{docs:{source:{code:$,language:"tsx"}}}},l={render:()=>e.jsx(_,{}),args:{options:c,value:"",onChange:()=>{},placeholder:"Choose your framework",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found"},parameters:{docs:{source:{code:z,language:"tsx"}}}};var m,d,p,i,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select framework...'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source},description:{story:`Interactive playground for the Combobox component.
Use the controls to experiment with different props and states.`,...(v=(i=t.parameters)==null?void 0:i.docs)==null?void 0:v.description}}};var b,h,g,x,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <ComboboxDefault />,
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
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source},description:{story:`The default state of the Combobox component.
Shows a searchable dropdown with framework options.`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};var C,S,w,y,V;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <ComboboxWithValue />,
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
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:`Combobox with a pre-selected value.
Demonstrates how the component appears with an initial selection.`,...(V=(y=s.parameters)==null?void 0:y.docs)==null?void 0:V.description}}};var k,N,j,P,D;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <ComboboxCustomPlaceholders />,
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
}`,...(j=(N=l.parameters)==null?void 0:N.docs)==null?void 0:j.source},description:{story:`Combobox with custom placeholder text.
Shows how to customize the placeholder and search text.`,...(D=(P=l.parameters)==null?void 0:P.docs)==null?void 0:D.description}}};const he=["Playground","Default","WithValue","CustomPlaceholders"];export{l as CustomPlaceholders,r as Default,t as Playground,s as WithValue,he as __namedExportsOrder,be as default};
