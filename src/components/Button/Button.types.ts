import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'text' | 'contained' | 'outlined';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}
