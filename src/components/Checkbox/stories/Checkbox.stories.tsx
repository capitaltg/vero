import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../src/Checkbox';
import { CheckboxDefault } from '../demos/CheckboxDefault';
import { CheckboxChecked } from '../demos/CheckboxChecked';
import { CheckboxDisabled } from '../demos/CheckboxDisabled';
import { CheckboxDisabledChecked } from '../demos/CheckboxDisabledChecked';
import sourceCodeDefault from '../demos/CheckboxDefault.tsx?raw';
import sourceCodeChecked from '../demos/CheckboxChecked.tsx?raw';
import sourceCodeDisabled from '../demos/CheckboxDisabled.tsx?raw';
import sourceCodeDisabledChecked from '../demos/CheckboxDisabledChecked.tsx?raw';

const meta = {
  title: 'Inputs & Forms/Checkbox',
  component: Checkbox,
  parameters: {},
  argTypes: {
    isChecked: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive playground for the Checkbox component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    label: 'Accept terms and conditions',
    id: 'terms',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the Checkbox component.
 * Shows a basic checkbox with a label and interactive state.
 */
export const Default: Story = {
  render: () => <CheckboxDefault />,
  args: {
    label: 'Accept terms and conditions',
    id: 'terms2',
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
 * A checkbox in its checked state.
 * Demonstrates the appearance of a selected checkbox.
 */
export const Checked: Story = {
  render: () => <CheckboxChecked />,
  args: {
    label: 'Checked checkbox',
    id: 'checked',
    isChecked: true,
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeChecked,
        language: 'tsx',
      },
    },
  },
};

/**
 * A disabled checkbox.
 * Shows how the checkbox appears when it's not interactive.
 */
export const Disabled: Story = {
  render: () => <CheckboxDisabled />,
  args: {
    label: 'Disabled checkbox',
    id: 'disabled',
    isDisabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDisabled,
        language: 'tsx',
      },
    },
  },
};

/**
 * A disabled checkbox in its checked state.
 * Demonstrates a non-interactive checkbox that's already selected.
 */
export const DisabledChecked: Story = {
  render: () => <CheckboxDisabledChecked />,
  args: {
    label: 'Disabled checked checkbox',
    id: 'disabled-checked',
    isChecked: true,
    isDisabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeDisabledChecked,
        language: 'tsx',
      },
    },
  },
};
