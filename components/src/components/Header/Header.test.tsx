import React from 'react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Header test', () => {
  it('Header renders correctly', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
  });
});
