import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';
import { DialogCloseProps, DialogProps, DialogTriggerProps } from '../types';
import { DialogContent } from './DialogContent';

// Dialog, DialogTrigger and DialogClose pass everything through to Radix. They're thin
// components, not re-exports, so Storybook can read their props for the docs.

/**
 * A window over the page, following the WAI-ARIA dialog pattern. By default it's modal: focus
 * stays inside it until it closes. Put a `DialogTrigger` and a `DialogContent` inside it. It
 * manages its own open state unless you pass `open` and `onOpenChange`.
 */
const Dialog = (props: DialogProps) => <DialogPrimitive.Root {...props} />;
Dialog.displayName = 'Dialog';

/** The button that opens the dialog. It gets `aria-expanded` and `aria-controls` for you. */
const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  DialogTriggerProps
>((props, ref) => <DialogPrimitive.Trigger ref={ref} {...props} />);
DialogTrigger.displayName = 'DialogTrigger';

/**
 * A button that closes the dialog, such as Cancel. `DialogContent` already has a close (X)
 * button in its corner, so you only need this for extra ones.
 */
const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  DialogCloseProps
>((props, ref) => <DialogPrimitive.Close ref={ref} {...props} />);
DialogClose.displayName = 'DialogClose';

const DialogPortal = DialogPrimitive.Portal;

export { Dialog, DialogClose, DialogContent, DialogPortal, DialogTrigger };
