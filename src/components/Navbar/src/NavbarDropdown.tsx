import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import { Slot } from '@radix-ui/react-slot';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';
import {
  navbarDropdownLinkVariants,
  navbarDropdownPanelVariants,
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
 * place inside the nav panel.
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
    const { collapseBelow, openDropdown, setOpenDropdown } = useNavbar('NavbarDropdown');
    const id = React.useId();
    const panelId = `${id}-panel`;
    const isOpen = openDropdown === id;
    const itemRef = React.useRef<HTMLLIElement>(null);
    const triggerRef = React.useRef<HTMLButtonElement>(null);

    React.useImperativeHandle(ref, () => itemRef.current as HTMLLIElement);

    const close = React.useCallback(() => {
      setOpenDropdown(null);
    }, [setOpenDropdown]);

    // Close on a press outside the dropdown. A pointer listener rather than blur alone,
    // because Safari doesn't focus buttons on click, so blur misses those presses.
    React.useEffect(() => {
      if (!isOpen) return;
      const handlePointerDown = (event: PointerEvent) => {
        if (!itemRef.current?.contains(event.target as Node)) close();
      };
      document.addEventListener('pointerdown', handlePointerDown);
      return () => document.removeEventListener('pointerdown', handlePointerDown);
    }, [isOpen, close]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
      onKeyDown?.(event);
      if (event.key === 'Escape' && isOpen) {
        event.preventDefault();
        event.stopPropagation();
        close();
        triggerRef.current?.focus();
      }
    };

    const handleBlur = (event: React.FocusEvent<HTMLLIElement>) => {
      onBlur?.(event);
      const next = event.relatedTarget as Node | null;
      if (isOpen && next && !itemRef.current?.contains(next)) close();
    };

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
        <ul
          className={cn(
            'vero-navbar-dropdown-panel',
            navbarDropdownPanelVariants({ collapseBelow, align: panelAlign }),
          )}
          hidden={!isOpen}
          id={panelId}
          style={{ zIndex: getZIndex('dropdown') }}
        >
          {children}
        </ul>
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
