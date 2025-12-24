import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{A as p,m as j}from"./Autocomplete-CZ6oQ_Xe.js";import{r as c}from"./index-D4H_InIO.js";import{a as D}from"./utils-CU3My8Oi.js";import{C as I}from"./check-CT0OM3mY.js";import{c as F}from"./createLucideIcon-CRH11QI6.js";import"./Button-BwlrdoZf.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./CommandItem-CiFaxsn-.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CQ-IqFoI.js";import"./index-DB-GfMvg.js";import"./index-Ak5Mws-w.js";import"./index-CWZjxdH8.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DLaBReRc.js";import"./CommandList-DmlIjmFM.js";import"./Popover-OaSsjRLr.js";import"./z-index-CmEG1ohp.js";import"./index-DonjGF9j.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./x-B9-lGSIk.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],_=F("star",L),M=({value:a="",...r})=>{const[t,o]=c.useState(a);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(p,{...r,labelKey:"label",loadOptions:j,placeholder:"Search...",value:t,valueKey:"value",onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",t||"none"]})]})};M.__docgenInfo={description:"",methods:[],displayName:"AutocompleteDefault",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"T[K] | ''",elements:[{name:"T[K]",raw:"T[K]"},{name:"literal",value:"''"}]},description:"",defaultValue:{value:"''",computed:!1}},valueKey:{required:!0,tsType:{name:"K"},description:`The key to use for the value property in option objects.
Must be a key of T.`},labelKey:{required:!0,tsType:{name:"L"},description:`The key to use for the label property in option objects.
Must be a key of T.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T[K]) => void",signature:{arguments:[{type:{name:"T[K]",raw:"T[K]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},emptyMessage:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},listClassName:{required:!1,tsType:{name:"string"},description:""},maxSuggestions:{required:!1,tsType:{name:"number"},description:""},debounceMs:{required:!1,tsType:{name:"number"},description:""},minSearch:{required:!1,tsType:{name:"number"},description:""},loadingMessage:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},zIndex:{required:!1,tsType:{name:"number"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T, isSelected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for each option.
Receives the option of type T and returns a React node.
If not provided, defaults to rendering a Check icon and the option label.`},name:{required:!1,tsType:{name:"string"},description:`The name attribute for form submission.
This is required for the autocomplete value to be included in form data.`},required:{required:!1,tsType:{name:"boolean"},description:`Whether the autocomplete is required for form validation.
When true, the form cannot be submitted without a selection.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const z=`import { mockSearchLibraries } from '@/mocks';
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
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,V=({value:a="",...r})=>{const[t,o]=c.useState(a);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(p,{...r,labelKey:"label",options:[{value:"react",label:"React",description:"A JavaScript library for building user interfaces",featured:!0},{value:"vue",label:"Vue.js",description:"The Progressive JavaScript Framework",featured:!0},{value:"angular",label:"Angular",description:"A platform for building mobile and desktop web applications"},{value:"svelte",label:"Svelte",description:"Cybernetically enhanced web apps",featured:!0},{value:"next",label:"Next.js",description:"The React Framework for Production"}],placeholder:"Select a framework...",renderOption:(u,P)=>e.jsx("div",{className:"flex w-full items-center justify-between",children:e.jsxs("div",{className:"flex flex-1 items-start gap-1",children:[e.jsx(I,{className:D("mt-[0.1875rem] h-4 w-4 text-primary-400",P?"opacity-100":"opacity-0")}),e.jsxs("div",{className:"flex flex-1 flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-medium",children:u.label}),u.featured?e.jsx(_,{className:"h-3 w-3 fill-yellow-500 text-yellow-500"}):null]}),u.description?e.jsx("span",{className:"text-xs text-muted-foreground",children:u.description}):null]})]})}),value:t,valueKey:"value",onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",t||"none"]})]})};V.__docgenInfo={description:"",methods:[],displayName:"AutocompleteWithCustomRender",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"T[K] | ''",elements:[{name:"T[K]",raw:"T[K]"},{name:"literal",value:"''"}]},description:"",defaultValue:{value:"''",computed:!1}},valueKey:{required:!0,tsType:{name:"K"},description:`The key to use for the value property in option objects.
Must be a key of T.`},labelKey:{required:!0,tsType:{name:"L"},description:`The key to use for the label property in option objects.
Must be a key of T.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T[K]) => void",signature:{arguments:[{type:{name:"T[K]",raw:"T[K]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},emptyMessage:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},listClassName:{required:!1,tsType:{name:"string"},description:""},maxSuggestions:{required:!1,tsType:{name:"number"},description:""},debounceMs:{required:!1,tsType:{name:"number"},description:""},minSearch:{required:!1,tsType:{name:"number"},description:""},loadingMessage:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},zIndex:{required:!1,tsType:{name:"number"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T, isSelected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for each option.
Receives the option of type T and returns a React node.
If not provided, defaults to rendering a Check icon and the option label.`},name:{required:!1,tsType:{name:"string"},description:`The name attribute for form submission.
This is required for the autocomplete value to be included in form data.`},required:{required:!1,tsType:{name:"boolean"},description:`Whether the autocomplete is required for form validation.
When true, the form cannot be submitted without a selection.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const J=`import { cn } from '@/lib/utils';
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
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,W=({value:a="",...r})=>{const[t,o]=c.useState(a);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(p,{...r,labelKey:"label",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],placeholder:"Select an option...",value:t,valueKey:"value",onChange:o}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",t||"none"]})]})};W.__docgenInfo={description:"",methods:[],displayName:"AutocompleteWithStaticOptions",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"T[K] | ''",elements:[{name:"T[K]",raw:"T[K]"},{name:"literal",value:"''"}]},description:"",defaultValue:{value:"''",computed:!1}},valueKey:{required:!0,tsType:{name:"K"},description:`The key to use for the value property in option objects.
Must be a key of T.`},labelKey:{required:!0,tsType:{name:"L"},description:`The key to use for the label property in option objects.
Must be a key of T.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T[K]) => void",signature:{arguments:[{type:{name:"T[K]",raw:"T[K]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},emptyMessage:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},listClassName:{required:!1,tsType:{name:"string"},description:""},maxSuggestions:{required:!1,tsType:{name:"number"},description:""},debounceMs:{required:!1,tsType:{name:"number"},description:""},minSearch:{required:!1,tsType:{name:"number"},description:""},loadingMessage:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},zIndex:{required:!1,tsType:{name:"number"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T, isSelected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"option"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom render function for each option.
Receives the option of type T and returns a React node.
If not provided, defaults to rendering a Check icon and the option label.`},name:{required:!1,tsType:{name:"string"},description:`The name attribute for form submission.
This is required for the autocomplete value to be included in form data.`},required:{required:!1,tsType:{name:"boolean"},description:`Whether the autocomplete is required for form validation.
When true, the form cannot be submitted without a selection.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const E=`import { useState } from 'react';
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
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,qe={title:"Data & Display/Autocomplete",component:p,parameters:{},tags:["autodocs"],argTypes:{value:{control:"text",description:"The selected value",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Placeholder text for the input",table:{type:{summary:"string"}}},emptyMessage:{control:"text",description:"Message to display when no options are found",table:{type:{summary:"string"}}},loadingMessage:{control:"text",description:"Message to display while loading options",table:{type:{summary:"string"}}},errorMessage:{control:"text",description:"Message to display when async fetch fails",table:{type:{summary:"string"}}},maxSuggestions:{control:"number",description:"Maximum number of suggestions to display",table:{type:{summary:"number"}}},debounceMs:{control:"number",description:"Debounce delay for async searches (in milliseconds)",table:{type:{summary:"number"}}},minSearch:{control:"number",description:"Minimum characters before triggering async search",table:{type:{summary:"number"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",description:"Whether the component is disabled",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the component"},listClassName:{type:"string",description:"Additional class names to apply to the options list"},name:{control:"text",description:"The name attribute for form submission. This is required for the autocomplete value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the autocomplete is required for form validation. When true, the form cannot be submitted without a selection.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the autocomplete when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}}},s={args:{loadOptions:j,valueKey:"value",value:"",onChange:()=>{},placeholder:"Search..."},tags:["!autodocs"]},n={render:()=>e.jsx(M,{labelKey:"label",value:"",valueKey:"value",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:z,language:"tsx"}}}},i={render:()=>e.jsx(W,{labelKey:"label",value:"",valueKey:"value",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:E,language:"tsx"}}}},l={render:()=>e.jsx(V,{labelKey:"label",value:"",valueKey:"value",onChange:()=>{}}),args:{},parameters:{docs:{source:{code:J,language:"tsx"}}}};var m,d,y,f,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    loadOptions: mockSearchLibraries,
    valueKey: 'value',
    value: '',
    onChange: () => {},
    placeholder: 'Search...'
  } as unknown as Story['args'],
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(y=(d=s.parameters)==null?void 0:d.docs)==null?void 0:y.source},description:{story:`Interactive playground for the Autocomplete component.
Use the controls to experiment with different props and states.`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.description}}};var h,b,v,T,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source},description:{story:`The default state of the Autocomplete component with async loading of options.
This demonstrates the basic functionality with a search input that loads results after a delay.
Search for "React" to see results.`,...(x=(T=n.parameters)==null?void 0:T.docs)==null?void 0:x.description}}};var q,w,A,S,K;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(A=(w=i.parameters)==null?void 0:w.docs)==null?void 0:A.source},description:{story:`An example of the Autocomplete component with static options instead of async loading.
This shows how the component behaves with a predefined list of options.`,...(K=(S=i.parameters)==null?void 0:S.docs)==null?void 0:K.description}}};var N,C,O,R,k;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(C=l.parameters)==null?void 0:C.docs)==null?void 0:O.source},description:{story:`An example of the Autocomplete component with a custom renderOption function.
This demonstrates how to customize the appearance of each option, including showing
additional information like descriptions and featured badges.`,...(k=(R=l.parameters)==null?void 0:R.docs)==null?void 0:k.description}}};const we=["Playground","Default","WithStaticOptions","WithCustomRender"];export{n as Default,s as Playground,l as WithCustomRender,i as WithStaticOptions,we as __namedExportsOrder,qe as default};
