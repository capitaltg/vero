import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{C as i}from"./Checkbox-cOY6hnJ3.js";import{r as t}from"./index-D4H_InIO.js";import"./useAriaDisabled-DHTVgRPt.js";import"./styles-BasBkTzl.js";import"./utils-CU3My8Oi.js";import"./index-D8GmRN1t.js";import"./index-DB-GfMvg.js";import"./index-DXU_LAI1.js";import"./index-DDORxvzF.js";import"./index-DLaBReRc.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./check-CT0OM3mY.js";import"./createLucideIcon-CRH11QI6.js";import"./Label-DsEYheYn.js";const F=()=>{const[s,c]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{id:"terms2",isChecked:s,label:"Accept terms and conditions",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};F.__docgenInfo={description:"",methods:[],displayName:"CheckboxDefault"};const O=()=>{const[s,c]=t.useState(!0);return t.useEffect(()=>{c(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{id:"checked",isChecked:s,label:"Checked checkbox",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};O.__docgenInfo={description:"",methods:[],displayName:"CheckboxChecked"};const U=()=>{const[s,c]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{id:"disabled",isChecked:s,isDisabled:!0,label:"Disabled checkbox",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};U.__docgenInfo={description:"",methods:[],displayName:"CheckboxDisabled"};const q=()=>{const[s,c]=t.useState(!0);return t.useEffect(()=>{c(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{id:"disabled-checked",isChecked:s,isDisabled:!0,label:"Disabled checked checkbox",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};q.__docgenInfo={description:"",methods:[],displayName:"CheckboxDisabledChecked"};const z=`import { useState } from 'react';
import { Checkbox } from '../src/Checkbox';

export const CheckboxDefault = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Checkbox
        id="terms2"
        isChecked={isChecked}
        label="Accept terms and conditions"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Checkbox {isChecked ? 'is checked' : 'is unchecked'}
      </p>
    </div>
  );
};
`,B=`import { useEffect, useState } from 'react';
import { Checkbox } from '../src/Checkbox';

export const CheckboxChecked = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <div className="space-y-4">
      <Checkbox
        id="checked"
        isChecked={isChecked}
        label="Checked checkbox"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Checkbox {isChecked ? 'is checked' : 'is unchecked'}
      </p>
    </div>
  );
};
`,G=`import { useState } from 'react';
import { Checkbox } from '../src/Checkbox';

export const CheckboxDisabled = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Checkbox
        id="disabled"
        isChecked={isChecked}
        isDisabled={true}
        label="Disabled checkbox"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Checkbox {isChecked ? 'is checked' : 'is unchecked'}
      </p>
    </div>
  );
};
`,H=`import { useEffect, useState } from 'react';
import { Checkbox } from '../src/Checkbox';

export const CheckboxDisabledChecked = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <div className="space-y-4">
      <Checkbox
        id="disabled-checked"
        isChecked={isChecked}
        isDisabled={true}
        label="Disabled checked checkbox"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Checkbox {isChecked ? 'is checked' : 'is unchecked'}
      </p>
    </div>
  );
};
`,re={title:"Inputs & Forms/Checkbox",component:i,parameters:{},argTypes:{isChecked:{control:"boolean"},isDisabled:{control:"boolean"}},tags:["autodocs"]},o={args:{label:"Accept terms and conditions",id:"terms"},tags:["!autodocs"]},d={render:()=>e.jsx(F,{}),args:{label:"Accept terms and conditions",id:"terms2"},parameters:{docs:{source:{code:z,language:"tsx"}}}},a={render:()=>e.jsx(O,{}),args:{label:"Checked checkbox",id:"checked",isChecked:!0},parameters:{docs:{source:{code:B,language:"tsx"}}}},r={render:()=>e.jsx(U,{}),args:{label:"Disabled checkbox",id:"disabled",isDisabled:!0},parameters:{docs:{source:{code:G,language:"tsx"}}}},n={render:()=>e.jsx(q,{}),args:{label:"Disabled checked checkbox",id:"disabled-checked",isChecked:!0,isDisabled:!0},parameters:{docs:{source:{code:H,language:"tsx"}}}};var h,k,l,m,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    id: 'terms'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(l=(k=o.parameters)==null?void 0:k.docs)==null?void 0:l.source},description:{story:`Interactive playground for the Checkbox component.
Use the controls to experiment with different props and states.`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var b,C,p,x,g;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <CheckboxDefault />,
  args: {
    label: 'Accept terms and conditions',
    id: 'terms2'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
        language: 'tsx'
      }
    }
  }
}`,...(p=(C=d.parameters)==null?void 0:C.docs)==null?void 0:p.source},description:{story:`The default state of the Checkbox component.
Shows a basic checkbox with a label and interactive state.`,...(g=(x=d.parameters)==null?void 0:x.docs)==null?void 0:g.description}}};var f,D,y,I,N;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <CheckboxChecked />,
  args: {
    label: 'Checked checkbox',
    id: 'checked',
    isChecked: true
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeChecked,
        language: 'tsx'
      }
    }
  }
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source},description:{story:`A checkbox in its checked state.
Demonstrates the appearance of a selected checkbox.`,...(N=(I=a.parameters)==null?void 0:I.docs)==null?void 0:N.description}}};var S,j,v,_,A;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <CheckboxDisabled />,
  args: {
    label: 'Disabled checkbox',
    id: 'disabled',
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
}`,...(v=(j=r.parameters)==null?void 0:j.docs)==null?void 0:v.source},description:{story:`A disabled checkbox.
Shows how the checkbox appears when it's not interactive.`,...(A=(_=r.parameters)==null?void 0:_.docs)==null?void 0:A.description}}};var E,w,P,R,T;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <CheckboxDisabledChecked />,
  args: {
    label: 'Disabled checked checkbox',
    id: 'disabled-checked',
    isChecked: true,
    isDisabled: true
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDisabledChecked,
        language: 'tsx'
      }
    }
  }
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source},description:{story:`A disabled checkbox in its checked state.
Demonstrates a non-interactive checkbox that's already selected.`,...(T=(R=n.parameters)==null?void 0:R.docs)==null?void 0:T.description}}};const ne=["Playground","Default","Checked","Disabled","DisabledChecked"];export{a as Checked,d as Default,r as Disabled,n as DisabledChecked,o as Playground,ne as __namedExportsOrder,re as default};
