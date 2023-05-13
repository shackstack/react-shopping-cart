import type { Meta, StoryObj } from '@storybook/react';
import CartItem from './CartItem';

const meta: Meta<typeof CartItem> = {
  title: 'CartItem',
  component: CartItem,
};

export default meta;

type Story = StoryObj<typeof CartItem>;

export const Default: Story = {
  args: {},
};
