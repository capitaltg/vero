import type { Meta, StoryObj } from '@storybook/react';
import { StepIndicatorInteractive } from '../demos/StepIndicatorInteractive';
import sourceCode from '../demos/StepIndicatorInteractive.tsx?raw';
import { StepIndicator } from '../src/StepIndicator';

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
  // The docs page is StepIndicator.mdx, so there's no autodocs page.
  args: {
    currentStep: 'profile',
    headingLevel: 'h4',
    // orientation: 'horizontal',
    showCurrentAsCompleted: false,
    showLabels: true,
    steps,
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'counter'],
      type: { name: 'string', required: false },
      table: {
        defaultValue: {
          summary: 'default',
        },
        type: {
          summary: 'default | counter',
        },
      },
    },
    // orientation: {
    //   control: 'radio',
    //   options: ['horizontal', 'vertical'],
    //   description:
    //     'Layout orientation of the step indicator. Only available for the "counter" variant. The "default" variant is always horizontal.',
    //   type: { name: 'string', required: false },
    //   table: {
    //     defaultValue: {
    //       summary: 'horizontal',
    //     },
    //     type: {
    //       summary: 'horizontal | vertical',
    //     },
    //   },
    // },
    currentStep: {
      control: 'select',
      options: steps.map(s => s.id),
      type: { name: 'string', required: true },
    },
    steps: {
      control: 'object',
      type: { name: 'array', value: { name: 'object', value: {} }, required: true },
    },
    showCurrentAsCompleted: {
      control: 'boolean',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    headingLevel: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      type: { name: 'string', required: false },
      table: {
        defaultValue: {
          summary: 'h4',
        },
        type: {
          summary: 'h1 | h2 | h3 | h4 | h5 | h6',
        },
      },
    },
    showLabels: {
      control: 'boolean',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'true',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
  },
} satisfies Meta<typeof StepIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Use the controls to try each option. The docs page shows it under "Try It"; keep it the
 * first story, since the Examples section skips the first one.
 */
export const Playground: Story = {};

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
 * The USWDS-style default variant with header and segments.
 * Shows "Step X of Y" with the current step label.
 */
export const Default: Story = {
  args: {
    steps,
    currentStep: 'profile',
    variant: 'default',
  },
};

/**
 * The counter variant with numbered circles and connectors.
 */
export const Counter: Story = {
  args: {
    steps,
    currentStep: 'profile',
    variant: 'counter',
  },
};

/**
 * Vertical layout of the StepIndicator (counter variant only).
 */
// export const Vertical: Story = {
//   args: {
//     steps,
//     currentStep: 'review',
//     variant: 'counter',
//     orientation: 'vertical',
//   },
// };

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

/**
 * StepIndicator without labels below the segments.
 * Labels are hidden but still available to screen readers.
 */
export const WithoutLabels: Story = {
  args: {
    steps,
    currentStep: 'profile',
    variant: 'default',
    showLabels: false,
  },
};

/**
 * On narrow viewports (below the `md` breakpoint, 768px), the default variant
 * hides its segment bars and labels, leaving just the "Step X of Y" header.
 * This story opens in a mobile viewport; widen the preview to see the bars return.
 */
export const Mobile: Story = {
  args: {
    steps,
    currentStep: 'profile',
    variant: 'default',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },
};
