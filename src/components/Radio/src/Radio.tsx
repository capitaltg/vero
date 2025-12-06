import { validateFormControlProps } from '@/lib/form-controls';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React from 'react';
import { RadioProps } from '../types';
import { RadioButton } from './RadioButton';
import { RadioDefault } from './RadioDefault';
import { RadioTile } from './RadioTile';

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
    validateFormControlProps('Radio', label, ariaLabel);

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
