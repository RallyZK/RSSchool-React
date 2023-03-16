import React from 'react';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Footer test', () => {
  it('Footer renders correctly', async () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
    expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByText(/2023/i)).toBeInTheDocument();
    expect(screen.getByText(/RS School/i)).toBeInTheDocument();
  });
});
