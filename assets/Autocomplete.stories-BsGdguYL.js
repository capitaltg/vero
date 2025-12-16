import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{A as l,m as p}from"./Autocomplete-Cvv7P4Tq.js";import{r as S}from"./index-D4H_InIO.js";import"./Button-BwlrdoZf.js";import"./useAriaDisabled-DHTVgRPt.js";import"./utils-CU3My8Oi.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";import"./CommandItem-CiFaxsn-.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CQ-IqFoI.js";import"./index-DB-GfMvg.js";import"./index-Ak5Mws-w.js";import"./index-CWZjxdH8.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DLaBReRc.js";import"./CommandList-DmlIjmFM.js";import"./Popover-OaSsjRLr.js";import"./z-index-CmEG1ohp.js";import"./index-DonjGF9j.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./x-B9-lGSIk.js";import"./check-CT0OM3mY.js";const w=({value:t="",...n})=>{const[o,i]=S.useState(t);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{...n,loadOptions:p,placeholder:"Search...",value:o,onChange:i}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};w.__docgenInfo={description:"",methods:[],displayName:"AutocompleteDefault",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<AutocompleteOption[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"AutocompleteOption"}],raw:"AutocompleteOption[]"}],raw:"Promise<AutocompleteOption[]>"}}},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"AutocompleteOption"}],raw:"AutocompleteOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},emptyMessage:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},listClassName:{required:!1,tsType:{name:"string"},description:""},maxSuggestions:{required:!1,tsType:{name:"number"},description:""},debounceMs:{required:!1,tsType:{name:"number"},description:""},minSearch:{required:!1,tsType:{name:"number"},description:""},loadingMessage:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},zIndex:{required:!1,tsType:{name:"number"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:`The name attribute for form submission.
This is required for the autocomplete value to be included in form data.`},required:{required:!1,tsType:{name:"boolean"},description:`Whether the autocomplete is required for form validation.
When true, the form cannot be submitted without a selection.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const C=({value:t="",...n})=>{const[o,i]=S.useState(t);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{...n,options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],placeholder:"Select an option...",value:o,onChange:i}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};C.__docgenInfo={description:"",methods:[],displayName:"AutocompleteWithStaticOptions",props:{loadOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => Promise<AutocompleteOption[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"AutocompleteOption"}],raw:"AutocompleteOption[]"}],raw:"Promise<AutocompleteOption[]>"}}},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"AutocompleteOption"}],raw:"AutocompleteOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},emptyMessage:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},listClassName:{required:!1,tsType:{name:"string"},description:""},maxSuggestions:{required:!1,tsType:{name:"number"},description:""},debounceMs:{required:!1,tsType:{name:"number"},description:""},minSearch:{required:!1,tsType:{name:"number"},description:""},loadingMessage:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},zIndex:{required:!1,tsType:{name:"number"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:`The name attribute for form submission.
This is required for the autocomplete value to be included in form data.`},required:{required:!1,tsType:{name:"boolean"},description:`Whether the autocomplete is required for form validation.
When true, the form cannot be submitted without a selection.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the autocomplete when the page loads."}},composes:["Omit","AutocompleteFormAttributes"]};const M=`import { useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';
import { AutocompleteProps } from '../types';
import { mockSearchLibraries } from '@/mocks';

export const AutocompleteDefault = ({ value: initialValue = '', ...args }: AutocompleteProps) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Autocomplete
        {...args}
        loadOptions={mockSearchLibraries}
        placeholder="Search..."
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,N=`import { useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';
import { AutocompleteProps } from '../types';

export const AutocompleteWithStaticOptions = ({
  value: initialValue = '',
  ...args
}: AutocompleteProps) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Autocomplete
        {...args}
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        placeholder="Select an option..."
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,ie={title:"Data & Display/Autocomplete",component:l,parameters:{},tags:["autodocs"],argTypes:{value:{control:"text",description:"The selected value",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Placeholder text for the input",table:{type:{summary:"string"}}},emptyMessage:{control:"text",description:"Message to display when no options are found",table:{type:{summary:"string"}}},loadingMessage:{control:"text",description:"Message to display while loading options",table:{type:{summary:"string"}}},errorMessage:{control:"text",description:"Message to display when async fetch fails",table:{type:{summary:"string"}}},maxSuggestions:{control:"number",description:"Maximum number of suggestions to display",table:{type:{summary:"number"}}},debounceMs:{control:"number",description:"Debounce delay for async searches (in milliseconds)",table:{type:{summary:"number"}}},minSearch:{control:"number",description:"Minimum characters before triggering async search",table:{type:{summary:"number"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},isDisabled:{control:"boolean",description:"Whether the component is disabled",table:{type:{summary:"boolean"}}},className:{type:"string",description:"Additional class names to apply to the component"},listClassName:{type:"string",description:"Additional class names to apply to the options list"},name:{control:"text",description:"The name attribute for form submission. This is required for the autocomplete value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the autocomplete is required for form validation. When true, the form cannot be submitted without a selection.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the autocomplete when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}}},a={args:{loadOptions:p,value:"",onChange:()=>{},placeholder:"Search..."},tags:["!autodocs"]},r={render:t=>e.jsx(w,{...t}),args:{loadOptions:p,value:"",onChange:()=>{},placeholder:"Search..."},parameters:{docs:{source:{code:M,language:"tsx"}}}},s={render:t=>e.jsx(C,{...t}),args:{options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],value:"",onChange:()=>{},placeholder:"Select an option..."},parameters:{docs:{source:{code:N,language:"tsx"}}}};var m,u,c,d,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    loadOptions: mockSearchLibraries,
    value: '',
    onChange: () => {},
    placeholder: 'Search...'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source},description:{story:`Interactive playground for the Autocomplete component.
Use the controls to experiment with different props and states.`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.description}}};var h,f,y,b,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <AutocompleteDefault {...args} />,
  args: {
    loadOptions: mockSearchLibraries,
    value: '',
    onChange: () => {},
    placeholder: 'Search...'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
        language: 'tsx'
      }
    }
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source},description:{story:`The default state of the Autocomplete component with async loading of options.
This demonstrates the basic functionality with a search input that loads results after a delay.
Search for "React" to see results.`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.description}}};var A,q,T,x,O;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <AutocompleteWithStaticOptions {...args} />,
  args: {
    options: [{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }, {
      value: '3',
      label: 'Option 3'
    }],
    value: '',
    onChange: () => {},
    placeholder: 'Select an option...'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithStaticOptions,
        language: 'tsx'
      }
    }
  }
}`,...(T=(q=s.parameters)==null?void 0:q.docs)==null?void 0:T.source},description:{story:`An example of the Autocomplete component with static options instead of async loading.
This shows how the component behaves with a predefined list of options.`,...(O=(x=s.parameters)==null?void 0:x.docs)==null?void 0:O.description}}};const le=["Playground","Default","WithStaticOptions"];export{r as Default,a as Playground,s as WithStaticOptions,le as __namedExportsOrder,ie as default};
