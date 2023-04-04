import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';

describe('Card test', () => {
  test('Card renders correctly', async () => {
    const testInfo = {
      birth_year: '',
      created: '',
      edited: '',
      eye_color: '',
      films: [''],
      gender: '',
      hair_color: '',
      height: '',
      homeworld: '',
      mass: '',
      name: '',
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
      />,
    );
    // expect(screen.getByAltText('test title')).toBeInTheDocument();
    // expect(screen.getByText(/test title/i)).toBeInTheDocument();
    // expect(screen.getByText(/2/i)).toBeInTheDocument();
    // expect(screen.getByText(/test location/i)).toBeInTheDocument();
    // expect(screen.getByText(/3/i)).toBeInTheDocument();
    // expect(screen.getByText(/4/i)).toBeInTheDocument();
    // expect(screen.getByText(/5/i)).toBeInTheDocument();
    // expect(await screen.findByRole('link', { name: /details/i })).toBeInTheDocument();
  });
});
