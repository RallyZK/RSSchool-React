export {};
/* eslint-disable testing-library/no-unnecessary-act */
// import React from 'react';
// import Forms from '../components/Forms/Forms';
// import { act, createEvent, fireEvent, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// describe('Forms test', () => {
//   test('Text input renders and works correctly', () => {
//     render(<Forms />);
//     const inputTextElement = screen.getByRole<HTMLInputElement>('textbox');
//     expect(inputTextElement).toBeInTheDocument();
//     act(() => {
//       fireEvent.change(inputTextElement, { target: { value: 'test text' } });
//     });
//     expect(inputTextElement.value).toBe('test text');
//   });

//   test('Text input error3 works correctly', () => {
//     render(<Forms />);
//     const inputTextElement = screen.getByRole<HTMLInputElement>('textbox');
//     const submitbutton = screen.getByRole<HTMLButtonElement>('button');
//     act(() => {
//       fireEvent.change(inputTextElement, { target: { value: '333' } });
//     });
//     const click = createEvent.click(submitbutton);
//     fireEvent(submitbutton, click);
//     expect(screen.getByText(/Please write your name only in latin characters/i)).toBeInTheDocument();
//   });

//   test('Text input error2 works correctly', () => {
//     render(<Forms />);
//     const inputTextElement = screen.getByRole<HTMLInputElement>('textbox');
//     const submitbutton = screen.getByRole<HTMLButtonElement>('button');
//     const click = createEvent.click(submitbutton);
//     act(() => {
//       fireEvent.change(inputTextElement, { target: { value: 'name' } });
//     });
//     fireEvent(submitbutton, click);
//     expect(screen.getByText(/Name should starts with a capital letter/i)).toBeInTheDocument();
//   });

//   test('Text input error1 works correctly', () => {
//     render(<Forms />);
//     const inputTextElement = screen.getByRole<HTMLInputElement>('textbox');
//     const submitbutton = screen.getByRole<HTMLButtonElement>('button');
//     const click = createEvent.click(submitbutton);
//     act(() => {
//       fireEvent.change(inputTextElement, { target: { value: 'a' } });
//     });
//     fireEvent(submitbutton, click);
//     expect(screen.getByText(/Name should contain min 2 characters/i)).toBeInTheDocument();
//   });

//   test('Select input renders and works correctly', () => {
//     render(<Forms />);
//     const selectElement = screen.getByRole<HTMLInputElement>('combobox');
//     expect(selectElement).toBeInTheDocument();
//     act(() => {
//       fireEvent.change(selectElement, { target: { value: 'To buy a real state' } });
//     });
//     expect(selectElement.value).toBe('To buy a real state');
//   });

//   test('Select error works correctly', () => {
//     render(<Forms />);
//     const selectElement = screen.getByRole<HTMLInputElement>('combobox');
//     act(() => {
//       fireEvent.change(selectElement, { target: { value: 'Select a purpose' } });
//     });
//     expect(selectElement.value).toBe('Select a purpose');
//   });

//   test('Options render correctly', () => {
//     render(<Forms />);
//     const titles = screen.getAllByRole<HTMLInputElement>('option');
//     expect(titles[0]).toBeInTheDocument();
//     expect(screen.getByText(/Select a purpose/i)).toBeInTheDocument();
//     expect(screen.getByText(/To buy a real state/i)).toBeInTheDocument();
//     expect(screen.getByText(/To rent a real state/i)).toBeInTheDocument();
//   });

//   test('Checkboxes render correctly', () => {
//     render(<Forms />);
//     const checkboxes = screen.getAllByRole<HTMLInputElement>('checkbox');
//     expect(checkboxes[0]).toBeInTheDocument();
//     expect(checkboxes[1]).toBeInTheDocument();
//     expect(screen.getByText(/Villa/i)).toBeInTheDocument();
//     expect(screen.getByText(/Apartment/i)).toBeInTheDocument();
//   });

//   test('Radio buttons render correctly', () => {
//     render(<Forms />);
//     const radiobtns = screen.getAllByRole<HTMLInputElement>('radio');
//     expect(radiobtns[0]).toBeInTheDocument();
//     expect(radiobtns[1]).toBeInTheDocument();
//     expect(screen.getByText(/yes/i)).toBeInTheDocument();
//     expect(screen.getByText(/no/i)).toBeInTheDocument();
//   });

//   test('Submit button renders correctly', () => {
//     render(<Forms />);
//     const buttonElement = screen.getByRole<HTMLButtonElement>('button');
//     expect(buttonElement).toBeInTheDocument();
//   });

//   test('Should prevent default action on click', () => {
//     const onSubmit = jest.fn();
//     render(<Forms />);
//     userEvent.click(screen.getByRole('button'));
//     expect(onSubmit).toBeDefined();
//   });

//   test('Modal window renders correctly', () => {
//     render(<Forms />);
//     const title = screen.getByRole<HTMLElement>('heading');
//     expect(title).toBeInTheDocument();
//     expect(screen.getByText(/You information is successfully saved!/i)).toBeInTheDocument();
//   });
// });
