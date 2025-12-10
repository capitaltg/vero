import type { Meta, StoryObj } from '@storybook/react';
import { PopoverCustomPosition } from '../demos/PopoverCustomPosition';
import sourceCodeCustomPosition from '../demos/PopoverCustomPosition.tsx?raw';
import { PopoverWithArrow } from '../demos/PopoverWithArrow';
import sourceCodeWithArrow from '../demos/PopoverWithArrow.tsx?raw';
import { PopoverWithoutArrow } from '../demos/PopoverWithoutArrow';
import sourceCodeWithoutArrow from '../demos/PopoverWithoutArrow.tsx?raw';
import { PopoverContent } from '../src/Popover';

const meta = {
  title: 'Overlays & Feedback/Popover',
  component: PopoverContent,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    hasArrow: {
      control: 'boolean',
      description: 'Whether to show an arrow pointing to the trigger',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    side: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'The side of the trigger element where the popover appears',
      table: {
        defaultValue: {
          summary: 'bottom',
        },
        type: {
          summary: 'top | bottom | left | right',
        },
      },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'The alignment of the popover relative to the trigger',
      table: {
        defaultValue: {
          summary: 'center',
        },
        type: {
          summary: 'start | center | end',
        },
      },
    },
    sideOffset: {
      control: 'number',
      description: 'The distance in pixels between the popover and the trigger',
      table: {
        defaultValue: {
          summary: '4',
        },
        type: {
          summary: 'number',
        },
      },
    },
    zIndex: {
      control: 'number',
      description: 'Z-index for the popover',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    className: {
      type: 'string',
      description: 'Additional class names to apply to the popover content',
    },
  },
} satisfies Meta<typeof PopoverContent>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A popover with an arrow pointer.
 * Demonstrates the default popover with a visual indicator pointing to its trigger element.
 * This example includes form elements to show how the popover can contain complex content.
 */
export const WithArrow: Story = {
  args: {
    hasArrow: true,
  },
  render: args => <PopoverWithArrow {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithArrow,
      },
    },
  },
};

/**
 * A basic popover without an arrow pointer.
 * Shows a simpler version of the popover for when a visual indicator isn't needed.
 */
export const WithoutArrow: Story = {
  args: {
    hasArrow: false,
  },
  render: args => <PopoverWithoutArrow {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithoutArrow,
      },
    },
  },
};

/**
 * A popover with custom positioning.
 * Demonstrates how to control the alignment of the popover relative to its trigger.
 */
export const CustomPosition: Story = {
  args: {
    hasArrow: true,
    align: 'start',
  },
  render: args => <PopoverCustomPosition {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomPosition,
      },
    },
  },
};
