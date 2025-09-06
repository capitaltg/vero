import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as ae}from"./index-D4H_InIO.js";import{B as z}from"./Button-YgMv2nag.js";import{c as a}from"./utils-l21BANrb.js";import{c as x}from"./index-DKzzznqW.js";import{C as ne}from"./check-CT0OM3mY.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-BFjZK9t2.js";import"./styles-hHSuIYOZ.js";import"./createLucideIcon-CRH11QI6.js";const le=x("flex",{variants:{orientation:{horizontal:"flex-row",vertical:"flex-col"},size:{sm:"gap-4",default:"gap-6",lg:"gap-8"}},defaultVariants:{orientation:"horizontal",size:"default"}}),ce=x("relative z-10 flex items-center justify-center rounded-full border-[3px] bg-white font-bold",{variants:{size:{sm:"h-6 w-6 text-xs",default:"h-8 w-8 text-sm",lg:"h-10 w-10 text-base"},status:{default:"border-muted text-muted-foreground",current:"border-primary-400 text-primary-400",completed:"border-primary-400 bg-primary-400 text-white"}},defaultVariants:{size:"default",status:"default"}}),pe=x("absolute bg-muted",{variants:{size:{sm:"",default:"",lg:""},orientation:{horizontal:"w-[calc(100%_-_1.5rem)]",vertical:"h-full"}},compoundVariants:[{size:"sm",orientation:"horizontal",class:"left-[calc(50%_+_1.25rem)] top-3 h-[2px]"},{size:"default",orientation:"horizontal",class:"left-[calc(50%_+_1.5rem)] top-[calc(1rem_-_1px)] h-[3px]"},{size:"lg",orientation:"horizontal",class:"left-[calc(50%_+_1.75rem)] top-[calc(1.25rem_-_1px)] h-[4px]"},{size:"sm",orientation:"vertical",class:"left-[0.6875rem] top-[1.25rem] w-0.5"},{size:"default",orientation:"vertical",class:"left-[0.9375rem] top-[1.75rem] w-[3px]"},{size:"lg",orientation:"vertical",class:"left-[1.125rem] top-[2.25rem] w-[4px]"}],defaultVariants:{orientation:"horizontal",size:"default"}}),de=x("font-medium",{variants:{size:{sm:"text-sm",default:"text-base",lg:"text-lg"}},defaultVariants:{size:"default"}}),v=ae.forwardRef(({steps:s,currentStep:o,orientation:t="horizontal",size:u="default",className:se,...oe},ie)=>e.jsx("div",{ref:ie,className:a(le({orientation:t,size:u}),se),...oe,children:s.map((f,g)=>{const h=g<o,y=g===o;let S="default";return y&&(S="current"),h&&(S="completed"),e.jsxs("div",{className:a("relative flex items-start",t==="horizontal"&&"flex-1 justify-center"),children:[e.jsxs("div",{className:a("relative flex",t==="vertical"?"flex-row items-start":"flex-col items-center"),children:[e.jsx("div",{className:a(ce({size:u,status:S})),children:h?e.jsx(ne,{className:"h-4 w-4",strokeWidth:3}):e.jsx("span",{children:(g+1).toString()})}),e.jsxs("div",{className:a("flex flex-col",t==="vertical"?"ml-4":"mt-2 text-center"),children:[e.jsx("span",{className:a(de({size:u}),y||h?"text-foreground":"text-muted-foreground"),children:f.label}),f.description?e.jsx("span",{className:a("text-sm text-muted-foreground",t==="horizontal"&&"text-center"),children:f.description}):null]})]}),g<s.length-1?e.jsx("div",{className:a(pe({size:u,orientation:t}),h&&"bg-primary-400")}):null]},f.id)})}));v.displayName="StepIndicator";v.__docgenInfo={description:"",methods:[],displayName:"StepIndicator",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"Step"}],raw:"Step[]"},description:""},currentStep:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'default' | 'sm' | 'lg'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};const je={title:"Components/StepIndicator",component:v,parameters:{},tags:["autodocs"]},r=[{id:"1",label:"Account",description:"Create your account"},{id:"2",label:"Profile",description:"Complete your profile"},{id:"3",label:"Review",description:"Review your information"},{id:"4",label:"Complete",description:"Registration completed"}],me=()=>{const[s,o]=ae.useState(1);return e.jsxs("div",{className:"space-y-8",children:[e.jsx(v,{steps:r,currentStep:s}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(z,{variant:"default",onClick:()=>o(t=>Math.max(0,t-1)),isDisabled:s===0,children:"Previous"}),e.jsx(z,{variant:"primary",onClick:()=>o(t=>Math.min(r.length,t+1)),isDisabled:s===r.length,children:"Next"})]})]})},i={render:()=>e.jsx(me,{}),args:{steps:r,currentStep:1}},n={args:{steps:r,currentStep:1}},l={args:{steps:r,currentStep:1,size:"sm"}},c={args:{steps:r,currentStep:1,size:"lg"}},p={args:{steps:r,currentStep:2,orientation:"vertical"}},d={args:{steps:r,currentStep:4}},m={args:{steps:[{id:"1",label:"Cart"},{id:"2",label:"Delivery"},{id:"3",label:"Payment"}],currentStep:1}};var b,w,I,j,C;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <InteractiveDemo />,
  args: {
    steps,
    currentStep: 1
  }
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source},description:{story:`Interactive demo of the StepIndicator component.
Shows how the component updates as users progress through steps.`,...(C=(j=i.parameters)==null?void 0:j.docs)==null?void 0:C.description}}};var _,N,V,D,T;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 1
  }
}`,...(V=(N=n.parameters)==null?void 0:N.docs)==null?void 0:V.source},description:{story:"The default horizontal layout of the StepIndicator.",...(T=(D=n.parameters)==null?void 0:D.docs)==null?void 0:T.description}}};var q,R,k,P,E;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 1,
    size: 'sm'
  }
}`,...(k=(R=l.parameters)==null?void 0:R.docs)==null?void 0:k.source},description:{story:"Small size variant of the StepIndicator.",...(E=(P=l.parameters)==null?void 0:P.docs)==null?void 0:E.description}}};var L,A,B,M,O;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 1,
    size: 'lg'
  }
}`,...(B=(A=c.parameters)==null?void 0:A.docs)==null?void 0:B.source},description:{story:"Large size variant of the StepIndicator.",...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.description}}};var W,F,G,H,J;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 2,
    orientation: 'vertical'
  }
}`,...(G=(F=p.parameters)==null?void 0:F.docs)==null?void 0:G.source},description:{story:"Vertical layout of the StepIndicator.",...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var K,Q,U,X,Y;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 4
  }
}`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source},description:{story:"StepIndicator with all steps completed.",...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,$,ee,te,re;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: '1',
      label: 'Cart'
    }, {
      id: '2',
      label: 'Delivery'
    }, {
      id: '3',
      label: 'Payment'
    }],
    currentStep: 1
  }
}`,...(ee=($=m.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"StepIndicator with simple steps (no descriptions).",...(re=(te=m.parameters)==null?void 0:te.docs)==null?void 0:re.description}}};const Ce=["Interactive","Default","Small","Large","Vertical","Completed","SimpleSteps"];export{d as Completed,n as Default,i as Interactive,c as Large,m as SimpleSteps,l as Small,p as Vertical,Ce as __namedExportsOrder,je as default};
