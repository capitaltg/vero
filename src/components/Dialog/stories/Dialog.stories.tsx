import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '../src/Dialog';
import { DialogDefault } from '../demos/DialogDefault';
import sourceCodeDefault from '../demos/DialogDefault.tsx?raw';
import { DialogInformationalOnly } from '../demos/DialogInformationalOnly';
import sourceCodeInformationalOnly from '../demos/DialogInformationalOnly.tsx?raw';
import { DialogWithCombobox } from '../demos/DialogWithCombobox';
import sourceCodeWithCombobox from '../demos/DialogWithCombobox.tsx?raw';
import { DialogWithDestructiveAction } from '../demos/DialogWithDestructiveAction';
import sourceCodeWithDestructiveAction from '../demos/DialogWithDestructiveAction.tsx?raw';

const meta = {
  title: 'Overlays & Feedback/Dialog',
  component: Dialog,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'The controlled open state of the dialog',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    defaultOpen: {
      control: 'boolean',
      description: 'The default open state of the dialog',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    modal: {
      control: 'boolean',
      description: 'Whether the dialog is modal (blocks interaction with other elements)',
      table: {
        defaultValue: {
          summary: 'true',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default dialog with a form layout.
 * Demonstrates a typical dialog with header, content, and footer sections.
 */
export const Default: Story = {
  render: () => <DialogDefault />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
      },
    },
  },
};

/**
 * A dialog with destructive action.
 * Shows a confirmation dialog with both cancel and destructive actions.
 */
export const WithDestructiveAction: Story = {
  render: () => <DialogWithDestructiveAction />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithDestructiveAction,
      },
    },
  },
};

/**
 * An informational dialog with no focusable content other than the close button.
 * When opened, focus moves to the close button since it is the only interactable element.
 */
export const InformationalOnly: Story = {
  render: () => <DialogInformationalOnly />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeInformationalOnly,
      },
    },
  },
};

/**
 * A dialog containing a Combobox.
 * The Combobox dropdown renders outside the dialog, yet its options stay clickable even though
 * a modal dialog disables pointer events on the rest of the page.
 */
export const WithCombobox: Story = {
  render: () => <DialogWithCombobox />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithCombobox,
      },
    },
  },
};
