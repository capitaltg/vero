import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup } from '../src/CheckboxGroup';
import { CheckboxGroupDefault } from '../demos/CheckboxGroupDefault';
import { CheckboxGroupWithSelection } from '../demos/CheckboxGroupWithSelection';
import { CheckboxGroupSingleColumn } from '../demos/CheckboxGroupSingleColumn';
import { CheckboxGroupThreeColumns } from '../demos/CheckboxGroupThreeColumns';
import sourceCodeDefault from '../demos/CheckboxGroupDefault.tsx?raw';
import sourceCodeWithSelection from '../demos/CheckboxGroupWithSelection.tsx?raw';
import sourceCodeSingleColumn from '../demos/CheckboxGroupSingleColumn.tsx?raw';
import sourceCodeThreeColumns from '../demos/CheckboxGroupThreeColumns.tsx?raw';

const meta = {
  title: 'Inputs & Forms/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
  { id: 'option4', label: 'Option 4' },
];

/**
 * Interactive playground for the CheckboxGroup component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    options,
    value: [],
    onChange: () => {},
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the CheckboxGroup component.
 * Shows a group of checkboxes with no initial selection.
 */
export const Default: Story = {
  render: () => <CheckboxGroupDefault />,
  args: {
    options,
    value: [],
    onChange: () => {},
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
 * CheckboxGroup with pre-selected values.
 * Demonstrates how the group appears with multiple checkboxes selected.
 */
export const WithSelection: Story = {
  render: () => <CheckboxGroupWithSelection />,
  args: {
    options,
    value: ['option1', 'option3'],
    onChange: () => {},
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithSelection,
        language: 'tsx',
      },
    },
  },
};

/**
 * CheckboxGroup in a single column layout.
 * Shows checkboxes stacked vertically in one column.
 */
export const SingleColumn: Story = {
  render: () => <CheckboxGroupSingleColumn />,
  args: {
    options,
    columns: 1,
    value: [],
    onChange: () => {},
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeSingleColumn,
        language: 'tsx',
      },
    },
  },
};

/**
 * CheckboxGroup in a three-column layout.
 * Demonstrates how checkboxes can be arranged in multiple columns.
 */
export const ThreeColumns: Story = {
  render: () => <CheckboxGroupThreeColumns />,
  args: {
    options,
    columns: 3,
    value: [],
    onChange: () => {},
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeThreeColumns,
        language: 'tsx',
      },
    },
  },
};
