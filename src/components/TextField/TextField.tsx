import React from 'react';
import type { TextFieldProps } from './TextField.types';
import './TextField.scss';
import { createRootClassNameFromArray } from '../../utils';

export const TextField = ({
  label,
  helperText,
  error = false,
  className = '',
  id,
  required = false,
  ...rest
}: TextFieldProps) => {
  const rootClassName = createRootClassNameFromArray([
    'lib-text-field',
    error ? 'lib-text-field--error' : '',
    className,
  ]);

  return (
    <div className={rootClassName}>
      <div className="lib-text-field__wrapper">
        <input id={id} className="lib-text-field__input" required={required} {...rest} />

        {label && (
          <label
            className="lib-text-field__label"
            htmlFor={id}
            data-required={required ? true : undefined}
          >
            {label}
          </label>
        )}
      </div>

      {helperText && <p className="lib-text-field__helper-text">{helperText}</p>}
    </div>
  );
};
