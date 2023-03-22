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
  realEstate: ICheckBox[];
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
}

export const emptyState = {
  nameError: '',
  selectError: '',
  checkboxes: [
    { name: 'Villa', checked: false },
    { name: 'Cottage', checked: false },
    { name: 'Apartment', checked: false },
  ],
  checkboxError: '',
};

export const allFormCards: IFormCard[] = [];
