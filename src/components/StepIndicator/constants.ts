import { cva } from 'class-variance-authority';

export const stepIndicatorVariants = cva('flex', {
  variants: {
    orientation: {
      horizontal: 'flex-row gap-6',
      vertical: 'flex-col gap-10',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export const stepIndicatorCircleVariants = cva(
  `text-md relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-[0.1875rem]
  bg-white font-bold`,
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
      horizontal: 'left-[calc(50%_+_1.5rem)] top-4 h-[0.1875rem] w-[calc(100%_-_1.5rem)]',
      vertical: 'left-4 top-[calc(100%-0.25rem)] h-[calc(100%-0.25rem)] w-[0.1875rem]',
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

export const stepIndicatorSegmentsVariants = cva('flex gap-1', {
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
      horizontal: 'h-2 flex-1',
      vertical: 'w-2 flex-1',
    },
  },
  defaultVariants: {
    status: 'default',
    orientation: 'horizontal',
  },
});

export const stepIndicatorHeaderVariants = cva('mt-4 text-base');

export const stepIndicatorHeaderCounterVariants = cva('text-base font-bold');
