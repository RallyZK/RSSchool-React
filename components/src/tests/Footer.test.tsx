import React from 'react';
import Footer from '../components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Footer test', () => {
  test('Footer renders correctly', () => {
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
    expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /RS School/i })).toBeInTheDocument();
  });
});
