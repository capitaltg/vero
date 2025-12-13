import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Label } from '../../Label';
import { FormItemProps } from '../types';

const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  (
    {
      label,
      labelSlot,
      hintText,
      errorText,
      className,
      children,
      elementId,
      isRequired = false,
      ...props
    },
    ref,
  ) => {
    const childId = elementId ?? children.props?.id;

    if (!!childId === false) {
      throw new Error(
        'FormItem must have either an `elementId` prop or an `id` attribute specified on the child element',
      );
    }

    const labelId = `form-item-${childId}-label`;
    const hintId = `form-item-${childId}-hint`;
    const errorId = `form-item-${childId}-error`;

    return (
      <div
        ref={ref}
        className={cn('space-y-1', className)}
        {...props}
        data-error={errorText ? 'true' : undefined}
      >
        {label ? (
          <div className="mb-1">
            <div className="flex items-center">
              {typeof label === 'string' ? (
                <Label className="font-bold leading-5" htmlFor={childId} id={labelId}>
                  {label}
                  {isRequired ? <span className="ml-0.5 text-destructive">*</span> : null}
                </Label>
              ) : (
                label
              )}
              {labelSlot ? <div className="ml-2 inline-flex">{labelSlot}</div> : null}
            </div>
            {hintText ? (
              <p className={styles.text.hint} id={hintId}>
                {hintText}
              </p>
            ) : null}
          </div>
        ) : null}
        {children}
        {errorText ? (
          <p className={styles.text.error} id={errorId}>
            {errorText}
          </p>
        ) : null}
      </div>
    );
  },
);
FormItem.displayName = 'FormItem';

export { FormItem };
