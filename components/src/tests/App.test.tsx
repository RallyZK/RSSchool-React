import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App test', () => {
  test('App renders', () => {
    render(<App />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});
