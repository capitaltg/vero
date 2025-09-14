import type { Meta, StoryObj } from '@storybook/react';
import { HelpCircle } from 'lucide-react';
import { Button } from '../../Button';
import { Input } from '../../Input';
import { Tooltip, TooltipProvider } from '../../Tooltip';
import { FormItem } from '../src/FormItem';

const meta = {
  title: 'Form Components/FormItem',
  component: FormItem,
  parameters: {},
  tags: ['autodocs'],
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
    children: <Input type="email" placeholder="Enter your email" />,
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
    children: <Input type="password" placeholder="Enter your password" />,
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
    children: <Input type="email" placeholder="Enter your email" />,
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
    children: <Input type="email" placeholder="Enter your email" />,
  },
};

/**
 * FormItem with a label slot.
 * Demonstrates how to add additional components to the right of the label.
 */
export const WithLabelSlot: Story = {
  args: {
    label: 'Password',
    elementId: 'password-label-slot-element-id',
    labelSlot: (
      <Tooltip content="Password must be at least 8 characters with uppercase, lowercase, and numbers">
        <Button variant="ghost" size="sm" className="h-auto p-1">
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
        </Button>
      </Tooltip>
    ),
    hintText: 'Must be at least 8 characters long',
    children: <Input type="password" placeholder="Enter your password" />,
  },
  render: args => (
    <TooltipProvider>
      <FormItem {...args} />
    </TooltipProvider>
  ),
};

/**
 * FormItem with both required indicator and label slot.
 * Shows how the required asterisk and label slot work together.
 */
export const RequiredWithLabelSlot: Story = {
  args: {
    label: 'API Key',
    elementId: 'api-key-element-id',
    isRequired: true,
    labelSlot: (
      <Tooltip content="Your API key can be found in your account settings">
        <Button variant="ghost" size="sm" className="h-auto p-1">
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
        </Button>
      </Tooltip>
    ),
    hintText: 'Enter your unique API key',
    children: <Input type="password" placeholder="Enter your API Key" />,
  },
  render: args => (
    <TooltipProvider>
      <FormItem {...args} />
    </TooltipProvider>
  ),
};
