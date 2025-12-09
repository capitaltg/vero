import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{r as J}from"./index-D4H_InIO.js";import{B as f}from"./Button-BwlrdoZf.js";import{S as Y}from"./StepIndicator-Ue53RBJT.js";import"./useAriaDisabled-DHTVgRPt.js";import"./utils-CU3My8Oi.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";import"./check-CT0OM3mY.js";const e=[{id:"account",label:"Account",description:"Create your account"},{id:"profile",label:"Profile",description:"Complete your profile"},{id:"review",label:"Review",description:"Review your information"},{id:"complete",label:"Complete",description:"Registration completed"}],$=()=>{const[r,u]=J.useState("profile"),G=()=>{const t=e.findIndex(l=>l.id===r);t>0&&u(e[t-1].id)},H=()=>{const t=e.findIndex(l=>l.id===r);t<e.length-1&&u(e[t+1].id)},m=e.findIndex(t=>t.id===r);return o.jsxs("div",{className:"space-y-8",children:[o.jsx(Y,{currentStep:r,steps:e}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx(f,{isDisabled:m===0,variant:"default",onClick:G,children:"Previous"}),o.jsx(f,{isDisabled:m===e.length-1,variant:"primary",onClick:H,children:"Next"})]})]})};$.__docgenInfo={description:"",methods:[],displayName:"StepIndicatorInteractive"};const K=`import { useState } from 'react';
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
`,s=[{id:"account",label:"Account",description:"Create your account"},{id:"profile",label:"Profile",description:"Complete your profile"},{id:"review",label:"Review",description:"Review your information"},{id:"complete",label:"Complete",description:"Registration completed"}],de={title:"Actions & Navigation/StepIndicator",component:Y,parameters:{},tags:["autodocs"],args:{currentStep:"profile",headingLevel:"h4",showCurrentAsCompleted:!1,steps:s,variant:"default"},argTypes:{variant:{control:"radio",options:["default","counter"],description:"Visual variant of the step indicator",type:{name:"string",required:!1},table:{defaultValue:{summary:"default"},type:{summary:"default | counter"}}},currentStep:{control:"select",options:s.map(r=>r.id),description:"ID of the current step",type:{name:"string",required:!0}},steps:{control:"object",description:"Array of step objects",type:{name:"array",value:{name:"object",value:{}},required:!0}},showCurrentAsCompleted:{control:"boolean",description:"If true, the current step will be shown as completed instead of current. Useful for showing the final step as completed when the process is finished.",type:{name:"boolean",required:!1},table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},headingLevel:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"The heading level for the step indicator header. Defaults to h4.",type:{name:"string",required:!1},table:{defaultValue:{summary:"h4"},type:{summary:"h1 | h2 | h3 | h4 | h5 | h6"}}}}},n={tags:["!autodocs"]},a={render:()=>o.jsx($,{}),args:{steps:s,currentStep:"profile"},parameters:{docs:{source:{code:K,language:"tsx"}}}},i={args:{steps:s,currentStep:"profile",variant:"default"}},c={args:{steps:s,currentStep:"profile",variant:"counter"}},p={args:{steps:s,currentStep:"complete",showCurrentAsCompleted:!0}},d={args:{steps:[{id:"cart",label:"Cart"},{id:"delivery",label:"Delivery"},{id:"payment",label:"Payment"}],currentStep:"delivery"}};var h,S,y,v,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source},description:{story:`Playground - Use the controls below to customize the StepIndicator.
All props can be adjusted to see how the component responds.`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.description}}};var I,x,b,C,w;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source},description:{story:`Interactive demo of the StepIndicator component.
Shows how the component updates as users progress through steps.`,...(w=(C=a.parameters)==null?void 0:C.docs)==null?void 0:w.description}}};var P,j,A,D,N;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'profile',
    variant: 'default'
  }
}`,...(A=(j=i.parameters)==null?void 0:j.docs)==null?void 0:A.source},description:{story:`The USWDS-style default variant with header and segments.
Shows "Step X of Y" with the current step label.`,...(N=(D=i.parameters)==null?void 0:D.docs)==null?void 0:N.description}}};var R,B,k,q,V;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'profile',
    variant: 'counter'
  }
}`,...(k=(B=c.parameters)==null?void 0:B.docs)==null?void 0:k.source},description:{story:"The counter variant with numbered circles and connectors.",...(V=(q=c.parameters)==null?void 0:q.docs)==null?void 0:V.description}}};var T,U,_,E,F;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'complete',
    showCurrentAsCompleted: true
  }
}`,...(_=(U=p.parameters)==null?void 0:U.docs)==null?void 0:_.source},description:{story:`Vertical layout of the StepIndicator (counter variant only).
StepIndicator with all steps completed.
Uses showCurrentAsCompleted to mark the final step as completed.`,...(F=(E=p.parameters)==null?void 0:E.docs)==null?void 0:F.description}}};var L,z,O,W,X;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(O=(z=d.parameters)==null?void 0:z.docs)==null?void 0:O.source},description:{story:"StepIndicator with simple steps (no descriptions).",...(X=(W=d.parameters)==null?void 0:W.docs)==null?void 0:X.description}}};const le=["Playground","Interactive","Default","Counter","Completed","SimpleSteps"];export{p as Completed,c as Counter,i as Default,a as Interactive,n as Playground,d as SimpleSteps,le as __namedExportsOrder,de as default};
