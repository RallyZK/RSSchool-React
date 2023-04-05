import React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import { render, screen } from '@testing-library/react';

describe('HomePage test', () => {
  test('Home Page renders correctly', () => {
    render(<HomePage />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/Star Wars universe characters/i)).toBeInTheDocument();
  });
});
