import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '../src/Popover';
import { PopoverCustomPosition } from '../demos/PopoverCustomPosition';
import sourceCodeCustomPosition from '../demos/PopoverCustomPosition.tsx?raw';
import { PopoverWithArrow } from '../demos/PopoverWithArrow';
import sourceCodeWithArrow from '../demos/PopoverWithArrow.tsx?raw';
import { PopoverWithoutArrow } from '../demos/PopoverWithoutArrow';
import sourceCodeWithoutArrow from '../demos/PopoverWithoutArrow.tsx?raw';

const meta = {
  title: 'Overlays & Feedback/Popover',
  component: Popover,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A popover with an arrow pointer.
 * Demonstrates the default popover with a visual indicator pointing to its trigger element.
 * This example includes form elements to show how the popover can contain complex content.
 */
export const WithArrow: Story = {
  render: () => <PopoverWithArrow />,
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
  render: () => <PopoverWithoutArrow />,
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
  render: () => <PopoverCustomPosition />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomPosition,
      },
    },
  },
};
