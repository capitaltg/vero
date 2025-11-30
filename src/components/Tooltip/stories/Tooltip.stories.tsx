import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/Button';
import { TooltipAlignment } from '../demos/TooltipAlignment';
import sourceCodeAlignment from '../demos/TooltipAlignment.tsx?raw';
import { TooltipDefault } from '../demos/TooltipDefault';
import sourceCodeDefault from '../demos/TooltipDefault.tsx?raw';
import { TooltipPosition } from '../demos/TooltipPosition';
import sourceCodePosition from '../demos/TooltipPosition.tsx?raw';
import { TooltipWithoutArrow } from '../demos/TooltipWithoutArrow';
import sourceCodeWithoutArrow from '../demos/TooltipWithoutArrow.tsx?raw';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

const meta = {
  title: 'Overlays & Feedback/Tooltip',
  component: Tooltip,
  parameters: {},
  tags: ['autodocs'],
  decorators: [
    Story => (
      <TooltipProvider delayDuration={0}>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the Tooltip component.
 * Shows a basic tooltip with text content.
 */
export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <Button variant="primary">Hover me</Button>,
  },
  render: () => <TooltipDefault />,
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
  render: () => <TooltipPosition />,
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
  render: () => <TooltipAlignment />,
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
  render: () => <TooltipWithoutArrow />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithoutArrow,
      },
    },
  },
};
