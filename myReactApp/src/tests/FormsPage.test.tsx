import React from 'react';
import FormsPage from '../pages/FormsPage/FormsPage';
import { render, screen } from '@testing-library/react';

describe('FormsPage test', () => {
  test('FormsPage renders correctly', () => {
    render(<FormsPage />);
    const titles = screen.getAllByText(/forms/i);
    expect(titles[0]).toBeInTheDocument();
    expect(titles[1]).toBeInTheDocument();
  });
});
