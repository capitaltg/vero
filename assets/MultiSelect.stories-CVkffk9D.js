import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{M as u}from"./MultiSelect-Vr6rRbN2.js";import{r as i}from"./index-D4H_InIO.js";import"./utils-CU3My8Oi.js";import"./z-index-CmEG1ohp.js";import"./CommandItem-CiFaxsn-.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./createLucideIcon-CRH11QI6.js";import"./index-CQ-IqFoI.js";import"./index-DB-GfMvg.js";import"./index-Ak5Mws-w.js";import"./index-CWZjxdH8.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DLaBReRc.js";import"./CommandList-DmlIjmFM.js";import"./Popover-Cm8LmWn2.js";import"./styles-Bqt2ynIu.js";import"./index-BnJEnLsy.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./Button-BwlrdoZf.js";import"./useAriaDisabled-DHTVgRPt.js";import"./constants-C4w3S9le.js";import"./index-NE6MC3wq.js";import"./check-CT0OM3mY.js";import"./x-B9-lGSIk.js";const z=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],I=()=>{const[t,a]=i.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(u,{options:z,placeholder:"Select frameworks...",value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",t.length>0?t.join(", "):"none"]})]})};I.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDefault"};const F=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],G=()=>{const[t,a]=i.useState(["react","vue"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(u,{options:F,placeholder:"Select frameworks...",value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",t.length>0?t.join(", "):"none"]})]})};G.__docgenInfo={description:"",methods:[],displayName:"MultiSelectWithSelection"};const T=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],$=()=>{const[t,a]=i.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(u,{emptyMessage:"No frameworks found",options:T,placeholder:"Choose your frameworks",searchPlaceholder:"Search frameworks...",value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",t.length>0?t.join(", "):"none"]})]})};$.__docgenInfo={description:"",methods:[],displayName:"MultiSelectCustomPlaceholders"};const U=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"},{value:"next",label:"Next.js"},{value:"nuxt",label:"Nuxt.js"},{value:"gatsby",label:"Gatsby"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],E=()=>{const[t,a]=i.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(u,{options:U,placeholder:"Select frameworks...",value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",t.length>0?t.join(", "):"none"]})]})};E.__docgenInfo={description:"",methods:[],displayName:"MultiSelectWithManyOptions"};const q=`import { useState } from 'react';
import { MultiSelect } from '../src/MultiSelect';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const MultiSelectDefault = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <MultiSelect
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
`,B=`import { useState } from 'react';
import { MultiSelect } from '../src/MultiSelect';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const MultiSelectWithSelection = () => {
  const [value, setValue] = useState<string[]>(['react', 'vue']);
  return (
    <div className="space-y-4">
      <MultiSelect
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
`,H=`import { useState } from 'react';
import { MultiSelect } from '../src/MultiSelect';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const MultiSelectCustomPlaceholders = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <MultiSelect
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
`,J=`import { useState } from 'react';
import { MultiSelect } from '../src/MultiSelect';

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

export const MultiSelectWithManyOptions = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <MultiSelect
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
`,je={title:"Inputs & Forms/MultiSelect",component:u,parameters:{},tags:["autodocs"]},c=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],l={args:{options:c,value:[],onChange:()=>{},placeholder:"Select frameworks..."},tags:["!autodocs"]},o={render:()=>e.jsx(I,{}),args:{options:c,value:[],onChange:()=>{},placeholder:"Select frameworks..."},parameters:{docs:{source:{code:q,language:"tsx"}}}},s={render:()=>e.jsx(G,{}),args:{options:c,value:["react","vue"],onChange:()=>{},placeholder:"Select frameworks..."},parameters:{docs:{source:{code:B,language:"tsx"}}}},r={render:()=>e.jsx($,{}),args:{options:c,value:[],onChange:()=>{},placeholder:"Choose your frameworks",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found"},parameters:{docs:{source:{code:H,language:"tsx"}}}},n={render:()=>e.jsx(E,{}),args:{options:[...c,{value:"next",label:"Next.js"},{value:"nuxt",label:"Nuxt.js"},{value:"gatsby",label:"Gatsby"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],value:[],onChange:()=>{},placeholder:"Select frameworks..."},parameters:{docs:{source:{code:J,language:"tsx"}}}};var d,p,m,v,h;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:`Interactive playground for the MultiSelect component.
Use the controls to experiment with different props and states.`,...(h=(v=l.parameters)==null?void 0:v.docs)==null?void 0:h.description}}};var g,S,x,b,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <MultiSelectDefault />,
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
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source},description:{story:`The default state of the MultiSelect component.
Shows a searchable dropdown that allows multiple selections from a list of frameworks.`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.description}}};var M,y,w,C,j;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <MultiSelectWithSelection />,
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
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source},description:{story:`MultiSelect with pre-selected values.
Demonstrates how the component appears with multiple items already selected.`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.description}}};var N,k,V,W,R;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <MultiSelectCustomPlaceholders />,
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
}`,...(V=(k=r.parameters)==null?void 0:k.docs)==null?void 0:V.source},description:{story:`MultiSelect with custom placeholder text.
Shows how to customize the placeholder and search text for better user guidance.`,...(R=(W=r.parameters)==null?void 0:W.docs)==null?void 0:R.description}}};var P,A,D,_,O;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <MultiSelectWithManyOptions />,
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
}`,...(D=(A=n.parameters)==null?void 0:A.docs)==null?void 0:D.source},description:{story:`MultiSelect with an extended list of options.
Demonstrates how the component handles a larger set of choices with scrolling.`,...(O=(_=n.parameters)==null?void 0:_.docs)==null?void 0:O.description}}};const Ne=["Playground","Default","WithSelection","CustomPlaceholders","WithManyOptions"];export{r as CustomPlaceholders,o as Default,l as Playground,n as WithManyOptions,s as WithSelection,Ne as __namedExportsOrder,je as default};
