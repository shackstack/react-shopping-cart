import React from 'react';
import type { Preview } from '@storybook/react';
import GlobalStyle from '../src/styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      defaultViewport: 'Desktop',
      viewports: {
        iphone6: {
          name: 'iPhone 6',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        ipad: {
          name: 'iPad',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <RecoilRoot>
          <GlobalStyle />
          <Story />
        </RecoilRoot>
      </MemoryRouter>
    ),
  ],
};

export default preview;
