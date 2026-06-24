import type { Meta, StoryObj } from '@storybook/react';
import { SectionHead } from './SectionHead';

const meta: Meta<typeof SectionHead> = {
  title: 'Content/SectionHead',
  component: SectionHead,
};
export default meta;

type Story = StoryObj<typeof SectionHead>;

export const Default: Story = {
  args: {
    eyebrow: 'How it works',
    headline: (
      <>
        No builder. <em>Just language.</em>
      </>
    ),
    sub: 'Traditional automation tools make you draw a diagram. Dugong just reads what you write and does the work.',
  },
};

export const Centered: Story = {
  args: {
    center: true,
    eyebrow: 'Pricing',
    headline: (
      <>
        Simple pricing. <em>Free to start.</em>
      </>
    ),
    sub: 'No credit card required. Upgrade when your workflows grow.',
  },
};
