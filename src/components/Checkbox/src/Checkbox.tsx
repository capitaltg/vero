import { validateFormControlProps } from '@/lib/form-controls';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';
import { CheckboxProps } from '../types';
import { CheckboxButton } from './CheckboxButton';
import { CheckboxDefault } from './CheckboxDefault';
import { CheckboxTile } from './CheckboxTile';

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  (
    {
      className,
      label,
      description,
      id,
      'aria-label': ariaLabel,
      isChecked = false,
      isDisabled = false,
      variant = 'default',
      ...props
    },
    ref,
  ) => {
    validateFormControlProps('Checkbox', label, ariaLabel);

    if (variant === 'button') {
      return (
        <CheckboxButton
          ref={ref}
          aria-label={ariaLabel}
          className={className}
          description={description}
          id={id}
          isChecked={isChecked}
          isDisabled={isDisabled}
          label={label}
          {...props}
        />
      );
    }

    if (variant === 'tile') {
      return (
        <CheckboxTile
          ref={ref}
          aria-label={ariaLabel}
          className={className}
          description={description}
          id={id}
          isChecked={isChecked}
          isDisabled={isDisabled}
          label={label}
          {...props}
        />
      );
    }

    return (
      <CheckboxDefault
        ref={ref}
        aria-label={ariaLabel}
        className={className}
        description={description}
        id={id}
        isChecked={isChecked}
        isDisabled={isDisabled}
        label={label}
        {...props}
      />
    );
  },
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
