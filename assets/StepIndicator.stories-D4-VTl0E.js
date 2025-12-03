import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{S as X}from"./StepIndicator-D8lCUCPl.js";import{r as te}from"./index-D4H_InIO.js";import{B as f}from"./Button-Dp8g_T52.js";import"./utils-CU3My8Oi.js";import"./index-NE6MC3wq.js";import"./check-CT0OM3mY.js";import"./createLucideIcon-CRH11QI6.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-CVEkm9yF.js";import"./styles-BasBkTzl.js";const e=[{id:"account",label:"Account",description:"Create your account"},{id:"profile",label:"Profile",description:"Complete your profile"},{id:"review",label:"Review",description:"Review your information"},{id:"complete",label:"Complete",description:"Registration completed"}],Y=()=>{const[l,u]=te.useState("profile"),Z=()=>{const t=e.findIndex(m=>m.id===l);t>0&&u(e[t-1].id)},ee=()=>{const t=e.findIndex(m=>m.id===l);t<e.length-1&&u(e[t+1].id)},S=e.findIndex(t=>t.id===l);return r.jsxs("div",{className:"space-y-8",children:[r.jsx(X,{currentStep:l,steps:e}),r.jsxs("div",{className:"flex gap-4",children:[r.jsx(f,{isDisabled:S===0,variant:"default",onClick:Z,children:"Previous"}),r.jsx(f,{isDisabled:S===e.length-1,variant:"primary",onClick:ee,children:"Next"})]})]})};Y.__docgenInfo={description:"",methods:[],displayName:"StepIndicatorInteractive"};const re=`import { useState } from 'react';
import { Button } from '../../Button';
import { StepIndicator } from '../src/StepIndicator';
import type { StepIdFromSteps } from '../types';

const steps = [
  {
    id: 'account',
    label: 'Account',
    description: 'Create your account',
  },
  {
    id: 'profile',
    label: 'Profile',
    description: 'Complete your profile',
  },
  {
    id: 'review',
    label: 'Review',
    description: 'Review your information',
  },
  {
    id: 'complete',
    label: 'Complete',
    description: 'Registration completed',
  },
] as const;

export const StepIndicatorInteractive = () => {
  const [currentStep, setCurrentStep] = useState<StepIdFromSteps<typeof steps>>('profile');

  const handlePrevious = () => {
    const currentIndex = steps.findIndex(s => s.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    const currentIndex = steps.findIndex(s => s.id === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id);
    }
  };

  const currentIndex = steps.findIndex(s => s.id === currentStep);

  return (
    <div className="space-y-8">
      <StepIndicator currentStep={currentStep} steps={steps} />
      <div className="flex gap-4">
        <Button isDisabled={currentIndex === 0} variant="default" onClick={handlePrevious}>
          Previous
        </Button>
        <Button
          isDisabled={currentIndex === steps.length - 1}
          variant="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
`,s=[{id:"account",label:"Account",description:"Create your account"},{id:"profile",label:"Profile",description:"Complete your profile"},{id:"review",label:"Review",description:"Review your information"},{id:"complete",label:"Complete",description:"Registration completed"}],ge={title:"Actions & Navigation/StepIndicator",component:X,parameters:{},tags:["autodocs"]},o={render:()=>r.jsx(Y,{}),args:{steps:s,currentStep:"profile"},parameters:{docs:{source:{code:re,language:"tsx"}}}},n={args:{steps:s,currentStep:"profile"}},i={args:{steps:s,currentStep:"profile",size:"sm"}},a={args:{steps:s,currentStep:"profile",size:"lg"}},c={args:{steps:s,currentStep:"review",orientation:"vertical"}},p={args:{steps:s,currentStep:"complete",showCurrentAsCompleted:!0}},d={args:{steps:[{id:"cart",label:"Cart"},{id:"delivery",label:"Delivery"},{id:"payment",label:"Payment"}],currentStep:"delivery"}};var g,v,I,x,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <StepIndicatorInteractive />,
  args: {
    steps,
    currentStep: 'profile'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCode,
        language: 'tsx'
      }
    }
  }
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source},description:{story:`Interactive demo of the StepIndicator component.
Shows how the component updates as users progress through steps.`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};var h,C,b,w,N;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'profile'
  }
}`,...(b=(C=n.parameters)==null?void 0:C.docs)==null?void 0:b.source},description:{story:"The default horizontal layout of the StepIndicator.",...(N=(w=n.parameters)==null?void 0:w.docs)==null?void 0:N.description}}};var P,R,j,B,D;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'profile',
    size: 'sm'
  }
}`,...(j=(R=i.parameters)==null?void 0:R.docs)==null?void 0:j.source},description:{story:"Small size variant of the StepIndicator.",...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};var z,A,k,_,E;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'profile',
    size: 'lg'
  }
}`,...(k=(A=a.parameters)==null?void 0:A.docs)==null?void 0:k.source},description:{story:"Large size variant of the StepIndicator.",...(E=(_=a.parameters)==null?void 0:_.docs)==null?void 0:E.description}}};var L,V,F,O,T;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'review',
    orientation: 'vertical'
  }
}`,...(F=(V=c.parameters)==null?void 0:V.docs)==null?void 0:F.source},description:{story:"Vertical layout of the StepIndicator.",...(T=(O=c.parameters)==null?void 0:O.docs)==null?void 0:T.description}}};var U,$,q,G,H;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'complete',
    showCurrentAsCompleted: true
  }
}`,...(q=($=p.parameters)==null?void 0:$.docs)==null?void 0:q.source},description:{story:`StepIndicator with all steps completed.
Uses showCurrentAsCompleted to mark the final step as completed.`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var J,K,M,Q,W;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'cart',
      label: 'Cart'
    }, {
      id: 'delivery',
      label: 'Delivery'
    }, {
      id: 'payment',
      label: 'Payment'
    }] as const,
    currentStep: 'delivery'
  }
}`,...(M=(K=d.parameters)==null?void 0:K.docs)==null?void 0:M.source},description:{story:"StepIndicator with simple steps (no descriptions).",...(W=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:W.description}}};const ve=["Interactive","Default","Small","Large","Vertical","Completed","SimpleSteps"];export{p as Completed,n as Default,o as Interactive,a as Large,d as SimpleSteps,i as Small,c as Vertical,ve as __namedExportsOrder,ge as default};
