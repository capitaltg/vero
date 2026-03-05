import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as o}from"./index-D4H_InIO.js";import{S as l}from"./Select-Ct2bJzHr.js";import"./utils-CU3My8Oi.js";import"./z-index-CmEG1ohp.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DB-GfMvg.js";import"./index-DQwFizlT.js";import"./index-D8GmRN1t.js";import"./index-CZyo9ktw.js";import"./index-YtIeenAn.js";import"./index-CWZjxdH8.js";import"./index-C1hSi-0V.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-Ak5Mws-w.js";import"./index-DonjGF9j.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./index-DXU_LAI1.js";import"./check-CT0OM3mY.js";import"./createLucideIcon-CRH11QI6.js";import"./useAriaDisabled-DJP5ZKD9.js";import"./styles-Bqt2ynIu.js";import"./chevron-down-DtitoCkX.js";const ae=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],J=()=>{const[a,t]=o.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{options:ae,placeholder:"Choose your favorite fruit",value:a,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};J.__docgenInfo={description:"",methods:[],displayName:"SelectCustomPlaceholder"};const te=`import { useState } from 'react';
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
`,le=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],Q=()=>{const[a,t]=o.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{options:le,placeholder:"Select a fruit...",value:a,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};Q.__docgenInfo={description:"",methods:[],displayName:"SelectDefault"};const oe=`import { useState } from 'react';
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
`,m=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],X=()=>{const[a,t]=o.useState("orange");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-muted-foreground",children:"Disabled with placeholder"}),e.jsx(l,{isDisabled:!0,options:m,placeholder:"Select a fruit...",value:"",onChange:t})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-muted-foreground",children:"Disabled with value"}),e.jsx(l,{isDisabled:!0,options:m,placeholder:"Select a fruit...",value:a,onChange:t})]})]})};X.__docgenInfo={description:"",methods:[],displayName:"SelectDisabled"};const ne=`import { useState } from 'react';
import { Select } from '../src/Select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
];

export const SelectDisabled = () => {
  const [value, setValue] = useState('orange');
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm font-medium text-muted-foreground">Disabled with placeholder</p>
        <Select
          isDisabled
          options={options}
          placeholder="Select a fruit..."
          value=""
          onChange={setValue}
        />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-muted-foreground">Disabled with value</p>
        <Select
          isDisabled
          options={options}
          placeholder="Select a fruit..."
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
};
`,se=[{value:"short",label:"Short option"},{value:"medium",label:"This is a medium length option label"},{value:"very-long",label:"This is an extremely long option label that should demonstrate text truncation when selected in the Select component trigger button"},{value:"super-long",label:"This is a super extremely long option label that contains multiple sentences and should definitely demonstrate text truncation with ellipsis when selected in the Select component trigger button. The text should be cut off with an ellipsis to prevent overflow."}],Y=()=>{const[a,t]=o.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"max-w-md",children:e.jsx(l,{options:se,placeholder:"Select an option with a long label...",value:a,onChange:t})}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Try selecting one of the longer options to see how the text truncates with an ellipsis in the trigger button."})]})};Y.__docgenInfo={description:"",methods:[],displayName:"SelectWithLongLabel"};const re=`import { useState } from 'react';
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
`,ie=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"},{value:"pear",label:"Pear"},{value:"peach",label:"Peach"},{value:"plum",label:"Plum"},{value:"kiwi",label:"Kiwi"},{value:"pineapple",label:"Pineapple"}],Z=()=>{const[a,t]=o.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{options:ie,placeholder:"Select a fruit...",value:a,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};Z.__docgenInfo={description:"",methods:[],displayName:"SelectWithManyOptions"};const ce=`import { useState } from 'react';
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
`,ue=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],ee=()=>{const[a,t]=o.useState("apple");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{options:ue,placeholder:"Select a fruit...",value:a,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};ee.__docgenInfo={description:"",methods:[],displayName:"SelectWithValue"};const pe=`import { useState } from 'react';
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
`,Ge={title:"Inputs & Forms/Select",component:l,parameters:{},argTypes:{value:{control:"text",description:"Currently selected value",type:{name:"string",required:!1}},onChange:{description:"Callback when selection changes",type:{name:"function",required:!0},action:"selection changed"},options:{control:"object",description:"Array of select options",type:{name:"array",value:{name:"object",value:{}},required:!0}},placeholder:{control:"text",description:"Placeholder text when no value is selected",type:{name:"string",required:!1}},name:{control:"text",description:"The name attribute for form submission. This is required for the select value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the select is required for form validation. When true, the form cannot be submitted without a selection.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the select when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},isDisabled:{control:"boolean",description:"When true, the select cannot be opened or changed.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}},tags:["autodocs"]},n=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],s={args:{options:n,value:"",onChange:()=>{},placeholder:"Select a fruit..."},tags:["!autodocs"]},r={render:()=>e.jsx(Q,{}),args:{options:n,value:"",onChange:()=>{},placeholder:"Select a fruit..."},parameters:{docs:{source:{code:oe,language:"tsx"}}}},i={render:()=>e.jsx(X,{}),args:{options:n,value:"",onChange:()=>{},placeholder:"Select a fruit...",isDisabled:!0},parameters:{docs:{source:{code:ne,language:"tsx"}}}},c={render:()=>e.jsx(ee,{}),args:{options:n,value:"apple",onChange:()=>{},placeholder:"Select a fruit..."},parameters:{docs:{source:{code:pe,language:"tsx"}}}},u={render:()=>e.jsx(J,{}),args:{options:n,value:"",onChange:()=>{},placeholder:"Choose your favorite fruit"},parameters:{docs:{source:{code:te,language:"tsx"}}}},p={render:()=>e.jsx(Z,{}),args:{options:[...n,{value:"pear",label:"Pear"},{value:"peach",label:"Peach"},{value:"plum",label:"Plum"},{value:"kiwi",label:"Kiwi"},{value:"pineapple",label:"Pineapple"}],value:"",onChange:()=>{},placeholder:"Select a fruit..."},parameters:{docs:{source:{code:ce,language:"tsx"}}}},d={render:()=>e.jsx(Y,{}),args:{options:[{value:"short",label:"Short option"},{value:"medium",label:"This is a medium length option label"},{value:"very-long",label:"This is an extremely long option label that should demonstrate text truncation when selected in the Select component trigger button"},{value:"super-long",label:"This is a super extremely long option label that contains multiple sentences and should definitely demonstrate text truncation with ellipsis when selected in the Select component trigger button. The text should be cut off with an ellipsis to prevent overflow."}],value:"",onChange:()=>{},placeholder:"Select an option with a long label..."},parameters:{docs:{source:{code:re,language:"tsx"}}}};var h,g,v,b,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select a fruit...'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source},description:{story:`Interactive playground for the Select component.
Use the controls to experiment with different props and states.`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.description}}};var f,x,y,w,C;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:`The default state of the Select component.
Shows a basic dropdown with a list of fruit options and placeholder text.`,...(C=(w=r.parameters)==null?void 0:w.docs)==null?void 0:C.description}}};var N,j,D,P,V;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <SelectDisabled />,
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select a fruit...',
    isDisabled: true
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDisabled,
        language: 'tsx'
      }
    }
  }
}`,...(D=(j=i.parameters)==null?void 0:j.docs)==null?void 0:D.source},description:{story:`Select in disabled state.
Shows disabled with placeholder and disabled with a selected value. The trigger is not interactive.`,...(V=(P=i.parameters)==null?void 0:P.docs)==null?void 0:V.description}}};var W,T,O,M,L;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(O=(T=c.parameters)==null?void 0:T.docs)==null?void 0:O.source},description:{story:`Select with a pre-selected value.
Demonstrates how the component appears with an initial selection.`,...(L=(M=c.parameters)==null?void 0:M.docs)==null?void 0:L.description}}};var _,A,q,B,G;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(A=u.parameters)==null?void 0:A.docs)==null?void 0:q.source},description:{story:`Select with custom placeholder text.
Shows how to customize the default text shown before selection.`,...(G=(B=u.parameters)==null?void 0:B.docs)==null?void 0:G.description}}};var I,$,k,K,E;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(k=($=p.parameters)==null?void 0:$.docs)==null?void 0:k.source},description:{story:`Select with an extended list of options.
Demonstrates how the component handles a larger set of choices with scrolling.`,...(E=(K=p.parameters)==null?void 0:K.docs)==null?void 0:E.description}}};var F,R,z,U,H;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(R=d.parameters)==null?void 0:R.docs)==null?void 0:z.source},description:{story:`Select with very long option labels.
Demonstrates how the component handles text truncation when a long label is selected.
The selected value will be truncated with an ellipsis to prevent overflow.`,...(H=(U=d.parameters)==null?void 0:U.docs)==null?void 0:H.description}}};const Ie=["Playground","Default","Disabled","WithValue","CustomPlaceholder","WithManyOptions","WithLongLabel"];export{u as CustomPlaceholder,r as Default,i as Disabled,s as Playground,d as WithLongLabel,p as WithManyOptions,c as WithValue,Ie as __namedExportsOrder,Ge as default};
