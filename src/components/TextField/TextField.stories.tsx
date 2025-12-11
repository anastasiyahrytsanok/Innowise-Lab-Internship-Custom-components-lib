import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import { INPUT_TEXT } from '../../constants';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Basic: Story = {
  args: {
    label: INPUT_TEXT.LABEL.NAME,
    placeholder: INPUT_TEXT.PLACEHOLDER.NAME,
  },
};

export const WithHelper: Story = {
  args: {
    label: INPUT_TEXT.LABEL.EMAIL,
    placeholder: INPUT_TEXT.PLACEHOLDER.EMAIL,
    helperText: INPUT_TEXT.HELPER_TEXT.EMAIL,
  },
};

export const ErrorState: Story = {
  args: {
    label: INPUT_TEXT.LABEL.EMAIL,
    placeholder: INPUT_TEXT.PLACEHOLDER.EMAIL,
    helperText: INPUT_TEXT.HELPER_TEXT.EMAIL_ERROR,
    error: true,
  },
};

export const Password: Story = {
  args: {
    label: INPUT_TEXT.LABEL.PASSWORD,
    type: 'password',
    placeholder: INPUT_TEXT.PLACEHOLDER.PASSWORD,
  },
};

export const Required: Story = {
  args: {
    label: INPUT_TEXT.LABEL.NAME,
    placeholder: INPUT_TEXT.PLACEHOLDER.NAME,
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: INPUT_TEXT.LABEL.NAME,
    placeholder: INPUT_TEXT.PLACEHOLDER.NAME,
    disabled: true,
  },
};
