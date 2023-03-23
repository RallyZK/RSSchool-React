import React from 'react';
import Forms from '../components/Forms';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Forms test', () => {
  test('Text input renders and works correctly', () => {
    render(<Forms />);
    const inputTextElement = screen.getByRole<HTMLInputElement>('textbox');
    expect(inputTextElement).toBeInTheDocument();
    fireEvent.change(inputTextElement, { target: { value: 'test text' } });
    expect(inputTextElement.value).toBe('test text');
  });

  test('Submit button renders and works correctly', () => {
    render(<Forms />);
    const buttonElement = screen.getByRole<HTMLButtonElement>('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
