import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as t}from"./index-D4H_InIO.js";import{C as o}from"./Checkbox-BXN9DXy5.js";import"./form-controls-DjFriuce.js";import"./index-D8GmRN1t.js";import"./index-DB-GfMvg.js";import"./index-DXU_LAI1.js";import"./index-DDORxvzF.js";import"./index-DLaBReRc.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./utils-CU3My8Oi.js";import"./index-NE6MC3wq.js";import"./useAriaDisabled-DHTVgRPt.js";import"./check-CT0OM3mY.js";import"./createLucideIcon-CRH11QI6.js";import"./Label-7TaJ5dQy.js";const ie=()=>{const[s,c]=t.useState(!0);return t.useEffect(()=>{c(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{id:"checked",isChecked:s,label:"Checked checkbox",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};ie.__docgenInfo={description:"",methods:[],displayName:"CheckboxChecked"};const pe=`import { useEffect, useState } from 'react';
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
`,de=()=>{const[s,c]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{id:"terms2",isChecked:s,label:"Accept terms and conditions",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};de.__docgenInfo={description:"",methods:[],displayName:"CheckboxDefault"};const be=`import { useState } from 'react';
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
`,re=()=>{const[s,c]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{id:"disabled",isChecked:s,isDisabled:!0,label:"Disabled checkbox",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};re.__docgenInfo={description:"",methods:[],displayName:"CheckboxDisabled"};const xe=`import { useState } from 'react';
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
`,ae=()=>{const[s,c]=t.useState(!0);return t.useEffect(()=>{c(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{id:"disabled-checked",isChecked:s,isDisabled:!0,label:"Disabled checked checkbox",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};ae.__docgenInfo={description:"",methods:[],displayName:"CheckboxDisabledChecked"};const Ce=`import { useEffect, useState } from 'react';
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
`,ne=()=>{const[s,c]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{description:"This is a description for the tile checkbox option",id:"checkbox-tile",isChecked:s,label:"Tile Checkbox",variant:"tile",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};ne.__docgenInfo={description:"",methods:[],displayName:"CheckboxTile"};const ue=`import { useState } from 'react';
import { Checkbox } from '../src/Checkbox';

export const CheckboxTile = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Checkbox
        description="This is a description for the tile checkbox option"
        id="checkbox-tile"
        isChecked={isChecked}
        label="Tile Checkbox"
        variant="tile"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Checkbox {isChecked ? 'is checked' : 'is unchecked'}
      </p>
    </div>
  );
};
`,he=()=>{const[s,c]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{description:"This tile checkbox option is disabled",id:"checkbox-tile-disabled",isChecked:s,isDisabled:!0,label:"Disabled Tile Checkbox",variant:"tile",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};he.__docgenInfo={description:"",methods:[],displayName:"CheckboxTileDisabled"};const me=`import { useState } from 'react';
import { Checkbox } from '../src/Checkbox';

export const CheckboxTileDisabled = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Checkbox
        description="This tile checkbox option is disabled"
        id="checkbox-tile-disabled"
        isChecked={isChecked}
        isDisabled={true}
        label="Disabled Tile Checkbox"
        variant="tile"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Checkbox {isChecked ? 'is checked' : 'is unchecked'}
      </p>
    </div>
  );
};
`,le=()=>{const[s,c]=t.useState(!0);return t.useEffect(()=>{c(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{description:"This tile checkbox option is selected",id:"checkbox-tile-selected",isChecked:s,label:"Selected Tile Checkbox",variant:"tile",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};le.__docgenInfo={description:"",methods:[],displayName:"CheckboxTileSelected"};const ge=`import { useEffect, useState } from 'react';
import { Checkbox } from '../src/Checkbox';

export const CheckboxTileSelected = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <div className="space-y-4">
      <Checkbox
        description="This tile checkbox option is selected"
        id="checkbox-tile-selected"
        isChecked={isChecked}
        label="Selected Tile Checkbox"
        variant="tile"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Checkbox {isChecked ? 'is checked' : 'is unchecked'}
      </p>
    </div>
  );
};
`,ke=()=>{const[s,c]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{description:"This is a helpful description that provides additional context about this checkbox option.",id:"checkbox-with-description",isChecked:s,label:"Checkbox with description",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};ke.__docgenInfo={description:"",methods:[],displayName:"CheckboxWithDescription"};const fe=`import { useState } from 'react';
import { Checkbox } from '../src/Checkbox';

export const CheckboxWithDescription = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Checkbox
        description="This is a helpful description that provides additional context about this checkbox option."
        id="checkbox-with-description"
        isChecked={isChecked}
        label="Checkbox with description"
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Checkbox {isChecked ? 'is checked' : 'is unchecked'}
      </p>
    </div>
  );
};
`,Ge={title:"Inputs & Forms/Checkbox",component:o,parameters:{},argTypes:{isChecked:{control:"boolean"},isDisabled:{control:"boolean"},variant:{control:"radio",options:["default","tile","button"]}},tags:["autodocs"]},i={args:{label:"Accept terms and conditions",id:"terms"},tags:["!autodocs"]},d={render:()=>e.jsx(de,{}),args:{label:"Accept terms and conditions",id:"terms2"},parameters:{docs:{source:{code:be,language:"tsx"}}}},r={render:()=>e.jsx(ie,{}),args:{label:"Checked checkbox",id:"checked",isChecked:!0},parameters:{docs:{source:{code:pe,language:"tsx"}}}},a={render:()=>e.jsx(re,{}),args:{label:"Disabled checkbox",id:"disabled",isDisabled:!0},parameters:{docs:{source:{code:xe,language:"tsx"}}}},n={render:()=>e.jsx(ae,{}),args:{label:"Disabled checked checkbox",id:"disabled-checked",isChecked:!0,isDisabled:!0},parameters:{docs:{source:{code:Ce,language:"tsx"}}}},h={render:()=>e.jsx(ne,{}),args:{label:"Tile Checkbox",description:"This is a description for the tile checkbox option",id:"checkbox-tile",variant:"tile"},parameters:{docs:{source:{code:ue,language:"tsx"}}}},l={render:()=>e.jsx(le,{}),args:{label:"Selected Tile Checkbox",description:"This tile checkbox option is selected",id:"checkbox-tile-selected",variant:"tile",isChecked:!0},parameters:{docs:{source:{code:ge,language:"tsx"}}}},k={render:()=>e.jsx(he,{}),args:{label:"Disabled Tile Checkbox",description:"This tile checkbox option is disabled",id:"checkbox-tile-disabled",variant:"tile",isDisabled:!0},parameters:{docs:{source:{code:me,language:"tsx"}}}},p={render:()=>e.jsx(ke,{}),args:{label:"Checkbox with description",description:"This is a helpful description that provides additional context about this checkbox option.",id:"checkbox-with-description"},parameters:{docs:{source:{code:fe,language:"tsx"}}}};var b,x,C,u,m;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    id: 'terms'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source},description:{story:`Interactive playground for the Checkbox component.
Use the controls to experiment with different props and states.`,...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.description}}};var g,f,D,T,S;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(D=(f=d.parameters)==null?void 0:f.docs)==null?void 0:D.source},description:{story:`The default state of the Checkbox component.
Shows a basic checkbox with a label and interactive state.`,...(S=(T=d.parameters)==null?void 0:T.docs)==null?void 0:S.description}}};var v,y,N,I,j;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(N=(y=r.parameters)==null?void 0:y.docs)==null?void 0:N.source},description:{story:`A checkbox in its checked state.
Demonstrates the appearance of a selected checkbox.`,...(j=(I=r.parameters)==null?void 0:I.docs)==null?void 0:j.description}}};var w,_,E,A,W;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(_=a.parameters)==null?void 0:_.docs)==null?void 0:E.source},description:{story:`A disabled checkbox.
Shows how the checkbox appears when it's not interactive.`,...(W=(A=a.parameters)==null?void 0:A.docs)==null?void 0:W.description}}};var P,R,F,O,U;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(R=n.parameters)==null?void 0:R.docs)==null?void 0:F.source},description:{story:`A disabled checkbox in its checked state.
Demonstrates a non-interactive checkbox that's already selected.`,...(U=(O=n.parameters)==null?void 0:O.docs)==null?void 0:U.description}}};var q,z,B,G,H;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <CheckboxTile />,
  args: {
    label: 'Tile Checkbox',
    description: 'This is a description for the tile checkbox option',
    id: 'checkbox-tile',
    variant: 'tile'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeTile,
        language: 'tsx'
      }
    }
  }
}`,...(B=(z=h.parameters)==null?void 0:z.docs)==null?void 0:B.source},description:{story:`Checkbox with tile styling.
Shows a larger checkbox option with a title and description.`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var J,K,L,M,Q;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <CheckboxTileSelected />,
  args: {
    label: 'Selected Tile Checkbox',
    description: 'This tile checkbox option is selected',
    id: 'checkbox-tile-selected',
    variant: 'tile',
    isChecked: true
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeTileSelected,
        language: 'tsx'
      }
    }
  }
}`,...(L=(K=l.parameters)==null?void 0:K.docs)==null?void 0:L.source},description:{story:`Selected tile checkbox.
Demonstrates how a tile checkbox option appears when selected.`,...(Q=(M=l.parameters)==null?void 0:M.docs)==null?void 0:Q.description}}};var V,X,Y,Z,$;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <CheckboxTileDisabled />,
  args: {
    label: 'Disabled Tile Checkbox',
    description: 'This tile checkbox option is disabled',
    id: 'checkbox-tile-disabled',
    variant: 'tile',
    isDisabled: true
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeTileDisabled,
        language: 'tsx'
      }
    }
  }
}`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`Disabled tile checkbox.
Shows how a tile checkbox option appears when it's not interactive.`,...($=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,se,ce,te,oe;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <CheckboxWithDescription />,
  args: {
    label: 'Checkbox with description',
    description: 'This is a helpful description that provides additional context about this checkbox option.',
    id: 'checkbox-with-description'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithDescription,
        language: 'tsx'
      }
    }
  }
}`,...(ce=(se=p.parameters)==null?void 0:se.docs)==null?void 0:ce.source},description:{story:`Checkbox with description in default variant.
Shows a standard checkbox with a description below the label.`,...(oe=(te=p.parameters)==null?void 0:te.docs)==null?void 0:oe.description}}};const He=["Playground","Default","Checked","Disabled","DisabledChecked","Tile","TileSelected","TileDisabled","WithDescription"];export{r as Checked,d as Default,a as Disabled,n as DisabledChecked,i as Playground,h as Tile,k as TileDisabled,l as TileSelected,p as WithDescription,He as __namedExportsOrder,Ge as default};
