import { Bell, CircleHelp, LogOut, Settings, User } from 'lucide-react';
import {
  Navbar,
  NavbarAction,
  NavbarActions,
  NavbarBrand,
  NavbarItem,
  NavbarNav,
} from '../src/Navbar';
import { NavbarDropdown, NavbarDropdownItem } from '../src/NavbarDropdown';
import { NavbarProfile, NavbarProfileItem, NavbarProfileSeparator } from '../src/NavbarProfile';
import { Logo } from './Logo';

/**
 * Brand, navigation with dropdowns, notification and help actions, and a profile menu.
 * Narrow the viewport below 768px to see the nav fold behind the menu button.
 */
export const NavbarDefault = () => (
  <Navbar>
    <NavbarBrand href="#">
      <Logo />
      Vero
    </NavbarBrand>
    <NavbarNav>
      <NavbarItem active href="#">
        Dashboard
      </NavbarItem>
      <NavbarDropdown label="Projects">
        <NavbarDropdownItem href="#">All projects</NavbarDropdownItem>
        <NavbarDropdownItem href="#">Recent</NavbarDropdownItem>
        <NavbarDropdownItem href="#">Archived</NavbarDropdownItem>
      </NavbarDropdown>
      <NavbarDropdown label="Reports">
        <NavbarDropdownItem href="#">Usage</NavbarDropdownItem>
        <NavbarDropdownItem href="#">Billing</NavbarDropdownItem>
      </NavbarDropdown>
      <NavbarItem href="#">Team</NavbarItem>
    </NavbarNav>
    <NavbarActions>
      <NavbarAction badge={3} badgeLabel="3 unread" icon={<Bell />} label="Notifications" />
      <NavbarAction href="#" icon={<CircleHelp />} label="Help" />
      <NavbarProfile email="jane.doe@example.com" name="Jane Doe">
        <NavbarProfileItem asChild>
          <a href="#">
            <User aria-hidden="true" />
            Profile
          </a>
        </NavbarProfileItem>
        <NavbarProfileItem icon={<Settings />}>Settings</NavbarProfileItem>
        <NavbarProfileSeparator />
        <NavbarProfileItem icon={<LogOut />}>Sign out</NavbarProfileItem>
      </NavbarProfile>
    </NavbarActions>
  </Navbar>
);
