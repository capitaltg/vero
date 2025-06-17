import { Button } from '@/components/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Alert } from '../src/Alert';
import { AlertProps } from '../types';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {},
  tags: ['autodocs'],
  args: {
    size: 'default',
    headingLevel: 'h2',
    hasIcon: true,
    isClosable: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'danger', 'info'],
      description: 'The visual style variant of the alert',
      table: {
        type: {
          summary: 'success | warning | danger | info',
        },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'default'],
      description: 'The size of the alert',
      table: {
        type: {
          summary: 'sm | default',
        },
      },
    },
    headingLevel: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The HTML heading level for the alert heading',
      table: {
        type: {
          summary: 'h1 | h2 | h3 | h4 | h5 | h6',
        },
      },
    },
    heading: {
      control: 'text',
      description: 'The heading text for the alert',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    hasIcon: {
      control: 'boolean',
      description: 'Whether to show the status icon',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    isClosable: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    children: {
      control: 'text',
      description: 'The content of the alert',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

const AlertDemo = ({ ...args }: AlertProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="space-y-4">
      <Button onClick={() => setIsOpen(true)}>Show Alert</Button>
      {isOpen ? <Alert {...args} onClose={() => setIsOpen(false)} /> : null}
    </div>
  );
};

/**
 * A successs alert with standard sizing.
 * Demonstrates a typical success message with both heading and description.
 */
export const Success: Story = {
  args: {
    variant: 'success',
    heading: 'Success',
    children: 'Your changes have been saved successfully.',
  },
};

/**
 * A warning alert with standard sizing.
 * Shows how to display cautionary messages that require attention.
 */
export const Warning: Story = {
  args: {
    variant: 'warning',
    heading: 'Warning',
    children: 'Warning: Your subscription will expire soon.',
  },
};

/**
 * An error alert with standard sizing.
 * Used to communicate critical errors or failures that need immediate attention.
 */
export const Danger: Story = {
  args: {
    variant: 'danger',
    heading: 'Danger',
    children: 'Error: Failed to save changes. Please try again.',
  },
};

/**
 * An information alert with standard sizing.
 * Used for general announcements or updates that aren't critical.
 */
export const Info: Story = {
  args: {
    variant: 'info',
    heading: 'Information',
    children: 'Update available: A new version has been released.',
  },
};

/**
 * An alert without an icon.
 * Demonstrates how to hide the status icon while maintaining the alert's structure.
 */
export const NoIcon: Story = {
  args: {
    variant: 'info',
    heading: 'No Icon',
    children: 'This is an alert without an icon.',
    hasIcon: false,
  },
};

/**
 * An alert without a heading.
 * Shows how to create a simpler alert when a heading isn't needed.
 */
export const NoHeading: Story = {
  args: {
    variant: 'info',
    children: 'This is an alert without a heading.',
  },
};

/**
 * An alert without a heading.
 * Shows how to create a simpler alert when a heading isn't needed.
 */
export const NoIconNoHeading: Story = {
  args: {
    variant: 'info',
    children: 'This is an alert without an icon or heading.',
    hasIcon: false,
  },
};

/**
 * A compact success alert.
 * Shows how the alert appears with reduced padding and font sizes.
 */
export const Small: Story = {
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success',
    children: 'Your changes have been saved successfully.',
  },
};

/**
 * A success alert without an icon.
 * Demonstrates how to hide the status icon while maintaining the alert's structure.
 */
export const SmallNoIcon: Story = {
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success',
    children: 'Your changes have been saved successfully.',
    hasIcon: false,
  },
};

/**
 * A compact success alert without a heading.
 * Shows the alert's appearance when only displaying the message content.
 */
export const SmallNoHeading: Story = {
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.',
  },
};

/**
 * A compact success alert with an icon but no heading.
 * Demonstrates the layout when combining the icon with message content only.
 */
export const SmallNoIconNoHeading: Story = {
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.',
    hasIcon: false,
  },
};

/**
 * A closable alert.
 * Shows how to add a close button to dismiss the alert.
 */
export const Closable: Story = {
  render: args => <AlertDemo {...args} />,
  args: {
    variant: 'info',
    heading: 'Closable Alert',
    children: 'This alert can be dismissed by clicking the close button.',
    isClosable: true,
  },
};

/**
 * An alert with a custom heading level.
 * Demonstrates how to adjust the semantic heading level for accessibility.
 */
export const CustomHeadingLevel: Story = {
  args: {
    variant: 'info',
    heading: 'H3 Heading',
    headingLevel: 'h3',
    children: 'This alert uses an h3 heading level.',
  },
};

/**
 * An alert with rich, extended content.
 * Demonstrates how the alert handles longer messages and React components while maintaining proper layout.
 */
export const RichContent: Story = {
  args: {
    variant: 'info',
    heading: 'Detailed Information',
    children: (
      <div className="space-y-3">
        <p>
          This is an alert with a longer message that might wrap to multiple lines. It demonstrates
          how the alert component handles larger content while maintaining proper spacing and
          alignment.
        </p>
        <p>
          This alert also contains <strong>rich content</strong> including{' '}
          <a
            href="https://storybook.js.org/docs/react/writing-stories/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline"
          >
            links to documentation
          </a>{' '}
          and demonstrates support for React components.
        </p>
      </div>
    ),
  },
};

/**
 * A confirmation action alert.
 * Used to confirm critical actions like deletions or irreversible changes.
 */
export const ConfirmationAction: Story = {
  args: {
    variant: 'danger',
    heading: 'Delete Account?',
    children: (
      <div>
        <p>
          Are you sure you permanently want to delete your account? This action cannot be undone.
        </p>
        <div className="mt-8 flex justify-end gap-3">
          <Button variant="ghost">Cancel</Button>
          <Button variant="danger">Delete account</Button>
        </div>
      </div>
    ),
  },
};
