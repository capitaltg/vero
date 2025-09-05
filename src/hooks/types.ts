export type UseAriaDisabledOptions = {
  isDisabled?: boolean;
};

// When disabled, override all relevant events to block interaction
export type UseAriaDisabledActive = {
  isDisabled: true;
  'aria-disabled': true;

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
  onSubmit: (evt: React.FormEvent) => void;
  onReset: (evt: React.FormEvent) => void;
  // onChange: (evt: React.ChangeEvent) => void;

  // clipboard events
  onCopy: (evt: React.ClipboardEvent) => void;
  onCut: (evt: React.ClipboardEvent) => void;
  onPaste: (evt: React.ClipboardEvent) => void;

  // drag events
  onDrag: (evt: React.DragEvent) => void;
  onDragStart: (evt: React.DragEvent) => void;
  onDragEnd: (evt: React.DragEvent) => void;
  onDrop: (evt: React.DragEvent) => void;

  // optional for text-like inputs
  readOnly?: true;
};

// When enabled, output nothing
export type UseAriaDisabledInactive = {
  isDisabled: false;
};

// Union type
export type UseAriaDisabledReturn =
  | Omit<UseAriaDisabledActive, 'isDisabled'>
  | Omit<UseAriaDisabledInactive, 'isDisabled'>;
