import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card test', () => {
  test('Card renders correctly', async () => {
    const testInfo = {
      id: 1,
      title: 'title',
      price: 2,
      location: 'location',
      bedroomsCount: 3,
      bathroomsCount: 4,
      square: 5,
      url: 'url',
      picUrl: 'picUrl',
    };
    render(<Card card={testInfo} />);
    expect(screen.getByAltText('title')).toBeInTheDocument();
    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
    expect(screen.getByText(/location/i)).toBeInTheDocument();
    expect(screen.getByText(/3/i)).toBeInTheDocument();
    expect(screen.getByText(/4/i)).toBeInTheDocument();
    expect(screen.getByText(/5/i)).toBeInTheDocument();
    expect(await screen.findByRole('link', { name: /details/i })).toBeInTheDocument();
  });
});
