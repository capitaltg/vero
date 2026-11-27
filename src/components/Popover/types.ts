import * as PopoverPrimitive from '@radix-ui/react-popover';
import { ComponentPropsWithoutRef } from 'react';

export interface PopoverProps extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {
  /** Whether the popover is open, for a controlled component. Use it with `onOpenChange`. */
  open?: boolean;
  /** Whether the popover is open on first render, for an uncontrolled component. */
  defaultOpen?: boolean;
  /** Called with the new open state when the popover opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /**
   * When `true`, the rest of the page can't be clicked or reached by screen readers while
   * the popover is open, and focus stays inside it. Defaults to `false`.
   */
  modal?: boolean;
}

export interface PopoverTriggerProps
  extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> {
  /**
   * Render the child element instead of a `<button>`, merging the trigger's props onto it.
   * Use this to make a Vero `Button` the trigger.
   */
  asChild?: boolean;
}

export interface PopoverContentProps
  extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  /** Shows an arrow pointing at the trigger. */
  hasArrow?: boolean;
  /**
   * The popover's z-index. Defaults to the `popover` value set with `configureZIndex`, which
   * is `50` unless changed.
   */
  zIndex?: number;
  /** The side of the trigger the popover opens on. Defaults to `bottom`. */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /** The popover's alignment against the trigger. Defaults to `center`. */
  align?: 'start' | 'center' | 'end';
  /** The distance in pixels between the popover and the trigger. Defaults to `4`. */
  sideOffset?: number;
}
