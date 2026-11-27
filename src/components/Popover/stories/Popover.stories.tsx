import type { Meta, StoryObj } from '@storybook/react';
import { PopoverCustomPosition } from '../demos/PopoverCustomPosition';
import sourceCodeCustomPosition from '../demos/PopoverCustomPosition.tsx?raw';
import { PopoverInDialog } from '../demos/PopoverInDialog';
import sourceCodeInDialog from '../demos/PopoverInDialog.tsx?raw';
import { PopoverWithArrow } from '../demos/PopoverWithArrow';
import sourceCodeWithArrow from '../demos/PopoverWithArrow.tsx?raw';
import { PopoverWithoutArrow } from '../demos/PopoverWithoutArrow';
import sourceCodeWithoutArrow from '../demos/PopoverWithoutArrow.tsx?raw';
import { PopoverContent } from '../src/Popover';

const meta = {
  title: 'Overlays & Feedback/Popover',
  component: PopoverContent,
  parameters: {},
  // The docs page is Popover.mdx, so there's no autodocs page.
  argTypes: {
    hasArrow: {
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    side: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
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
 * Use the controls to try each option. The docs page shows it under "Try It"; keep it the
 * first story, since the Examples section skips the first one.
 */
export const Playground: Story = {
  args: {
    hasArrow: true,
    side: 'bottom',
    align: 'center',
    sideOffset: 4,
  },
  render: args => <PopoverWithArrow {...args} />,
};

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

/**
 * A popover inside a modal Dialog, used as a color picker in a "Create Label" form.
 * The popover renders outside the dialog, yet its swatches stay clickable even though the dialog
 * disables pointer events on the rest of the page.
 */
export const InDialog: Story = {
  render: args => <PopoverInDialog {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeInDialog,
      },
    },
  },
};
