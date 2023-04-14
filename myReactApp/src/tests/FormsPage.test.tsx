import React from 'react';
import FormsPage from '../pages/FormsPage/FormsPage';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

describe('FormsPage test', () => {
  test('FormsPage renders correctly', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <FormsPage />
      </Provider>,
    );
    expect(screen.getByText(/forms/i)).toBeInTheDocument();
    expect(screen.getByText(/CREATE NEW CHARACTER/i)).toBeInTheDocument();
  });
});
