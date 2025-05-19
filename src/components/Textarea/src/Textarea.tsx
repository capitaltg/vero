import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { TextareaProps } from '../types';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, isDisabled = false, isGrowable = false, ...props }, ref) => {
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);

    /**
     * TODO: remove this once CSS `field-sizing: content` becomes ratified
     * and widely supported
     * ref: https://caniuse.com/?search=field-sizing
     */
    React.useEffect(() => {
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
        ref={element => {
          // Handle both refs
          if (typeof ref === 'function') {
            ref(element);
          } else if (ref) {
            ref.current = element;
          }
          textareaRef.current = element;
        }}
        disabled={isDisabled}
        className={cn(
          styles.input,
          'min-h-[5rem]',
          isGrowable && 'resize-none overflow-hidden',
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
