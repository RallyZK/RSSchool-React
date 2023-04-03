import React from 'react';
import Error404 from '../pages/Error404/Error404';
import { render, screen } from '@testing-library/react';

describe('Error404 test', () => {
  test('Error404 renders correctly', () => {
    render(<Error404 />);
    expect(screen.getByText(/ERROR 404/i)).toBeInTheDocument();
    expect(screen.getByText(/The page you are looking for can`t be found/i)).toBeInTheDocument();
  });
});
