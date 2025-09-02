import { useDisabled } from '@/hooks';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { InputProps } from '../types';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, transform = 'none', isDisabled = false, onChange, ...props }, ref) => {
    const disabledProps = useDisabled({ isDisabled });

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (!onChange) return;

      let value = evt.target.value;
      const transforms = Array.isArray(transform) ? transform : [transform];

      transforms.forEach(t => {
        switch (t) {
          case 'uppercase':
            value = value.toUpperCase();
            break;
          case 'lowercase':
            value = value.toLowerCase();
            break;
          case 'trim':
            value = value.trim();
            break;
          default:
            break;
        }
      });

      // Update the input value directly for immediate feedback
      evt.target.value = value;
      onChange(evt);
    };

    return (
      <input
        ref={ref}
        type={type}
        className={cn(styles.input, className)}
        onChange={handleChange}
        {...disabledProps}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
