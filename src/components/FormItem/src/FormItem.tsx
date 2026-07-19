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

    // Build aria-describedby from whichever hint/error IDs are active, merging with any
    // existing aria-describedby on the child so we don't clobber consumer-supplied values.
    const existingDescribedBy = (children.props as Record<string, unknown>)['aria-describedby'];
    const describedByIds =
      [
        hintText ? hintId : null,
        errorText ? errorId : null,
        typeof existingDescribedBy === 'string' ? existingDescribedBy : null,
      ]
        .filter(Boolean)
        .join(' ') || undefined;

    const childProps: Record<string, unknown> = {};
    if (describedByIds) childProps['aria-describedby'] = describedByIds;
    if (errorText) childProps['aria-invalid'] = true;

    const child =
      Object.keys(childProps).length > 0 ? React.cloneElement(children, childProps) : children;

    return (
      <div
        ref={ref}
        className={cn('vero-form-item', 'space-y-1', className)}
        {...props}
        data-error={errorText ? 'true' : undefined}
      >
        {label ? (
          <div>
            <div className={cn('vero-form-item-label-row', 'flex items-center')}>
              {typeof label === 'string' ? (
                <Label
                  className={cn('vero-form-item-label', 'font-bold leading-5')}
                  htmlFor={childId}
                  id={labelId}
                >
                  {label}
                  {isRequired ? (
                    <span className={cn('vero-form-item-required', 'ml-0.5 text-destructive')}>
                      *
                    </span>
                  ) : null}
                </Label>
              ) : (
                label
              )}
              {labelSlot ? (
                <div className={cn('vero-form-item-label-slot', 'ml-2 inline-flex')}>
                  {labelSlot}
                </div>
              ) : null}
            </div>
            {hintText ? (
              <p
                className={cn('vero-form-item-hint', styles.text.hint, 'mb-0 mt-0')}
                data-testid={hintId}
                id={hintId}
              >
                {hintText}
              </p>
            ) : null}
          </div>
        ) : null}
        {child}
        {errorText ? (
          <p
            className={cn('vero-form-item-error', styles.text.error, 'mb-0 mt-0')}
            data-testid={errorId}
            id={errorId}
          >
            {errorText}
          </p>
        ) : null}
      </div>
    );
  },
);
FormItem.displayName = 'FormItem';

export { FormItem };
