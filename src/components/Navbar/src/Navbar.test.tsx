import { expectNoViolations } from '@/test/utils';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Bell } from 'lucide-react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { NavbarDefault } from '../demos/NavbarDefault';
import { NavbarManyItems } from '../demos/NavbarManyItems';
import { NavbarMinimal } from '../demos/NavbarMinimal';
import { NavbarProfileControls } from '../demos/NavbarProfileControls';
import { Navbar, NavbarAction, NavbarActions, NavbarBrand, NavbarItem, NavbarNav } from './Navbar';
import { NavbarDropdown, NavbarDropdownItem } from './NavbarDropdown';
import { NavbarProfile, NavbarProfileItem, NavbarProfileSeparator } from './NavbarProfile';
import { getInitials } from './utils';

const getMain = () => screen.getByRole('navigation', { name: 'Main' });

describe('Navbar', () => {
  describe('Accessibility', () => {
    it('has no violations for the default navbar', async () => {
      const { container } = render(<NavbarDefault />);
      expectNoViolations(await axe(container));
    });

    it('has no violations for the minimal navbar', async () => {
      const { container } = render(<NavbarMinimal />);
      expectNoViolations(await axe(container));
    });

    it('has no violations with switch and checkbox items in the open profile menu', async () => {
      const user = userEvent.setup();
      const { container } = render(<NavbarProfileControls />);
      await user.click(screen.getByRole('button', { name: 'Jane Doe' }));
      await screen.findByRole('menu');
      expectNoViolations(await axe(container));
    });

    it('has no violations for a navbar with many items', async () => {
      const { container } = render(<NavbarManyItems />);
      expectNoViolations(await axe(container));
    });

    it('has no violations with a dropdown and the mobile panel open', async () => {
      const user = userEvent.setup();
      const { container } = render(<NavbarDefault />);
      await user.click(screen.getByRole('button', { name: 'Menu' }));
      await user.click(screen.getByRole('button', { name: 'Projects' }));
      expectNoViolations(await axe(container));
    });
  });

  describe('Structure', () => {
    it('renders a banner with a named nav landmark and a list of links', () => {
      render(<NavbarDefault />);
      expect(screen.getByRole('banner')).toHaveClass('vero-navbar');
      const list = within(getMain()).getAllByRole('list')[0];
      expect(within(list).getByRole('link', { name: 'Dashboard' })).toBeInTheDocument();
    });

    it('expands from the collapseBelow breakpoint', () => {
      render(
        <Navbar collapseBelow="lg">
          <NavbarBrand href="/">Acme</NavbarBrand>
          <NavbarNav>
            <NavbarItem href="/a">Alpha</NavbarItem>
          </NavbarNav>
        </Navbar>,
      );
      expect(screen.getByRole('button', { name: 'Menu' })).toHaveClass('lg:hidden');
      expect(screen.getByRole('button', { name: 'Menu' })).not.toHaveClass('md:hidden');
      expect(getMain()).toHaveClass('lg:flex');
    });

    it('lets a className replace the space after the brand', () => {
      render(
        <Navbar>
          <NavbarBrand className="mr-12" href="/">
            Acme
          </NavbarBrand>
        </Navbar>,
      );
      const brand = screen.getByRole('link', { name: 'Acme' });
      expect(brand).toHaveClass('mr-12');
      expect(brand).not.toHaveClass('mr-8');
    });

    it('marks the active item as the current page', () => {
      render(<NavbarDefault />);
      expect(screen.getByRole('link', { name: 'Dashboard' })).toHaveAttribute(
        'aria-current',
        'page',
      );
      expect(screen.getByRole('link', { name: 'Team' })).not.toHaveAttribute('aria-current');
    });

    it('renders the child element with asChild', () => {
      render(
        <Navbar>
          <NavbarNav>
            <NavbarItem active asChild>
              <button type="button">Router link</button>
            </NavbarItem>
          </NavbarNav>
        </Navbar>,
      );
      const item = screen.getByRole('button', { name: 'Router link' });
      expect(item).toHaveClass('vero-navbar-link');
      expect(item).toHaveAttribute('aria-current', 'page');
    });

    it('throws a helpful error outside a Navbar', () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});
      expect(() => render(<NavbarBrand href="/">Acme</NavbarBrand>)).toThrow(
        'NavbarBrand must be used within a Navbar.',
      );
      vi.mocked(console.error).mockRestore();
    });
  });

  describe('Dropdowns', () => {
    it('toggles its panel with the button', async () => {
      const user = userEvent.setup();
      render(<NavbarDefault />);
      const trigger = screen.getByRole('button', { name: 'Projects' });
      const panel = document.getElementById(trigger.getAttribute('aria-controls')!);

      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(panel).not.toBeVisible();

      await user.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(panel).toBeVisible();

      await user.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    it('closes on Escape and returns focus to its button', async () => {
      const user = userEvent.setup();
      render(<NavbarDefault />);
      const trigger = screen.getByRole('button', { name: 'Projects' });
      await user.click(trigger);
      await user.tab();
      expect(screen.getByRole('link', { name: 'All projects' })).toHaveFocus();

      await user.keyboard('{Escape}');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).toHaveFocus();
    });

    it('keeps only one dropdown open', async () => {
      const user = userEvent.setup();
      render(<NavbarDefault />);
      const projects = screen.getByRole('button', { name: 'Projects' });
      const reports = screen.getByRole('button', { name: 'Reports' });

      await user.click(projects);
      await user.click(reports);
      expect(projects).toHaveAttribute('aria-expanded', 'false');
      expect(reports).toHaveAttribute('aria-expanded', 'true');
    });

    it('closes on a click outside', async () => {
      const user = userEvent.setup();
      render(
        <>
          <NavbarDefault />
          <p>Page content</p>
        </>,
      );
      const trigger = screen.getByRole('button', { name: 'Projects' });
      await user.click(trigger);
      await user.click(screen.getByText('Page content'));
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    it('closes when focus moves out of it', async () => {
      const user = userEvent.setup();
      render(<NavbarDefault />);
      const trigger = screen.getByRole('button', { name: 'Reports' });
      await user.click(trigger);
      await user.tab(); // Usage
      await user.tab(); // Billing
      await user.tab(); // Team, outside the dropdown
      expect(screen.getByRole('link', { name: 'Team' })).toHaveFocus();
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    it('closes when one of its links is followed', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn((event: React.MouseEvent) => event.preventDefault());
      render(
        <Navbar>
          <NavbarNav>
            <NavbarDropdown label="More">
              <NavbarDropdownItem href="/a" onClick={onClick}>
                Page A
              </NavbarDropdownItem>
            </NavbarDropdown>
          </NavbarNav>
        </Navbar>,
      );
      const trigger = screen.getByRole('button', { name: 'More' });
      await user.click(trigger);
      await user.click(screen.getByRole('link', { name: 'Page A' }));
      expect(onClick).toHaveBeenCalledOnce();
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Mobile menu', () => {
    it('opens and closes the nav panel', async () => {
      const user = userEvent.setup();
      render(<NavbarDefault />);
      const toggle = screen.getByRole('button', { name: 'Menu' });
      expect(toggle).toHaveAttribute('aria-controls', getMain().id);
      expect(toggle).toHaveAttribute('aria-expanded', 'false');
      expect(getMain()).toHaveAttribute('data-open', 'false');

      await user.click(toggle);
      expect(toggle).toHaveAttribute('aria-expanded', 'true');
      expect(getMain()).toHaveAttribute('data-open', 'true');
    });

    it('closes an open dropdown on the first Escape and the panel on the second', async () => {
      const user = userEvent.setup();
      render(<NavbarDefault />);
      const toggle = screen.getByRole('button', { name: 'Menu' });
      const projects = screen.getByRole('button', { name: 'Projects' });
      await user.click(toggle);
      await user.click(projects);

      await user.keyboard('{Escape}');
      expect(projects).toHaveAttribute('aria-expanded', 'false');
      expect(toggle).toHaveAttribute('aria-expanded', 'true');

      await user.keyboard('{Escape}');
      expect(toggle).toHaveAttribute('aria-expanded', 'false');
      expect(toggle).toHaveFocus();
    });

    it('closes after a link is followed', async () => {
      const user = userEvent.setup();
      render(<NavbarDefault />);
      const toggle = screen.getByRole('button', { name: 'Menu' });
      await user.click(toggle);
      await user.click(screen.getByRole('link', { name: 'Team' }));
      expect(toggle).toHaveAttribute('aria-expanded', 'false');
    });

    it('renders no menu button without a NavbarNav', () => {
      render(<NavbarMinimal />);
      expect(screen.queryByRole('button', { name: 'Menu' })).not.toBeInTheDocument();
    });
  });

  describe('NavbarAction', () => {
    const renderAction = (props: Record<string, unknown> = {}) =>
      render(
        <Navbar>
          <NavbarActions>
            <NavbarAction icon={<Bell />} label="Notifications" {...(props as object)} />
          </NavbarActions>
        </Navbar>,
      );

    it('includes the badge in its accessible name', () => {
      renderAction({ badge: 3 });
      expect(screen.getByRole('button', { name: 'Notifications (3)' })).toBeInTheDocument();
    });

    it('uses badgeLabel for screen readers when given', () => {
      renderAction({ badge: 3, badgeLabel: '3 unread' });
      expect(screen.getByRole('button', { name: 'Notifications (3 unread)' })).toBeInTheDocument();
    });

    it('caps large counts at 99+', () => {
      renderAction({ badge: 120 });
      expect(screen.getByRole('button', { name: 'Notifications (99+)' })).toBeInTheDocument();
    });

    it('hides the badge for zero', () => {
      renderAction({ badge: 0 });
      expect(screen.getByRole('button', { name: 'Notifications' })).toBeInTheDocument();
      expect(screen.queryByText('0')).not.toBeInTheDocument();
    });

    it('renders a link when given an href', () => {
      renderAction({ href: '/help', label: 'Help' });
      expect(screen.getByRole('link', { name: 'Help' })).toHaveAttribute('href', '/help');
    });

    it('calls onClick', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      renderAction({ onClick });
      await user.click(screen.getByRole('button', { name: 'Notifications' }));
      expect(onClick).toHaveBeenCalledOnce();
    });
  });

  describe('NavbarProfile', () => {
    it('names its trigger after the user and shows initials without an avatar', () => {
      render(<NavbarDefault />);
      const trigger = screen.getByRole('button', { name: 'Jane Doe' });
      expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
      expect(trigger).toHaveTextContent('JD');
    });

    it('opens a menu headed by the name and email, and runs item actions', async () => {
      const user = userEvent.setup();
      const onSelect = vi.fn();
      render(
        <Navbar>
          <NavbarActions>
            <NavbarProfile email="jane@example.com" name="Jane Doe">
              <NavbarProfileItem onSelect={onSelect}>Sign out</NavbarProfileItem>
            </NavbarProfile>
          </NavbarActions>
        </Navbar>,
      );
      await user.click(screen.getByRole('button', { name: 'Jane Doe' }));

      const menu = await screen.findByRole('menu');
      expect(within(menu).getByText('jane@example.com')).toBeInTheDocument();
      await user.click(within(menu).getByRole('menuitem', { name: 'Sign out' }));
      expect(onSelect).toHaveBeenCalledOnce();
      await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
    });

    it('skips disabled items', async () => {
      const user = userEvent.setup();
      const onSelect = vi.fn();
      render(
        <Navbar>
          <NavbarActions>
            <NavbarProfile name="Jane Doe">
              <NavbarProfileItem isDisabled onSelect={onSelect}>
                Billing
              </NavbarProfileItem>
            </NavbarProfile>
          </NavbarActions>
        </Navbar>,
      );
      await user.click(screen.getByRole('button', { name: 'Jane Doe' }));
      const item = await screen.findByRole('menuitem', { name: 'Billing' });
      expect(item).toHaveAttribute('data-disabled');
      await user.click(item);
      expect(onSelect).not.toHaveBeenCalled();
    });
  });

  describe('NavbarProfile switch and checkbox items', () => {
    it('toggles from the menu and keeps it open', async () => {
      const user = userEvent.setup();
      render(<NavbarProfileControls />);
      await user.click(screen.getByRole('button', { name: 'Jane Doe' }));
      const menu = await screen.findByRole('menu');

      const darkMode = within(menu).getByRole('menuitemcheckbox', { name: 'Dark mode' });
      expect(darkMode).toHaveAttribute('aria-checked', 'false');
      await user.click(darkMode);
      expect(darkMode).toHaveAttribute('aria-checked', 'true');
      expect(screen.getByRole('menu')).toBeInTheDocument();

      const updates = within(menu).getByRole('menuitemcheckbox', {
        name: 'Email me product updates',
      });
      expect(updates).toHaveAttribute('aria-checked', 'true');
      await user.keyboard('{End}{Enter}');
      expect(updates).toHaveAttribute('aria-checked', 'false');
    });

    it('shows as a switch and a checkbox in the nav panel', async () => {
      const user = userEvent.setup();
      render(<NavbarProfileControls />);
      await user.click(screen.getByRole('button', { name: 'Menu' }));
      const account = within(getMain()).getByRole('list', { name: 'Account' });

      const darkMode = within(account).getByRole('switch', { name: 'Dark mode' });
      await user.click(darkMode);
      expect(darkMode).toHaveAttribute('aria-checked', 'true');

      const updates = within(account).getByRole('checkbox', { name: 'Email me product updates' });
      await user.click(updates);
      expect(updates).toHaveAttribute('aria-checked', 'false');
      // Toggling a setting leaves the panel open.
      expect(screen.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('NavbarProfile in the nav panel', () => {
    const renderWithNav = (onSelect = vi.fn()) =>
      render(
        <Navbar>
          <NavbarNav>
            <NavbarItem href="/">Home</NavbarItem>
          </NavbarNav>
          <NavbarActions>
            <NavbarProfile email="jane@example.com" name="Jane Doe">
              <NavbarProfileItem asChild>
                <a href="/profile">Profile</a>
              </NavbarProfileItem>
              <NavbarProfileSeparator />
              <NavbarProfileItem onSelect={onSelect}>Sign out</NavbarProfileItem>
              <NavbarProfileItem isDisabled onSelect={onSelect}>
                Billing
              </NavbarProfileItem>
            </NavbarProfile>
          </NavbarActions>
        </Navbar>,
      );

    const getAccount = () => within(getMain()).getByRole('list', { name: 'Account' });

    it('renders the name, email and items inside the nav panel', () => {
      renderWithNav();
      expect(within(getMain()).getByText('Jane Doe')).toBeInTheDocument();
      expect(within(getMain()).getByText('jane@example.com')).toBeInTheDocument();
      expect(within(getAccount()).getByRole('link', { name: 'Profile' })).toHaveAttribute(
        'href',
        '/profile',
      );
      expect(within(getAccount()).getByRole('button', { name: 'Sign out' })).toBeInTheDocument();
    });

    it('runs onSelect and closes the panel', async () => {
      const user = userEvent.setup();
      const onSelect = vi.fn();
      renderWithNav(onSelect);
      const toggle = screen.getByRole('button', { name: 'Menu' });
      await user.click(toggle);
      await user.click(within(getAccount()).getByRole('button', { name: 'Sign out' }));
      expect(onSelect).toHaveBeenCalledOnce();
      expect(toggle).toHaveAttribute('aria-expanded', 'false');
    });

    it('disables disabled items', () => {
      renderWithNav();
      expect(within(getAccount()).getByRole('button', { name: 'Billing' })).toBeDisabled();
    });

    it('is not rendered without a NavbarNav', () => {
      render(<NavbarMinimal />);
      expect(screen.queryByRole('list', { name: 'Account' })).not.toBeInTheDocument();
    });

    it('has no violations with the panel open', async () => {
      const user = userEvent.setup();
      const { container } = renderWithNav();
      await user.click(screen.getByRole('button', { name: 'Menu' }));
      expectNoViolations(await axe(container));
    });
  });

  describe('Overflow', () => {
    /* jsdom has no layout, so fake one: every top-level item is 100px wide, "More" is
       80px, the nav is `navWidth` wide and the menu button is hidden (the bar is
       expanded). */
    const fakeLayout = (navWidth: number) => {
      const getComputedStyle = window.getComputedStyle.bind(window);
      vi.spyOn(window, 'getComputedStyle').mockImplementation((element, pseudo) => {
        const style = getComputedStyle(element, pseudo);
        if (!element.classList.contains('vero-navbar-toggle')) return style;
        return new Proxy(style, {
          get: (target, key) => {
            if (key === 'display') return 'none';
            const value = Reflect.get(target, key);
            return typeof value === 'function' ? value.bind(target) : value;
          },
        });
      });
      vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (
        this: HTMLElement,
      ) {
        const width = this.classList.contains('vero-navbar-more') ? 80 : 100;
        return { width } as DOMRect;
      });
      vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockImplementation(function (
        this: HTMLElement,
      ) {
        return this.classList.contains('vero-navbar-nav') ? navWidth : 0;
      });
    };

    const renderNav = () =>
      render(
        <Navbar>
          <NavbarNav>
            <NavbarItem href="/a">Alpha</NavbarItem>
            <NavbarItem href="/b">Bravo</NavbarItem>
            <NavbarItem active href="/c">
              Charlie
            </NavbarItem>
            <NavbarDropdown label="Delta">
              <NavbarDropdownItem href="/d1">Delta one</NavbarDropdownItem>
            </NavbarDropdown>
            <NavbarItem href="/e">Echo</NavbarItem>
          </NavbarNav>
        </Navbar>,
      );

    afterEach(() => vi.restoreAllMocks());

    it('keeps every item in the bar when they fit', () => {
      fakeLayout(500);
      renderNav();
      expect(screen.queryByRole('button', { name: 'More' })).not.toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Echo' })).toBeInTheDocument();
    });

    it('moves the items that do not fit into a More dropdown', async () => {
      const user = userEvent.setup();
      fakeLayout(300);
      renderNav();
      // 300px holds "More" (80px) and two items; the other three move into "More".
      const list = within(getMain()).getAllByRole('list')[0];
      expect(within(list).getByRole('link', { name: 'Alpha' })).toBeInTheDocument();
      expect(within(list).getByRole('link', { name: 'Bravo' })).toBeInTheDocument();
      const more = screen.getByRole('button', { name: 'More' });
      // The closed panel hides the rest.
      expect(screen.queryByRole('link', { name: 'Charlie' })).not.toBeInTheDocument();

      await user.click(more);
      expect(screen.getByRole('link', { name: 'Charlie' })).toBeVisible();
      expect(screen.getByRole('link', { name: 'Echo' })).toBeVisible();
      expect(screen.getByRole('list', { name: 'Delta' })).toContainElement(
        screen.getByRole('link', { name: 'Delta one' }),
      );
    });

    it('marks More as active when the current page is inside it', () => {
      fakeLayout(300);
      renderNav();
      expect(screen.getByRole('button', { name: 'More' })).toHaveAttribute('data-active', 'true');
    });

    it('uses moreLabel for the dropdown', () => {
      fakeLayout(300);
      render(
        <Navbar>
          <NavbarNav moreLabel="Other pages">
            <NavbarItem href="/a">Alpha</NavbarItem>
            <NavbarItem href="/b">Bravo</NavbarItem>
            <NavbarItem href="/c">Charlie</NavbarItem>
            <NavbarItem href="/d">Delta</NavbarItem>
          </NavbarNav>
        </Navbar>,
      );
      expect(screen.getByRole('button', { name: 'Other pages' })).toBeInTheDocument();
    });
  });

  describe('getInitials', () => {
    it.each([
      ['Jane Doe', 'JD'],
      ['jane', 'J'],
      ['Mary Jane Watson', 'MW'],
      ['  ', ''],
    ])('%s → %s', (name, expected) => {
      expect(getInitials(name)).toBe(expected);
    });
  });
});
