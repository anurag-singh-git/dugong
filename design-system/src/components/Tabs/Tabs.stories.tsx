import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Sales ops', content: <p>Qualify and route every inbound lead automatically.</p> },
      { label: 'Customer success', content: <p>Full client onboarding the moment a deal closes.</p> },
      { label: 'Marketing', content: <p>Publish once — distributed everywhere, per platform.</p> },
      { label: 'Engineering', content: <p>Critical issue raised — team paged in seconds.</p> },
    ],
  },
};
