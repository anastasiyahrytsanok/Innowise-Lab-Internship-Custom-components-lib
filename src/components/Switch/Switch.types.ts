import { ChangeEvent, InputHTMLAttributes } from 'react';

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'onChange'> {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
