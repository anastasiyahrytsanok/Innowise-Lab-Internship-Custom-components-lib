import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from './Switch';

describe('Switch', () => {
  it('calls onChange on click', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Switch id="notifications" checked={false} onChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');

    await user.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
  it('correct disabled prop', () => {
    const { container } = render(<Switch id="id" checked={false} onChange={jest.fn()} disabled />);

    const root = container.querySelector('.lib-switch');
    const checkbox = screen.getByRole('checkbox');

    expect(root).toHaveClass('lib-switch--disabled');
    expect(checkbox).toBeDisabled();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Switch id="id" checked={false} onChange={jest.fn()} className="my-custom-switch" />,
    );

    const root = container.querySelector('.lib-switch');

    expect(root).toHaveClass('lib-switch');
    expect(root).toHaveClass('my-custom-switch');
  });

  it('sets id on input and htmlFor on label', () => {
    const { container } = render(<Switch id="by" checked={false} onChange={jest.fn()} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('id', 'by');
    const label = container.querySelector('label.lib-switch');
    expect(label).toHaveAttribute('for', 'by');
  });

  it('applies rest props', () => {
    render(<Switch id="mode" checked={false} onChange={jest.fn()} aria-label="dark mode switch" />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toHaveAttribute('aria-label', 'dark mode switch');
  });
});
