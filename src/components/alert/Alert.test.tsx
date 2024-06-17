import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Alert from './Alert';
import { RootState } from '../../redux/store';

const mockStore = configureStore([]);

const renderWithRedux = (
  component: React.ReactNode,
  { initialState, store = mockStore(initialState) } = {}
) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe('Alert Component', () => {
  let initialState: Partial<RootState>;

  beforeEach(() => {
    initialState = {
      theme: { isDarkMode: false },
    };
  });

  test('renders correctly with given props', () => {
    renderWithRedux(
      <Alert
        variant='info'
        title='Info Title'
        content='This is an info alert.'
      />,
      { initialState }
    );
    expect(screen.getByText('Info Title')).toBeInTheDocument();
    expect(screen.getByText('This is an info alert.')).toBeInTheDocument();
  });

  test('renders with close button by default', () => {
    renderWithRedux(<Alert variant='info' title='Info Title' />, {
      initialState,
    });
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('does not render close button if hideCloseButton is true', () => {
    renderWithRedux(
      <Alert variant='info' title='Info Title' hideCloseButton />,
      { initialState }
    );
    expect(screen.queryByRole('button')).toBeNull();
  });

  test('calls onClose callback when close button is clicked', () => {
    const onClose = jest.fn();
    renderWithRedux(
      <Alert variant='info' title='Info Title' onClose={onClose} />,
      { initialState }
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onClose).toHaveBeenCalled();
  });

  test('disappears when close button is clicked', () => {
    renderWithRedux(<Alert variant='info' title='Info Title' />, {
      initialState,
    });
    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByText('Info Title')).toBeNull();
  });

  test('renders with correct variant styles', () => {
    renderWithRedux(<Alert variant='success' title='Success Title' />, {
      initialState,
    });
    expect(screen.getByText('Success Title')).toBeInTheDocument();
    // Add more specific style checks as needed
  });

  test('renders with dark theme when isDarkMode is true', () => {
    initialState.theme.isDarkMode = true;
    renderWithRedux(<Alert variant='info' title='Info Title' />, {
      initialState,
    });
    // Add checks for dark theme styles
  });

  test('renders correctly with custom width', () => {
    renderWithRedux(<Alert variant='info' title='Info Title' width='500px' />, {
      initialState,
    });
    expect(screen.getByText('Info Title').parentElement).toHaveStyle(
      'width: 500px'
    );
  });
});
