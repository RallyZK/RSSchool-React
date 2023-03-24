import React from 'react';
import { render, screen } from '@testing-library/react';
import { catalog } from '../utils/catalog';
import App from '../App';

describe('App test', () => {
  test('App with HomePage renders correctly', async () => {
    render(<App />);
    const titles = screen.getAllByText(/home page/i);
    expect(titles[0]).toBeInTheDocument();
    expect(screen.getByText(/Live the life you deserve/i)).toBeInTheDocument();
    expect(screen.getAllByText(/details/i)).toHaveLength(catalog.length);
  });
});
