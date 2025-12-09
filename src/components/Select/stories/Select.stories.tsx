import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../src/Select';
import { SelectDefault } from '../demos/SelectDefault';
import { SelectWithValue } from '../demos/SelectWithValue';
import { SelectCustomPlaceholder } from '../demos/SelectCustomPlaceholder';
import { SelectWithManyOptions } from '../demos/SelectWithManyOptions';
import { SelectWithLongLabel } from '../demos/SelectWithLongLabel';
import sourceCodeDefault from '../demos/SelectDefault.tsx?raw';
import sourceCodeWithValue from '../demos/SelectWithValue.tsx?raw';
import sourceCodeCustomPlaceholder from '../demos/SelectCustomPlaceholder.tsx?raw';
import sourceCodeWithManyOptions from '../demos/SelectWithManyOptions.tsx?raw';
import sourceCodeWithLongLabel from '../demos/SelectWithLongLabel.tsx?raw';

const meta = {
  title: 'Inputs & Forms/Select',
  component: Select,
  parameters: {},
  argTypes: {
    value: {
      control: 'text',
      description: 'Currently selected value',
      type: { name: 'string', required: false },
    },
    onChange: {
      description: 'Callback when selection changes',
      type: { name: 'function', required: true },
      action: 'selection changed',
    },
    options: {
      control: 'object',
      description: 'Array of select options',
      type: { name: 'array', value: { name: 'object', value: {} }, required: true },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no value is selected',
      type: { name: 'string', required: false },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
];

/**
 * Interactive playground for the Select component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select a fruit...',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the Select component.
 * Shows a basic dropdown with a list of fruit options and placeholder text.
 */
export const Default: Story = {
  render: () => <SelectDefault />,
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select a fruit...',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
        language: 'tsx',
      },
    },
  },
};

/**
 * Select with a pre-selected value.
 * Demonstrates how the component appears with an initial selection.
 */
export const WithValue: Story = {
  render: () => <SelectWithValue />,
  args: {
    options,
    value: 'apple',
    onChange: () => {},
    placeholder: 'Select a fruit...',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithValue,
        language: 'tsx',
      },
    },
  },
};

/**
 * Select with custom placeholder text.
 * Shows how to customize the default text shown before selection.
 */
export const CustomPlaceholder: Story = {
  render: () => <SelectCustomPlaceholder />,
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Choose your favorite fruit',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomPlaceholder,
        language: 'tsx',
      },
    },
  },
};

/**
 * Select with an extended list of options.
 * Demonstrates how the component handles a larger set of choices with scrolling.
 */
export const WithManyOptions: Story = {
  render: () => <SelectWithManyOptions />,
  args: {
    options: [
      ...options,
      { value: 'pear', label: 'Pear' },
      { value: 'peach', label: 'Peach' },
      { value: 'plum', label: 'Plum' },
      { value: 'kiwi', label: 'Kiwi' },
      { value: 'pineapple', label: 'Pineapple' },
    ],
    value: '',
    onChange: () => {},
    placeholder: 'Select a fruit...',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithManyOptions,
        language: 'tsx',
      },
    },
  },
};

/**
 * Select with very long option labels.
 * Demonstrates how the component handles text truncation when a long label is selected.
 * The selected value will be truncated with an ellipsis to prevent overflow.
 */
export const WithLongLabel: Story = {
  render: () => <SelectWithLongLabel />,
  args: {
    options: [
      { value: 'short', label: 'Short option' },
      { value: 'medium', label: 'This is a medium length option label' },
      {
        value: 'very-long',
        label:
          'This is an extremely long option label that should demonstrate text truncation when selected in the Select component trigger button',
      },
      {
        value: 'super-long',
        label:
          'This is a super extremely long option label that contains multiple sentences and should definitely demonstrate text truncation with ellipsis when selected in the Select component trigger button. The text should be cut off with an ellipsis to prevent overflow.',
      },
    ],
    value: '',
    onChange: () => {},
    placeholder: 'Select an option with a long label...',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithLongLabel,
        language: 'tsx',
      },
    },
  },
};
