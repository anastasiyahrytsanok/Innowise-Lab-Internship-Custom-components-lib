import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);

    return <Switch {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
  },
};

export const Checked: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(true);

    return <Switch {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
  },
};

export const Disabled: Story = {
  render: (args) => {
    return (
      <div className="switch-grid">
        <Switch {...args} disabled />
        <Switch {...args} disabled checked />
      </div>
    );
  },
};
