import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(
      <Button variant="contained" size="medium">
        <p>Button</p>
      </Button>,
    );

    expect(screen.getByRole('button', { name: /button/i })).toBeInTheDocument();
  });

  it('calls onClick on click', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(
      <Button onClick={handleClick}>
        <p>Button</p>
      </Button>,
    );

    await user.click(screen.getByRole('button', { name: /button/i }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('correct default props', () => {
    render(
      <Button>
        <p>Button</p>
      </Button>,
    );

    const button = screen.getByRole('button', { name: /button/i });

    expect(button).toHaveClass('ui-button');
    expect(button).toHaveClass('ui-button--contained');
    expect(button).toHaveClass('ui-button--medium');

    expect(button).not.toHaveClass('ui-button--disabled');
    expect(button).not.toBeDisabled();
  });

  it('correct variant prop', () => {
    render(
      <Button variant="outlined">
        <p>Button</p>
      </Button>,
    );

    const button = screen.getByRole('button', { name: /button/i });

    expect(button).toHaveClass('ui-button--outlined');
  });

  it('correct size prop', () => {
    render(
      <Button size="small">
        <p>Button</p>
      </Button>,
    );

    const button = screen.getByRole('button', { name: /button/i });

    expect(button).toHaveClass('ui-button--small');
  });

  it('correct disabled prop', () => {
    render(
      <Button disabled>
        <p>Button</p>
      </Button>,
    );

    const button = screen.getByRole('button', { name: /button/i });

    expect(button).toHaveClass('ui-button--disabled');
    expect(button).toBeDisabled();
  });

  it('applies custom className', () => {
    render(
      <Button className="my-custom-class">
        <p>Button</p>
      </Button>,
    );

    const button = screen.getByRole('button', { name: /button/i });

    expect(button).toHaveClass('ui-button');
    expect(button).toHaveClass('my-custom-class');
  });

  it('applies rest props', () => {
    render(
      <Button type="submit" aria-label="submit button">
        <p>Button</p>
      </Button>,
    );

    const button = screen.getByRole('button', { name: /button/i });
    
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('aria-label', 'submit button');
  });
});
