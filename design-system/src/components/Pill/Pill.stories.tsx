import type { Meta, StoryObj } from '@storybook/react';
import { Pill } from './Pill';

const meta: Meta<typeof Pill> = {
  title: 'Content/Pill',
  component: Pill,
  args: { children: 'Tool call', tone: 'call' },
  argTypes: { tone: { control: 'inline-radio', options: ['call', 'reason', 'read'] } },
};
export default meta;

type Story = StoryObj<typeof Pill>;

export const Call: Story = {};
export const Reason: Story = { args: { tone: 'reason', children: 'AI reasons' } };
export const Read: Story = { args: { tone: 'read', children: 'AI reads' } };
