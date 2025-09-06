import { useCallback } from 'react';
import { UseAriaDisabledOptions, UseAriaDisabledReturn } from './types';

/**
 * Hook for handling disabled state in interactive components.
 *
 * Provides accessibility-friendly disabled behavior that:
 *   - Keeps elements focusable via keyboard (Tab navigation)
 *   - Prevents mouse and touch interactions when disabled
 *   - Uses aria-disabled for screen reader compatibility
 *   - Blocks text input, clipboard operations, and drag/drop when disabled
 *   - Allows focus events to maintain keyboard navigation accessibility
 *
 * @param options - Configuration options
 * @returns Event handlers and ARIA attributes for disabled state
 */
export function useAriaDisabled({
  isDisabled = false,
}: UseAriaDisabledOptions = {}): UseAriaDisabledReturn {
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

  const handleKeyboardEvent = useCallback(
    (evt: React.KeyboardEvent) => {
      if (isDisabled) {
        // Allow Tab and Shift+Tab for keyboard navigation
        if (evt.key === 'Tab') {
          return;
        }
        // Allow Escape for closing modals/dropdowns
        if (evt.key === 'Escape') {
          return;
        }
        evt.preventDefault();
        evt.stopPropagation();
      }
    },
    [isDisabled],
  );

  const handleFormEvent = useCallback(
    (evt: React.FormEvent) => {
      if (isDisabled) {
        evt.preventDefault();
        evt.stopPropagation();
      }
    },
    [isDisabled],
  );

  /*
  const handleChangeEvent = useCallback(
    (evt: React.ChangeEvent) => {
      if (isDisabled) {
        evt.preventDefault();
        evt.stopPropagation();
      }
    },
    [isDisabled],
  );
  */

  const handleClipboardEvent = useCallback(
    (evt: React.ClipboardEvent) => {
      if (isDisabled) {
        evt.preventDefault();
        evt.stopPropagation();
      }
    },
    [isDisabled],
  );

  const handleDragEvent = useCallback(
    (evt: React.DragEvent) => {
      if (isDisabled) {
        evt.preventDefault();
        evt.stopPropagation();
      }
    },
    [isDisabled],
  );

  if (!isDisabled) {
    return {};
  }

  return {
    'aria-disabled': true,

    // mouse and touch events
    onMouseDown: handleMouseEvent,
    onMouseUp: handleMouseEvent,
    onClick: handleMouseEvent,
    onTouchStart: handleTouchEvent,
    onTouchEnd: handleTouchEvent,

    // keyboard events
    onKeyDown: handleKeyboardEvent,
    onKeyUp: handleKeyboardEvent,
    onKeyPress: handleKeyboardEvent,

    // form events
    onInput: handleFormEvent,
    onSubmit: handleFormEvent,
    onReset: handleFormEvent,
    // onChange: handleChangeEvent,

    // clipboard events
    onCopy: handleClipboardEvent,
    onCut: handleClipboardEvent,
    onPaste: handleClipboardEvent,

    // drag events
    onDrag: handleDragEvent,
    onDragStart: handleDragEvent,
    onDragEnd: handleDragEvent,
    onDrop: handleDragEvent,
  };
}
