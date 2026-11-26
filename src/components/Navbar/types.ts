import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  HTMLAttributes,
  ReactNode,
} from 'react';

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Below this breakpoint the `NavbarNav` items fold into a panel behind a menu button.
   * `sm` is 640px, `md` 768px and `lg` 1024px. Pick the smallest breakpoint at which all
   * of your items fit on one line. Defaults to `md`.
   */
  collapseBelow?: 'sm' | 'md' | 'lg';
  /** Keep the navbar pinned to the top of the viewport on scroll. Defaults to `false`. */
  sticky?: boolean;
  /**
   * Classes for the inner row that holds the navbar's parts. Use this to constrain its
   * width, e.g. `max-w-7xl`.
   */
  containerClassName?: string;
}

export interface NavbarBrandProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Render the child element instead of an `<a>`, merging props onto it. Use this for
   * router links, e.g. `<NavbarBrand asChild><Link to="/">Acme</Link></NavbarBrand>`.
   */
  asChild?: boolean;
}

export interface NavbarNavProps extends HTMLAttributes<HTMLElement> {
  /** The nav landmark's accessible name. Defaults to `Main`. */
  'aria-label'?: string;
  /** The accessible name of the menu button shown on small screens. Defaults to `Menu`. */
  toggleLabel?: string;
  /**
   * The label of the dropdown that holds the items that don't fit on one line above the
   * `collapseBelow` breakpoint. Defaults to `More`.
   */
  moreLabel?: string;
  /**
   * Renders the "More" button's content in place of its label and chevron, e.g. an icon.
   * The button, its keyboard handling and the dropdown stay the same, and the button is
   * named by `moreLabel`, so an icon-only button still has an accessible name.
   */
  renderMoreTrigger?: (props: NavbarMoreTriggerRenderProps) => ReactNode;
  /**
   * Classes for the "More" button, merged after the defaults so they win. Its bar layout
   * (padding, height, the active bar) uses the `collapseBelow` breakpoint, so override
   * those with the same prefix, e.g. `md:px-4`.
   */
  moreTriggerClassName?: string;
  /**
   * Classes for the "More" dropdown's panel, merged after the defaults so they win. The
   * panel also has the `vero-navbar-more-panel` class.
   */
  morePanelClassName?: string;
}

/** What `NavbarNav`'s `renderMoreTrigger` receives. */
export interface NavbarMoreTriggerRenderProps {
  /** The `moreLabel` prop. */
  label: string;
  /** Whether the "More" dropdown is open. */
  isOpen: boolean;
  /** Whether the current page is one of the items in "More". */
  active: boolean;
}

export interface NavbarItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Marks the link as the current page (`aria-current="page"`). */
  active?: boolean;
  /**
   * Render the child element instead of an `<a>`, merging props onto it. Use this for
   * router links.
   */
  asChild?: boolean;
}

export interface NavbarDropdownProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children'> {
  /** The text of the button that opens the dropdown. */
  label: ReactNode;
  /**
   * Show the active indicator on the dropdown's button. Set it when one of the
   * dropdown's items is the current page.
   */
  active?: boolean;
  /** `NavbarDropdownItem`s. */
  children: ReactNode;
}

export type NavbarDropdownItemProps = NavbarItemProps;

export type NavbarActionsProps = HTMLAttributes<HTMLDivElement>;

interface NavbarActionBaseProps {
  /** The action's accessible name, shown to screen readers only. */
  label: string;
  /** The icon to show. It is hidden from screen readers; `label` names the action. */
  icon: ReactNode;
  /**
   * A count or short marker shown on the icon, e.g. the number of unread notifications.
   * Numbers over 99 show as `99+`; `0`, `undefined` and `null` hide the badge.
   */
  badge?: number | string | null;
  /**
   * Screen reader text for the badge, e.g. `3 unread`. Defaults to the badge itself, so
   * the accessible name reads "Notifications (3)".
   */
  badgeLabel?: string;
}

export type NavbarActionProps = NavbarActionBaseProps &
  (
    | ({ href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>)
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>)
  );

export interface NavbarProfileProps
  extends Omit<ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>, 'children'> {
  /** The signed-in user's name. It names the trigger and heads the menu. */
  name: string;
  /** Shown under the name at the top of the menu. */
  email?: string;
  /** Avatar image URL. Without one, the trigger shows the name's initials. */
  avatarSrc?: string;
  /**
   * Show the name beside the avatar, when the avatar shows, from the `sm` breakpoint
   * (640px) up. It stays
   * available to screen readers either way. Defaults to `true`.
   */
  showName?: boolean;
  /** The menu's alignment with the trigger. Defaults to `end`. */
  align?: 'start' | 'center' | 'end';
  /** Overrides the configured dropdown z-index for the menu. */
  zIndex?: number;
  /**
   * Renders the trigger's content in place of the avatar, name and chevron. The trigger
   * button, its keyboard handling and the menu stay the same, and the button is named by
   * `name`, so screen readers announce the user whatever you render. Only the bar's
   * trigger changes: the small-screen nav panel keeps its standard header.
   */
  renderTrigger?: (props: NavbarProfileTriggerRenderProps) => ReactNode;
  /** `NavbarProfileItem`s and `NavbarProfileSeparator`s. */
  children: ReactNode;
}

/** What `NavbarProfile`'s `renderTrigger` receives. */
export interface NavbarProfileTriggerRenderProps {
  /** The `name` prop. */
  name: string;
  /** Up to two initials from `name`, as the default avatar shows them. */
  initials: string;
  /** The `avatarSrc` prop. */
  avatarSrc?: string;
  /** The default avatar: the circle with the image or initials. Use it to keep the standard avatar and add to it. */
  avatar: ReactNode;
  /** Whether the menu is open. */
  isOpen: boolean;
}

export interface NavbarProfileItemProps
  extends Omit<ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>, 'disabled'> {
  /** An icon shown before the label. */
  icon?: ReactNode;
  /** Disables the item. Disabled items are skipped by the keyboard. */
  isDisabled?: boolean;
}

export interface NavbarProfileToggleItemProps
  extends Omit<
    ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>,
    'checked' | 'onCheckedChange' | 'disabled'
  > {
  /** Whether the setting is on. */
  isChecked: boolean;
  /** Called with the new value when the item is chosen. The menu stays open. */
  onCheckedChange: (checked: boolean) => void;
  /** An icon shown before the label. */
  icon?: ReactNode;
  /** Disables the item. Disabled items are skipped by the keyboard. */
  isDisabled?: boolean;
}

/** A setting shown with a switch, after its label. */
export type NavbarProfileSwitchItemProps = NavbarProfileToggleItemProps;

/** A setting shown with a checkbox, before its label. */
export type NavbarProfileCheckboxItemProps = NavbarProfileToggleItemProps;

export type NavbarProfileSeparatorProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Separator
>;
