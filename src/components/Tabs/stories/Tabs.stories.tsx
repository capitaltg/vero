import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../src/Tabs';
import { TabsCustomStyling } from '../demos/TabsCustomStyling';
import sourceCodeCustomStyling from '../demos/TabsCustomStyling.tsx?raw';
import { TabsDefault } from '../demos/TabsDefault';
import sourceCodeDefault from '../demos/TabsDefault.tsx?raw';
import { TabsWithDisabledTab } from '../demos/TabsWithDisabledTab';
import sourceCodeWithDisabledTab from '../demos/TabsWithDisabledTab.tsx?raw';

const meta = {
  title: 'Actions & Navigation/Tabs',
  component: Tabs,
  parameters: {},
  tags: ['autodocs'],
  args: {
    activationMode: 'manual',
  },
  argTypes: {
    value: {
      control: 'text',
      description:
        'The controlled value of the active tab. When provided, the component becomes a controlled component.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    defaultValue: {
      control: 'text',
      description: 'The default value of the active tab when the component is uncontrolled.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    activationMode: {
      control: 'radio',
      options: ['automatic', 'manual'],
      description:
        'How tabs are activated. When set to "automatic", tabs are activated when receiving focus. When set to "manual", tabs are activated when clicked.',
      table: {
        defaultValue: {
          summary: 'manual',
        },
        type: {
          summary: 'automatic | manual',
        },
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the Tabs component.
 * Shows a basic tab interface with multiple panels.
 */
export const Default: Story = {
  args: {
    defaultValue: 'account',
    activationMode: 'manual',
  },
  render: args => <TabsDefault {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
      },
    },
  },
};

/**
 * Tabs with disabled state.
 * Shows how tabs appear when certain options are not available.
 */
export const WithDisabledTab: Story = {
  args: {
    defaultValue: 'active',
    activationMode: 'manual',
  },
  render: args => <TabsWithDisabledTab {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithDisabledTab,
      },
    },
  },
};

/**
 * Tabs with custom styling.
 * Demonstrates how to customize the appearance of tabs.
 */
export const CustomStyling: Story = {
  args: {
    defaultValue: 'tab1',
    activationMode: 'manual',
  },
  render: args => <TabsCustomStyling {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomStyling,
      },
    },
  },
};
