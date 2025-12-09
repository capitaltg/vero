import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{C as o}from"./Checkbox-BXOeXF-I.js";import{r as t}from"./index-D4H_InIO.js";import"./DefaultFormControlLabel-C4mlsiRE.js";import"./Label-7TaJ5dQy.js";import"./styles-Bqt2ynIu.js";import"./utils-CU3My8Oi.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./index-DB-GfMvg.js";import"./index-DXU_LAI1.js";import"./index-DDORxvzF.js";import"./index-DLaBReRc.js";import"./constants-C4w3S9le.js";import"./index-NE6MC3wq.js";import"./useAriaDisabled-DHTVgRPt.js";import"./check-CT0OM3mY.js";import"./createLucideIcon-CRH11QI6.js";const $=()=>{const[s,c]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{id:"terms2",isChecked:s,label:"Accept terms and conditions",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};$.__docgenInfo={description:"",methods:[],displayName:"CheckboxDefault"};const ee=()=>{const[s,c]=t.useState(!0);return t.useEffect(()=>{c(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{id:"checked",isChecked:s,label:"Checked checkbox",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};ee.__docgenInfo={description:"",methods:[],displayName:"CheckboxChecked"};const se=()=>{const[s,c]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{id:"disabled",isChecked:s,isDisabled:!0,label:"Disabled checkbox",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};se.__docgenInfo={description:"",methods:[],displayName:"CheckboxDisabled"};const ce=()=>{const[s,c]=t.useState(!0);return t.useEffect(()=>{c(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{id:"disabled-checked",isChecked:s,isDisabled:!0,label:"Disabled checked checkbox",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};ce.__docgenInfo={description:"",methods:[],displayName:"CheckboxDisabledChecked"};const te=()=>{const[s,c]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{description:"This is a description for the tile checkbox option",id:"checkbox-tile",isChecked:s,label:"Tile Checkbox",variant:"tile",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};te.__docgenInfo={description:"",methods:[],displayName:"CheckboxTile"};const oe=()=>{const[s,c]=t.useState(!0);return t.useEffect(()=>{c(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{description:"This tile checkbox option is selected",id:"checkbox-tile-selected",isChecked:s,label:"Selected Tile Checkbox",variant:"tile",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};oe.__docgenInfo={description:"",methods:[],displayName:"CheckboxTileSelected"};const ie=()=>{const[s,c]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{description:"This tile checkbox option is disabled",id:"checkbox-tile-disabled",isChecked:s,isDisabled:!0,label:"Disabled Tile Checkbox",variant:"tile",onCheckedChange:()=>c(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Checkbox ",s?"is checked":"is unchecked"]})]})};ie.__docgenInfo={description:"",methods:[],displayName:"CheckboxTileDisabled"};const de=`import { useState } from 'react';
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
`,ae=`import { useEffect, useState } from 'react';
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
`,re=`import { useState } from 'react';
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
`,ne=`import { useEffect, useState } from 'react';
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
`,he=`import { useState } from 'react';
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
`,le=`import { useEffect, useState } from 'react';
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
`,ke=`import { useState } from 'react';
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
`,Re={title:"Inputs & Forms/Checkbox",component:o,parameters:{},argTypes:{isChecked:{control:"boolean"},isDisabled:{control:"boolean"},variant:{control:"radio",options:["default","tile","button"]}},tags:["autodocs"]},i={args:{label:"Accept terms and conditions",id:"terms"},tags:["!autodocs"]},d={render:()=>e.jsx($,{}),args:{label:"Accept terms and conditions",id:"terms2"},parameters:{docs:{source:{code:de,language:"tsx"}}}},a={render:()=>e.jsx(ee,{}),args:{label:"Checked checkbox",id:"checked",isChecked:!0},parameters:{docs:{source:{code:ae,language:"tsx"}}}},r={render:()=>e.jsx(se,{}),args:{label:"Disabled checkbox",id:"disabled",isDisabled:!0},parameters:{docs:{source:{code:re,language:"tsx"}}}},n={render:()=>e.jsx(ce,{}),args:{label:"Disabled checked checkbox",id:"disabled-checked",isChecked:!0,isDisabled:!0},parameters:{docs:{source:{code:ne,language:"tsx"}}}},h={render:()=>e.jsx(te,{}),args:{label:"Tile Checkbox",description:"This is a description for the tile checkbox option",id:"checkbox-tile",variant:"tile"},parameters:{docs:{source:{code:he,language:"tsx"}}}},l={render:()=>e.jsx(oe,{}),args:{label:"Selected Tile Checkbox",description:"This tile checkbox option is selected",id:"checkbox-tile-selected",variant:"tile",isChecked:!0},parameters:{docs:{source:{code:le,language:"tsx"}}}},k={render:()=>e.jsx(ie,{}),args:{label:"Disabled Tile Checkbox",description:"This tile checkbox option is disabled",id:"checkbox-tile-disabled",variant:"tile",isDisabled:!0},parameters:{docs:{source:{code:ke,language:"tsx"}}}};var b,p,C,x,u;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    id: 'terms'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(C=(p=i.parameters)==null?void 0:p.docs)==null?void 0:C.source},description:{story:`Interactive playground for the Checkbox component.
Use the controls to experiment with different props and states.`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.description}}};var m,g,f,D,T;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(g=d.parameters)==null?void 0:g.docs)==null?void 0:f.source},description:{story:`The default state of the Checkbox component.
Shows a basic checkbox with a label and interactive state.`,...(T=(D=d.parameters)==null?void 0:D.docs)==null?void 0:T.description}}};var S,v,y,N,I;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:`A checkbox in its checked state.
Demonstrates the appearance of a selected checkbox.`,...(I=(N=a.parameters)==null?void 0:N.docs)==null?void 0:I.description}}};var j,_,w,E,A;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(_=r.parameters)==null?void 0:_.docs)==null?void 0:w.source},description:{story:`A disabled checkbox.
Shows how the checkbox appears when it's not interactive.`,...(A=(E=r.parameters)==null?void 0:E.docs)==null?void 0:A.description}}};var P,R,F,O,U;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
Demonstrates how a tile checkbox option appears when selected.`,...(Q=(M=l.parameters)==null?void 0:M.docs)==null?void 0:Q.description}}};var V,W,X,Y,Z;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(X=(W=k.parameters)==null?void 0:W.docs)==null?void 0:X.source},description:{story:`Disabled tile checkbox.
Shows how a tile checkbox option appears when it's not interactive.`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};const Fe=["Playground","Default","Checked","Disabled","DisabledChecked","Tile","TileSelected","TileDisabled"];export{a as Checked,d as Default,r as Disabled,n as DisabledChecked,i as Playground,h as Tile,k as TileDisabled,l as TileSelected,Fe as __namedExportsOrder,Re as default};
