import{j as o}from"./jsx-runtime-DSvmvvsx.js";import{r as ie}from"./index-B0WjJBI_.js";import{S as se}from"./StepIndicator-C8urfkSj.js";import{B as S}from"./Button-DP2wrfBF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DrFeXHBK.js";import"./index-CBgW3S2s.js";import"./check-C42IfL-F.js";import"./createLucideIcon-BeEkWZrd.js";import"./useAriaDisabled-BVkOu7OW.js";import"./index-Cg8zIP29.js";import"./constants-jTWlLmnl.js";import"./styles-DnVuGKPq.js";const e=[{id:"account",label:"Account",description:"Create your account"},{id:"profile",label:"Profile",description:"Complete your profile"},{id:"review",label:"Review",description:"Review your information"},{id:"complete",label:"Complete",description:"Registration completed"}],oe=()=>{const[s,f]=ie.useState("profile"),ne=()=>{const r=e.findIndex(m=>m.id===s);r>0&&f(e[r-1].id)},ae=()=>{const r=e.findIndex(m=>m.id===s);r<e.length-1&&f(e[r+1].id)},h=e.findIndex(r=>r.id===s);return o.jsxs("div",{className:"space-y-8",children:[o.jsx(se,{currentStep:s,steps:e}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx(S,{isDisabled:h===0,variant:"default",onClick:ne,children:"Previous"}),o.jsx(S,{isDisabled:h===e.length-1,variant:"primary",onClick:ae,children:"Next"})]})]})};oe.__docgenInfo={description:"",methods:[],displayName:"StepIndicatorInteractive"};const pe=`import { useState } from 'react';
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
`,t=[{id:"account",label:"Account",description:"Create your account"},{id:"profile",label:"Profile",description:"Complete your profile"},{id:"review",label:"Review",description:"Review your information"},{id:"complete",label:"Complete",description:"Registration completed"}],Ie={title:"Actions & Navigation/StepIndicator",component:se,parameters:{},tags:["autodocs"],args:{currentStep:"profile",headingLevel:"h4",showCurrentAsCompleted:!1,showLabels:!0,steps:t,variant:"default"},argTypes:{variant:{control:"radio",options:["default","counter"],description:"Visual variant of the step indicator",type:{name:"string",required:!1},table:{defaultValue:{summary:"default"},type:{summary:"default | counter"}}},currentStep:{control:"select",options:t.map(s=>s.id),description:"ID of the current step",type:{name:"string",required:!0}},steps:{control:"object",description:"Array of step objects",type:{name:"array",value:{name:"object",value:{}},required:!0}},showCurrentAsCompleted:{control:"boolean",description:"If true, the current step will be shown as completed instead of current. Useful for showing the final step as completed when the process is finished.",type:{name:"boolean",required:!1},table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},headingLevel:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"The heading level for the step indicator header. Defaults to h4.",type:{name:"string",required:!1},table:{defaultValue:{summary:"h4"},type:{summary:"h1 | h2 | h3 | h4 | h5 | h6"}}},showLabels:{control:"boolean",description:"If false, labels will not be shown below the segments or counter list. Defaults to true.",type:{name:"boolean",required:!1},table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}}}},n={tags:["!autodocs"]},a={render:()=>o.jsx(oe,{}),args:{steps:t,currentStep:"profile"},parameters:{docs:{source:{code:pe,language:"tsx"}}}},i={args:{steps:t,currentStep:"profile",variant:"default"}},p={args:{steps:t,currentStep:"profile",variant:"counter"}},c={args:{steps:t,currentStep:"complete",showCurrentAsCompleted:!0}},d={args:{steps:[{id:"cart",label:"Cart"},{id:"delivery",label:"Delivery"},{id:"payment",label:"Payment"}],currentStep:"delivery"}},l={args:{steps:t,currentStep:"profile",variant:"default",showLabels:!1}},u={args:{steps:t,currentStep:"profile",variant:"default"},parameters:{viewport:{defaultViewport:"mobile2"}}};var v,b,y,g,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:`Playground - Use the controls below to customize the StepIndicator.
All props can be adjusted to see how the component responds.`,...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.description}}};var I,x,C,j,P;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source},description:{story:`Interactive demo of the StepIndicator component.
Shows how the component updates as users progress through steps.`,...(P=(j=a.parameters)==null?void 0:j.docs)==null?void 0:P.description}}};var D,A,N,R,L;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'profile',
    variant: 'default'
  }
}`,...(N=(A=i.parameters)==null?void 0:A.docs)==null?void 0:N.source},description:{story:`The USWDS-style default variant with header and segments.
Shows "Step X of Y" with the current step label.`,...(L=(R=i.parameters)==null?void 0:R.docs)==null?void 0:L.description}}};var B,V,k,q,T;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'profile',
    variant: 'counter'
  }
}`,...(k=(V=p.parameters)==null?void 0:V.docs)==null?void 0:k.source},description:{story:"The counter variant with numbered circles and connectors.",...(T=(q=p.parameters)==null?void 0:q.docs)==null?void 0:T.description}}};var U,_,E,W,F;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 'complete',
    showCurrentAsCompleted: true
  }
}`,...(E=(_=c.parameters)==null?void 0:_.docs)==null?void 0:E.source},description:{story:`Vertical layout of the StepIndicator (counter variant only).
StepIndicator with all steps completed.
Uses showCurrentAsCompleted to mark the final step as completed.`,...(F=(W=c.parameters)==null?void 0:W.docs)==null?void 0:F.description}}};var M,O,X,Y,z;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(X=(O=d.parameters)==null?void 0:O.docs)==null?void 0:X.source},description:{story:"StepIndicator with simple steps (no descriptions).",...(z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:z.description}}};var $,G,H,J,K;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:'On narrow viewports (below the `md` breakpoint, 768px), the default variant\nhides its segment bars and labels, leaving just the "Step X of Y" header.\nThis story opens in a mobile viewport; widen the preview to see the bars return.',...(re=(te=u.parameters)==null?void 0:te.docs)==null?void 0:re.description}}};const xe=["Playground","Interactive","Default","Counter","Completed","SimpleSteps","WithoutLabels","Mobile"];export{c as Completed,p as Counter,i as Default,a as Interactive,u as Mobile,n as Playground,d as SimpleSteps,l as WithoutLabels,xe as __namedExportsOrder,Ie as default};
