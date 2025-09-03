import { ReactElement, ReactNode } from 'react';

export interface FormItemProps {
  label?: ReactNode;
  labelSlot?: ReactNode;
  hintText?: string;
  errorText?: string;
  className?: string;
  children: ReactElement;
  elementId?: string;
  isRequired?: boolean;
}
