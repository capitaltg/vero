import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioGroup } from '../src/RadioGroup';
import type { RadioGroupProps } from '../types';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
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
      description: 'Array of radio options',
      type: { name: 'array', value: { name: 'object', value: {} }, required: true },
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description:
        'Layout orientation of the radio group (only applies to default and button variants)',
      type: { name: 'string', required: false },
      table: {
        type: {
          summary: 'horizontal | vertical',
        },
      },
    },
    variant: {
      control: 'radio',
      options: ['default', 'tile', 'button'],
      description: 'Visual variant of radio buttons',
      type: { name: 'string', required: false },
      table: {
        type: {
          summary: 'default | tile | button',
        },
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const tileOptions = [
  {
    value: 'startup',
    label: 'Startup',
    description: 'Perfect for new businesses and small teams',
  },
  {
    value: 'business',
    label: 'Business',
    description: 'For medium-sized businesses and growing teams',
  },
  {
    value: 'enterprise',
    label: 'Enterprise',
    description: 'For large organizations and enterprise teams',
  },
];

const RadioGroupDemo = ({ value: initialValue = '', ...args }: RadioGroupProps) => {
  const [value, setValue] = useState(initialValue);
  return (
    <div className="space-y-4">
      <RadioGroup
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
 * Interactive playground for the RadioGroup component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the RadioGroup component.
 * Shows a basic vertical radio group with no initial selection.
 */
export const Default: Story = {
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
  },
};

/**
 * RadioGroup with a pre-selected value.
 * Demonstrates how the group appears with an initial selection.
 */
export const WithSelection: Story = {
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: 'option2',
    onChange: () => {},
  },
};

/**
 * RadioGroup with horizontal layout.
 * Shows radio options arranged in a horizontal line.
 */
export const Horizontal: Story = {
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    orientation: 'horizontal',
  },
};

/**
 * RadioGroup with vertical layout.
 * Shows radio options stacked vertically.
 */
export const Vertical: Story = {
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    orientation: 'vertical',
  },
};

/**
 * RadioGroup with tile variant.
 * Shows radio options as larger tiles with descriptions.
 */
export const Tile: Story = {
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: tileOptions,
    value: '',
    onChange: () => {},
    variant: 'tile',
  },
};

/**
 * Tile variant RadioGroup with a pre-selected value.
 * Demonstrates how tile radio options appear with an initial selection.
 */
export const TileWithSelection: Story = {
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: tileOptions,
    value: 'business',
    onChange: () => {},
    variant: 'tile',
  },
};

/**
 * RadioGroup with button variant.
 * Shows radio options styled as buttons.
 */
export const Button: Story = {
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    variant: 'button',
    orientation: 'horizontal',
  },
};

/**
 * Button variant RadioGroup with vertical layout.
 * Shows radio options styled as buttons arranged vertically.
 */
export const ButtonVertical: Story = {
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: '',
    onChange: () => {},
    variant: 'button',
    orientation: 'vertical',
  },
};

/**
 * Button variant RadioGroup with a pre-selected value.
 * Demonstrates how button radio options appear with an initial selection.
 */
export const ButtonWithSelection: Story = {
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: defaultOptions,
    value: 'option2',
    onChange: () => {},
    variant: 'button',
  },
};
