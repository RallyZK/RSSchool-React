import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar/SearchBar';

describe('SearchBar test', () => {
  test('SearchBar renders and works correctly', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <SearchBar findCharacters={global.fetch} />
      </Provider>,
    );
    const inputElement = screen.getByRole<HTMLInputElement>('textbox');
    expect(inputElement).toBeInTheDocument();
    userEvent.type(inputElement, 'r2-d2');
    expect(inputElement.value).toBe('r2-d2');
  });
});
