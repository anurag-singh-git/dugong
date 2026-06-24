import type { Meta, StoryObj } from '@storybook/react';
import { FeatureCard } from './FeatureCard';

const meta: Meta<typeof FeatureCard> = {
  title: 'Cards/FeatureCard',
  component: FeatureCard,
  args: {
    icon: '⌨️',
    title: 'Language is the interface',
    children:
      'Your description is the workflow. No canvas, no blocks, no config panels. The agent reads what you wrote.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof FeatureCard>;

export const Default: Story = {};
