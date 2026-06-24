import type { Meta, StoryObj } from '@storybook/react';
import { PriceCard } from './PriceCard';

const meta: Meta<typeof PriceCard> = {
  title: 'Cards/PriceCard',
  component: PriceCard,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360, paddingTop: 16 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof PriceCard>;

export const Starter: Story = {
  args: {
    name: 'Starter',
    amount: '$0',
    period: '/mo',
    description: 'For individuals automating personal workflows and side projects.',
    features: ['5 active workflows', '500 agent runs per month', '20 core integrations'],
    ctaLabel: 'Get started free',
  },
};

export const Featured: Story = {
  args: {
    name: 'Pro',
    amount: '$39',
    period: '/mo',
    badge: 'Most popular',
    featured: true,
    description: 'For teams running real automated workflows across their full stack.',
    features: ['Unlimited workflows', '10,000 agent runs per month', 'All 200+ integrations'],
    ctaLabel: 'Start 14-day free trial →',
  },
};
