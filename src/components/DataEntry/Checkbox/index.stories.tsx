import { Meta, StoryObj } from '@storybook/react';
import { CheckBox } from '.';

const meta: Meta<typeof CheckBox> = {
<<<<<<< HEAD
  title: 'Data Entry/CheckBox',
=======
  title: 'Data Entry/Checkbox',
>>>>>>> e5f5b92b1e022c497b37fcd2249e6aa7bbb7071f
  component: CheckBox,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    label: 'Label',
    checked: false,
  },
  argTypes: {
    variant: {
      options: ['default', 'success', 'error'],
      table: {
        defaultValue: { summary: 'default' },
        type: {
          summary: 'default | success | error',
        },
      },
      control: { type: 'select' },
    },
    label: {
      table: {
        defaultValue: { summary: 'Label' },
        type: {
          summary: 'string',
        },
      },
    },
    onChange: {
      type: 'function',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};
