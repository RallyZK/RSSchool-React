import React from 'react';
import Header from '../components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Header test', () => {
  test('Header renders correctly', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
  });
});
