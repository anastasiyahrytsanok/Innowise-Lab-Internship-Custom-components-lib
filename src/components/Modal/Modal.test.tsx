import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';

describe('Modal', () => {
  it('no render when open = false', () => {
    const { container } = render(
      <Modal open={false} onClose={jest.fn()}>
        <div>Content</div>
      </Modal>,
    );

    expect(container.firstChild).toBeNull();
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('renders children', () => {
    render(
      <Modal open onClose={jest.fn()}>
        <div>Modal content</div>
      </Modal>,
    );

    expect(screen.getByText(/modal content/i)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Modal open onClose={jest.fn()} className="custom-modal">
        <div>Content</div>
      </Modal>,
    );

    const root = container.querySelector('.lib-modal');
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass('lib-modal');
    expect(root).toHaveClass('custom-modal');
  });

  it('passes rest props', () => {
    const { container } = render(
      <Modal open onClose={jest.fn()} id="modal-content" data-testid="modal-content">
        <div>Content</div>
      </Modal>,
    );

    const content = container.querySelector('.lib-modal__content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveAttribute('id', 'modal-content');
    expect(content).toHaveAttribute('data-testid', 'modal-content');
  });

  it('calls onClose on Escape', async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();

    render(
      <Modal open onClose={handleClose}>
        <div>Content</div>
      </Modal>,
    );

    await user.keyboard('{Escape}');

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when clicking outside the content', async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();

    const { container } = render(
      <Modal open onClose={handleClose}>
        <div>Content</div>
      </Modal>,
    );

    const backdrop = container.querySelector('.lib-modal');

    expect(backdrop).toBeInTheDocument();

    if (!backdrop) {
      throw new Error('Backdrop not found');
    }

    await user.click(backdrop);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
