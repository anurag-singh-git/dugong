import type { Meta, StoryObj } from '@storybook/react';
import { Faq } from './Faq';

const meta: Meta<typeof Faq> = {
  title: 'Content/Faq',
  component: Faq,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 720 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Faq>;

export const Default: Story = {
  args: {
    items: [
      {
        question: 'What is Dugong?',
        answer:
          'Dugong is an AI-native workflow automation platform. You describe a workflow in plain English and an AI agent runs it.',
        defaultOpen: true,
      },
      {
        question: 'Do I need to know how to code?',
        answer: 'No. If you can describe a process to a colleague in writing, you can build it in Dugong.',
      },
      {
        question: 'Is there a free plan?',
        answer: 'Yes. The Starter plan is free forever and includes 5 workflows and 500 runs per month.',
      },
    ],
  },
};
