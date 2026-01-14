import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{A as d,m as U}from"./Autocomplete-Cj9X7QFz.js";import{r as p}from"./index-D4H_InIO.js";import{a as B}from"./utils-CU3My8Oi.js";import{C as G}from"./check-CT0OM3mY.js";import{c as H}from"./createLucideIcon-CRH11QI6.js";import"./Button-BwlrdoZf.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./CommandItem-CiFaxsn-.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CQ-IqFoI.js";import"./index-DB-GfMvg.js";import"./index-Ak5Mws-w.js";import"./index-CWZjxdH8.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DLaBReRc.js";import"./CommandList-DmlIjmFM.js";import"./Popover-OaSsjRLr.js";import"./z-index-CmEG1ohp.js";import"./index-DonjGF9j.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./x-B9-lGSIk.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],X=H("star",Q),F=({value:o="",...n})=>{const[a,s]=p.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{...n,labelKey:"label",loadOptions:U,placeholder:"Search...",value:a,valueKey:"value",onChange:t=>s(t)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};F.__docgenInfo={description:"",methods:[],displayName:"AutocompleteDefault",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Async function to fetch options based on user input.
Receives the current input value and returns a promise that resolves to an array of options.
If provided, the component will use async loading instead of static options.`},options:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Static array of options to display.
Used when loadOptions is not provided. The component will filter these options based on user input.`},value:{required:!1,tsType:{name:"union",raw:"T[K] | ''",elements:[{name:"T[K]",raw:"T[K]"},{name:"literal",value:"''"}]},description:`The currently selected value. Must match the value of one of the options using the valueKey.
Use an empty string ('') to represent no selection.`,defaultValue:{value:"''",computed:!1}},valueKey:{required:!0,tsType:{name:"K"},description:`The key to use for the value property in option objects.
Must be a key of T.`},labelKey:{required:!0,tsType:{name:"L"},description:`The key to use for the label property in option objects.
Must be a key of T.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T[K], item?: T) => void",signature:{arguments:[{type:{name:"T[K]",raw:"T[K]"},name:"value"},{type:{name:"T"},name:"item"}],return:{name:"void"}}},description:`Callback function invoked when the selected value changes.
@param value - The selected value from the option object.
@param item - The full option object, or undefined when clearing the selection.`},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text displayed when no option is selected.
@default 'Select an option...'`},emptyMessage:{required:!1,tsType:{name:"string"},description:`Message displayed when no options match the search input.
@default 'No results found'`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the trigger button."},listClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the options list container."},maxSuggestions:{required:!1,tsType:{name:"number"},description:`Maximum number of suggestions to display in the dropdown.
@default 10`},debounceMs:{required:!1,tsType:{name:"number"},description:`Debounce delay for async searches in milliseconds.
Prevents excessive API calls by waiting for the user to stop typing.
@default 300`},minSearch:{required:!1,tsType:{name:"number"},description:`Minimum number of characters required before triggering an async search.
@default 2`},loadingMessage:{required:!1,tsType:{name:"string"},description:`Message displayed while loading options asynchronously.
@default 'Loading...'`},errorMessage:{required:!1,tsType:{name:"string"},description:`Message displayed when an async fetch fails.
@default 'Failed to load options'`},zIndex:{required:!1,tsType:{name:"number"},description:`Z-index value for the popover dropdown.
If not provided, uses the default z-index from the theme.`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled.
When true, the autocomplete cannot be interacted with.
@default false`},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T, isSelected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for each option in the dropdown.
Receives the option object and whether it's currently selected.
If not provided, defaults to rendering a Check icon and the option label.
@param option - The option object of type T.
@param isSelected - Whether this option is currently selected.
@returns A React node to render for this option.`},name:{required:!1,tsType:{name:"string"},description:`The name attribute for form submission.
This is required for the autocomplete value to be included in form data.`},required:{required:!1,tsType:{name:"boolean"},description:`Whether the autocomplete is required for form validation.
When true, the form cannot be submitted without a selection.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const Y=`import { mockSearchLibraries } from '@/mocks';
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
}: AutocompleteProps<AutocompleteOption, 'value', 'label'>) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Autocomplete<AutocompleteOption, 'value', 'label'>
        {...args}
        labelKey="label"
        loadOptions={mockSearchLibraries}
        placeholder="Search..."
        value={value}
        valueKey="value"
        onChange={newValue => setValue(newValue)}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,L=({value:o="",...n})=>{const[a,s]=p.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{...n,labelKey:"label",options:[{value:"react",label:"React",description:"A JavaScript library for building user interfaces",featured:!0},{value:"vue",label:"Vue.js",description:"The Progressive JavaScript Framework",featured:!0},{value:"angular",label:"Angular",description:"A platform for building mobile and desktop web applications"},{value:"svelte",label:"Svelte",description:"Cybernetically enhanced web apps",featured:!0},{value:"next",label:"Next.js",description:"The React Framework for Production"}],placeholder:"Select a framework...",renderOption:(t,m)=>e.jsx("div",{className:"flex w-full items-center justify-between",children:e.jsxs("div",{className:"flex flex-1 items-start gap-1",children:[e.jsx(G,{className:B("mt-[0.1875rem] h-4 w-4 text-primary-400",m?"opacity-100":"opacity-0")}),e.jsxs("div",{className:"flex flex-1 flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-medium",children:t.label}),t.featured?e.jsx(X,{className:"h-3 w-3 fill-yellow-500 text-yellow-500"}):null]}),t.description?e.jsx("span",{className:"text-xs text-muted-foreground",children:t.description}):null]})]})}),value:a,valueKey:"value",onChange:t=>s(t)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};L.__docgenInfo={description:"",methods:[],displayName:"AutocompleteWithCustomRender",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Async function to fetch options based on user input.
Receives the current input value and returns a promise that resolves to an array of options.
If provided, the component will use async loading instead of static options.`},options:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Static array of options to display.
Used when loadOptions is not provided. The component will filter these options based on user input.`},value:{required:!1,tsType:{name:"union",raw:"T[K] | ''",elements:[{name:"T[K]",raw:"T[K]"},{name:"literal",value:"''"}]},description:`The currently selected value. Must match the value of one of the options using the valueKey.
Use an empty string ('') to represent no selection.`,defaultValue:{value:"''",computed:!1}},valueKey:{required:!0,tsType:{name:"K"},description:`The key to use for the value property in option objects.
Must be a key of T.`},labelKey:{required:!0,tsType:{name:"L"},description:`The key to use for the label property in option objects.
Must be a key of T.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T[K], item?: T) => void",signature:{arguments:[{type:{name:"T[K]",raw:"T[K]"},name:"value"},{type:{name:"T"},name:"item"}],return:{name:"void"}}},description:`Callback function invoked when the selected value changes.
@param value - The selected value from the option object.
@param item - The full option object, or undefined when clearing the selection.`},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text displayed when no option is selected.
@default 'Select an option...'`},emptyMessage:{required:!1,tsType:{name:"string"},description:`Message displayed when no options match the search input.
@default 'No results found'`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the trigger button."},listClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the options list container."},maxSuggestions:{required:!1,tsType:{name:"number"},description:`Maximum number of suggestions to display in the dropdown.
@default 10`},debounceMs:{required:!1,tsType:{name:"number"},description:`Debounce delay for async searches in milliseconds.
Prevents excessive API calls by waiting for the user to stop typing.
@default 300`},minSearch:{required:!1,tsType:{name:"number"},description:`Minimum number of characters required before triggering an async search.
@default 2`},loadingMessage:{required:!1,tsType:{name:"string"},description:`Message displayed while loading options asynchronously.
@default 'Loading...'`},errorMessage:{required:!1,tsType:{name:"string"},description:`Message displayed when an async fetch fails.
@default 'Failed to load options'`},zIndex:{required:!1,tsType:{name:"number"},description:`Z-index value for the popover dropdown.
If not provided, uses the default z-index from the theme.`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled.
When true, the autocomplete cannot be interacted with.
@default false`},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T, isSelected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for each option in the dropdown.
Receives the option object and whether it's currently selected.
If not provided, defaults to rendering a Check icon and the option label.
@param option - The option object of type T.
@param isSelected - Whether this option is currently selected.
@returns A React node to render for this option.`},name:{required:!1,tsType:{name:"string"},description:`The name attribute for form submission.
This is required for the autocomplete value to be included in form data.`},required:{required:!1,tsType:{name:"boolean"},description:`Whether the autocomplete is required for form validation.
When true, the form cannot be submitted without a selection.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const $=`import { cn } from '@/lib/utils';
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
}: AutocompleteProps<AutocompleteOption, 'value', 'label'>) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Autocomplete<AutocompleteOption, 'value', 'label'>
        {...args}
        labelKey="label"
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
        valueKey="value"
        onChange={newValue => setValue(newValue)}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,_=({value:o="",...n})=>{const[a,s]=p.useState(o),[t,m]=p.useState(null),E=[{id:1,name:"Alice Johnson",email:"alice@example.com",role:"Developer"},{id:2,name:"Bob Smith",email:"bob@example.com",role:"Designer"},{id:3,name:"Charlie Brown",email:"charlie@example.com",role:"Manager"},{id:4,name:"Diana Prince",email:"diana@example.com",role:"Developer"},{id:5,name:"Eve Wilson",email:"eve@example.com",role:"Designer"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{...n,labelKey:"name",options:E,placeholder:"Select a user...",value:a,valueKey:"id",onChange:(J,Z)=>{s(J),m(Z||null)}}),t?e.jsxs("div",{className:"rounded-lg border bg-card p-4 text-card-foreground shadow-sm",children:[e.jsx("h3",{className:"mb-2 text-sm font-semibold",children:"Selected User Details"}),e.jsxs("div",{className:"space-y-1 text-sm",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Name:"})," ",t.name]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Email:"})," ",t.email]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Role:"})," ",t.role]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"ID:"})," ",t.id]})]})]}):e.jsx("p",{className:"text-sm text-muted-foreground",children:"No user selected"})]})};_.__docgenInfo={description:"",methods:[],displayName:"AutocompleteWithItemCallback",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Async function to fetch options based on user input.
Receives the current input value and returns a promise that resolves to an array of options.
If provided, the component will use async loading instead of static options.`},options:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Static array of options to display.
Used when loadOptions is not provided. The component will filter these options based on user input.`},value:{required:!1,tsType:{name:"union",raw:"T[K] | ''",elements:[{name:"T[K]",raw:"T[K]"},{name:"literal",value:"''"}]},description:`The currently selected value. Must match the value of one of the options using the valueKey.
Use an empty string ('') to represent no selection.`,defaultValue:{value:"''",computed:!1}},valueKey:{required:!0,tsType:{name:"K"},description:`The key to use for the value property in option objects.
Must be a key of T.`},labelKey:{required:!0,tsType:{name:"L"},description:`The key to use for the label property in option objects.
Must be a key of T.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T[K], item?: T) => void",signature:{arguments:[{type:{name:"T[K]",raw:"T[K]"},name:"value"},{type:{name:"T"},name:"item"}],return:{name:"void"}}},description:`Callback function invoked when the selected value changes.
@param value - The selected value from the option object.
@param item - The full option object, or undefined when clearing the selection.`},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text displayed when no option is selected.
@default 'Select an option...'`},emptyMessage:{required:!1,tsType:{name:"string"},description:`Message displayed when no options match the search input.
@default 'No results found'`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the trigger button."},listClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the options list container."},maxSuggestions:{required:!1,tsType:{name:"number"},description:`Maximum number of suggestions to display in the dropdown.
@default 10`},debounceMs:{required:!1,tsType:{name:"number"},description:`Debounce delay for async searches in milliseconds.
Prevents excessive API calls by waiting for the user to stop typing.
@default 300`},minSearch:{required:!1,tsType:{name:"number"},description:`Minimum number of characters required before triggering an async search.
@default 2`},loadingMessage:{required:!1,tsType:{name:"string"},description:`Message displayed while loading options asynchronously.
@default 'Loading...'`},errorMessage:{required:!1,tsType:{name:"string"},description:`Message displayed when an async fetch fails.
@default 'Failed to load options'`},zIndex:{required:!1,tsType:{name:"number"},description:`Z-index value for the popover dropdown.
If not provided, uses the default z-index from the theme.`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled.
When true, the autocomplete cannot be interacted with.
@default false`},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T, isSelected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for each option in the dropdown.
Receives the option object and whether it's currently selected.
If not provided, defaults to rendering a Check icon and the option label.
@param option - The option object of type T.
@param isSelected - Whether this option is currently selected.
@returns A React node to render for this option.`},name:{required:!1,tsType:{name:"string"},description:`The name attribute for form submission.
This is required for the autocomplete value to be included in form data.`},required:{required:!1,tsType:{name:"boolean"},description:`Whether the autocomplete is required for form validation.
When true, the form cannot be submitted without a selection.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const ee=`import { useState } from 'react';
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
}: AutocompleteProps<User, 'id', 'name'>) => {
  const [value, setValue] = useState<number | ''>(initialValue);
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
      <Autocomplete<User, 'id', 'name'>
        {...args}
        labelKey="name"
        options={users}
        placeholder="Select a user..."
        value={value}
        valueKey="id"
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
`,z=({value:o="",...n})=>{const[a,s]=p.useState(o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{...n,labelKey:"label",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],placeholder:"Select an option...",value:a,valueKey:"value",onChange:t=>s(t)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};z.__docgenInfo={description:"",methods:[],displayName:"AutocompleteWithStaticOptions",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Async function to fetch options based on user input.
Receives the current input value and returns a promise that resolves to an array of options.
If provided, the component will use async loading instead of static options.`},options:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Static array of options to display.
Used when loadOptions is not provided. The component will filter these options based on user input.`},value:{required:!1,tsType:{name:"union",raw:"T[K] | ''",elements:[{name:"T[K]",raw:"T[K]"},{name:"literal",value:"''"}]},description:`The currently selected value. Must match the value of one of the options using the valueKey.
Use an empty string ('') to represent no selection.`,defaultValue:{value:"''",computed:!1}},valueKey:{required:!0,tsType:{name:"K"},description:`The key to use for the value property in option objects.
Must be a key of T.`},labelKey:{required:!0,tsType:{name:"L"},description:`The key to use for the label property in option objects.
Must be a key of T.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T[K], item?: T) => void",signature:{arguments:[{type:{name:"T[K]",raw:"T[K]"},name:"value"},{type:{name:"T"},name:"item"}],return:{name:"void"}}},description:`Callback function invoked when the selected value changes.
@param value - The selected value from the option object.
@param item - The full option object, or undefined when clearing the selection.`},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text displayed when no option is selected.
@default 'Select an option...'`},emptyMessage:{required:!1,tsType:{name:"string"},description:`Message displayed when no options match the search input.
@default 'No results found'`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the trigger button."},listClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the options list container."},maxSuggestions:{required:!1,tsType:{name:"number"},description:`Maximum number of suggestions to display in the dropdown.
@default 10`},debounceMs:{required:!1,tsType:{name:"number"},description:`Debounce delay for async searches in milliseconds.
Prevents excessive API calls by waiting for the user to stop typing.
@default 300`},minSearch:{required:!1,tsType:{name:"number"},description:`Minimum number of characters required before triggering an async search.
@default 2`},loadingMessage:{required:!1,tsType:{name:"string"},description:`Message displayed while loading options asynchronously.
@default 'Loading...'`},errorMessage:{required:!1,tsType:{name:"string"},description:`Message displayed when an async fetch fails.
@default 'Failed to load options'`},zIndex:{required:!1,tsType:{name:"number"},description:`Z-index value for the popover dropdown.
If not provided, uses the default z-index from the theme.`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled.
When true, the autocomplete cannot be interacted with.
@default false`},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T, isSelected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for each option in the dropdown.
Receives the option object and whether it's currently selected.
If not provided, defaults to rendering a Check icon and the option label.
@param option - The option object of type T.
@param isSelected - Whether this option is currently selected.
@returns A React node to render for this option.`},name:{required:!1,tsType:{name:"string"},description:`The name attribute for form submission.
This is required for the autocomplete value to be included in form data.`},required:{required:!1,tsType:{name:"boolean"},description:`Whether the autocomplete is required for form validation.
When true, the form cannot be submitted without a selection.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const te=`import { useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';
import { AutocompleteProps } from '../types';

interface AutocompleteOption {
  value: string;
  label: string;
}

export const AutocompleteWithStaticOptions = ({
  value: initialValue = '',
  ...args
}: AutocompleteProps<AutocompleteOption, 'value', 'label'>) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Autocomplete<AutocompleteOption, 'value', 'label'>
        {...args}
        labelKey="label"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        placeholder="Select an option..."
        value={value}
        valueKey="value"
        onChange={newValue => setValue(newValue)}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,We={title:"Data & Display/Autocomplete",component:d,parameters:{},tags:["autodocs"],argTypes:{value:{control:"text",description:"The selected value",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Placeholder text for the input",table:{type:{summary:"string"}}},emptyMessage:{control:"text",description:"Message to display when no options are found",table:{type:{summary:"string"}}},loadingMessage:{control:"text",description:"Message to display while loading options",table:{type:{summary:"string"}}},errorMessage:{control:"text",description:"Message to display when async fetch fails",table:{type:{summary:"string"}}},maxSuggestions:{control:"number",description:"Maximum number of suggestions to display",table:{type:{summary:"number"}}},debounceMs:{control:"number",description:"Debounce delay for async searches (in milliseconds)",table:{type:{summary:"number"}}},minSearch:{control:"number",description:"Minimum characters before triggering async search",table:{type:{summary:"number"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",description:"Whether the component is disabled",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the component"},listClassName:{type:"string",description:"Additional class names to apply to the options list"},name:{control:"text",description:"The name attribute for form submission. This is required for the autocomplete value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the autocomplete is required for form validation. When true, the form cannot be submitted without a selection.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the autocomplete when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}}},r={args:{loadOptions:U,valueKey:"value",value:"",onChange:()=>{},placeholder:"Search..."},tags:["!autodocs"]},i={render:()=>e.jsx(F,{labelKey:"label",value:"",valueKey:"value",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:Y,language:"tsx"}}}},l={render:()=>e.jsx(z,{labelKey:"label",value:"",valueKey:"value",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:te,language:"tsx"}}}},u={render:()=>e.jsx(L,{labelKey:"label",value:"",valueKey:"value",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:$,language:"tsx"}}}},c={render:()=>e.jsx(_,{labelKey:"name",value:"",valueKey:"id",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:ee,language:"tsx"}}}};var h,f,y,g,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    loadOptions: mockSearchLibraries,
    valueKey: 'value',
    value: '',
    onChange: () => {},
    placeholder: 'Search...'
  } as unknown as Story['args'],
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source},description:{story:`Interactive playground for the Autocomplete component.
Use the controls to experiment with different props and states.`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.description}}};var v,T,w,x,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <AutocompleteDefault labelKey="label" value="" valueKey="value" onChange={() => {}} />,
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
}`,...(w=(T=i.parameters)==null?void 0:T.docs)==null?void 0:w.source},description:{story:`The default state of the Autocomplete component with async loading of options.
This demonstrates the basic functionality with a search input that loads results after a delay.
Search for "React" to see results.`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.description}}};var A,q,N,C,K;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <AutocompleteWithStaticOptions labelKey="label" value="" valueKey="value" onChange={() => {}} />,
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
}`,...(N=(q=l.parameters)==null?void 0:q.docs)==null?void 0:N.source},description:{story:`An example of the Autocomplete component with static options instead of async loading.
This shows how the component behaves with a predefined list of options.`,...(K=(C=l.parameters)==null?void 0:C.docs)==null?void 0:K.description}}};var j,k,M,R,W;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <AutocompleteWithCustomRender labelKey="label" value="" valueKey="value" onChange={() => {}} />,
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
}`,...(M=(k=u.parameters)==null?void 0:k.docs)==null?void 0:M.source},description:{story:`An example of the Autocomplete component with a custom renderOption function.
This demonstrates how to customize the appearance of each option, including showing
additional information like descriptions and featured badges.`,...(W=(R=u.parameters)==null?void 0:R.docs)==null?void 0:W.description}}};var O,V,P,I,D;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <AutocompleteWithItemCallback labelKey="name" value="" valueKey="id" onChange={() => {}} />,
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
}`,...(P=(V=c.parameters)==null?void 0:V.docs)==null?void 0:P.source},description:{story:`An example of the Autocomplete component using the full item object from the onChange callback.
This demonstrates how to access the complete option object (not just the value) when a selection
is made, which is useful for displaying additional information or performing actions with the full data.`,...(D=(I=c.parameters)==null?void 0:I.docs)==null?void 0:D.description}}};const Oe=["Playground","Default","WithStaticOptions","WithCustomRender","WithItemCallback"];export{i as Default,r as Playground,u as WithCustomRender,c as WithItemCallback,l as WithStaticOptions,Oe as __namedExportsOrder,We as default};
