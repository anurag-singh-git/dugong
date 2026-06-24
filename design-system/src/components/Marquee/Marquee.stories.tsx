import type { Meta, StoryObj } from '@storybook/react';
import { Marquee } from './Marquee';

const meta: Meta<typeof Marquee> = {
  title: 'Content/Marquee',
  component: Marquee,
};
export default meta;

type Story = StoryObj<typeof Marquee>;

export const Default: Story = {
  args: {
    label: 'Trusted by teams at',
    items: ['Vercel', 'Notion', 'Linear', 'Ramp', 'Resend'],
  },
};
