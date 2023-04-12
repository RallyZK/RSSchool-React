import React from 'react';
import { render, screen } from '@testing-library/react';
import CardModalWindow from '../components/CardModalWindow/CardModalWindow';
import { IPerson } from '../utils/types';

describe('CardModalWindow test', () => {
  test('CardModalWindow renders correctly', async () => {
    const testInfo = {
      birth_year: '1000',
      created: '',
      edited: '',
      eye_color: 'black',
      films: [''],
      gender: 'male',
      hair_color: 'brown',
      height: '170',
      homeworld: '',
      mass: '80',
      name: 'Name',
      skin_color: '',
      species: [''],
      starships: [''],
      url: '',
      vehicles: [''],
      id: '0',
      imgSrc: '',
    };
    render(
      <CardModalWindow
        card={testInfo}
        isModalOpen={false}
        closeModal={function (card: IPerson): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    expect(screen.getByAltText('Name')).toBeInTheDocument();
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/1000/i)).toBeInTheDocument();
    expect(screen.getByText(/black/i)).toBeInTheDocument();
    expect(screen.getByText(/brown/i)).toBeInTheDocument();
    expect(screen.getByText(/170/i)).toBeInTheDocument();
    expect(screen.getByText(/80/i)).toBeInTheDocument();
    expect(screen.getByText(/1000/i)).toBeInTheDocument();

    const btn = await screen.findByRole('button', {});
    expect(btn).toBeInTheDocument();
  });
});
