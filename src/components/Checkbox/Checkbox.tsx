import type { CheckboxProps } from './Checkbox.types';
import { createRootClassNameFromArray } from '../../utils';
import './Checkbox.scss';

export const Checkbox = ({
  label,
  error = false,
  required = false,
  className = '',
  disabled = false,
  id,
  ...rest
}: CheckboxProps) => {
  const rootClass = createRootClassNameFromArray([
    'lib-checkbox',
    error ? 'lib-checkbox--error' : '',
    disabled ? 'lib-checkbox--disabled' : '',
    className,
  ]);

  return (
    <div className={rootClass}>
      <label className="lib-checkbox__label" htmlFor={id}>
        <span className="lib-checkbox__control">
          <input
            id={id}
            type="checkbox"
            className="lib-checkbox__native"
            required={required}
            disabled={disabled}
            {...rest}
          />
          <span className="lib-checkbox__box"></span>
        </span>

        {label && (
          <span className="lib-checkbox__text" data-required={required ? 'true' : undefined}>
            {label}
          </span>
        )}
      </label>
    </div>
  );
};
