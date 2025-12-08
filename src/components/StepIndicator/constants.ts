import { cva } from 'class-variance-authority';

export const stepIndicatorVariants = cva('flex gap-6', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export const stepIndicatorCircleVariants = cva(
  `relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-[3px] bg-white text-sm
  font-bold`,
  {
    variants: {
      status: {
        default: 'border-muted text-muted-foreground',
        current: 'border-primary-400 text-primary-400',
        completed: 'border-primary-400 bg-primary-400 text-white',
      },
    },
    defaultVariants: {
      status: 'default',
    },
  },
);

export const stepIndicatorConnectorVariants = cva('absolute bg-muted', {
  variants: {
    orientation: {
      horizontal:
        'left-[calc(50%_+_1.5rem)] top-[calc(1rem_-_1px)] h-[3px] w-[calc(100%_-_1.5rem)]',
      vertical: 'left-[0.9375rem] top-[1.75rem] h-full w-[3px]',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export const stepIndicatorTextVariants = cva('text-base font-medium');

// USWDS-style default variant constants
export const stepIndicatorDefaultContainerVariants = cva('', {
  variants: {
    orientation: {
      horizontal: '',
      vertical: '',
    },
  },
});

export const stepIndicatorSegmentsVariants = cva('flex', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export const stepIndicatorSegmentVariants = cva('relative', {
  variants: {
    status: {
      default: 'bg-muted',
      current: 'bg-primary-400',
      completed: 'bg-primary-500',
    },
    orientation: {
      horizontal: 'h-2.5 flex-1',
      vertical: 'w-2.5 flex-1',
    },
  },
  defaultVariants: {
    status: 'default',
    orientation: 'horizontal',
  },
});

export const stepIndicatorHeaderVariants = cva('mt-4 text-base');

export const stepIndicatorHeaderCounterVariants = cva('text-base font-bold');
