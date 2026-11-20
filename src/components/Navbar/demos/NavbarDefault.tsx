import { LogOut, Settings, User } from 'lucide-react';
import { Navbar, NavbarActions, NavbarBrand, NavbarItem, NavbarNav } from '../src/Navbar';
import { NavbarDropdown, NavbarDropdownItem } from '../src/NavbarDropdown';
import { NavbarProfile, NavbarProfileItem, NavbarProfileSeparator } from '../src/NavbarProfile';
import { Wordmark } from './Wordmark';

/**
 * Brand, navigation with dropdowns, and a profile menu.
 * Narrow the viewport below 768px to see the nav fold behind the menu button.
 */
export const NavbarDefault = () => (
  <Navbar>
    <NavbarBrand href="#">
      <Wordmark name="Vero" />
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
