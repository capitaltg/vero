import type { Meta, StoryObj } from '@storybook/react';
import { SwitchGroup } from '../src/SwitchGroup';
import { SwitchGroupDefault } from '../demos/SwitchGroupDefault';
import { SwitchGroupWithSelection } from '../demos/SwitchGroupWithSelection';
import { SwitchGroupSingleColumn } from '../demos/SwitchGroupSingleColumn';
import { SwitchGroupThreeColumns } from '../demos/SwitchGroupThreeColumns';
import { SwitchGroupWithManyOptions } from '../demos/SwitchGroupWithManyOptions';
import sourceCodeDefault from '../demos/SwitchGroupDefault.tsx?raw';
import sourceCodeWithSelection from '../demos/SwitchGroupWithSelection.tsx?raw';
import sourceCodeSingleColumn from '../demos/SwitchGroupSingleColumn.tsx?raw';
import sourceCodeThreeColumns from '../demos/SwitchGroupThreeColumns.tsx?raw';
import sourceCodeWithManyOptions from '../demos/SwitchGroupWithManyOptions.tsx?raw';

const options = [
  { id: 'notifications', label: 'Enable notifications' },
  { id: 'emails', label: 'Receive emails' },
  { id: 'marketing', label: 'Marketing communications' },
  { id: 'updates', label: 'Auto-updates' },
];

const meta = {
  title: 'Inputs & Forms/SwitchGroup',
  component: SwitchGroup,
  parameters: {},
  argTypes: {
    value: {
      control: 'object',
      description: 'Array of selected switch IDs',
      type: { name: 'array', value: { name: 'string' }, required: false },
    },
    onChange: {
      description: 'Callback when selection changes',
      type: { name: 'function', required: true },
    },
    options: {
      control: 'object',
      description: 'Array of switch options',
      type: { name: 'array', value: { name: 'object', value: {} }, required: true },
    },
    columns: {
      control: 'radio',
      options: [1, 2, 3, 4],
      description: 'Number of columns in the grid',
      type: { name: 'number', required: false },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SwitchGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive playground for the SwitchGroup component.
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
 * The default state of the SwitchGroup component.
 * Shows a group of switches arranged in a single column with no initial selections.
 */
export const Default: Story = {
  render: () => <SwitchGroupDefault />,
  args: {
    options,
    columns: 2,
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
 * SwitchGroup with pre-selected values.
 * Demonstrates how the group appears with multiple switches toggled on.
 */
export const WithSelection: Story = {
  render: () => <SwitchGroupWithSelection />,
  args: {
    options,
    value: ['notifications', 'emails'],
    onChange: () => {},
    columns: 2,
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
 * SwitchGroup in a single column layout.
 * Shows switches stacked vertically in one column.
 */
export const SingleColumn: Story = {
  render: () => <SwitchGroupSingleColumn />,
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
 * SwitchGroup in a three-column layout.
 * Demonstrates how switches can be arranged in multiple columns.
 */
export const ThreeColumns: Story = {
  render: () => <SwitchGroupThreeColumns />,
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

/**
 * SwitchGroup with an extended list of options.
 * Shows how the component handles a larger set of switches, including disabled states.
 */
export const WithManyOptions: Story = {
  render: () => <SwitchGroupWithManyOptions />,
  args: {
    options: [
      ...options,
      { id: 'backup', label: 'Automatic backup' },
      { id: 'location', label: 'Location tracking (disabled)', isDisabled: true },
      { id: 'sync', label: 'Cloud sync' },
      { id: 'analytics', label: 'Usage analytics (disabled)', isDisabled: true },
      { id: 'beta', label: 'Beta features' },
    ],
    columns: 2,
    value: [],
    onChange: () => {},
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
