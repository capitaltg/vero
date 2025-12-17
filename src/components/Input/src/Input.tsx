import { useAriaDisabled } from '@/hooks';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { InputProps } from '../types';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, transform = 'none', isDisabled = false, onChange, ...props }, ref) => {
    const disabledProps = useAriaDisabled({ isDisabled });

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      let value = evt.target.value;
      const transforms = Array.isArray(transform) ? transform : [transform];

      transforms.forEach(t => {
        // Handle custom transform functions
        if (typeof t === 'function') {
          value = t(value);
          return;
        }

        // Handle preset transforms
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
          case 'capitalize':
            value = value
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
            break;
          case 'remove-spaces':
            value = value.replaceAll(/\s+/g, '');
            break;
          case 'numbers-only':
            value = value.replaceAll(/\D/g, '');
            break;
          case 'alphanumeric':
            value = value.replaceAll(/[^a-zA-Z0-9]/g, '');
            break;
          case 'slug':
            value = value
              .toLowerCase()
              .replaceAll(/[^\w\s-]/g, '')
              .replaceAll(/[\s_-]+/g, '-')
              .replaceAll(/^-+/g, '');
            break;
          case 'kebab-case':
            value = value
              .toLowerCase()
              .replaceAll(/[\s_]+/g, '-')
              .replaceAll(/-+/g, '-')
              .replaceAll(/^-+/g, '');
            break;
          case 'snake-case':
            value = value
              .toLowerCase()
              .replaceAll(/[\s-]+/g, '_')
              .replaceAll(/_+/g, '_')
              .replaceAll(/^_+/g, '');
            break;
          default:
            break;
        }
      });

      // Update the input value directly for immediate feedback
      evt.target.value = value;

      // Call the onChange callback if it exists
      if (!onChange) return;
      onChange(evt);
    };

    return (
      <input
        ref={ref}
        className={cn(styles.input, className)}
        type={type}
        onChange={handleChange}
        {...props}
        {...disabledProps}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
