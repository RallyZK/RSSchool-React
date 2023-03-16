import React from 'react';
import HomePage from './HomePage';
import { render, screen } from '@testing-library/react';

describe('HomePage test', () => {
  it('Home Page renders correctly', async () => {
    render(<HomePage />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    expect(screen.getByText(/Live the life you deserve/i)).toBeInTheDocument();
  });
});
