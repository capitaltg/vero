import { useAriaDisabled } from '@/hooks';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { useRef } from 'react';
import { InputProps } from '../types';
import { applyMask, getMaskPattern, getRawLength } from '../utils/mask';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, transform = 'none', mask, isDisabled = false, onChange, ...props }, ref) => {
    const disabledProps = useAriaDisabled({ isDisabled });
    const maskPattern = getMaskPattern(mask);
    // Track the previous raw value length to detect deletion
    const prevRawLengthRef = useRef<number>(0);

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      let value = evt.target.value;

      // Apply mask if provided
      if (maskPattern) {
        const currentRawLength = getRawLength(value);
        const isDeleting = currentRawLength < prevRawLengthRef.current;
        value = applyMask(value, maskPattern, isDeleting);
        // Update the previous raw length for next comparison
        prevRawLengthRef.current = getRawLength(value);
      }

      // Apply transforms
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
