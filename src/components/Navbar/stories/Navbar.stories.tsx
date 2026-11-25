import type { Meta, StoryObj } from '@storybook/react';
import { Bell, LogOut, Settings } from 'lucide-react';
import { Wordmark } from '../demos/Wordmark';
import { NavbarDefault } from '../demos/NavbarDefault';
import sourceDefault from '../demos/NavbarDefault.tsx?raw';
import { NavbarManyItems } from '../demos/NavbarManyItems';
import sourceManyItems from '../demos/NavbarManyItems.tsx?raw';
import { NavbarMinimal } from '../demos/NavbarMinimal';
import { NavbarProfileControls } from '../demos/NavbarProfileControls';
import { NavbarProfileTriggerBadge } from '../demos/NavbarProfileTriggerBadge';
import sourceProfileTriggerBadge from '../demos/NavbarProfileTriggerBadge.tsx?raw';
import { NavbarProfileTriggerCustom } from '../demos/NavbarProfileTriggerCustom';
import sourceProfileTriggerCustom from '../demos/NavbarProfileTriggerCustom.tsx?raw';
import { NavbarRouterLinks } from '../demos/NavbarRouterLinks';
import sourceRouterLinks from '../demos/NavbarRouterLinks.tsx?raw';
import { NavbarWithActions } from '../demos/NavbarWithActions';
import sourceWithActions from '../demos/NavbarWithActions.tsx?raw';
import sourceProfileControls from '../demos/NavbarProfileControls.tsx?raw';
import sourceMinimal from '../demos/NavbarMinimal.tsx?raw';
import {
  Navbar,
  NavbarAction,
  NavbarActions,
  NavbarBrand,
  NavbarItem,
  NavbarNav,
} from '../src/Navbar';
import { NavbarDropdown, NavbarDropdownItem } from '../src/NavbarDropdown';
import { NavbarProfile, NavbarProfileItem, NavbarProfileSeparator } from '../src/NavbarProfile';

const meta = {
  title: 'Actions & Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '⚠️ **Experimental** — exported for early feedback. The API may change, or these ' +
          'components may be removed, without a major version bump. Each export is tagged ' +
          '`@experimental`, and the first navbar to mount logs a one-time warning in ' +
          'development builds.\n\n' +
          'A site header with a brand on the left, primary navigation, and a right-aligned ' +
          'area for actions and the profile menu. Compose `Navbar` from `NavbarBrand`, ' +
          '`NavbarNav` (holding `NavbarItem`s and `NavbarDropdown`s) and `NavbarActions` ' +
          '(holding `NavbarAction`s and a `NavbarProfile`).\n\n' +
          'Nav dropdowns follow the ARIA disclosure pattern used by the ' +
          '[USWDS header](https://designsystem.digital.gov/components/header/): their links ' +
          'stay in the tab order. The profile menu holds commands, so it is an ARIA menu ' +
          'navigated with the arrow keys.\n\n' +
          'Below the `collapseBelow` breakpoint the nav folds into a panel behind a menu ' +
          'button at the far right. The brand and actions stay in the bar, and the profile ' +
          'moves into the bottom of the panel, showing its name, email and items. Without ' +
          'a `NavbarNav` there is no panel, so the avatar menu stays.\n\n' +
          'For router links, pass `asChild` to `NavbarBrand`, `NavbarItem`, ' +
          '`NavbarDropdownItem` or `NavbarProfileItem` with your link as the only child. ' +
          'See the Router links story.',
      },
    },
  },
  tags: ['autodocs', 'experimental'],
  args: {
    collapseBelow: 'md',
    sticky: false,
  },
  argTypes: {
    collapseBelow: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Below this breakpoint the nav folds behind a menu button.',
      table: { defaultValue: { summary: 'md' }, type: { summary: 'sm | md | lg' } },
    },
    sticky: {
      control: 'boolean',
      description: 'Pin the navbar to the top of the viewport on scroll.',
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
  },
  render: args => (
    <Navbar {...args}>
      <NavbarBrand href="#">
        <Wordmark name="Vero" />
      </NavbarBrand>
      <NavbarNav>
        <NavbarItem active href="#">
          Dashboard
        </NavbarItem>
        <NavbarDropdown label="Projects">
          <NavbarDropdownItem href="#">All projects</NavbarDropdownItem>
          <NavbarDropdownItem href="#">Recent</NavbarDropdownItem>
        </NavbarDropdown>
        <NavbarItem href="#">Team</NavbarItem>
      </NavbarNav>
      <NavbarActions>
        <NavbarAction badge={3} icon={<Bell />} label="Notifications" />
        <NavbarProfile email="jane.doe@example.com" name="Jane Doe">
          <NavbarProfileItem icon={<Settings />}>Settings</NavbarProfileItem>
          <NavbarProfileSeparator />
          <NavbarProfileItem icon={<LogOut />}>Sign out</NavbarProfileItem>
        </NavbarProfile>
      </NavbarActions>
    </Navbar>
  ),
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const withSource = (code: string) => ({
  controls: { disable: true },
  docs: { source: { code, language: 'tsx' } },
});

/**
 * Use the controls to try each option.
 */
export const Playground: Story = {
  tags: ['!autodocs'],
};

/**
 * Brand, navigation with dropdowns, and a profile menu.
 */
export const Default: Story = {
  render: () => <NavbarDefault />,
  parameters: withSource(sourceDefault),
};

/**
 * Brand and profile only, with an avatar image and the content width constrained.
 */
export const Minimal: Story = {
  render: () => <NavbarMinimal />,
  parameters: withSource(sourceMinimal),
};

/**
 * Ten top-level items: more than fit on one line on a typical desktop screen. The items
 * that don't fit move into a "More" dropdown; set its label with `NavbarNav`'s `moreLabel`.
 */
export const ManyItems: Story = {
  render: () => <NavbarManyItems />,
  parameters: withSource(sourceManyItems),
};

/**
 * Icon actions beside the profile menu. The bell opens a Popover listing notifications:
 * wrap the `NavbarAction` in `PopoverTrigger asChild`. Its badge counts the unread ones.
 */
export const Actions: Story = {
  render: () => <NavbarWithActions />,
  parameters: withSource(sourceWithActions),
};

/**
 * Settings in the profile menu. `NavbarProfileSwitchItem` and `NavbarProfileCheckboxItem`
 * are checkable menu items drawn with Vero's switch and checkbox; choosing one toggles it
 * and leaves the menu open.
 */
export const ProfileControls: Story = {
  render: () => <NavbarProfileControls />,
  parameters: withSource(sourceProfileControls),
};

/**
 * Add to the profile trigger. `renderTrigger` replaces the avatar, name and chevron with
 * your own content, while the button, its keyboard handling and the menu stay the same.
 * It receives the default `avatar`, so you can keep it and add something, such as this
 * role badge, alongside `name`, `initials`, `avatarSrc` and `isOpen`. The button is named
 * by `name`, so screen readers announce the user whatever you render. The small-screen nav
 * panel keeps its standard header.
 */
export const ProfileTriggerBadge: Story = {
  render: () => <NavbarProfileTriggerBadge />,
  parameters: withSource(sourceProfileTriggerBadge),
};

/**
 * A fully custom profile trigger: `renderTrigger` draws a square photo with a status dot
 * instead of the standard avatar, falling back to `initials` without a photo, and
 * outlines the photo while the menu is open with `isOpen`.
 */
export const ProfileTriggerCustom: Story = {
  render: () => <NavbarProfileTriggerCustom />,
  parameters: withSource(sourceProfileTriggerCustom),
};

/**
 * Router links such as React Router's `NavLink`. Pass `asChild` with the link as the only
 * child; the Navbar's classes and click handling move onto it.
 *
 * - **Set `active` yourself.** The Navbar draws the current page, and marks a dropdown or
 *   the "More" menu, from `active`, not from the link. Match the current route with
 *   `matchPath` and `useLocation`, as here. `end: false` keeps a section active on its
 *   child routes.
 * - **Give `NavLink` a string `className`, or none.** `asChild` joins class names as
 *   strings, so a function `className` or `style` doesn't work.
 * - **With `asChild`, put an icon inside the link**; `NavbarProfileItem`'s `icon` is only
 *   used without it.
 *
 * Click around: the current route changes without a page load. The demo uses a small
 * stand-in for React Router; in an app, import the same names from `react-router`.
 */
export const RouterLinks: Story = {
  render: () => <NavbarRouterLinks />,
  parameters: withSource(sourceRouterLinks),
};

/**
 * The collapsed layout below the `collapseBelow` breakpoint, with the profile at the
 * bottom of the menu panel. This story opens in a mobile viewport; use the menu button to
 * open the nav, and widen the preview to see it expand.
 */
export const Mobile: Story = {
  render: () => <NavbarDefault />,
  parameters: {
    ...withSource(sourceDefault),
    viewport: { defaultViewport: 'mobile2' },
  },
};
