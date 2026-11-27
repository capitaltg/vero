import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ComponentPropsWithoutRef } from 'react';

export interface TabsProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  /**
   * The `value` of the active tab, for a controlled component. Use it with `onValueChange`.
   */
  value?: string;
  /**
   * The `value` of the tab that's active on first render, for an uncontrolled component.
   */
  defaultValue?: string;
  /** Called with the new tab's `value` when the active tab changes. */
  onValueChange?: (value: string) => void;
  /**
   * The direction the tabs are laid out in, which sets the arrow keys that move between them:
   * Left and Right for `horizontal`, Up and Down for `vertical`. It doesn't change the
   * layout. Defaults to `horizontal`.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * How a tab is activated from the keyboard. With `manual`, the arrow keys move focus and
   * Enter or Space shows the panel. With `automatic`, a tab's panel shows as soon as the tab
   * gets focus. Defaults to `manual` (Radix's default is `automatic`).
   */
  activationMode?: 'automatic' | 'manual';
}

export interface TabsListProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  /**
   * When `true`, the arrow keys wrap from the last tab to the first and back. Defaults to
   * `true`.
   */
  loop?: boolean;
}

export interface TabsTriggerProps
  extends Omit<ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>, 'disabled'> {
  /**
   * A unique value for the tab. The `TabsContent` with the same `value` is the tab's panel.
   */
  value: string;
  /**
   * Disables the tab. It stays focusable and is marked `aria-disabled`, so screen reader
   * users can still find it, but it can't be selected.
   */
  isDisabled?: boolean;
}

export interface TabsContentProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
  /** The `value` of the `TabsTrigger` that shows this panel. */
  value: string;
  /**
   * Keeps the panel mounted and visible while another tab is active, so you can animate it
   * or keep its state. Hide it yourself, e.g. with a `data-[state=inactive]:hidden` class.
   */
  forceMount?: true;
}
