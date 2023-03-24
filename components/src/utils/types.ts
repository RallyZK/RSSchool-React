export interface IHouse {
  id: number;
  title: string;
  price: number;
  location: string;
  bedroomsCount: number;
  bathroomsCount: number;
  square: number;
  url: string;
  picUrl: string;
}

export interface IFormCard {
  name: string;
  date: string;
  purpose: string;
  realEstate: string[];
  transfer: string;
  file: string;
}

export interface ICheckBox {
  name: string;
  checked: boolean;
}

export interface IFormsState {
  nameError: string;
  selectError: string;
  checkboxError: string;
  radioError: string;
  fileError: string;
  cards: IFormCard[];
  isFormFilled: boolean;
}

export const emptyState = {
  nameError: '',
  selectError: '',
  checkboxError: '',
  radioError: '',
  fileError: '',
  cards: [
    {
      name: '',
      date: '',
      purpose: '',
      realEstate: [''],
      transfer: '',
      file: '',
    },
  ],
  isFormFilled: false,
};
