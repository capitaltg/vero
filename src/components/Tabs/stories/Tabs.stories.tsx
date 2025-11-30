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
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the Tabs component.
 * Shows a basic tab interface with multiple panels.
 */
export const Default: Story = {
  render: () => <TabsDefault />,
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
  render: () => <TabsWithDisabledTab />,
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
  render: () => <TabsCustomStyling />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomStyling,
      },
    },
  },
};
