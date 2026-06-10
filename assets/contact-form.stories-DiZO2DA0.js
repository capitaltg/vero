import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as o}from"./index-B0WjJBI_.js";import{B as x}from"./Button-CBLCRCsu.js";import{F as a}from"./FormItem-C6vZfRG4.js";import{I as r}from"./Input-UisXLyjw.js";import{S as R}from"./Select-qYDxzPmD.js";import{R as T}from"./RadioGroup-CnGHq3Be.js";import{T as M}from"./Textarea-Z7gAUXOu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useAriaDisabled-BVkOu7OW.js";import"./utils-CU3My8Oi.js";import"./index-BOrrHd12.js";import"./index-EiwPuDyL.js";import"./constants-D9UEAID0.js";import"./styles-CafxXXJc.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-BeEkWZrd.js";import"./Label-ByDnJzrD.js";import"./index-CoRj-x2w.js";import"./index-KklXjS-Z.js";import"./index-CwPCC0ZT.js";import"./z-index-CmEG1ohp.js";import"./index-B5oA2Zbg.js";import"./index-9JfGjY-K.js";import"./index-Chx8Kgs6.js";import"./index-DKzZmXCh.js";import"./index-OiR64VEf.js";import"./index-BllD4pgw.js";import"./index-Cdcq5Wwr.js";import"./index-DKWC2_YT.js";import"./floating-ui.react-dom-Dsj8ROC4.js";import"./index-DBA0bpW4.js";import"./index-B8vvyUb-.js";import"./check-C42IfL-F.js";import"./chevron-down-CLkoBCE4.js";import"./useFormGroupLayout-COYHMi0M.js";import"./Radio-Tt-3Q0Bq.js";import"./form-controls-UvU-3cIH.js";import"./useAriaLabelled-RfpmMyng.js";import"./index-BHtEszHx.js";const i=()=>{const[l,n]=o.useState(""),[m,u]=o.useState(""),[C,c]=o.useState(""),[p,d]=o.useState(""),[g,h]=o.useState(""),[b,v]=o.useState(""),q=[{value:"general",label:"General Inquiry"},{value:"support",label:"Technical Support"},{value:"sales",label:"Sales Question"},{value:"billing",label:"Billing Issue"},{value:"feedback",label:"Product Feedback"},{value:"other",label:"Other"}],N=[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}],y=l&&m&&p&&g&&b,w=t=>{t.preventDefault(),y&&alert("Message sent successfully! (This is a demo)")};return e.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background px-6 py-12",children:e.jsxs("div",{className:"w-full max-w-2xl space-y-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold",children:"Get in touch"}),e.jsx("p",{className:"mt-2 text-muted-foreground",children:"Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible."})]}),e.jsxs("form",{className:"space-y-6",onSubmit:w,children:[e.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsx(a,{isRequired:!0,elementId:"name",label:"Full Name",children:e.jsx(r,{required:!0,id:"name",placeholder:"John Doe",value:l,onChange:t=>n(t.target.value)})}),e.jsx(a,{isRequired:!0,elementId:"email",label:"Email Address",children:e.jsx(r,{required:!0,id:"email",placeholder:"john.doe@example.com",type:"email",value:m,onChange:t=>u(t.target.value)})})]}),e.jsx(a,{elementId:"company",hintText:"Optional - Let us know which organization you represent",label:"Company",children:e.jsx(r,{id:"company",placeholder:"Acme Inc.",value:C,onChange:t=>c(t.target.value)})}),e.jsx(a,{isRequired:!0,elementId:"subject",label:"Subject",children:e.jsx(R,{options:q,placeholder:"Select a subject...",value:p,onChange:d})}),e.jsx(a,{isRequired:!0,elementId:"priority",hintText:"How urgent is your inquiry?",label:"Priority",children:e.jsx(T,{options:N,orientation:"horizontal",value:g,variant:"button",onChange:h})}),e.jsx(a,{isRequired:!0,elementId:"message",hintText:"Please provide as much detail as possible",label:"Message",children:e.jsx(M,{required:!0,id:"message",placeholder:"Tell us more about your inquiry...",rows:6,value:b,onChange:t=>v(t.target.value)})}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(x,{isDisabled:!y,size:"lg",type:"submit",variant:"primary",children:"Send Message"}),e.jsx(x,{size:"lg",type:"button",onClick:()=>{n(""),u(""),c(""),d(""),h(""),v("")},children:"Clear Form"})]})]})]})})};i.__docgenInfo={description:"",methods:[],displayName:"ContactForm"};const E=`import { useState } from 'react';
import { Button } from '../components/Button';
import { FormItem } from '../components/FormItem';
import { Input } from '../components/Input';
import { RadioGroup } from '../components/RadioGroup';
import { Select } from '../components/Select';
import { Textarea } from '../components/Textarea';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [priority, setPriority] = useState('');
  const [message, setMessage] = useState('');

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'sales', label: 'Sales Question' },
    { value: 'billing', label: 'Billing Issue' },
    { value: 'feedback', label: 'Product Feedback' },
    { value: 'other', label: 'Other' },
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ];

  const isFormValid = name && email && subject && priority && message;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Message sent successfully! (This is a demo)');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Get in touch</h1>
          <p className="mt-2 text-muted-foreground">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon
            as possible.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormItem isRequired elementId="name" label="Full Name">
              <Input
                required
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </FormItem>

            <FormItem isRequired elementId="email" label="Email Address">
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

          <FormItem
            elementId="company"
            hintText="Optional - Let us know which organization you represent"
            label="Company"
          >
            <Input
              id="company"
              placeholder="Acme Inc."
              value={company}
              onChange={e => setCompany(e.target.value)}
            />
          </FormItem>

          <FormItem isRequired elementId="subject" label="Subject">
            <Select
              options={subjectOptions}
              placeholder="Select a subject..."
              value={subject}
              onChange={setSubject}
            />
          </FormItem>

          <FormItem
            isRequired
            elementId="priority"
            hintText="How urgent is your inquiry?"
            label="Priority"
          >
            <RadioGroup
              options={priorityOptions}
              orientation="horizontal"
              value={priority}
              variant="button"
              onChange={setPriority}
            />
          </FormItem>

          <FormItem
            isRequired
            elementId="message"
            hintText="Please provide as much detail as possible"
            label="Message"
          >
            <Textarea
              required
              id="message"
              placeholder="Tell us more about your inquiry..."
              rows={6}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </FormItem>

          <div className="flex gap-3">
            <Button isDisabled={!isFormValid} size="lg" type="submit" variant="primary">
              Send Message
            </Button>
            <Button
              size="lg"
              type="button"
              onClick={() => {
                setName('');
                setEmail('');
                setCompany('');
                setSubject('');
                setPriority('');
                setMessage('');
              }}
            >
              Clear Form
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
`,xe={title:"Examples/Contact Form",component:i,parameters:{layout:"fullscreen",docs:{description:{component:"A comprehensive contact form for customer support and inquiries. Features subject categorization, priority selection, and detailed message input."}}},tags:["autodocs"]},s={render:()=>e.jsx(i,{}),parameters:{controls:{disable:!0},docs:{source:{code:E,language:"tsx"}}}};var f,j,I,S,F;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ContactForm />,
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
}`,...(I=(j=s.parameters)==null?void 0:j.docs)==null?void 0:I.source},description:{story:`A full-featured contact form for customer communication.
Demonstrates form layout, categorization, and priority handling.`,...(F=(S=s.parameters)==null?void 0:S.docs)==null?void 0:F.description}}};const fe=["Default"];export{s as Default,fe as __namedExportsOrder,xe as default};
