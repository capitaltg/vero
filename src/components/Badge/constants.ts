import { cva } from 'class-variance-authority';

/* Light tone pairs a -100 background with a -400 border, matching the Alert's use of
   -400 as its accent. Text does not follow the border down: only `primary` clears WCAG
   AA (4.5:1) at -400 against a -100 background at the badge's text size, so the rest
   step darker until they do -- default base-600, success 600, danger 600, warning 700,
   info 700. The borders themselves fall below the 3:1 non-text threshold for success
   (2.78), warning (2.01) and info (2.02); the -100 background is what identifies the
   badge, so the border reads as decorative rather than as a required boundary. */
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
        info: '',
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
      { variant: 'info', tone: 'dark', class: 'border-transparent bg-info-400 text-black' },

      // Light tone: tinted background with a 1px -400 border; text steps darker for AA.
      { variant: 'default', tone: 'light', class: 'border-base-400 bg-base-100 text-base-600' },
      {
        variant: 'primary',
        tone: 'light',
        class: 'border-primary-400 bg-primary-100 text-primary-400',
      },
      {
        variant: 'success',
        tone: 'light',
        class: 'border-success-400 bg-success-100 text-success-600',
      },
      {
        variant: 'danger',
        tone: 'light',
        class: 'border-danger-400 bg-danger-100 text-danger-600',
      },
      {
        variant: 'warning',
        tone: 'light',
        class: 'border-warning-400 bg-warning-100 text-warning-700',
      },
      { variant: 'info', tone: 'light', class: 'border-info-400 bg-info-100 text-info-700' },

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
