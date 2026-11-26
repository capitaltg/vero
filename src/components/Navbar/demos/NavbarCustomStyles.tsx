import { FileText, FolderKanban, LogOut, Settings } from 'lucide-react';
import { Navbar, NavbarActions, NavbarBrand, NavbarItem, NavbarNav } from '../src/Navbar';
import { NavbarDropdown, NavbarDropdownItem } from '../src/NavbarDropdown';
import { NavbarProfile, NavbarProfileItem, NavbarProfileSeparator } from '../src/NavbarProfile';
import { Wordmark } from './Wordmark';

/**
 * Styling the nav. `NavbarItem` and `NavbarDropdownItem` take `className` on their links;
 * `NavbarDropdown` takes `triggerClassName` for its button and `panelClassName` for its
 * panel of links (its `className` goes on the wrapping `<li>`).
 */
export const NavbarCustomStyles = () => (
  <Navbar>
    <NavbarBrand href="#">
      <Wordmark name="Vero" />
    </NavbarBrand>
    <NavbarNav>
      <NavbarItem active className="font-semibold" href="#">
        Dashboard
      </NavbarItem>
      <NavbarDropdown
        label="Projects"
        panelClassName="min-w-72 p-2"
        // Padding and height on the bar use the `collapseBelow` breakpoint (`md` by
        // default), so override them with the same prefix: `md:px-8`, not `px-8`.
        triggerClassName="font-semibold text-primary-400 md:px-8"
      >
        <NavbarDropdownItem className="gap-3" href="#">
          <FolderKanban aria-hidden="true" className="size-4" />
          All projects
        </NavbarDropdownItem>
        <NavbarDropdownItem className="gap-3" href="#">
          <FileText aria-hidden="true" className="size-4" />
          Templates
        </NavbarDropdownItem>
      </NavbarDropdown>
      <NavbarItem className="font-semibold" href="#">
        Team
      </NavbarItem>
    </NavbarNav>
    <NavbarActions>
      <NavbarProfile email="jane.doe@example.com" name="Jane Doe">
        <NavbarProfileItem icon={<Settings />}>Settings</NavbarProfileItem>
        <NavbarProfileSeparator />
        <NavbarProfileItem icon={<LogOut />}>Sign out</NavbarProfileItem>
      </NavbarProfile>
    </NavbarActions>
  </Navbar>
);
