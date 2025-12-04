import { buttonVariants } from '@/components/Button/constants';
import { Label } from '@/components/Label';
import { useAriaDisabled, useRadioAria } from '@/hooks';
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
  'aspect-square h-5 w-5 rounded-full border-2 border-gray-500 text-primary-400 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 data-[state=checked]:border-primary-400 ';

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
}: RadioProps & { ref: React.Ref<HTMLButtonElement> }) => {
  const disabledProps = useAriaDisabled({ isDisabled });

  return (
    <div
      className={cn(
        'flex items-center gap-2',
        isDisabled && 'cursor-not-allowed opacity-50 [&>*]:cursor-not-allowed',
      )}
    >
      <RadioGroupPrimitive.Item
        ref={ref}
        aria-label={ariaLabel}
        checked={isChecked}
        className={cn(
          styles.focusRingVisible,
          styles.focusRingVisibleSm,
          radioCircleClasses,
          className,
        )}
        id={id}
        {...props}
        {...disabledProps}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-3 w-3 fill-current text-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <DefaultRadioLabel id={id} label={label} />
    </div>
  );
};

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
}: RadioProps & { ref: React.Ref<HTMLButtonElement> }) => {
  const disabledProps = useAriaDisabled({ isDisabled });
  const { ariaProps, labelId, descriptionId } = useRadioAria({
    label,
    description,
    'aria-label': ariaLabel,
  });

  const renderLabel = () => {
    if (!label) return null;
    if (typeof label === 'string') {
      return (
        <div className="font-medium" id={labelId}>
          {label}
        </div>
      );
    }
    return <div id={labelId}>{label}</div>;
  };

  return (
    <div
      className={cn(
        'relative rounded-lg border-2 border-muted bg-popover px-4 py-4',
        isChecked && 'border-primary-400',
        isDisabled
          ? 'cursor-not-allowed opacity-50 [&_*]:cursor-not-allowed'
          : 'cursor-pointer hover:bg-accent hover:text-accent-foreground',
        className,
      )}
    >
      <RadioGroupPrimitive.Item
        ref={ref}
        checked={isChecked}
        className="absolute inset-0 opacity-0"
        id={id}
        {...ariaProps}
        {...props}
        {...disabledProps}
      />
      <div className="flex items-start gap-3">
        <div
          className={cn(
            radioCircleClasses,
            'pointer-events-none mt-1',
            isChecked && 'border-primary-400',
          )}
        >
          {isChecked ? (
            <div className="flex h-full w-full items-center justify-center">
              <Circle className="h-3 w-3 fill-current text-primary-400" />
            </div>
          ) : null}
        </div>
        <div className="pointer-events-none space-y-1">
          {renderLabel()}
          {description ? (
            <p className="text-sm text-muted-foreground" id={descriptionId}>
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

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
}: RadioProps & { ref: React.Ref<HTMLButtonElement> }) => {
  const disabledProps = useAriaDisabled({ isDisabled });
  const { ariaProps, labelId, descriptionId } = useRadioAria({
    label,
    description,
    'aria-label': ariaLabel,
  });

  const renderLabel = () => {
    if (!label) return null;
    if (typeof label === 'string') {
      return (
        <span className="font-medium" id={labelId}>
          {label}
        </span>
      );
    }
    return <span id={labelId}>{label}</span>;
  };

  return (
    <div
      className={cn(
        'relative',
        isChecked
          ? cn(styles.button, buttonVariants({ variant: 'primary' }))
          : cn(styles.button, buttonVariants({ variant: 'input' })),
        isDisabled && 'pointer-events-none cursor-not-allowed opacity-50',
        className,
      )}
    >
      <RadioGroupPrimitive.Item
        ref={ref}
        checked={isChecked}
        className="absolute inset-0 opacity-0"
        id={id}
        {...ariaProps}
        {...props}
        {...disabledProps}
      />
      <div className="flex items-center gap-2">
        {renderLabel()}
        {description ? (
          <span className="text-sm text-muted-foreground" id={descriptionId}>
            {description}
          </span>
        ) : null}
      </div>
    </div>
  );
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
        <ButtonRadio
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
        <TileRadio
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
      <DefaultRadio
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
