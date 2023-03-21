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

export const emptyState = {
  name: '',
  nameError: '',
  date: new Date().toISOString().slice(0, 10),
  dateError: '',
  select: 'Select a purpose',
  selectError: '',
  checkboxes: [
    { name: 'Villa', checked: false },
    { name: 'Cottage', checked: false },
    { name: 'Apartment', checked: false },
  ],
  checkboxError: '',
  radio: '',
  radioError: '',
  file: '',
  fileError: '',
};

export const allFormCards: IFormCard[] = [];
