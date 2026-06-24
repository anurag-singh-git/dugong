import type { Meta, StoryObj } from '@storybook/react';
import { StepCard } from './StepCard';

const meta: Meta<typeof StepCard> = {
  title: 'Cards/StepCard',
  component: StepCard,
  args: {
    num: '01',
    title: 'Describe it in plain English',
    children:
      "Write your trigger and steps the way you'd explain them to a colleague. Name any app. No special syntax.",
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

type Story = StoryObj<typeof StepCard>;

export const Default: Story = {};
