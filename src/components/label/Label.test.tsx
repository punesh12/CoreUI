import { render, screen } from '@testing-library/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Label } from './Label';

describe('Label component', () => {
  test('renders text only', () => {
    render(<Label size='medium'>Medium Text</Label>);
    expect(screen.getByText('Medium Text')).toBeInTheDocument();
  });

  test('renders text with left icon', () => {
    render(
      <Label size='medium' iconLeft={<FaArrowLeft />}>
        Medium Text
      </Label>
    );
    expect(screen.getByText('Medium Text')).toBeInTheDocument();
    expect(screen.getByTestId('iconLeft')).toBeInTheDocument();
  });

  test('renders text with right icon', () => {
    render(
      <Label size='medium' iconRight={<FaArrowRight />}>
        Medium Text
      </Label>
    );
    expect(screen.getByText('Medium Text')).toBeInTheDocument();
    expect(screen.getByTestId('iconRight')).toBeInTheDocument();
  });

  test('renders text with both left and right icons', () => {
    render(
      <Label
        size='medium'
        iconLeft={<FaArrowLeft />}
        iconRight={<FaArrowRight />}
      >
        Medium Text
      </Label>
    );
    expect(screen.getByText('Medium Text')).toBeInTheDocument();
    expect(screen.getByTestId('iconLeft')).toBeInTheDocument();
    expect(screen.getByTestId('iconRight')).toBeInTheDocument();
  });

  test('applies correct font size based on size prop', () => {
    render(<Label size='large'>Large Text</Label>);
    expect(screen.getByText('Large Text')).toHaveStyle('font-size: 24px');
  });
});
