import { initialize, mswDecorator } from 'msw-storybook-addon';
import { customStoryDecorator } from '../src/utils/customStoryDecorator';

initialize();

export const decorators = [mswDecorator, customStoryDecorator];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
