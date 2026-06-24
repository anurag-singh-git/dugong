import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Controls/Button',
  component: Button,
  args: { children: 'Start for free →', variant: 'primary', size: 'md' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'ghost', 'dark'] },
    size: { control: 'inline-radio', options: ['md', 'lg'] },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Ghost: Story = { args: { variant: 'ghost', children: '▶ See how it works' } };
export const Dark: Story = { args: { variant: 'dark', children: 'Get started free →' } };
export const Large: Story = { args: { size: 'lg' } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Start free →</Button>
      <Button variant="ghost">See how it works</Button>
      <Button variant="dark">Get started →</Button>
      <Button variant="primary" size="lg">
        Start for free →
      </Button>
    </div>
  ),
};
