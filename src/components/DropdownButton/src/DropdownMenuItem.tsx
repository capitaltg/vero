import { cn } from '@/lib/utils';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import type { MouseEvent } from 'react';
import { memo, useCallback } from 'react';
import { DropdownItem } from '../types';

interface DropdownMenuItemProps {
  item: DropdownItem;
}

const DropdownMenuItem = memo(({ item }: DropdownMenuItemProps) => {
  const { isDisabled, onClick, icon, label } = item;

  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (isDisabled) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        onClick?.();
      }
    },
    [isDisabled, onClick],
  );

  return (
    <DropdownMenuPrimitive.Item
      aria-disabled={isDisabled}
      className={cn(
        `relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm
        outline-none transition-colors focus:bg-accent focus:text-accent-foreground`,
        onClick && !isDisabled && 'cursor-pointer',
        isDisabled && 'cursor-not-allowed opacity-50',
      )}
      onClick={handleClick}
    >
      {icon ? <span className="mr-2">{icon}</span> : null}
      {label}
    </DropdownMenuPrimitive.Item>
  );
});
DropdownMenuItem.displayName = 'DropdownMenuItem';

export { DropdownMenuItem };
