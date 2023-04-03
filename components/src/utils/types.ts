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
  agree: string;
  transfer: string;
  file: string;
}
export interface IOption {
  value: string;
  label?: string;
}

export interface IPerson {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
  id?: number;
  imgSrc?: string;
}
