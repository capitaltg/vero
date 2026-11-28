import type { Meta, StoryObj } from '@storybook/react';
import { SurveyForm } from '../examples/SurveyForm';
import sourceCode from '../examples/SurveyForm.tsx?raw';

const meta: Meta<typeof SurveyForm> = {
  title: 'Examples/Survey Form',
  component: SurveyForm,
  parameters: {
    layout: 'fullscreen',
    docs: {
      // No "On this page" list: the page has no sections to list.
      toc: false,
      description: {
        component:
          'A multi-step survey form with progress tracking. Demonstrates step indicators, various input types, and conditional navigation based on form completion.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A multi-step survey form with progress tracking.
 * Demonstrates step-by-step form flow, validation at each stage, and various question types.
 */
export const Default: Story = {
  render: () => <SurveyForm />,
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
