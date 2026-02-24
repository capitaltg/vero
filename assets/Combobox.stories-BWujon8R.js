import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as c}from"./index-D4H_InIO.js";import{C as r}from"./Combobox-B_6grsGZ.js";import"./Button-BwlrdoZf.js";import"./useAriaDisabled-DHTVgRPt.js";import"./utils-CU3My8Oi.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";import"./CommandItem-CiFaxsn-.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CQ-IqFoI.js";import"./index-DB-GfMvg.js";import"./index-Ak5Mws-w.js";import"./index-CWZjxdH8.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DLaBReRc.js";import"./CommandList-DmlIjmFM.js";import"./z-index-CmEG1ohp.js";import"./Popover-OaSsjRLr.js";import"./index-DonjGF9j.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./check-CT0OM3mY.js";const X=[{value:"US",label:"United States"},{value:"CA",label:"Canada"},{value:"GB",label:"United Kingdom"},{value:"MX",label:"Mexico"},{value:"AU",label:"Australia"}],O=(o,t)=>{const a=t.toLowerCase().trim();return a.length===0||o.toLowerCase()===a?1:0},G=({value:o="",...t})=>{const[a,s]=c.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{...t,filter:O,options:X,placeholder:"Select country...",searchPlaceholder:"Type exact code (e.g. US, CA, GB)...",value:a,onChange:s}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value (programmatic):"," ",e.jsx("code",{className:"rounded bg-muted px-1",children:a||"none"})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["This example uses a custom filter: only the option whose value ",e.jsx("em",{children:"exactly"}),' matches your search is shown (e.g. type "US" to see United States). Leave the search empty to see all options.']})]})};G.__docgenInfo={description:"",methods:[],displayName:"ComboboxCustomFilter",props:{value:{defaultValue:{value:"''",computed:!1},required:!1}}};const $=`import { useState } from 'react';
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
`,z=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],I=({value:o="",...t})=>{const[a,s]=c.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{...t,emptyMessage:"No frameworks found",options:z,placeholder:"Choose your framework",searchPlaceholder:"Search frameworks...",value:a,onChange:s}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};I.__docgenInfo={description:"",methods:[],displayName:"ComboboxCustomPlaceholders",props:{value:{defaultValue:{value:"''",computed:!1},required:!1}}};const Z=`import { useState } from 'react';
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
`,H=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],E=({value:o="",...t})=>{const[a,s]=c.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{...t,options:H,placeholder:"Select framework...",value:a,onChange:s}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};E.__docgenInfo={description:"",methods:[],displayName:"ComboboxDefault",props:{value:{defaultValue:{value:"''",computed:!1},required:!1}}};const J=`import { useState } from 'react';
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
`,Q=[{value:"US",label:"United States"},{value:"CA",label:"Canada"},{value:"GB",label:"United Kingdom"},{value:"MX",label:"Mexico"},{value:"AU",label:"Australia"}],K=({value:o="",...t})=>{const[a,s]=c.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{...t,options:Q,placeholder:"Select country...",searchPlaceholder:"Search by name or code...",value:a,onChange:s}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value (programmatic):"," ",e.jsx("code",{className:"rounded bg-muted px-1",children:a||"none"})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:[`Try searching by label (e.g. "United") or by value (e.g. "US"). The stored value is always the option's `,e.jsx("code",{children:"value"})," (e.g. US, GB)."]})]})};K.__docgenInfo={description:"",methods:[],displayName:"ComboboxFiltering",props:{value:{defaultValue:{value:"''",computed:!1},required:!1}}};const Y=`import { useState } from 'react';
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
`,ee=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],L=({value:o="react",...t})=>{const[a,s]=c.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{...t,options:ee,placeholder:"Select framework...",value:a,onChange:s}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};L.__docgenInfo={description:"",methods:[],displayName:"ComboboxWithValue",props:{value:{defaultValue:{value:"'react'",computed:!1},required:!1}}};const oe=`import { useState } from 'react';
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
`,Te={title:"Inputs & Forms/Combobox",component:r,parameters:{docs:{description:{component:"Combobox is a searchable single-select dropdown. Users pick one option from a list; the trigger shows the selected option’s label, and the stored value is always the option’s `value`. Search filters the list by both label and value (case-insensitive substring) by default; you can pass a custom `filter` for different matching behavior. Use it when the list is long enough that typing to narrow options is helpful, and when you need a stable programmatic value (e.g. codes or IDs) while showing friendly labels."}}},tags:["autodocs"],argTypes:{value:{control:"text",description:"The selected value",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Placeholder text for the combobox",table:{type:{summary:"string"}}},searchPlaceholder:{control:"text",description:"Placeholder text for the search input",table:{type:{summary:"string"}}},emptyMessage:{control:"text",description:"Message to display when no options are found",table:{type:{summary:"string"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",description:"Whether the component is disabled",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the component"},listClassName:{type:"string",description:"Additional class names to apply to the options list"},name:{control:"text",description:"The name attribute for form submission. This is required for the combobox value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the combobox is required for form validation. When true, the form cannot be submitted without a selection.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the combobox when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},filter:{description:"Custom filter function for search. Receives the option's value and search string. Return 0 to hide, positive number to show. When not provided, default matches by both value and label (case-insensitive substring).",table:{type:{summary:"(value: string, search: string) => number"}}}}},p=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],l={args:{options:p,value:"",placeholder:"Select framework...",onChange:()=>{}},tags:["!autodocs"]},n={render:o=>e.jsx(E,{...o}),args:{options:p,value:"",placeholder:"Select framework...",onChange:()=>{}},parameters:{docs:{source:{code:J,language:"tsx"}}}},u={render:o=>e.jsx(L,{...o}),args:{options:p,value:"react",placeholder:"Select framework...",onChange:()=>{}},parameters:{docs:{source:{code:oe,language:"tsx"}}}},i={render:o=>e.jsx(I,{...o}),args:{options:p,value:"",placeholder:"Choose your framework",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found",onChange:()=>{}},parameters:{docs:{source:{code:Z,language:"tsx"}}}},ae=[{value:"US",label:"United States"},{value:"CA",label:"Canada"},{value:"GB",label:"United Kingdom"},{value:"MX",label:"Mexico"},{value:"AU",label:"Australia"}],m={render:o=>e.jsx(K,{...o}),args:{options:ae,value:"",onChange:()=>{}},parameters:{docs:{source:{code:Y,language:"tsx"}}}},te=[{value:"US",label:"United States"},{value:"CA",label:"Canada"},{value:"GB",label:"United Kingdom"},{value:"MX",label:"Mexico"},{value:"AU",label:"Australia"}],d={render:o=>e.jsx(G,{...o}),args:{options:te,value:"",onChange:()=>{}},parameters:{docs:{source:{code:$,language:"tsx"}}}};var b,h,v,g,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    options,
    value: '',
    placeholder: 'Select framework...',
    onChange: () => {}
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:`Interactive playground for the Combobox component.
Use the controls to experiment with different props and states.`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.description}}};var f,C,y,S,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(C=n.parameters)==null?void 0:C.docs)==null?void 0:y.source},description:{story:`The default state of the Combobox component.
Shows a searchable dropdown with framework options.`,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.description}}};var V,U,N,P,A;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(N=(U=u.parameters)==null?void 0:U.docs)==null?void 0:N.source},description:{story:`Combobox with a pre-selected value.
Demonstrates how the component appears with an initial selection.`,...(A=(P=u.parameters)==null?void 0:P.docs)==null?void 0:A.description}}};var j,k,M,F,q;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(M=(k=i.parameters)==null?void 0:k.docs)==null?void 0:M.source},description:{story:`Combobox with custom placeholder text.
Shows how to customize the placeholder and search text.`,...(q=(F=i.parameters)==null?void 0:F.docs)==null?void 0:q.description}}};var T,W,_;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <ComboboxFiltering {...args} />,
  args: {
    options: filteringOptions,
    value: '',
    onChange: () => {}
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeFiltering,
        language: 'tsx'
      }
    }
  }
}`,...(_=(W=m.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var D,R,B;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <ComboboxCustomFilter {...args} />,
  args: {
    options: customFilterOptions,
    value: '',
    onChange: () => {}
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomFilter,
        language: 'tsx'
      }
    }
  }
}`,...(B=(R=d.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const We=["Playground","Default","WithValue","CustomPlaceholders","Filtering","CustomFilter"];export{d as CustomFilter,i as CustomPlaceholders,n as Default,m as Filtering,l as Playground,u as WithValue,We as __namedExportsOrder,Te as default};
