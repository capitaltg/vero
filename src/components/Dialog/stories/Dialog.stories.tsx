import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/Button';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../src/Dialog';
import { DialogDescription } from '../src/DialogDescription';
import { DialogFooter } from '../src/DialogFooter';
import { DialogHeader } from '../src/DialogHeader';
import { DialogTitle } from '../src/DialogTitle';
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
  // The docs page is Dialog.mdx, so there's no autodocs page.
  argTypes: {
    // A controlled `open` with no handler to update it would leave the dialog stuck open over
    // the docs page, and `defaultOpen` only applies on mount, so neither gets a control.
    open: {
      control: false,
    },
    defaultOpen: {
      control: false,
    },
    modal: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Use the controls to try each option. The docs page shows it under "Try it"; keep it the
 * first story, since the Examples section skips the first one.
 */
export const Playground: Story = {
  args: {
    modal: true,
  },
  render: args => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Publish changes</DialogTitle>
          <DialogDescription>Your changes will be visible to everyone.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="primary">Publish</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

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
