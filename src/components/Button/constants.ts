import { styles } from '@/lib/styles';
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      default: 'border border-primary-400 text-primary-400 hover:underline',
      primary:
        'border border-primary-400 bg-primary-400 text-white hover:bg-primary-500 hover:underline',
      danger:
        'border border-danger-400 bg-danger-400 text-white hover:bg-danger-500 hover:underline',
      link: 'text-link underline-offset-4 hover:underline',
      input:
        'border border-input bg-background font-normal hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-black hover:bg-opacity-10 hover:text-black',
    },
    isOutline: {
      true: '',
      false: '',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-8 px-3 text-sm',
      lg: 'h-12 rounded-md px-8 text-lg',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      isOutline: true,
      class: 'bg-transparent text-primary-400 hover:bg-primary-500 hover:text-white',
    },
    {
      variant: 'danger',
      isOutline: true,
      class: 'bg-transparent text-danger-400 hover:bg-danger-500 hover:text-white',
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'default',
    isOutline: false,
  },
});
