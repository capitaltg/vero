import { useCallback } from 'react';

export interface UseDisabledOptions {
  isDisabled?: boolean;
}

export interface UseDisabledReturn {
  'aria-disabled': boolean;
  onMouseDown: (evt: React.MouseEvent) => void;
  onMouseUp: (evt: React.MouseEvent) => void;
  onClick: (evt: React.MouseEvent) => void;
  onTouchStart: (evt: React.TouchEvent) => void;
  onTouchEnd: (evt: React.TouchEvent) => void;
}

/**
 * Hook for handling disabled state in interactive components.
 *
 * Provides accessibility-friendly disabled behavior that:
 *   - Keeps elements focusable via keyboard (Tab navigation)
 *   - Prevents mouse and touch interactions when disabled
 *   - Uses aria-disabled for screen reader compatibility
 *
 * @param options - Configuration options
 * @returns Event handlers and ARIA attributes for disabled state
 */
export function useDisabled({ isDisabled = false }: UseDisabledOptions = {}): UseDisabledReturn {
  const handleMouseEvent = useCallback(
    (evt: React.MouseEvent) => {
      if (isDisabled) {
        evt.preventDefault();
        evt.stopPropagation();
      }
    },
    [isDisabled],
  );

  const handleTouchEvent = useCallback(
    (evt: React.TouchEvent) => {
      if (isDisabled) {
        evt.preventDefault();
        evt.stopPropagation();
      }
    },
    [isDisabled],
  );

  return {
    'aria-disabled': isDisabled,
    onMouseDown: handleMouseEvent,
    onMouseUp: handleMouseEvent,
    onClick: handleMouseEvent,
    onTouchStart: handleTouchEvent,
    onTouchEnd: handleTouchEvent,
  };
}
