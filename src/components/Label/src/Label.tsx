import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as React from 'react';
import { LabelProps } from '../types';

/**
 * A styled `<label>` for a form field, built on Radix Label. Point it at the field with
 * `htmlFor`, or wrap the field in it. `FormItem` renders one for you when its `label` is a
 * string.
 */
const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn('vero-label', styles.text.label, className)}
      {...props}
    />
  ),
);
Label.displayName = 'Label';

export { Label };
