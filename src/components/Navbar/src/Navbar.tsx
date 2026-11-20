import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import {
  navbarActionsClasses,
  navbarActionClasses,
  navbarBadgeClasses,
  navbarBrandClasses,
  navbarContainerClasses,
  navbarLinkClasses,
  navbarNavListVariants,
  navbarMenuIconLineClasses,
  navbarMenuIconOpenClasses,
  navbarNavVariants,
  navbarToggleVariants,
  navbarTopLinkVariants,
  navbarVariants,
} from '../constants';
import {
  NavbarActionProps,
  NavbarActionsProps,
  NavbarBrandProps,
  NavbarItemProps,
  NavbarNavProps,
  NavbarProps,
} from '../types';
import { NavbarContext, NavbarContextValue, NavbarOverflowContext, useNavbar } from './context';
import { NavbarDisclosure, NavbarDropdownItem } from './NavbarDropdown';

/* Tailwind's default `sm`, `md` and `lg` widths, which Vero's theme keeps. They must match
   the `sm:`, `md:` and `lg:` classes in `constants.ts`. */
const BREAKPOINT_WIDTHS = { sm: 640, md: 768, lg: 1024 } as const;

/** Whether the viewport is at least `width` pixels wide, kept up to date as it resizes. */
function useMinWidth(width: number): boolean {
  const query = `(min-width: ${width}px)`;
  const subscribe = React.useCallback(
    (onChange: () => void) => {
      if (typeof window === 'undefined' || !window.matchMedia) return () => {};
      const list = window.matchMedia(query);
      list.addEventListener('change', onChange);
      return () => list.removeEventListener('change', onChange);
    },
    [query],
  );
  return React.useSyncExternalStore(
    subscribe,
    () => typeof window !== 'undefined' && !!window.matchMedia?.(query).matches,
    () => false,
  );
}

/**
 * A site header with a brand, primary navigation and a right-aligned area for actions and
 * the user's profile menu. Compose it from `NavbarBrand`, `NavbarNav` (holding
 * `NavbarItem`s and `NavbarDropdown`s) and `NavbarActions` (holding `NavbarAction`s and a
 * `NavbarProfile`), in that order.
 */
const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      containerClassName,
      collapseBelow = 'md',
      sticky = false,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
    const [profileSlot, setProfileSlot] = React.useState<HTMLElement | null>(null);
    const isExpanded = useMinWidth(BREAKPOINT_WIDTHS[collapseBelow]);

    const context = React.useMemo<NavbarContextValue>(
      () => ({
        collapseBelow,
        isExpanded,
        mobileOpen,
        setMobileOpen,
        openDropdown,
        setOpenDropdown,
        closeAll: () => {
          setOpenDropdown(null);
          setMobileOpen(false);
        },
        profileSlot,
        setProfileSlot,
      }),
      [collapseBelow, isExpanded, mobileOpen, openDropdown, profileSlot],
    );

    return (
      <NavbarContext.Provider value={context}>
        <header
          ref={ref}
          className={cn(navbarVariants({ sticky }), className)}
          style={sticky ? { zIndex: getZIndex('dropdown'), ...style } : style}
          {...props}
        >
          <div className={cn('vero-navbar-container', navbarContainerClasses, containerClassName)}>
            {children}
          </div>
        </header>
      </NavbarContext.Provider>
    );
  },
);
Navbar.displayName = 'Navbar';

/** The logo and product name, usually linking home. */
const NavbarBrand = React.forwardRef<HTMLAnchorElement, NavbarBrandProps>(
  ({ className, asChild = false, ...props }, ref) => {
    useNavbar('NavbarBrand');
    const Comp = asChild ? Slot : 'a';
    return (
      <Comp
        ref={ref}
        className={cn('vero-navbar-brand', navbarBrandClasses, className)}
        {...props}
      />
    );
  },
);
NavbarBrand.displayName = 'NavbarBrand';

/** Three bars that morph into an X while the small-screen panel is open. */
const MenuIcon = ({ open }: { open: boolean }) => (
  <svg
    aria-hidden="true"
    className="size-6"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <line
      className={cn(navbarMenuIconLineClasses, open && navbarMenuIconOpenClasses.top)}
      x1="4"
      x2="20"
      y1="6"
      y2="6"
    />
    <line
      className={cn(navbarMenuIconLineClasses, open && navbarMenuIconOpenClasses.middle)}
      x1="4"
      x2="20"
      y1="12"
      y2="12"
    />
    <line
      className={cn(navbarMenuIconLineClasses, open && navbarMenuIconOpenClasses.bottom)}
      x1="4"
      x2="20"
      y1="18"
      y2="18"
    />
  </svg>
);

/* Used for the "More" button until it has rendered once and can be measured. */
const ESTIMATED_MORE_WIDTH = 96;

/**
 * How many of the nav's items fit on one line. Above the `collapseBelow` breakpoint the
 * nav fills the space between the brand and the actions; items that don't fit move, in
 * order from the end, into a "More" dropdown. Below the breakpoint (the menu button is
 * showing) every item shows in the panel.
 *
 * Each item's width is measured while it is in the bar and remembered, so items in the
 * "More" dropdown can be brought back when the bar widens. A change in the number of
 * items starts again with every item in the bar.
 */
function useVisibleItemCount(
  count: number,
  refs: {
    navRef: React.RefObject<HTMLElement | null>;
    listRef: React.RefObject<HTMLUListElement | null>;
    toggleRef: React.RefObject<HTMLButtonElement | null>;
  },
): number {
  const { navRef, listRef, toggleRef } = refs;
  const [visibleCount, setVisibleCount] = React.useState(count);
  const widths = React.useRef<number[]>([]);
  const moreWidth = React.useRef<number | null>(null);
  const lastCount = React.useRef(count);

  if (lastCount.current !== count) {
    lastCount.current = count;
    widths.current = [];
    if (visibleCount !== count) setVisibleCount(count);
  }

  const update = React.useCallback(() => {
    const nav = navRef.current;
    const list = listRef.current;
    const toggle = toggleRef.current;
    if (!nav || !list || !toggle) return;
    if (window.getComputedStyle(toggle).display !== 'none') {
      setVisibleCount(count);
      return;
    }
    // Remember the widths of the items now in the bar. The "More" item comes last.
    Array.from(list.children).forEach((child, index) => {
      const { width } = child.getBoundingClientRect();
      if (child.classList.contains('vero-navbar-more')) moreWidth.current = width;
      else widths.current[index] = width;
    });
    const measured = widths.current.slice(0, count);
    if (measured.length < count) {
      setVisibleCount(count);
      return;
    }
    const available = nav.clientWidth;
    const total = measured.reduce((sum, width) => sum + width, 0);
    let next = count;
    if (total > available) {
      let used = moreWidth.current ?? ESTIMATED_MORE_WIDTH;
      next = 0;
      while (next < count && used + measured[next] <= available) {
        used += measured[next];
        next += 1;
      }
    }
    setVisibleCount(next);
  }, [count, navRef, listRef, toggleRef]);

  // Re-fit after every render, before paint, so items never flash in the wrong place.
  // Setting the same count again doesn't re-render, so this settles.
  React.useLayoutEffect(update);

  React.useEffect(() => {
    const nav = navRef.current;
    if (!nav || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(() => update());
    observer.observe(nav);
    return () => observer.disconnect();
  }, [navRef, update]);

  return Math.min(visibleCount, count);
}

/**
 * The primary navigation: a `<nav>` landmark holding a list of `NavbarItem`s and
 * `NavbarDropdown`s. Below the navbar's `collapseBelow` breakpoint it shows a menu button
 * at the far right that opens the list in a panel under the bar, followed by the
 * `NavbarProfile`'s account section.
 */
const NavbarNav = React.forwardRef<HTMLElement, NavbarNavProps>(
  (
    {
      className,
      children,
      'aria-label': ariaLabel = 'Main',
      toggleLabel = 'Menu',
      moreLabel = 'More',
      ...props
    },
    ref,
  ) => {
    const { collapseBelow, mobileOpen, setMobileOpen, openDropdown, setProfileSlot } =
      useNavbar('NavbarNav');
    const navId = React.useId();
    const toggleRef = React.useRef<HTMLButtonElement>(null);
    const navRef = React.useRef<HTMLElement>(null);
    const listRef = React.useRef<HTMLUListElement>(null);

    React.useImperativeHandle(ref, () => navRef.current as HTMLElement);

    const items = React.Children.toArray(children).filter(React.isValidElement);
    const visibleCount = useVisibleItemCount(items.length, { navRef, listRef, toggleRef });
    const visible = items.slice(0, visibleCount);
    const overflow = items.slice(visibleCount);
    const overflowActive = overflow.some(
      item => (item.props as { active?: boolean }).active === true,
    );

    // An open dropdown handles Escape itself; the next Escape closes the panel.
    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
      props.onKeyDown?.(event);
      if (event.key === 'Escape' && mobileOpen && !openDropdown && !event.defaultPrevented) {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };

    return (
      <>
        <button
          ref={toggleRef}
          aria-controls={navId}
          aria-expanded={mobileOpen}
          className={cn('vero-navbar-toggle', navbarToggleVariants({ collapseBelow }))}
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <MenuIcon open={mobileOpen} />
          <span className="sr-only">{toggleLabel}</span>
        </button>
        <nav
          ref={navRef}
          aria-label={ariaLabel}
          className={cn('vero-navbar-nav', navbarNavVariants({ collapseBelow }), className)}
          data-open={mobileOpen}
          id={navId}
          {...props}
          onKeyDown={handleKeyDown}
        >
          <ul
            ref={listRef}
            className={cn('vero-navbar-list', navbarNavListVariants({ collapseBelow }))}
          >
            {visible}
            {overflow.length > 0 ? (
              <NavbarDisclosure
                active={overflowActive}
                className="vero-navbar-more"
                label={moreLabel}
                panelAlign="end"
              >
                <NavbarOverflowContext.Provider value={true}>
                  {overflow}
                </NavbarOverflowContext.Provider>
              </NavbarDisclosure>
            ) : null}
          </ul>
          {/* NavbarProfile renders its small-screen account section here. */}
          <div ref={setProfileSlot} className="vero-navbar-profile-slot" />
        </nav>
      </>
    );
  },
);
NavbarNav.displayName = 'NavbarNav';

/** A top-level navigation link. In the "More" dropdown it shows as a dropdown link. */
const NavbarItem = React.forwardRef<HTMLAnchorElement, NavbarItemProps>(
  ({ className, active = false, asChild = false, onClick, ...props }, ref) => {
    const { collapseBelow, closeAll } = useNavbar('NavbarItem');
    const inOverflow = React.useContext(NavbarOverflowContext);
    if (inOverflow) {
      return (
        <NavbarDropdownItem
          ref={ref}
          active={active}
          asChild={asChild}
          className={className}
          onClick={onClick}
          {...props}
        />
      );
    }
    const Comp = asChild ? Slot : 'a';
    return (
      <li className="vero-navbar-item">
        <Comp
          ref={ref}
          aria-current={active ? 'page' : undefined}
          className={cn(
            'vero-navbar-link',
            navbarLinkClasses,
            navbarTopLinkVariants({ collapseBelow }),
            className,
          )}
          data-active={active}
          onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
            onClick?.(event);
            closeAll();
          }}
          {...props}
        />
      </li>
    );
  },
);
NavbarItem.displayName = 'NavbarItem';

/** The right-aligned area for `NavbarAction`s, a `NavbarProfile` or other controls. */
const NavbarActions = React.forwardRef<HTMLDivElement, NavbarActionsProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('vero-navbar-actions', navbarActionsClasses, className)}
      {...props}
    />
  ),
);
NavbarActions.displayName = 'NavbarActions';

function formatBadge(badge: number | string | null | undefined): string | null {
  if (badge === null || badge === undefined || badge === 0 || badge === '') return null;
  if (typeof badge === 'number' && badge > 99) return '99+';
  return String(badge);
}

/**
 * An icon button for the actions area, such as notifications or help, with an optional
 * count badge. Pass `href` to render a link instead of a button.
 */
const NavbarAction = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, NavbarActionProps>(
  ({ className, label, icon, badge, badgeLabel, ...props }, ref) => {
    useNavbar('NavbarAction');
    const badgeText = formatBadge(badge);
    const classes = cn('vero-navbar-action', navbarActionClasses, className);

    const content = (
      <>
        <span aria-hidden="true" className="contents">
          {icon}
        </span>
        <span className="sr-only">
          {label}
          {badgeText ? ` (${badgeLabel ?? badgeText})` : null}
        </span>
        {badgeText ? (
          <span aria-hidden="true" className={navbarBadgeClasses}>
            {badgeText}
          </span>
        ) : null}
      </>
    );

    if (props.href !== undefined) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        type="button"
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  },
);
NavbarAction.displayName = 'NavbarAction';

export { Navbar, NavbarAction, NavbarActions, NavbarBrand, NavbarItem, NavbarNav };
