import { cn } from '@/lib/utils';
import { LogOut, Settings } from 'lucide-react';
import { Navbar, NavbarActions, NavbarBrand } from '../src/Navbar';
import { NavbarProfile, NavbarProfileItem, NavbarProfileSeparator } from '../src/NavbarProfile';
import { Wordmark } from './Wordmark';

/**
 * Render something else entirely: a square photo with a status dot. `renderTrigger`
 * receives `avatarSrc`, `initials` (for when there's no photo) and `isOpen`.
 */
export const NavbarProfileTriggerCustom = () => (
  <Navbar>
    <NavbarBrand href="#">
      <Wordmark name="Vero" />
    </NavbarBrand>
    <NavbarActions>
      <NavbarProfile
        avatarSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop"
        email="alex.kim@example.com"
        name="Alex Kim"
        renderTrigger={({ avatarSrc, initials, isOpen }) => (
          <span className="relative">
            {avatarSrc ? (
              <img
                alt=""
                className={cn(
                  'size-9 rounded-md object-cover ring-2 ring-transparent transition-shadow',
                  isOpen && 'ring-primary-400',
                )}
                src={avatarSrc}
              />
            ) : (
              <span className="flex size-9 items-center justify-center rounded-md bg-base-200">
                {initials}
              </span>
            )}
            <span
              aria-hidden="true"
              className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-success-500 ring-2
                ring-white"
            />
          </span>
        )}
      >
        <NavbarProfileItem icon={<Settings />}>Settings</NavbarProfileItem>
        <NavbarProfileSeparator />
        <NavbarProfileItem icon={<LogOut />}>Sign out</NavbarProfileItem>
      </NavbarProfile>
    </NavbarActions>
  </Navbar>
);
