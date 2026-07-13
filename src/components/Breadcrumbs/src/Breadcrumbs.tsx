import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import * as React from 'react';
import { BreadcrumbsProps } from '../types';

const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  (
    {
      items,
      separator = <ChevronRight className={cn('vero-breadcrumbs-separator-icon', 'h-4 w-4')} />,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn('vero-breadcrumbs', 'flex', className)}
        {...props}
      >
        <ol className={cn('vero-breadcrumbs-list', 'flex flex-wrap items-center gap-1 pl-0')}>
          {items.map((item, index) => (
            <li key={index} className={cn('vero-breadcrumbs-item', 'flex items-center gap-1')}>
              {item.href ? (
                <a
                  className={cn('vero-breadcrumbs-link', styles.link, styles.linkNoUnderline)}
                  href={item.href}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  aria-current="page"
                  className={cn('vero-breadcrumbs-current', 'font-medium text-foreground')}
                >
                  {item.label}
                </span>
              )}
              {index < items.length - 1 ? (
                <span className={cn('vero-breadcrumbs-separator', 'text-muted-foreground')}>
                  {separator}
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </nav>
    );
  },
);
Breadcrumbs.displayName = 'Breadcrumbs';

export { Breadcrumbs };
