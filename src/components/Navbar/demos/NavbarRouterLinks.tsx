import { LogOut, Settings, User } from 'lucide-react';
import { Navbar, NavbarActions, NavbarBrand, NavbarItem, NavbarNav } from '../src/Navbar';
import { NavbarDropdown, NavbarDropdownItem } from '../src/NavbarDropdown';
import { NavbarProfile, NavbarProfileItem, NavbarProfileSeparator } from '../src/NavbarProfile';
// In an app, import these from 'react-router' instead.
import { Link, matchPath, MemoryRouter, NavLink, useLocation, useNavigate } from './router';
import { Wordmark } from './Wordmark';

const AppNavbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  /* The Navbar draws the current page from `active`, so match the route here.
     `end: false` also matches child routes: `/projects` is active on `/projects/recent`. */
  const isActive = (path: string) => matchPath({ path, end: false }, pathname) !== null;

  return (
    <Navbar>
      {/* A plain Link: a NavLink would mark the logo as the current page too. */}
      <NavbarBrand asChild>
        <Link to="/dashboard">
          <Wordmark name="Vero" />
        </Link>
      </NavbarBrand>
      <NavbarNav>
        <NavbarItem asChild active={isActive('/dashboard')}>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </NavbarItem>
        {/* Mark the dropdown active when any of its pages is current. */}
        <NavbarDropdown active={isActive('/projects')} label="Projects">
          <NavbarDropdownItem asChild active={isActive('/projects/all')}>
            <NavLink to="/projects/all">All projects</NavLink>
          </NavbarDropdownItem>
          <NavbarDropdownItem asChild active={isActive('/projects/recent')}>
            <NavLink to="/projects/recent">Recent</NavLink>
          </NavbarDropdownItem>
        </NavbarDropdown>
        <NavbarItem asChild active={isActive('/team')}>
          <NavLink to="/team">Team</NavLink>
        </NavbarItem>
      </NavbarNav>
      <NavbarActions>
        <NavbarProfile email="jane.doe@example.com" name="Jane Doe">
          {/* With `asChild`, put the icon inside the link. */}
          <NavbarProfileItem asChild>
            <NavLink to="/profile">
              <User aria-hidden="true" />
              Profile
            </NavLink>
          </NavbarProfileItem>
          <NavbarProfileItem asChild>
            <NavLink to="/settings">
              <Settings aria-hidden="true" />
              Settings
            </NavLink>
          </NavbarProfileItem>
          <NavbarProfileSeparator />
          {/* Commands use `onSelect`. */}
          <NavbarProfileItem icon={<LogOut />} onSelect={() => navigate('/signed-out')}>
            Sign out
          </NavbarProfileItem>
        </NavbarProfile>
      </NavbarActions>
    </Navbar>
  );
};

/** The current route, shown under the navbar for the demo. */
const CurrentRoute = () => (
  <p className="p-6 text-sm text-gray-600">
    Current route: <code>{useLocation().pathname}</code>
  </p>
);

/**
 * Router links in the navbar: each link is the `asChild` child, and `active` comes from
 * matching the current route.
 */
export const NavbarRouterLinks = () => (
  <MemoryRouter initialEntries={['/dashboard']}>
    <AppNavbar />
    <CurrentRoute />
  </MemoryRouter>
);
