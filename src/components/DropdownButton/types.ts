import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { buttonVariants } from '../Button/constants';

export type DropdownItemType = DropdownItem | 'separator';

export interface DropdownItem {
  /** The item's text. */
  label: string;
  /** An icon shown before the label. */
  icon?: ReactNode;
  /**
   * Disables the item. It stays focusable and is marked `aria-disabled`, but choosing it
   * does nothing.
   */
  isDisabled?: boolean;
  /** Called when the item is chosen, by click or keyboard. The menu then closes. */
  onClick?: () => void;
}

export interface DropdownButtonProps
  extends Omit<ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  /** The menu's items, in order. Pass `'separator'` for a line between groups of items. */
  items: DropdownItemType[];
  /** The button's label. A chevron is added after it. */
  children: ReactNode;
  /**
   * The button's visual style, as on `Button`: `default`, `primary`, `danger`, `link`,
   * `input` or `ghost`. Defaults to `default`.
   */
  variant?: 'default' | 'primary' | 'danger' | 'link' | 'input' | 'ghost' | null;
  /** The button's height and padding, as on `Button`: `default`, `sm` or `lg`. */
  size?: 'default' | 'sm' | 'lg' | null;
  /** Classes for the button, merged after the defaults. */
  className?: string;
  /** Disables the button. It stays focusable and is marked `aria-disabled`. */
  isDisabled?: boolean;
  /** The menu's alignment with the button. Defaults to `start`. */
  align?: 'start' | 'center' | 'end';
  /** Overrides the configured dropdown z-index for the menu. */
  zIndex?: number;
}
