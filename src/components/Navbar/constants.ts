import { styles } from '@/lib/styles';
import { tw } from '@/lib/utils';
import { cva } from 'class-variance-authority';

/* The base classes describe the collapsed (small screen) navbar. The `collapseBelow`
   variants add the expanded layout from that breakpoint up. Tailwind only generates class
   names it finds written out in full, so each variant spells out its `sm:`, `md:` or `lg:`
   classes; the three are identical apart from the prefix, so keep them in step. */

export const navbarVariants = cva(
  'vero-navbar group/navbar relative w-full border-b border-base-200 bg-background text-foreground',
  {
    variants: {
      sticky: {
        true: 'sticky top-0',
        false: '',
      },
    },
    defaultVariants: {
      sticky: false,
    },
  },
);

/* 60px tall: 40px controls plus 10px above and below. The minimum height keeps it 60px
   when nothing in it is 40px tall (e.g. no actions); when the small-screen nav panel
   wraps below the top row, the row grows to fit it. No gap: the parts' own margins space
   them, so the brand's margin is the whole space after it. */
export const navbarContainerClasses = tw`mx-auto flex min-h-[60px] w-full flex-wrap items-center
px-4 py-2.5`;

/* `mr-8` is the whole space after the brand; a `mr-*` class passed as `className` replaces it. */
export const navbarBrandClasses = tw`mr-8 flex shrink-0 items-center gap-2 rounded-sm text-lg
font-bold text-inherit no-underline ${styles.focusRingVisible}`;

/* `order-1` places the menu button after the actions, at the far right. The actions' auto
   margin pushes both to the right, and `ml-2` matches the 8px gap between actions. With no
   actions, the button takes the auto margin itself. */
export const navbarToggleVariants = cva(
  tw`order-1 ml-auto inline-flex size-10 shrink-0 items-center justify-center rounded-sm
  text-base-600 transition-colors hover:bg-base-100 hover:text-base-700
  group-has-[.vero-navbar-actions]/navbar:ml-2 ${styles.focusRingVisible}`,
  {
    variants: {
      collapseBelow: { sm: 'sm:hidden', md: 'md:hidden', lg: 'lg:hidden' },
    },
  },
);

/* The menu button's three bars. They turn about the icon's centre (12, 12 in its 24-unit
   view box): the outer bars slide to the middle and rotate into an X while the middle bar
   fades. Matches Lucide's stroke, so it sits with the other icons. */
export const navbarMenuIconLineClasses = tw`origin-[12px_12px] transition-[transform,opacity]
duration-200 ease-out motion-reduce:transition-none`;

export const navbarMenuIconOpenClasses = {
  top: tw`[transform:rotate(45deg)_translateY(6px)]`,
  middle: tw`opacity-0`,
  bottom: tw`[transform:rotate(-45deg)_translateY(-6px)]`,
};

/* Expanded, the nav fills the space between the brand and the actions (NavbarNav measures
   it to decide which items move into the "More" dropdown), and reaches through the
   container's vertical padding so its items fill the bar's full height. */
export const navbarNavVariants = cva(tw`order-last hidden basis-full pt-2 data-[open=true]:block`, {
  variants: {
    collapseBelow: {
      sm: tw`sm:order-none sm:-my-2.5 sm:mr-4 sm:flex sm:min-w-0 sm:flex-1 sm:self-stretch sm:pt-0
      sm:data-[open=true]:flex`,
      md: tw`md:order-none md:-my-2.5 md:mr-4 md:flex md:min-w-0 md:flex-1 md:self-stretch md:pt-0
      md:data-[open=true]:flex`,
      lg: tw`lg:order-none lg:-my-2.5 lg:mr-4 lg:flex lg:min-w-0 lg:flex-1 lg:self-stretch lg:pt-0
      lg:data-[open=true]:flex`,
    },
  },
});

export const navbarListClasses = tw`m-0 flex list-none flex-col gap-1 p-0`;

export const navbarNavListVariants = cva(navbarListClasses, {
  variants: {
    collapseBelow: {
      sm: tw`sm:flex-row sm:items-stretch sm:gap-0`,
      md: tw`md:flex-row md:items-stretch md:gap-0`,
      lg: tw`lg:flex-row lg:items-stretch lg:gap-0`,
    },
  },
});

/* Shared by top-level links, dropdown buttons, dropdown links and the profile items in the
   nav panel. The current page (`data-active`) is marked by more than color: a faint
   background and a bar beside it. */
export const navbarLinkClasses = tw`relative flex w-full items-center gap-1 whitespace-nowrap
rounded-sm px-3 py-2 text-sm font-medium text-base-600 no-underline transition-colors
hover:bg-base-100 hover:text-base-700 aria-[current=page]:font-bold data-[active=true]:bg-base-100
data-[active=true]:text-primary-400 data-[active=true]:after:absolute
data-[active=true]:after:inset-y-1 data-[active=true]:after:left-0 data-[active=true]:after:w-[3px]
data-[active=true]:after:rounded-full data-[active=true]:after:bg-primary
${styles.focusRingVisible}`;

/* Top-level links and dropdown buttons. Expanded, they fill the bar's height, the bar
   moves under them onto the navbar's 1px bottom border, and the focus ring is drawn inside
   them on a layer above that bar (a ring outside would spill below the navbar). */
export const navbarTopLinkVariants = cva('', {
  variants: {
    collapseBelow: {
      sm: tw`sm:h-full sm:rounded-none sm:px-6 sm:focus-visible:ring-0
      sm:focus-visible:ring-offset-0 sm:focus-visible:before:pointer-events-none
      sm:focus-visible:before:absolute sm:focus-visible:before:inset-x-0
      sm:focus-visible:before:-bottom-px sm:focus-visible:before:top-0 sm:focus-visible:before:z-[1]
      sm:focus-visible:before:ring-[3px] sm:focus-visible:before:ring-inset
      sm:focus-visible:before:ring-ring sm:data-[active=true]:after:inset-x-0
      sm:data-[active=true]:after:-bottom-px sm:data-[active=true]:after:top-auto
      sm:data-[active=true]:after:h-[3px] sm:data-[active=true]:after:w-auto
      sm:data-[active=true]:after:rounded-none`,
      md: tw`md:h-full md:rounded-none md:px-6 md:focus-visible:ring-0
      md:focus-visible:ring-offset-0 md:focus-visible:before:pointer-events-none
      md:focus-visible:before:absolute md:focus-visible:before:inset-x-0
      md:focus-visible:before:-bottom-px md:focus-visible:before:top-0 md:focus-visible:before:z-[1]
      md:focus-visible:before:ring-[3px] md:focus-visible:before:ring-inset
      md:focus-visible:before:ring-ring md:data-[active=true]:after:inset-x-0
      md:data-[active=true]:after:-bottom-px md:data-[active=true]:after:top-auto
      md:data-[active=true]:after:h-[3px] md:data-[active=true]:after:w-auto
      md:data-[active=true]:after:rounded-none`,
      lg: tw`lg:h-full lg:rounded-none lg:px-6 lg:focus-visible:ring-0
      lg:focus-visible:ring-offset-0 lg:focus-visible:before:pointer-events-none
      lg:focus-visible:before:absolute lg:focus-visible:before:inset-x-0
      lg:focus-visible:before:-bottom-px lg:focus-visible:before:top-0 lg:focus-visible:before:z-[1]
      lg:focus-visible:before:ring-[3px] lg:focus-visible:before:ring-inset
      lg:focus-visible:before:ring-ring lg:data-[active=true]:after:inset-x-0
      lg:data-[active=true]:after:-bottom-px lg:data-[active=true]:after:top-auto
      lg:data-[active=true]:after:h-[3px] lg:data-[active=true]:after:w-auto
      lg:data-[active=true]:after:rounded-none`,
    },
  },
});

/* Links in dropdowns. The bar runs their full height, following their rounded left
   corners. Expanded, they sit in a floating panel. */
export const navbarDropdownLinkVariants = cva(
  tw`data-[active=true]:after:inset-y-0 data-[active=true]:after:rounded-none
  data-[active=true]:after:rounded-l-[inherit]`,
  {
    variants: {
      collapseBelow: {
        sm: tw`sm:py-3 sm:text-popover-foreground sm:hover:bg-accent sm:hover:text-accent-foreground
        sm:data-[active=true]:text-primary-400`,
        md: tw`md:py-3 md:text-popover-foreground md:hover:bg-accent md:hover:text-accent-foreground
        md:data-[active=true]:text-primary-400`,
        lg: tw`lg:py-3 lg:text-popover-foreground lg:hover:bg-accent lg:hover:text-accent-foreground
        lg:data-[active=true]:text-primary-400`,
      },
    },
  },
);

export const navbarDropdownTriggerClasses = tw`cursor-pointer border-0 bg-transparent
[&>svg]:transition-transform [&[aria-expanded=true]>svg]:rotate-180`;

/* No `display` utility here: it would override the `hidden` attribute that closes the panel.
   Collapsed, the panel expands in place inside the nav panel. */
export const navbarDropdownPanelClasses = tw`m-0 mt-1 list-none space-y-1 p-0 pl-4`;

/* Expanded, the panel floats below its button, rendered in a portal so no clipping or
   scrolling container around the navbar can cut it off. NavbarDropdown positions it. */
export const navbarDropdownFloatingPanelClasses = tw`fixed m-0 mt-1 min-w-[12rem] list-none
space-y-1 rounded-md border border-muted bg-popover p-1 shadow-md`;

/* A `NavbarDropdown` shown as a group inside the "More" dropdown. */
export const navbarOverflowGroupLabelClasses = tw`block px-3 pb-1 pt-2 text-xs font-semibold
uppercase tracking-wide text-base-400`;

export const navbarOverflowGroupListClasses = tw`m-0 list-none p-0`;

export const navbarActionsClasses = tw`ml-auto flex items-center gap-2`;

export const navbarActionClasses = tw`relative inline-flex size-10 shrink-0 items-center
justify-center rounded-sm text-base-600 transition-colors hover:bg-base-100 hover:text-base-700
[&_svg]:size-5 ${styles.focusRingVisible}`;

export const navbarBadgeClasses = tw`pointer-events-none absolute left-1/2 top-1 flex h-[1.125rem]
min-w-[1.125rem] items-center justify-center rounded-full bg-danger-400 px-1 text-[0.6875rem]
font-bold leading-none text-white ring-2 ring-background`;

export const navbarProfileTriggerClasses = tw`inline-flex shrink-0 cursor-pointer items-center gap-2
rounded-sm border-0 bg-transparent p-1 text-sm font-medium text-base-600 transition-colors
hover:bg-base-100 hover:text-base-700 [&>svg]:transition-transform
[&[data-state=open]>svg]:rotate-180 ${styles.focusRingVisible}`;

export const navbarAvatarClasses = tw`flex size-8 shrink-0 select-none items-center justify-center
overflow-hidden rounded-full bg-primary-400 text-xs font-bold text-white [&>img]:size-full
[&>img]:object-cover`;

export const navbarProfileContentClasses = tw`min-w-[14rem] overflow-hidden rounded-md border
border-muted bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in
data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2
data-[side=top]:slide-in-from-bottom-2`;

export const navbarProfileLabelClasses = tw`px-2 py-1.5`;

export const navbarProfileItemClasses = tw`relative flex cursor-pointer select-none items-center
gap-2 rounded-sm px-2 py-1.5 text-sm text-inherit no-underline outline-none transition-colors
focus:bg-accent focus:text-accent-foreground data-[disabled]:cursor-not-allowed
data-[disabled]:opacity-50 [&_svg]:size-4`;

export const navbarProfileSeparatorClasses = tw`-mx-1 my-1 h-px bg-muted`;

/* In a navbar with a nav, the avatar menu shows only when expanded; collapsed, the
   profile is in the nav panel instead. */
export const navbarProfileTriggerShownVariants = cva('hidden', {
  variants: {
    collapseBelow: { sm: 'sm:inline-flex', md: 'md:inline-flex', lg: 'lg:inline-flex' },
  },
});

/* The profile section at the bottom of the small-screen nav panel. */
export const navbarProfilePanelVariants = cva(tw`mt-2 border-t border-base-200 pt-3`, {
  variants: {
    collapseBelow: { sm: 'sm:hidden', md: 'md:hidden', lg: 'lg:hidden' },
  },
});

export const navbarProfilePanelHeaderClasses = tw`mb-2 flex items-center gap-3 px-3`;

export const navbarProfilePanelEmailClasses = tw`block truncate text-xs text-base-400`;

export const navbarProfilePanelItemClasses = tw`cursor-pointer gap-2 border-0 bg-transparent
text-left disabled:cursor-not-allowed disabled:opacity-50 aria-disabled:cursor-not-allowed
aria-disabled:opacity-50 [&_svg]:size-4`;

export const navbarProfilePanelSeparatorClasses = tw`mx-3 my-1 border-t border-base-200`;
