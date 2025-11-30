import { useState } from 'react';
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
