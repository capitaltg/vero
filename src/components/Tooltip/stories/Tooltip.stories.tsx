import { Button } from '@/components/Button';
import type { Meta, StoryObj } from '@storybook/react';
import sourceCodeAlignment from '../demos/TooltipAlignment.tsx?raw';
import sourceCodeDefault from '../demos/TooltipDefault.tsx?raw';
import sourceCodePosition from '../demos/TooltipPosition.tsx?raw';
import sourceCodeWithoutArrow from '../demos/TooltipWithoutArrow.tsx?raw';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

const meta = {
  title: 'Overlays & Feedback/Tooltip',
  component: Tooltip,
  parameters: {},
  // The docs page is Tooltip.mdx, so there's no autodocs page.
  decorators: [
    Story => (
      <TooltipProvider delayDuration={0}>
        <Story />
      </TooltipProvider>
    ),
  ],
  argTypes: {
    children: {
      control: false,
    },
    content: {
      control: 'text',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    side: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      table: {
        type: {
          summary: 'top | bottom | left | right',
        },
      },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      table: {
        type: {
          summary: 'start | center | end',
        },
      },
    },
    offset: {
      control: 'number',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    hasArrow: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'true',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    open: {
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    defaultOpen: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    onOpenChange: {
      table: {
        type: {
          summary: '(open: boolean) => void',
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
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Use the controls to try each option. The docs page shows it under "Try it"; keep it the
 * first story, since the Examples section skips the first one.
 */
export const Playground: Story = {
  args: {
    content: 'This is a tooltip',
    side: 'top',
    align: 'center',
    offset: 2,
    hasArrow: true,
    children: <Button variant="primary">Hover me</Button>,
  },
};

/**
 * The default state of the Tooltip component.
 * Shows a basic tooltip with text content.
 */
export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <Button variant="primary">Hover me</Button>,
  },
  render: args => (
    <TooltipProvider delayDuration={0}>
      <Tooltip {...args} />
    </TooltipProvider>
  ),
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
      },
    },
  },
};

/**
 * Tooltip with a custom position.
 * Demonstrates how to position the tooltip relative to its trigger element.
 */
export const Position: Story = {
  args: {
    content: 'This tooltip appears on the right',
    side: 'right',
    offset: 8,
    children: <Button variant="primary">Hover me</Button>,
  },
  render: args => (
    <TooltipProvider delayDuration={0}>
      <Tooltip {...args} />
    </TooltipProvider>
  ),
  parameters: {
    docs: {
      source: {
        code: sourceCodePosition,
      },
    },
  },
};

/**
 * Tooltip with custom alignment.
 * Demonstrates how to align the tooltip content differently.
 */
export const Alignment: Story = {
  args: {
    content: 'This tooltip is start-aligned',
    align: 'start',
    children: <Button variant="primary">Hover me</Button>,
  },
  render: args => (
    <TooltipProvider delayDuration={0}>
      <Tooltip {...args} />
    </TooltipProvider>
  ),
  parameters: {
    docs: {
      source: {
        code: sourceCodeAlignment,
      },
    },
  },
};

/**
 * Tooltip without an arrow.
 * Demonstrates how to disable the arrow pointer on the tooltip.
 * This can be useful for a cleaner look or when the arrow is not needed.
 */
export const WithoutArrow: Story = {
  args: {
    content: 'This tooltip has no arrow',
    hasArrow: false,
    children: <Button variant="primary">Hover me</Button>,
  },
  render: args => (
    <TooltipProvider delayDuration={0}>
      <Tooltip {...args} />
    </TooltipProvider>
  ),
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithoutArrow,
      },
    },
  },
};
