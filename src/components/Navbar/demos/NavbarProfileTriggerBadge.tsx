import { Badge } from '@/components/Badge';
import { cn } from '@/lib/utils';
import { ChevronDown, LogOut, Settings } from 'lucide-react';
import { Navbar, NavbarActions, NavbarBrand } from '../src/Navbar';
import { NavbarProfile, NavbarProfileItem, NavbarProfileSeparator } from '../src/NavbarProfile';
import { Wordmark } from './Wordmark';

/**
 * Keep the standard avatar and add to it: `renderTrigger` receives the default `avatar`,
 * plus `name` and `isOpen` for the name and the chevron.
 */
export const NavbarProfileTriggerBadge = () => (
  <Navbar>
    <NavbarBrand href="#">
      <Wordmark name="Vero" />
    </NavbarBrand>
    <NavbarActions>
      <NavbarProfile
        email="jane.doe@example.com"
        name="Jane Doe"
        renderTrigger={({ avatar, name, isOpen }) => (
          <>
            {avatar}
            <span className="hidden sm:inline">{name}</span>
            <Badge tone="light" variant="primary">
              Admin
            </Badge>
            <ChevronDown
              aria-hidden="true"
              className={cn('size-4 transition-transform', isOpen && 'rotate-180')}
            />
          </>
        )}
      >
        <NavbarProfileItem icon={<Settings />}>Settings</NavbarProfileItem>
        <NavbarProfileSeparator />
        <NavbarProfileItem icon={<LogOut />}>Sign out</NavbarProfileItem>
      </NavbarProfile>
    </NavbarActions>
  </Navbar>
);
