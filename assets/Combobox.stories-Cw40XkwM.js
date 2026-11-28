import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as d}from"./index-B0WjJBI_.js";import{C as l}from"./Combobox-G1ZuRr-g.js";const Y=[{value:"US",label:"United States"},{value:"CA",label:"Canada"},{value:"GB",label:"United Kingdom"},{value:"MX",label:"Mexico"},{value:"AU",label:"Australia"}],Z=(o,t)=>{const a=t.toLowerCase().trim();return a.length===0||o.toLowerCase()===a?1:0},X=({value:o="",...t})=>{const[a,s]=d.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{...t,filter:Z,options:Y,placeholder:"Select country...",searchPlaceholder:"Type exact code (e.g. US, CA, GB)...",value:a,onChange:s}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value (programmatic):"," ",e.jsx("code",{className:"rounded bg-muted px-1",children:a||"none"})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["This example uses a custom filter: only the option whose value ",e.jsx("em",{children:"exactly"}),' matches your search is shown (e.g. type "US" to see United States). Leave the search empty to see all options.']})]})};X.__docgenInfo={description:"",methods:[],displayName:"ComboboxCustomFilter",props:{value:{defaultValue:{value:"''",computed:!1},required:!1}}};const ee=`import { useState } from 'react';
import { Combobox } from '../src/Combobox';
import { ComboboxProps } from '../types';

const options = [
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'MX', label: 'Mexico' },
  { value: 'AU', label: 'Australia' },
];

/**
 * Custom filter: only show an option when the search exactly matches its value (case-insensitive).
 * Empty search shows all options. Compare to the default filter, which matches substring anywhere
 * in both value and label (e.g. "uni" matches United States).
 */
const filterExactMatch = (value: string, search: string) => {
  const s = search.toLowerCase().trim();
  if (s.length === 0) return 1;
  return value.toLowerCase() === s ? 1 : 0;
};

export const ComboboxCustomFilter = ({
  value: initialValue = '',
  ...args
}: Partial<ComboboxProps>) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Combobox
        {...args}
        filter={filterExactMatch}
        options={options}
        placeholder="Select country..."
        searchPlaceholder="Type exact code (e.g. US, CA, GB)..."
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selected value (programmatic):{' '}
        <code className="rounded bg-muted px-1">{value || 'none'}</code>
      </p>
      <p className="text-sm text-muted-foreground">
        This example uses a custom filter: only the option whose value <em>exactly</em> matches your
        search is shown (e.g. type &quot;US&quot; to see United States). Leave the search empty to
        see all options.
      </p>
    </div>
  );
};
`,oe=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],$=({value:o="",...t})=>{const[a,s]=d.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{...t,emptyMessage:"No frameworks found",options:oe,placeholder:"Choose your framework",searchPlaceholder:"Search frameworks...",value:a,onChange:s}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};$.__docgenInfo={description:"",methods:[],displayName:"ComboboxCustomPlaceholders",props:{value:{defaultValue:{value:"''",computed:!1},required:!1}}};const ae=`import { useState } from 'react';
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
`,te=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],z=({value:o="",...t})=>{const[a,s]=d.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{...t,options:te,placeholder:"Select framework...",value:a,onChange:s}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};z.__docgenInfo={description:"",methods:[],displayName:"ComboboxDefault",props:{value:{defaultValue:{value:"''",computed:!1},required:!1}}};const se=`import { useState } from 'react';
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
`,le=[{value:"US",label:"United States"},{value:"CA",label:"Canada"},{value:"GB",label:"United Kingdom"},{value:"MX",label:"Mexico"},{value:"AU",label:"Australia"}],H=({value:o="",...t})=>{const[a,s]=d.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{...t,options:le,placeholder:"Select country...",searchPlaceholder:"Search by name or code...",value:a,onChange:s}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value (programmatic):"," ",e.jsx("code",{className:"rounded bg-muted px-1",children:a||"none"})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:[`Try searching by label (e.g. "United") or by value (e.g. "US"). The stored value is always the option's `,e.jsx("code",{children:"value"})," (e.g. US, GB)."]})]})};H.__docgenInfo={description:"",methods:[],displayName:"ComboboxFiltering",props:{value:{defaultValue:{value:"''",computed:!1},required:!1}}};const re=`import { useState } from 'react';
import { Combobox } from '../src/Combobox';
import { ComboboxProps } from '../types';

const options = [
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'MX', label: 'Mexico' },
  { value: 'AU', label: 'Australia' },
];

export const ComboboxFiltering = ({
  value: initialValue = '',
  ...args
}: Partial<ComboboxProps>) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Combobox
        {...args}
        options={options}
        placeholder="Select country..."
        searchPlaceholder="Search by name or code..."
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">
        Selected value (programmatic):{' '}
        <code className="rounded bg-muted px-1">{value || 'none'}</code>
      </p>
      <p className="text-sm text-muted-foreground">
        Try searching by label (e.g. &quot;United&quot;) or by value (e.g. &quot;US&quot;). The
        stored value is always the option&apos;s <code>value</code> (e.g. US, GB).
      </p>
    </div>
  );
};
`,ne=[{value:"1",label:"Short"},{value:"2",label:"A much longer option label that would overflow"},{value:"3",label:"Another very long label to demonstrate min-width behavior"},{value:"4",label:"Medium length"}],J=o=>{const[t,a]=d.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{...o,className:"w-72",options:ne,placeholder:"Select...",popoverClassName:"min-w-[50rem]",value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",t||"none"]})]})};J.__docgenInfo={description:"",methods:[],displayName:"ComboboxMinWidthPopover"};const ie=`import { useState } from 'react';
import { Combobox } from '../src/Combobox';
import { ComboboxProps } from '../types';

const options = [
  { value: '1', label: 'Short' },
  { value: '2', label: 'A much longer option label that would overflow' },
  { value: '3', label: 'Another very long label to demonstrate min-width behavior' },
  { value: '4', label: 'Medium length' },
];

export const ComboboxMinWidthPopover = (args: Partial<ComboboxProps>) => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <Combobox
        {...args}
        className="w-72"
        options={options}
        placeholder="Select..."
        popoverClassName="min-w-[50rem]"
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,ue=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],Q=({value:o="react",...t})=>{const[a,s]=d.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{...t,options:ue,placeholder:"Select framework...",value:a,onChange:s}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};Q.__docgenInfo={description:"",methods:[],displayName:"ComboboxWithValue",props:{value:{defaultValue:{value:"'react'",computed:!1},required:!1}}};const ce=`import { useState } from 'react';
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
`,de={title:"Inputs & Forms/Combobox",component:l,parameters:{docs:{description:{component:"Combobox is a searchable single-select dropdown. Users pick one option from a list; the trigger shows the selected option’s label, and the stored value is always the option’s `value`. Search filters the list by both label and value (case-insensitive substring) by default; you can pass a custom `filter` for different matching behavior. Use it when the list is long enough that typing to narrow options is helpful, and when you need a stable programmatic value (e.g. codes or IDs) while showing friendly labels."}}},argTypes:{value:{control:"text",table:{type:{summary:"string"}}},placeholder:{control:"text",table:{type:{summary:"string"}}},searchPlaceholder:{control:"text",table:{type:{summary:"string"}}},emptyMessage:{control:"text",table:{type:{summary:"string"}}},zIndex:{control:"number",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",table:{type:{summary:"boolean"}}},className:{type:"string"},listClassName:{type:"string"},popoverClassName:{type:"string"},name:{control:"text",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},filter:{table:{type:{summary:"(value: string, search: string) => number"}}}}},h=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],r={args:{options:h,value:"",placeholder:"Select framework...",onChange:()=>{}}},n={render:o=>e.jsx(z,{...o}),args:{options:h,value:"",placeholder:"Select framework...",onChange:()=>{}},parameters:{docs:{source:{code:se,language:"tsx"}}}},i={render:o=>e.jsx(Q,{...o}),args:{options:h,value:"react",placeholder:"Select framework...",onChange:()=>{}},parameters:{docs:{source:{code:ce,language:"tsx"}}}},u={render:o=>e.jsx($,{...o}),args:{options:h,value:"",placeholder:"Choose your framework",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found",onChange:()=>{}},parameters:{docs:{source:{code:ae,language:"tsx"}}}},me=[{value:"US",label:"United States"},{value:"CA",label:"Canada"},{value:"GB",label:"United Kingdom"},{value:"MX",label:"Mexico"},{value:"AU",label:"Australia"}],m={render:o=>e.jsx(H,{...o}),args:{options:me,value:"",onChange:()=>{}},parameters:{docs:{description:{story:"Default filtering: search matches both the option label and value (case-insensitive substring). The stored value is always the option’s `value` (e.g. country code). Try searching by label (“United”) or by value (“US”)."},source:{code:re,language:"tsx"}}}},pe=[{value:"US",label:"United States"},{value:"CA",label:"Canada"},{value:"GB",label:"United Kingdom"},{value:"MX",label:"Mexico"},{value:"AU",label:"Australia"}],p={render:o=>e.jsx(X,{...o}),args:{options:pe,value:"",onChange:()=>{}},parameters:{docs:{description:{story:"Custom `filter` prop: only show the option when the search exactly matches its value. Type a full country code (e.g. US, CA, GB) to see that single option; leave search empty to see all. Contrast with the default filter, which matches substring anywhere in value or label."},source:{code:ee,language:"tsx"}}}},c={render:o=>e.jsx(J,{...o}),args:{options:[],value:"",onChange:()=>{}},parameters:{docs:{description:{story:"Uses a fixed-width trigger, which demonstrates ellipsis when the label content is too long. The popover content uses minimum width equal to the trigger width, so it can grow when options are wider. Open the dropdown to see it expand for long labels."},source:{code:ie,language:"tsx"}}}};var b,g,v,x,C;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    options,
    value: '',
    placeholder: 'Select framework...',
    onChange: () => {}
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.description}}};var f,y,S,w,N;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source},description:{story:`The default state of the Combobox component.
Shows a searchable dropdown with framework options.`,...(N=(w=n.parameters)==null?void 0:w.docs)==null?void 0:N.description}}};var U,P,V,j,A;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(V=(P=i.parameters)==null?void 0:P.docs)==null?void 0:V.source},description:{story:`Combobox with a pre-selected value.
Demonstrates how the component appears with an initial selection.`,...(A=(j=i.parameters)==null?void 0:j.docs)==null?void 0:A.description}}};var M,k,T,F,_;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(T=(k=u.parameters)==null?void 0:k.docs)==null?void 0:T.source},description:{story:`Combobox with custom placeholder text.
Shows how to customize the placeholder and search text.`,...(_=(F=u.parameters)==null?void 0:F.docs)==null?void 0:_.description}}};var q,W,D;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <ComboboxFiltering {...args} />,
  args: {
    options: filteringOptions,
    value: '',
    onChange: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Default filtering: search matches both the option label and value (case-insensitive substring). The stored value is always the option’s \`value\` (e.g. country code). Try searching by label (“United”) or by value (“US”).'
      },
      source: {
        code: sourceCodeFiltering,
        language: 'tsx'
      }
    }
  }
}`,...(D=(W=m.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var B,G,I;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <ComboboxCustomFilter {...args} />,
  args: {
    options: customFilterOptions,
    value: '',
    onChange: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom \`filter\` prop: only show the option when the search exactly matches its value. Type a full country code (e.g. US, CA, GB) to see that single option; leave search empty to see all. Contrast with the default filter, which matches substring anywhere in value or label.'
      },
      source: {
        code: sourceCodeCustomFilter,
        language: 'tsx'
      }
    }
  }
}`,...(I=(G=p.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var O,E,R,K,L;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <ComboboxMinWidthPopover {...args} />,
  args: {
    options: [],
    value: '',
    onChange: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: 'Uses a fixed-width trigger, which demonstrates ellipsis when the label content is too long. The popover content uses minimum width equal to the trigger width, so it can grow when options are wider. Open the dropdown to see it expand for long labels.'
      },
      source: {
        code: sourceCodeMinWidthPopover,
        language: 'tsx'
      }
    }
  }
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source},description:{story:"Uses a fixed-width trigger (demonstrates ellipsis when the label is too long). Popover\nuses `min-w-[--radix-popover-trigger-width]` so it is at least as wide as the trigger\nbut can grow when option labels are longer - the dropdown expands to fit the content.",...(L=(K=c.parameters)==null?void 0:K.docs)==null?void 0:L.description}}};const he=["Playground","Default","WithValue","CustomPlaceholders","Filtering","CustomFilter","MinWidthPopover"],xe=Object.freeze(Object.defineProperty({__proto__:null,CustomFilter:p,CustomPlaceholders:u,Default:n,Filtering:m,MinWidthPopover:c,Playground:r,WithValue:i,__namedExportsOrder:he,default:de},Symbol.toStringTag,{value:"Module"}));export{xe as C,r as P};
