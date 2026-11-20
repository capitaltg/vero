import { Bell, LogOut, Settings } from 'lucide-react';
import {
  Navbar,
  NavbarAction,
  NavbarActions,
  NavbarBrand,
  NavbarItem,
  NavbarNav,
} from '../src/Navbar';
import { NavbarProfile, NavbarProfileItem, NavbarProfileSeparator } from '../src/NavbarProfile';
import { Logo } from './Logo';

/**
 * Ten top-level items, more than fit beside the brand and actions on a typical desktop
 * screen. Above the `collapseBelow` breakpoint, the items that don't fit move into a
 * "More" dropdown at the end of the nav, which is marked active when the current page is
 * inside it. "Documents", the current page, is seventh, so on most screens it is in "More".
Resize the window to watch items move in and out.
 */
export const NavbarManyItems = () => (
  <Navbar>
    <NavbarBrand href="#">
      <Logo />
      Permit Center
    </NavbarBrand>
    <NavbarNav>
      <NavbarItem href="#">Home</NavbarItem>
      <NavbarItem href="#">Applications</NavbarItem>
      <NavbarItem href="#">Permits</NavbarItem>
      <NavbarItem href="#">Licenses</NavbarItem>
      <NavbarItem href="#">Inspections</NavbarItem>
      <NavbarItem href="#">Payments</NavbarItem>
      <NavbarItem active href="#">
        Documents
      </NavbarItem>
      <NavbarItem href="#">Reports</NavbarItem>
      <NavbarItem href="#">Contractors</NavbarItem>
      <NavbarItem href="#">Help</NavbarItem>
    </NavbarNav>
    <NavbarActions>
      <NavbarAction badge={2} badgeLabel="2 unread" icon={<Bell />} label="Notifications" />
      <NavbarProfile email="jordan.lee@example.gov" name="Jordan Lee">
        <NavbarProfileItem icon={<Settings />}>Settings</NavbarProfileItem>
        <NavbarProfileSeparator />
        <NavbarProfileItem icon={<LogOut />}>Sign out</NavbarProfileItem>
      </NavbarProfile>
    </NavbarActions>
  </Navbar>
);
