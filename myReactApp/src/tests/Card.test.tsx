import React from 'react';
import Card from '../components/Card/Card';
import { render, screen } from '@testing-library/react';

describe('Card test', () => {
  test('Card renders correctly', async () => {
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
      <Card
        card={testInfo}
        openModal={function (): void {
          throw new Error('Function not implemented.');
        }}
        key={''}
      />,
    );
    expect(screen.getByAltText('Name')).toBeInTheDocument();
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/1000/i)).toBeInTheDocument();

    const btn = await screen.findByRole('button', { name: /more details/i });
    expect(btn).toBeInTheDocument();
  });
});
