import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SingleSelect } from '../src/SingleSelect';
import type { SingleSelectProps } from '../types';

const meta = {
  title: 'Form Components/Select',
  component: SingleSelect,
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
} satisfies Meta<typeof SingleSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
];

const SelectDemo = ({ value: initialValue = '', ...args }: SingleSelectProps) => {
  const [value, setValue] = useState(initialValue);
  return (
    <div className="space-y-4">
      <SingleSelect
        {...args}
        value={value}
        onChange={newValue => {
          setValue(newValue);
          args.onChange?.(newValue);
        }}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};

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
  render: args => <SelectDemo {...args} />,
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select a fruit...',
  },
};

/**
 * Select with a pre-selected value.
 * Demonstrates how the component appears with an initial selection.
 */
export const WithValue: Story = {
  render: args => <SelectDemo {...args} />,
  args: {
    options,
    value: 'apple',
    onChange: () => {},
    placeholder: 'Select a fruit...',
  },
};

/**
 * Select with custom placeholder text.
 * Shows how to customize the default text shown before selection.
 */
export const CustomPlaceholder: Story = {
  render: args => <SelectDemo {...args} />,
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Choose your favorite fruit',
  },
};

/**
 * Select with an extended list of options.
 * Demonstrates how the component handles a larger set of choices with scrolling.
 */
export const WithManyOptions: Story = {
  render: args => <SelectDemo {...args} />,
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
};
