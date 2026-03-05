import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as l}from"./index-D4H_InIO.js";import{C as r}from"./Combobox-DXDvVczC.js";import"./Button-DvVXU3_x.js";import"./useAriaDisabled-DJP5ZKD9.js";import"./utils-CU3My8Oi.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";import"./CommandItem-CiFaxsn-.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CQ-IqFoI.js";import"./index-DB-GfMvg.js";import"./index-Ak5Mws-w.js";import"./index-CWZjxdH8.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DLaBReRc.js";import"./CommandList-DmlIjmFM.js";import"./Popover-OaSsjRLr.js";import"./z-index-CmEG1ohp.js";import"./index-DonjGF9j.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./check-CT0OM3mY.js";const Q=[{value:"US",label:"United States"},{value:"CA",label:"Canada"},{value:"GB",label:"United Kingdom"},{value:"MX",label:"Mexico"},{value:"AU",label:"Australia"}],Y=(o,t)=>{const a=t.toLowerCase().trim();return a.length===0||o.toLowerCase()===a?1:0},X=({value:o="",...t})=>{const[a,s]=l.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{...t,filter:Y,options:Q,placeholder:"Select country...",searchPlaceholder:"Type exact code (e.g. US, CA, GB)...",value:a,onChange:s}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value (programmatic):"," ",e.jsx("code",{className:"rounded bg-muted px-1",children:a||"none"})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["This example uses a custom filter: only the option whose value ",e.jsx("em",{children:"exactly"}),' matches your search is shown (e.g. type "US" to see United States). Leave the search empty to see all options.']})]})};X.__docgenInfo={description:"",methods:[],displayName:"ComboboxCustomFilter",props:{value:{defaultValue:{value:"''",computed:!1},required:!1}}};const ee=`import { useState } from 'react';
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
`,oe=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],$=({value:o="",...t})=>{const[a,s]=l.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{...t,emptyMessage:"No frameworks found",options:oe,placeholder:"Choose your framework",searchPlaceholder:"Search frameworks...",value:a,onChange:s}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};$.__docgenInfo={description:"",methods:[],displayName:"ComboboxCustomPlaceholders",props:{value:{defaultValue:{value:"''",computed:!1},required:!1}}};const ae=`import { useState } from 'react';
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
`,te=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],z=({value:o="",...t})=>{const[a,s]=l.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{...t,options:te,placeholder:"Select framework...",value:a,onChange:s}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};z.__docgenInfo={description:"",methods:[],displayName:"ComboboxDefault",props:{value:{defaultValue:{value:"''",computed:!1},required:!1}}};const se=`import { useState } from 'react';
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
`,re=[{value:"US",label:"United States"},{value:"CA",label:"Canada"},{value:"GB",label:"United Kingdom"},{value:"MX",label:"Mexico"},{value:"AU",label:"Australia"}],Z=({value:o="",...t})=>{const[a,s]=l.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{...t,options:re,placeholder:"Select country...",searchPlaceholder:"Search by name or code...",value:a,onChange:s}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value (programmatic):"," ",e.jsx("code",{className:"rounded bg-muted px-1",children:a||"none"})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:[`Try searching by label (e.g. "United") or by value (e.g. "US"). The stored value is always the option's `,e.jsx("code",{children:"value"})," (e.g. US, GB)."]})]})};Z.__docgenInfo={description:"",methods:[],displayName:"ComboboxFiltering",props:{value:{defaultValue:{value:"''",computed:!1},required:!1}}};const le=`import { useState } from 'react';
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
`,ne=[{value:"1",label:"Short"},{value:"2",label:"A much longer option label that would overflow"},{value:"3",label:"Another very long label to demonstrate min-width behavior"},{value:"4",label:"Medium length"}],H=o=>{const[t,a]=l.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{...o,className:"w-72",options:ne,placeholder:"Select...",popoverClassName:"min-w-[50rem]",value:t,onChange:a}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",t||"none"]})]})};H.__docgenInfo={description:"",methods:[],displayName:"ComboboxMinWidthPopover"};const ie=`import { useState } from 'react';
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
`,ue=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],J=({value:o="react",...t})=>{const[a,s]=l.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{...t,options:ue,placeholder:"Select framework...",value:a,onChange:s}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};J.__docgenInfo={description:"",methods:[],displayName:"ComboboxWithValue",props:{value:{defaultValue:{value:"'react'",computed:!1},required:!1}}};const ce=`import { useState } from 'react';
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
`,Oe={title:"Inputs & Forms/Combobox",component:r,parameters:{docs:{description:{component:"Combobox is a searchable single-select dropdown. Users pick one option from a list; the trigger shows the selected option’s label, and the stored value is always the option’s `value`. Search filters the list by both label and value (case-insensitive substring) by default; you can pass a custom `filter` for different matching behavior. Use it when the list is long enough that typing to narrow options is helpful, and when you need a stable programmatic value (e.g. codes or IDs) while showing friendly labels."}}},tags:["autodocs"],argTypes:{value:{control:"text",description:"The selected value",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Placeholder text for the combobox",table:{type:{summary:"string"}}},searchPlaceholder:{control:"text",description:"Placeholder text for the search input",table:{type:{summary:"string"}}},emptyMessage:{control:"text",description:"Message to display when no options are found",table:{type:{summary:"string"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",description:"Whether the component is disabled",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the component"},listClassName:{type:"string",description:"Additional class names to apply to the options list"},popoverClassName:{type:"string",description:"Additional class names for the popover content (e.g. min-w-64 or w-80 to set width or min-width)"},name:{control:"text",description:"The name attribute for form submission. This is required for the combobox value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the combobox is required for form validation. When true, the form cannot be submitted without a selection.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the combobox when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},filter:{description:"Custom filter function for search. Receives the option's value and search string. Return 0 to hide, positive number to show. When not provided, default matches by both value and label (case-insensitive substring).",table:{type:{summary:"(value: string, search: string) => number"}}}}},h=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],n={args:{options:h,value:"",placeholder:"Select framework...",onChange:()=>{}},tags:["!autodocs"]},i={render:o=>e.jsx(z,{...o}),args:{options:h,value:"",placeholder:"Select framework...",onChange:()=>{}},parameters:{docs:{source:{code:se,language:"tsx"}}}},u={render:o=>e.jsx(J,{...o}),args:{options:h,value:"react",placeholder:"Select framework...",onChange:()=>{}},parameters:{docs:{source:{code:ce,language:"tsx"}}}},c={render:o=>e.jsx($,{...o}),args:{options:h,value:"",placeholder:"Choose your framework",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found",onChange:()=>{}},parameters:{docs:{source:{code:ae,language:"tsx"}}}},de=[{value:"US",label:"United States"},{value:"CA",label:"Canada"},{value:"GB",label:"United Kingdom"},{value:"MX",label:"Mexico"},{value:"AU",label:"Australia"}],m={render:o=>e.jsx(Z,{...o}),args:{options:de,value:"",onChange:()=>{}},parameters:{docs:{description:{story:"Default filtering: search matches both the option label and value (case-insensitive substring). The stored value is always the option’s `value` (e.g. country code). Try searching by label (“United”) or by value (“US”)."},source:{code:le,language:"tsx"}}}},me=[{value:"US",label:"United States"},{value:"CA",label:"Canada"},{value:"GB",label:"United Kingdom"},{value:"MX",label:"Mexico"},{value:"AU",label:"Australia"}],p={render:o=>e.jsx(X,{...o}),args:{options:me,value:"",onChange:()=>{}},parameters:{docs:{description:{story:"Custom `filter` prop: only show the option when the search exactly matches its value. Type a full country code (e.g. US, CA, GB) to see that single option; leave search empty to see all. Contrast with the default filter, which matches substring anywhere in value or label."},source:{code:ee,language:"tsx"}}}},d={render:o=>e.jsx(H,{...o}),args:{options:[],value:"",onChange:()=>{}},parameters:{docs:{description:{story:"Uses a fixed-width trigger, which demonstrates ellipsis when the label content is too long. The popover content uses minimum width equal to the trigger width, so it can grow when options are wider. Open the dropdown to see it expand for long labels."},source:{code:ie,language:"tsx"}}}};var b,v,g,x,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    options,
    value: '',
    placeholder: 'Select framework...',
    onChange: () => {}
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source},description:{story:`Interactive playground for the Combobox component.
Use the controls to experiment with different props and states.`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};var C,y,w,S,N;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source},description:{story:`The default state of the Combobox component.
Shows a searchable dropdown with framework options.`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.description}}};var U,P,V,A,j;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(V=(P=u.parameters)==null?void 0:P.docs)==null?void 0:V.source},description:{story:`Combobox with a pre-selected value.
Demonstrates how the component appears with an initial selection.`,...(j=(A=u.parameters)==null?void 0:A.docs)==null?void 0:j.description}}};var M,k,T,F,W;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(T=(k=c.parameters)==null?void 0:k.docs)==null?void 0:T.source},description:{story:`Combobox with custom placeholder text.
Shows how to customize the placeholder and search text.`,...(W=(F=c.parameters)==null?void 0:F.docs)==null?void 0:W.description}}};var q,_,D;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(D=(_=m.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var B,G,R;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(R=(G=p.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var I,E,O,K,L;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(O=(E=d.parameters)==null?void 0:E.docs)==null?void 0:O.source},description:{story:"Uses a fixed-width trigger (demonstrates ellipsis when the label is too long). Popover\nuses `min-w-[--radix-popover-trigger-width]` so it is at least as wide as the trigger\nbut can grow when option labels are longer - the dropdown expands to fit the content.",...(L=(K=d.parameters)==null?void 0:K.docs)==null?void 0:L.description}}};const Ke=["Playground","Default","WithValue","CustomPlaceholders","Filtering","CustomFilter","MinWidthPopover"];export{p as CustomFilter,c as CustomPlaceholders,i as Default,m as Filtering,d as MinWidthPopover,n as Playground,u as WithValue,Ke as __namedExportsOrder,Oe as default};
