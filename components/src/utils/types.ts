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

// export interface IFormCardNew {
//   name: string | undefined;
//   date: string | undefined;
//   purpose: string | undefined;
//   realEstate: (string | undefined)[];
//   transfer: string | undefined;
//   file: string | undefined;
// }

export interface ICheckBox {
  name: string;
  checked: boolean;
}

export interface IFormsState {
  nameError: string;
  selectError: string;
  checkboxError: string;
  radioError: string;
  cards: IFormCard[];
  isFormFilled: boolean;
}

export const emptyState = {
  nameError: '',
  selectError: '',
  checkboxError: '',
  radioError: '',
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
