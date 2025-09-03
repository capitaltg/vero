import { useDisabled } from '@/hooks';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';
import { TextareaProps } from '../types';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, isDisabled = false, isGrowable = false, ...props }, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const disabledProps = useDisabled({ isDisabled });

    /**
     * TODO: remove this once CSS `field-sizing: content` becomes ratified
     * and widely supported
     * ref: https://caniuse.com/?search=field-sizing
     */
    useEffect(() => {
      if (isGrowable && textareaRef.current) {
        const textarea = textareaRef.current;
        const adjustHeight = () => {
          textarea.style.height = 'auto';
          textarea.style.height = `${textarea.scrollHeight}px`;
        };

        textarea.addEventListener('input', adjustHeight);
        adjustHeight(); // Initial adjustment

        return () => textarea.removeEventListener('input', adjustHeight);
      }
    }, [isGrowable]);

    return (
      <textarea
        ref={el => {
          // Handle both refs
          if (typeof ref === 'function') {
            ref(el);
          } else if (ref) {
            ref.current = el;
          }
          textareaRef.current = el;
        }}
        className={cn(
          styles.input,
          'min-h-[5rem]',
          isGrowable && 'resize-none overflow-hidden',
          className,
        )}
        {...props}
        {...disabledProps}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
