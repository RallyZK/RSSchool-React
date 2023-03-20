import React from 'react';
import AboutUs from '../pages/AboutUs';
import { render, screen } from '@testing-library/react';

describe('AboutUs test', () => {
  test('AboutUs renders correctly', () => {
    render(<AboutUs />);
    const titles = screen.getAllByText(/About Us/i);
    expect(titles[0]).toBeInTheDocument();
    expect(titles[1]).toBeInTheDocument();
  });
});
