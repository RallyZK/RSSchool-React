import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IData } from '../../../utils/types';

interface FormsState {
  name: string;
  date: string;
  gender: string;
  characterType: string;
  file: string | undefined;
  agree: boolean;
  cards: IData[];
}

const initialState: FormsState = {
  name: '',
  date: '',
  gender: '',
  characterType: '',
  file: undefined,
  agree: false,
  cards: [],
};

export const formsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setCharacterType: (state, action: PayloadAction<string>) => {
      state.characterType = action.payload;
    },
    setFile: (state, action: PayloadAction<string | undefined>) => {
      state.file = action.payload;
    },
    setAgree: (state, action: PayloadAction<boolean>) => {
      state.agree = action.payload;
    },
    setCard: (state, action: PayloadAction<IData>) => {
      state.cards.push(action.payload);
    },
  },
});

export default formsSlice.reducer;
