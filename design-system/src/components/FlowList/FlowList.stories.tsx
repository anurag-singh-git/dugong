import type { Meta, StoryObj } from '@storybook/react';
import { FlowList } from './FlowList';

const meta: Meta<typeof FlowList> = {
  title: 'Content/FlowList',
  component: FlowList,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 420 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof FlowList>;

export const Default: Story = {
  args: {
    rows: [
      { icon: '📨', title: 'Form submitted', desc: 'Typeform, HubSpot, or any webhook' },
      {
        icon: '🔍',
        title: 'Enrich with Clearbit',
        desc: 'Company size, industry, tech stack',
        pill: { label: 'Tool call', tone: 'call' },
      },
      {
        icon: '🧠',
        title: 'Agent scores and routes',
        desc: 'AE for high-fit, nurture for low',
        pill: { label: 'AI reasons', tone: 'reason' },
      },
    ],
  },
};
