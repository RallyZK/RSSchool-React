import React from 'react';
import { IData } from '../utils/types';
import Forms from '../components/Forms/Forms';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Forms test', () => {
  test('Text input renders and works correctly', () => {
    render(
      <Forms
        createNewCard={function (newCard: IData): void {
          throw new Error('Function not implemented.');
        }}
        openModal={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    const inputTextElement = screen.getByRole<HTMLInputElement>('textbox');
    expect(inputTextElement).toBeInTheDocument();
    fireEvent.change(inputTextElement, { target: { value: 'test text' } });
    expect(inputTextElement.value).toBe('test text');
  });

  test('Checkbox renders correctly', () => {
    render(
      <Forms
        createNewCard={function (newCard: IData): void {
          throw new Error('Function not implemented.');
        }}
        openModal={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    const checkbox = screen.getByRole<HTMLInputElement>('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(screen.getByText(/I agree/i)).toBeInTheDocument();
    expect(screen.getByText(/Consent on personal data processing/i)).toBeInTheDocument();
  });

  test('Radio buttons render correctly', () => {
    render(
      <Forms
        createNewCard={function (newCard: IData): void {
          throw new Error('Function not implemented.');
        }}
        openModal={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    const radiobtns = screen.getAllByRole<HTMLInputElement>('radio');
    expect(radiobtns[0]).toBeInTheDocument();
    expect(radiobtns[1]).toBeInTheDocument();
    expect(screen.getByText(/yes/i)).toBeInTheDocument();
    expect(screen.getByText(/no/i)).toBeInTheDocument();
  });

  test('Select renders correctly', () => {
    render(
      <Forms
        createNewCard={function (newCard: IData): void {
          throw new Error('Function not implemented.');
        }}
        openModal={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    const selects = screen.getAllByRole<HTMLSelectElement>('combobox');
    expect(screen.getByText(/Select a purpose/i)).toBeInTheDocument();
  });

  test('Submit button renders correctly', () => {
    render(
      <Forms
        createNewCard={function (newCard: IData): void {
          throw new Error('Function not implemented.');
        }}
        openModal={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    const buttonElement = screen.getByRole<HTMLButtonElement>('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('Should prevent default action on click', () => {
    const onSubmit = jest.fn();
    render(
      <Forms
        createNewCard={function (newCard: IData): void {
          throw new Error('Function not implemented.');
        }}
        openModal={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    userEvent.click(screen.getByRole('button'));
    expect(onSubmit).toBeDefined();
  });
});
