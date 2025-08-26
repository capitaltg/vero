import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ComponentPropsWithoutRef, HTMLAttributes } from 'react';

export type DialogProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;
export type DialogTriggerProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>;
export interface DialogOverlayProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {
  zIndex?: number;
}
export interface DialogContentProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  zIndex?: number;
}
export type DialogHeaderProps = HTMLAttributes<HTMLDivElement>;
export type DialogFooterProps = HTMLAttributes<HTMLDivElement>;
export type DialogTitleProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
export type DialogDescriptionProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
