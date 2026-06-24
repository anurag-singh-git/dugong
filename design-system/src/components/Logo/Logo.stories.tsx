import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Brand/Logo',
  component: Logo,
  args: { label: 'dugong', size: 26 },
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};
export const Large: Story = { args: { size: 40 } };
export const IconOnly: Story = { args: { label: '' } };
