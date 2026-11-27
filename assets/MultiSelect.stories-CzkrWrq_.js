import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as p}from"./index-B0WjJBI_.js";import{M as d}from"./MultiSelect-BOoBGzfy.js";const L=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],F=({value:t=[],...l})=>{const[a,o]=p.useState(t);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{...l,emptyMessage:"No frameworks found",options:L,placeholder:"Choose your frameworks",searchPlaceholder:"Search frameworks...",value:a,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",a.length>0?a.join(", "):"none"]})]})};F.__docgenInfo={description:"",methods:[],displayName:"MultiSelectCustomPlaceholders",props:{value:{defaultValue:{value:"[]",computed:!1},required:!1}}};const Q=`import { useState } from 'react';
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
`,X=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],B=({value:t=[],...l})=>{const[a,o]=p.useState(t);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{...l,options:X,placeholder:"Select frameworks...",value:a,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",a.length>0?a.join(", "):"none"]})]})};B.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDefault",props:{value:{defaultValue:{value:"[]",computed:!1},required:!1}}};const Y=`import { useState } from 'react';
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
`,Z=[{value:"1",label:"Short"},{value:"2",label:"A much longer option label that would overflow"},{value:"3",label:"Another very long label to demonstrate min-width behavior"},{value:"4",label:"Medium length"}],H=t=>{const[l,a]=p.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{...t,className:"w-[30rem]",options:Z,placeholder:"Select...",popoverClassName:"min-w-[50rem]",value:l,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",l.length>0?l.join(", "):"none"]})]})};H.__docgenInfo={description:"",methods:[],displayName:"MultiSelectMinWidthPopover"};const ee=`import { useState } from 'react';
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
`,te=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"},{value:"next",label:"Next.js"},{value:"nuxt",label:"Nuxt.js"},{value:"gatsby",label:"Gatsby"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],J=({value:t=[],...l})=>{const[a,o]=p.useState(t);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{...l,options:te,placeholder:"Select frameworks...",value:a,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",a.length>0?a.join(", "):"none"]})]})};J.__docgenInfo={description:"",methods:[],displayName:"MultiSelectWithManyOptions",props:{value:{defaultValue:{value:"[]",computed:!1},required:!1}}};const ae=`import { useState } from 'react';
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
`,le=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],K=({value:t=["react","vue"],...l})=>{const[a,o]=p.useState(t);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{...l,options:le,placeholder:"Select frameworks...",value:a,onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected values: ",a.length>0?a.join(", "):"none"]})]})};K.__docgenInfo={description:"",methods:[],displayName:"MultiSelectWithSelection",props:{value:{defaultValue:{value:"['react', 'vue']",computed:!1},required:!1}}};const oe=`import { useState } from 'react';
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
`,se={title:"Inputs & Forms/MultiSelect",component:d,parameters:{},argTypes:{placeholder:{control:"text",table:{type:{summary:"string"}}},searchPlaceholder:{control:"text",table:{type:{summary:"string"}}},emptyMessage:{control:"text",table:{type:{summary:"string"}}},zIndex:{control:"number",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",table:{type:{summary:"boolean"}}},className:{type:"string"},listClassName:{type:"string"},name:{control:"text",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}}},m=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],s={args:{options:m,value:[],onChange:()=>{},placeholder:"Select frameworks..."}},r={render:t=>e.jsx(B,{...t}),args:{options:m,value:[],onChange:()=>{},placeholder:"Select frameworks..."},parameters:{docs:{source:{code:Y,language:"tsx"}}}},n={render:t=>e.jsx(K,{...t}),args:{options:m,value:["react","vue"],onChange:()=>{},placeholder:"Select frameworks..."},parameters:{docs:{source:{code:oe,language:"tsx"}}}},u={render:t=>e.jsx(F,{...t}),args:{options:m,value:[],onChange:()=>{},placeholder:"Choose your frameworks",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found"},parameters:{docs:{source:{code:Q,language:"tsx"}}}},c={render:t=>e.jsx(J,{...t}),args:{options:[...m,{value:"next",label:"Next.js"},{value:"nuxt",label:"Nuxt.js"},{value:"gatsby",label:"Gatsby"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],value:[],onChange:()=>{},placeholder:"Select frameworks..."},parameters:{docs:{source:{code:ae,language:"tsx"}}}},i={render:t=>e.jsx(H,{...t}),args:{options:[],value:[],onChange:()=>{}},parameters:{docs:{description:{story:"Uses a fixed-width trigger, which demonstrates ellipsis when the label content is too long. The popover content uses popoverClassName to set a minimum width, so it can grow when options are wider. Open the dropdown to see it expand for long labels."},source:{code:ee,language:"tsx"}}}};var v,h,g,S,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...'
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.description}}};var f,x,y,M,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:`The default state of the MultiSelect component.
Shows a searchable dropdown that allows multiple selections from a list of frameworks.`,...(w=(M=r.parameters)==null?void 0:M.docs)==null?void 0:w.description}}};var C,N,j,P,V;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(N=n.parameters)==null?void 0:N.docs)==null?void 0:j.source},description:{story:`MultiSelect with pre-selected values.
Demonstrates how the component appears with multiple items already selected.`,...(V=(P=n.parameters)==null?void 0:P.docs)==null?void 0:V.description}}};var k,W,A,_,R;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
Shows how to customize the placeholder and search text for better user guidance.`,...(R=(_=u.parameters)==null?void 0:_.docs)==null?void 0:R.description}}};var O,D,q,I,T;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(D=c.parameters)==null?void 0:D.docs)==null?void 0:q.source},description:{story:`MultiSelect with an extended list of options.
Demonstrates how the component handles a larger set of choices with scrolling.`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.description}}};var $,E,G,U,z;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(G=(E=i.parameters)==null?void 0:E.docs)==null?void 0:G.source},description:{story:"Uses a fixed-width trigger (demonstrates ellipsis when the label is too long). Popover\nuses `popoverClassName` so it can be wider than the trigger - the dropdown expands to\nfit long option labels.",...(z=(U=i.parameters)==null?void 0:U.docs)==null?void 0:z.description}}};const re=["Playground","Default","WithSelection","CustomPlaceholders","WithManyOptions","MinWidthPopover"],ie=Object.freeze(Object.defineProperty({__proto__:null,CustomPlaceholders:u,Default:r,MinWidthPopover:i,Playground:s,WithManyOptions:c,WithSelection:n,__namedExportsOrder:re,default:se},Symbol.toStringTag,{value:"Module"}));export{ie as M,s as P};
