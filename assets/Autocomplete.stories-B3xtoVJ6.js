import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{m as fe}from"./index-D2Jrw3qQ.js";import{r as l}from"./index-B0WjJBI_.js";import{A as d}from"./Autocomplete-BbKpDSoe.js";import{a as C}from"./utils-CU3My8Oi.js";import{C as ve}from"./check-C42IfL-F.js";import{c as Se}from"./createLucideIcon-BeEkWZrd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Button-BinwIYAK.js";import"./useAriaDisabled-BVkOu7OW.js";import"./index-BOrrHd12.js";import"./index-EiwPuDyL.js";import"./constants-D9UEAID0.js";import"./styles-CafxXXJc.js";import"./index-NE6MC3wq.js";import"./CommandItem-C4rLDUnH.js";import"./index-CoRj-x2w.js";import"./index-KklXjS-Z.js";import"./index-CwPCC0ZT.js";import"./index-CoMQ7c9D.js";import"./index-B5oA2Zbg.js";import"./index-Cdcq5Wwr.js";import"./index-DKzZmXCh.js";import"./index-OiR64VEf.js";import"./index-BllD4pgw.js";import"./index-BHtEszHx.js";import"./CommandList-mpOwEopK.js";import"./z-index-CmEG1ohp.js";import"./Popover-D7LnbHHd.js";import"./index-DKWC2_YT.js";import"./floating-ui.react-dom-Dsj8ROC4.js";import"./index-DBA0bpW4.js";import"./x-DEnjg7Le.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Oe=Se("star",Ce),ye=({value:a="",...i})=>{const[t,o]=l.useState(a);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{...i,getOptionLabel:n=>n.label,getOptionValue:n=>n.value,loadOptions:fe,placeholder:"Search...",value:t,onChange:n=>o(n)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",t||"none"]})]})};ye.__docgenInfo={description:"",methods:[],displayName:"AutocompleteDefault",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Async function to fetch options based on user input.
Receives the current input value and returns a promise that resolves to an array of options.
If provided, the component will use async loading instead of static options.`},options:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Static array of options to display.
Used when loadOptions is not provided. The component will filter these options based on user input.`},value:{required:!1,tsType:{name:"string"},description:`The currently selected value as a string.
Use an empty string ('') to represent no selection.`,defaultValue:{value:"''",computed:!1}},getOptionValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => string",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"string"}}},description:`Derives the unique string value for an option, used for selection matching and onChange.
Required unless all options are uniquely identifiable by another means.`},getOptionLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => string",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"string"}}},description:`Derives the display label for an option.
Used as the default label in the dropdown and trigger, and as the field searched when
filtering static options. If not provided, filtering falls back to the option value string.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string, item?: T) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"T"},name:"item"}],return:{name:"void"}}},description:`Callback function invoked when the selected value changes.
@param value - The selected option's value as a string, or empty string when clearing.
@param item - The full option object, or undefined when clearing the selection.`},renderValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for the selected value shown in the trigger button.
Receives the full selected option object. Falls back to getOptionLabel, then the raw value string.
@param option - The currently selected option object.
@returns A React node to render inside the trigger.`},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T, isSelected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for each option in the dropdown.
Receives the option object and whether it's currently selected.
If not provided, defaults to rendering a Check icon and the getOptionLabel value.
@param isSelected - Whether this option is currently selected.
@returns A React node to render for this option.`},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text displayed when no option is selected.
@default 'Select an option...'`},emptyMessage:{required:!1,tsType:{name:"string"},description:`Message displayed when no options match the search input.
@default 'No results found'`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the trigger button."},listClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the options list container."},maxSuggestions:{required:!1,tsType:{name:"number"},description:`Maximum number of suggestions to display in the dropdown.
@default 10`},debounceMs:{required:!1,tsType:{name:"number"},description:`Debounce delay for async searches in milliseconds.
@default 300`},minSearch:{required:!1,tsType:{name:"number"},description:`Minimum number of characters required before triggering an async search.
@default 2`},loadingMessage:{required:!1,tsType:{name:"string"},description:`Message displayed while loading options asynchronously.
@default 'Loading...'`},errorMessage:{required:!1,tsType:{name:"string"},description:`Message displayed when an async fetch fails.
@default 'Failed to load options'`},popoverClassName:{required:!1,tsType:{name:"string"},description:"Additional class names for the popover content (e.g. to set min-width or width)."},zIndex:{required:!1,tsType:{name:"number"},description:`Z-index value for the popover dropdown.
If not provided, uses the default z-index from the theme.`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled.
@default false`},name:{required:!1,tsType:{name:"string"},description:"The name attribute for form submission."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the autocomplete is required for form validation."},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const qe=`import { mockSearchLibraries } from '@/mocks';
import { useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';
import { AutocompleteProps } from '../types';

interface AutocompleteOption {
  value: string;
  label: string;
}

export const AutocompleteDefault = ({
  value: initialValue = '',
  ...args
}: AutocompleteProps<AutocompleteOption>) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Autocomplete<AutocompleteOption>
        {...args}
        getOptionLabel={o => o.label}
        getOptionValue={o => o.value}
        loadOptions={mockSearchLibraries}
        placeholder="Search..."
        value={value}
        onChange={newValue => setValue(newValue)}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,be=({value:a="",...i})=>{const[t,o]=l.useState(a);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{...i,getOptionLabel:n=>n.label,getOptionValue:n=>n.value,options:[{value:"react",label:"React",description:"A JavaScript library for building user interfaces",featured:!0},{value:"vue",label:"Vue.js",description:"The Progressive JavaScript Framework",featured:!0},{value:"angular",label:"Angular",description:"A platform for building mobile and desktop web applications"},{value:"svelte",label:"Svelte",description:"Cybernetically enhanced web apps",featured:!0},{value:"next",label:"Next.js",description:"The React Framework for Production"}],placeholder:"Select a framework...",renderOption:(n,m)=>e.jsx("div",{className:"flex w-full items-center justify-between",children:e.jsxs("div",{className:"flex flex-1 items-start gap-1",children:[e.jsx(ve,{className:C("mt-[0.1875rem] h-4 w-4 text-primary-400",m?"opacity-100":"opacity-0")}),e.jsxs("div",{className:"flex flex-1 flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-medium",children:n.label}),n.featured?e.jsx(Oe,{className:"h-3 w-3 fill-yellow-500 text-yellow-500"}):null]}),n.description?e.jsx("span",{className:"text-xs text-muted-foreground",children:n.description}):null]})]})}),value:t,onChange:n=>o(n)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",t||"none"]})]})};be.__docgenInfo={description:"",methods:[],displayName:"AutocompleteWithCustomRender",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Async function to fetch options based on user input.
Receives the current input value and returns a promise that resolves to an array of options.
If provided, the component will use async loading instead of static options.`},options:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Static array of options to display.
Used when loadOptions is not provided. The component will filter these options based on user input.`},value:{required:!1,tsType:{name:"string"},description:`The currently selected value as a string.
Use an empty string ('') to represent no selection.`,defaultValue:{value:"''",computed:!1}},getOptionValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => string",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"string"}}},description:`Derives the unique string value for an option, used for selection matching and onChange.
Required unless all options are uniquely identifiable by another means.`},getOptionLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => string",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"string"}}},description:`Derives the display label for an option.
Used as the default label in the dropdown and trigger, and as the field searched when
filtering static options. If not provided, filtering falls back to the option value string.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string, item?: T) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"T"},name:"item"}],return:{name:"void"}}},description:`Callback function invoked when the selected value changes.
@param value - The selected option's value as a string, or empty string when clearing.
@param item - The full option object, or undefined when clearing the selection.`},renderValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for the selected value shown in the trigger button.
Receives the full selected option object. Falls back to getOptionLabel, then the raw value string.
@param option - The currently selected option object.
@returns A React node to render inside the trigger.`},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T, isSelected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for each option in the dropdown.
Receives the option object and whether it's currently selected.
If not provided, defaults to rendering a Check icon and the getOptionLabel value.
@param isSelected - Whether this option is currently selected.
@returns A React node to render for this option.`},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text displayed when no option is selected.
@default 'Select an option...'`},emptyMessage:{required:!1,tsType:{name:"string"},description:`Message displayed when no options match the search input.
@default 'No results found'`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the trigger button."},listClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the options list container."},maxSuggestions:{required:!1,tsType:{name:"number"},description:`Maximum number of suggestions to display in the dropdown.
@default 10`},debounceMs:{required:!1,tsType:{name:"number"},description:`Debounce delay for async searches in milliseconds.
@default 300`},minSearch:{required:!1,tsType:{name:"number"},description:`Minimum number of characters required before triggering an async search.
@default 2`},loadingMessage:{required:!1,tsType:{name:"string"},description:`Message displayed while loading options asynchronously.
@default 'Loading...'`},errorMessage:{required:!1,tsType:{name:"string"},description:`Message displayed when an async fetch fails.
@default 'Failed to load options'`},popoverClassName:{required:!1,tsType:{name:"string"},description:"Additional class names for the popover content (e.g. to set min-width or width)."},zIndex:{required:!1,tsType:{name:"number"},description:`Z-index value for the popover dropdown.
If not provided, uses the default z-index from the theme.`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled.
@default false`},name:{required:!1,tsType:{name:"string"},description:"The name attribute for form submission."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the autocomplete is required for form validation."},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const Re=`import { cn } from '@/lib/utils';
import { Check, Star } from 'lucide-react';
import { useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';
import { AutocompleteProps } from '../types';

interface AutocompleteOption {
  value: string;
  label: string;
  description?: string;
  featured?: boolean;
}

export const AutocompleteWithCustomRender = ({
  value: initialValue = '',
  ...args
}: AutocompleteProps<AutocompleteOption>) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Autocomplete<AutocompleteOption>
        {...args}
        getOptionLabel={o => o.label}
        getOptionValue={o => o.value}
        options={[
          {
            value: 'react',
            label: 'React',
            description: 'A JavaScript library for building user interfaces',
            featured: true,
          },
          {
            value: 'vue',
            label: 'Vue.js',
            description: 'The Progressive JavaScript Framework',
            featured: true,
          },
          {
            value: 'angular',
            label: 'Angular',
            description: 'A platform for building mobile and desktop web applications',
          },
          {
            value: 'svelte',
            label: 'Svelte',
            description: 'Cybernetically enhanced web apps',
            featured: true,
          },
          { value: 'next', label: 'Next.js', description: 'The React Framework for Production' },
        ]}
        placeholder="Select a framework..."
        renderOption={(option, isSelected) => {
          return (
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-1 items-start gap-1">
                <Check
                  className={cn(
                    'mt-[0.1875rem] h-4 w-4 text-primary-400',
                    isSelected ? 'opacity-100' : 'opacity-0',
                  )}
                />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{option.label}</span>
                    {option.featured ? (
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                    ) : null}
                  </div>
                  {option.description ? (
                    <span className="text-xs text-muted-foreground">{option.description}</span>
                  ) : null}
                </div>
              </div>
            </div>
          );
        }}
        value={value}
        onChange={newValue => setValue(newValue)}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,je=[{id:"am",firstName:"Alice",lastName:"Martin",department:"Engineering",avatarColor:"bg-blue-500"},{id:"bk",firstName:"Bob",lastName:"Kim",department:"Design",avatarColor:"bg-purple-500"},{id:"cp",firstName:"Clara",lastName:"Patel",department:"Product",avatarColor:"bg-green-500"},{id:"dw",firstName:"David",lastName:"Wu",department:"Engineering",avatarColor:"bg-orange-500"},{id:"en",firstName:"Eva",lastName:"Novak",department:"Design",avatarColor:"bg-pink-500"}];function R({member:a,size:i="md"}){const t=`${a.firstName[0]}${a.lastName[0]}`;return e.jsx("span",{className:C("inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white",a.avatarColor,i==="sm"?"h-5 w-5 text-[0.625rem]":"h-7 w-7 text-xs"),children:t})}const xe=()=>{const[a,i]=l.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{getOptionLabel:t=>`${t.firstName} ${t.lastName}`,getOptionValue:t=>t.id,options:je,placeholder:"Select a team member...",renderOption:(t,o)=>e.jsxs("div",{className:"flex w-full items-center gap-3",children:[e.jsx(ve,{className:C("h-4 w-4 shrink-0",o?"opacity-100":"opacity-0")}),e.jsx(R,{member:t}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("span",{className:"text-sm font-medium",children:[t.firstName," ",t.lastName]}),e.jsx("span",{className:"text-xs text-muted-foreground",children:t.department})]})]}),renderValue:t=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R,{member:t,size:"sm"}),e.jsxs("span",{children:[t.firstName," ",t.lastName]})]}),value:a,onChange:i}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected ID: ",a||"none"]})]})};xe.__docgenInfo={description:"",methods:[],displayName:"AutocompleteWithRenderValue"};const Ve=`import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';

interface TeamMember {
  id: string;
  firstName: string;
  lastName: string;
  department: string;
  avatarColor: string;
}

const members: TeamMember[] = [
  {
    id: 'am',
    firstName: 'Alice',
    lastName: 'Martin',
    department: 'Engineering',
    avatarColor: 'bg-blue-500',
  },
  {
    id: 'bk',
    firstName: 'Bob',
    lastName: 'Kim',
    department: 'Design',
    avatarColor: 'bg-purple-500',
  },
  {
    id: 'cp',
    firstName: 'Clara',
    lastName: 'Patel',
    department: 'Product',
    avatarColor: 'bg-green-500',
  },
  {
    id: 'dw',
    firstName: 'David',
    lastName: 'Wu',
    department: 'Engineering',
    avatarColor: 'bg-orange-500',
  },
  {
    id: 'en',
    firstName: 'Eva',
    lastName: 'Novak',
    department: 'Design',
    avatarColor: 'bg-pink-500',
  },
];

function Avatar({ member, size = 'md' }: { member: TeamMember; size?: 'sm' | 'md' }) {
  const initials = \`\${member.firstName[0]}\${member.lastName[0]}\`;
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white',
        member.avatarColor,
        size === 'sm' ? 'h-5 w-5 text-[0.625rem]' : 'h-7 w-7 text-xs',
      )}
    >
      {initials}
    </span>
  );
}

export const AutocompleteWithRenderValue = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <Autocomplete<TeamMember>
        getOptionLabel={m => \`\${m.firstName} \${m.lastName}\`}
        getOptionValue={m => m.id}
        options={members}
        placeholder="Select a team member..."
        renderOption={(member, isSelected) => (
          <div className="flex w-full items-center gap-3">
            <Check className={cn('h-4 w-4 shrink-0', isSelected ? 'opacity-100' : 'opacity-0')} />
            <Avatar member={member} />
            <div className="flex flex-col">
              <span className="text-sm font-medium">
                {member.firstName} {member.lastName}
              </span>
              <span className="text-xs text-muted-foreground">{member.department}</span>
            </div>
          </div>
        )}
        renderValue={member => (
          <div className="flex items-center gap-2">
            <Avatar member={member} size="sm" />
            <span>
              {member.firstName} {member.lastName}
            </span>
          </div>
        )}
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected ID: {value || 'none'}</p>
    </div>
  );
};
`,we=({value:a="",...i})=>{const[t,o]=l.useState(a),[n,m]=l.useState(null),N=[{id:1,name:"Alice Johnson",email:"alice@example.com",role:"Developer"},{id:2,name:"Bob Smith",email:"bob@example.com",role:"Designer"},{id:3,name:"Charlie Brown",email:"charlie@example.com",role:"Manager"},{id:4,name:"Diana Prince",email:"diana@example.com",role:"Developer"},{id:5,name:"Eve Wilson",email:"eve@example.com",role:"Designer"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{...i,getOptionLabel:u=>u.name,getOptionValue:u=>String(u.id),options:N,placeholder:"Select a user...",value:t,onChange:(u,S)=>{o(u),m(S||null)}}),n?e.jsxs("div",{className:"rounded-lg border bg-card p-4 text-card-foreground shadow-sm",children:[e.jsx("h3",{className:"mb-2 text-sm font-semibold",children:"Selected User Details"}),e.jsxs("div",{className:"space-y-1 text-sm",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Name:"})," ",n.name]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Email:"})," ",n.email]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Role:"})," ",n.role]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"ID:"})," ",n.id]})]})]}):e.jsx("p",{className:"text-sm text-muted-foreground",children:"No user selected"})]})};we.__docgenInfo={description:"",methods:[],displayName:"AutocompleteWithItemCallback",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Async function to fetch options based on user input.
Receives the current input value and returns a promise that resolves to an array of options.
If provided, the component will use async loading instead of static options.`},options:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Static array of options to display.
Used when loadOptions is not provided. The component will filter these options based on user input.`},value:{required:!1,tsType:{name:"string"},description:`The currently selected value as a string.
Use an empty string ('') to represent no selection.`,defaultValue:{value:"''",computed:!1}},getOptionValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => string",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"string"}}},description:`Derives the unique string value for an option, used for selection matching and onChange.
Required unless all options are uniquely identifiable by another means.`},getOptionLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => string",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"string"}}},description:`Derives the display label for an option.
Used as the default label in the dropdown and trigger, and as the field searched when
filtering static options. If not provided, filtering falls back to the option value string.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string, item?: T) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"T"},name:"item"}],return:{name:"void"}}},description:`Callback function invoked when the selected value changes.
@param value - The selected option's value as a string, or empty string when clearing.
@param item - The full option object, or undefined when clearing the selection.`},renderValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for the selected value shown in the trigger button.
Receives the full selected option object. Falls back to getOptionLabel, then the raw value string.
@param option - The currently selected option object.
@returns A React node to render inside the trigger.`},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T, isSelected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for each option in the dropdown.
Receives the option object and whether it's currently selected.
If not provided, defaults to rendering a Check icon and the getOptionLabel value.
@param isSelected - Whether this option is currently selected.
@returns A React node to render for this option.`},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text displayed when no option is selected.
@default 'Select an option...'`},emptyMessage:{required:!1,tsType:{name:"string"},description:`Message displayed when no options match the search input.
@default 'No results found'`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the trigger button."},listClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the options list container."},maxSuggestions:{required:!1,tsType:{name:"number"},description:`Maximum number of suggestions to display in the dropdown.
@default 10`},debounceMs:{required:!1,tsType:{name:"number"},description:`Debounce delay for async searches in milliseconds.
@default 300`},minSearch:{required:!1,tsType:{name:"number"},description:`Minimum number of characters required before triggering an async search.
@default 2`},loadingMessage:{required:!1,tsType:{name:"string"},description:`Message displayed while loading options asynchronously.
@default 'Loading...'`},errorMessage:{required:!1,tsType:{name:"string"},description:`Message displayed when an async fetch fails.
@default 'Failed to load options'`},popoverClassName:{required:!1,tsType:{name:"string"},description:"Additional class names for the popover content (e.g. to set min-width or width)."},zIndex:{required:!1,tsType:{name:"number"},description:`Z-index value for the popover dropdown.
If not provided, uses the default z-index from the theme.`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled.
@default false`},name:{required:!1,tsType:{name:"string"},description:"The name attribute for form submission."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the autocomplete is required for form validation."},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const ke=`import { useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';
import { AutocompleteProps } from '../types';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export const AutocompleteWithItemCallback = ({
  value: initialValue = '',
  ...args
}: AutocompleteProps<User>) => {
  const [value, setValue] = useState<string>(initialValue);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const users: User[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Developer' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Designer' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Manager' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Developer' },
    { id: 5, name: 'Eve Wilson', email: 'eve@example.com', role: 'Designer' },
  ];

  return (
    <div className="space-y-4">
      <Autocomplete<User>
        {...args}
        getOptionLabel={u => u.name}
        getOptionValue={u => String(u.id)}
        options={users}
        placeholder="Select a user..."
        value={value}
        onChange={(newValue, item) => {
          setValue(newValue);
          setSelectedUser(item || null);
        }}
      />
      {selectedUser ? (
        <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
          <h3 className="mb-2 text-sm font-semibold">Selected User Details</h3>
          <div className="space-y-1 text-sm">
            <p>
              <span className="font-medium">Name:</span> {selectedUser.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {selectedUser.email}
            </p>
            <p>
              <span className="font-medium">Role:</span> {selectedUser.role}
            </p>
            <p>
              <span className="font-medium">ID:</span> {selectedUser.id}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">No user selected</p>
      )}
    </div>
  );
};
`,Me=[{value:"1",label:"Short"},{value:"2",label:"A much longer option label that would overflow"},{value:"3",label:"Another very long label to demonstrate min-width behavior"},{value:"4",label:"Medium length"}],Te=a=>{const[i,t]=l.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{...a,className:"w-72",getOptionLabel:o=>o.label,getOptionValue:o=>o.value,options:Me,placeholder:"Select...",popoverClassName:"min-w-[50rem]",value:i,onChange:o=>t(o)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",i||"none"]})]})};Te.__docgenInfo={description:"",methods:[],displayName:"AutocompleteMinWidthPopover"};const De=`import { useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';
import { AutocompleteProps } from '../types';

interface AutocompleteOption {
  value: string;
  label: string;
}

const options: AutocompleteOption[] = [
  { value: '1', label: 'Short' },
  { value: '2', label: 'A much longer option label that would overflow' },
  { value: '3', label: 'Another very long label to demonstrate min-width behavior' },
  { value: '4', label: 'Medium length' },
];

export const AutocompleteMinWidthPopover = (
  args: Partial<AutocompleteProps<AutocompleteOption>>,
) => {
  const [value, setValue] = useState<string>('');
  return (
    <div className="space-y-4">
      <Autocomplete<AutocompleteOption>
        {...args}
        className="w-72"
        getOptionLabel={o => o.label}
        getOptionValue={o => o.value}
        options={options}
        placeholder="Select..."
        popoverClassName="min-w-[50rem]"
        value={value}
        onChange={newValue => setValue(newValue)}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,Ne=({value:a="",...i})=>{const[t,o]=l.useState(a);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{...i,getOptionLabel:n=>n.label,getOptionValue:n=>n.value,options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],placeholder:"Select an option...",value:t,onChange:n=>o(n)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",t||"none"]})]})};Ne.__docgenInfo={description:"",methods:[],displayName:"AutocompleteWithStaticOptions",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Async function to fetch options based on user input.
Receives the current input value and returns a promise that resolves to an array of options.
If provided, the component will use async loading instead of static options.`},options:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Static array of options to display.
Used when loadOptions is not provided. The component will filter these options based on user input.`},value:{required:!1,tsType:{name:"string"},description:`The currently selected value as a string.
Use an empty string ('') to represent no selection.`,defaultValue:{value:"''",computed:!1}},getOptionValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => string",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"string"}}},description:`Derives the unique string value for an option, used for selection matching and onChange.
Required unless all options are uniquely identifiable by another means.`},getOptionLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => string",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"string"}}},description:`Derives the display label for an option.
Used as the default label in the dropdown and trigger, and as the field searched when
filtering static options. If not provided, filtering falls back to the option value string.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string, item?: T) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"T"},name:"item"}],return:{name:"void"}}},description:`Callback function invoked when the selected value changes.
@param value - The selected option's value as a string, or empty string when clearing.
@param item - The full option object, or undefined when clearing the selection.`},renderValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for the selected value shown in the trigger button.
Receives the full selected option object. Falls back to getOptionLabel, then the raw value string.
@param option - The currently selected option object.
@returns A React node to render inside the trigger.`},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T, isSelected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for each option in the dropdown.
Receives the option object and whether it's currently selected.
If not provided, defaults to rendering a Check icon and the getOptionLabel value.
@param isSelected - Whether this option is currently selected.
@returns A React node to render for this option.`},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text displayed when no option is selected.
@default 'Select an option...'`},emptyMessage:{required:!1,tsType:{name:"string"},description:`Message displayed when no options match the search input.
@default 'No results found'`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the trigger button."},listClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the options list container."},maxSuggestions:{required:!1,tsType:{name:"number"},description:`Maximum number of suggestions to display in the dropdown.
@default 10`},debounceMs:{required:!1,tsType:{name:"number"},description:`Debounce delay for async searches in milliseconds.
@default 300`},minSearch:{required:!1,tsType:{name:"number"},description:`Minimum number of characters required before triggering an async search.
@default 2`},loadingMessage:{required:!1,tsType:{name:"string"},description:`Message displayed while loading options asynchronously.
@default 'Loading...'`},errorMessage:{required:!1,tsType:{name:"string"},description:`Message displayed when an async fetch fails.
@default 'Failed to load options'`},popoverClassName:{required:!1,tsType:{name:"string"},description:"Additional class names for the popover content (e.g. to set min-width or width)."},zIndex:{required:!1,tsType:{name:"number"},description:`Z-index value for the popover dropdown.
If not provided, uses the default z-index from the theme.`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled.
@default false`},name:{required:!1,tsType:{name:"string"},description:"The name attribute for form submission."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the autocomplete is required for form validation."},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const Le=`import { useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';
import { AutocompleteProps } from '../types';

interface AutocompleteOption {
  value: string;
  label: string;
}

export const AutocompleteWithStaticOptions = ({
  value: initialValue = '',
  ...args
}: AutocompleteProps<AutocompleteOption>) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Autocomplete<AutocompleteOption>
        {...args}
        getOptionLabel={o => o.label}
        getOptionValue={o => o.value}
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        placeholder="Select an option..."
        value={value}
        onChange={newValue => setValue(newValue)}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,We=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"}],Ae=()=>{const[a,i]=l.useState(""),[t,o]=l.useState([]),[n,m]=l.useState(""),N=l.useRef(null),u=l.useRef(performance.now()),S=l.useRef(0),O=(s,c)=>{o(r=>[...r,{id:S.current++,at:Math.round(performance.now()-u.current),kind:s,text:c}])};return l.useEffect(()=>{const s=N.current;if(!s)return;let c=null,r=null;const A=()=>{if(!c)return;const p=c.textContent??"";m(p),p.trim().length>0&&O("announce",p)},g=()=>{const p=s.querySelector('[role="status"][aria-live]');p&&p!==c&&(c=p,r==null||r.disconnect(),r=new MutationObserver(A),r.observe(c,{childList:!0,characterData:!0,subtree:!0}),A())},q=new MutationObserver(g);return q.observe(s,{childList:!0,subtree:!0}),g(),()=>{q.disconnect(),r==null||r.disconnect()}},[]),l.useEffect(()=>{const s=c=>{var g;const r=c.target;if(!r||r===document.body)return;const A=r.getAttribute("aria-label")||((g=r.textContent)==null?void 0:g.trim().slice(0,60))||r.tagName.toLowerCase();O("focus",`${r.tagName.toLowerCase()}: "${A}"`)};return document.addEventListener("focusin",s),()=>document.removeEventListener("focusin",s)},[]),e.jsxs("div",{className:"grid gap-6 md:grid-cols-2",style:{maxWidth:720},children:[e.jsxs("div",{ref:N,className:"space-y-3",children:[e.jsx(d,{getOptionLabel:s=>s.label,getOptionValue:s=>s.value,options:We,placeholder:"Select a framework...",value:a,onChange:i}),e.jsxs("p",{"aria-hidden":"true",className:"text-sm text-muted-foreground",children:["Selected value: ",e.jsx("span",{className:"font-medium",children:a||"none"})]})]}),e.jsxs("div",{"aria-hidden":"true",className:"space-y-4",children:[e.jsxs("div",{className:"bg-muted/40 rounded-md border p-3",children:[e.jsx("div",{className:"mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground",children:"Current live-region text"}),e.jsx("div",{className:"min-h-6 font-mono text-sm",children:n||"(empty)"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wide text-muted-foreground",children:"Event log (ms)"}),e.jsx("button",{className:"rounded border px-2 py-0.5 text-xs hover:bg-muted",type:"button",onClick:()=>o([]),children:"Clear"})]}),e.jsx("ol",{className:"max-h-80 space-y-1 overflow-y-auto rounded-md border p-2 font-mono text-xs",children:t.length===0?e.jsx("li",{className:"text-muted-foreground",children:"No events yet — open the list, type, and select an option."}):t.map(s=>e.jsxs("li",{className:s.kind==="announce"?"text-foreground":"text-muted-foreground",children:[e.jsxs("span",{className:"tabular-nums",children:[String(s.at).padStart(5," "),"ms"]})," ",e.jsx("span",{className:"font-semibold",children:s.kind==="announce"?"📢 announce":"🎯 focus  "})," ",s.text]},s.id))})]})]})};Ae.__docgenInfo={description:`Debug harness for the Autocomplete's screen-reader announcements.

It does NOT read the component's internal state. Instead it watches the real
DOM — the same thing a screen reader consumes:
  1. a MutationObserver on the visually-hidden \`[role="status"][aria-live]\`
     live region, logging every text change (this is what would be spoken);
  2. document \`focusin\` events, so we can see where focus lands relative to
     an announcement (focus moving to the trigger can interrupt a polite
     announcement in real screen readers).

The live-region text is also mirrored into a visible (but aria-hidden) panel
so you can literally see what is queued for the screen reader.`,methods:[],displayName:"AutocompleteAnnouncementDebug"};const Pe=`import { useEffect, useRef, useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';

interface AutocompleteOption {
  value: string;
  label: string;
}

const options: AutocompleteOption[] = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

interface LogEntry {
  id: number;
  at: number;
  kind: 'announce' | 'focus';
  text: string;
}

/**
 * Debug harness for the Autocomplete's screen-reader announcements.
 *
 * It does NOT read the component's internal state. Instead it watches the real
 * DOM — the same thing a screen reader consumes:
 *   1. a MutationObserver on the visually-hidden \`[role="status"][aria-live]\`
 *      live region, logging every text change (this is what would be spoken);
 *   2. document \`focusin\` events, so we can see where focus lands relative to
 *      an announcement (focus moving to the trigger can interrupt a polite
 *      announcement in real screen readers).
 *
 * The live-region text is also mirrored into a visible (but aria-hidden) panel
 * so you can literally see what is queued for the screen reader.
 */
export const AutocompleteAnnouncementDebug = () => {
  const [value, setValue] = useState('');
  const [log, setLog] = useState<LogEntry[]>([]);
  const [liveText, setLiveText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<number>(performance.now());
  const idRef = useRef(0);

  const push = (kind: LogEntry['kind'], text: string) => {
    setLog(prev => [
      ...prev,
      { id: idRef.current++, at: Math.round(performance.now() - startRef.current), kind, text },
    ]);
  };

  // Watch the real live region for text changes — this is what a screen reader
  // announces. Re-attach whenever the region node appears/changes.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let region: HTMLElement | null = null;
    let regionObserver: MutationObserver | null = null;

    const readRegion = () => {
      if (!region) return;
      const text = region.textContent ?? '';
      setLiveText(text);
      if (text.trim().length > 0) push('announce', text);
    };

    const attach = () => {
      const found = container.querySelector<HTMLElement>('[role="status"][aria-live]');
      if (found && found !== region) {
        region = found;
        regionObserver?.disconnect();
        regionObserver = new MutationObserver(readRegion);
        regionObserver.observe(region, { childList: true, characterData: true, subtree: true });
        readRegion();
      }
    };

    // The live region is always mounted, but re-attach defensively if the tree
    // changes (e.g. the popover opening/closing re-renders siblings).
    const treeObserver = new MutationObserver(attach);
    treeObserver.observe(container, { childList: true, subtree: true });
    attach();

    return () => {
      treeObserver.disconnect();
      regionObserver?.disconnect();
    };
  }, []);

  // Track focus moves so we can correlate them with announcements.
  useEffect(() => {
    const onFocus = (e: FocusEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el || el === document.body) return;
      const label =
        el.getAttribute('aria-label') ||
        el.textContent?.trim().slice(0, 60) ||
        el.tagName.toLowerCase();
      push('focus', \`\${el.tagName.toLowerCase()}: "\${label}"\`);
    };
    document.addEventListener('focusin', onFocus);
    return () => document.removeEventListener('focusin', onFocus);
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2" style={{ maxWidth: 720 }}>
      <div ref={containerRef} className="space-y-3">
        <Autocomplete<AutocompleteOption>
          getOptionLabel={o => o.label}
          getOptionValue={o => o.value}
          options={options}
          placeholder="Select a framework..."
          value={value}
          onChange={setValue}
        />
        {/* aria-hidden so the screen reader hears only the Autocomplete's own
            announcements, not this debug readout. */}
        <p aria-hidden="true" className="text-sm text-muted-foreground">
          Selected value: <span className="font-medium">{value || 'none'}</span>
        </p>
      </div>

      <div aria-hidden="true" className="space-y-4">
        {/* Visible mirror of the live region. aria-hidden so it is NOT itself
            announced — it only lets you see what the real region holds. Kept to
            the right of (and above the event log, not below) the autocomplete so
            the open dropdown never covers it. */}
        <div className="bg-muted/40 rounded-md border p-3">
          <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Current live-region text
          </div>
          <div className="min-h-6 font-mono text-sm">{liveText || '(empty)'}</div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Event log (ms)
          </div>
          <button
            className="rounded border px-2 py-0.5 text-xs hover:bg-muted"
            type="button"
            onClick={() => setLog([])}
          >
            Clear
          </button>
        </div>
        <ol className="max-h-80 space-y-1 overflow-y-auto rounded-md border p-2 font-mono text-xs">
          {log.length === 0 ? (
            <li className="text-muted-foreground">
              No events yet — open the list, type, and select an option.
            </li>
          ) : (
            log.map(entry => (
              <li
                key={entry.id}
                className={entry.kind === 'announce' ? 'text-foreground' : 'text-muted-foreground'}
              >
                <span className="tabular-nums">{String(entry.at).padStart(5, ' ')}ms</span>{' '}
                <span className="font-semibold">
                  {entry.kind === 'announce' ? '📢 announce' : '🎯 focus  '}
                </span>{' '}
                {entry.text}
              </li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
};
`,vt={title:"Data & Display/Autocomplete",component:d,parameters:{},tags:["autodocs"],argTypes:{value:{control:"text",description:"The selected value",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Placeholder text for the input",table:{type:{summary:"string"}}},emptyMessage:{control:"text",description:"Message to display when no options are found",table:{type:{summary:"string"}}},loadingMessage:{control:"text",description:"Message to display while loading options",table:{type:{summary:"string"}}},errorMessage:{control:"text",description:"Message to display when async fetch fails",table:{type:{summary:"string"}}},maxSuggestions:{control:"number",description:"Maximum number of suggestions to display",table:{type:{summary:"number"}}},debounceMs:{control:"number",description:"Debounce delay for async searches (in milliseconds)",table:{type:{summary:"number"}}},minSearch:{control:"number",description:"Minimum characters before triggering async search",table:{type:{summary:"number"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",description:"Whether the component is disabled",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the component"},listClassName:{type:"string",description:"Additional class names to apply to the options list"},name:{control:"text",description:"The name attribute for form submission. This is required for the autocomplete value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the autocomplete is required for form validation. When true, the form cannot be submitted without a selection.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the autocomplete when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}}},h={args:{loadOptions:fe,getOptionValue:a=>a.value,getOptionLabel:a=>a.label,value:"",onChange:()=>{},placeholder:"Search..."},tags:["!autodocs"]},f={render:()=>e.jsx(ye,{value:"",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:qe,language:"tsx"}}}},v={render:()=>e.jsx(Ne,{value:"",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:Le,language:"tsx"}}}},y={render:()=>e.jsx(xe,{}),args:{},parameters:{docs:{source:{code:Ve,language:"tsx"}}}},b={render:()=>e.jsx(be,{value:"",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:Re,language:"tsx"}}}},x={render:()=>e.jsx(we,{value:"",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:ke,language:"tsx"}}}},w={render:()=>e.jsx(Te,{value:"",onChange:()=>{}}),args:{},parameters:{docs:{description:{story:"Uses a fixed-width trigger, which demonstrates ellipsis when the label content is too long. The popover content uses popoverClassName to set a minimum width, so it can grow when options are wider. Open the dropdown to see it expand for long labels."},source:{code:De,language:"tsx"}}}},T={render:()=>e.jsx(Ae,{}),args:{},tags:["!autodocs"],parameters:{docs:{source:{code:Pe,language:"tsx"}}}};var j,V,k,M,D;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    loadOptions: mockSearchLibraries,
    getOptionValue: (o: {
      value: string;
    }) => o.value,
    getOptionLabel: (o: {
      label: string;
    }) => o.label,
    value: '',
    onChange: () => {},
    placeholder: 'Search...'
  } as unknown as Story['args'],
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(k=(V=h.parameters)==null?void 0:V.docs)==null?void 0:k.source},description:{story:`Interactive playground for the Autocomplete component.
Use the controls to experiment with different props and states.`,...(D=(M=h.parameters)==null?void 0:M.docs)==null?void 0:D.description}}};var L,W,P,I,U;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <AutocompleteDefault value="" onChange={() => {}} />,
  // @ts-expect-error - Storybook can't properly infer generic types
  args: {},
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
        language: 'tsx'
      }
    }
  }
}`,...(P=(W=f.parameters)==null?void 0:W.docs)==null?void 0:P.source},description:{story:`The default state of the Autocomplete component with async loading of options.
This demonstrates the basic functionality with a search input that loads results after a delay.
Search for "React" to see results.`,...(U=(I=f.parameters)==null?void 0:I.docs)==null?void 0:U.description}}};var E,F,_,z,$;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <AutocompleteWithStaticOptions value="" onChange={() => {}} />,
  // @ts-expect-error - Storybook can't properly infer generic types
  args: {},
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithStaticOptions,
        language: 'tsx'
      }
    }
  }
}`,...(_=(F=v.parameters)==null?void 0:F.docs)==null?void 0:_.source},description:{story:`An example of the Autocomplete component with static options instead of async loading.
This shows how the component behaves with a predefined list of options.`,...($=(z=v.parameters)==null?void 0:z.docs)==null?void 0:$.description}}};var B,J,K,Z,H;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <AutocompleteWithRenderValue />,
  // @ts-expect-error - Storybook can't properly infer generic types
  args: {},
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithRenderValue,
        language: 'tsx'
      }
    }
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Uses `renderValue` and `renderOption` together with `getOptionValue` — no `labelKey` or\n`valueKey` needed. `renderValue` controls what appears in the trigger after a selection;\n`renderOption` controls each row in the dropdown.",...(H=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:H.description}}};var G,Q,X,Y,ee;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <AutocompleteWithCustomRender value="" onChange={() => {}} />,
  // @ts-expect-error - Storybook can't properly infer generic types
  args: {},
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithCustomRender,
        language: 'tsx'
      }
    }
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:`An example of the Autocomplete component with a custom renderOption function.
This demonstrates how to customize the appearance of each option, including showing
additional information like descriptions and featured badges.`,...(ee=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:ee.description}}};var te,ne,ae,oe,se;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <AutocompleteWithItemCallback value="" onChange={() => {}} />,
  // @ts-expect-error - Storybook can't properly infer generic types
  args: {},
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithItemCallback,
        language: 'tsx'
      }
    }
  }
}`,...(ae=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ae.source},description:{story:`An example of the Autocomplete component using the full item object from the onChange callback.
This demonstrates how to access the complete option object (not just the value) when a selection
is made, which is useful for displaying additional information or performing actions with the full data.`,...(se=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:se.description}}};var re,ie,le,ce,de;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <AutocompleteMinWidthPopover value="" onChange={() => {}} />,
  // @ts-expect-error - Storybook can't properly infer generic types
  args: {},
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
}`,...(le=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:le.source},description:{story:"Uses a fixed-width trigger (demonstrates ellipsis when the label is too long). Popover\nuses `popoverClassName` so it can be wider than the trigger - the dropdown expands to\nfit long option labels.",...(de=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var ue,pe,me,ge,he;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <AutocompleteAnnouncementDebug />,
  // @ts-expect-error - Storybook can't properly infer generic types
  args: {},
  tags: ['!autodocs'],
  parameters: {
    docs: {
      source: {
        code: sourceCodeAnnouncementDebug,
        language: 'tsx'
      }
    }
  }
}`,...(me=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:me.source},description:{story:`Debug harness for the screen-reader announcements (508). It watches the real
\`[role="status"][aria-live]\` live region with a MutationObserver and logs
every text change — this is exactly what a screen reader would speak — plus
focus moves, so announcements and focus changes can be correlated on a
timeline. The "Current live-region text" panel mirrors the region visibly
(the panels are \`aria-hidden\` so they are not themselves announced).

To debug: open the list (the count, instructions, and first suggestion are
announced, e.g. "There are 3 suggestions, use the up and down arrow keys to
browse. React, 1 of 3."), arrow through the options (each highlighted option
is announced, e.g. "Vue, selected"), narrow to one result ("There is 1
suggestion, ... Angular, 1 of 1."), search for nothing ("No results found"),
and select an option ("<label> selected", then focus returns to the trigger).`,...(he=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:he.description}}};const yt=["Playground","Default","WithStaticOptions","WithRenderValue","WithCustomRender","WithItemCallback","MinWidthPopover","AnnouncementDebug"];export{T as AnnouncementDebug,f as Default,w as MinWidthPopover,h as Playground,b as WithCustomRender,x as WithItemCallback,y as WithRenderValue,v as WithStaticOptions,yt as __namedExportsOrder,vt as default};
