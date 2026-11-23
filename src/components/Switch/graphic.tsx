import { cn } from '@/lib/utils';
import { switchClasses, switchThumbClasses } from './constants';

/**
 * The look of a switch, without its behaviour: for an element that is itself the control
 * (such as a menu item), where a real Switch would nest one control in another. Hidden
 * from assistive technology.
 */
export function SwitchGraphic({ checked, className }: { checked: boolean; className?: string }) {
  const state = checked ? 'checked' : 'unchecked';
  return (
    <span aria-hidden="true" className={cn(switchClasses, className)} data-state={state}>
      <span className={switchThumbClasses} data-state={state} />
    </span>
  );
}
