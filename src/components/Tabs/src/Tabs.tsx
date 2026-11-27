import { useAriaDisabled } from '@/hooks';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as React from 'react';
import { TabsContentProps, TabsListProps, TabsProps, TabsTriggerProps } from '../types';

/**
 * A set of panels shown one at a time, each picked by its tab. Compose `Tabs` from a
 * `TabsList` of `TabsTrigger`s and a `TabsContent` for each; a trigger and its panel share a
 * `value`. Built on Radix Tabs, which follows the ARIA tabs pattern. Tabs are activated
 * manually by default: the arrow keys move focus and Enter or Space shows the panel.
 */
const Tabs = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Root>, TabsProps>(
  ({ ...props }, ref) => (
    <TabsPrimitive.Root
      ref={ref}
      activationMode="manual"
      {...props}
      className={cn('vero-tabs', props.className)}
    />
  ),
);
Tabs.displayName = 'Tabs';

/** The row of tabs. Holds the `TabsTrigger`s and handles arrow-key navigation between them. */
const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, TabsListProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        `inline-flex items-center justify-center gap-1 rounded border-[1px] border-base-300 bg-white
        p-1 text-muted-foreground`,
        className,
      )}
      {...props}
    />
  ),
);
TabsList.displayName = 'TabsList';

/** A tab. Selecting it shows the `TabsContent` with the same `value`. */
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, isDisabled, ...props }, ref) => {
  const disabledProps = useAriaDisabled({ isDisabled });
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        styles.focusRing,
        `inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-1.5 text-sm
        font-bold ring-offset-background transition-all hover:bg-primary-200 hover:text-primary
        aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50
        data-[state=active]:bg-primary data-[state=active]:text-white`,
        className,
      )}
      {...props}
      {...disabledProps}
    />
  );
});
TabsTrigger.displayName = 'TabsTrigger';

/** A tab's panel, shown while the `TabsTrigger` with the same `value` is active. */
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(styles.focusRingVisible, 'mt-2', className)}
    {...props}
  />
));
TabsContent.displayName = 'TabsContent';

export { Tabs, TabsContent, TabsList, TabsTrigger };
