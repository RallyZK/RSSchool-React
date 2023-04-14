import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import HomePage from '../pages/HomePage/HomePage';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

describe('HomePage test', () => {
  test('Home Page renders correctly', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/Star Wars universe characters/i)).toBeInTheDocument();
  });

  test('Search characters works correctly', async () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    const inputElement = screen.getByRole<HTMLInputElement>('textbox');
    userEvent.type(inputElement, '{enter}');
    await waitFor(() => screen.findByText('test name'));
    expect(screen.getByText('test name')).toBeInTheDocument();
  });
});
