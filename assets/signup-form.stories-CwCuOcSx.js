import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r}from"./index-D4H_InIO.js";import{B as A}from"./Button-BwlrdoZf.js";import{F as a}from"./FormItem-BThRJZS-.js";import{I as s}from"./Input-BCcVyiao.js";import{S as E}from"./Select-DzGxXYqN.js";import{C as x}from"./Checkbox-BXOeXF-I.js";import"./useAriaDisabled-DHTVgRPt.js";import"./utils-CU3My8Oi.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";import"./Label-7TaJ5dQy.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./z-index-CmEG1ohp.js";import"./index-DB-GfMvg.js";import"./index-DQwFizlT.js";import"./index-YtIeenAn.js";import"./index-CWZjxdH8.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-Ak5Mws-w.js";import"./index-DonjGF9j.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./index-DXU_LAI1.js";import"./check-CT0OM3mY.js";import"./chevron-down-DtitoCkX.js";import"./DefaultFormControlLabel-C4mlsiRE.js";import"./index-DLaBReRc.js";const i=()=>{const[m,N]=r.useState(""),[d,C]=r.useState(""),[c,S]=r.useState(""),[l,j]=r.useState(""),[n,I]=r.useState(""),[u,F]=r.useState(""),[p,T]=r.useState(!1),[k,q]=r.useState(!1),P=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"uk",label:"United Kingdom"},{value:"au",label:"Australia"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"jp",label:"Japan"},{value:"other",label:"Other"}],h=l===n,f=m&&d&&c&&l&&n&&h&&u&&p,R=t=>{t.preventDefault(),f&&alert("Sign up successful! (This is a demo)")};return e.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background px-6 py-12",children:e.jsxs("div",{className:"w-full max-w-md space-y-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold",children:"Create your account"}),e.jsx("p",{className:"mt-2 text-muted-foreground",children:"Join us today and start your journey"})]}),e.jsxs("form",{className:"space-y-6",onSubmit:R,children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(a,{isRequired:!0,elementId:"first-name",label:"First Name",children:e.jsx(s,{required:!0,id:"first-name",placeholder:"John",value:m,onChange:t=>N(t.target.value)})}),e.jsx(a,{isRequired:!0,elementId:"last-name",label:"Last Name",children:e.jsx(s,{required:!0,id:"last-name",placeholder:"Doe",value:d,onChange:t=>C(t.target.value)})})]}),e.jsx(a,{isRequired:!0,elementId:"email",hintText:"We'll never share your email with anyone else",label:"Email Address",children:e.jsx(s,{required:!0,id:"email",placeholder:"john.doe@example.com",type:"email",value:c,onChange:t=>S(t.target.value)})}),e.jsx(a,{isRequired:!0,elementId:"password",hintText:"Must be at least 8 characters",label:"Password",children:e.jsx(s,{required:!0,id:"password",placeholder:"••••••••",type:"password",value:l,onChange:t=>j(t.target.value)})}),e.jsx(a,{isRequired:!0,elementId:"confirm-password",errorText:n&&!h?"Passwords do not match":void 0,label:"Confirm Password",children:e.jsx(s,{required:!0,id:"confirm-password",placeholder:"••••••••",type:"password",value:n,onChange:t=>I(t.target.value)})}),e.jsx(a,{isRequired:!0,elementId:"country",label:"Country",children:e.jsx(E,{options:P,placeholder:"Select your country...",value:u,onChange:F})}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(x,{id:"terms",isChecked:p,label:e.jsxs("span",{children:["I agree to the"," ",e.jsx("a",{className:"font-medium text-primary-400 hover:underline",href:"#",children:"Terms of Service"})," ","and"," ",e.jsx("a",{className:"font-medium text-primary-400 hover:underline",href:"#",children:"Privacy Policy"})]}),onCheckedChange:t=>T(t===!0)}),e.jsx(x,{id:"newsletter",isChecked:k,label:"Send me product updates and newsletters",onCheckedChange:t=>q(t===!0)})]}),e.jsx(A,{className:"w-full",isDisabled:!f,size:"lg",type:"submit",variant:"primary",children:"Create Account"}),e.jsxs("p",{className:"text-center text-sm text-muted-foreground",children:["Already have an account?"," ",e.jsx("a",{className:"font-medium text-primary-400 hover:underline",href:"#",children:"Sign in"})]})]})]})})};i.__docgenInfo={description:"",methods:[],displayName:"SignUpForm"};const D=`import { useState } from 'react';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { FormItem } from '../components/FormItem';
import { Input } from '../components/Input';
import { Select } from '../components/Select';

export const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'other', label: 'Other' },
  ];

  const passwordsMatch = password === confirmPassword;
  const isFormValid =
    firstName &&
    lastName &&
    email &&
    password &&
    confirmPassword &&
    passwordsMatch &&
    country &&
    agreeToTerms;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Sign up successful! (This is a demo)');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create your account</h1>
          <p className="mt-2 text-muted-foreground">Join us today and start your journey</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <FormItem isRequired elementId="first-name" label="First Name">
              <Input
                required
                id="first-name"
                placeholder="John"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </FormItem>

            <FormItem isRequired elementId="last-name" label="Last Name">
              <Input
                required
                id="last-name"
                placeholder="Doe"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </FormItem>
          </div>

          <FormItem
            isRequired
            elementId="email"
            hintText="We'll never share your email with anyone else"
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

          <FormItem
            isRequired
            elementId="password"
            hintText="Must be at least 8 characters"
            label="Password"
          >
            <Input
              required
              id="password"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormItem>

          <FormItem
            isRequired
            elementId="confirm-password"
            errorText={confirmPassword && !passwordsMatch ? 'Passwords do not match' : undefined}
            label="Confirm Password"
          >
            <Input
              required
              id="confirm-password"
              placeholder="••••••••"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </FormItem>

          <FormItem isRequired elementId="country" label="Country">
            <Select
              options={countryOptions}
              placeholder="Select your country..."
              value={country}
              onChange={setCountry}
            />
          </FormItem>

          <div className="space-y-3">
            <Checkbox
              id="terms"
              isChecked={agreeToTerms}
              label={
                <span>
                  I agree to the{' '}
                  <a className="font-medium text-primary-400 hover:underline" href="#">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a className="font-medium text-primary-400 hover:underline" href="#">
                    Privacy Policy
                  </a>
                </span>
              }
              onCheckedChange={checked => setAgreeToTerms(checked === true)}
            />

            <Checkbox
              id="newsletter"
              isChecked={subscribeNewsletter}
              label="Send me product updates and newsletters"
              onCheckedChange={checked => setSubscribeNewsletter(checked === true)}
            />
          </div>

          <Button
            className="w-full"
            isDisabled={!isFormValid}
            size="lg"
            type="submit"
            variant="primary"
          >
            Create Account
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <a className="font-medium text-primary-400 hover:underline" href="#">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
`,ve={title:"Examples/Sign Up Form",component:i,parameters:{layout:"fullscreen",docs:{description:{component:"A complete sign-up form example demonstrating form validation, error handling, and user input collection. Features include password confirmation, terms acceptance, and country selection."}}},tags:["autodocs"]},o={render:()=>e.jsx(i,{}),parameters:{controls:{disable:!0},docs:{source:{code:D,language:"tsx"}}}};var v,g,b,y,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <SignUpForm />,
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
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source},description:{story:`A fully functional sign-up form with validation.
Demonstrates proper form structure, validation feedback, and user experience patterns.`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.description}}};const ge=["Default"];export{o as Default,ge as __namedExportsOrder,ve as default};
