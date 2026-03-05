import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as d}from"./index-D4H_InIO.js";import{M as s}from"./MultiSelect-BmKfsIsY.js";import"./useAriaDisabled-DJP5ZKD9.js";import"./styles-Bqt2ynIu.js";import"./utils-CU3My8Oi.js";import"./z-index-CmEG1ohp.js";import"./constants-C4w3S9le.js";import"./index-NE6MC3wq.js";import"./CommandItem-CiFaxsn-.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./createLucideIcon-CRH11QI6.js";import"./index-CQ-IqFoI.js";import"./index-DB-GfMvg.js";import"./index-Ak5Mws-w.js";import"./index-CWZjxdH8.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DLaBReRc.js";import"./CommandList-DmlIjmFM.js";import"./Popover-OaSsjRLr.js";import"./index-DonjGF9j.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./check-CT0OM3mY.js";import"./x-B9-lGSIk.js";const K=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],F=({value:t=[],...l})=>{const[a,o]=d.useState(t);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{...l,emptyMessage:"No frameworks found",options:K,placeholder:"Choose your frameworks",searchPlaceholder:"Search frameworks...",value:a,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",a.length>0?a.join(", "):"none"]})]})};F.__docgenInfo={description:"",methods:[],displayName:"MultiSelectCustomPlaceholders",props:{value:{defaultValue:{value:"[]",computed:!1},required:!1}}};const L=`import { useState } from 'react';
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
`,Q=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],Z=({value:t=[],...l})=>{const[a,o]=d.useState(t);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{...l,options:Q,placeholder:"Select frameworks...",value:a,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",a.length>0?a.join(", "):"none"]})]})};Z.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDefault",props:{value:{defaultValue:{value:"[]",computed:!1},required:!1}}};const X=`import { useState } from 'react';
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
`,Y=[{value:"1",label:"Short"},{value:"2",label:"A much longer option label that would overflow"},{value:"3",label:"Another very long label to demonstrate min-width behavior"},{value:"4",label:"Medium length"}],B=t=>{const[l,a]=d.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{...t,className:"w-[30rem]",options:Y,placeholder:"Select...",popoverClassName:"min-w-[50rem]",value:l,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",l.length>0?l.join(", "):"none"]})]})};B.__docgenInfo={description:"",methods:[],displayName:"MultiSelectMinWidthPopover"};const ee=`import { useState } from 'react';
import { MultiSelect } from '../src/MultiSelect';
import { MultiSelectProps } from '../types';

const options = [
  { value: '1', label: 'Short' },
  { value: '2', label: 'A much longer option label that would overflow' },
  { value: '3', label: 'Another very long label to demonstrate min-width behavior' },
  { value: '4', label: 'Medium length' },
];

export const MultiSelectMinWidthPopover = (args: Partial<MultiSelectProps>) => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <MultiSelect
        {...args}
        className="w-[30rem]"
        options={options}
        placeholder="Select..."
        popoverClassName="min-w-[50rem]"
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,te=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"},{value:"next",label:"Next.js"},{value:"nuxt",label:"Nuxt.js"},{value:"gatsby",label:"Gatsby"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],H=({value:t=[],...l})=>{const[a,o]=d.useState(t);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{...l,options:te,placeholder:"Select frameworks...",value:a,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",a.length>0?a.join(", "):"none"]})]})};H.__docgenInfo={description:"",methods:[],displayName:"MultiSelectWithManyOptions",props:{value:{defaultValue:{value:"[]",computed:!1},required:!1}}};const ae=`import { useState } from 'react';
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
`,le=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],J=({value:t=["react","vue"],...l})=>{const[a,o]=d.useState(t);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{...l,options:le,placeholder:"Select frameworks...",value:a,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",a.length>0?a.join(", "):"none"]})]})};J.__docgenInfo={description:"",methods:[],displayName:"MultiSelectWithSelection",props:{value:{defaultValue:{value:"['react', 'vue']",computed:!1},required:!1}}};const oe=`import { useState } from 'react';
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
`,Oe={title:"Inputs & Forms/MultiSelect",component:s,parameters:{},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text for the multiselect",table:{type:{summary:"string"}}},searchPlaceholder:{control:"text",description:"Placeholder text for the search input",table:{type:{summary:"string"}}},emptyMessage:{control:"text",description:"Message to display when no options are found",table:{type:{summary:"string"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",description:"Whether the component is disabled",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the component"},listClassName:{type:"string",description:"Additional class names to apply to the options list"},name:{control:"text",description:"The name attribute for form submission. This is required for the multi-select value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the multi-select is required for form validation. When true, the form cannot be submitted without at least one selection.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the multi-select when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}}},m=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],r={args:{options:m,value:[],onChange:()=>{},placeholder:"Select frameworks..."},tags:["!autodocs"]},n={render:t=>e.jsx(Z,{...t}),args:{options:m,value:[],onChange:()=>{},placeholder:"Select frameworks..."},parameters:{docs:{source:{code:X,language:"tsx"}}}},i={render:t=>e.jsx(J,{...t}),args:{options:m,value:["react","vue"],onChange:()=>{},placeholder:"Select frameworks..."},parameters:{docs:{source:{code:oe,language:"tsx"}}}},u={render:t=>e.jsx(F,{...t}),args:{options:m,value:[],onChange:()=>{},placeholder:"Choose your frameworks",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found"},parameters:{docs:{source:{code:L,language:"tsx"}}}},c={render:t=>e.jsx(H,{...t}),args:{options:[...m,{value:"next",label:"Next.js"},{value:"nuxt",label:"Nuxt.js"},{value:"gatsby",label:"Gatsby"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],value:[],onChange:()=>{},placeholder:"Select frameworks..."},parameters:{docs:{source:{code:ae,language:"tsx"}}}},p={render:t=>e.jsx(B,{...t}),args:{options:[],value:[],onChange:()=>{}},parameters:{docs:{description:{story:"Uses a fixed-width trigger, which demonstrates ellipsis when the label content is too long. The popover content uses popoverClassName to set a minimum width, so it can grow when options are wider. Open the dropdown to see it expand for long labels."},source:{code:ee,language:"tsx"}}}};var v,h,g,S,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source},description:{story:`Interactive playground for the MultiSelect component.
Use the controls to experiment with different props and states.`,...(b=(S=r.parameters)==null?void 0:S.docs)==null?void 0:b.description}}};var f,x,y,M,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:`The default state of the MultiSelect component.
Shows a searchable dropdown that allows multiple selections from a list of frameworks.`,...(w=(M=n.parameters)==null?void 0:M.docs)==null?void 0:w.description}}};var C,N,P,j,V;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(N=i.parameters)==null?void 0:N.docs)==null?void 0:P.source},description:{story:`MultiSelect with pre-selected values.
Demonstrates how the component appears with multiple items already selected.`,...(V=(j=i.parameters)==null?void 0:j.docs)==null?void 0:V.description}}};var k,W,A,R,_;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(A=(W=u.parameters)==null?void 0:W.docs)==null?void 0:A.source},description:{story:`MultiSelect with custom placeholder text.
Shows how to customize the placeholder and search text for better user guidance.`,...(_=(R=u.parameters)==null?void 0:R.docs)==null?void 0:_.description}}};var D,O,q,I,T;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(q=(O=c.parameters)==null?void 0:O.docs)==null?void 0:q.source},description:{story:`MultiSelect with an extended list of options.
Demonstrates how the component handles a larger set of choices with scrolling.`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.description}}};var $,G,U,E,z;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <MultiSelectMinWidthPopover {...args} />,
  args: {
    options: [],
    value: [],
    onChange: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Uses a fixed-width trigger, which demonstrates ellipsis when the label content is too long. The popover content uses popoverClassName to set a minimum width, so it can grow when options are wider. Open the dropdown to see it expand for long labels.'
      },
      source: {
        code: sourceCodeMinWidthPopover,
        language: 'tsx'
      }
    }
  }
}`,...(U=(G=p.parameters)==null?void 0:G.docs)==null?void 0:U.source},description:{story:"Uses a fixed-width trigger (demonstrates ellipsis when the label is too long). Popover\nuses `popoverClassName` so it can be wider than the trigger - the dropdown expands to\nfit long option labels.",...(z=(E=p.parameters)==null?void 0:E.docs)==null?void 0:z.description}}};const qe=["Playground","Default","WithSelection","CustomPlaceholders","WithManyOptions","MinWidthPopover"];export{u as CustomPlaceholders,n as Default,p as MinWidthPopover,r as Playground,c as WithManyOptions,i as WithSelection,qe as __namedExportsOrder,Oe as default};
