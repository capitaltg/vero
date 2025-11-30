import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { AlertCircle, AlertTriangle, CheckCircle2, Info, X } from 'lucide-react';
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
      isClosable = false,
      onClose,
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
        {isClosable ? (
          <button
            className={cn(
              styles.focusRing,
              styles.focusRingSm,
              `-mt-0.5 shrink-0 rounded-full bg-transparent px-1.5 py-1.5 opacity-70 transition
                hover:bg-black/10 hover:opacity-100 focus:bg-black/10 focus:opacity-100`,
            )}
            type="button"
            onClick={onClose}
          >
            <X className="h-5 w-5" strokeWidth={3} />
            <span className="sr-only">Close</span>
          </button>
        ) : null}
      </div>
    );
  },
);
Alert.displayName = 'Alert';

export { Alert };
