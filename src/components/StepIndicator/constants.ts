import { cva } from 'class-variance-authority';

export const stepIndicatorVariants = cva('flex', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    size: {
      sm: 'gap-4',
      default: 'gap-6',
      lg: 'gap-8',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    size: 'default',
  },
});

export const stepIndicatorCircleVariants = cva(
  'relative z-10 flex items-center justify-center rounded-full border-[3px] bg-white font-bold',
  {
    variants: {
      size: {
        sm: 'h-6 w-6 text-xs',
        default: 'h-8 w-8 text-sm',
        lg: 'h-10 w-10 text-base',
      },
      status: {
        default: 'border-muted text-muted-foreground',
        current: 'border-primary-400 text-primary-400',
        completed: 'border-primary-400 bg-primary-400 text-white',
      },
    },
    defaultVariants: {
      size: 'default',
      status: 'default',
    },
  },
);

export const stepIndicatoConnectorVariants = cva('absolute bg-muted', {
  variants: {
    size: {
      sm: '',
      default: '',
      lg: '',
    },
    orientation: {
      horizontal: 'w-[calc(100%_-_1.5rem)]',
      vertical: 'h-full',
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      orientation: 'horizontal',
      class: 'left-[calc(50%_+_1.25rem)] top-3 h-[2px]',
    },
    {
      size: 'default',
      orientation: 'horizontal',
      class: 'left-[calc(50%_+_1.5rem)] top-[calc(1rem_-_1px)] h-[3px]',
    },
    {
      size: 'lg',
      orientation: 'horizontal',
      class: 'left-[calc(50%_+_1.75rem)] top-[calc(1.25rem_-_1px)] h-[4px]',
    },
    {
      size: 'sm',
      orientation: 'vertical',
      class: 'left-[0.6875rem] top-[1.25rem] w-0.5',
    },
    {
      size: 'default',
      orientation: 'vertical',
      class: 'left-[0.9375rem] top-[1.75rem] w-[3px]',
    },
    {
      size: 'lg',
      orientation: 'vertical',
      class: 'left-[1.125rem] top-[2.25rem] w-[4px]',
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    size: 'default',
  },
});

export const stepIndicatorTextVariants = cva('font-medium', {
  variants: {
    size: {
      sm: 'text-sm',
      default: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});
