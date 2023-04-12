import { IOption, IPerson } from './types';

export const selectOptions: IOption[] = [
  {
    value: 'To buy a real estate',
    label: 'To buy a real estate',
  },
  {
    value: 'To rent a real estate for a long time',
    label: 'To rent a real estate for a long time',
  },
  {
    value: 'To rent a real estate for a short period',
    label: 'To rent a real estate for a short period',
  },
];

export const radioOptions: IOption[] = [
  {
    value: 'No',
  },
  {
    value: 'Yes',
  },
];

export const emptyCard = {
  name: '',
  date: '',
  purpose: '',
  agree: '',
  transfer: '',
  file: '',
};

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
