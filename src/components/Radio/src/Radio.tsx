import { validateFormControlProps } from '@/lib/form-controls';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React from 'react';
import { RadioProps } from '../types';
import { RadioButton } from './RadioButton';
import { RadioDefault } from './RadioDefault';
import { RadioTile } from './RadioTile';

/**
 * One option in a `RadioGroup`, built on Radix Radio Group (`role="radio"`). It must be
 * inside a `RadioGroup`, which tracks the selected value and moves focus between radios
 * with the arrow keys. It comes in three styles: a circle with a label, a tile and a
 * toggle button.
 */
const Radio = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, RadioProps>(
  (
    {
      className,
      label,
      description,
      id,
      'aria-label': ariaLabel,
      isChecked,
      isDisabled = false,
      variant = 'default',
      ...props
    },
    ref,
  ) => {
    validateFormControlProps('Radio', label, ariaLabel);

    let Component = RadioDefault;
    if (variant === 'button') {
      Component = RadioButton;
    } else if (variant === 'tile') {
      Component = RadioTile;
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

Radio.displayName = 'Radio';

export { Radio };
