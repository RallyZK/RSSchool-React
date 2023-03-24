import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';

describe('Card test', () => {
  test('Card renders correctly', async () => {
    const testInfo = {
      id: 1,
      title: 'test title',
      price: 2,
      location: 'test location',
      bedroomsCount: 3,
      bathroomsCount: 4,
      square: 5,
      url: 'test url',
      picUrl: 'test picUrl',
    };
    render(<Card card={testInfo} />);
    expect(screen.getByAltText('test title')).toBeInTheDocument();
    expect(screen.getByText(/test title/i)).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
    expect(screen.getByText(/test location/i)).toBeInTheDocument();
    expect(screen.getByText(/3/i)).toBeInTheDocument();
    expect(screen.getByText(/4/i)).toBeInTheDocument();
    expect(screen.getByText(/5/i)).toBeInTheDocument();
    expect(await screen.findByRole('link', { name: /details/i })).toBeInTheDocument();
  });
});
