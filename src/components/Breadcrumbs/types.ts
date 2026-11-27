import { HTMLAttributes, ReactNode } from 'react';

export interface BreadcrumbItem {
  /** The item's text, or other content such as an icon and text. */
  label: ReactNode;
  /** The page the item links to. Leave it out for the current page, the last item. */
  href?: string;
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  /**
   * The trail, from the top level down to the current page. Items with an `href` render as
   * links; an item without one is the current page and is marked `aria-current="page"`.
   */
  items: BreadcrumbItem[];
  /** Shown between items, hidden from screen readers. Defaults to a chevron icon. */
  separator?: ReactNode;
  /** Classes for the `<nav>`, merged after the defaults. */
  className?: string;
}
