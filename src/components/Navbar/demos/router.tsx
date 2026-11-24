/* eslint-disable react-refresh/only-export-components -- mirrors React Router's exports,
   hooks and components from one module, so the demo's import matches a real app's. */
import * as React from 'react';

/*
 * A tiny stand-in for React Router, so the router demo runs without the dependency. It
 * copies the parts of React Router's API the demo uses (`MemoryRouter`, `Link`, `NavLink`,
 * `useLocation`, `useNavigate` and `matchPath`), so the demo reads like app code: in an app,
 * import these from `react-router` (or `react-router-dom`) instead.
 */

interface RouterState {
  pathname: string;
  navigate: (to: string) => void;
}

const RouterContext = React.createContext<RouterState | null>(null);

function useRouter(): RouterState {
  const router = React.useContext(RouterContext);
  if (!router) throw new Error('Router hooks must be used inside a MemoryRouter.');
  return router;
}

/** Keeps the current path in memory instead of the address bar. */
export function MemoryRouter({
  initialEntries = ['/'],
  children,
}: {
  initialEntries?: string[];
  children: React.ReactNode;
}) {
  const [pathname, setPathname] = React.useState(initialEntries[0] ?? '/');
  const value = React.useMemo(() => ({ pathname, navigate: setPathname }), [pathname]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useLocation(): { pathname: string } {
  return { pathname: useRouter().pathname };
}

export function useNavigate(): (to: string) => void {
  return useRouter().navigate;
}

/**
 * Whether `pathname` matches `pattern.path`. With `end: false` the path also matches its
 * descendants, so `/projects` matches `/projects/recent`. Returns `null` when it doesn't
 * match. (React Router's version also handles `:params` and `*`; this one doesn't.)
 */
export function matchPath(
  pattern: { path: string; end?: boolean },
  pathname: string,
): { pathname: string } | null {
  const { path, end = true } = pattern;
  const base = path.replace(/\/+$/, '') || '/';
  const matches = pathname === base || (!end && (base === '/' || pathname.startsWith(`${base}/`)));
  return matches ? { pathname } : null;
}

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { to: string };

/** A link that navigates without a page load. */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, onClick, ...props }, ref) => {
    const { navigate } = useRouter();
    return (
      <a
        ref={ref}
        href={to}
        onClick={event => {
          onClick?.(event);
          if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) {
            return;
          }
          event.preventDefault();
          navigate(to);
        }}
        {...props}
      />
    );
  },
);
Link.displayName = 'Link';

type NavLinkProps = LinkProps & { end?: boolean };

/**
 * A `Link` that, like React Router's `NavLink`, marks itself with `aria-current="page"` and
 * an `active` class when its route matches.
 */
export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, end = false, className, ...props }, ref) => {
    const { pathname } = useRouter();
    const isActive = matchPath({ path: to, end }, pathname) !== null;
    return (
      <Link
        ref={ref}
        aria-current={isActive ? 'page' : undefined}
        className={[className, isActive ? 'active' : null].filter(Boolean).join(' ') || undefined}
        to={to}
        {...props}
      />
    );
  },
);
NavLink.displayName = 'NavLink';
