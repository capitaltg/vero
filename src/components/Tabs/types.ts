import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ComponentPropsWithoutRef } from 'react';

export interface TabsProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  /**
   * The controlled value of the active tab. When provided, the component becomes a controlled component.
   */
  value?: string;
  /**
   * The default value of the active tab when the component is uncontrolled.
   */
  defaultValue?: string;
}

export type TabsListProps = ComponentPropsWithoutRef<typeof TabsPrimitive.List>;
export type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;
export type TabsContentProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;
