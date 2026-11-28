import{j as o}from"./jsx-runtime-DSvmvvsx.js";import{r as ie}from"./index-B0WjJBI_.js";import{S as se}from"./StepIndicator-BYT3rdz3.js";import{B as S}from"./Button-DJBoR_IJ.js";const e=[{id:"account",label:"Account",description:"Create your account"},{id:"profile",label:"Profile",description:"Complete your profile"},{id:"review",label:"Review",description:"Review your information"},{id:"complete",label:"Complete",description:"Registration completed"}],oe=()=>{const[s,f]=ie.useState("profile"),ne=()=>{const r=e.findIndex(m=>m.id===s);r>0&&f(e[r-1].id)},ae=()=>{const r=e.findIndex(m=>m.id===s);r<e.length-1&&f(e[r+1].id)},h=e.findIndex(r=>r.id===s);return o.jsxs("div",{className:"space-y-8",children:[o.jsx(se,{currentStep:s,steps:e}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx(S,{isDisabled:h===0,variant:"default",onClick:ne,children:"Previous"}),o.jsx(S,{isDisabled:h===e.length-1,variant:"primary",onClick:ae,children:"Next"})]})]})};oe.__docgenInfo={description:"",methods:[],displayName:"StepIndicatorInteractive"};const ce=`import { useState } from 'react';
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
`,t=[{id:"account",label:"Account",description:"Create your account"},{id:"profile",label:"Profile",description:"Complete your profile"},{id:"review",label:"Review",description:"Review your information"},{id:"complete",label:"Complete",description:"Registration completed"}],pe={title:"Actions & Navigation/StepIndicator",component:se,parameters:{},args:{currentStep:"profile",headingLevel:"h4",showCurrentAsCompleted:!1,showLabels:!0,steps:t,variant:"default"},argTypes:{variant:{control:"radio",options:["default","counter"],type:{name:"string",required:!1},table:{defaultValue:{summary:"default"},type:{summary:"default | counter"}}},currentStep:{control:"select",options:t.map(s=>s.id),type:{name:"string",required:!0}},steps:{control:"object",type:{name:"array",value:{name:"object",value:{}},required:!0}},showCurrentAsCompleted:{control:"boolean",type:{name:"boolean",required:!1},table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},headingLevel:{control:"select",options:["h1","h2","h3","h4","h5","h6"],type:{name:"string",required:!1},table:{defaultValue:{summary:"h4"},type:{summary:"h1 | h2 | h3 | h4 | h5 | h6"}}},showLabels:{control:"boolean",type:{name:"boolean",required:!1},table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}}}},n={},a={render:()=>o.jsx(oe,{}),args:{steps:t,currentStep:"profile"},parameters:{docs:{source:{code:ce,language:"tsx"}}}},i={args:{steps:t,currentStep:"profile",variant:"default"}},c={args:{steps:t,currentStep:"profile",variant:"counter"}},p={args:{steps:t,currentStep:"complete",showCurrentAsCompleted:!0}},d={args:{steps:[{id:"cart",label:"Cart"},{id:"delivery",label:"Delivery"},{id:"payment",label:"Payment"}],currentStep:"delivery"}},l={args:{steps:t,currentStep:"profile",variant:"default",showLabels:!1}},u={args:{steps:t,currentStep:"profile",variant:"default"},parameters:{viewport:{defaultViewport:"mobile2"}}};var y,v,b,g,I;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(I=(g=n.parameters)==null?void 0:g.docs)==null?void 0:I.description}}};var x,w,C,P,j;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(w=a.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:`Interactive demo of the StepIndicator component.
Shows how the component updates as users progress through steps.`,...(j=(P=a.parameters)==null?void 0:P.docs)==null?void 0:j.description}}};var N,R,A,D,L;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'profile',
    variant: 'default'
  }
}`,...(A=(R=i.parameters)==null?void 0:R.docs)==null?void 0:A.source},description:{story:`The USWDS-style default variant with header and segments.
Shows "Step X of Y" with the current step label.`,...(L=(D=i.parameters)==null?void 0:D.docs)==null?void 0:L.description}}};var k,B,_,T,V;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'profile',
    variant: 'counter'
  }
}`,...(_=(B=c.parameters)==null?void 0:B.docs)==null?void 0:_.source},description:{story:"The counter variant with numbered circles and connectors.",...(V=(T=c.parameters)==null?void 0:T.docs)==null?void 0:V.description}}};var q,E,O,M,U;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'complete',
    showCurrentAsCompleted: true
  }
}`,...(O=(E=p.parameters)==null?void 0:E.docs)==null?void 0:O.source},description:{story:`Vertical layout of the StepIndicator (counter variant only).
StepIndicator with all steps completed.
Uses showCurrentAsCompleted to mark the final step as completed.`,...(U=(M=p.parameters)==null?void 0:M.docs)==null?void 0:U.description}}};var W,F,X,Y,z;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(X=(F=d.parameters)==null?void 0:F.docs)==null?void 0:X.source},description:{story:"StepIndicator with simple steps (no descriptions).",...(z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:z.description}}};var $,G,H,J,K;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'profile',
    variant: 'default',
    showLabels: false
  }
}`,...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:`StepIndicator without labels below the segments.
Labels are hidden but still available to screen readers.`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,Z,ee,te,re;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'profile',
    variant: 'default'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2'
    }
  }
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:'On narrow viewports (below the `md` breakpoint, 768px), the default variant\nhides its segment bars and labels, leaving just the "Step X of Y" header.\nThis story opens in a mobile viewport; widen the preview to see the bars return.',...(re=(te=u.parameters)==null?void 0:te.docs)==null?void 0:re.description}}};const de=["Playground","Interactive","Default","Counter","Completed","SimpleSteps","WithoutLabels","Mobile"],he=Object.freeze(Object.defineProperty({__proto__:null,Completed:p,Counter:c,Default:i,Interactive:a,Mobile:u,Playground:n,SimpleSteps:d,WithoutLabels:l,__namedExportsOrder:de,default:pe},Symbol.toStringTag,{value:"Module"}));export{n as P,he as S};
