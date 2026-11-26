import { Ellipsis, LogOut, Settings } from 'lucide-react';
import { Navbar, NavbarActions, NavbarBrand, NavbarItem, NavbarNav } from '../src/Navbar';
import { NavbarProfile, NavbarProfileItem, NavbarProfileSeparator } from '../src/NavbarProfile';
import { Wordmark } from './Wordmark';

/**
 * A custom "More" dropdown. `renderMoreTrigger` shows an icon instead of the label and
 * chevron; the button is still named by `moreLabel` for screen readers.
 * `moreTriggerClassName` styles the button and `morePanelClassName` the panel.
 */
export const NavbarCustomMore = () => (
  <Navbar>
    <NavbarBrand href="#">
      <Wordmark name="Permit" suffix="Center" />
    </NavbarBrand>
    <NavbarNav
      moreLabel="More pages"
      morePanelClassName="min-w-64 p-2"
      // The bar's layout classes use the `collapseBelow` breakpoint (`md` by default), so
      // override them with the same prefix: `md:px-4`, not `px-4`.
      moreTriggerClassName="text-primary-400 md:px-4"
      renderMoreTrigger={() => <Ellipsis aria-hidden="true" className="size-5" />}
    >
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
      <NavbarProfile email="jordan.lee@example.gov" name="Jordan Lee">
        <NavbarProfileItem icon={<Settings />}>Settings</NavbarProfileItem>
        <NavbarProfileSeparator />
        <NavbarProfileItem icon={<LogOut />}>Sign out</NavbarProfileItem>
      </NavbarProfile>
    </NavbarActions>
  </Navbar>
);
