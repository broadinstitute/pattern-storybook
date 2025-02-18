/** @type { import('@storybook/vue3').Preview } */

import darkTheme from './dark-theme';
import lightTheme from './light-theme';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: darkTheme,
      light: lightTheme
    }
  },

  tags: ["autodocs"]
};

export default preview;
