import { validateFormControlProps } from '@/lib/form-controls';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';
import { CheckboxProps } from '../types';
import { CheckboxButton } from './CheckboxButton';
import { CheckboxDefault } from './CheckboxDefault';
import { CheckboxTile } from './CheckboxTile';

/**
 * A checkbox for turning one option on or off, built on Radix Checkbox (`role="checkbox"`).
 * It comes in three styles: a box with a label, a tile and a toggle button. It's
 * controlled, so pass `isChecked` and update it from `onCheckedChange`.
 */
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

    let Component = CheckboxDefault;
    if (variant === 'button') {
      Component = CheckboxButton;
    } else if (variant === 'tile') {
      Component = CheckboxTile;
    }

    return (
      <Component
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

Checkbox.displayName = 'Checkbox';

export { Checkbox };
