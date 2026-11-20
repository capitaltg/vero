import * as React from 'react';

export interface NavbarContextValue {
  /** Whether the small-screen nav panel is open. */
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  /** The id of the open `NavbarDropdown`, so only one is open at a time. */
  openDropdown: string | null;
  setOpenDropdown: (id: string | null) => void;
  /** Close every dropdown and the small-screen panel, e.g. after a link is followed. */
  closeAll: () => void;
  /**
   * The element at the bottom of the small-screen nav panel that `NavbarProfile` portals
   * its account section into. `null` when there is no `NavbarNav`.
   */
  profileSlot: HTMLElement | null;
  setProfileSlot: (element: HTMLElement | null) => void;
}

export const NavbarContext = React.createContext<NavbarContextValue | null>(null);

/**
 * `true` inside the "More" dropdown that holds the nav items that don't fit on one line.
 * There, `NavbarItem`s render as dropdown links and `NavbarDropdown`s as labelled groups.
 */
export const NavbarOverflowContext = React.createContext(false);

export function useNavbar(component: string): NavbarContextValue {
  const context = React.useContext(NavbarContext);
  if (!context) {
    throw new Error(`${component} must be used within a Navbar.`);
  }
  return context;
}
