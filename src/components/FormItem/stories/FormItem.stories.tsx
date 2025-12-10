import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../Input';
import { FormItemRequiredWithLabelSlot } from '../demos/FormItemRequiredWithLabelSlot';
import sourceCodeRequiredWithLabelSlot from '../demos/FormItemRequiredWithLabelSlot.tsx?raw';
import { FormItemWithLabelSlot } from '../demos/FormItemWithLabelSlot';
import sourceCodeWithLabelSlot from '../demos/FormItemWithLabelSlot.tsx?raw';
import { FormItem } from '../src/FormItem';

const meta = {
  title: 'Inputs & Forms/FormItem',
  component: FormItem,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description:
        'The label for the form item. If a string is provided, it will be wrapped in a `<Label>` component. If a ReactNode is provided, it will be rendered as-is.',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    labelSlot: {
      control: 'text',
      description:
        'An optional slot to display next to the label, such as an info icon with a tooltip or popover.',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    elementId: {
      control: 'text',
      description:
        'The ID used to generate the label, hint, and error IDs for accessibility. If not provided, the ID of the top-level child element will be used if available. This ID must be unique on the page and must be used as the `id` attribute of the child form element so that it can be assocated with the label.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    hintText: {
      control: 'text',
      description: 'Hint text to display below the label and above the form element.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    errorText: {
      control: 'text',
      description:
        'Error text to display below the form element. If provided, the form item will be styled to indicate an error.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    isRequired: {
      control: 'boolean',
      description:
        'Whether the form item is required. If true, an asterisk (*) will be displayed next to the label.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    className: {
      type: 'string',
      description: 'Additional classes to apply to the form item container.',
    },
  },
} satisfies Meta<typeof FormItem>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the FormItem component.
 * Shows a basic form field with a label and input.
 */
export const Default: Story = {
  args: {
    label: 'Email',
    elementId: 'default-element-id',
    children: <Input placeholder="Enter your email" type="email" />,
  },
};

/**
 * FormItem with hint text.
 * Demonstrates how to provide additional context or instructions for a form field.
 */
export const WithHintText: Story = {
  args: {
    label: 'Password',
    elementId: 'password-element-id',
    hintText: 'Must be at least 8 characters long',
    children: <Input placeholder="Enter your password" type="password" />,
  },
};

/**
 * FormItem with error state.
 * Shows how validation errors are displayed to the user.
 */
export const WithError: Story = {
  args: {
    label: 'Username',
    elementId: 'username-element-id',
    errorText: 'Username is already taken',
    children: <Input placeholder="Choose a username" />,
  },
};

/**
 * FormItem with both hint and error text.
 * Demonstrates how to show both helper text and error messages.
 */
export const WithHintAndError: Story = {
  args: {
    label: 'Email',
    elementId: 'email-element-id',
    hintText: 'We will never share your email',
    errorText: 'Please enter a valid email address',
    children: <Input placeholder="Enter your email" type="email" />,
  },
};

/**
 * FormItem with required field indicator.
 * Shows how to mark a field as required with a red asterisk.
 */
export const Required: Story = {
  args: {
    label: 'Email',
    elementId: 'email-required-element-id',
    hintText: 'This field is required',
    isRequired: true,
    children: <Input placeholder="Enter your email" type="email" />,
  },
};

/**
 * FormItem with a label slot.
 * Demonstrates how to add additional components to the right of the label.
 */
export const WithLabelSlot: Story = {
  args: {
    children: <Input />,
  },
  render: () => <FormItemWithLabelSlot />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithLabelSlot,
      },
    },
  },
};

/**
 * FormItem with both required indicator and label slot.
 * Shows how the required asterisk and label slot work together.
 */
export const RequiredWithLabelSlot: Story = {
  args: {
    children: <Input />,
  },
  render: () => <FormItemRequiredWithLabelSlot />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeRequiredWithLabelSlot,
      },
    },
  },
};
