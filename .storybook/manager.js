import { addons } from '@storybook/manager-api';
import patternTheme from './pattern-theme';

addons.setConfig({
  theme: patternTheme,
});