import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{m as ee}from"./index-D2Jrw3qQ.js";import{r}from"./index-B0WjJBI_.js";import{A as i}from"./Autocomplete-BJHzi9Xs.js";import{a as y}from"./utils-CU3My8Oi.js";import{C as te}from"./check-C42IfL-F.js";import{c as de}from"./createLucideIcon-BeEkWZrd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Button-BinwIYAK.js";import"./useAriaDisabled-BVkOu7OW.js";import"./index-BOrrHd12.js";import"./index-EiwPuDyL.js";import"./constants-D9UEAID0.js";import"./styles-CafxXXJc.js";import"./index-NE6MC3wq.js";import"./CommandItem-D7pXXPGo.js";import"./index-CoRj-x2w.js";import"./index-KklXjS-Z.js";import"./index-CwPCC0ZT.js";import"./index-CoMQ7c9D.js";import"./index-B5oA2Zbg.js";import"./index-Cdcq5Wwr.js";import"./index-DKzZmXCh.js";import"./index-OiR64VEf.js";import"./index-BllD4pgw.js";import"./index-BHtEszHx.js";import"./CommandList-C6ABvPPR.js";import"./z-index-CmEG1ohp.js";import"./Popover-D7LnbHHd.js";import"./index-DKWC2_YT.js";import"./floating-ui.react-dom-Dsj8ROC4.js";import"./index-DBA0bpW4.js";import"./x-DEnjg7Le.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],ue=de("star",ce),ae=({value:n="",...s})=>{const[t,o]=r.useState(n);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...s,getOptionLabel:a=>a.label,getOptionValue:a=>a.value,loadOptions:ee,placeholder:"Search...",value:t,onChange:a=>o(a)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",t||"none"]})]})};ae.__docgenInfo={description:"",methods:[],displayName:"AutocompleteDefault",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Async function to fetch options based on user input.
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
@default false`},name:{required:!1,tsType:{name:"string"},description:"The name attribute for form submission."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the autocomplete is required for form validation."},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const me=`import { mockSearchLibraries } from '@/mocks';
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
`,ne=({value:n="",...s})=>{const[t,o]=r.useState(n);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...s,getOptionLabel:a=>a.label,getOptionValue:a=>a.value,options:[{value:"react",label:"React",description:"A JavaScript library for building user interfaces",featured:!0},{value:"vue",label:"Vue.js",description:"The Progressive JavaScript Framework",featured:!0},{value:"angular",label:"Angular",description:"A platform for building mobile and desktop web applications"},{value:"svelte",label:"Svelte",description:"Cybernetically enhanced web apps",featured:!0},{value:"next",label:"Next.js",description:"The React Framework for Production"}],placeholder:"Select a framework...",renderOption:(a,f)=>e.jsx("div",{className:"flex w-full items-center justify-between",children:e.jsxs("div",{className:"flex flex-1 items-start gap-1",children:[e.jsx(te,{className:y("mt-[0.1875rem] h-4 w-4 text-primary-400",f?"opacity-100":"opacity-0")}),e.jsxs("div",{className:"flex flex-1 flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-medium",children:a.label}),a.featured?e.jsx(ue,{className:"h-3 w-3 fill-yellow-500 text-yellow-500"}):null]}),a.description?e.jsx("span",{className:"text-xs text-muted-foreground",children:a.description}):null]})]})}),value:t,onChange:a=>o(a)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",t||"none"]})]})};ne.__docgenInfo={description:"",methods:[],displayName:"AutocompleteWithCustomRender",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Async function to fetch options based on user input.
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
@default false`},name:{required:!1,tsType:{name:"string"},description:"The name attribute for form submission."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the autocomplete is required for form validation."},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const ge=`import { cn } from '@/lib/utils';
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
`,he=[{id:"am",firstName:"Alice",lastName:"Martin",department:"Engineering",avatarColor:"bg-blue-500"},{id:"bk",firstName:"Bob",lastName:"Kim",department:"Design",avatarColor:"bg-purple-500"},{id:"cp",firstName:"Clara",lastName:"Patel",department:"Product",avatarColor:"bg-green-500"},{id:"dw",firstName:"David",lastName:"Wu",department:"Engineering",avatarColor:"bg-orange-500"},{id:"en",firstName:"Eva",lastName:"Novak",department:"Design",avatarColor:"bg-pink-500"}];function b({member:n,size:s="md"}){const t=`${n.firstName[0]}${n.lastName[0]}`;return e.jsx("span",{className:y("inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white",n.avatarColor,s==="sm"?"h-5 w-5 text-[0.625rem]":"h-7 w-7 text-xs"),children:t})}const oe=()=>{const[n,s]=r.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{getOptionLabel:t=>`${t.firstName} ${t.lastName}`,getOptionValue:t=>t.id,options:he,placeholder:"Select a team member...",renderOption:(t,o)=>e.jsxs("div",{className:"flex w-full items-center gap-3",children:[e.jsx(te,{className:y("h-4 w-4 shrink-0",o?"opacity-100":"opacity-0")}),e.jsx(b,{member:t}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("span",{className:"text-sm font-medium",children:[t.firstName," ",t.lastName]}),e.jsx("span",{className:"text-xs text-muted-foreground",children:t.department})]})]}),renderValue:t=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{member:t,size:"sm"}),e.jsxs("span",{children:[t.firstName," ",t.lastName]})]}),value:n,onChange:s}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected ID: ",n||"none"]})]})};oe.__docgenInfo={description:"",methods:[],displayName:"AutocompleteWithRenderValue"};const fe=`import { cn } from '@/lib/utils';
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
`,se=({value:n="",...s})=>{const[t,o]=r.useState(n),[a,f]=r.useState(null),le=[{id:1,name:"Alice Johnson",email:"alice@example.com",role:"Developer"},{id:2,name:"Bob Smith",email:"bob@example.com",role:"Designer"},{id:3,name:"Charlie Brown",email:"charlie@example.com",role:"Manager"},{id:4,name:"Diana Prince",email:"diana@example.com",role:"Developer"},{id:5,name:"Eve Wilson",email:"eve@example.com",role:"Designer"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...s,getOptionLabel:l=>l.name,getOptionValue:l=>String(l.id),options:le,placeholder:"Select a user...",value:t,onChange:(l,pe)=>{o(l),f(pe||null)}}),a?e.jsxs("div",{className:"rounded-lg border bg-card p-4 text-card-foreground shadow-sm",children:[e.jsx("h3",{className:"mb-2 text-sm font-semibold",children:"Selected User Details"}),e.jsxs("div",{className:"space-y-1 text-sm",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Name:"})," ",a.name]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Email:"})," ",a.email]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Role:"})," ",a.role]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"ID:"})," ",a.id]})]})]}):e.jsx("p",{className:"text-sm text-muted-foreground",children:"No user selected"})]})};se.__docgenInfo={description:"",methods:[],displayName:"AutocompleteWithItemCallback",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Async function to fetch options based on user input.
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
@default false`},name:{required:!1,tsType:{name:"string"},description:"The name attribute for form submission."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the autocomplete is required for form validation."},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const ye=`import { useState } from 'react';
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
`,be=[{value:"1",label:"Short"},{value:"2",label:"A much longer option label that would overflow"},{value:"3",label:"Another very long label to demonstrate min-width behavior"},{value:"4",label:"Medium length"}],re=n=>{const[s,t]=r.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...n,className:"w-72",getOptionLabel:o=>o.label,getOptionValue:o=>o.value,options:be,placeholder:"Select...",popoverClassName:"min-w-[50rem]",value:s,onChange:o=>t(o)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",s||"none"]})]})};re.__docgenInfo={description:"",methods:[],displayName:"AutocompleteMinWidthPopover"};const ve=`import { useState } from 'react';
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
`,ie=({value:n="",...s})=>{const[t,o]=r.useState(n);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...s,getOptionLabel:a=>a.label,getOptionValue:a=>a.value,options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],placeholder:"Select an option...",value:t,onChange:a=>o(a)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",t||"none"]})]})};ie.__docgenInfo={description:"",methods:[],displayName:"AutocompleteWithStaticOptions",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Async function to fetch options based on user input.
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
@default false`},name:{required:!1,tsType:{name:"string"},description:"The name attribute for form submission."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the autocomplete is required for form validation."},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const we=`import { useState } from 'react';
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
`,et={title:"Data & Display/Autocomplete",component:i,parameters:{},tags:["autodocs"],argTypes:{value:{control:"text",description:"The selected value",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Placeholder text for the input",table:{type:{summary:"string"}}},emptyMessage:{control:"text",description:"Message to display when no options are found",table:{type:{summary:"string"}}},loadingMessage:{control:"text",description:"Message to display while loading options",table:{type:{summary:"string"}}},errorMessage:{control:"text",description:"Message to display when async fetch fails",table:{type:{summary:"string"}}},maxSuggestions:{control:"number",description:"Maximum number of suggestions to display",table:{type:{summary:"number"}}},debounceMs:{control:"number",description:"Debounce delay for async searches (in milliseconds)",table:{type:{summary:"number"}}},minSearch:{control:"number",description:"Minimum characters before triggering async search",table:{type:{summary:"number"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",description:"Whether the component is disabled",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the component"},listClassName:{type:"string",description:"Additional class names to apply to the options list"},name:{control:"text",description:"The name attribute for form submission. This is required for the autocomplete value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the autocomplete is required for form validation. When true, the form cannot be submitted without a selection.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the autocomplete when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}}},p={args:{loadOptions:ee,getOptionValue:n=>n.value,getOptionLabel:n=>n.label,value:"",onChange:()=>{},placeholder:"Search..."},tags:["!autodocs"]},d={render:()=>e.jsx(ae,{value:"",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:me,language:"tsx"}}}},c={render:()=>e.jsx(ie,{value:"",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:we,language:"tsx"}}}},u={render:()=>e.jsx(oe,{}),args:{},parameters:{docs:{source:{code:fe,language:"tsx"}}}},m={render:()=>e.jsx(ne,{value:"",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:ge,language:"tsx"}}}},g={render:()=>e.jsx(se,{value:"",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:ye,language:"tsx"}}}},h={render:()=>e.jsx(re,{value:"",onChange:()=>{}}),args:{},parameters:{docs:{description:{story:"Uses a fixed-width trigger, which demonstrates ellipsis when the label content is too long. The popover content uses popoverClassName to set a minimum width, so it can grow when options are wider. Open the dropdown to see it expand for long labels."},source:{code:ve,language:"tsx"}}}};var v,w,x,T,N;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(w=p.parameters)==null?void 0:w.docs)==null?void 0:x.source},description:{story:`Interactive playground for the Autocomplete component.
Use the controls to experiment with different props and states.`,...(N=(T=p.parameters)==null?void 0:T.docs)==null?void 0:N.description}}};var A,S,C,q,O;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(C=(S=d.parameters)==null?void 0:S.docs)==null?void 0:C.source},description:{story:`The default state of the Autocomplete component with async loading of options.
This demonstrates the basic functionality with a search input that loads results after a delay.
Search for "React" to see results.`,...(O=(q=d.parameters)==null?void 0:q.docs)==null?void 0:O.description}}};var R,V,j,k,M;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(j=(V=c.parameters)==null?void 0:V.docs)==null?void 0:j.source},description:{story:`An example of the Autocomplete component with static options instead of async loading.
This shows how the component behaves with a predefined list of options.`,...(M=(k=c.parameters)==null?void 0:k.docs)==null?void 0:M.description}}};var W,D,P,I,L;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(D=u.parameters)==null?void 0:D.docs)==null?void 0:P.source},description:{story:"Uses `renderValue` and `renderOption` together with `getOptionValue` — no `labelKey` or\n`valueKey` needed. `renderValue` controls what appears in the trigger after a selection;\n`renderOption` controls each row in the dropdown.",...(L=(I=u.parameters)==null?void 0:I.docs)==null?void 0:L.description}}};var U,F,z,_,E;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(z=(F=m.parameters)==null?void 0:F.docs)==null?void 0:z.source},description:{story:`An example of the Autocomplete component with a custom renderOption function.
This demonstrates how to customize the appearance of each option, including showing
additional information like descriptions and featured badges.`,...(E=(_=m.parameters)==null?void 0:_.docs)==null?void 0:E.description}}};var $,B,J,Z,K;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(B=g.parameters)==null?void 0:B.docs)==null?void 0:J.source},description:{story:`An example of the Autocomplete component using the full item object from the onChange callback.
This demonstrates how to access the complete option object (not just the value) when a selection
is made, which is useful for displaying additional information or performing actions with the full data.`,...(K=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:K.description}}};var G,H,Q,X,Y;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(H=h.parameters)==null?void 0:H.docs)==null?void 0:Q.source},description:{story:"Uses a fixed-width trigger (demonstrates ellipsis when the label is too long). Popover\nuses `popoverClassName` so it can be wider than the trigger - the dropdown expands to\nfit long option labels.",...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};const tt=["Playground","Default","WithStaticOptions","WithRenderValue","WithCustomRender","WithItemCallback","MinWidthPopover"];export{d as Default,h as MinWidthPopover,p as Playground,m as WithCustomRender,g as WithItemCallback,u as WithRenderValue,c as WithStaticOptions,tt as __namedExportsOrder,et as default};
