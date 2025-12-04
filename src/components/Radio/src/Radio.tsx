import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React from 'react';
import { RadioProps } from '../types';
import { RadioButton } from './RadioButton';
import { RadioDefault } from './RadioDefault';
import { RadioTile } from './RadioTile';

const validateProps = (label?: React.ReactNode, ariaLabel?: string) => {
  if (!label && !ariaLabel) {
    throw new Error('Radio must have either a label prop or an aria-label attribute');
  }
  if (label && ariaLabel) {
    throw new Error('Radio must have either a label prop or an aria-label attribute, but not both');
  }
};

const Radio = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, RadioProps>(
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
        <RadioButton
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
        <RadioTile
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
      <RadioDefault
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

Radio.displayName = 'Radio';

export { Radio };
