import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as s}from"./index-D4H_InIO.js";import{B as o}from"./Button-BwlrdoZf.js";import{A as y}from"./Alert-gwnj9tMu.js";import{F as c}from"./FormItem-D06MO0pk.js";import{I as d}from"./Input-cPRzvIH7.js";import{C}from"./Checkbox-DguXjC58.js";import"./useAriaDisabled-DHTVgRPt.js";import"./utils-CU3My8Oi.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";import"./x-B9-lGSIk.js";import"./Label-7TaJ5dQy.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./form-controls-DjFriuce.js";import"./index-DB-GfMvg.js";import"./index-DXU_LAI1.js";import"./index-DDORxvzF.js";import"./index-DLaBReRc.js";import"./check-CT0OM3mY.js";const a=()=>{const[i,v]=s.useState(""),[l,g]=s.useState(""),[b,w]=s.useState(!1),[N,n]=s.useState(!1),m=i&&l,j=t=>{t.preventDefault(),m&&(n(!0),setTimeout(()=>n(!1),5e3))};return e.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background px-6 py-12",children:e.jsxs("div",{className:"w-full max-w-md space-y-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold",children:"Welcome back"}),e.jsx("p",{className:"mt-2 text-muted-foreground",children:"Sign in to your account to continue"})]}),N?e.jsx(y,{title:"Login failed",variant:"danger",children:"Invalid email or password. Please try again."}):null,e.jsxs("form",{className:"space-y-6",onSubmit:j,children:[e.jsx(c,{isRequired:!0,elementId:"email",label:"Email Address",children:e.jsx(d,{required:!0,id:"email",placeholder:"you@example.com",type:"email",value:i,onChange:t=>v(t.target.value)})}),e.jsx(c,{isRequired:!0,elementId:"password",label:"Password",children:e.jsx(d,{required:!0,id:"password",placeholder:"••••••••",type:"password",value:l,onChange:t=>g(t.target.value)})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(C,{id:"remember",isChecked:b,label:"Remember me",onCheckedChange:t=>w(t===!0)}),e.jsx("a",{className:"text-sm font-medium text-primary-400 hover:underline",href:"#",children:"Forgot password?"})]}),e.jsx(o,{className:"w-full",isDisabled:!m,size:"lg",type:"submit",variant:"primary",children:"Sign In"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"w-full border-t border-muted"})}),e.jsx("div",{className:"relative flex justify-center text-sm",children:e.jsx("span",{className:"bg-background px-2 text-muted-foreground",children:"Or continue with"})})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs(o,{className:"w-full",children:[e.jsxs("svg",{className:"mr-2 h-5 w-5",viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"currentColor"}),e.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"currentColor"}),e.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"currentColor"}),e.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"currentColor"})]}),"Google"]}),e.jsxs(o,{className:"w-full",children:[e.jsx("svg",{className:"mr-2 h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"GitHub"]})]}),e.jsxs("p",{className:"text-center text-sm text-muted-foreground",children:["Don't have an account?"," ",e.jsx("a",{className:"font-medium text-primary-400 hover:underline",href:"#",children:"Sign up"})]})]})]})})};a.__docgenInfo={description:"",methods:[],displayName:"LoginForm"};const S=`import { useState } from 'react';
import { Alert } from '../components/Alert';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { FormItem } from '../components/FormItem';
import { Input } from '../components/Input';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showError, setShowError] = useState(false);

  const isFormValid = email && password;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      // Simulate login attempt
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="mt-2 text-muted-foreground">Sign in to your account to continue</p>
        </div>

        {showError ? (
          <Alert title="Login failed" variant="danger">
            Invalid email or password. Please try again.
          </Alert>
        ) : null}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <FormItem isRequired elementId="email" label="Email Address">
            <Input
              required
              id="email"
              placeholder="you@example.com"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormItem>

          <FormItem isRequired elementId="password" label="Password">
            <Input
              required
              id="password"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormItem>

          <div className="flex items-center justify-between">
            <Checkbox
              id="remember"
              isChecked={rememberMe}
              label="Remember me"
              onCheckedChange={checked => setRememberMe(checked === true)}
            />
            <a className="text-sm font-medium text-primary-400 hover:underline" href="#">
              Forgot password?
            </a>
          </div>

          <Button
            className="w-full"
            isDisabled={!isFormValid}
            size="lg"
            type="submit"
            variant="primary"
          >
            Sign In
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button className="w-full">
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="currentColor"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="currentColor"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="currentColor"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="currentColor"
                />
              </svg>
              Google
            </Button>
            <Button className="w-full">
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <a className="font-medium text-primary-400 hover:underline" href="#">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
`,Z={title:"Examples/Login Form",component:a,parameters:{layout:"fullscreen",docs:{description:{component:"A modern login form with email/password authentication and social login options. Includes error handling, remember me functionality, and password recovery link."}}},tags:["autodocs"]},r={render:()=>e.jsx(a,{}),parameters:{controls:{disable:!0},docs:{source:{code:S,language:"tsx"}}}};var u,p,h,x,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <LoginForm />,
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
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source},description:{story:`A complete login form with social authentication options.
Demonstrates error handling, form validation, and modern authentication patterns.`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};const $=["Default"];export{r as Default,$ as __namedExportsOrder,Z as default};
