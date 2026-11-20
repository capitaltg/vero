import { CircleHelp, CreditCard, Moon, Settings, User } from 'lucide-react';
import { useState } from 'react';
import { Navbar, NavbarActions, NavbarBrand, NavbarItem, NavbarNav } from '../src/Navbar';
import {
  NavbarProfile,
  NavbarProfileCheckboxItem,
  NavbarProfileItem,
  NavbarProfileSeparator,
  NavbarProfileSwitchItem,
} from '../src/NavbarProfile';
import { Wordmark } from './Wordmark';

/**
 * Settings in the profile menu: a switch, four ordinary items and a checkbox. Choosing a
 * switch or checkbox item toggles it and leaves the menu open. Below the breakpoint the
 * same items appear in the nav panel.
 */
export const NavbarProfileControls = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailUpdates, setEmailUpdates] = useState(true);

  return (
    <Navbar>
      <NavbarBrand href="#">
        <Wordmark name="Vero" />
      </NavbarBrand>
      <NavbarNav>
        <NavbarItem active href="#">
          Dashboard
        </NavbarItem>
        <NavbarItem href="#">Projects</NavbarItem>
        <NavbarItem href="#">Team</NavbarItem>
      </NavbarNav>
      <NavbarActions>
        <NavbarProfile email="jane.doe@example.com" name="Jane Doe">
          <NavbarProfileSwitchItem
            icon={<Moon />}
            isChecked={darkMode}
            onCheckedChange={setDarkMode}
          >
            Dark mode
          </NavbarProfileSwitchItem>
          <NavbarProfileSeparator />
          <NavbarProfileItem icon={<User />}>Profile</NavbarProfileItem>
          <NavbarProfileItem icon={<Settings />}>Account settings</NavbarProfileItem>
          <NavbarProfileItem icon={<CreditCard />}>Billing</NavbarProfileItem>
          <NavbarProfileItem icon={<CircleHelp />}>Help and support</NavbarProfileItem>
          <NavbarProfileSeparator />
          <NavbarProfileCheckboxItem isChecked={emailUpdates} onCheckedChange={setEmailUpdates}>
            Email me product updates
          </NavbarProfileCheckboxItem>
        </NavbarProfile>
      </NavbarActions>
    </Navbar>
  );
};
