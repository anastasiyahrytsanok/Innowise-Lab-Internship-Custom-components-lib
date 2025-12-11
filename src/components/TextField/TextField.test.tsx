import { render, screen } from '@testing-library/react';
import { TextField } from './TextField';

describe('TextField', () => {
  it('correct label', () => {
    render(<TextField id="username" label="Username" />);

    const input = screen.getByLabelText(/username/i);
    expect(input).toBeInTheDocument();
  });

  it('correct helperText prop', () => {
    render(<TextField id="username" label="Username" helperText="Enter your username" />);

    expect(screen.getByText(/enter your username/i)).toBeInTheDocument();
  });

  it('correct error prop', () => {
    const { container } = render(<TextField id="username" label="Username" error />);

    const root = container.querySelector('.lib-text-field');
    expect(root).toHaveClass('lib-text-field--error');
  });

  it('applies custom className', () => {
    const { container } = render(
      <TextField id="username" label="Username" className="my-custom-text-field" />,
    );

    const root = container.querySelector('.lib-text-field');
    expect(root).toHaveClass('lib-text-field');
    expect(root).toHaveClass('my-custom-text-field');
  });

  it('sets id on input and htmlFor on label', () => {
    const { container } = render(<TextField id="username-input" label="Username" />);

    const input = screen.getByLabelText(/username/i);
    expect(input).toHaveAttribute('id', 'username-input');

    const label = container.querySelector('.lib-text-field__label');
    expect(label).toHaveAttribute('for', 'username-input');
  });

  it('correct required prop', () => {
    const { container } = render(<TextField id="username" label="Username" required />);

    const input = screen.getByRole('textbox');
    expect(input).toBeRequired();

    const label = container.querySelector('.lib-text-field__label');
    expect(label).toHaveAttribute('data-required', 'true');
  });

  it('applies rest props', () => {
    render(<TextField id="email" type="email" placeholder="Enter email" />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('placeholder', 'Enter email');
  });
});
