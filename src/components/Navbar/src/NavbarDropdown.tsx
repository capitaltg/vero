import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import { Slot } from '@radix-ui/react-slot';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';
import { createPortal } from 'react-dom';
import {
  navbarDropdownFloatingPanelClasses,
  navbarDropdownLinkVariants,
  navbarDropdownPanelClasses,
  navbarDropdownTriggerClasses,
  navbarLinkClasses,
  navbarTopLinkVariants,
  navbarOverflowGroupLabelClasses,
  navbarOverflowGroupListClasses,
} from '../constants';
import { NavbarDropdownItemProps, NavbarDropdownProps } from '../types';
import { NavbarOverflowContext, useNavbar } from './context';

/**
 * A navigation item that discloses a list of links. It follows the ARIA disclosure
 * pattern, as the USWDS header does, rather than the menu pattern: the links stay in the
 * tab order and are announced as links. Opening one dropdown closes the others; Escape,
 * a click outside or moving focus away closes it. On small screens the links expand in
 * place inside the nav panel; above `collapseBelow` they float below the button, rendered
 * in a portal so a scrolling or clipping container can't cut them off.
 */
const NavbarDropdown = React.forwardRef<HTMLLIElement, NavbarDropdownProps>((props, ref) => {
  const inOverflow = React.useContext(NavbarOverflowContext);
  return inOverflow ? (
    <NavbarOverflowGroup ref={ref} {...props} />
  ) : (
    <NavbarDisclosure ref={ref} {...props} />
  );
});
NavbarDropdown.displayName = 'NavbarDropdown';

/**
 * A `NavbarDropdown` inside the "More" dropdown: its label heads its links, which are
 * listed in place rather than behind a second button.
 */
const NavbarOverflowGroup = React.forwardRef<HTMLLIElement, NavbarDropdownProps>(
  ({ className, label, active = false, children, ...props }, ref) => {
    useNavbar('NavbarDropdown');
    const labelId = React.useId();
    return (
      <li
        ref={ref}
        className={cn('vero-navbar-overflow-group', className)}
        data-active={active || undefined}
        {...props}
      >
        <span className={navbarOverflowGroupLabelClasses} id={labelId}>
          {label}
        </span>
        <ul aria-labelledby={labelId} className={navbarOverflowGroupListClasses}>
          {children}
        </ul>
      </li>
    );
  },
);
NavbarOverflowGroup.displayName = 'NavbarOverflowGroup';

const TABBABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), ' +
  'textarea:not([disabled]), [tabindex]';

/** The elements in `root` that Tab can reach, in document order. */
function getTabbables(root: ParentNode): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(TABBABLE)).filter(
    element =>
      element.tabIndex >= 0 &&
      !element.closest('[hidden], [inert]') &&
      (element.checkVisibility?.() ?? true),
  );
}

/**
 * The dropdown itself. NavbarNav also uses it for "More", whose panel lines up with the
 * item's right edge (`panelAlign="end"`) because it is the last item.
 */
const NavbarDisclosure = React.forwardRef<
  HTMLLIElement,
  NavbarDropdownProps & { panelAlign?: 'start' | 'end' }
>(
  (
    {
      className,
      label,
      active = false,
      panelAlign = 'start',
      children,
      onKeyDown,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const { collapseBelow, isExpanded, openDropdown, setOpenDropdown } =
      useNavbar('NavbarDropdown');
    const id = React.useId();
    const panelId = `${id}-panel`;
    const isOpen = openDropdown === id;
    const itemRef = React.useRef<HTMLLIElement>(null);
    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const panelRef = React.useRef<HTMLUListElement>(null);
    const [position, setPosition] = React.useState<React.CSSProperties>();

    // Whether a node is part of this dropdown: the item, or its panel in the portal.
    const contains = (node: Node | null) =>
      !!node && (!!itemRef.current?.contains(node) || !!panelRef.current?.contains(node));

    React.useImperativeHandle(ref, () => itemRef.current as HTMLLIElement);

    const close = React.useCallback(() => {
      setOpenDropdown(null);
    }, [setOpenDropdown]);

    // Close on a press outside the dropdown. A pointer listener rather than blur alone,
    // because Safari doesn't focus buttons on click, so blur misses those presses.
    React.useEffect(() => {
      if (!isOpen) return;
      const handlePointerDown = (event: PointerEvent) => {
        const target = event.target as Node;
        if (!itemRef.current?.contains(target) && !panelRef.current?.contains(target)) close();
      };
      document.addEventListener('pointerdown', handlePointerDown);
      return () => document.removeEventListener('pointerdown', handlePointerDown);
    }, [isOpen, close]);

    // Keep the floating panel under its button while it is open. Fixed positioning, updated
    // on resize and on any scroll, so it follows the navbar inside scrolling containers.
    React.useLayoutEffect(() => {
      if (!isOpen || !isExpanded) return;
      const update = () => {
        const item = itemRef.current;
        if (!item) return;
        const rect = item.getBoundingClientRect();
        setPosition(
          panelAlign === 'end'
            ? { top: rect.bottom, right: document.documentElement.clientWidth - rect.right }
            : { top: rect.bottom, left: rect.left },
        );
      };
      update();
      window.addEventListener('resize', update);
      window.addEventListener('scroll', update, true);
      return () => {
        window.removeEventListener('resize', update);
        window.removeEventListener('scroll', update, true);
      };
    }, [isOpen, isExpanded, panelAlign]);

    // Events from the portal still reach these handlers, through React's tree.
    const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
      onKeyDown?.(event);
      if (event.key === 'Escape' && isOpen) {
        event.preventDefault();
        event.stopPropagation();
        close();
        triggerRef.current?.focus();
        return;
      }
      if (event.key === 'Tab' && isOpen && isExpanded) handleFloatingTab(event);
    };

    // The floating panel sits at the end of the page, so steer Tab to keep the links in
    // order: from the button into the panel, from its last link on to whatever follows the
    // dropdown, and from its first link back to the button.
    const handleFloatingTab = (event: React.KeyboardEvent) => {
      const panel = panelRef.current;
      if (!panel) return;
      const links = getTabbables(panel);
      const focused = document.activeElement;
      if (links.length === 0) return;
      let next: HTMLElement | undefined;
      if (focused === triggerRef.current && !event.shiftKey) {
        next = links[0];
      } else if (focused === links[0] && event.shiftKey) {
        next = triggerRef.current ?? undefined;
      } else if (focused === links[links.length - 1] && !event.shiftKey) {
        const outside = getTabbables(document.body).filter(element => !panel.contains(element));
        const triggerIndex = outside.indexOf(triggerRef.current as HTMLElement);
        next = outside.slice(triggerIndex + 1).find(element => !contains(element));
      }
      if (next) {
        event.preventDefault();
        next.focus();
      }
    };

    const handleBlur = (event: React.FocusEvent<HTMLLIElement>) => {
      onBlur?.(event);
      const next = event.relatedTarget as Node | null;
      if (isOpen && next && !contains(next)) close();
    };

    const panel = (
      <ul
        ref={panelRef}
        className={cn(
          'vero-navbar-dropdown-panel',
          isExpanded ? navbarDropdownFloatingPanelClasses : navbarDropdownPanelClasses,
        )}
        hidden={!isOpen}
        id={panelId}
        style={isExpanded ? { ...position, zIndex: getZIndex('dropdown') } : undefined}
      >
        {children}
      </ul>
    );

    return (
      <li
        ref={itemRef}
        className={cn('vero-navbar-item vero-navbar-dropdown relative', className)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <button
          ref={triggerRef}
          aria-controls={panelId}
          aria-expanded={isOpen}
          className={cn(
            'vero-navbar-dropdown-trigger',
            navbarLinkClasses,
            navbarTopLinkVariants({ collapseBelow }),
            navbarDropdownTriggerClasses,
          )}
          data-active={active}
          type="button"
          onClick={() => setOpenDropdown(isOpen ? null : id)}
        >
          {label}
          <ChevronDown aria-hidden="true" className="size-4 shrink-0" />
        </button>
        {isExpanded && typeof document !== 'undefined' ? createPortal(panel, document.body) : panel}
      </li>
    );
  },
);
NavbarDisclosure.displayName = 'NavbarDisclosure';

/** A link inside a `NavbarDropdown`. */
const NavbarDropdownItem = React.forwardRef<HTMLAnchorElement, NavbarDropdownItemProps>(
  ({ className, active = false, asChild = false, onClick, ...props }, ref) => {
    const { collapseBelow, closeAll } = useNavbar('NavbarDropdownItem');
    const Comp = asChild ? Slot : 'a';
    return (
      <li>
        <Comp
          ref={ref}
          aria-current={active ? 'page' : undefined}
          className={cn(
            'vero-navbar-dropdown-link',
            navbarLinkClasses,
            navbarDropdownLinkVariants({ collapseBelow }),
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
NavbarDropdownItem.displayName = 'NavbarDropdownItem';

export { NavbarDisclosure, NavbarDropdown, NavbarDropdownItem };
