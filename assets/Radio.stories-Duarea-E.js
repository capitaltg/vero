import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{a as o,R as me}from"./Radio-CvzfbRlP.js";import{r as t}from"./index-D4H_InIO.js";import"./form-controls-DjFriuce.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./utils-CU3My8Oi.js";import"./index-NE6MC3wq.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-DB-GfMvg.js";import"./index-D8GmRN1t.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-DQwFizlT.js";import"./index-Ak5Mws-w.js";import"./index-DAnQV6hb.js";import"./index-YtIeenAn.js";import"./index-DDORxvzF.js";import"./index-DXU_LAI1.js";import"./index-DLaBReRc.js";import"./createLucideIcon-CRH11QI6.js";import"./Label-7TaJ5dQy.js";const ae=()=>{const[s,i]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{id:"radio-1",isChecked:s,label:"Radio option",value:"option-1",onClick:()=>i(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Radio ",s?"is selected":"is not selected"]})]})};ae.__docgenInfo={description:"",methods:[],displayName:"RadioDefault"};const he=`import { useState } from 'react';
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
`,de=()=>{const[s,i]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{id:"radio-3",isChecked:s,isDisabled:!0,label:"Disabled radio",value:"option-3",onClick:()=>i(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Radio ",s?"is selected":"is not selected"]})]})};de.__docgenInfo={description:"",methods:[],displayName:"RadioDisabled"};const be=`import { useState } from 'react';
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
`,re=()=>{const[s,i]=t.useState(!0);return t.useEffect(()=>{i(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{id:"radio-4",isChecked:s,isDisabled:!0,label:"Disabled selected radio",value:"option-4",onClick:()=>i(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Radio ",s?"is selected":"is not selected"]})]})};re.__docgenInfo={description:"",methods:[],displayName:"RadioDisabledSelected"};const Ce=`import { useEffect, useState } from 'react';
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
`,ne=()=>{const[s,i]=t.useState(!0);return t.useEffect(()=>{i(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{id:"radio-2",isChecked:s,label:"Selected radio",value:"option-2",onClick:()=>i(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Radio ",s?"is selected":"is not selected"]})]})};ne.__docgenInfo={description:"",methods:[],displayName:"RadioSelected"};const Re=`import { useEffect, useState } from 'react';
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
`,ce=()=>{const[s,i]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{description:"This is a description for the tile radio option",id:"radio-tile",isChecked:s,label:"Tile Radio",value:"option-tile",variant:"tile",onClick:()=>i(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Radio ",s?"is selected":"is not selected"]})]})};ce.__docgenInfo={description:"",methods:[],displayName:"RadioTile"};const xe=`import { useState } from 'react';
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
`,le=()=>{const[s,i]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{description:"This tile radio option is disabled",id:"radio-tile-disabled",isChecked:s,isDisabled:!0,label:"Disabled Tile Radio",value:"option-tile-disabled",variant:"tile",onClick:()=>i(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Radio ",s?"is selected":"is not selected"]})]})};le.__docgenInfo={description:"",methods:[],displayName:"RadioTileDisabled"};const ke=`import { useState } from 'react';
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
`,pe=()=>{const[s,i]=t.useState(!0);return t.useEffect(()=>{i(!0)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{description:"This tile radio option is selected",id:"radio-tile-selected",isChecked:s,label:"Selected Tile Radio",value:"option-tile-selected",variant:"tile",onClick:()=>i(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Radio ",s?"is selected":"is not selected"]})]})};pe.__docgenInfo={description:"",methods:[],displayName:"RadioTileSelected"};const fe=`import { useEffect, useState } from 'react';
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
`,ue=()=>{const[s,i]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{description:"This is a helpful description that provides additional context about this radio option.",id:"radio-with-description",isChecked:s,label:"Radio option with description",value:"option-with-description",onClick:()=>i(!s)}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Radio ",s?"is selected":"is not selected"]})]})};ue.__docgenInfo={description:"",methods:[],displayName:"RadioWithDescription"};const ge=`import { useState } from 'react';
import { Radio } from '../src/Radio';

export const RadioWithDescription = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <Radio
        description="This is a helpful description that provides additional context about this radio option."
        id="radio-with-description"
        isChecked={isChecked}
        label="Radio option with description"
        value="option-with-description"
        onClick={() => setIsChecked(!isChecked)}
      />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};
`,Ke={title:"Inputs & Forms/Radio",component:o,parameters:{},argTypes:{isChecked:{control:"boolean"},isDisabled:{control:"boolean"},variant:{control:"radio",options:["default","tile"]}},decorators:[s=>e.jsx(me,{defaultValue:"option-1",children:e.jsx(s,{})})],tags:["autodocs"]},a={args:{label:"Radio option",id:"radio-playground",value:"option-playground"},tags:["!autodocs"]},d={render:()=>e.jsx(ae,{}),args:{label:"Radio option",id:"radio-1",value:"option-1"},parameters:{docs:{source:{code:he,language:"tsx"}}}},r={render:()=>e.jsx(ne,{}),args:{label:"Selected radio",id:"radio-2",value:"option-2",isChecked:!0},parameters:{docs:{source:{code:Re,language:"tsx"}}}},n={render:()=>e.jsx(de,{}),args:{label:"Disabled radio",id:"radio-3",value:"option-3",isDisabled:!0},parameters:{docs:{source:{code:be,language:"tsx"}}}},c={render:()=>e.jsx(re,{}),args:{label:"Disabled selected radio",id:"radio-4",value:"option-4",isChecked:!0,isDisabled:!0},parameters:{docs:{source:{code:Ce,language:"tsx"}}}},l={render:()=>e.jsx(ce,{}),args:{label:"Tile Radio",description:"This is a description for the tile radio option",id:"radio-tile",value:"option-tile",variant:"tile"},parameters:{docs:{source:{code:xe,language:"tsx"}}}},p={render:()=>e.jsx(pe,{}),args:{label:"Selected Tile Radio",description:"This tile radio option is selected",id:"radio-tile-selected",value:"option-tile-selected",variant:"tile",isChecked:!0},parameters:{docs:{source:{code:fe,language:"tsx"}}}},u={render:()=>e.jsx(le,{}),args:{label:"Disabled Tile Radio",description:"This tile radio option is disabled",id:"radio-tile-disabled",value:"option-tile-disabled",variant:"tile",isDisabled:!0},parameters:{docs:{source:{code:ke,language:"tsx"}}}},m={render:()=>e.jsx(ue,{}),args:{label:"Radio option with description",description:"This is a helpful description that provides additional context about this radio option.",id:"radio-with-description",value:"option-with-description"},parameters:{docs:{source:{code:ge,language:"tsx"}}}};var h,b,C,R,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Radio option',
    id: 'radio-playground',
    value: 'option-playground'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source},description:{story:`Interactive playground for the Radio component.
Use the controls to experiment with different props and states.`,...(x=(R=a.parameters)==null?void 0:R.docs)==null?void 0:x.description}}};var k,f,g,v,S;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(g=(f=d.parameters)==null?void 0:f.docs)==null?void 0:g.source},description:{story:`The default state of the Radio component.
Shows a basic radio button with a label.`,...(S=(v=d.parameters)==null?void 0:v.docs)==null?void 0:S.description}}};var D,T,y,N,I;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(y=(T=r.parameters)==null?void 0:T.docs)==null?void 0:y.source},description:{story:`Selected radio button.
Shows how a standard radio button appears when selected.`,...(I=(N=r.parameters)==null?void 0:N.docs)==null?void 0:I.description}}};var j,w,_,E,W;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(w=n.parameters)==null?void 0:w.docs)==null?void 0:_.source},description:{story:`Disabled radio button.
Demonstrates how a standard radio button appears when disabled.`,...(W=(E=n.parameters)==null?void 0:E.docs)==null?void 0:W.description}}};var P,F,O,U,V;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(O=(F=c.parameters)==null?void 0:F.docs)==null?void 0:O.source},description:{story:`Disabled and selected radio button.
Shows a radio button that is both selected and not interactive.`,...(V=(U=c.parameters)==null?void 0:U.docs)==null?void 0:V.description}}};var q,z,A,B,G;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(A=(z=l.parameters)==null?void 0:z.docs)==null?void 0:A.source},description:{story:`Radio with tile styling.
Shows a larger radio option with a title and description.`,...(G=(B=l.parameters)==null?void 0:B.docs)==null?void 0:G.description}}};var H,J,K,L,M;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:`Selected tile radio.
Demonstrates how a tile radio option appears when selected.`,...(M=(L=p.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};var Q,X,Y,Z,$;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`Disabled tile radio.
Shows how a tile radio option appears when it's not interactive.`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,se,ie,te,oe;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <RadioWithDescription />,
  args: {
    label: 'Radio option with description',
    description: 'This is a helpful description that provides additional context about this radio option.',
    id: 'radio-with-description',
    value: 'option-with-description'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithDescription,
        language: 'tsx'
      }
    }
  }
}`,...(ie=(se=m.parameters)==null?void 0:se.docs)==null?void 0:ie.source},description:{story:`Radio with description in default variant.
Shows a standard radio button with a description below the label.`,...(oe=(te=m.parameters)==null?void 0:te.docs)==null?void 0:oe.description}}};const Le=["Playground","Default","Selected","Disabled","DisabledSelected","Tile","TileSelected","TileDisabled","WithDescription"];export{d as Default,n as Disabled,c as DisabledSelected,a as Playground,r as Selected,l as Tile,u as TileDisabled,p as TileSelected,m as WithDescription,Le as __namedExportsOrder,Ke as default};
