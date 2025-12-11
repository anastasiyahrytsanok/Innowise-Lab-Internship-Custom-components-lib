import React, { useEffect, useCallback, MouseEvent } from 'react';
import type { ModalProps } from './Modal.types';
import './Modal.scss';
import { createRootClassNameFromArray } from '../../utils';

export const Modal = ({ open, onClose, children, className = '', ...rest }: ModalProps) => {
  if (!open) {
    return null;
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const rootClassName = createRootClassNameFromArray(['lib-modal', className]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  return (
    <div className={rootClassName} onClick={handleBackdropClick}>
      <div className="lib-modal__content" aria-modal="true" {...rest}>
        {children}
      </div>
    </div>
  );
};
