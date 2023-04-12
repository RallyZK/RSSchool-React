import React from 'react';
import { IData } from '../utils/types';
import Forms from '../components/Forms/Forms';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

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
    userEvent.type(inputTextElement, 'test text');
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

    const selects = screen.getByRole<HTMLSelectElement>('combobox');
    expect(selects).toBeInTheDocument();
    expect(screen.getByText(/Select a purpose/i)).toBeInTheDocument();
  });

  test('File input renders correctly', () => {
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

    const testFile = new File(['hello'], 'hello.png', { type: 'image/png' });
    const fileInput = screen.getByLabelText<HTMLInputElement>('Upload a photo:');
    expect(fileInput).toBeInTheDocument();

    userEvent.upload(fileInput, testFile);
    expect(fileInput.files).toHaveLength(1);
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
});
