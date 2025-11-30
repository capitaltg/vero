import { useState } from 'react';
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
              variant="outline"
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
