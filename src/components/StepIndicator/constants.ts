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
  `text-md relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-4 bg-white
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

export const stepIndicatorConnectorVariants = cva('absolute', {
  variants: {
    status: {
      default: 'bg-muted',
      current: 'bg-muted',
      completed: 'bg-primary-400',
    },
    orientation: {
      horizontal: 'left-[calc(50%_+_1.5rem)] top-4 h-1 w-[calc(100%_-_1.5rem)]',
      vertical: 'left-4 top-[calc(100%_-_0.125rem)] h-[calc(100%_-_0.25rem)] w-1',
    },
  },
  defaultVariants: {
    status: 'default',
    orientation: 'horizontal',
  },
});

// USWDS-style default variant constants
export const stepIndicatorDefaultContainerVariants = cva('flex flex-col gap-8', {
  variants: {
    orientation: {
      horizontal: '',
      vertical: '',
    },
  },
});

export const stepIndicatorSegmentsVariants = cva('mb-0 mt-0 flex gap-1 pl-0', {
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
      horizontal: 'h-2 max-h-2 min-h-2 flex-1',
      vertical: 'w-2 min-w-2 max-w-2 flex-1',
    },
  },
  defaultVariants: {
    status: 'default',
    orientation: 'horizontal',
  },
});

export const stepIndicatorStepContentLabelVariants = cva('text-base font-medium leading-tight', {
  variants: {
    status: {
      default: 'text-muted-foreground',
      completed: 'text-foreground',
      current: 'font-bold text-primary-400',
    },
  },
  defaultVariants: {
    status: 'default',
  },
});

export const stepIndicatorStepContentDescriptionVariants = cva(
  'mt-0.5 text-sm text-muted-foreground',
  {
    variants: {
      status: {
        default: '',
        completed: 'text-foreground',
        current: 'font-medium text-primary-400',
      },
    },
    defaultVariants: {
      status: 'default',
    },
  },
);
