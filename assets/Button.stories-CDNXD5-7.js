import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{B as e}from"./Button-BwlrdoZf.js";import"./index-D4H_InIO.js";import"./useAriaDisabled-DHTVgRPt.js";import"./utils-CU3My8Oi.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";const ht=()=>t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("p",{className:"text-sm text-muted-foreground",children:"Normal state:"}),t.jsx(e,{variant:"primary",children:"Take this action"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("p",{className:"text-sm text-muted-foreground",children:"Loading state (width preserved):"}),t.jsx(e,{isLoading:!0,variant:"primary",children:"Take this action"})]})]});ht.__docgenInfo={description:"",methods:[],displayName:"ButtonLoadingComparison"};const ft=`import { Button } from '../src/Button';

export const ButtonLoadingComparison = () => (
  <div className="space-y-4">
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">Normal state:</p>
      <Button variant="primary">Take this action</Button>
    </div>
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">Loading state (width preserved):</p>
      <Button isLoading variant="primary">
        Take this action
      </Button>
    </div>
  </div>
);
`,Bt=()=>t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(e,{isLoading:!0,size:"sm",children:"Small Loading"}),t.jsx(e,{isLoading:!0,size:"default",children:"Default Loading"}),t.jsx(e,{isLoading:!0,size:"lg",children:"Large Loading"})]});Bt.__docgenInfo={description:"",methods:[],displayName:"ButtonLoadingSizes"};const vt=`import { Button } from '../src/Button';

export const ButtonLoadingSizes = () => (
  <div className="flex items-center gap-4">
    <Button isLoading size="sm">
      Small Loading
    </Button>
    <Button isLoading size="default">
      Default Loading
    </Button>
    <Button isLoading size="lg">
      Large Loading
    </Button>
  </div>
);
`,Lt=()=>t.jsxs("div",{className:"flex flex-wrap gap-4",children:[t.jsx(e,{isLoading:!0,variant:"default",children:"Default Loading"}),t.jsx(e,{isLoading:!0,variant:"primary",children:"Primary Loading"}),t.jsx(e,{isLoading:!0,variant:"danger",children:"Danger Loading"}),t.jsx(e,{isLoading:!0,variant:"link",children:"Link Loading"}),t.jsx(e,{isLoading:!0,variant:"input",children:"Input Loading"}),t.jsx(e,{isLoading:!0,variant:"ghost",children:"Ghost Loading"})]});Lt.__docgenInfo={description:"",methods:[],displayName:"ButtonLoadingVariants"};const yt=`import { Button } from '../src/Button';

export const ButtonLoadingVariants = () => (
  <div className="flex flex-wrap gap-4">
    <Button isLoading variant="default">
      Default Loading
    </Button>
    <Button isLoading variant="primary">
      Primary Loading
    </Button>
    <Button isLoading variant="danger">
      Danger Loading
    </Button>
    <Button isLoading variant="link">
      Link Loading
    </Button>
    <Button isLoading variant="input">
      Input Loading
    </Button>
    <Button isLoading variant="ghost">
      Ghost Loading
    </Button>
  </div>
);
`,xt=()=>t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(e,{size:"sm",children:"Small Button"}),t.jsx(e,{size:"default",children:"Default Button"}),t.jsx(e,{size:"lg",children:"Large Button"})]});xt.__docgenInfo={description:"",methods:[],displayName:"ButtonSizes"};const bt=`import { Button } from '../src/Button';

export const ButtonSizes = () => (
  <div className="flex items-center gap-4">
    <Button size="sm">Small Button</Button>
    <Button size="default">Default Button</Button>
    <Button size="lg">Large Button</Button>
  </div>
);
`,Pt={title:"Actions & Navigation/Button",component:e,parameters:{},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","danger","link","input","ghost"],description:"The visual style variant of the button"},size:{options:["default","sm","lg"],control:"radio",description:"The size of the button"},className:{type:"string",description:"Additional class names to apply to the button"},isLoading:{type:"boolean",description:"Shows a loading spinner instead of the button text",control:"boolean"}}},s={args:{children:"Default Button",variant:"default"}},n={args:{children:"Primary Button",variant:"primary"}},o={args:{children:"Danger Button",variant:"danger"}},r={args:{children:"Link Button",variant:"link"}},i={args:{children:"Input Button",variant:"input"}},d={args:{children:"Ghost Button",variant:"ghost"}},c={args:{children:"Disabled Button",isDisabled:!0}},u={render:a=>t.jsx(xt,{...a}),parameters:{docs:{source:{code:bt,language:"tsx"}}}},p={render:a=>t.jsx(ht,{...a}),parameters:{docs:{source:{code:ft,language:"tsx"}}}},l={render:a=>t.jsx(Lt,{...a}),parameters:{docs:{source:{code:yt,language:"tsx"}}}},g={render:a=>t.jsx(Bt,{...a}),parameters:{docs:{source:{code:vt,language:"tsx"}}}};var m,h,B,L,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Default Button',
    variant: 'default'
  }
}`,...(B=(h=s.parameters)==null?void 0:h.docs)==null?void 0:B.source},description:{story:`The default button style.
This is the main call-to-action button style used throughout the application.`,...(x=(L=s.parameters)==null?void 0:L.docs)==null?void 0:x.description}}};var f,v,y,b,z;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:`The primary button style.
This is the main call-to-action button style used throughout the application.`,...(z=(b=n.parameters)==null?void 0:b.docs)==null?void 0:z.description}}};var S,j,D,N,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Danger Button',
    variant: 'danger'
  }
}`,...(D=(j=o.parameters)==null?void 0:j.docs)==null?void 0:D.source},description:{story:`The danger button style.
Used for dangerous or destructive actions like delete operations.`,...(k=(N=o.parameters)==null?void 0:N.docs)==null?void 0:k.description}}};var w,T,C,I,_;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Link Button',
    variant: 'link'
  }
}`,...(C=(T=r.parameters)==null?void 0:T.docs)==null?void 0:C.source},description:{story:`The link button style.
Makes the button appear as a text link.`,...(_=(I=r.parameters)==null?void 0:I.docs)==null?void 0:_.description}}};var P,V,G,A,U;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Input Button',
    variant: 'input'
  }
}`,...(G=(V=i.parameters)==null?void 0:V.docs)==null?void 0:G.source},description:{story:`The input button style.
Provides the appearance of being an input field. Used in forms where the button is part of the input (e.g. Autocomplete, ComboBox, etc.).`,...(U=(A=i.parameters)==null?void 0:A.docs)==null?void 0:U.description}}};var E,M,O,R,q;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    variant: 'ghost'
  }
}`,...(O=(M=d.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:`The ghost button style.
Used for buttons that are less prominent, often used in secondary actions or to avoid visual clutter (e.g. DatePicker).`,...(q=(R=d.parameters)==null?void 0:R.docs)==null?void 0:q.description}}};var F,H,J,K,Q;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    isDisabled: true
  }
}`,...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.source},description:{story:`A disabled button state.
Shows how the button appears when it's not interactive.`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var W,X,Y,Z,$;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <ButtonSizes {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeSizes,
        language: 'tsx'
      }
    }
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`Button sizes.
Shows the small, default, and large button sizes side by side.`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var tt,et,at,st,nt;p.parameters={...p.parameters,docs:{...(tt=p.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  render: args => <ButtonLoadingComparison {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeLoadingComparison,
        language: 'tsx'
      }
    }
  }
}`,...(at=(et=p.parameters)==null?void 0:et.docs)==null?void 0:at.source},description:{story:`A loading button state.
Shows a spinner instead of the button text while maintaining the same size.
The button is automatically disabled when loading.`,...(nt=(st=p.parameters)==null?void 0:st.docs)==null?void 0:nt.description}}};var ot,rt,it,dt,ct;l.parameters={...l.parameters,docs:{...(ot=l.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  render: args => <ButtonLoadingVariants {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeLoadingVariants,
        language: 'tsx'
      }
    }
  }
}`,...(it=(rt=l.parameters)==null?void 0:rt.docs)==null?void 0:it.source},description:{story:`Loading state with different variants.
Demonstrates how the loading spinner appears across all button variants.`,...(ct=(dt=l.parameters)==null?void 0:dt.docs)==null?void 0:ct.description}}};var ut,pt,lt,gt,mt;g.parameters={...g.parameters,docs:{...(ut=g.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  render: args => <ButtonLoadingSizes {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeLoadingSizes,
        language: 'tsx'
      }
    }
  }
}`,...(lt=(pt=g.parameters)==null?void 0:pt.docs)==null?void 0:lt.source},description:{story:`Loading state with different sizes.
Demonstrates how the loading spinner appears across all button sizes.`,...(mt=(gt=g.parameters)==null?void 0:gt.docs)==null?void 0:mt.description}}};const Vt=["Default","Primary","Danger","Link","Input","Ghost","Disabled","Sizes","Loading","LoadingVariants","LoadingSizes"];export{o as Danger,s as Default,c as Disabled,d as Ghost,i as Input,r as Link,p as Loading,g as LoadingSizes,l as LoadingVariants,n as Primary,u as Sizes,Vt as __namedExportsOrder,Pt as default};
