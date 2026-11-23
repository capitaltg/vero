import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { checkboxClasses } from './constants';

/** The check mark drawn inside a checked box. */
export function CheckboxCheckMark() {
  return <Check aria-hidden="true" className="size-4" strokeWidth={3} />;
}

/**
 * The look of a checkbox, without its behaviour: for an element that is itself the
 * control (a menu item, or a tile over a hidden input), where a real Checkbox would nest
 * one control in another. Hidden from assistive technology.
 */
export function CheckboxGraphic({ checked, className }: { checked: boolean; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(checkboxClasses, 'flex items-center justify-center', className)}
      data-state={checked ? 'checked' : 'unchecked'}
    >
      {checked ? <CheckboxCheckMark /> : null}
    </span>
  );
}
