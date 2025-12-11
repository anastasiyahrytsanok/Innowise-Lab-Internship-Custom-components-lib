import { useEffect, MouseEvent } from 'react';
import type { ModalProps } from './Modal.types';
import './Modal.scss';
import { createRootClassNameFromArray } from '../../utils';

export const Modal = ({ open, onClose, children, className = '', ...rest }: ModalProps) => {
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const rootClassName = createRootClassNameFromArray(['lib-modal', className]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className={rootClassName} onClick={handleBackdropClick}>
      <div className="lib-modal__content" aria-modal="true" {...rest}>
        {children}
      </div>
    </div>
  );
};
