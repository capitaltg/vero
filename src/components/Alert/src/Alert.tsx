import { cn } from '@/lib/utils';
import { AlertCircle, AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import * as React from 'react';
import {
  alertContentVariants,
  alertHeadingVariants,
  alertIconVariants,
  alertVariants,
} from '../constants';
import { AlertProps } from '../types';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant,
      size = 'default',
      heading,
      headingLevel = 'h2',
      hasIcon = true,
      children,
      ...props
    },
    ref,
  ) => {
    const HeadingTag = headingLevel;
    const icons = {
      success: <CheckCircle2 />,
      warning: <AlertTriangle />,
      danger: <AlertCircle />,
      info: <Info />,
    };

    return (
      <div ref={ref} className={cn(alertVariants({ variant, size }), className)} {...props}>
        {hasIcon ? (
          <span className={cn(alertIconVariants({ variant, size, hasHeading: !!heading }))}>
            {icons[variant]}
          </span>
        ) : null}
        <div className={cn(alertContentVariants({ size, hasIcon, hasHeading: !!heading }))}>
          {heading ? (
            <HeadingTag className={cn(alertHeadingVariants({ size }))}>{heading}</HeadingTag>
          ) : null}
          {children}
        </div>
      </div>
    );
  },
);
Alert.displayName = 'Alert';

export { Alert };
