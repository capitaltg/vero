import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ComponentPropsWithoutRef, HTMLAttributes } from 'react';

export interface DialogProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  /** Whether the dialog is open. Use it with `onOpenChange` to control the dialog yourself. */
  open?: boolean;
  /** Whether the dialog starts open, when you don't control it with `open`. Defaults to `false`. */
  defaultOpen?: boolean;
  /**
   * Called with the new open state when the dialog opens or closes, from the trigger, a close
   * button, Escape or a click outside.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Whether the dialog is modal. A modal dialog keeps focus inside it, hides the rest of the
   * page from screen readers and blocks clicks outside it. Defaults to `true`.
   */
  modal?: boolean;
}
export interface DialogTriggerProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger> {
  /**
   * Render the child element instead of a `<button>`, merging the trigger's props onto it.
   * Use this to open the dialog from a Vero `Button`, e.g.
   * `<DialogTrigger asChild><Button>Open</Button></DialogTrigger>`.
   */
  asChild?: boolean;
}
export interface DialogCloseProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Close> {
  /**
   * Render the child element instead of a `<button>`, merging the close behavior onto it.
   * Use this to close the dialog from a Vero `Button`, such as a Cancel button in the footer.
   */
  asChild?: boolean;
}
export interface DialogOverlayProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {
  /**
   * The overlay's z-index. Defaults to the `overlay` value set with `configureZIndex`, which
   * is `50` unless you change it.
   */
  zIndex?: number;
}
export interface DialogContentProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  /**
   * The dialog's z-index. Defaults to the `dialog` value set with `configureZIndex`, which
   * is `50` unless you change it.
   */
  zIndex?: number;
  /**
   * Called when the user presses Escape. The dialog then closes; call
   * `event.preventDefault()` to keep it open.
   */
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  /**
   * Called when the user clicks or taps outside the dialog. The dialog then closes; call
   * `event.preventDefault()` to keep it open.
   */
  onPointerDownOutside?: (event: CustomEvent<{ originalEvent: PointerEvent }>) => void;
  /**
   * Called when the dialog opens, before focus moves into it. By default, focus moves to the
   * first interactive element, such as a field, button or link. The close button comes last,
   * so it gets focus only when there's nothing else. Call `event.preventDefault()` to move
   * focus yourself.
   */
  onOpenAutoFocus?: (event: Event) => void;
}
export type DialogHeaderProps = HTMLAttributes<HTMLDivElement>;
export type DialogFooterProps = HTMLAttributes<HTMLDivElement>;
export type DialogTitleProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
export type DialogDescriptionProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
