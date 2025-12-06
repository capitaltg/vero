import { Label } from '@/components/Label';
import * as React from 'react';

export interface DefaultFormControlLabelProps {
  id?: string;
  label?: React.ReactNode;
}

/**
 * Shared label component for form controls with default variant.
 * Renders a Label component for string labels, or passes through ReactNode labels.
 */
export const DefaultFormControlLabel = ({ id, label }: DefaultFormControlLabelProps) => {
  if (!label) return null;
  if (typeof label === 'string') return <Label htmlFor={id}>{label}</Label>;
  return label;
};
