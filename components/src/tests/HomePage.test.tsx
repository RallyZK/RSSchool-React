import React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import { render, screen } from '@testing-library/react';
import { catalog } from '../utils/catalog';

describe('HomePage test', () => {
  test('Home Page renders correctly', () => {
    render(<HomePage />);
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    expect(screen.getByText(/Live the life you deserve/i)).toBeInTheDocument();
    expect(screen.getAllByText(/details/i)).toHaveLength(catalog.length);
  });
});
