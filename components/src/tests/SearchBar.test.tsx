import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { createEvent, fireEvent, render, screen } from '@testing-library/react';

describe('SearchBar test', () => {
  test('SearchBar renders and works correctly', () => {
    render(<SearchBar />);
    const inputElement = screen.getByRole<HTMLInputElement>('textbox');
    const buttonElement = screen.getByRole<HTMLButtonElement>('button');

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'test text' } });
    expect(inputElement.value).toBe('test text');
  });

  test('Should prevent default action on click', () => {
    render(<SearchBar />);
    const grid = screen.getByRole<HTMLButtonElement>('button');
    const click = createEvent.click(grid);
    fireEvent(grid, click);
    expect(click.defaultPrevented).toBe(false);
  });
});
