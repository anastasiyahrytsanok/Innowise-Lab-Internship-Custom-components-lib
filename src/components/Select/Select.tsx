import type { SelectProps } from './Select.types';
import './Select.scss';
import { createRootClassNameFromArray } from '../../utils';

export const Select = ({
  label,
  helperText,
  error = false,
  className = '',
  id,
  children,
  required,
  multiple = false,
  ...rest
}: SelectProps) => {
  const rootClassName = createRootClassNameFromArray(['lib-select', error ? 'lib-select--error' : '', className]);

  return (
    <div className={rootClassName}>
      <div className="lib-select__wrapper">
        <select
          id={id}
          className="lib-select__native"
          required={required}
          multiple={multiple}
          {...rest}
        >
          {children}
        </select>

        {label && (
          <label
            className="lib-select__label"
            htmlFor={id}
            data-required={required ? 'true' : undefined}
          >
            {label}
          </label>
        )}

        {!multiple && (
          <span className="lib-select__arrow" aria-hidden="true">
            ▾
          </span>
        )}
      </div>

      {helperText && <p className="lib-select__helper-text">{helperText}</p>}
    </div>
  );
};
