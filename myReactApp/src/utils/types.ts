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
  gender: string;
  agree: string;
  characterType: string;
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
  id: string;
  imgSrc: string;
}

export interface IResponse {
  count: number;
  next: string;
  previous: string;
  results: IPerson[];
}
