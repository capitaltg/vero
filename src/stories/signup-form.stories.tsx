import type { Meta, StoryObj } from '@storybook/react';
import { SignUpForm } from '../examples/SignUpForm';
import sourceCode from '../examples/SignUpForm.tsx?raw';

const meta: Meta<typeof SignUpForm> = {
  title: 'Examples/Sign Up Form',
  component: SignUpForm,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A complete sign-up form example demonstrating form validation, error handling, and user input collection. Features include password confirmation, terms acceptance, and country selection.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A fully functional sign-up form with validation.
 * Demonstrates proper form structure, validation feedback, and user experience patterns.
 */
export const Default: Story = {
  render: () => <SignUpForm />,
  parameters: {
    controls: { disable: true },
    docs: {
      source: {
        code: sourceCode,
        language: 'tsx',
      },
    },
  },
};
