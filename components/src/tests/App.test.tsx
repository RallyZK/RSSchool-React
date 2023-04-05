import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App test', () => {
  test('App with HomePage renders correctly', async () => {
    render(<App />);
    const titles = screen.getAllByText(/home page/i);
    expect(titles[0]).toBeInTheDocument();
    expect(screen.getByText(/Star Wars universe characters/i)).toBeInTheDocument();
  });
});
