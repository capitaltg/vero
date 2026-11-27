import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as l}from"./index-B0WjJBI_.js";import{f as he,g as ge,S as o,a as ve,b as be,c as Se,d as xe,h as S,e as h}from"./Select-VIvb_Gvi.js";import{a as se}from"./utils-DrFeXHBK.js";const g=l.forwardRef(({className:a,...t},v)=>e.jsx(he,{ref:v,className:se("py-1.5 pl-8 pr-2 text-sm font-semibold",a),...t}));g.displayName="SelectLabel";g.__docgenInfo={description:"A heading for a `SelectGroup`. It can't be chosen.",methods:[],displayName:"SelectLabel"};const b=l.forwardRef(({className:a,...t},v)=>e.jsx(ge,{ref:v,className:se("-mx-1 my-1 h-px bg-muted",a),...t}));b.displayName="SelectSeparator";b.__docgenInfo={description:"A line between items or groups.",methods:[],displayName:"SelectSeparator"};const fe=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],re=()=>{const[a,t]=l.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{options:fe,placeholder:"Choose your favorite fruit",value:a,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};re.__docgenInfo={description:"",methods:[],displayName:"SelectCustomPlaceholder"};const ye=`import { useState } from 'react';
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
`,we=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],ce=()=>{const[a,t]=l.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{options:we,placeholder:"Select a fruit...",value:a,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};ce.__docgenInfo={description:"",methods:[],displayName:"SelectDefault"};const Ce=`import { useState } from 'react';
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
`,x=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],ie=()=>{const[a,t]=l.useState("orange");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-muted-foreground",children:"Disabled with placeholder"}),e.jsx(o,{isDisabled:!0,options:x,placeholder:"Select a fruit...",value:"",onChange:t})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-muted-foreground",children:"Disabled with value"}),e.jsx(o,{isDisabled:!0,options:x,placeholder:"Select a fruit...",value:a,onChange:t})]})]})};ie.__docgenInfo={description:"",methods:[],displayName:"SelectDisabled"};const je=`import { useState } from 'react';
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
`,ue=()=>{const[a,t]=l.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(ve,{value:a,onValueChange:t,children:[e.jsx(be,{"aria-label":"Food",className:"w-64",hasValue:!!a,children:e.jsx(Se,{placeholder:"Select a food..."})}),e.jsxs(xe,{children:[e.jsxs(S,{children:[e.jsx(g,{children:"Fruits"}),e.jsx(h,{value:"apple",children:"Apple"}),e.jsx(h,{value:"banana",children:"Banana"}),e.jsx(h,{disabled:!0,value:"mango",children:"Mango (out of season)"})]}),e.jsx(b,{}),e.jsxs(S,{children:[e.jsx(g,{children:"Vegetables"}),e.jsx(h,{value:"carrot",children:"Carrot"}),e.jsx(h,{value:"spinach",children:"Spinach"})]})]})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};ue.__docgenInfo={description:"",methods:[],displayName:"SelectFromParts"};const Ne=`import { useState } from 'react';
import { SelectGroup, SelectRoot, SelectValue } from '../src/Select';
import { SelectContent } from '../src/SelectContent';
import { SelectItem } from '../src/SelectItem';
import { SelectLabel } from '../src/SelectLabel';
import { SelectSeparator } from '../src/SelectSeparator';
import { SelectTrigger } from '../src/SelectTrigger';

export const SelectFromParts = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <SelectRoot value={value} onValueChange={setValue}>
        <SelectTrigger aria-label="Food" className="w-64" hasValue={!!value}>
          <SelectValue placeholder="Select a food..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem disabled value="mango">
              Mango (out of season)
            </SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="spinach">Spinach</SelectItem>
          </SelectGroup>
        </SelectContent>
      </SelectRoot>
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,Ve=[{value:"short",label:"Short option"},{value:"medium",label:"This is a medium length option label"},{value:"very-long",label:"This is an extremely long option label that should demonstrate text truncation when selected in the Select component trigger button"},{value:"super-long",label:"This is a super extremely long option label that contains multiple sentences and should definitely demonstrate text truncation with ellipsis when selected in the Select component trigger button. The text should be cut off with an ellipsis to prevent overflow."}],pe=()=>{const[a,t]=l.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"max-w-md",children:e.jsx(o,{options:Ve,placeholder:"Select an option with a long label...",value:a,onChange:t})}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Try selecting one of the longer options to see how the text truncates with an ellipsis in the trigger button."})]})};pe.__docgenInfo={description:"",methods:[],displayName:"SelectWithLongLabel"};const Pe=`import { useState } from 'react';
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
`,Te=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"},{value:"pear",label:"Pear"},{value:"peach",label:"Peach"},{value:"plum",label:"Plum"},{value:"kiwi",label:"Kiwi"},{value:"pineapple",label:"Pineapple"}],de=()=>{const[a,t]=l.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{options:Te,placeholder:"Select a fruit...",value:a,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};de.__docgenInfo={description:"",methods:[],displayName:"SelectWithManyOptions"};const De=`import { useState } from 'react';
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
`,Le=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],me=()=>{const[a,t]=l.useState("apple");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{options:Le,placeholder:"Select a fruit...",value:a,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",a||"none"]})]})};me.__docgenInfo={description:"",methods:[],displayName:"SelectWithValue"};const We=`import { useState } from 'react';
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
`,Ie={title:"Inputs & Forms/Select",component:o,parameters:{},argTypes:{value:{control:"text",type:{name:"string",required:!1}},onChange:{type:{name:"function",required:!0},action:"selection changed"},options:{control:"object",type:{name:"array",value:{name:"object",value:{}},required:!0}},placeholder:{control:"text",type:{name:"string",required:!1}},name:{control:"text",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},isDisabled:{control:"boolean",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}}},n=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],s={args:{options:n,value:"",onChange:()=>{},placeholder:"Select a fruit..."}},r={render:()=>e.jsx(ce,{}),args:{options:n,value:"",onChange:()=>{},placeholder:"Select a fruit..."},parameters:{docs:{source:{code:Ce,language:"tsx"}}}},c={render:()=>e.jsx(ie,{}),args:{options:n,value:"",onChange:()=>{},placeholder:"Select a fruit...",isDisabled:!0},parameters:{docs:{source:{code:je,language:"tsx"}}}},i={render:()=>e.jsx(me,{}),args:{options:n,value:"apple",onChange:()=>{},placeholder:"Select a fruit..."},parameters:{docs:{source:{code:We,language:"tsx"}}}},u={render:()=>e.jsx(re,{}),args:{options:n,value:"",onChange:()=>{},placeholder:"Choose your favorite fruit"},parameters:{docs:{source:{code:ye,language:"tsx"}}}},p={render:()=>e.jsx(de,{}),args:{options:[...n,{value:"pear",label:"Pear"},{value:"peach",label:"Peach"},{value:"plum",label:"Plum"},{value:"kiwi",label:"Kiwi"},{value:"pineapple",label:"Pineapple"}],value:"",onChange:()=>{},placeholder:"Select a fruit..."},parameters:{docs:{source:{code:De,language:"tsx"}}}},d={render:()=>e.jsx(pe,{}),args:{options:[{value:"short",label:"Short option"},{value:"medium",label:"This is a medium length option label"},{value:"very-long",label:"This is an extremely long option label that should demonstrate text truncation when selected in the Select component trigger button"},{value:"super-long",label:"This is a super extremely long option label that contains multiple sentences and should definitely demonstrate text truncation with ellipsis when selected in the Select component trigger button. The text should be cut off with an ellipsis to prevent overflow."}],value:"",onChange:()=>{},placeholder:"Select an option with a long label..."},parameters:{docs:{source:{code:Pe,language:"tsx"}}}},m={render:()=>e.jsx(ue,{}),args:{options:n,value:"",onChange:()=>{}},parameters:{docs:{source:{code:Ne,language:"tsx"}}}};var f,y,w,C,j;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select a fruit...'
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.description}}};var N,V,P,T,D;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(V=r.parameters)==null?void 0:V.docs)==null?void 0:P.source},description:{story:`The default state of the Select component.
Shows a basic dropdown with a list of fruit options and placeholder text.`,...(D=(T=r.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var L,W,I,_,O;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(I=(W=c.parameters)==null?void 0:W.docs)==null?void 0:I.source},description:{story:`Select in disabled state.
Shows disabled with placeholder and disabled with a selected value. The trigger is not interactive.`,...(O=(_=c.parameters)==null?void 0:_.docs)==null?void 0:O.description}}};var M,G,A,F,B;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(G=i.parameters)==null?void 0:G.docs)==null?void 0:A.source},description:{story:`Select with a pre-selected value.
Demonstrates how the component appears with an initial selection.`,...(B=(F=i.parameters)==null?void 0:F.docs)==null?void 0:B.description}}};var q,$,R,k,E;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(R=($=u.parameters)==null?void 0:$.docs)==null?void 0:R.source},description:{story:`Select with custom placeholder text.
Shows how to customize the default text shown before selection.`,...(E=(k=u.parameters)==null?void 0:k.docs)==null?void 0:E.description}}};var K,z,U,H,J;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(z=p.parameters)==null?void 0:z.docs)==null?void 0:U.source},description:{story:`Select with an extended list of options.
Demonstrates how the component handles a larger set of choices with scrolling.`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var Q,X,Y,Z,ee;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`Select with very long option labels.
Demonstrates how the component handles text truncation when a long label is selected.
The selected value will be truncated with an ellipsis to prevent overflow.`,...(ee=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var ae,te,le,oe,ne;m.parameters={...m.parameters,docs:{...(ae=m.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <SelectFromParts />,
  args: {
    options,
    value: '',
    onChange: () => {}
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeFromParts,
        language: 'tsx'
      }
    }
  }
}`,...(le=(te=m.parameters)==null?void 0:te.docs)==null?void 0:le.source},description:{story:"A select built from the parts, with groups, labels, a separator and a disabled item. Use\nthe parts when `Select`'s `options` can't describe what you need. Otherwise use `Select`,\nwhich puts the same parts together for you. With the parts, pass `hasValue` to\n`SelectTrigger` yourself so the placeholder is muted.",...(ne=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};const _e=["Playground","Default","Disabled","WithValue","CustomPlaceholder","WithManyOptions","WithLongLabel","FromParts"],Fe=Object.freeze(Object.defineProperty({__proto__:null,CustomPlaceholder:u,Default:r,Disabled:c,FromParts:m,Playground:s,WithLongLabel:d,WithManyOptions:p,WithValue:i,__namedExportsOrder:_e,default:Ie},Symbol.toStringTag,{value:"Module"}));export{s as P,Fe as S};
