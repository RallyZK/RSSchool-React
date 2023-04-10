import React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('HomePage test', () => {
  test('Home Page renders correctly', () => {
    render(<HomePage />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/Star Wars universe characters/i)).toBeInTheDocument();
  });

  test('Search characters works correctly', async () => {
    render(<HomePage />);
    const inputElement = screen.getByRole<HTMLInputElement>('textbox');
    userEvent.type(inputElement, '{enter}');
    await waitFor(() => screen.findByText('test name'));
    expect(screen.getByText('test name')).toBeInTheDocument();
  });
});
