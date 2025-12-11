import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { SELECT_TEXT } from '../../constants';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  render: (args) => (
    <Select {...args}>
      <option value="" disabled>
        {SELECT_TEXT.OPTION.TEXT.SELECT}
      </option>
      <option value={SELECT_TEXT.OPTION.VALUE[10]}>{SELECT_TEXT.OPTION.TEXT.TEN}</option>
      <option value={SELECT_TEXT.OPTION.VALUE[20]}>{SELECT_TEXT.OPTION.TEXT.TWENTY}</option>
      <option value={SELECT_TEXT.OPTION.VALUE[30]}>{SELECT_TEXT.OPTION.TEXT.THIRTY}</option>
    </Select>
  ),
  args: {
    label: SELECT_TEXT.LABEL.AGE,
  },
};

export const WithHelper: Story = {
  render: (args) => (
    <Select {...args}>
      <option value="" disabled>
        {SELECT_TEXT.OPTION.TEXT.SELECT}
      </option>
      <option value={SELECT_TEXT.OPTION.VALUE[10]}>{SELECT_TEXT.OPTION.TEXT.TEN}</option>
      <option value={SELECT_TEXT.OPTION.VALUE[20]}>{SELECT_TEXT.OPTION.TEXT.TWENTY}</option>
      <option value={SELECT_TEXT.OPTION.VALUE[30]}>{SELECT_TEXT.OPTION.TEXT.THIRTY}</option>
    </Select>
  ),
  args: {
    label: SELECT_TEXT.LABEL.AGE,
    helperText: SELECT_TEXT.HELPER_TEXT.PLEASE_SELECT,
  },
};

export const ErrorState: Story = {
  render: (args) => (
    <Select {...args}>
      <option value="" disabled>
        {SELECT_TEXT.OPTION.TEXT.SELECT}
      </option>
      <option value={SELECT_TEXT.OPTION.VALUE[10]}>{SELECT_TEXT.OPTION.TEXT.TEN}</option>
      <option value={SELECT_TEXT.OPTION.VALUE[20]}>{SELECT_TEXT.OPTION.TEXT.TWENTY}</option>
      <option value={SELECT_TEXT.OPTION.VALUE[30]}>{SELECT_TEXT.OPTION.TEXT.THIRTY}</option>
    </Select>
  ),
  args: {
    label: SELECT_TEXT.LABEL.AGE,
    helperText: SELECT_TEXT.HELPER_TEXT.REQUIRED,
    error: true,
  },
};

export const Required: Story = {
  render: (args) => (
    <Select {...args}>
      <option value="" disabled>
        {SELECT_TEXT.OPTION.TEXT.SELECT}
      </option>
      <option value={SELECT_TEXT.OPTION.VALUE[10]}>{SELECT_TEXT.OPTION.TEXT.TEN}</option>
      <option value={SELECT_TEXT.OPTION.VALUE[20]}>{SELECT_TEXT.OPTION.TEXT.TWENTY}</option>
      <option value={SELECT_TEXT.OPTION.VALUE[30]}>{SELECT_TEXT.OPTION.TEXT.THIRTY}</option>
    </Select>
  ),
  args: {
    label: SELECT_TEXT.LABEL.AGE,
    helperText: SELECT_TEXT.HELPER_TEXT.REQUIRED,
    required: true,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Select {...args}>
      <option value="" disabled>
        {SELECT_TEXT.OPTION.TEXT.SELECT}
      </option>
      <option value={SELECT_TEXT.OPTION.VALUE[10]}>{SELECT_TEXT.OPTION.TEXT.TEN}</option>
      <option value={SELECT_TEXT.OPTION.VALUE[20]}>{SELECT_TEXT.OPTION.TEXT.TWENTY}</option>
      <option value={SELECT_TEXT.OPTION.VALUE[30]}>{SELECT_TEXT.OPTION.TEXT.THIRTY}</option>
    </Select>
  ),
  args: {
    label: SELECT_TEXT.LABEL.AGE,
    helperText: SELECT_TEXT.HELPER_TEXT.REQUIRED,
    disabled: true,
  },
};

export const Multiple: Story = {
  render: (args) => (
    <Select {...args}>
      <option value="" disabled>
        {SELECT_TEXT.OPTION.TEXT.SELECT}
      </option>
      <option value={SELECT_TEXT.OPTION.VALUE[10]}>{SELECT_TEXT.OPTION.TEXT.TEN}</option>
      <option value={SELECT_TEXT.OPTION.VALUE[20]}>{SELECT_TEXT.OPTION.TEXT.TWENTY}</option>
      <option value={SELECT_TEXT.OPTION.VALUE[30]}>{SELECT_TEXT.OPTION.TEXT.THIRTY}</option>
      <option value={SELECT_TEXT.OPTION.VALUE[40]}>{SELECT_TEXT.OPTION.TEXT.FORTY}</option>
      <option value={SELECT_TEXT.OPTION.VALUE[50]}>{SELECT_TEXT.OPTION.TEXT.FIFTY}</option>
      <option value={SELECT_TEXT.OPTION.VALUE[60]}>{SELECT_TEXT.OPTION.TEXT.SIXTY}</option>
    </Select>
  ),
  args: {
    label: SELECT_TEXT.LABEL.AGE,
    helperText: SELECT_TEXT.HELPER_TEXT.REQUIRED,
    multiple: true,
  },
};
