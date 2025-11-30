import type { Meta, StoryObj } from '@storybook/react';
import { Command } from '../src/Command';
import { CommandDefault } from '../demos/CommandDefault';
import sourceCodeDefault from '../demos/CommandDefault.tsx?raw';
import { CommandWithoutGroups } from '../demos/CommandWithoutGroups';
import sourceCodeWithoutGroups from '../demos/CommandWithoutGroups.tsx?raw';

const meta = {
  title: 'Overlays & Feedback/Command',
  component: Command,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default command menu with groups and suggestions.
 * Shows a fully featured command palette with search, groups, and items.
 */
export const Default: Story = {
  render: () => <CommandDefault />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
      },
    },
  },
};

/**
 * A simplified command menu without groups.
 * Shows a basic list of commands without categorization.
 */
export const WithoutGroups: Story = {
  render: () => <CommandWithoutGroups />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithoutGroups,
      },
    },
  },
};
