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

export const emptyPersonCard: IPerson = {
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
  id: '',
  imgSrc: '',
};
