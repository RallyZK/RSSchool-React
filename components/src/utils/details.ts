import { IOption } from './types';

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
