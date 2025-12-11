import type { ButtonProps } from './Button.types';
import './Button.scss';
import { BUTTON_PROPS_TEXT } from '../../constants';
import { createRootClassNameFromArray } from '../../utils';

export const Button = ({
  children,
  variant = BUTTON_PROPS_TEXT.BUTTON.VARIANT.CONTAINED,
  size = BUTTON_PROPS_TEXT.BUTTON.SIZE.MEDIUM,
  disabled = false,
  className = '',
  ...rest
}: ButtonProps) => {
  const rootClass = createRootClassNameFromArray([
    'lib-button',
    `lib-button--${variant}`,
    `lib-button--${size}`,
    disabled ? 'lib-button--disabled' : '',
    className,
  ]);

  return (
    <button className={rootClass} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};
