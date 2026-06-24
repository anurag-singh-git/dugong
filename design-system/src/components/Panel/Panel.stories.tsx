import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from './Panel';

const meta: Meta<typeof Panel> = {
  title: 'Surfaces/Panel',
  component: Panel,
  args: { title: 'Your workflow description', tag: 'plain english.txt' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 460 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Panel>;

export const Default: Story = {
  args: { children: <p style={{ fontSize: 14.5 }}>A deal is marked “Closed Won” in Salesforce.</p> },
};

export const Live: Story = {
  args: {
    title: 'Agent executing now',
    tag: 'runtime · live',
    liveDot: 0,
    children: <p style={{ fontSize: 14.5 }}>opportunity.stage = "Closed Won"</p>,
  },
};
