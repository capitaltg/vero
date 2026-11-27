import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{B as e}from"./Button-DJBoR_IJ.js";const yt=()=>t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("p",{className:"text-sm text-muted-foreground",children:"Normal state:"}),t.jsx(e,{variant:"primary",children:"Take this action"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("p",{className:"text-sm text-muted-foreground",children:"Loading state (width preserved):"}),t.jsx(e,{isLoading:!0,variant:"primary",children:"Take this action"})]})]});yt.__docgenInfo={description:"",methods:[],displayName:"ButtonLoadingComparison"};const jt=`import { Button } from '../src/Button';

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
`,St=()=>t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(e,{isLoading:!0,size:"sm",children:"Small Loading"}),t.jsx(e,{isLoading:!0,size:"default",children:"Default Loading"}),t.jsx(e,{isLoading:!0,size:"lg",children:"Large Loading"})]});St.__docgenInfo={description:"",methods:[],displayName:"ButtonLoadingSizes"};const Dt=`import { Button } from '../src/Button';

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
`,bt=()=>t.jsxs("div",{className:"flex flex-wrap gap-4",children:[t.jsx(e,{isLoading:!0,variant:"default",children:"Default Loading"}),t.jsx(e,{isLoading:!0,variant:"primary",children:"Primary Loading"}),t.jsx(e,{isLoading:!0,variant:"danger",children:"Danger Loading"}),t.jsx(e,{isLoading:!0,variant:"link",children:"Link Loading"}),t.jsx(e,{isLoading:!0,variant:"input",children:"Input Loading"}),t.jsx(e,{isLoading:!0,variant:"ghost",children:"Ghost Loading"})]});bt.__docgenInfo={description:"",methods:[],displayName:"ButtonLoadingVariants"};const Nt=`import { Button } from '../src/Button';

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
`,zt=()=>t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(e,{size:"sm",children:"Small Button"}),t.jsx(e,{size:"default",children:"Default Button"}),t.jsx(e,{size:"lg",children:"Large Button"})]});zt.__docgenInfo={description:"",methods:[],displayName:"ButtonSizes"};const kt=`import { Button } from '../src/Button';

export const ButtonSizes = () => (
  <div className="flex items-center gap-4">
    <Button size="sm">Small Button</Button>
    <Button size="default">Default Button</Button>
    <Button size="lg">Large Button</Button>
  </div>
);
`,wt={title:"Actions & Navigation/Button",component:e,parameters:{},argTypes:{variant:{control:"select",options:["default","primary","danger","link","input","ghost"]},size:{options:["default","sm","lg"],control:"radio"},className:{type:"string",description:"Additional class names to apply to the button"},isLoading:{type:"boolean",control:"boolean"}}},s={args:{children:"Button",variant:"default"}},n={args:{children:"Default Button",variant:"default"}},o={args:{children:"Primary Button",variant:"primary"}},r={args:{children:"Danger Button",variant:"danger"}},i={args:{children:"Link Button",variant:"link"}},d={args:{children:"Input Button",variant:"input"}},c={args:{children:"Ghost Button",variant:"ghost"}},u={args:{children:"Disabled Button",isDisabled:!0}},p={render:a=>t.jsx(zt,{...a}),parameters:{docs:{source:{code:kt,language:"tsx"}}}},l={render:a=>t.jsx(yt,{...a}),parameters:{docs:{source:{code:jt,language:"tsx"}}}},g={render:a=>t.jsx(bt,{...a}),parameters:{docs:{source:{code:Nt,language:"tsx"}}}},m={render:a=>t.jsx(St,{...a}),parameters:{docs:{source:{code:Dt,language:"tsx"}}}};var h,B,L,f,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'default'
  }
}`,...(L=(B=s.parameters)==null?void 0:B.docs)==null?void 0:L.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.description}}};var v,y,S,b,z;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Default Button',
    variant: 'default'
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source},description:{story:`The default button style.
This is the main call-to-action button style used throughout the application.`,...(z=(b=n.parameters)==null?void 0:b.docs)==null?void 0:z.description}}};var j,D,N,k,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
}`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.source},description:{story:`The primary button style.
This is the main call-to-action button style used throughout the application.`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.description}}};var T,C,_,P,I;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Danger Button',
    variant: 'danger'
  }
}`,...(_=(C=r.parameters)==null?void 0:C.docs)==null?void 0:_.source},description:{story:`The danger button style.
Used for dangerous or destructive actions like delete operations.`,...(I=(P=r.parameters)==null?void 0:P.docs)==null?void 0:I.description}}};var V,G,A,U,E;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Link Button',
    variant: 'link'
  }
}`,...(A=(G=i.parameters)==null?void 0:G.docs)==null?void 0:A.source},description:{story:`The link button style.
Makes the button appear as a text link.`,...(E=(U=i.parameters)==null?void 0:U.docs)==null?void 0:E.description}}};var O,M,R,q,F;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Input Button',
    variant: 'input'
  }
}`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source},description:{story:`The input button style.
Provides the appearance of being an input field. Used in forms where the button is part of the input (e.g. Autocomplete, ComboBox, etc.).`,...(F=(q=d.parameters)==null?void 0:q.docs)==null?void 0:F.description}}};var H,J,K,Q,W;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    variant: 'ghost'
  }
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:`The ghost button style.
Used for buttons that are less prominent, often used in secondary actions or to avoid visual clutter (e.g. DatePicker).`,...(W=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:W.description}}};var X,Y,Z,$,tt;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    isDisabled: true
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:`A disabled button state.
Shows how the button appears when it's not interactive.`,...(tt=($=u.parameters)==null?void 0:$.docs)==null?void 0:tt.description}}};var et,at,st,nt,ot;p.parameters={...p.parameters,docs:{...(et=p.parameters)==null?void 0:et.docs,source:{originalSource:`{
  render: args => <ButtonSizes {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeSizes,
        language: 'tsx'
      }
    }
  }
}`,...(st=(at=p.parameters)==null?void 0:at.docs)==null?void 0:st.source},description:{story:`Button sizes.
Shows the small, default, and large button sizes side by side.`,...(ot=(nt=p.parameters)==null?void 0:nt.docs)==null?void 0:ot.description}}};var rt,it,dt,ct,ut;l.parameters={...l.parameters,docs:{...(rt=l.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  render: args => <ButtonLoadingComparison {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeLoadingComparison,
        language: 'tsx'
      }
    }
  }
}`,...(dt=(it=l.parameters)==null?void 0:it.docs)==null?void 0:dt.source},description:{story:`A loading button state.
Shows a spinner instead of the button text while maintaining the same size.
The button is automatically disabled when loading.`,...(ut=(ct=l.parameters)==null?void 0:ct.docs)==null?void 0:ut.description}}};var pt,lt,gt,mt,ht;g.parameters={...g.parameters,docs:{...(pt=g.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  render: args => <ButtonLoadingVariants {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeLoadingVariants,
        language: 'tsx'
      }
    }
  }
}`,...(gt=(lt=g.parameters)==null?void 0:lt.docs)==null?void 0:gt.source},description:{story:`Loading state with different variants.
Demonstrates how the loading spinner appears across all button variants.`,...(ht=(mt=g.parameters)==null?void 0:mt.docs)==null?void 0:ht.description}}};var Bt,Lt,ft,xt,vt;m.parameters={...m.parameters,docs:{...(Bt=m.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  render: args => <ButtonLoadingSizes {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeLoadingSizes,
        language: 'tsx'
      }
    }
  }
}`,...(ft=(Lt=m.parameters)==null?void 0:Lt.docs)==null?void 0:ft.source},description:{story:`Loading state with different sizes.
Demonstrates how the loading spinner appears across all button sizes.`,...(vt=(xt=m.parameters)==null?void 0:xt.docs)==null?void 0:vt.description}}};const Tt=["Playground","Default","Primary","Danger","Link","Input","Ghost","Disabled","Sizes","Loading","LoadingVariants","LoadingSizes"],Pt=Object.freeze(Object.defineProperty({__proto__:null,Danger:r,Default:n,Disabled:u,Ghost:c,Input:d,Link:i,Loading:l,LoadingSizes:m,LoadingVariants:g,Playground:s,Primary:o,Sizes:p,__namedExportsOrder:Tt,default:wt},Symbol.toStringTag,{value:"Module"}));export{Pt as B,s as P};
