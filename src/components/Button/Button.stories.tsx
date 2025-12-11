import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import './Button.scss';
import { BUTTON_TEXT, BUTTON_PROPS_TEXT } from '../../constants';
import { ButtonVariant } from './Button.types';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => (
    <div className="button-grid">
      <Button variant={BUTTON_PROPS_TEXT.BUTTON.VARIANT.TEXT}>{BUTTON_TEXT.VARIANT.TEXT}</Button>
      <Button variant={BUTTON_PROPS_TEXT.BUTTON.VARIANT.CONTAINED}>
        {BUTTON_TEXT.VARIANT.CONTAINED}
      </Button>
      <Button variant={BUTTON_PROPS_TEXT.BUTTON.VARIANT.OUTLINED}>
        {BUTTON_TEXT.VARIANT.OUTLINED}
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="button-grid">
      {Object.values(BUTTON_PROPS_TEXT.BUTTON.VARIANT).map((variant: ButtonVariant) => (
        <Button
          key={`small-${variant}`}
          variant={variant}
          size={BUTTON_PROPS_TEXT.BUTTON.SIZE.SMALL}
        >
          {BUTTON_TEXT.SIZE.SMALL}
        </Button>
      ))}
      {Object.values(BUTTON_PROPS_TEXT.BUTTON.VARIANT).map((variant: ButtonVariant) => (
        <Button
          key={`medium-${variant}`}
          variant={variant}
          size={BUTTON_PROPS_TEXT.BUTTON.SIZE.MEDIUM}
        >
          {BUTTON_TEXT.SIZE.MEDIUM}
        </Button>
      ))}
      {Object.values(BUTTON_PROPS_TEXT.BUTTON.VARIANT).map((variant: ButtonVariant) => (
        <Button
          key={`large-${variant}`}
          variant={variant}
          size={BUTTON_PROPS_TEXT.BUTTON.SIZE.LARGE}
        >
          {BUTTON_TEXT.SIZE.LARGE}
        </Button>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="button-grid">
      {Object.values(BUTTON_PROPS_TEXT.BUTTON.VARIANT).map((variant: ButtonVariant) => (
        <Button key={`disabled-${variant}`} variant={variant} disabled>
          {BUTTON_TEXT.DISABLED}
        </Button>
      ))}
    </div>
  ),
};
