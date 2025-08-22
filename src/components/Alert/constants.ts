import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  'relative flex w-full items-start border-l-8 text-gray-900 dark:text-gray-100',
  {
    variants: {
      variant: {
        success: 'border-success-400 bg-success-100 dark:bg-success-700',
        warning: 'border-warning-400 bg-warning-100 dark:bg-warning-700',
        danger: 'border-danger-400 bg-danger-100 dark:bg-danger-700',
        info: 'border-info-400 bg-info-100 dark:bg-info-700',
      },
      size: {
        sm: 'items-center gap-2 px-4 py-2.5 text-sm',
        default: 'gap-3 px-4 py-4 text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export const alertIconVariants = cva('', {
  variants: {
    size: {
      sm: '[&>svg]:h-5 [&>svg]:w-5',
      default: '[&>svg]:h-8 [&>svg]:w-8',
    },
    variant: {
      success: 'text-success-400',
      warning: 'text-warning-400',
      danger: 'text-danger-400',
      info: 'text-info-400',
    },
    hasHeading: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      size: 'default',
      hasHeading: true,
      class: '-mt-0.5',
    },
  ],
  defaultVariants: {
    size: 'default',
  },
});

export const alertContentVariants = cva('flex-1', {
  variants: {
    size: {
      sm: 'flex flex-row items-center gap-2',
      default: 'flex flex-col gap-1',
    },
    hasIcon: {
      true: '',
      false: '',
    },
    hasHeading: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      size: 'default',
      hasIcon: true,
      hasHeading: false,
      class: 'pt-1',
    },
  ],
});

export const alertHeadingVariants = cva('font-bold text-base-700 dark:text-base-100', {
  variants: {
    size: {
      sm: 'text-base leading-none',
      default: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});
