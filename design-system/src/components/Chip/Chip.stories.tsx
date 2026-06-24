import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Content/Chip',
  component: Chip,
  args: { children: 'Gmail' },
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {};
export const More: Story = { args: { variant: 'more', children: '+ 185 more' } };

export const Cloud: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, maxWidth: 540 }}>
      {['Gmail', 'Slack', 'Salesforce', 'Stripe', 'Notion', 'GitHub', 'Linear'].map((a) => (
        <Chip key={a}>{a}</Chip>
      ))}
      <Chip variant="more">+ 185 more</Chip>
    </div>
  ),
};
