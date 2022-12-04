import { TestProvider } from './testProvider';
import { StoryContext, StoryFn } from '@storybook/csf';
import { ReactFramework } from '@storybook/react';

export const customStoryDecorator = (
  Story: StoryFn<ReactFramework>,
  context: StoryContext<ReactFramework>,
): JSX.Element => {
  return (
    <TestProvider>
      <Story {...context} />
    </TestProvider>
  );
};