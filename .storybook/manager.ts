import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import './manager.css';

const theme = create({
  base: 'light',
  brandTitle: 'Vero',
  brandUrl: 'https://github.com/capitaltg/vero',
  brandTarget: '_blank',
});

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
  },
});
