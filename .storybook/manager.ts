import { addons } from '@storybook/manager-api';
import { createElement } from 'react';
import { create } from '@storybook/theming/create';
import './manager.css';

/**
 * Sidebar label with a small "Experimental" badge for components whose stories carry the
 * `experimental` tag (`tags: ['autodocs', 'experimental']` in the story meta).
 */
const renderLabel = (item: { name: string; type: string; tags?: string[] }) => {
  if (item.type !== 'component' || !item.tags?.includes('experimental')) return item.name;
  return createElement(
    'span',
    { style: { display: 'inline-flex', alignItems: 'center', gap: 8 } },
    item.name,
    createElement(
      'span',
      {
        style: {
          padding: '2px 6px',
          borderRadius: 4,
          // Vero's info palette: info-100 background, info-700 text, info-600 outline.
          background: '#e7f6f8',
          boxShadow: 'inset 0 0 0 1px rgba(0, 129, 161, 0.25)',
          color: '#00687d',
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: '0.06em',
          lineHeight: '12px',
          textTransform: 'uppercase',
        },
      },
      'Experimental',
    ),
  );
};

const theme = create({
  base: 'light',
  brandTitle: 'Vero',
  brandUrl: 'https://github.com/capitaltg/vero',
  brandTarget: '_blank',
});

addons.setConfig({
  theme,
  initialActive: 'introduction--welcome',
  sidebar: {
    showRoots: true,
    renderLabel,
  },
});
