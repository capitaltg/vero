import { HTMLAttributes } from 'react';

export interface Tag {
  id: string;
  text: string;
}

export interface TagInputProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value: Tag[];
  className?: string;
  placeholder?: string;
  maxTags?: number;
  delimiterChars?: string | string[];
  isDisabled?: boolean;
  onChange: (tags: Tag[]) => void;
}
