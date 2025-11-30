import { useState } from 'react';
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
