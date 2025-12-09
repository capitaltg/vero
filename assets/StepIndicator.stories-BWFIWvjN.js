import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{r as te}from"./index-D4H_InIO.js";import{S as M}from"./StepIndicator-CD3X0liO.js";import{B as h}from"./Button-BwlrdoZf.js";import"./utils-CU3My8Oi.js";import"./index-NE6MC3wq.js";import"./check-CT0OM3mY.js";import"./createLucideIcon-CRH11QI6.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";const e=[{id:"account",label:"Account",description:"Create your account"},{id:"profile",label:"Profile",description:"Complete your profile"},{id:"review",label:"Review",description:"Review your information"},{id:"complete",label:"Complete",description:"Registration completed"}],Q=()=>{const[s,m]=te.useState("profile"),Z=()=>{const t=e.findIndex(u=>u.id===s);t>0&&m(e[t-1].id)},ee=()=>{const t=e.findIndex(u=>u.id===s);t<e.length-1&&m(e[t+1].id)},f=e.findIndex(t=>t.id===s);return o.jsxs("div",{className:"space-y-8",children:[o.jsx(M,{currentStep:s,steps:e}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx(h,{isDisabled:f===0,variant:"default",onClick:Z,children:"Previous"}),o.jsx(h,{isDisabled:f===e.length-1,variant:"primary",onClick:ee,children:"Next"})]})]})};Q.__docgenInfo={description:"",methods:[],displayName:"StepIndicatorInteractive"};const re=`import { useState } from 'react';
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
`,r=[{id:"account",label:"Account",description:"Create your account"},{id:"profile",label:"Profile",description:"Complete your profile"},{id:"review",label:"Review",description:"Review your information"},{id:"complete",label:"Complete",description:"Registration completed"}],Se={title:"Actions & Navigation/StepIndicator",component:M,parameters:{},tags:["autodocs"],args:{currentStep:"profile",headingLevel:"h4",showCurrentAsCompleted:!1,showLabels:!0,steps:r,variant:"default"},argTypes:{variant:{control:"radio",options:["default","counter"],description:"Visual variant of the step indicator",type:{name:"string",required:!1},table:{defaultValue:{summary:"default"},type:{summary:"default | counter"}}},currentStep:{control:"select",options:r.map(s=>s.id),description:"ID of the current step",type:{name:"string",required:!0}},steps:{control:"object",description:"Array of step objects",type:{name:"array",value:{name:"object",value:{}},required:!0}},showCurrentAsCompleted:{control:"boolean",description:"If true, the current step will be shown as completed instead of current. Useful for showing the final step as completed when the process is finished.",type:{name:"boolean",required:!1},table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},headingLevel:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"The heading level for the step indicator header. Defaults to h4.",type:{name:"string",required:!1},table:{defaultValue:{summary:"h4"},type:{summary:"h1 | h2 | h3 | h4 | h5 | h6"}}},showLabels:{control:"boolean",description:"If false, labels will not be shown below the segments or counter list. Defaults to true.",type:{name:"boolean",required:!1},table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}}}},n={tags:["!autodocs"]},a={render:()=>o.jsx(Q,{}),args:{steps:r,currentStep:"profile"},parameters:{docs:{source:{code:re,language:"tsx"}}}},i={args:{steps:r,currentStep:"profile",variant:"default"}},c={args:{steps:r,currentStep:"profile",variant:"counter"}},p={args:{steps:r,currentStep:"complete",showCurrentAsCompleted:!0}},d={args:{steps:[{id:"cart",label:"Cart"},{id:"delivery",label:"Delivery"},{id:"payment",label:"Payment"}],currentStep:"delivery"}},l={args:{steps:r,currentStep:"profile",variant:"default",showLabels:!1}};var S,y,v,g,b;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source},description:{story:`Playground - Use the controls below to customize the StepIndicator.
All props can be adjusted to see how the component responds.`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.description}}};var I,x,w,C,P;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source},description:{story:`Interactive demo of the StepIndicator component.
Shows how the component updates as users progress through steps.`,...(P=(C=a.parameters)==null?void 0:C.docs)==null?void 0:P.description}}};var j,D,A,N,R;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'profile',
    variant: 'default'
  }
}`,...(A=(D=i.parameters)==null?void 0:D.docs)==null?void 0:A.source},description:{story:`The USWDS-style default variant with header and segments.
Shows "Step X of Y" with the current step label.`,...(R=(N=i.parameters)==null?void 0:N.docs)==null?void 0:R.description}}};var L,B,q,V,k;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'profile',
    variant: 'counter'
  }
}`,...(q=(B=c.parameters)==null?void 0:B.docs)==null?void 0:q.source},description:{story:"The counter variant with numbered circles and connectors.",...(k=(V=c.parameters)==null?void 0:V.docs)==null?void 0:k.description}}};var T,U,_,E,W;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'complete',
    showCurrentAsCompleted: true
  }
}`,...(_=(U=p.parameters)==null?void 0:U.docs)==null?void 0:_.source},description:{story:`Vertical layout of the StepIndicator (counter variant only).
StepIndicator with all steps completed.
Uses showCurrentAsCompleted to mark the final step as completed.`,...(W=(E=p.parameters)==null?void 0:E.docs)==null?void 0:W.description}}};var F,z,O,X,Y;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(z=d.parameters)==null?void 0:z.docs)==null?void 0:O.source},description:{story:"StepIndicator with simple steps (no descriptions).",...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var $,G,H,J,K;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'profile',
    variant: 'default',
    showLabels: false
  }
}`,...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:`StepIndicator without labels below the segments.
Labels are hidden but still available to screen readers.`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};const ye=["Playground","Interactive","Default","Counter","Completed","SimpleSteps","WithoutLabels"];export{p as Completed,c as Counter,i as Default,a as Interactive,n as Playground,d as SimpleSteps,l as WithoutLabels,ye as __namedExportsOrder,Se as default};
