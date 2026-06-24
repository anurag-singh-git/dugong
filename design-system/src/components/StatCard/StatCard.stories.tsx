import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Cards/StatCard',
  component: StatCard,
  args: { value: '94%', label: 'Steps executed correctly first run' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 260 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof StatCard>;

export const Default: Story = {};
export const Grid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18, maxWidth: 540 }}>
      <StatCard value="94%" label="Steps executed correctly first run" />
      <StatCard value="12×" label="Faster than building manually" />
      <StatCard value="3.2M" label="Agent-powered runs per month" />
      <StatCard value="67%" label="Fewer failures vs rule-based tools" />
    </div>
  ),
};
