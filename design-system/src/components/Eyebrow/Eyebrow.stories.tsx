import type { Meta, StoryObj } from '@storybook/react';
import { Eyebrow } from './Eyebrow';

const meta: Meta<typeof Eyebrow> = {
  title: 'Content/Eyebrow',
  component: Eyebrow,
  args: { children: 'How it works' },
};
export default meta;

type Story = StoryObj<typeof Eyebrow>;

export const Default: Story = {};
export const NoDot: Story = { args: { noDot: true, children: '200+ integrations' } };
