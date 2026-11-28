import { ArgTypes, HeaderMdx, Markdown, Stories } from '@storybook/blocks';
import { Check, Compass, X } from 'lucide-react';
import { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { ComponentType, MouseEvent, ReactNode } from 'react';
import { cn } from '../../lib/utils';

// The id of the DocsSection a heading is in, used to prefix the heading's id.
const SectionIdContext = createContext<string | undefined>(undefined);

/**
 * The height of the sticky "On this page" bar (`data-docs-sticky-bar`), which covers the top
 * of the window once it sticks, or 0 on a page without one.
 */
const getStickyBarHeight = () =>
  document.querySelector('[data-docs-sticky-bar]')?.getBoundingClientRect().height ?? 0;

/**
 * Handles a click on an in-page link by scrolling smoothly to the element, stopping a little
 * below the sticky bar so the bar doesn't cover it.
 */
const scrollToElement = (event: MouseEvent<HTMLAnchorElement>, element: Element | null) => {
  event.preventDefault();
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - getStickyBarHeight() - 16;
  window.scrollTo({ top, behavior: 'smooth' });
};

/** A top-level DocsSection, found by its heading's id. */
const getSection = (id: string) => document.querySelector(`section[aria-labelledby="${id}"]`);

/** A heading's id, prefixed with its section's id, e.g. `accessibility-built-in`. */
const useHeadingId = (id: string) => {
  const sectionId = useContext(SectionIdContext);
  return sectionId ? `${sectionId}-${id}` : id;
};

interface DocsSectionProps {
  /** The anchor id, also used to label the section. */
  id: string;
  title: string;
  /** A sentence under the title saying what the section is for. */
  intro?: ReactNode;
  /**
   * `guidance` sets the section on a tinted panel with a compass by its title, so the advice
   * on when and how to use the component stands out from the sections around it.
   */
  variant?: 'default' | 'guidance';
  className?: string;
  children: ReactNode;
}

/**
 * A top-level section of a docs page (Try it, Guidance, Examples, Accessibility, API
 * reference). Its heading uses the docs pages' h2 style from `.storybook/preview.css`,
 * whose hairline and space above set the section apart, the same as a markdown `##`.
 *
 * The `guidance` variant's heading is `sb-unstyled` and styled here instead: the panel
 * replaces the hairline, and Storybook's h2 styles would otherwise outrank these classes.
 */
export const DocsSection = ({
  id,
  title,
  intro,
  variant = 'default',
  className,
  children,
}: DocsSectionProps) => {
  const isGuidance = variant === 'guidance';

  return (
    // The intro's spacing is set from the section: Storybook's paragraph style outranks a
    // class on the paragraph itself.
    <section
      aria-labelledby={id}
      className={cn(
        '[&>h2+p]:mb-8 [&>h2+p]:mt-2.5',
        // The panel's background matches Storybook's sidebar (its light theme's `appBg`).
        isGuidance &&
          'mt-16 rounded-lg border border-primary-200 bg-[#f6f9fc] px-4 pb-6 pt-1 sm:px-7 sm:pb-7',
        className,
      )}
    >
      {isGuidance ? (
        <h2
          className="sb-unstyled m-0 flex items-center gap-2.5 pt-5 text-2xl font-semibold
            leading-normal tracking-[-0.02em] text-primary-600"
          id={id}
        >
          <Compass className="h-6 w-6 shrink-0 text-primary-400" />
          {title}
        </h2>
      ) : (
        <h2 id={id}>{title}</h2>
      )}
      {intro ? <p className="max-w-3xl">{intro}</p> : null}
      <SectionIdContext.Provider value={id}>{children}</SectionIdContext.Provider>
    </section>
  );
};

/**
 * "On this page" links to the page's DocsSections, in page order, placed under the
 * component's description. They're styled as tabs in a bar that sticks to the top of the
 * window as the page scrolls, with the section being read underlined.
 *
 * It finds the sections itself, so pages don't have to list them and the links follow if the
 * sections are reordered or renamed.
 *
 * It shows only at 900px (56.25rem) and narrower, starting with an "Overview" tab that goes
 * back to the top. Wider than that, Storybook's own list (`docs.toc` in
 * `.storybook/preview.ts`) shows the same links in a column to the right; `preview.css`
 * hides that list at the same width, before it runs out of room.
 */
export const DocsOnThisPage = () => {
  const navRef = useRef<HTMLElement>(null);
  const [links, setLinks] = useState<{ id: string; title: string }[]>([]);
  const [activeId, setActiveId] = useState<string>();
  const [isStuck, setIsStuck] = useState(false);

  // The sections render in the same commit as this nav, so they're already in the page here,
  // and the links appear before the first paint. Sections inside a section (the API
  // reference's entries) are left out.
  useLayoutEffect(() => {
    const page = navRef.current?.closest('.sbdocs-content') ?? document;
    const sections = Array.from(page.querySelectorAll('section[aria-labelledby]')).filter(
      section => !section.parentElement?.closest('section'),
    );
    setLinks(
      sections.flatMap(section => {
        const id = section.getAttribute('aria-labelledby') ?? '';
        const title = document.getElementById(id)?.textContent?.trim();
        return title ? [{ id, title }] : [];
      }),
    );
  }, []);

  // The current section is the last one whose top has scrolled up to just below the bar. At
  // the bottom of the page it's the last section, which may be too short to get there. The
  // bar is stuck once its top reaches the top of the window.
  useEffect(() => {
    if (!links.length) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = getStickyBarHeight() + 32;
      let current: string | undefined;
      links.forEach(({ id }) => {
        const top = getSection(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= line) current = id;
      });
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = links[links.length - 1].id;
      setActiveId(current);
      setIsStuck((navRef.current?.parentElement?.getBoundingClientRect().top ?? 1) <= 0);
    };
    // At most one update per frame, however often scroll events fire.
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [links]);

  return (
    // The bar is this div rather than the nav, for two reasons. It's a direct child of the
    // docs page, so it can stick for the whole page (a sticky element stops at the end of its
    // parent). And Storybook sets its docs font on the elements it styles (div, p, li and so
    // on), not on the page, so the nav gets the font from here. The white background hides
    // the page as it scrolls under the bar.
    <div
      className="sticky top-0 z-10 bg-white pt-1 [@media(min-width:56.3125rem)]:hidden"
      data-docs-sticky-bar=""
    >
      {/* The line under the tabs shows only once the bar is stuck. Before that, the first
          section's own line sits just below it, and two lines read as a mistake. */}
      <nav
        ref={navRef}
        aria-label="On this page"
        className={cn('border-b', isStuck ? 'border-gray-200' : 'border-transparent')}
      >
        {/* Scrolls sideways, rather than wrapping, when the tabs don't fit. */}
        <ul
          className="sb-unstyled m-0 flex list-none gap-6 overflow-x-auto p-0
            [scrollbar-width:none]"
        >
          {/* "Overview" (no id) goes back to the top, and is current until the first section
              reaches the bar. */}
          {[{ id: '', title: 'Overview' }, ...links].map(({ id, title }) => {
            const isActive = id === (activeId ?? '');
            return (
              <li key={id || 'overview'}>
                <a
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    `block whitespace-nowrap border-b-2 border-transparent pb-2.5 pt-3 text-sm
                    font-semibold text-gray-500 no-underline hover:text-gray-800`,
                    isActive && 'border-primary-400 text-primary-500 hover:text-primary-500',
                  )}
                  href={`#${id}`}
                  onClick={event => {
                    if (id) {
                      scrollToElement(event, getSection(id));
                      return;
                    }
                    event.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

interface DocsSubheadingProps {
  /**
   * The heading's id within its section. It's prefixed with the section's id, so
   * `built-in` in the Accessibility section becomes `accessibility-built-in`.
   */
  id: string;
  children: ReactNode;
}

/**
 * A heading inside a DocsSection, with an explicit id. It looks like a markdown `###`
 * heading, link icon included, but its id is prefixed with the section's id. That keeps
 * ids unique on pages that have their own headings with the same text, makes shared links
 * say which section they point to, and keeps links working if the heading is reworded.
 */
export const DocsSubheading = ({ id, children }: DocsSubheadingProps) => (
  <HeaderMdx as="h3" id={useHeadingId(id)}>
    {children}
  </HeaderMdx>
);

/**
 * The "When to use" and "When to use something else" cards, side by side when there's room.
 * The space around it is padding: the heading that follows is the first h3 at its level, so
 * Storybook zeroes its top margin with a `:first-of-type` rule, and Storybook's div style
 * resets margins on this element.
 */
export const DocsWhenToUse = ({ children }: { children: ReactNode }) => (
  <div className="grid gap-4 pb-8 pt-2 md:grid-cols-2">{children}</div>
);

const whenToUseCards = {
  use: {
    id: 'when-to-use',
    title: 'When to use',
    Icon: Check,
    iconClassName: 'text-success-500',
    borderClassName: 'border-t-success-500',
  },
  avoid: {
    id: 'when-to-use-something-else',
    title: 'When to use something else',
    Icon: X,
    iconClassName: 'text-danger-500',
    borderClassName: 'border-t-danger-500',
  },
};

interface DocsWhenToUseCardProps {
  /** `use` for "When to use", `avoid` for "When to use something else". */
  kind: keyof typeof whenToUseCards;
  children: ReactNode;
}

/**
 * One card in DocsWhenToUse: a green or red top border, a heading with a check or a cross,
 * then the list. The heading keeps the id it had as a DocsSubheading
 * (`guidance-when-to-use`), so links to it still work. It's `sb-unstyled` because it's
 * smaller than the page's other h3s.
 */
export const DocsWhenToUseCard = ({ kind, children }: DocsWhenToUseCardProps) => {
  const { id, title, Icon, iconClassName, borderClassName } = whenToUseCards[kind];
  const headingId = useHeadingId(id);

  return (
    // Inline code wraps here: Storybook keeps it on one line, and a long snippet would run
    // out of the card. `li code` matches Storybook's selector, which would win a tie.
    <div
      className={cn(
        `min-w-0 rounded-md border border-t-4 border-primary-200 bg-white px-5 pb-1 pt-4
        [&_li_code]:whitespace-normal [&_li_code]:break-words`,
        borderClassName,
      )}
    >
      <h3
        className="sb-unstyled m-0 flex items-center gap-2 text-[1.0625rem] font-bold leading-normal
          text-primary-600"
        id={headingId}
      >
        <Icon
          className={cn('h-[1.125rem] w-[1.125rem] shrink-0', iconClassName)}
          strokeWidth={2.5}
        />
        {title}
      </h3>
      {children}
    </div>
  );
};

/**
 * The story file's stories, with space between them. Each story's heading uses the docs
 * pages' h3 style, under a small "Example" label. Tailwind can't see classes written in
 * MDX, so the styles live here.
 *
 * The first story in the file is left out: it's the playground, shown under "Try it".
 */
export const DocsExamples = () => (
  <div
    className={[
      // Space between stories. Each story is wrapped in a `.sb-anchor`.
      '[&_.sb-anchor+.sb-anchor]:mt-8 [&_.sb-anchor+.sb-anchor]:pt-4',
      // The "Example" label, before the heading rather than in it, so screen readers
      // don't announce it as part of the heading. The `/ ""` hides it from them.
      "[&_.sb-anchor]:before:mb-0.5 [&_.sb-anchor]:before:block [&_.sb-anchor]:before:font-mono [&_.sb-anchor]:before:text-[0.6875rem] [&_.sb-anchor]:before:font-medium [&_.sb-anchor]:before:uppercase [&_.sb-anchor]:before:tracking-[0.08em] [&_.sb-anchor]:before:text-gray-500 [&_.sb-anchor]:before:content-['Example'_/_'']",
      // The heading sits right under its label.
      '[&_.sb-anchor>h3]:mt-0',
    ].join(' ')}
  >
    {/* Our "Examples" heading replaces Storybook's. A string title, even an empty one, renders
        an <h2>; an element is rendered as it is, so an empty fragment renders nothing. */}
    <Stories includePrimary={false} title={<></>} />
  </div>
);

// Docgen info Storybook attaches to each component.
type Documented = ComponentType<never> & {
  displayName?: string;
  __docgenInfo?: { displayName?: string; description?: string };
};

const getName = (component: Documented) =>
  component.__docgenInfo?.displayName ?? component.displayName ?? 'Component';

const anchorId = (name: string) => `api-${name.toLowerCase()}`;

/** Removes JSDoc tags such as `@experimental`, which read as stray text in the docs. */
const getDescription = (component: Documented) =>
  (component.__docgenInfo?.description ?? '').replace(/^\s*@\w+\s*$/gm, '').trim();

// Removes Storybook's frame around the props table's rows (edge-cell borders, corner
// radius, shadow and outer margin), keeping the lines between rows, so the entry's box is
// the only frame. These need `!`: Storybook's table styles use doubled classes
// (`.css-x.css-x td`) and, for the corners, `tbody > tr:first-of-type > td:first-of-type`,
// which outrank a Tailwind class. Matching them without `!` would mean copying Storybook's
// selectors, which break if it changes its markup.
const flatTableClasses = [
  '[&_.docblock-argstable]:!m-0',
  '[&_.docblock-argstable_tbody]:![filter:none]',
  '[&_.docblock-argstable_td]:!rounded-none',
  '[&_.docblock-argstable_td:first-child]:!border-l-0',
  '[&_.docblock-argstable_td:last-child]:!border-r-0',
  '[&_.docblock-argstable_tr:last-child_td]:!border-b-0',
].join(' ');

/**
 * One component's entry: a box with a shaded header (a small "Component" label matching
 * the examples' "Example" label, the name in code font and its description) on top of
 * its props table.
 */
export const ApiEntry = ({ of }: { of: Documented }) => {
  const name = getName(of);
  const description = getDescription(of);

  return (
    <section
      aria-labelledby={anchorId(name)}
      className={`mt-8 overflow-hidden rounded-md border border-gray-200 ${flatTableClasses}`}
    >
      <div
        className="border-b border-gray-200 bg-gray-50 px-5 py-4 [&_p]:mb-0 [&_p]:mt-1.5
          [&_p]:text-sm [&_p]:text-gray-600"
      >
        <span
          aria-hidden="true"
          className="sb-unstyled mb-0.5 block font-mono text-[0.6875rem] font-medium uppercase
            tracking-[0.08em] text-gray-500"
        >
          Component
        </span>
        <h3
          className="sb-unstyled m-0 font-mono text-xl font-semibold text-gray-900"
          id={anchorId(name)}
        >
          {name}
        </h3>
        {description ? <Markdown>{description}</Markdown> : null}
      </div>
      <ArgTypes of={of} />
    </section>
  );
};

/**
 * The API reference for a component and its parts: links to each part, then an entry per
 * part with its description and props table.
 */
export const ApiReference = ({ components }: { components: Documented[] }) => (
  <>
    <nav aria-label="Components" className="flex flex-wrap gap-2">
      {components.map(component => {
        const name = getName(component);
        return (
          <a
            key={name}
            className="sb-unstyled rounded-full border border-gray-300 bg-white px-3 py-1 font-mono
              text-sm text-gray-800 no-underline hover:border-gray-500 hover:bg-gray-50"
            href={`#${anchorId(name)}`}
            onClick={event => scrollToElement(event, document.getElementById(anchorId(name)))}
          >
            {name}
          </a>
        );
      })}
    </nav>
    {components.map(component => (
      <ApiEntry key={getName(component)} of={component} />
    ))}
  </>
);
