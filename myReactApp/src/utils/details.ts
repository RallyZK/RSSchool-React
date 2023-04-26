import { IOption, IPerson } from './types';

export const selectOptions: IOption[] = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'N/a',
    label: 'N/a',
  },
];

export const radioOptions: IOption[] = [
  {
    value: 'Living being',
  },
  {
    value: 'Droid',
  },
];

export const testPersonCard: IPerson = {
  gender: 'male',
  hair_color: 'black',
  height: '170',
  homeworld: 'test planet',
  mass: '100',
  name: 'test name',
  skin_color: 'white',
  species: [''],
  starships: [''],
  url: '',
  vehicles: [''],
  id: '0',
  imgSrc: '',
  birth_year: '800',
  created: '',
  edited: '',
  eye_color: 'black',
  films: [],
};
