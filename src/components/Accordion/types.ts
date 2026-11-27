import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ComponentPropsWithoutRef } from 'react';

export interface AccordionItem {
  /** A unique id for the section, used in `value` and `defaultValue`. */
  id: string;
  /** The section's heading, shown in its trigger button. */
  title: React.ReactNode;
  /** The section's content, shown when it's expanded. */
  content: React.ReactNode;
}

type SharedProps = {
  /**
   * `single` allows one open section at a time; `multiple` allows any number. It sets the
   * types of `value`, `defaultValue` and `onValueChange`: a string in `single` mode and an
   * array of strings in `multiple` mode.
   */
  mode: 'single' | 'multiple';
  /**
   * The open section's id (`single`) or ids (`multiple`), for a controlled accordion. Pass
   * `onValueChange` to update it; it's called with the new value, which is `''` in `single`
   * mode when every section is closed.
   */
  value?: string | string[];
  /** The section's id (`single`) or ids (`multiple`) to open at first, when uncontrolled. */
  defaultValue?: string | string[];
  /** The sections, in order. Each has an `id`, a `title` and `content`. */
  items: AccordionItem[];
  /** The color of the triggers and the content borders. Defaults to `default`. */
  variant?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
  /** Which side of the trigger the caret icon sits on. Defaults to `right`. */
  caretPosition?: 'left' | 'right';
  /** Classes for the outer element, merged after the defaults. */
  className?: string;
  /** Classes for each section's trigger button, merged after the defaults. */
  triggerClassName?: string;
  /** Classes for each section's content panel, merged after the defaults. */
  contentClassName?: string;
  /** Draws a border around each expanded content panel. Defaults to `false`. */
  isBordered?: boolean;
  /**
   * Lets the open section be closed, so none are open. Applies only to `single` mode.
   * Defaults to `true`.
   */
  isCollapsible?: boolean;
  /** The HTML element for each section's heading, which wraps its trigger. Defaults to `h3`. */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

type SingleOrAccordionProps = {
  /** `single` allows one open section at a time; `multiple` allows any number. */
  mode: 'single';
  /** The open section's id, for a controlled accordion. Use with `onValueChange`. */
  value?: string;
  /** The section open at first, for an uncontrolled accordion. */
  defaultValue?: string;
  /** Called with the open section's id when it changes, or `''` when all are closed. */
  onValueChange?: (value: string) => void;
};

type MultipleProps = {
  /** `single` allows one open section at a time; `multiple` allows any number. */
  mode: 'multiple';
  /** The open sections' ids, for a controlled accordion. Use with `onValueChange`. */
  value?: string[];
  /** The sections open at first, for an uncontrolled accordion. */
  defaultValue?: string[];
  /** Called with the open sections' ids when they change. */
  onValueChange?: (value: string[]) => void;
};

type OmittedPrimitiveProps = Omit<
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>,
  'type' | 'value' | 'defaultValue' | 'collapsible' | 'onValueChange'
>;

// Written as one intersection, rather than a union of two, so Storybook's docgen can read
// the shared props. `mode`, `value` and `defaultValue` are declared in `SharedProps` for the
// docs; each mode's type below narrows them.
export type AccordionProps = SharedProps &
  OmittedPrimitiveProps &
  (SingleOrAccordionProps | MultipleProps);
