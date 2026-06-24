import type { Preview } from '@storybook/react';
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dugong',
      values: [
        { name: 'dugong', value: '#f6f6f1' },
        { name: 'white', value: '#ffffff' },
      ],
    },
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
  },
};

export default preview;
