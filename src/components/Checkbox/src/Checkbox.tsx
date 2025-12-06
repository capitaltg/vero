import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';
import { CheckboxProps } from '../types';
import { CheckboxButton } from './CheckboxButton';
import { CheckboxDefault } from './CheckboxDefault';
import { CheckboxTile } from './CheckboxTile';

const validateProps = (label?: React.ReactNode, ariaLabel?: string) => {
  if (!label && !ariaLabel) {
    throw new Error('Checkbox must have either a label prop or an aria-label attribute');
  }
  if (label && ariaLabel) {
    throw new Error(
      'Checkbox must have either a label prop or an aria-label attribute, but not both',
    );
  }
};

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
    validateProps(label, ariaLabel);

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
