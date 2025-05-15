import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as te}from"./index-D4H_InIO.js";import{c as a}from"./utils-CytzSlOG.js";import{C as oe}from"./check-CLInojLm.js";import{B as y}from"./Button-Bmp-CLuG.js";import"./createLucideIcon-B89bYmoG.js";import"./index-BekKX9Q6.js";import"./styles-Dlcbwdhh.js";import"./index-BwobEAja.js";const S=te.forwardRef(({steps:s,currentStep:o,orientation:r="horizontal",size:n="default",className:ae},se)=>{const c={sm:{container:"gap-4",circle:"h-6 w-6 text-xs",connector:{horizontal:"h-[2px] w-[calc(100%_-_1.5rem)] left-[calc(50%_+_1.25rem)] top-3",vertical:"h-full w-0.5 left-[0.6875rem] top-[1.25rem]"},text:"text-sm"},default:{container:"gap-6",circle:"h-8 w-8 text-sm",connector:{horizontal:"h-[3px] w-[calc(100%_-_1.5rem)] left-[calc(50%_+_1.5rem)] top-[calc(1rem_-_1px)]",vertical:"h-full w-[3px] left-[0.9375rem] top-[1.75rem]"},text:"text-base"},lg:{container:"gap-8",circle:"h-10 w-10 text-base",connector:{horizontal:"h-[4px] w-[calc(100%_-_1.5rem)] left-[calc(50%_+_1.75rem)] top-[calc(1.25rem_-_1px)]",vertical:"h-full w-[4px] left-[1.125rem] top-[2.25rem]"},text:"text-lg"}};return e.jsx("div",{ref:se,className:a("flex",r==="vertical"?"flex-col":"flex-row",c[n].container,ae),children:s.map((x,h)=>{const g=h<o,v=h===o;return e.jsxs("div",{className:a("relative flex",r==="vertical"?"items-start":"flex-1 items-center justify-center"),children:[e.jsxs("div",{className:a("relative flex",r==="vertical"?"flex-row items-start":"flex-col items-center"),children:[e.jsx("div",{className:a("relative z-10 flex items-center justify-center rounded-full border-[3px] bg-white font-bold",c[n].circle,g?"border-primary-400 bg-primary-400 text-white":v?"border-primary-400 text-primary-400":"border-muted text-muted-foreground"),children:g?e.jsx(oe,{className:"h-4 w-4",strokeWidth:3}):e.jsx("span",{children:(h+1).toString()})}),e.jsxs("div",{className:a("flex flex-col",r==="vertical"?"ml-4":"mt-2 text-center"),children:[e.jsx("span",{className:a(c[n].text,"font-medium",v||g?"text-foreground":"text-muted-foreground"),children:x.label}),x.description?e.jsx("span",{className:a("text-sm text-muted-foreground",r==="horizontal"&&"text-center"),children:x.description}):null]})]}),h<s.length-1?e.jsx("div",{className:a("absolute bg-border",r==="vertical"?c[n].connector.vertical:c[n].connector.horizontal,g&&"bg-primary-400")}):null]},x.id)})})});S.displayName="StepIndicator";S.__docgenInfo={description:"",methods:[],displayName:"StepIndicator",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"Step"}],raw:"Step[]"},description:""},currentStep:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'default' | 'sm' | 'lg'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};const he={title:"Components/StepIndicator",component:S,parameters:{},tags:["autodocs"]},t=[{id:"1",label:"Account",description:"Create your account"},{id:"2",label:"Profile",description:"Complete your profile"},{id:"3",label:"Review",description:"Review your information"},{id:"4",label:"Complete",description:"Registration completed"}],ne=()=>{const[s,o]=te.useState(1);return e.jsxs("div",{className:"space-y-8",children:[e.jsx(S,{steps:t,currentStep:s}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(y,{variant:"default",onClick:()=>o(r=>Math.max(0,r-1)),isDisabled:s===0,children:"Previous"}),e.jsx(y,{variant:"primary",onClick:()=>o(r=>Math.min(t.length,r+1)),isDisabled:s===t.length,children:"Next"})]})]})},i={render:()=>e.jsx(ne,{}),args:{steps:t,currentStep:1}},l={args:{steps:t,currentStep:1}},p={args:{steps:t,currentStep:1,size:"sm"}},m={args:{steps:t,currentStep:1,size:"lg"}},d={args:{steps:t,currentStep:2,orientation:"vertical"}},u={args:{steps:t,currentStep:4}},f={args:{steps:[{id:"1",label:"Cart"},{id:"2",label:"Delivery"},{id:"3",label:"Payment"}],currentStep:1}};var b,w,j,_,I;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <InteractiveDemo />,
  args: {
    steps,
    currentStep: 1
  }
}`,...(j=(w=i.parameters)==null?void 0:w.docs)==null?void 0:j.source},description:{story:`Interactive demo of the StepIndicator component.
Shows how the component updates as users progress through steps.`,...(I=(_=i.parameters)==null?void 0:_.docs)==null?void 0:I.description}}};var z,C,N,D,T;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 1
  }
}`,...(N=(C=l.parameters)==null?void 0:C.docs)==null?void 0:N.source},description:{story:"The default horizontal layout of the StepIndicator.",...(T=(D=l.parameters)==null?void 0:D.docs)==null?void 0:T.description}}};var q,R,V,k,P;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 1,
    size: 'sm'
  }
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source},description:{story:"Small size variant of the StepIndicator.",...(P=(k=p.parameters)==null?void 0:k.docs)==null?void 0:P.description}}};var E,L,A,B,M;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 1,
    size: 'lg'
  }
}`,...(A=(L=m.parameters)==null?void 0:L.docs)==null?void 0:A.source},description:{story:"Large size variant of the StepIndicator.",...(M=(B=m.parameters)==null?void 0:B.docs)==null?void 0:M.description}}};var O,W,F,G,H;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 2,
    orientation: 'vertical'
  }
}`,...(F=(W=d.parameters)==null?void 0:W.docs)==null?void 0:F.source},description:{story:"Vertical layout of the StepIndicator.",...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var J,K,Q,U,X;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 4
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"StepIndicator with all steps completed.",...(X=(U=u.parameters)==null?void 0:U.docs)==null?void 0:X.description}}};var Y,Z,$,ee,re;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"StepIndicator with simple steps (no descriptions).",...(re=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};const ge=["Interactive","Default","Small","Large","Vertical","Completed","SimpleSteps"];export{u as Completed,l as Default,i as Interactive,m as Large,f as SimpleSteps,p as Small,d as Vertical,ge as __namedExportsOrder,he as default};
