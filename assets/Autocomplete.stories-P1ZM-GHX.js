import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{A as i,m as J}from"./Autocomplete-C3l-n_T8.js";import{r}from"./index-D4H_InIO.js";import{a as ee}from"./utils-CU3My8Oi.js";import{C as te}from"./check-CT0OM3mY.js";import{c as oe}from"./createLucideIcon-CRH11QI6.js";import"./Button-DvVXU3_x.js";import"./useAriaDisabled-DJP5ZKD9.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./CommandItem-CiFaxsn-.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CQ-IqFoI.js";import"./index-DB-GfMvg.js";import"./index-Ak5Mws-w.js";import"./index-CWZjxdH8.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DLaBReRc.js";import"./CommandList-DmlIjmFM.js";import"./Popover-OaSsjRLr.js";import"./z-index-CmEG1ohp.js";import"./index-DonjGF9j.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./x-B9-lGSIk.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],ne=oe("star",ae),Z=({value:n="",...a})=>{const[o,s]=r.useState(n);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...a,labelKey:"label",loadOptions:J,placeholder:"Search...",value:o,valueKey:"value",onChange:t=>s(t)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};Z.__docgenInfo={description:"",methods:[],displayName:"AutocompleteDefault",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Async function to fetch options based on user input.
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
@default 'Failed to load options'`},popoverClassName:{required:!1,tsType:{name:"string"},description:"Additional class names for the popover content (e.g. to set min-width or width)."},zIndex:{required:!1,tsType:{name:"number"},description:`Z-index value for the popover dropdown.
If not provided, uses the default z-index from the theme.`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled.
When true, the autocomplete cannot be interacted with.
@default false`},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T, isSelected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for each option in the dropdown.
Receives the option object and whether it's currently selected.
If not provided, defaults to rendering a Check icon and the option label.
@param option - The option object of type T.
@param isSelected - Whether this option is currently selected.
@returns A React node to render for this option.`},name:{required:!1,tsType:{name:"string"},description:`The name attribute for form submission.
This is required for the autocomplete value to be included in form data.`},required:{required:!1,tsType:{name:"boolean"},description:`Whether the autocomplete is required for form validation.
When true, the form cannot be submitted without a selection.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const se=`import { mockSearchLibraries } from '@/mocks';
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
`,B=({value:n="",...a})=>{const[o,s]=r.useState(n);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...a,labelKey:"label",options:[{value:"react",label:"React",description:"A JavaScript library for building user interfaces",featured:!0},{value:"vue",label:"Vue.js",description:"The Progressive JavaScript Framework",featured:!0},{value:"angular",label:"Angular",description:"A platform for building mobile and desktop web applications"},{value:"svelte",label:"Svelte",description:"Cybernetically enhanced web apps",featured:!0},{value:"next",label:"Next.js",description:"The React Framework for Production"}],placeholder:"Select a framework...",renderOption:(t,h)=>e.jsx("div",{className:"flex w-full items-center justify-between",children:e.jsxs("div",{className:"flex flex-1 items-start gap-1",children:[e.jsx(te,{className:ee("mt-[0.1875rem] h-4 w-4 text-primary-400",h?"opacity-100":"opacity-0")}),e.jsxs("div",{className:"flex flex-1 flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-medium",children:t.label}),t.featured?e.jsx(ne,{className:"h-3 w-3 fill-yellow-500 text-yellow-500"}):null]}),t.description?e.jsx("span",{className:"text-xs text-muted-foreground",children:t.description}):null]})]})}),value:o,valueKey:"value",onChange:t=>s(t)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};B.__docgenInfo={description:"",methods:[],displayName:"AutocompleteWithCustomRender",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Async function to fetch options based on user input.
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
@default 'Failed to load options'`},popoverClassName:{required:!1,tsType:{name:"string"},description:"Additional class names for the popover content (e.g. to set min-width or width)."},zIndex:{required:!1,tsType:{name:"number"},description:`Z-index value for the popover dropdown.
If not provided, uses the default z-index from the theme.`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled.
When true, the autocomplete cannot be interacted with.
@default false`},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T, isSelected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for each option in the dropdown.
Receives the option object and whether it's currently selected.
If not provided, defaults to rendering a Check icon and the option label.
@param option - The option object of type T.
@param isSelected - Whether this option is currently selected.
@returns A React node to render for this option.`},name:{required:!1,tsType:{name:"string"},description:`The name attribute for form submission.
This is required for the autocomplete value to be included in form data.`},required:{required:!1,tsType:{name:"boolean"},description:`Whether the autocomplete is required for form validation.
When true, the form cannot be submitted without a selection.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const re=`import { cn } from '@/lib/utils';
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
`,G=({value:n="",...a})=>{const[o,s]=r.useState(n),[t,h]=r.useState(null),X=[{id:1,name:"Alice Johnson",email:"alice@example.com",role:"Developer"},{id:2,name:"Bob Smith",email:"bob@example.com",role:"Designer"},{id:3,name:"Charlie Brown",email:"charlie@example.com",role:"Manager"},{id:4,name:"Diana Prince",email:"diana@example.com",role:"Developer"},{id:5,name:"Eve Wilson",email:"eve@example.com",role:"Designer"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...a,labelKey:"name",options:X,placeholder:"Select a user...",value:o,valueKey:"id",onChange:(Y,$)=>{s(Y),h($||null)}}),t?e.jsxs("div",{className:"rounded-lg border bg-card p-4 text-card-foreground shadow-sm",children:[e.jsx("h3",{className:"mb-2 text-sm font-semibold",children:"Selected User Details"}),e.jsxs("div",{className:"space-y-1 text-sm",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Name:"})," ",t.name]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Email:"})," ",t.email]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Role:"})," ",t.role]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"ID:"})," ",t.id]})]})]}):e.jsx("p",{className:"text-sm text-muted-foreground",children:"No user selected"})]})};G.__docgenInfo={description:"",methods:[],displayName:"AutocompleteWithItemCallback",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Async function to fetch options based on user input.
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
@default 'Failed to load options'`},popoverClassName:{required:!1,tsType:{name:"string"},description:"Additional class names for the popover content (e.g. to set min-width or width)."},zIndex:{required:!1,tsType:{name:"number"},description:`Z-index value for the popover dropdown.
If not provided, uses the default z-index from the theme.`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled.
When true, the autocomplete cannot be interacted with.
@default false`},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T, isSelected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for each option in the dropdown.
Receives the option object and whether it's currently selected.
If not provided, defaults to rendering a Check icon and the option label.
@param option - The option object of type T.
@param isSelected - Whether this option is currently selected.
@returns A React node to render for this option.`},name:{required:!1,tsType:{name:"string"},description:`The name attribute for form submission.
This is required for the autocomplete value to be included in form data.`},required:{required:!1,tsType:{name:"boolean"},description:`Whether the autocomplete is required for form validation.
When true, the form cannot be submitted without a selection.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const ie=`import { useState } from 'react';
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
`,le=[{value:"1",label:"Short"},{value:"2",label:"A much longer option label that would overflow"},{value:"3",label:"Another very long label to demonstrate min-width behavior"},{value:"4",label:"Medium length"}],H=n=>{const[a,o]=r.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...n,className:"w-72",labelKey:"label",options:le,placeholder:"Select...",popoverClassName:"min-w-[50rem]",value:a,valueKey:"value",onChange:s=>o(s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};H.__docgenInfo={description:"",methods:[],displayName:"AutocompleteMinWidthPopover"};const pe=`import { useState } from 'react';
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
  args: Partial<AutocompleteProps<AutocompleteOption, 'value', 'label'>>,
) => {
  const [value, setValue] = useState<string>('');
  return (
    <div className="space-y-4">
      <Autocomplete<AutocompleteOption, 'value', 'label'>
        {...args}
        className="w-72"
        labelKey="label"
        options={options}
        placeholder="Select..."
        popoverClassName="min-w-[50rem]"
        value={value}
        valueKey="value"
        onChange={newValue => setValue(newValue)}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,Q=({value:n="",...a})=>{const[o,s]=r.useState(n);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...a,labelKey:"label",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],placeholder:"Select an option...",value:o,valueKey:"value",onChange:t=>s(t)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};Q.__docgenInfo={description:"",methods:[],displayName:"AutocompleteWithStaticOptions",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Async function to fetch options based on user input.
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
@default 'Failed to load options'`},popoverClassName:{required:!1,tsType:{name:"string"},description:"Additional class names for the popover content (e.g. to set min-width or width)."},zIndex:{required:!1,tsType:{name:"number"},description:`Z-index value for the popover dropdown.
If not provided, uses the default z-index from the theme.`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled.
When true, the autocomplete cannot be interacted with.
@default false`},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T, isSelected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for each option in the dropdown.
Receives the option object and whether it's currently selected.
If not provided, defaults to rendering a Check icon and the option label.
@param option - The option object of type T.
@param isSelected - Whether this option is currently selected.
@returns A React node to render for this option.`},name:{required:!1,tsType:{name:"string"},description:`The name attribute for form submission.
This is required for the autocomplete value to be included in form data.`},required:{required:!1,tsType:{name:"boolean"},description:`Whether the autocomplete is required for form validation.
When true, the form cannot be submitted without a selection.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const ue=`import { useState } from 'react';
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
`,_e={title:"Data & Display/Autocomplete",component:i,parameters:{},tags:["autodocs"],argTypes:{value:{control:"text",description:"The selected value",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Placeholder text for the input",table:{type:{summary:"string"}}},emptyMessage:{control:"text",description:"Message to display when no options are found",table:{type:{summary:"string"}}},loadingMessage:{control:"text",description:"Message to display while loading options",table:{type:{summary:"string"}}},errorMessage:{control:"text",description:"Message to display when async fetch fails",table:{type:{summary:"string"}}},maxSuggestions:{control:"number",description:"Maximum number of suggestions to display",table:{type:{summary:"number"}}},debounceMs:{control:"number",description:"Debounce delay for async searches (in milliseconds)",table:{type:{summary:"number"}}},minSearch:{control:"number",description:"Minimum characters before triggering async search",table:{type:{summary:"number"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",description:"Whether the component is disabled",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the component"},listClassName:{type:"string",description:"Additional class names to apply to the options list"},name:{control:"text",description:"The name attribute for form submission. This is required for the autocomplete value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the autocomplete is required for form validation. When true, the form cannot be submitted without a selection.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the autocomplete when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}}},l={args:{loadOptions:J,valueKey:"value",value:"",onChange:()=>{},placeholder:"Search..."},tags:["!autodocs"]},p={render:()=>e.jsx(Z,{labelKey:"label",value:"",valueKey:"value",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:se,language:"tsx"}}}},u={render:()=>e.jsx(Q,{labelKey:"label",value:"",valueKey:"value",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:ue,language:"tsx"}}}},c={render:()=>e.jsx(B,{labelKey:"label",value:"",valueKey:"value",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:re,language:"tsx"}}}},d={render:()=>e.jsx(G,{labelKey:"name",value:"",valueKey:"id",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:ie,language:"tsx"}}}},m={render:()=>e.jsx(H,{labelKey:"label",value:"",valueKey:"value",onChange:()=>{}}),args:{},parameters:{docs:{description:{story:"Uses a fixed-width trigger, which demonstrates ellipsis when the label content is too long. The popover content uses popoverClassName to set a minimum width, so it can grow when options are wider. Open the dropdown to see it expand for long labels."},source:{code:pe,language:"tsx"}}}};var f,y,g,b,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    loadOptions: mockSearchLibraries,
    valueKey: 'value',
    value: '',
    onChange: () => {},
    placeholder: 'Search...'
  } as unknown as Story['args'],
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source},description:{story:`Interactive playground for the Autocomplete component.
Use the controls to experiment with different props and states.`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.description}}};var T,w,x,A,S;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(x=(w=p.parameters)==null?void 0:w.docs)==null?void 0:x.source},description:{story:`The default state of the Autocomplete component with async loading of options.
This demonstrates the basic functionality with a search input that loads results after a delay.
Search for "React" to see results.`,...(S=(A=p.parameters)==null?void 0:A.docs)==null?void 0:S.description}}};var q,N,C,K,j;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(C=(N=u.parameters)==null?void 0:N.docs)==null?void 0:C.source},description:{story:`An example of the Autocomplete component with static options instead of async loading.
This shows how the component behaves with a predefined list of options.`,...(j=(K=u.parameters)==null?void 0:K.docs)==null?void 0:j.description}}};var M,k,W,O,P;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(k=c.parameters)==null?void 0:k.docs)==null?void 0:W.source},description:{story:`An example of the Autocomplete component with a custom renderOption function.
This demonstrates how to customize the appearance of each option, including showing
additional information like descriptions and featured badges.`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.description}}};var R,V,I,D,U;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(I=(V=d.parameters)==null?void 0:V.docs)==null?void 0:I.source},description:{story:`An example of the Autocomplete component using the full item object from the onChange callback.
This demonstrates how to access the complete option object (not just the value) when a selection
is made, which is useful for displaying additional information or performing actions with the full data.`,...(U=(D=d.parameters)==null?void 0:D.docs)==null?void 0:U.description}}};var F,L,_,z,E;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <AutocompleteMinWidthPopover labelKey="label" value="" valueKey="value" onChange={() => {}} />,
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
}`,...(_=(L=m.parameters)==null?void 0:L.docs)==null?void 0:_.source},description:{story:"Uses a fixed-width trigger (demonstrates ellipsis when the label is too long). Popover\nuses `popoverClassName` so it can be wider than the trigger - the dropdown expands to\nfit long option labels.",...(E=(z=m.parameters)==null?void 0:z.docs)==null?void 0:E.description}}};const ze=["Playground","Default","WithStaticOptions","WithCustomRender","WithItemCallback","MinWidthPopover"];export{p as Default,m as MinWidthPopover,l as Playground,c as WithCustomRender,d as WithItemCallback,u as WithStaticOptions,ze as __namedExportsOrder,_e as default};
