import { cva } from 'class-variance-authority';

export const dataTableVariants = cva('w-full caption-bottom text-sm', {
  variants: {
    variant: {
      default: '',
      striped: '',
      bordered: '',
    },
    size: {
      default: '',
      sm: '',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export const cellPadding = {
  default: 'px-4 py-3',
  sm: 'px-3 py-2',
  lg: 'px-6 py-4',
} as const;
