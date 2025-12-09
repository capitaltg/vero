import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{S as l}from"./Select-CNSHAcA4.js";import{r as p}from"./index-D4H_InIO.js";import"./utils-CU3My8Oi.js";import"./z-index-CmEG1ohp.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DB-GfMvg.js";import"./index-DQwFizlT.js";import"./index-D8GmRN1t.js";import"./index-CZyo9ktw.js";import"./index-YtIeenAn.js";import"./index-CWZjxdH8.js";import"./index-C1hSi-0V.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-Ak5Mws-w.js";import"./index-BnJEnLsy.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./index-DXU_LAI1.js";import"./check-CT0OM3mY.js";import"./createLucideIcon-CRH11QI6.js";import"./useAriaDisabled-DHTVgRPt.js";import"./styles-Bqt2ynIu.js";import"./chevron-down-DtitoCkX.js";const U=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],K=()=>{const[a,t]=p.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{options:U,placeholder:"Select a fruit...",value:a,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};K.__docgenInfo={description:"",methods:[],displayName:"SelectDefault"};const H=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],E=()=>{const[a,t]=p.useState("apple");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{options:H,placeholder:"Select a fruit...",value:a,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};E.__docgenInfo={description:"",methods:[],displayName:"SelectWithValue"};const J=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],R=()=>{const[a,t]=p.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{options:J,placeholder:"Choose your favorite fruit",value:a,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};R.__docgenInfo={description:"",methods:[],displayName:"SelectCustomPlaceholder"};const Q=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"},{value:"pear",label:"Pear"},{value:"peach",label:"Peach"},{value:"plum",label:"Plum"},{value:"kiwi",label:"Kiwi"},{value:"pineapple",label:"Pineapple"}],z=()=>{const[a,t]=p.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{options:Q,placeholder:"Select a fruit...",value:a,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};z.__docgenInfo={description:"",methods:[],displayName:"SelectWithManyOptions"};const X=[{value:"short",label:"Short option"},{value:"medium",label:"This is a medium length option label"},{value:"very-long",label:"This is an extremely long option label that should demonstrate text truncation when selected in the Select component trigger button"},{value:"super-long",label:"This is a super extremely long option label that contains multiple sentences and should definitely demonstrate text truncation with ellipsis when selected in the Select component trigger button. The text should be cut off with an ellipsis to prevent overflow."}],F=()=>{const[a,t]=p.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"max-w-md",children:e.jsx(l,{options:X,placeholder:"Select an option with a long label...",value:a,onChange:t})}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Try selecting one of the longer options to see how the text truncates with an ellipsis in the trigger button."})]})};F.__docgenInfo={description:"",methods:[],displayName:"SelectWithLongLabel"};const Y=`import { useState } from 'react';
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
`,Z=`import { useState } from 'react';
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
`,ee=`import { useState } from 'react';
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
`,ae=`import { useState } from 'react';
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
`,te=`import { useState } from 'react';
import { Select } from '../src/Select';

const options = [
  { value: 'short', label: 'Short option' },
  { value: 'medium', label: 'This is a medium length option label' },
  {
    value: 'very-long',
    label:
      'This is an extremely long option label that should demonstrate text truncation when selected in the Select component trigger button',
  },
  {
    value: 'super-long',
    label:
      'This is a super extremely long option label that contains multiple sentences and should definitely demonstrate text truncation with ellipsis when selected in the Select component trigger button. The text should be cut off with an ellipsis to prevent overflow.',
  },
];

export const SelectWithLongLabel = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <div className="max-w-md">
        <Select
          options={options}
          placeholder="Select an option with a long label..."
          value={value}
          onChange={setValue}
        />
      </div>
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
      <p className="text-sm text-muted-foreground">
        Try selecting one of the longer options to see how the text truncates with an ellipsis in
        the trigger button.
      </p>
    </div>
  );
};
`,Te={title:"Inputs & Forms/Select",component:l,parameters:{},argTypes:{value:{control:"text",description:"Currently selected value",type:{name:"string",required:!1}},onChange:{description:"Callback when selection changes",type:{name:"function",required:!0},action:"selection changed"},options:{control:"object",description:"Array of select options",type:{name:"array",value:{name:"object",value:{}},required:!0}},placeholder:{control:"text",description:"Placeholder text when no value is selected",type:{name:"string",required:!1}}},tags:["autodocs"]},u=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],o={args:{options:u,value:"",onChange:()=>{},placeholder:"Select a fruit..."},tags:["!autodocs"]},n={render:()=>e.jsx(K,{}),args:{options:u,value:"",onChange:()=>{},placeholder:"Select a fruit..."},parameters:{docs:{source:{code:Y,language:"tsx"}}}},s={render:()=>e.jsx(E,{}),args:{options:u,value:"apple",onChange:()=>{},placeholder:"Select a fruit..."},parameters:{docs:{source:{code:Z,language:"tsx"}}}},r={render:()=>e.jsx(R,{}),args:{options:u,value:"",onChange:()=>{},placeholder:"Choose your favorite fruit"},parameters:{docs:{source:{code:ee,language:"tsx"}}}},i={render:()=>e.jsx(z,{}),args:{options:[...u,{value:"pear",label:"Pear"},{value:"peach",label:"Peach"},{value:"plum",label:"Plum"},{value:"kiwi",label:"Kiwi"},{value:"pineapple",label:"Pineapple"}],value:"",onChange:()=>{},placeholder:"Select a fruit..."},parameters:{docs:{source:{code:ae,language:"tsx"}}}},c={render:()=>e.jsx(F,{}),args:{options:[{value:"short",label:"Short option"},{value:"medium",label:"This is a medium length option label"},{value:"very-long",label:"This is an extremely long option label that should demonstrate text truncation when selected in the Select component trigger button"},{value:"super-long",label:"This is a super extremely long option label that contains multiple sentences and should definitely demonstrate text truncation with ellipsis when selected in the Select component trigger button. The text should be cut off with an ellipsis to prevent overflow."}],value:"",onChange:()=>{},placeholder:"Select an option with a long label..."},parameters:{docs:{source:{code:te,language:"tsx"}}}};var d,m,h,g,v;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select a fruit...'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source},description:{story:`Interactive playground for the Select component.
Use the controls to experiment with different props and states.`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.description}}};var b,S,x,f,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source},description:{story:`The default state of the Select component.
Shows a basic dropdown with a list of fruit options and placeholder text.`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};var w,C,N,P,j;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(N=(C=s.parameters)==null?void 0:C.docs)==null?void 0:N.source},description:{story:`Select with a pre-selected value.
Demonstrates how the component appears with an initial selection.`,...(j=(P=s.parameters)==null?void 0:P.docs)==null?void 0:j.description}}};var W,V,T,O,M;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(T=(V=r.parameters)==null?void 0:V.docs)==null?void 0:T.source},description:{story:`Select with custom placeholder text.
Shows how to customize the default text shown before selection.`,...(M=(O=r.parameters)==null?void 0:O.docs)==null?void 0:M.description}}};var L,_,D,A,B;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(D=(_=i.parameters)==null?void 0:_.docs)==null?void 0:D.source},description:{story:`Select with an extended list of options.
Demonstrates how the component handles a larger set of choices with scrolling.`,...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.description}}};var G,I,k,$,q;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <SelectWithLongLabel />,
  args: {
    options: [{
      value: 'short',
      label: 'Short option'
    }, {
      value: 'medium',
      label: 'This is a medium length option label'
    }, {
      value: 'very-long',
      label: 'This is an extremely long option label that should demonstrate text truncation when selected in the Select component trigger button'
    }, {
      value: 'super-long',
      label: 'This is a super extremely long option label that contains multiple sentences and should definitely demonstrate text truncation with ellipsis when selected in the Select component trigger button. The text should be cut off with an ellipsis to prevent overflow.'
    }],
    value: '',
    onChange: () => {},
    placeholder: 'Select an option with a long label...'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithLongLabel,
        language: 'tsx'
      }
    }
  }
}`,...(k=(I=c.parameters)==null?void 0:I.docs)==null?void 0:k.source},description:{story:`Select with very long option labels.
Demonstrates how the component handles text truncation when a long label is selected.
The selected value will be truncated with an ellipsis to prevent overflow.`,...(q=($=c.parameters)==null?void 0:$.docs)==null?void 0:q.description}}};const Oe=["Playground","Default","WithValue","CustomPlaceholder","WithManyOptions","WithLongLabel"];export{r as CustomPlaceholder,n as Default,o as Playground,c as WithLongLabel,i as WithManyOptions,s as WithValue,Oe as __namedExportsOrder,Te as default};
