import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as s}from"./index-D4H_InIO.js";import{B as l}from"./Button-BwlrdoZf.js";import{C as V}from"./CheckboxGroup-CZYiYa3h.js";import{S as A}from"./StepIndicator-CD3X0liO.js";import{F as r}from"./FormItem-D06MO0pk.js";import{I as h}from"./Input-cPRzvIH7.js";import{R as x}from"./RadioGroup-BD1Zw64A.js";import{T as H}from"./Textarea-e8jcLJmL.js";import"./useAriaDisabled-DHTVgRPt.js";import"./utils-CU3My8Oi.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";import"./useFormGroupLayout-DdrH40kK.js";import"./Checkbox-CK6iFJyF.js";import"./form-controls-DjFriuce.js";import"./index-DB-GfMvg.js";import"./index-DXU_LAI1.js";import"./index-DDORxvzF.js";import"./index-DLaBReRc.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./Label-7TaJ5dQy.js";import"./check-CT0OM3mY.js";import"./Radio-Dr-HV_jd.js";import"./index-DQwFizlT.js";import"./index-Ak5Mws-w.js";import"./index-DAnQV6hb.js";import"./index-YtIeenAn.js";const c=()=>{const o=[{id:"contact",label:"Contact Info"},{id:"satisfaction",label:"Satisfaction"},{id:"features",label:"Features"},{id:"feedback",label:"Feedback"}],[a,m]=s.useState("contact"),[u,F]=s.useState(""),[d,j]=s.useState(""),[p,k]=s.useState(""),[f,C]=s.useState([]),[b,D]=s.useState(""),[w,R]=s.useState(""),B=[{value:"very-satisfied",label:"Very Satisfied"},{value:"satisfied",label:"Satisfied"},{value:"neutral",label:"Neutral"},{value:"dissatisfied",label:"Dissatisfied"},{value:"very-dissatisfied",label:"Very Dissatisfied"}],q=[{id:"ease-of-use",label:"Ease of Use"},{id:"performance",label:"Performance"},{id:"design",label:"Design & UI"},{id:"features",label:"Feature Set"},{id:"documentation",label:"Documentation"},{id:"support",label:"Customer Support"}],O=[{value:"0",label:"0"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"}],T=()=>{const t=o.findIndex(n=>n.id===a);t<o.length-1&&m(o[t+1].id)},E=()=>{const t=o.findIndex(n=>n.id===a);t>0&&m(o[t-1].id)},G=t=>{t.preventDefault(),alert("Survey submitted successfully! (This is a demo)")},v=()=>{switch(a){case"contact":return u&&d;case"satisfaction":return p;case"features":return f.length>0;case"feedback":return b;default:return!1}};return e.jsx("div",{className:"min-h-screen bg-background px-6 py-12",children:e.jsxs("div",{className:"mx-auto max-w-3xl space-y-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold",children:"Customer Satisfaction Survey"}),e.jsx("p",{className:"mt-2 text-muted-foreground",children:"Help us improve by sharing your experience"})]}),e.jsx(A,{currentStep:a,steps:o}),e.jsxs("form",{className:"space-y-8",onSubmit:G,children:[a==="contact"?e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Contact Information"}),e.jsx(r,{isRequired:!0,elementId:"name",label:"Full Name",children:e.jsx(h,{required:!0,id:"name",placeholder:"John Doe",value:u,onChange:t=>F(t.target.value)})}),e.jsx(r,{isRequired:!0,elementId:"email",hintText:"We'll send you a copy of your responses",label:"Email Address",children:e.jsx(h,{required:!0,id:"email",placeholder:"john.doe@example.com",type:"email",value:d,onChange:t=>j(t.target.value)})})]}):null,a==="satisfaction"?e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Overall Satisfaction"}),e.jsx(r,{isRequired:!0,elementId:"satisfaction",label:"How satisfied are you with our product?",children:e.jsx(x,{options:B,value:p,variant:"tile",onChange:k})})]}):null,a==="features"?e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Feature Satisfaction"}),e.jsx(r,{isRequired:!0,elementId:"features",hintText:"Select all that apply",label:"Which aspects of our product are you most satisfied with?",children:e.jsx(V,{options:q,value:f,onChange:C})})]}):null,a==="feedback"?e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Additional Feedback"}),e.jsx(r,{isRequired:!0,elementId:"recommendation",hintText:"0 = Not at all likely, 10 = Extremely likely",label:"How likely are you to recommend us to a friend or colleague?",children:e.jsx(x,{options:O,orientation:"horizontal",value:b,variant:"button",onChange:D})}),e.jsx(r,{elementId:"improvements",hintText:"Optional - Your suggestions help us improve",label:"What improvements would you like to see?",children:e.jsx(H,{id:"improvements",placeholder:"Share your thoughts...",rows:5,value:w,onChange:t=>R(t.target.value)})})]}):null,e.jsxs("div",{className:"flex justify-between border-t border-muted pt-6",children:[e.jsx(l,{isDisabled:a==="contact",type:"button",variant:"default",onClick:E,children:"Back"}),a!=="feedback"?e.jsx(l,{isDisabled:!v(),type:"button",variant:"primary",onClick:T,children:"Next"}):e.jsx(l,{isDisabled:!v(),type:"submit",variant:"primary",children:"Submit Survey"})]})]})]})})};c.__docgenInfo={description:"",methods:[],displayName:"SurveyForm"};const W=`import { useState } from 'react';
import { Button } from '../components/Button';
import { CheckboxGroup } from '../components/CheckboxGroup';
import { FormItem } from '../components/FormItem';
import { Input } from '../components/Input';
import { RadioGroup } from '../components/RadioGroup';
import { StepIndicator, type StepIdFromSteps } from '../components/StepIndicator';
import { Textarea } from '../components/Textarea';

export const SurveyForm = () => {
  const steps = [
    { id: 'contact', label: 'Contact Info' },
    { id: 'satisfaction', label: 'Satisfaction' },
    { id: 'features', label: 'Features' },
    { id: 'feedback', label: 'Feedback' },
  ] as const;

  type StepId = StepIdFromSteps<typeof steps>;

  const [currentStep, setCurrentStep] = useState<StepId>('contact');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [satisfaction, setSatisfaction] = useState('');
  const [features, setFeatures] = useState<string[]>([]);
  const [recommendation, setRecommendation] = useState('');
  const [improvements, setImprovements] = useState('');

  const satisfactionOptions = [
    { value: 'very-satisfied', label: 'Very Satisfied' },
    { value: 'satisfied', label: 'Satisfied' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'dissatisfied', label: 'Dissatisfied' },
    { value: 'very-dissatisfied', label: 'Very Dissatisfied' },
  ];

  const featureOptions = [
    { id: 'ease-of-use', label: 'Ease of Use' },
    { id: 'performance', label: 'Performance' },
    { id: 'design', label: 'Design & UI' },
    { id: 'features', label: 'Feature Set' },
    { id: 'documentation', label: 'Documentation' },
    { id: 'support', label: 'Customer Support' },
  ];

  const recommendationOptions = [
    { value: '0', label: '0' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
  ];

  const handleNext = () => {
    const currentIndex = steps.findIndex(s => s.id === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.findIndex(s => s.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Survey submitted successfully! (This is a demo)');
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 'contact':
        return name && email;
      case 'satisfaction':
        return satisfaction;
      case 'features':
        return features.length > 0;
      case 'feedback':
        return recommendation;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Customer Satisfaction Survey</h1>
          <p className="mt-2 text-muted-foreground">Help us improve by sharing your experience</p>
        </div>

        <StepIndicator currentStep={currentStep} steps={steps} />

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Step 1: Contact Information */}
          {currentStep === 'contact' ? (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <FormItem isRequired elementId="name" label="Full Name">
                <Input
                  required
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </FormItem>

              <FormItem
                isRequired
                elementId="email"
                hintText="We'll send you a copy of your responses"
                label="Email Address"
              >
                <Input
                  required
                  id="email"
                  placeholder="john.doe@example.com"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </FormItem>
            </div>
          ) : null}

          {/* Step 2: Overall Satisfaction */}
          {currentStep === 'satisfaction' ? (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Overall Satisfaction</h2>
              <FormItem
                isRequired
                elementId="satisfaction"
                label="How satisfied are you with our product?"
              >
                <RadioGroup
                  options={satisfactionOptions}
                  value={satisfaction}
                  variant="tile"
                  onChange={setSatisfaction}
                />
              </FormItem>
            </div>
          ) : null}

          {/* Step 3: Feature Satisfaction */}
          {currentStep === 'features' ? (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Feature Satisfaction</h2>
              <FormItem
                isRequired
                elementId="features"
                hintText="Select all that apply"
                label="Which aspects of our product are you most satisfied with?"
              >
                <CheckboxGroup options={featureOptions} value={features} onChange={setFeatures} />
              </FormItem>
            </div>
          ) : null}

          {/* Step 4: Additional Feedback */}
          {currentStep === 'feedback' ? (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Additional Feedback</h2>
              <FormItem
                isRequired
                elementId="recommendation"
                hintText="0 = Not at all likely, 10 = Extremely likely"
                label="How likely are you to recommend us to a friend or colleague?"
              >
                <RadioGroup
                  options={recommendationOptions}
                  orientation="horizontal"
                  value={recommendation}
                  variant="button"
                  onChange={setRecommendation}
                />
              </FormItem>

              <FormItem
                elementId="improvements"
                hintText="Optional - Your suggestions help us improve"
                label="What improvements would you like to see?"
              >
                <Textarea
                  id="improvements"
                  placeholder="Share your thoughts..."
                  rows={5}
                  value={improvements}
                  onChange={e => setImprovements(e.target.value)}
                />
              </FormItem>
            </div>
          ) : null}

          {/* Navigation Buttons */}
          <div className="flex justify-between border-t border-muted pt-6">
            <Button
              isDisabled={currentStep === 'contact'}
              type="button"
              variant="default"
              onClick={handleBack}
            >
              Back
            </Button>

            {currentStep !== 'feedback' ? (
              <Button
                isDisabled={!isStepValid()}
                type="button"
                variant="primary"
                onClick={handleNext}
              >
                Next
              </Button>
            ) : (
              <Button isDisabled={!isStepValid()} type="submit" variant="primary">
                Submit Survey
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
`,Ie={title:"Examples/Survey Form",component:c,parameters:{layout:"fullscreen",docs:{description:{component:"A multi-step survey form with progress tracking. Demonstrates step indicators, various input types, and conditional navigation based on form completion."}}},tags:["autodocs"]},i={render:()=>e.jsx(c,{}),parameters:{controls:{disable:!0},docs:{source:{code:W,language:"tsx"}}}};var S,y,I,g,N;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <SurveyForm />,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: sourceCode,
        language: 'tsx'
      }
    }
  }
}`,...(I=(y=i.parameters)==null?void 0:y.docs)==null?void 0:I.source},description:{story:`A multi-step survey form with progress tracking.
Demonstrates step-by-step form flow, validation at each stage, and various question types.`,...(N=(g=i.parameters)==null?void 0:g.docs)==null?void 0:N.description}}};const ge=["Default"];export{i as Default,ge as __namedExportsOrder,Ie as default};
