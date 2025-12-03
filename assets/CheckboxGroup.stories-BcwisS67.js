import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{C as p}from"./CheckboxGroup-Cq63ouJz.js";import{r as l}from"./index-D4H_InIO.js";import"./utils-CU3My8Oi.js";import"./Checkbox-3co87wJG.js";import"./Label-DsEYheYn.js";import"./styles-BasBkTzl.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-DB-GfMvg.js";import"./index-DXU_LAI1.js";import"./index-DDORxvzF.js";import"./index-DLaBReRc.js";import"./check-CT0OM3mY.js";import"./createLucideIcon-CRH11QI6.js";const U=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],E=()=>{const[e,n]=l.useState([]);return o.jsxs("div",{className:"space-y-4",children:[o.jsx(p,{options:U,value:e,onChange:n}),o.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",e.length>0?e.join(", "):"none"]})]})};E.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupDefault"};const q=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],P=()=>{const[e,n]=l.useState(["option1","option3"]);return o.jsxs("div",{className:"space-y-4",children:[o.jsx(p,{options:q,value:e,onChange:n}),o.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",e.length>0?e.join(", "):"none"]})]})};P.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupWithSelection"};const z=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],R=()=>{const[e,n]=l.useState([]);return o.jsxs("div",{className:"space-y-4",children:[o.jsx(p,{columns:1,options:z,value:e,onChange:n}),o.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",e.length>0?e.join(", "):"none"]})]})};R.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupSingleColumn"};const A=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],F=()=>{const[e,n]=l.useState([]);return o.jsxs("div",{className:"space-y-4",children:[o.jsx(p,{columns:3,options:A,value:e,onChange:n}),o.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected IDs: ",e.length>0?e.join(", "):"none"]})]})};F.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupThreeColumns"};const B=`import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const options = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
  { id: 'option4', label: 'Option 4' },
];

export const CheckboxGroupDefault = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <CheckboxGroup options={options} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,H=`import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const options = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
  { id: 'option4', label: 'Option 4' },
];

export const CheckboxGroupWithSelection = () => {
  const [value, setValue] = useState<string[]>(['option1', 'option3']);
  return (
    <div className="space-y-4">
      <CheckboxGroup options={options} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,J=`import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const options = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
  { id: 'option4', label: 'Option 4' },
];

export const CheckboxGroupSingleColumn = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <CheckboxGroup columns={1} options={options} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,K=`import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const options = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
  { id: 'option4', label: 'Option 4' },
];

export const CheckboxGroupThreeColumns = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <CheckboxGroup columns={3} options={options} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
`,ho={title:"Inputs & Forms/CheckboxGroup",component:p,parameters:{},tags:["autodocs"]},c=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],t={args:{options:c,value:[],onChange:()=>{}},tags:["!autodocs"]},s={render:()=>o.jsx(E,{}),args:{options:c,value:[],onChange:()=>{}},parameters:{docs:{source:{code:B,language:"tsx"}}}},r={render:()=>o.jsx(P,{}),args:{options:c,value:["option1","option3"],onChange:()=>{}},parameters:{docs:{source:{code:H,language:"tsx"}}}},a={render:()=>o.jsx(R,{}),args:{options:c,columns:1,value:[],onChange:()=>{}},parameters:{docs:{source:{code:J,language:"tsx"}}}},i={render:()=>o.jsx(F,{}),args:{options:c,columns:3,value:[],onChange:()=>{}},parameters:{docs:{source:{code:K,language:"tsx"}}}};var u,d,m,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    options,
    value: [],
    onChange: () => {}
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:`Interactive playground for the CheckboxGroup component.
Use the controls to experiment with different props and states.`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};var x,C,b,v,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <CheckboxGroupDefault />,
  args: {
    options,
    value: [],
    onChange: () => {}
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
        language: 'tsx'
      }
    }
  }
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source},description:{story:`The default state of the CheckboxGroup component.
Shows a group of checkboxes with no initial selection.`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.description}}};var k,f,O,G,j;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <CheckboxGroupWithSelection />,
  args: {
    options,
    value: ['option1', 'option3'],
    onChange: () => {}
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithSelection,
        language: 'tsx'
      }
    }
  }
}`,...(O=(f=r.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:`CheckboxGroup with pre-selected values.
Demonstrates how the group appears with multiple checkboxes selected.`,...(j=(G=r.parameters)==null?void 0:G.docs)==null?void 0:j.description}}};var y,N,D,I,V;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <CheckboxGroupSingleColumn />,
  args: {
    options,
    columns: 1,
    value: [],
    onChange: () => {}
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeSingleColumn,
        language: 'tsx'
      }
    }
  }
}`,...(D=(N=a.parameters)==null?void 0:N.docs)==null?void 0:D.source},description:{story:`CheckboxGroup in a single column layout.
Shows checkboxes stacked vertically in one column.`,...(V=(I=a.parameters)==null?void 0:I.docs)==null?void 0:V.description}}};var _,T,w,W,$;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <CheckboxGroupThreeColumns />,
  args: {
    options,
    columns: 3,
    value: [],
    onChange: () => {}
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeThreeColumns,
        language: 'tsx'
      }
    }
  }
}`,...(w=(T=i.parameters)==null?void 0:T.docs)==null?void 0:w.source},description:{story:`CheckboxGroup in a three-column layout.
Demonstrates how checkboxes can be arranged in multiple columns.`,...($=(W=i.parameters)==null?void 0:W.docs)==null?void 0:$.description}}};const go=["Playground","Default","WithSelection","SingleColumn","ThreeColumns"];export{s as Default,t as Playground,a as SingleColumn,i as ThreeColumns,r as WithSelection,go as __namedExportsOrder,ho as default};
