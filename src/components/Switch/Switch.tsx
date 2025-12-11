import type { SwitchProps } from './Switch.types';
import './Switch.scss';
import { createRootClassNameFromArray } from '../../utils';

export const Switch = ({
  checked,
  onChange,
  disabled = false,
  className = '',
  id,
  ...rest
}: SwitchProps) => {
  const rootClassName = createRootClassNameFromArray([
    'lib-switch',
    disabled ? 'lib-switch--disabled' : '',
    className,
  ]);

  return (
    <label className={rootClassName} htmlFor={id}>
      <span className="lib-switch__root">
        <input
          id={id}
          type="checkbox"
          className="lib-switch__native"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
        <span className="lib-switch__track">
          <span className="lib-switch__thumb" />
        </span>
      </span>
    </label>
  );
};
