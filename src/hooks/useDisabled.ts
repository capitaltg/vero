import { useCallback } from 'react';

export interface UseDisabledOptions {
  isDisabled?: boolean;
}

export interface UseDisabledReturn {
  'aria-disabled': boolean;

  // mouse and touch events
  onMouseDown: (evt: React.MouseEvent) => void;
  onMouseUp: (evt: React.MouseEvent) => void;
  onClick: (evt: React.MouseEvent) => void;
  onTouchStart: (evt: React.TouchEvent) => void;
  onTouchEnd: (evt: React.TouchEvent) => void;

  // keyboard events
  onKeyDown: (evt: React.KeyboardEvent) => void;
  onKeyUp: (evt: React.KeyboardEvent) => void;
  onKeyPress: (evt: React.KeyboardEvent) => void;

  // form events
  onInput: (evt: React.FormEvent) => void;
  onChange: (evt: React.ChangeEvent) => void;
  onSubmit: (evt: React.FormEvent) => void;
  onReset: (evt: React.FormEvent) => void;

  // clipboard events
  onCopy: (evt: React.ClipboardEvent) => void;
  onCut: (evt: React.ClipboardEvent) => void;
  onPaste: (evt: React.ClipboardEvent) => void;

  // drag events
  onDrag: (evt: React.DragEvent) => void;
  onDragStart: (evt: React.DragEvent) => void;
  onDragEnd: (evt: React.DragEvent) => void;
  onDrop: (evt: React.DragEvent) => void;
}

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

  const handleChangeEvent = useCallback(
    (evt: React.ChangeEvent) => {
      if (isDisabled) {
        evt.preventDefault();
        evt.stopPropagation();
      }
    },
    [isDisabled],
  );

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

  return {
    'aria-disabled': isDisabled,

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
    onChange: handleChangeEvent,
    onSubmit: handleFormEvent,
    onReset: handleFormEvent,

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
