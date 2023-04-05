import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { fireEvent, render, screen } from '@testing-library/react';
import { emptyPersonCard } from '../utils/details';

describe('SearchBar test', () => {
  test('SearchBar renders and works correctly', () => {
    const mockJsonPromise = Promise.resolve({ count: 1, next: 'next', previous: 'prev', results: emptyPersonCard });
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    render(<SearchBar findCharacters={global.fetch} />);
    const inputElement = screen.getByRole<HTMLInputElement>('textbox');
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'r2-d2' } });
    expect(inputElement.value).toBe('r2-d2');

    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('r2-d2');
  });
});
