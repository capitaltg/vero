import { tw } from '@/lib/utils';

const focusRing = tw`focus:outline-none focus:ring-[3px] focus:ring-ring focus:ring-offset-[3px]`;
const focusRingSm = tw`focus:ring-offset-2`;

const focusRingVisible = tw`focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:ring-offset-[3px] focus-visible:ring-offset-background`;
const focusRingVisibleSm = tw`focus-visible:ring-offset-[2px]`;

const focusRingWithin = tw`focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring focus-within:ring-offset-[3px] focus-within:ring-offset-background`;
const focusRingWithinSm = tw`focus-within:ring-offset-[2px]`;

const input = tw`flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50`;

const button = tw`inline-flex items-center justify-center whitespace-nowrap rounded-sm bg-transparent text-sm font-bold ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50`;

export const styles = {
  focusRing,
  focusRingSm,
  focusRingVisible,
  focusRingVisibleSm,
  focusRingWithin,
  focusRingWithinSm,

  // Link
  link: tw`text-link underline transition-colors visited:text-link-visited hover:text-link-hover hover:no-underline`,
  linkNoUnderline: tw`no-underline hover:underline`,

  // Form elements
  input: tw`${input} ${focusRingVisible}`,

  // Typography
  text: {
    title: tw`text-3xl font-bold`,
    subtitle: tw`mt-2 text-base-400`,
    hint: tw`text-sm text-base-400`,
    error: tw`text-sm font-medium text-destructive`,
    label: tw`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,
  },

  // Common component styles
  button: tw`${button} ${focusRing}`,

  popover: tw`relative z-50 w-72 rounded-md border border-muted bg-popover px-4 py-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
} as const;
