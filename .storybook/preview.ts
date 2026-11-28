import type { Preview } from '@storybook/react';
import '../src/styles/index.css';
import './preview.css';

// Open links to other sites (USWDS, GitHub issues, MDN) in a new tab, so reading one
// doesn't replace Storybook. Storybook's preview frame otherwise sends every link to the top
// window. A click handler covers every kind of link on a docs page: markdown, `<a>` in MDX,
// and links in component descriptions.
document.addEventListener(
  'click',
  event => {
    const link = (event.target as Element | null)?.closest?.('a[href]');
    if (!(link instanceof HTMLAnchorElement)) return;
    const url = new URL(link.href, window.location.href);
    if (!/^https?:$/.test(url.protocol) || url.origin === window.location.origin) return;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  },
  true,
);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      stories: {
        // A story tagged `docs-hidden` stays in the sidebar but is left out of its docs
        // page's Examples, e.g. a debugging aid. (`!autodocs` only hides a story while the
        // file has an autodocs page; the MDX docs pages don't use one.)
        filter: (story: { tags?: string[] }) => !story.tags?.includes('docs-hidden'),
      },
      // "On this page": Storybook's list of the page's sections, in a column to the right
      // that stays in view and highlights the section being read. It lists the h2s (Try it,
      // Guidance and so on), not every heading, after an "Overview" link back to the top.
      // Storybook hides it at 768px and narrower, where DocsOnThisPage shows the section
      // links under the description instead.
      toc: {
        headingSelector: 'h1, h2',
        title: 'On this page',
        unsafeTocbotOptions: {
          // A link scrolls to 64px above its heading: the page title sits 64px down, so
          // "Overview" goes right to the top. A section counts as the current one once its
          // heading is within 80px of the top, so it's current where a link leaves it.
          scrollSmoothOffset: -64,
          headingsOffset: 80,
          // The page title, the only h1, is listed as "Overview", at the same level as the
          // sections rather than as their parent.
          headingObjectCallback: (heading: { nodeName: string }) =>
            heading.nodeName === 'H1'
              ? { ...heading, textContent: 'Overview', headingLevel: 2 }
              : heading,
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Getting Started',
          ['Introduction', 'Styling', 'Design Tokens'],
          'Design Tokens',
          'Overlays & Feedback',
          'Actions & Navigation',
          'Data & Display',
          'Inputs & Forms',
          'Utilities',
          [
            'Functions',
            ['cn', 'tw', 'validateFormControlProps'],
            'Hooks',
            ['useAriaDisabled', 'useAriaLabelled', 'useFormGroupLayout'],
            'Z-Index',
            ['configureZIndex', 'getZIndex', 'getZIndexConfig', 'resetZIndexConfig'],
          ],
          'Examples',
          '*',
        ],
      },
    },
    layout: 'padded',
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'theme-uswds',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          { value: 'theme-uswds', title: 'USWDS' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const classList = document.documentElement.classList;
      classList.remove('light', 'dark', 'theme-uswds');
      classList.add(context.globals.theme);
      return Story();
    },
  ],
};

export default preview;
