import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{a as o,R as de}from"./Radio-C5T6W113.js";import{r as t}from"./index-D4H_InIO.js";import"./constants-CVEkm9yF.js";import"./styles-BasBkTzl.js";import"./utils-CU3My8Oi.js";import"./index-NE6MC3wq.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-DB-GfMvg.js";import"./index-D8GmRN1t.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-DQwFizlT.js";import"./index-Ak5Mws-w.js";import"./index-DAnQV6hb.js";import"./index-YtIeenAn.js";import"./index-DDORxvzF.js";import"./index-DXU_LAI1.js";import"./index-DLaBReRc.js";import"./createLucideIcon-CRH11QI6.js";import"./Label-DsEYheYn.js";const $=()=>{const[s,i]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{id:"radio-1",isChecked:s,label:"Radio option",value:"option-1",onClick:()=>i(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Radio ",s?"is selected":"is not selected"]})]})};$.__docgenInfo={description:"",methods:[],displayName:"RadioDefault"};const ee=()=>{const[s,i]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{description:"This is a description for the tile radio option",id:"radio-tile",isChecked:s,label:"Tile Radio",value:"option-tile",variant:"tile",onClick:()=>i(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Radio ",s?"is selected":"is not selected"]})]})};ee.__docgenInfo={description:"",methods:[],displayName:"RadioTile"};const se=()=>{const[s,i]=t.useState(!0);return t.useEffect(()=>{i(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{description:"This tile radio option is selected",id:"radio-tile-selected",isChecked:s,label:"Selected Tile Radio",value:"option-tile-selected",variant:"tile",onClick:()=>i(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Radio ",s?"is selected":"is not selected"]})]})};se.__docgenInfo={description:"",methods:[],displayName:"RadioTileSelected"};const ie=()=>{const[s,i]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{description:"This tile radio option is disabled",id:"radio-tile-disabled",isChecked:s,isDisabled:!0,label:"Disabled Tile Radio",value:"option-tile-disabled",variant:"tile",onClick:()=>i(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Radio ",s?"is selected":"is not selected"]})]})};ie.__docgenInfo={description:"",methods:[],displayName:"RadioTileDisabled"};const te=()=>{const[s,i]=t.useState(!0);return t.useEffect(()=>{i(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{id:"radio-2",isChecked:s,label:"Selected radio",value:"option-2",onClick:()=>i(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Radio ",s?"is selected":"is not selected"]})]})};te.__docgenInfo={description:"",methods:[],displayName:"RadioSelected"};const oe=()=>{const[s,i]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{id:"radio-3",isChecked:s,isDisabled:!0,label:"Disabled radio",value:"option-3",onClick:()=>i(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Radio ",s?"is selected":"is not selected"]})]})};oe.__docgenInfo={description:"",methods:[],displayName:"RadioDisabled"};const ae=()=>{const[s,i]=t.useState(!0);return t.useEffect(()=>{i(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{id:"radio-4",isChecked:s,isDisabled:!0,label:"Disabled selected radio",value:"option-4",onClick:()=>i(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Radio ",s?"is selected":"is not selected"]})]})};ae.__docgenInfo={description:"",methods:[],displayName:"RadioDisabledSelected"};const re=`import { useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioDefault = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Radio
        id="radio-1"
        isChecked={isChecked}
        label="Radio option"
        value="option-1"
        onClick={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};
`,ce=`import { useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioTile = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Radio
        description="This is a description for the tile radio option"
        id="radio-tile"
        isChecked={isChecked}
        label="Tile Radio"
        value="option-tile"
        variant="tile"
        onClick={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};
`,ne=`import { useEffect, useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioTileSelected = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <div className="space-y-4">
      <Radio
        description="This tile radio option is selected"
        id="radio-tile-selected"
        isChecked={isChecked}
        label="Selected Tile Radio"
        value="option-tile-selected"
        variant="tile"
        onClick={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};
`,le=`import { useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioTileDisabled = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Radio
        description="This tile radio option is disabled"
        id="radio-tile-disabled"
        isChecked={isChecked}
        isDisabled={true}
        label="Disabled Tile Radio"
        value="option-tile-disabled"
        variant="tile"
        onClick={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};
`,pe=`import { useEffect, useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioSelected = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <div className="space-y-4">
      <Radio
        id="radio-2"
        isChecked={isChecked}
        label="Selected radio"
        value="option-2"
        onClick={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};
`,ue=`import { useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioDisabled = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Radio
        id="radio-3"
        isChecked={isChecked}
        isDisabled={true}
        label="Disabled radio"
        value="option-3"
        onClick={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};
`,me=`import { useEffect, useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioDisabledSelected = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <div className="space-y-4">
      <Radio
        id="radio-4"
        isChecked={isChecked}
        isDisabled={true}
        label="Disabled selected radio"
        value="option-4"
        onClick={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};
`,Ve={title:"Inputs & Forms/Radio",component:o,parameters:{},argTypes:{isChecked:{control:"boolean"},isDisabled:{control:"boolean"},variant:{control:"radio",options:["default","tile"]}},decorators:[s=>e.jsx(de,{defaultValue:"option-1",children:e.jsx(s,{})})],tags:["autodocs"]},a={args:{label:"Radio option",id:"radio-playground",value:"option-playground"},tags:["!autodocs"]},d={render:()=>e.jsx($,{}),args:{label:"Radio option",id:"radio-1",value:"option-1"},parameters:{docs:{source:{code:re,language:"tsx"}}}},r={render:()=>e.jsx(ee,{}),args:{label:"Tile Radio",description:"This is a description for the tile radio option",id:"radio-tile",value:"option-tile",variant:"tile"},parameters:{docs:{source:{code:ce,language:"tsx"}}}},c={render:()=>e.jsx(se,{}),args:{label:"Selected Tile Radio",description:"This tile radio option is selected",id:"radio-tile-selected",value:"option-tile-selected",variant:"tile",isChecked:!0},parameters:{docs:{source:{code:ne,language:"tsx"}}}},n={render:()=>e.jsx(ie,{}),args:{label:"Disabled Tile Radio",description:"This tile radio option is disabled",id:"radio-tile-disabled",value:"option-tile-disabled",variant:"tile",isDisabled:!0},parameters:{docs:{source:{code:le,language:"tsx"}}}},l={render:()=>e.jsx(te,{}),args:{label:"Selected radio",id:"radio-2",value:"option-2",isChecked:!0},parameters:{docs:{source:{code:pe,language:"tsx"}}}},p={render:()=>e.jsx(oe,{}),args:{label:"Disabled radio",id:"radio-3",value:"option-3",isDisabled:!0},parameters:{docs:{source:{code:ue,language:"tsx"}}}},u={render:()=>e.jsx(ae,{}),args:{label:"Disabled selected radio",id:"radio-4",value:"option-4",isChecked:!0,isDisabled:!0},parameters:{docs:{source:{code:me,language:"tsx"}}}};var m,h,b,C,R;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Radio option',
    id: 'radio-playground',
    value: 'option-playground'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source},description:{story:`Interactive playground for the Radio component.
Use the controls to experiment with different props and states.`,...(R=(C=a.parameters)==null?void 0:C.docs)==null?void 0:R.description}}};var g,k,f,x,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <RadioDefault />,
  args: {
    label: 'Radio option',
    id: 'radio-1',
    value: 'option-1'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
        language: 'tsx'
      }
    }
  }
}`,...(f=(k=d.parameters)==null?void 0:k.docs)==null?void 0:f.source},description:{story:`The default state of the Radio component.
Shows a basic radio button with a label.`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.description}}};var S,D,T,y,N;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <RadioTile />,
  args: {
    label: 'Tile Radio',
    description: 'This is a description for the tile radio option',
    id: 'radio-tile',
    value: 'option-tile',
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
}`,...(T=(D=r.parameters)==null?void 0:D.docs)==null?void 0:T.source},description:{story:`Radio with tile styling.
Shows a larger radio option with a title and description.`,...(N=(y=r.parameters)==null?void 0:y.docs)==null?void 0:N.description}}};var I,j,w,_,E;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <RadioTileSelected />,
  args: {
    label: 'Selected Tile Radio',
    description: 'This tile radio option is selected',
    id: 'radio-tile-selected',
    value: 'option-tile-selected',
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
}`,...(w=(j=c.parameters)==null?void 0:j.docs)==null?void 0:w.source},description:{story:`Selected tile radio.
Demonstrates how a tile radio option appears when selected.`,...(E=(_=c.parameters)==null?void 0:_.docs)==null?void 0:E.description}}};var P,F,O,U,V;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <RadioTileDisabled />,
  args: {
    label: 'Disabled Tile Radio',
    description: 'This tile radio option is disabled',
    id: 'radio-tile-disabled',
    value: 'option-tile-disabled',
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
}`,...(O=(F=n.parameters)==null?void 0:F.docs)==null?void 0:O.source},description:{story:`Disabled tile radio.
Shows how a tile radio option appears when it's not interactive.`,...(V=(U=n.parameters)==null?void 0:U.docs)==null?void 0:V.description}}};var q,z,A,B,G;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <RadioSelected />,
  args: {
    label: 'Selected radio',
    id: 'radio-2',
    value: 'option-2',
    isChecked: true
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeSelected,
        language: 'tsx'
      }
    }
  }
}`,...(A=(z=l.parameters)==null?void 0:z.docs)==null?void 0:A.source},description:{story:`Selected radio button.
Shows how a standard radio button appears when selected.`,...(G=(B=l.parameters)==null?void 0:B.docs)==null?void 0:G.description}}};var H,J,K,L,M;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <RadioDisabled />,
  args: {
    label: 'Disabled radio',
    id: 'radio-3',
    value: 'option-3',
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
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:`Disabled radio button.
Demonstrates how a standard radio button appears when disabled.`,...(M=(L=p.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};var Q,W,X,Y,Z;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <RadioDisabledSelected />,
  args: {
    label: 'Disabled selected radio',
    id: 'radio-4',
    value: 'option-4',
    isChecked: true,
    isDisabled: true
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDisabledSelected,
        language: 'tsx'
      }
    }
  }
}`,...(X=(W=u.parameters)==null?void 0:W.docs)==null?void 0:X.source},description:{story:`Disabled and selected radio button.
Shows a radio button that is both selected and not interactive.`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};const qe=["Playground","Default","Tile","TileSelected","TileDisabled","Selected","Disabled","DisabledSelected"];export{d as Default,p as Disabled,u as DisabledSelected,a as Playground,l as Selected,r as Tile,n as TileDisabled,c as TileSelected,qe as __namedExportsOrder,Ve as default};
