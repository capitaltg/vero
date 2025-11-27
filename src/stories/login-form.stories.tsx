import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from '../examples/LoginForm';
import sourceCode from '../examples/LoginForm.tsx?raw';

const meta: Meta<typeof LoginForm> = {
  title: 'Examples/Login Form',
  component: LoginForm,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A modern login form with email/password authentication and social login options. Includes error handling, remember me functionality, and password recovery link.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A complete login form with social authentication options.
 * Demonstrates error handling, form validation, and modern authentication patterns.
 */
export const Default: Story = {
  render: () => <LoginForm />,
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
