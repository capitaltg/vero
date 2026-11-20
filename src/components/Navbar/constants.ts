import { styles } from '@/lib/styles';
import { tw } from '@/lib/utils';
import { cva } from 'class-variance-authority';

/* These classes describe the collapsed (small screen) navbar. The expanded layout above
   the `collapseBelow` breakpoint, the active-item indicator and the desktop dropdown
   panel live in `src/styles/components.css`, keyed on the navbar's data attributes,
   because the breakpoint is a prop and Tailwind only generates literal class names. */

export const navbarVariants = cva(
  'vero-navbar relative w-full border-b border-base-200 bg-background text-foreground',
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

/* Vertical padding rather than a min-height, so the top row keeps its 60px height (40px
   controls plus 10px above and below) when the small-screen nav panel wraps below it. */
export const navbarContainerClasses = tw`mx-auto flex w-full flex-wrap items-center gap-x-4 px-4
py-2.5`;

export const navbarBrandClasses = tw`mr-auto flex shrink-0 items-center gap-2 rounded-sm text-lg
font-bold text-inherit no-underline ${styles.focusRingVisible}`;

/* `order-1` places the menu button after the actions, at the far right. The brand's auto
   margin pushes both to the right, and `-ml-2` matches the 8px gap between actions. */
export const navbarToggleClasses = tw`order-1 -ml-2 inline-flex size-10 shrink-0 items-center
justify-center rounded-sm text-base-600 transition-colors hover:bg-base-100 hover:text-base-700
${styles.focusRingVisible}`;

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

export const navbarNavClasses = tw`order-last hidden basis-full pt-2 data-[open=true]:block`;

export const navbarListClasses = tw`m-0 flex list-none flex-col gap-1 p-0`;

/* Shared by top-level links, dropdown buttons and dropdown links. */
export const navbarLinkClasses = tw`relative flex w-full items-center gap-1 whitespace-nowrap
rounded-sm px-3 py-2 text-sm font-medium text-base-600 no-underline transition-colors
hover:bg-base-100 hover:text-base-700 aria-[current=page]:font-bold
aria-[current=page]:text-primary-400 data-[active=true]:text-primary-400 ${styles.focusRingVisible}`;

export const navbarDropdownTriggerClasses = tw`cursor-pointer border-0 bg-transparent
[&>svg]:transition-transform [&[aria-expanded=true]>svg]:rotate-180`;

/* No `display` utility here: it would override the `hidden` attribute that closes the panel. */
export const navbarDropdownPanelClasses = tw`m-0 mt-1 list-none space-y-1 p-0 pl-4`;

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

/* The profile section at the bottom of the small-screen nav panel. */
export const navbarProfilePanelClasses = tw`mt-2 border-t border-base-200 pt-3`;

export const navbarProfilePanelHeaderClasses = tw`mb-2 flex items-center gap-3 px-3`;

export const navbarProfilePanelEmailClasses = tw`block truncate text-xs text-base-400`;

export const navbarProfilePanelItemClasses = tw`cursor-pointer gap-2 border-0 bg-transparent
text-left disabled:cursor-not-allowed disabled:opacity-50 aria-disabled:cursor-not-allowed
aria-disabled:opacity-50 [&_svg]:size-4`;

export const navbarProfilePanelSeparatorClasses = tw`mx-3 my-1 border-t border-base-200`;
