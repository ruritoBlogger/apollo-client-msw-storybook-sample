import { ComponentType, ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { TestProvider } from './testProvider';

export const customRender = (component: ReactElement): RenderResult => {
  function Wrapper({ children }: { children: ReactElement }): JSX.Element {
    return <TestProvider>{children}</TestProvider>;
  }

  return {
    ...render(component, {
      wrapper: Wrapper as ComponentType,
    }),
  };
};