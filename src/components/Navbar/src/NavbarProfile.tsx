import { cn } from '@/lib/utils';
import { getZIndex } from '@/lib/z-index';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Slot } from '@radix-ui/react-slot';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';
import { createPortal } from 'react-dom';
import {
  navbarAvatarClasses,
  navbarLinkClasses,
  navbarListClasses,
  navbarProfileContentClasses,
  navbarProfileItemClasses,
  navbarProfileLabelClasses,
  navbarProfilePanelEmailClasses,
  navbarProfilePanelHeaderClasses,
  navbarProfilePanelItemClasses,
  navbarProfilePanelSeparatorClasses,
  navbarProfilePanelClasses,
  navbarProfileSeparatorClasses,
  navbarProfileTriggerClasses,
} from '../constants';
import { NavbarProfileItemProps, NavbarProfileProps, NavbarProfileSeparatorProps } from '../types';
import { useNavbar } from './context';
import { getInitials } from './utils';

/**
 * Where profile items are rendering: in the avatar's dropdown menu, or in the account
 * section of the small-screen nav panel. Each item renders both ways from one set of
 * children.
 */
const ProfilePlacementContext = React.createContext<'menu' | 'panel'>('menu');

/**
 * The signed-in user's avatar, opening a menu of account actions. Unlike the nav
 * dropdowns, this is an ARIA menu (Radix DropdownMenu): its items are commands such as
 * "Sign out", navigated with the arrow keys.
 *
 * In a navbar with a `NavbarNav`, below the `collapseBelow` breakpoint the avatar is
 * hidden and the name, email and items appear at the bottom of the nav panel instead, as
 * plain buttons and links.
 */
const NavbarProfile = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  NavbarProfileProps
>(
  (
    {
      className,
      name,
      email,
      avatarSrc,
      showName = true,
      align = 'end',
      zIndex,
      children,
      ...props
    },
    ref,
  ) => {
    const { profileSlot } = useNavbar('NavbarProfile');
    const avatar = (
      <span aria-hidden="true" className={navbarAvatarClasses}>
        {avatarSrc ? <img alt="" src={avatarSrc} /> : getInitials(name)}
      </span>
    );

    return (
      <>
        <DropdownMenuPrimitive.Root modal={false}>
          <DropdownMenuPrimitive.Trigger
            ref={ref}
            className={cn('vero-navbar-profile', navbarProfileTriggerClasses, className)}
            {...props}
          >
            {avatar}
            <span className={showName ? 'sr-only sm:not-sr-only' : 'sr-only'}>{name}</span>
            <ChevronDown aria-hidden="true" className="hidden size-4 shrink-0 sm:block" />
          </DropdownMenuPrimitive.Trigger>
          <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content
              align={align}
              className={cn('vero-navbar-profile-menu', navbarProfileContentClasses)}
              sideOffset={4}
              style={{ zIndex: getZIndex('dropdown', zIndex) }}
            >
              <DropdownMenuPrimitive.Label className={navbarProfileLabelClasses}>
                <span className="block truncate text-sm font-bold">{name}</span>
                {email ? (
                  <span className="block truncate text-xs text-muted-foreground">{email}</span>
                ) : null}
              </DropdownMenuPrimitive.Label>
              <DropdownMenuPrimitive.Separator className={navbarProfileSeparatorClasses} />
              {children}
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Portal>
        </DropdownMenuPrimitive.Root>
        {profileSlot
          ? createPortal(
              <ProfilePlacementContext.Provider value="panel">
                <div className={cn('vero-navbar-profile-panel', navbarProfilePanelClasses)}>
                  <div className={navbarProfilePanelHeaderClasses}>
                    {avatar}
                    <div className="min-w-0">
                      <span className="block truncate text-sm font-bold">{name}</span>
                      {email ? (
                        <span className={navbarProfilePanelEmailClasses}>{email}</span>
                      ) : null}
                    </div>
                  </div>
                  <ul aria-label="Account" className={navbarListClasses}>
                    {children}
                  </ul>
                </div>
              </ProfilePlacementContext.Provider>,
              profileSlot,
            )
          : null}
      </>
    );
  },
);
NavbarProfile.displayName = 'NavbarProfile';

/**
 * An item in the profile menu. Use `onSelect` for actions; for links, pass `asChild`
 * with an `<a>` or router link as the only child.
 */
const NavbarProfileItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  NavbarProfileItemProps
>((props, ref) => {
  const placement = React.useContext(ProfilePlacementContext);
  return placement === 'panel' ? (
    <NavbarProfilePanelItem {...props} />
  ) : (
    <NavbarProfileMenuItem ref={ref} {...props} />
  );
});

const NavbarProfileMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  NavbarProfileItemProps
>(({ className, icon, isDisabled = false, asChild, children, ...props }, ref) => (
  // With `asChild`, Radix needs a single child element, so the icon can't be added here;
  // put it inside the link instead.
  <DropdownMenuPrimitive.Item
    ref={ref}
    asChild={asChild}
    className={cn('vero-navbar-profile-item', navbarProfileItemClasses, className)}
    disabled={isDisabled}
    {...props}
  >
    {asChild ? (
      children
    ) : (
      <>
        {icon ? (
          <span aria-hidden="true" className="contents">
            {icon}
          </span>
        ) : null}
        {children}
      </>
    )}
  </DropdownMenuPrimitive.Item>
));
NavbarProfileMenuItem.displayName = 'NavbarProfileMenuItem';

/** The same item in the nav panel: a plain button, or the `asChild` link. */
function NavbarProfilePanelItem({
  className,
  icon,
  isDisabled = false,
  asChild,
  children,
  onSelect,
  onClick,
}: NavbarProfileItemProps) {
  const { closeAll } = useNavbar('NavbarProfileItem');
  const Comp = asChild ? Slot : 'button';

  // `onClick` is typed for the menu's div; in the panel it receives the button or link.
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    onClick?.(event as React.MouseEvent<HTMLDivElement>);
    if (isDisabled) {
      event.preventDefault();
      return;
    }
    onSelect?.(event.nativeEvent);
    closeAll();
  };

  return (
    <li>
      <Comp
        aria-disabled={asChild && isDisabled ? true : undefined}
        className={cn(
          'vero-navbar-profile-panel-item',
          navbarLinkClasses,
          navbarProfilePanelItemClasses,
          className,
        )}
        disabled={asChild ? undefined : isDisabled}
        type={asChild ? undefined : 'button'}
        onClick={handleClick}
      >
        {asChild ? (
          children
        ) : (
          <>
            {icon ? (
              <span aria-hidden="true" className="contents">
                {icon}
              </span>
            ) : null}
            {children}
          </>
        )}
      </Comp>
    </li>
  );
}

NavbarProfileItem.displayName = 'NavbarProfileItem';

const NavbarProfileSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  NavbarProfileSeparatorProps
>(({ className, ...props }, ref) => {
  const placement = React.useContext(ProfilePlacementContext);
  useNavbar('NavbarProfileSeparator');
  if (placement === 'panel') {
    return <li aria-hidden="true" className={navbarProfilePanelSeparatorClasses} />;
  }
  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn(navbarProfileSeparatorClasses, className)}
      {...props}
    />
  );
});
NavbarProfileSeparator.displayName = 'NavbarProfileSeparator';

export { NavbarProfile, NavbarProfileItem, NavbarProfileSeparator };
