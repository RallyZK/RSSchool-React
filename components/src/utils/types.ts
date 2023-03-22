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
  // checkboxes: ICheckBox[];
  checkboxError: string;
  cards: IFormCard[];
}

export const allFormCards: IFormCard[] = [];

export const emptyState = {
  nameError: '',
  selectError: '',
  checkboxError: '',
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
};
