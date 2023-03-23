import React from 'react';
import Forms from '../components/Forms';
import { createEvent, fireEvent, render, screen } from '@testing-library/react';

describe('Forms test', () => {
  test('Text input renders and works correctly', () => {
    render(<Forms />);
    const inputTextElement = screen.getByRole<HTMLInputElement>('textbox');
    expect(inputTextElement).toBeInTheDocument();
    fireEvent.change(inputTextElement, { target: { value: 'test text' } });
    expect(inputTextElement.value).toBe('test text');
  });

  test('Select input renders and works correctly', () => {
    render(<Forms />);
    const selectElement = screen.getByRole<HTMLInputElement>('combobox');
    expect(selectElement).toBeInTheDocument();
    fireEvent.change(selectElement, { target: { value: 'To buy a real state' } });
    expect(selectElement.value).toBe('To buy a real state');
  });

  test('Options render correctly', () => {
    render(<Forms />);
    const titles = screen.getAllByRole<HTMLInputElement>('option');
    expect(titles[0]).toBeInTheDocument();
    expect(screen.getByText(/Select a purpose/i)).toBeInTheDocument();
    expect(screen.getByText(/To buy a real state/i)).toBeInTheDocument();
    expect(screen.getByText(/To rent a real state/i)).toBeInTheDocument();
  });

  test('Checkboxes render correctly', () => {
    render(<Forms />);
    const checkboxes = screen.getAllByRole<HTMLInputElement>('checkbox');
    expect(checkboxes[0]).toBeInTheDocument();
    expect(checkboxes[1]).toBeInTheDocument();
    expect(screen.getByText(/Villa/i)).toBeInTheDocument();
    expect(screen.getByText(/Apartment/i)).toBeInTheDocument();
  });

  test('Radio buttons render correctly', () => {
    render(<Forms />);
    const radiobtns = screen.getAllByRole<HTMLInputElement>('radio');
    expect(radiobtns[0]).toBeInTheDocument();
    expect(radiobtns[1]).toBeInTheDocument();
    expect(screen.getByText(/yes/i)).toBeInTheDocument();
    expect(screen.getByText(/no/i)).toBeInTheDocument();
  });

  test('Submit button renders correctly', () => {
    render(<Forms />);
    const buttonElement = screen.getByRole<HTMLButtonElement>('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('Should prevent default action on click', () => {
    render(<Forms />);
    const submitbutton = screen.getByRole<HTMLButtonElement>('button');
    const click = createEvent.click(submitbutton);
    fireEvent(submitbutton, click);
    expect(click.defaultPrevented).toBe(false);
  });

  test('Modal window renders correctly', () => {
    render(<Forms />);
    const title = screen.getByRole<HTMLElement>('heading');
    expect(title).toBeInTheDocument();
    expect(screen.getByText(/You information is successfully saved!/i)).toBeInTheDocument();
  });
});
