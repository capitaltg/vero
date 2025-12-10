import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../src/Textarea';

const meta = {
  title: 'Inputs & Forms/Textarea',
  component: Textarea,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the textarea',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    value: {
      control: 'text',
      description: 'The value of the textarea',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    isGrowable: {
      control: 'boolean',
      description: 'Whether the textarea should grow automatically as content is added',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the textarea is read-only',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    className: {
      type: 'string',
      description: 'Additional class names to apply to the textarea',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the Textarea component.
 * Shows a basic multiline text input field with placeholder text.
 */
export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
};

/**
 * Textarea with pre-filled content.
 * Demonstrates how the component appears with initial text content.
 */
export const WithValue: Story = {
  args: {
    value:
      'This is a pre-filled textarea with some content that demonstrates how it looks with text inside it.',
    placeholder: 'Type your message here...',
  },
};

/**
 * A disabled textarea.
 * Shows how the component appears when it's not interactive.
 */
export const Disabled: Story = {
  args: {
    isDisabled: true,
    placeholder: 'This textarea is disabled',
  },
};

/**
 * A read-only textarea.
 * Shows how the component appears when content can be viewed but not modified.
 */
export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'This is read-only content that cannot be modified.',
    placeholder: 'This textarea is read-only',
  },
};

/**
 * Textarea with custom styling.
 * Demonstrates how to apply custom styles using className.
 */
export const WithCustomStyle: Story = {
  args: {
    className: 'min-h-[12rem] font-mono',
    placeholder: 'This textarea has custom styling...',
  },
};

/**
 * Auto-growing textarea.
 * Shows how the textarea expands vertically as content is added.
 */
export const Growable: Story = {
  args: {
    isGrowable: true,
    placeholder: 'This textarea will grow as you type...',
  },
};
