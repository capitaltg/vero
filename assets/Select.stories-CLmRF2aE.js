import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{S as c}from"./Select-BM7W0h55.js";import{r as u}from"./index-D4H_InIO.js";import"./utils-CU3My8Oi.js";import"./z-index-CmEG1ohp.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DB-GfMvg.js";import"./index-DQwFizlT.js";import"./index-D8GmRN1t.js";import"./index-CZyo9ktw.js";import"./index-YtIeenAn.js";import"./index-CWZjxdH8.js";import"./index-C1hSi-0V.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-Ak5Mws-w.js";import"./index-BnJEnLsy.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./index-DXU_LAI1.js";import"./check-CT0OM3mY.js";import"./createLucideIcon-CRH11QI6.js";import"./useAriaDisabled-DHTVgRPt.js";import"./styles-BasBkTzl.js";import"./chevron-down-DtitoCkX.js";const $=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],I=()=>{const[a,l]=u.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{options:$,placeholder:"Select a fruit...",value:a,onChange:l}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};I.__docgenInfo={description:"",methods:[],displayName:"SelectDefault"};const E=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],k=()=>{const[a,l]=u.useState("apple");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{options:E,placeholder:"Select a fruit...",value:a,onChange:l}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};k.__docgenInfo={description:"",methods:[],displayName:"SelectWithValue"};const R=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],q=()=>{const[a,l]=u.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{options:R,placeholder:"Choose your favorite fruit",value:a,onChange:l}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};q.__docgenInfo={description:"",methods:[],displayName:"SelectCustomPlaceholder"};const T=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"},{value:"pear",label:"Pear"},{value:"peach",label:"Peach"},{value:"plum",label:"Plum"},{value:"kiwi",label:"Kiwi"},{value:"pineapple",label:"Pineapple"}],K=()=>{const[a,l]=u.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{options:T,placeholder:"Select a fruit...",value:a,onChange:l}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};K.__docgenInfo={description:"",methods:[],displayName:"SelectWithManyOptions"};const z=`import { useState } from 'react';
import { Select } from '../src/Select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
];

export const SelectDefault = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <Select options={options} placeholder="Select a fruit..." value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,F=`import { useState } from 'react';
import { Select } from '../src/Select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
];

export const SelectWithValue = () => {
  const [value, setValue] = useState('apple');
  return (
    <div className="space-y-4">
      <Select options={options} placeholder="Select a fruit..." value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,U=`import { useState } from 'react';
import { Select } from '../src/Select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
];

export const SelectCustomPlaceholder = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <Select
        options={options}
        placeholder="Choose your favorite fruit"
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,H=`import { useState } from 'react';
import { Select } from '../src/Select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
  { value: 'pear', label: 'Pear' },
  { value: 'peach', label: 'Peach' },
  { value: 'plum', label: 'Plum' },
  { value: 'kiwi', label: 'Kiwi' },
  { value: 'pineapple', label: 'Pineapple' },
];

export const SelectWithManyOptions = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <Select options={options} placeholder="Select a fruit..." value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,xe={title:"Inputs & Forms/Select",component:c,parameters:{},argTypes:{value:{control:"text",description:"Currently selected value",type:{name:"string",required:!1}},onChange:{description:"Callback when selection changes",type:{name:"function",required:!0},action:"selection changed"},options:{control:"object",description:"Array of select options",type:{name:"array",value:{name:"object",value:{}},required:!0}},placeholder:{control:"text",description:"Placeholder text when no value is selected",type:{name:"string",required:!1}}},tags:["autodocs"]},p=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],t={args:{options:p,value:"",onChange:()=>{},placeholder:"Select a fruit..."},tags:["!autodocs"]},o={render:()=>e.jsx(I,{}),args:{options:p,value:"",onChange:()=>{},placeholder:"Select a fruit..."},parameters:{docs:{source:{code:z,language:"tsx"}}}},n={render:()=>e.jsx(k,{}),args:{options:p,value:"apple",onChange:()=>{},placeholder:"Select a fruit..."},parameters:{docs:{source:{code:F,language:"tsx"}}}},r={render:()=>e.jsx(q,{}),args:{options:p,value:"",onChange:()=>{},placeholder:"Choose your favorite fruit"},parameters:{docs:{source:{code:U,language:"tsx"}}}},s={render:()=>e.jsx(K,{}),args:{options:[...p,{value:"pear",label:"Pear"},{value:"peach",label:"Peach"},{value:"plum",label:"Plum"},{value:"kiwi",label:"Kiwi"},{value:"pineapple",label:"Pineapple"}],value:"",onChange:()=>{},placeholder:"Select a fruit..."},parameters:{docs:{source:{code:H,language:"tsx"}}}};var i,d,m,v,g;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select a fruit...'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:`Interactive playground for the Select component.
Use the controls to experiment with different props and states.`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.description}}};var h,b,S,f,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <SelectDefault />,
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select a fruit...'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
        language: 'tsx'
      }
    }
  }
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source},description:{story:`The default state of the Select component.
Shows a basic dropdown with a list of fruit options and placeholder text.`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.description}}};var y,C,P,w,j;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <SelectWithValue />,
  args: {
    options,
    value: 'apple',
    onChange: () => {},
    placeholder: 'Select a fruit...'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithValue,
        language: 'tsx'
      }
    }
  }
}`,...(P=(C=n.parameters)==null?void 0:C.docs)==null?void 0:P.source},description:{story:`Select with a pre-selected value.
Demonstrates how the component appears with an initial selection.`,...(j=(w=n.parameters)==null?void 0:w.docs)==null?void 0:j.description}}};var N,V,O,M,W;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <SelectCustomPlaceholder />,
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Choose your favorite fruit'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomPlaceholder,
        language: 'tsx'
      }
    }
  }
}`,...(O=(V=r.parameters)==null?void 0:V.docs)==null?void 0:O.source},description:{story:`Select with custom placeholder text.
Shows how to customize the default text shown before selection.`,...(W=(M=r.parameters)==null?void 0:M.docs)==null?void 0:W.description}}};var A,D,_,B,G;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <SelectWithManyOptions />,
  args: {
    options: [...options, {
      value: 'pear',
      label: 'Pear'
    }, {
      value: 'peach',
      label: 'Peach'
    }, {
      value: 'plum',
      label: 'Plum'
    }, {
      value: 'kiwi',
      label: 'Kiwi'
    }, {
      value: 'pineapple',
      label: 'Pineapple'
    }],
    value: '',
    onChange: () => {},
    placeholder: 'Select a fruit...'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithManyOptions,
        language: 'tsx'
      }
    }
  }
}`,...(_=(D=s.parameters)==null?void 0:D.docs)==null?void 0:_.source},description:{story:`Select with an extended list of options.
Demonstrates how the component handles a larger set of choices with scrolling.`,...(G=(B=s.parameters)==null?void 0:B.docs)==null?void 0:G.description}}};const ye=["Playground","Default","WithValue","CustomPlaceholder","WithManyOptions"];export{r as CustomPlaceholder,o as Default,t as Playground,s as WithManyOptions,n as WithValue,ye as __namedExportsOrder,xe as default};
