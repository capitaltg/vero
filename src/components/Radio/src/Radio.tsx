import { buttonVariants } from '@/components/Button/constants';
import { Label } from '@/components/Label';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';
import { RadioProps } from '../types';

const validateProps = (label?: React.ReactNode, ariaLabel?: string) => {
  if (!label && !ariaLabel) {
    throw new Error('Radio must have either a label prop or an aria-label attribute');
  }
  if (label && ariaLabel) {
    throw new Error('Radio must have either a label prop or an aria-label attribute, but not both');
  }
};

const radioCircleClasses =
  'aspect-square h-5 w-5 rounded-full border-2 border-gray-500 text-primary-400 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary-400 ';

const DefaultRadioLabel = ({ id, label }: Pick<RadioProps, 'id' | 'label'>) => {
  if (!label) return null;
  if (typeof label === 'string') return <Label htmlFor={id}>{label}</Label>;
  return label;
};

const DefaultRadio = ({
  ref,
  id,
  label,
  isChecked,
  isDisabled,
  className,
  'aria-label': ariaLabel,
  ...props
}: RadioProps & { ref: React.Ref<HTMLButtonElement> }) => (
  <div className="flex items-center gap-2">
    <RadioGroupPrimitive.Item
      ref={ref}
      id={id}
      className={cn(
        styles.focusRingVisible,
        styles.focusRingVisibleSm,
        radioCircleClasses,
        className,
      )}
      checked={isChecked}
      disabled={isDisabled}
      aria-label={ariaLabel}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-3 w-3 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
    <DefaultRadioLabel id={id} label={label} />
  </div>
);

const TileRadio = ({
  ref,
  id,
  label,
  description,
  isChecked,
  isDisabled,
  className,
  'aria-label': ariaLabel,
  ...props
}: RadioProps & { ref: React.Ref<HTMLButtonElement> }) => (
  <div
    className={cn(
      'relative rounded-lg border-2 border-muted bg-popover px-4 py-4 hover:bg-accent hover:text-accent-foreground',
      isChecked && 'border-primary-400',
      isDisabled && 'cursor-not-allowed opacity-50',
      className,
    )}
  >
    <div className="flex items-start gap-3">
      <RadioGroupPrimitive.Item
        ref={ref}
        id={id}
        className={cn(
          styles.focusRingVisible,
          styles.focusRingVisibleSm,
          radioCircleClasses,
          'mt-1',
        )}
        checked={isChecked}
        disabled={isDisabled}
        aria-label={ariaLabel}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-3 w-3 fill-current text-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <div className="space-y-1">
        {label ? (
          <Label htmlFor={id} className="font-medium">
            {label}
          </Label>
        ) : null}
        {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      </div>
    </div>
  </div>
);

const ButtonRadio = ({
  ref,
  id,
  label,
  description,
  isChecked,
  isDisabled,
  className,
  'aria-label': ariaLabel,
  ...props
}: RadioProps & { ref: React.Ref<HTMLButtonElement> }) => (
  <div
    className={cn(
      'relative',
      isChecked
        ? cn(styles.button, buttonVariants({ variant: 'primary' }))
        : cn(styles.button, buttonVariants({ variant: 'input' })),
      isDisabled && 'cursor-not-allowed opacity-50',
      className,
    )}
  >
    <RadioGroupPrimitive.Item
      ref={ref}
      id={id}
      className="absolute inset-0 opacity-0"
      checked={isChecked}
      disabled={isDisabled}
      aria-label={ariaLabel}
      {...props}
    />
    <div className="flex items-center gap-2">
      {label ? <span className="font-medium">{label}</span> : null}
      {description ? <span className="text-sm text-muted-foreground">{description}</span> : null}
    </div>
  </div>
);

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
        <ButtonRadio
          ref={ref}
          id={id}
          label={label}
          description={description}
          isChecked={isChecked}
          isDisabled={isDisabled}
          className={className}
          aria-label={ariaLabel}
          {...props}
        />
      );
    }

    if (variant === 'tile') {
      return (
        <TileRadio
          ref={ref}
          id={id}
          label={label}
          description={description}
          isChecked={isChecked}
          isDisabled={isDisabled}
          className={className}
          aria-label={ariaLabel}
          {...props}
        />
      );
    }

    return (
      <DefaultRadio
        ref={ref}
        id={id}
        label={label}
        description={description}
        isChecked={isChecked}
        isDisabled={isDisabled}
        className={className}
        aria-label={ariaLabel}
        {...props}
      />
    );
  },
);

Radio.displayName = 'Radio';

export { Radio };
