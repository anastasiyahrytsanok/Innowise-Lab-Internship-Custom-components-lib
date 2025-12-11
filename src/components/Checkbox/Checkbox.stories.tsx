import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { CHECKBOX_TEXT } from '../../constants';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  args: {
    label: CHECKBOX_TEXT.LABEL.LABEL,
  },
};

export const Checked: Story = {
  args: {
    label: CHECKBOX_TEXT.LABEL.CHECKED,
    defaultChecked: true,
  },
};

export const Required: Story = {
  args: {
    label: CHECKBOX_TEXT.LABEL.REQUIRED,
    required: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: CHECKBOX_TEXT.LABEL.ACCEPT_TERMS,
    error: true,
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="checkbox-grid">
      <Checkbox disabled label={CHECKBOX_TEXT.LABEL.LABEL} />
      <Checkbox disabled label={CHECKBOX_TEXT.LABEL.CHECKED} defaultChecked />
    </div>
  ),
};

export const Controlled: Story = {
  args: {
    label: CHECKBOX_TEXT.LABEL.CONTROLLED_CHECKBOX,
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);

    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />
    );
  },
};
