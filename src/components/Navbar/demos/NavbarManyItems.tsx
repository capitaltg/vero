import { Navbar, NavbarBrand, NavbarItem, NavbarNav } from '../src/Navbar';
import { Wordmark } from './Wordmark';

/**
 * Ten top-level items, more than fit beside the brand on a typical desktop screen. Above
 * the `collapseBelow` breakpoint, the items that don't fit move into a "More" dropdown at
 * the end of the nav, which is marked active when the current page is inside it.
 * "Documents", the current page, is seventh, so on most screens it is in "More". Resize
 * the window to watch items move in and out.
 */
export const NavbarManyItems = () => (
  <Navbar>
    <NavbarBrand href="#">
      <Wordmark name="Permit" suffix="Center" />
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
  </Navbar>
);
