import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../../Button';
import { StepIndicator } from '../src/StepIndicator';
import type { StepIdFromSteps } from '../types';

const meta = {
  title: 'Actions & Navigation/StepIndicator',
  component: StepIndicator,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof StepIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

const steps = [
  {
    id: '1',
    label: 'Account',
    description: 'Create your account',
  },
  {
    id: '2',
    label: 'Profile',
    description: 'Complete your profile',
  },
  {
    id: '3',
    label: 'Review',
    description: 'Review your information',
  },
  {
    id: '4',
    label: 'Complete',
    description: 'Registration completed',
  },
] as const;

const InteractiveDemo = () => {
  const [currentStep, setCurrentStep] = useState<StepIdFromSteps<typeof steps>>('2');

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
      <StepIndicator steps={steps} currentStep={currentStep} />
      <div className="flex gap-4">
        <Button variant="default" onClick={handlePrevious} isDisabled={currentIndex === 0}>
          Previous
        </Button>
        <Button
          variant="primary"
          onClick={handleNext}
          isDisabled={currentIndex === steps.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

/**
 * Interactive demo of the StepIndicator component.
 * Shows how the component updates as users progress through steps.
 */
export const Interactive: Story = {
  render: () => <InteractiveDemo />,
  args: {
    steps,
    currentStep: '2',
  },
};

/**
 * The default horizontal layout of the StepIndicator.
 */
export const Default: Story = {
  args: {
    steps,
    currentStep: '2',
  },
};

/**
 * Small size variant of the StepIndicator.
 */
export const Small: Story = {
  args: {
    steps,
    currentStep: '2',
    size: 'sm',
  },
};

/**
 * Large size variant of the StepIndicator.
 */
export const Large: Story = {
  args: {
    steps,
    currentStep: '2',
    size: 'lg',
  },
};

/**
 * Vertical layout of the StepIndicator.
 */
export const Vertical: Story = {
  args: {
    steps,
    currentStep: '3',
    orientation: 'vertical',
  },
};

/**
 * StepIndicator with all steps completed.
 */
export const Completed: Story = {
  args: {
    steps,
    currentStep: '4',
  },
};

/**
 * StepIndicator with simple steps (no descriptions).
 */
export const SimpleSteps: Story = {
  args: {
    steps: [
      { id: '1', label: 'Cart' },
      { id: '2', label: 'Delivery' },
      { id: '3', label: 'Payment' },
    ] as const,
    currentStep: '2',
  },
};
