import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface TooltipProps
  extends Omit<ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>, 'children'> {
  /**
   * The trigger. It's rendered as is, with the tooltip's handlers merged onto it, so pass a
   * single element that can take a ref and hold focus, such as a `Button`.
   */
  children: ReactNode;
  /** The tooltip's text or content. */
  content: ReactNode;
  /** The side of the trigger the tooltip opens on. Defaults to `top`. */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /** The tooltip's alignment against the trigger. Defaults to `center`. */
  align?: 'start' | 'center' | 'end';
  /** The distance in pixels between the tooltip and the trigger. Defaults to `2`. */
  offset?: number;
  /** Shows an arrow pointing at the trigger. Defaults to `true`. */
  hasArrow?: boolean;
  /** Whether the tooltip is open, for a controlled component. Use it with `onOpenChange`. */
  open?: boolean;
  /** Whether the tooltip is open on first render, for an uncontrolled component. */
  defaultOpen?: boolean;
  /** Called with the new open state when the tooltip opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /**
   * The time in milliseconds from when the pointer enters the trigger until the tooltip opens.
   * Overrides the `TooltipProvider`'s `delayDuration` for this tooltip.
   */
  delayDuration?: number;
  /**
   * When `true`, the tooltip closes as soon as the pointer leaves the trigger, so the pointer
   * can't move onto the tooltip. Overrides the `TooltipProvider`'s setting for this tooltip.
   */
  disableHoverableContent?: boolean;
  /** Classes for the tooltip, merged after the defaults. */
  className?: string;
  /** Inline styles for the tooltip. */
  style?: React.CSSProperties;
  /**
   * The tooltip's z-index. Defaults to the `tooltip` value set with `configureZIndex`, which
   * is `50` unless changed.
   */
  zIndex?: number;
}

export interface TooltipProviderProps
  extends ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider> {
  /** The part of the app whose tooltips share these settings. */
  children: ReactNode;
  /**
   * The time in milliseconds from when the pointer enters a trigger until its tooltip opens.
   * Defaults to `0`, so tooltips open right away. Radix's default is `700`.
   */
  delayDuration?: number;
  /**
   * After a tooltip closes, the time in milliseconds during which moving to another trigger
   * opens its tooltip without the delay. Defaults to `300`.
   */
  skipDelayDuration?: number;
  /**
   * When `true`, tooltips close as soon as the pointer leaves their trigger, so the pointer
   * can't move onto them. Defaults to `false`.
   */
  disableHoverableContent?: boolean;
}
