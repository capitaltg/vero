import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as d}from"./index-D4H_InIO.js";import{M as c}from"./MultiSelect-BbKwpHO-.js";import"./useAriaDisabled-DHTVgRPt.js";import"./styles-Bqt2ynIu.js";import"./utils-CU3My8Oi.js";import"./z-index-CmEG1ohp.js";import"./constants-C4w3S9le.js";import"./index-NE6MC3wq.js";import"./CommandItem-CiFaxsn-.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./createLucideIcon-CRH11QI6.js";import"./index-CQ-IqFoI.js";import"./index-DB-GfMvg.js";import"./index-Ak5Mws-w.js";import"./index-CWZjxdH8.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DLaBReRc.js";import"./CommandList-DmlIjmFM.js";import"./Popover-OaSsjRLr.js";import"./index-DonjGF9j.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./check-CT0OM3mY.js";import"./x-B9-lGSIk.js";const z=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],G=({value:t=[],...l})=>{const[a,o]=d.useState(t);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{...l,emptyMessage:"No frameworks found",options:z,placeholder:"Choose your frameworks",searchPlaceholder:"Search frameworks...",value:a,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",a.length>0?a.join(", "):"none"]})]})};G.__docgenInfo={description:"",methods:[],displayName:"MultiSelectCustomPlaceholders",props:{value:{defaultValue:{value:"[]",computed:!1},required:!1}}};const F=`import { useState } from 'react';
import { MultiSelect } from '../src/MultiSelect';
import { MultiSelectProps } from '../types';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const MultiSelectCustomPlaceholders = ({
  value: initialValue = [],
  ...args
}: Partial<MultiSelectProps>) => {
  const [value, setValue] = useState<string[]>(initialValue);
  return (
    <div className="space-y-4">
      <MultiSelect
        {...args}
        emptyMessage="No frameworks found"
        options={options}
        placeholder="Choose your frameworks"
        searchPlaceholder="Search frameworks..."
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,U=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],T=({value:t=[],...l})=>{const[a,o]=d.useState(t);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{...l,options:U,placeholder:"Select frameworks...",value:a,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",a.length>0?a.join(", "):"none"]})]})};T.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDefault",props:{value:{defaultValue:{value:"[]",computed:!1},required:!1}}};const Z=`import { useState } from 'react';
import { MultiSelect } from '../src/MultiSelect';
import { MultiSelectProps } from '../types';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const MultiSelectDefault = ({
  value: initialValue = [],
  ...args
}: Partial<MultiSelectProps>) => {
  const [value, setValue] = useState<string[]>(initialValue);
  return (
    <div className="space-y-4">
      <MultiSelect
        {...args}
        options={options}
        placeholder="Select frameworks..."
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,B=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"},{value:"next",label:"Next.js"},{value:"nuxt",label:"Nuxt.js"},{value:"gatsby",label:"Gatsby"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],$=({value:t=[],...l})=>{const[a,o]=d.useState(t);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{...l,options:B,placeholder:"Select frameworks...",value:a,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",a.length>0?a.join(", "):"none"]})]})};$.__docgenInfo={description:"",methods:[],displayName:"MultiSelectWithManyOptions",props:{value:{defaultValue:{value:"[]",computed:!1},required:!1}}};const H=`import { useState } from 'react';
import { MultiSelect } from '../src/MultiSelect';
import { MultiSelectProps } from '../types';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
  { value: 'next', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt.js' },
  { value: 'gatsby', label: 'Gatsby' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
];

export const MultiSelectWithManyOptions = ({
  value: initialValue = [],
  ...args
}: Partial<MultiSelectProps>) => {
  const [value, setValue] = useState<string[]>(initialValue);
  return (
    <div className="space-y-4">
      <MultiSelect
        {...args}
        options={options}
        placeholder="Select frameworks..."
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,J=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],E=({value:t=["react","vue"],...l})=>{const[a,o]=d.useState(t);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{...l,options:J,placeholder:"Select frameworks...",value:a,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",a.length>0?a.join(", "):"none"]})]})};E.__docgenInfo={description:"",methods:[],displayName:"MultiSelectWithSelection",props:{value:{defaultValue:{value:"['react', 'vue']",computed:!1},required:!1}}};const K=`import { useState } from 'react';
import { MultiSelect } from '../src/MultiSelect';
import { MultiSelectProps } from '../types';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const MultiSelectWithSelection = ({
  value: initialValue = ['react', 'vue'],
  ...args
}: Partial<MultiSelectProps>) => {
  const [value, setValue] = useState<string[]>(initialValue);
  return (
    <div className="space-y-4">
      <MultiSelect
        {...args}
        options={options}
        placeholder="Select frameworks..."
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,Ne={title:"Inputs & Forms/MultiSelect",component:c,parameters:{},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text for the multiselect",table:{type:{summary:"string"}}},searchPlaceholder:{control:"text",description:"Placeholder text for the search input",table:{type:{summary:"string"}}},emptyMessage:{control:"text",description:"Message to display when no options are found",table:{type:{summary:"string"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",description:"Whether the component is disabled",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the component"},listClassName:{type:"string",description:"Additional class names to apply to the options list"},name:{control:"text",description:"The name attribute for form submission. This is required for the multi-select value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the multi-select is required for form validation. When true, the form cannot be submitted without at least one selection.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the multi-select when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}}},p=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],s={args:{options:p,value:[],onChange:()=>{},placeholder:"Select frameworks..."},tags:["!autodocs"]},r={render:t=>e.jsx(T,{...t}),args:{options:p,value:[],onChange:()=>{},placeholder:"Select frameworks..."},parameters:{docs:{source:{code:Z,language:"tsx"}}}},n={render:t=>e.jsx(E,{...t}),args:{options:p,value:["react","vue"],onChange:()=>{},placeholder:"Select frameworks..."},parameters:{docs:{source:{code:K,language:"tsx"}}}},u={render:t=>e.jsx(G,{...t}),args:{options:p,value:[],onChange:()=>{},placeholder:"Choose your frameworks",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found"},parameters:{docs:{source:{code:F,language:"tsx"}}}},i={render:t=>e.jsx($,{...t}),args:{options:[...p,{value:"next",label:"Next.js"},{value:"nuxt",label:"Nuxt.js"},{value:"gatsby",label:"Gatsby"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],value:[],onChange:()=>{},placeholder:"Select frameworks..."},parameters:{docs:{source:{code:H,language:"tsx"}}}};var m,v,h,g,S;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source},description:{story:`Interactive playground for the MultiSelect component.
Use the controls to experiment with different props and states.`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.description}}};var f,b,x,y,M;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <MultiSelectDefault {...args} />,
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
        language: 'tsx'
      }
    }
  }
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source},description:{story:`The default state of the MultiSelect component.
Shows a searchable dropdown that allows multiple selections from a list of frameworks.`,...(M=(y=r.parameters)==null?void 0:y.docs)==null?void 0:M.description}}};var w,C,j,N,V;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <MultiSelectWithSelection {...args} />,
  args: {
    options,
    value: ['react', 'vue'],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithSelection,
        language: 'tsx'
      }
    }
  }
}`,...(j=(C=n.parameters)==null?void 0:C.docs)==null?void 0:j.source},description:{story:`MultiSelect with pre-selected values.
Demonstrates how the component appears with multiple items already selected.`,...(V=(N=n.parameters)==null?void 0:N.docs)==null?void 0:V.description}}};var P,k,W,A,R;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <MultiSelectCustomPlaceholders {...args} />,
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Choose your frameworks',
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
}`,...(W=(k=u.parameters)==null?void 0:k.docs)==null?void 0:W.source},description:{story:`MultiSelect with custom placeholder text.
Shows how to customize the placeholder and search text for better user guidance.`,...(R=(A=u.parameters)==null?void 0:A.docs)==null?void 0:R.description}}};var D,q,_,O,I;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <MultiSelectWithManyOptions {...args} />,
  args: {
    options: [...options, {
      value: 'next',
      label: 'Next.js'
    }, {
      value: 'nuxt',
      label: 'Nuxt.js'
    }, {
      value: 'gatsby',
      label: 'Gatsby'
    }, {
      value: 'remix',
      label: 'Remix'
    }, {
      value: 'astro',
      label: 'Astro'
    }],
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithManyOptions,
        language: 'tsx'
      }
    }
  }
}`,...(_=(q=i.parameters)==null?void 0:q.docs)==null?void 0:_.source},description:{story:`MultiSelect with an extended list of options.
Demonstrates how the component handles a larger set of choices with scrolling.`,...(I=(O=i.parameters)==null?void 0:O.docs)==null?void 0:I.description}}};const Ve=["Playground","Default","WithSelection","CustomPlaceholders","WithManyOptions"];export{u as CustomPlaceholders,r as Default,s as Playground,i as WithManyOptions,n as WithSelection,Ve as __namedExportsOrder,Ne as default};
