import { HTMLAttributes } from 'react';

export interface Tag {
  id: string;
  text: string;
}

// Pick form-related attributes from SelectHTMLAttributes that we want to support
type TagInputFormAttributes = Pick<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'name' | 'required' | 'autoFocus'
>;

export interface TagInputProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>,
    TagInputFormAttributes {
  value: Tag[];
  className?: string;
  placeholder?: string;
  maxTags?: number;
  delimiterChars?: string | string[];
  isDisabled?: boolean;
  onChange: (tags: Tag[]) => void;
  /**
   * The name attribute for form submission.
   * This is required for the tag input value to be included in form data.
   */
  name?: string;
  /**
   * Whether the tag input is required for form validation.
   * When true, the form cannot be submitted without at least one tag.
   */
  required?: boolean;
  /**
   * Automatically focuses the tag input when the page loads.
   */
  autoFocus?: boolean;
}
