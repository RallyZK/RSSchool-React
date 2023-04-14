import React from 'react';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import { render, screen } from '@testing-library/react';

describe('ModalWindow test', () => {
  test('ModalWindow renders correctly', () => {
    render(
      <ModalWindow
        isModalOpen={false}
        closeModal={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    expect(screen.getByText(/A new character was successfully created!/i)).toBeInTheDocument();
    expect(screen.getByText(/May the Force be with you/i)).toBeInTheDocument();
  });
});
