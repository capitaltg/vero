import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as o}from"./index-B0WjJBI_.js";import{F as a}from"./FormItem-DughJ3lz.js";import{R}from"./RadioGroup-7sfKYt9r.js";import{I as r}from"./Input-BcX811zT.js";import{S as T}from"./Select-CT2OMx0p.js";import{T as M}from"./Textarea-BxuBSTqI.js";import{B as x}from"./Button-DP2wrfBF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styles-DnVuGKPq.js";import"./utils-DrFeXHBK.js";import"./Label-ZP7aV4BM.js";import"./index-Cf-CwZ9y.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";import"./index-Cg8zIP29.js";import"./useFormGroupLayout-ZWE7ybff.js";import"./Radio-Cmh32OiH.js";import"./form-controls-UvU-3cIH.js";import"./constants-jTWlLmnl.js";import"./index-CBgW3S2s.js";import"./useAriaDisabled-BVkOu7OW.js";import"./useAriaLabelled-RfpmMyng.js";import"./index-BKPsKW-F.js";import"./index-Bm9-4BKu.js";import"./index-B5VgmDqq.js";import"./index-lUtbbSKC.js";import"./index-V0BpeevJ.js";import"./index-BPj7F_2H.js";import"./index-CzzBuDdg.js";import"./createLucideIcon-BeEkWZrd.js";import"./index-BA9XdM4e.js";import"./index-DFajAlJc.js";import"./index-sukfHunG.js";import"./index-C0VaYEPT.js";import"./check-C42IfL-F.js";import"./chevron-down-CLkoBCE4.js";const i=()=>{const[l,n]=o.useState(""),[m,u]=o.useState(""),[C,c]=o.useState(""),[p,d]=o.useState(""),[g,h]=o.useState(""),[b,v]=o.useState(""),q=[{value:"general",label:"General Inquiry"},{value:"support",label:"Technical Support"},{value:"sales",label:"Sales Question"},{value:"billing",label:"Billing Issue"},{value:"feedback",label:"Product Feedback"},{value:"other",label:"Other"}],N=[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}],y=l&&m&&p&&g&&b,w=t=>{t.preventDefault(),y&&alert("Message sent successfully! (This is a demo)")};return e.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background px-6 py-12",children:e.jsxs("div",{className:"w-full max-w-2xl space-y-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold",children:"Get in touch"}),e.jsx("p",{className:"mt-2 text-muted-foreground",children:"Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible."})]}),e.jsxs("form",{className:"space-y-6",onSubmit:w,children:[e.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsx(a,{isRequired:!0,elementId:"name",label:"Full Name",children:e.jsx(r,{required:!0,id:"name",placeholder:"John Doe",value:l,onChange:t=>n(t.target.value)})}),e.jsx(a,{isRequired:!0,elementId:"email",label:"Email Address",children:e.jsx(r,{required:!0,id:"email",placeholder:"john.doe@example.com",type:"email",value:m,onChange:t=>u(t.target.value)})})]}),e.jsx(a,{elementId:"company",hintText:"Optional - Let us know which organization you represent",label:"Company",children:e.jsx(r,{id:"company",placeholder:"Acme Inc.",value:C,onChange:t=>c(t.target.value)})}),e.jsx(a,{isRequired:!0,elementId:"subject",label:"Subject",children:e.jsx(T,{options:q,placeholder:"Select a subject...",value:p,onChange:d})}),e.jsx(a,{isRequired:!0,elementId:"priority",hintText:"How urgent is your inquiry?",label:"Priority",children:e.jsx(R,{options:N,orientation:"horizontal",value:g,variant:"button",onChange:h})}),e.jsx(a,{isRequired:!0,elementId:"message",hintText:"Please provide as much detail as possible",label:"Message",children:e.jsx(M,{required:!0,id:"message",placeholder:"Tell us more about your inquiry...",rows:6,value:b,onChange:t=>v(t.target.value)})}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(x,{isDisabled:!y,size:"lg",type:"submit",variant:"primary",children:"Send Message"}),e.jsx(x,{size:"lg",type:"button",onClick:()=>{n(""),u(""),c(""),d(""),h(""),v("")},children:"Clear Form"})]})]})]})})};i.__docgenInfo={description:"",methods:[],displayName:"ContactForm"};const E=`import { useState } from 'react';
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
`,be={title:"Examples/Contact Form",component:i,parameters:{layout:"fullscreen",docs:{description:{component:"A comprehensive contact form for customer support and inquiries. Features subject categorization, priority selection, and detailed message input."}}},tags:["autodocs"]},s={render:()=>e.jsx(i,{}),parameters:{controls:{disable:!0},docs:{source:{code:E,language:"tsx"}}}};var f,j,I,S,F;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
Demonstrates form layout, categorization, and priority handling.`,...(F=(S=s.parameters)==null?void 0:S.docs)==null?void 0:F.description}}};const ve=["Default"];export{s as Default,ve as __namedExportsOrder,be as default};
