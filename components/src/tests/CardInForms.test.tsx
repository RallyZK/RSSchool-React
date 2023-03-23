import React from 'react';
import CardInForms from '../components/CardInForms';
import { render, screen } from '@testing-library/react';

describe('CardInForms test', () => {
  test('CardInForms renders correctly', () => {
    const testInfo = {
      name: 'test name',
      date: '01-01-2023',
      purpose: 'test purpose',
      realEstate: ['test1', 'test2'],
      transfer: 'yes',
      file: 'url',
    };
    render(<CardInForms card={testInfo} />);
    expect(screen.getByRole('heading', { name: /test name/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /test name/i })).toBeInTheDocument();
    expect(screen.getByText(/test name/i)).toBeInTheDocument();
    expect(screen.getByText(/test purpose/i)).toBeInTheDocument();
    expect(screen.getByText(/test1/i)).toBeInTheDocument();
    expect(screen.getByText(/test2/i)).toBeInTheDocument();
    expect(screen.getByText(/yes/i)).toBeInTheDocument();
  });
});
