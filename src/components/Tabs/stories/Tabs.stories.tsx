import type { Meta, StoryObj } from '@storybook/react';
import { TabsCustomStyling } from '../demos/TabsCustomStyling';
import sourceCodeCustomStyling from '../demos/TabsCustomStyling.tsx?raw';
import { TabsDefault } from '../demos/TabsDefault';
import sourceCodeDefault from '../demos/TabsDefault.tsx?raw';
import { TabsWithDisabledTab } from '../demos/TabsWithDisabledTab';
import sourceCodeWithDisabledTab from '../demos/TabsWithDisabledTab.tsx?raw';
import { Tabs } from '../src/Tabs';

const meta = {
  title: 'Actions & Navigation/Tabs',
  component: Tabs,
  parameters: {},
  // The docs page is Tabs.mdx, so there's no autodocs page.
  argTypes: {
    value: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    defaultValue: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    activationMode: {
      control: 'radio',
      options: ['manual', 'automatic'],
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Use the controls to try each option. The docs page shows it under "Try it"; keep it the
 * first story, since the Examples section skips the first one.
 */
export const Playground: Story = {
  args: {
    defaultValue: 'account',
    orientation: 'horizontal',
    activationMode: 'manual',
  },
  render: args => <TabsDefault {...args} />,
};

/**
 * The default state of the Tabs component.
 * Shows a basic tab interface with multiple panels.
 */
export const Default: Story = {
  args: {
    defaultValue: 'account',
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
