import { ArgTypes, HeaderMdx, Markdown, Stories } from '@storybook/blocks';
import { createContext, useContext } from 'react';
import type { ComponentType, ReactNode } from 'react';

// The id of the DocsSection a heading is in, used to prefix the heading's id.
const SectionIdContext = createContext<string | undefined>(undefined);

interface DocsSectionProps {
  /** The anchor id, also used to label the section. */
  id: string;
  title: string;
  /** A sentence under the title saying what the section is for. */
  intro?: ReactNode;
  className?: string;
  children: ReactNode;
}

/**
 * A top-level section of a docs page (Guidance, Try it, Examples, Accessibility, API
 * reference). Its heading uses the docs pages' h2 style from `.storybook/preview.css`,
 * whose hairline and space above set the section apart, the same as a markdown `##`.
 */
export const DocsSection = ({ id, title, intro, className, children }: DocsSectionProps) => (
  // The intro's spacing is set from the section: Storybook's paragraph style outranks a
  // class on the paragraph itself.
  <section aria-labelledby={id} className={`[&>h2+p]:mb-8 [&>h2+p]:mt-2.5 ${className ?? ''}`}>
    <h2 id={id}>{title}</h2>
    {intro ? <p className="max-w-3xl">{intro}</p> : null}
    <SectionIdContext.Provider value={id}>{children}</SectionIdContext.Provider>
  </section>
);

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
export const DocsSubheading = ({ id, children }: DocsSubheadingProps) => {
  const sectionId = useContext(SectionIdContext);
  return (
    <HeaderMdx as="h3" id={sectionId ? `${sectionId}-${id}` : id}>
      {children}
    </HeaderMdx>
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
      "[&_.sb-anchor]:before:mb-0.5 [&_.sb-anchor]:before:block [&_.sb-anchor]:before:font-mono [&_.sb-anchor]:before:text-[11px] [&_.sb-anchor]:before:font-medium [&_.sb-anchor]:before:uppercase [&_.sb-anchor]:before:tracking-[0.08em] [&_.sb-anchor]:before:text-gray-500 [&_.sb-anchor]:before:content-['Example'_/_'']",
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
          className="sb-unstyled mb-0.5 block font-mono text-[11px] font-medium uppercase
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
            onClick={event => {
              event.preventDefault();
              document.getElementById(anchorId(name))?.scrollIntoView({ behavior: 'smooth' });
            }}
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
