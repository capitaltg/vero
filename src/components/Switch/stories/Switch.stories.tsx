import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../src/Switch';
import { SwitchDefault } from '../demos/SwitchDefault';
import { SwitchChecked } from '../demos/SwitchChecked';
import { SwitchDisabled } from '../demos/SwitchDisabled';
import { SwitchDisabledChecked } from '../demos/SwitchDisabledChecked';
import { SwitchWithCustomLabel } from '../demos/SwitchWithCustomLabel';
import sourceCodeDefault from '../demos/SwitchDefault.tsx?raw';
import sourceCodeChecked from '../demos/SwitchChecked.tsx?raw';
import sourceCodeDisabled from '../demos/SwitchDisabled.tsx?raw';
import sourceCodeDisabledChecked from '../demos/SwitchDisabledChecked.tsx?raw';
import sourceCodeWithCustomLabel from '../demos/SwitchWithCustomLabel.tsx?raw';

const meta = {
  title: 'Inputs & Forms/Switch',
  component: Switch,
  parameters: {},
  argTypes: {
    isChecked: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    onCheckedChange: {
      action: 'checked changed',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive playground for the Switch component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    label: 'Airplane Mode',
    id: 'airplane-mode',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the Switch component.
 * Shows a basic toggle switch with a label.
 */
export const Default: Story = {
  render: () => <SwitchDefault />,
  args: {
    label: 'Airplane Mode',
    id: 'airplane-mode',
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
 * A switch in its checked state.
 * Demonstrates how the switch appears when toggled on.
 */
export const Checked: Story = {
  render: () => <SwitchChecked />,
  args: {
    label: 'Notifications',
    id: 'notifications',
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
 * A disabled switch.
 * Shows how the switch appears when it's not interactive.
 */
export const Disabled: Story = {
  render: () => <SwitchDisabled />,
  args: {
    label: 'Disabled switch',
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
 * A disabled switch in its checked state.
 * Demonstrates a non-interactive switch that's toggled on.
 */
export const DisabledChecked: Story = {
  render: () => <SwitchDisabledChecked />,
  args: {
    label: 'Disabled checked switch',
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

/**
 * A switch with custom label content.
 * Shows how to use rich content in the switch label.
 */
export const WithCustomLabel: Story = {
  render: () => <SwitchWithCustomLabel />,
  args: {
    label: (
      <div className="flex flex-col">
        <span className="font-bold">Dark Mode</span>
        <span className="text-sm text-muted-foreground">Enable dark mode theme</span>
      </div>
    ),
    id: 'dark-mode',
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithCustomLabel,
        language: 'tsx',
      },
    },
  },
};
