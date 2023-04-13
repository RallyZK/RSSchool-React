import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPerson } from '../../utils/types';
import { fetchCharacters } from './ActionCreator';

interface CharactersState {
  searchPhrase: string;
  characters: IPerson[];
  isLoading: boolean;
  message: string;
}

const initialState: CharactersState = {
  searchPhrase: '',
  characters: [],
  isLoading: false,
  message: '',
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setSearchPhrase: (state, action: PayloadAction<string>) => {
      state.searchPhrase = action.payload;
    },
  },
  extraReducers: {
    [fetchCharacters.fulfilled.type]: (state, action: PayloadAction<IPerson[]>) => {
      state.isLoading = false;
      state.characters = action.payload;
      state.message = '';
    },
    [fetchCharacters.pending.type]: (state) => {
      state.isLoading = true;
      state.message = 'Searching in a galaxy far, far away...';
    },
    [fetchCharacters.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.message = action.payload;
    },
  },
});

export default charactersSlice.reducer;
