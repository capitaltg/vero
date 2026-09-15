import { cva } from 'class-variance-authority';

/* Light tone pairs a -100 background with a border and text in the same semantic
   color as the dark tone. Where that shade fails WCAG AA (4.5:1) against the light
   background at the badge's text size, it steps one or two stops darker:
   success 500 -> 600, danger 400 -> 500, warning 300 -> 700. The neutral `default`
   variant is the exception: it keeps the dark tone's black text, since the border
   alone is enough to carry the variant. */
export const badgeVariants = cva(
  `inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none
  focus:ring-2 focus:ring-ring focus:ring-offset-2`,
  {
    variants: {
      variant: {
        default: '',
        primary: '',
        success: '',
        danger: '',
        warning: '',
        outline: '',
      },
      tone: {
        dark: '',
        light: '',
      },
      size: {
        default: 'px-2.5 py-0.5 text-xs/[1.4]',
        lg: 'px-4 py-1.5 text-base/[1.4]',
      },
    },
    compoundVariants: [
      // Dark tone: solid semantic fill, no visible border.
      { variant: 'default', tone: 'dark', class: 'border-transparent bg-base-200 text-black' },
      { variant: 'primary', tone: 'dark', class: 'border-transparent bg-primary-400 text-white' },
      { variant: 'success', tone: 'dark', class: 'border-transparent bg-success-500 text-white' },
      { variant: 'danger', tone: 'dark', class: 'border-transparent bg-danger-400 text-white' },
      { variant: 'warning', tone: 'dark', class: 'border-transparent bg-warning-300 text-black' },

      // Light tone: tinted background with a 1px border in the same semantic color.
      { variant: 'default', tone: 'light', class: 'border-base-500 bg-base-100 text-black' },
      {
        variant: 'primary',
        tone: 'light',
        class: 'border-primary-400 bg-primary-100 text-primary-400',
      },
      {
        variant: 'success',
        tone: 'light',
        class: 'border-success-600 bg-success-100 text-success-600',
      },
      {
        variant: 'danger',
        tone: 'light',
        class: 'border-danger-500 bg-danger-100 text-danger-500',
      },
      {
        variant: 'warning',
        tone: 'light',
        class: 'border-warning-700 bg-warning-100 text-warning-700',
      },

      // Outline has no semantic fill to lighten, so it renders the same in both tones.
      { variant: 'outline', class: 'text-foreground' },
    ],
    defaultVariants: {
      variant: 'default',
      tone: 'dark',
      size: 'default',
    },
  },
);
