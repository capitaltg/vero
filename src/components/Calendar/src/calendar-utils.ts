import { MutableRefObject } from 'react';

function focusButton(ref: MutableRefObject<HTMLButtonElement | null>) {
  setTimeout(() => {
    ref.current?.focus();
  }, 0);
}

export { focusButton };
