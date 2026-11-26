import { ArgTypes, Markdown, Stories } from '@storybook/blocks';
import type { ComponentType, ReactNode } from 'react';

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
 * A top-level section of a docs page (Try it, Examples, API reference), set apart
 * from the sections around it by a rule, extra space and a larger title.
 */
export const DocsSection = ({ id, title, intro, className, children }: DocsSectionProps) => (
  <section
    aria-labelledby={id}
    className={`mt-20 border-t-2 border-gray-300 pt-10 ${className ?? ''}`}
  >
    {/* Storybook's own h2 style, so it sits under the page title, without its bottom
        border: the section's top rule already separates it. */}
    <h2 className="!mb-0 !mt-0 !border-b-0 !pb-0 !font-bold" id={id}>
      {title}
    </h2>
    {intro ? <p className="mb-8 mt-3 max-w-3xl text-base text-gray-600">{intro}</p> : null}
    {children}
  </section>
);

/**
 * The story file's stories, with extra space between them. Each story's heading is a
 * little larger and heavier than Storybook's, under a small "Example" label. Tailwind
 * can't see classes written in MDX, so the styles live here.
 *
 * The first story in the file is left out: it's the playground, shown under "Try it".
 */
export const DocsExamples = () => (
  <div
    className={[
      // Space between stories. Each story is wrapped in a `.sb-anchor`.
      '[&_.sb-anchor+.sb-anchor]:mt-12 [&_.sb-anchor+.sb-anchor]:pt-10',
      // The "Example" label, before the heading rather than in it, so screen readers
      // don't announce it as part of the heading. The `/ ""` hides it from them.
      "[&_.sb-anchor]:before:mb-0.5 [&_.sb-anchor]:before:block [&_.sb-anchor]:before:font-mono [&_.sb-anchor]:before:text-[11px] [&_.sb-anchor]:before:font-medium [&_.sb-anchor]:before:uppercase [&_.sb-anchor]:before:tracking-[0.08em] [&_.sb-anchor]:before:text-gray-500 [&_.sb-anchor]:before:content-['Example'_/_'']",
      // The heading.
      '[&_.sb-anchor>h3]:!mt-0 [&_.sb-anchor>h3]:!text-[22px] [&_.sb-anchor>h3]:!font-extrabold [&_.sb-anchor>h3]:!tracking-[-0.01em] [&_.sb-anchor>h3]:!text-gray-900',
      // `h3 > a` is Storybook's anchor-link icon; the margin centers it on the heading.
      '[&_.sb-anchor_h3>a]:mt-3',
    ].join(' ')}
  >
    <Stories includePrimary={false} title="" />
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
// the only frame.
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
        className="border-b border-gray-200 bg-gray-50 px-5 py-4 [&_p]:!mb-0 [&_p]:!mt-1.5
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
