import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import App from '../App';

describe('App test', () => {
  test('App renders correctly', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    expect(screen.getByText(/STAR WARS UNIVERSE CHARACTERS/i)).toBeInTheDocument();
  });
});
