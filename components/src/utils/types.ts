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
export interface IFormsState {
  nameError: string;
  selectError: string;
  checkboxError: string;
  radioError: string;
  fileError: string;
  cards: IData[];
  isFormFilled: boolean;
}
export interface IData {
  name: string;
  date: string;
  purpose: string;
  realEstate: string[];
  transfer: string;
  file: string;
}
export interface IOption {
  value: string;
  label?: string;
}
