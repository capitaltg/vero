import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as a}from"./RadioGroup-Ds7RXpS4.js";import{r as n}from"./index-D4H_InIO.js";import"./utils-CU3My8Oi.js";import"./Radio-DqMIdpeo.js";import"./constants-CVEkm9yF.js";import"./styles-BasBkTzl.js";import"./index-NE6MC3wq.js";import"./Label-DsEYheYn.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-DB-GfMvg.js";import"./index-DQwFizlT.js";import"./index-Ak5Mws-w.js";import"./index-DAnQV6hb.js";import"./index-YtIeenAn.js";import"./index-DDORxvzF.js";import"./index-DXU_LAI1.js";import"./index-DLaBReRc.js";import"./createLucideIcon-CRH11QI6.js";const Re=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],de=()=>{const[o,t]=n.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:Re,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};de.__docgenInfo={description:"",methods:[],displayName:"RadioGroupDefault"};const Ge=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],me=()=>{const[o,t]=n.useState("option2");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:Ge,value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};me.__docgenInfo={description:"",methods:[],displayName:"RadioGroupWithSelection"};const ye=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],ve=()=>{const[o,t]=n.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:ye,orientation:"horizontal",value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};ve.__docgenInfo={description:"",methods:[],displayName:"RadioGroupHorizontal"};const Ce=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],ge=()=>{const[o,t]=n.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:Ce,orientation:"vertical",value:o,onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};ge.__docgenInfo={description:"",methods:[],displayName:"RadioGroupVertical"};const Ne=[{value:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{value:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{value:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],he=()=>{const[o,t]=n.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:Ne,value:o,variant:"tile",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};he.__docgenInfo={description:"",methods:[],displayName:"RadioGroupTile"};const Ve=[{value:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{value:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{value:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],fe=()=>{const[o,t]=n.useState("business");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:Ve,value:o,variant:"tile",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};fe.__docgenInfo={description:"",methods:[],displayName:"RadioGroupTileWithSelection"};const je=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],xe=()=>{const[o,t]=n.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:je,orientation:"horizontal",value:o,variant:"button",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};xe.__docgenInfo={description:"",methods:[],displayName:"RadioGroupButton"};const we=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],be=()=>{const[o,t]=n.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:we,orientation:"vertical",value:o,variant:"button",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};be.__docgenInfo={description:"",methods:[],displayName:"RadioGroupButtonVertical"};const Be=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Se=()=>{const[o,t]=n.useState("option2");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{options:Be,value:o,variant:"button",onChange:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected value: ",o||"none"]})]})};Se.__docgenInfo={description:"",methods:[],displayName:"RadioGroupButtonWithSelection"};const ze=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const RadioGroupDefault = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <RadioGroup options={defaultOptions} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,We=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const RadioGroupWithSelection = () => {
  const [value, setValue] = useState('option2');
  return (
    <div className="space-y-4">
      <RadioGroup options={defaultOptions} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,_e=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const RadioGroupHorizontal = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <RadioGroup
        options={defaultOptions}
        orientation="horizontal"
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,Te=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const RadioGroupVertical = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <RadioGroup
        options={defaultOptions}
        orientation="vertical"
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,De=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const tileOptions = [
  {
    value: 'startup',
    label: 'Startup',
    description: 'Perfect for new businesses and small teams',
  },
  {
    value: 'business',
    label: 'Business',
    description: 'For medium-sized businesses and growing teams',
  },
  {
    value: 'enterprise',
    label: 'Enterprise',
    description: 'For large organizations and enterprise teams',
  },
];

export const RadioGroupTile = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <RadioGroup options={tileOptions} value={value} variant="tile" onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,Fe=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const tileOptions = [
  {
    value: 'startup',
    label: 'Startup',
    description: 'Perfect for new businesses and small teams',
  },
  {
    value: 'business',
    label: 'Business',
    description: 'For medium-sized businesses and growing teams',
  },
  {
    value: 'enterprise',
    label: 'Enterprise',
    description: 'For large organizations and enterprise teams',
  },
];

export const RadioGroupTileWithSelection = () => {
  const [value, setValue] = useState('business');
  return (
    <div className="space-y-4">
      <RadioGroup options={tileOptions} value={value} variant="tile" onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,Ie=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const RadioGroupButton = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <RadioGroup
        options={defaultOptions}
        orientation="horizontal"
        value={value}
        variant="button"
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,$e=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const RadioGroupButtonVertical = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <RadioGroup
        options={defaultOptions}
        orientation="vertical"
        value={value}
        variant="button"
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,Ee=`import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const RadioGroupButtonWithSelection = () => {
  const [value, setValue] = useState('option2');
  return (
    <div className="space-y-4">
      <RadioGroup options={defaultOptions} value={value} variant="button" onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
`,po={title:"Inputs & Forms/RadioGroup",component:a,parameters:{},argTypes:{value:{control:"text",description:"Currently selected value",type:{name:"string",required:!1}},onChange:{description:"Callback when selection changes",type:{name:"function",required:!0},action:"selection changed"},options:{control:"object",description:"Array of radio options",type:{name:"array",value:{name:"object",value:{}},required:!0}},orientation:{control:"radio",options:["horizontal","vertical"],description:"Layout orientation of the radio group (only applies to default and button variants)",type:{name:"string",required:!1},table:{type:{summary:"horizontal | vertical"}}},variant:{control:"radio",options:["default","tile","button"],description:"Visual variant of radio buttons",type:{name:"string",required:!1},table:{type:{summary:"default | tile | button"}}}},tags:["autodocs"]},s=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Oe=[{value:"startup",label:"Startup",description:"Perfect for new businesses and small teams"},{value:"business",label:"Business",description:"For medium-sized businesses and growing teams"},{value:"enterprise",label:"Enterprise",description:"For large organizations and enterprise teams"}],r={args:{options:s,value:"",onChange:()=>{}},tags:["!autodocs"]},i={render:()=>e.jsx(de,{}),args:{options:s,value:"",onChange:()=>{}},parameters:{docs:{source:{code:ze,language:"tsx"}}}},l={render:()=>e.jsx(me,{}),args:{options:s,value:"option2",onChange:()=>{}},parameters:{docs:{source:{code:We,language:"tsx"}}}},u={render:()=>e.jsx(ve,{}),args:{options:s,value:"",onChange:()=>{},orientation:"horizontal"},parameters:{docs:{source:{code:_e,language:"tsx"}}}},p={render:()=>e.jsx(ge,{}),args:{options:s,value:"",onChange:()=>{},orientation:"vertical"},parameters:{docs:{source:{code:Te,language:"tsx"}}}},c={render:()=>e.jsx(he,{}),args:{options:Oe,value:"",onChange:()=>{},variant:"tile"},parameters:{docs:{source:{code:De,language:"tsx"}}}},d={render:()=>e.jsx(fe,{}),args:{options:Oe,value:"business",onChange:()=>{},variant:"tile"},parameters:{docs:{source:{code:Fe,language:"tsx"}}}},m={render:()=>e.jsx(xe,{}),args:{options:s,value:"",onChange:()=>{},variant:"button",orientation:"horizontal"},parameters:{docs:{source:{code:Ie,language:"tsx"}}}},v={render:()=>e.jsx(be,{}),args:{options:s,value:"",onChange:()=>{},variant:"button",orientation:"vertical"},parameters:{docs:{source:{code:$e,language:"tsx"}}}},g={render:()=>e.jsx(Se,{}),args:{options:s,value:"option2",onChange:()=>{},variant:"button"},parameters:{docs:{source:{code:Ee,language:"tsx"}}}};var h,f,x,b,S;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {}
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:`Interactive playground for the RadioGroup component.
Use the controls to experiment with different props and states.`,...(S=(b=r.parameters)==null?void 0:b.docs)==null?void 0:S.description}}};var O,R,G,y,C;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <RadioGroupDefault />,
  args: {
    options: defaultOptions,
    value: '',
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
}`,...(G=(R=i.parameters)==null?void 0:R.docs)==null?void 0:G.source},description:{story:`The default state of the RadioGroup component.
Shows a basic vertical radio group with no initial selection.`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.description}}};var N,V,j,w,B;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <RadioGroupWithSelection />,
  args: {
    options: defaultOptions,
    value: 'option2',
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
}`,...(j=(V=l.parameters)==null?void 0:V.docs)==null?void 0:j.source},description:{story:`RadioGroup with a pre-selected value.
Demonstrates how the group appears with an initial selection.`,...(B=(w=l.parameters)==null?void 0:w.docs)==null?void 0:B.description}}};var z,W,_,T,D;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <RadioGroupHorizontal />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    orientation: 'horizontal'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeHorizontal,
        language: 'tsx'
      }
    }
  }
}`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source},description:{story:`RadioGroup with horizontal layout.
Shows radio options arranged in a horizontal line.`,...(D=(T=u.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var F,I,$,E,H;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <RadioGroupVertical />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    orientation: 'vertical'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeVertical,
        language: 'tsx'
      }
    }
  }
}`,...($=(I=p.parameters)==null?void 0:I.docs)==null?void 0:$.source},description:{story:`RadioGroup with vertical layout.
Shows radio options stacked vertically.`,...(H=(E=p.parameters)==null?void 0:E.docs)==null?void 0:H.description}}};var P,q,k,A,L;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <RadioGroupTile />,
  args: {
    options: tileOptions,
    value: '',
    onChange: () => {},
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
}`,...(k=(q=c.parameters)==null?void 0:q.docs)==null?void 0:k.source},description:{story:`RadioGroup with tile variant.
Shows radio options as larger tiles with descriptions.`,...(L=(A=c.parameters)==null?void 0:A.docs)==null?void 0:L.description}}};var U,J,K,M,Q;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <RadioGroupTileWithSelection />,
  args: {
    options: tileOptions,
    value: 'business',
    onChange: () => {},
    variant: 'tile'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeTileWithSelection,
        language: 'tsx'
      }
    }
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:`Tile variant RadioGroup with a pre-selected value.
Demonstrates how tile radio options appear with an initial selection.`,...(Q=(M=d.parameters)==null?void 0:M.docs)==null?void 0:Q.description}}};var X,Y,Z,ee,oe;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <RadioGroupButton />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    variant: 'button',
    orientation: 'horizontal'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeButton,
        language: 'tsx'
      }
    }
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:`RadioGroup with button variant.
Shows radio options styled as buttons.`,...(oe=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:oe.description}}};var te,ae,ne,se,re;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <RadioGroupButtonVertical />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    variant: 'button',
    orientation: 'vertical'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeButtonVertical,
        language: 'tsx'
      }
    }
  }
}`,...(ne=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:ne.source},description:{story:`Button variant RadioGroup with vertical layout.
Shows radio options styled as buttons arranged vertically.`,...(re=(se=v.parameters)==null?void 0:se.docs)==null?void 0:re.description}}};var ie,le,ue,pe,ce;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <RadioGroupButtonWithSelection />,
  args: {
    options: defaultOptions,
    value: 'option2',
    onChange: () => {},
    variant: 'button'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeButtonWithSelection,
        language: 'tsx'
      }
    }
  }
}`,...(ue=(le=g.parameters)==null?void 0:le.docs)==null?void 0:ue.source},description:{story:`Button variant RadioGroup with a pre-selected value.
Demonstrates how button radio options appear with an initial selection.`,...(ce=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:ce.description}}};const co=["Playground","Default","WithSelection","Horizontal","Vertical","Tile","TileWithSelection","Button","ButtonVertical","ButtonWithSelection"];export{m as Button,v as ButtonVertical,g as ButtonWithSelection,i as Default,u as Horizontal,r as Playground,c as Tile,d as TileWithSelection,p as Vertical,l as WithSelection,co as __namedExportsOrder,po as default};
