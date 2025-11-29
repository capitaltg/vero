import type { Meta, StoryObj } from '@storybook/react';
import { StepIndicator } from '../src/StepIndicator';
import { StepIndicatorInteractive } from '../demos/StepIndicatorInteractive';
import sourceCode from '../demos/StepIndicatorInteractive.tsx?raw';

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

const meta = {
  title: 'Actions & Navigation/StepIndicator',
  component: StepIndicator,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof StepIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive demo of the StepIndicator component.
 * Shows how the component updates as users progress through steps.
 */
export const Interactive: Story = {
  render: () => <StepIndicatorInteractive />,
  args: {
    steps,
    currentStep: 'profile',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCode,
        language: 'tsx',
      },
    },
  },
};

/**
 * The default horizontal layout of the StepIndicator.
 */
export const Default: Story = {
  args: {
    steps,
    currentStep: 'profile',
  },
};

/**
 * Small size variant of the StepIndicator.
 */
export const Small: Story = {
  args: {
    steps,
    currentStep: 'profile',
    size: 'sm',
  },
};

/**
 * Large size variant of the StepIndicator.
 */
export const Large: Story = {
  args: {
    steps,
    currentStep: 'profile',
    size: 'lg',
  },
};

/**
 * Vertical layout of the StepIndicator.
 */
export const Vertical: Story = {
  args: {
    steps,
    currentStep: 'review',
    orientation: 'vertical',
  },
};

/**
 * StepIndicator with all steps completed.
 * Uses showCurrentAsCompleted to mark the final step as completed.
 */
export const Completed: Story = {
  args: {
    steps,
    currentStep: 'complete',
    showCurrentAsCompleted: true,
  },
};

/**
 * StepIndicator with simple steps (no descriptions).
 */
export const SimpleSteps: Story = {
  args: {
    steps: [
      { id: 'cart', label: 'Cart' },
      { id: 'delivery', label: 'Delivery' },
      { id: 'payment', label: 'Payment' },
    ] as const,
    currentStep: 'delivery',
  },
};
