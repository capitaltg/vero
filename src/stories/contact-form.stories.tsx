import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from '../examples/ContactForm';
import sourceCode from '../examples/ContactForm.tsx?raw';

const meta: Meta<typeof ContactForm> = {
  title: 'Examples/Contact Form',
  component: ContactForm,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A comprehensive contact form for customer support and inquiries. Features subject categorization, priority selection, and detailed message input.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A full-featured contact form for customer communication.
 * Demonstrates form layout, categorization, and priority handling.
 */
export const Default: Story = {
  render: () => <ContactForm />,
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
