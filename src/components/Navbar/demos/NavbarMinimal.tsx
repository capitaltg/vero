import { LogOut } from 'lucide-react';
import { Navbar, NavbarActions, NavbarBrand } from '../src/Navbar';
import { NavbarProfile, NavbarProfileItem } from '../src/NavbarProfile';
import { Logo } from './Logo';

/**
 * Every part is optional. Without a `NavbarNav` there is no menu button, and the actions
 * stay on the right at every width. `containerClassName` constrains the content width.
 */
export const NavbarMinimal = () => (
  <Navbar containerClassName="max-w-5xl">
    <NavbarBrand href="#">
      <Logo />
      Vero
    </NavbarBrand>
    <NavbarActions>
      <NavbarProfile
        avatarSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop"
        name="Alex Kim"
        showName={false}
      >
        <NavbarProfileItem icon={<LogOut />}>Sign out</NavbarProfileItem>
      </NavbarProfile>
    </NavbarActions>
  </Navbar>
);
