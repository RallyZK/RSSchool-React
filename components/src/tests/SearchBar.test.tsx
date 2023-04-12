import React from 'react';
import '@testing-library/jest-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('SearchBar test', () => {
  test('SearchBar renders and works correctly', () => {
    render(<SearchBar findCharacters={global.fetch} />);
    const inputElement = screen.getByRole<HTMLInputElement>('textbox');
    expect(inputElement).toBeInTheDocument();
    userEvent.type(inputElement, 'r2-d2');
    expect(inputElement.value).toBe('r2-d2');
  });
});
