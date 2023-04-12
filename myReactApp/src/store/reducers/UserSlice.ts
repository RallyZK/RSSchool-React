import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { emptyError } from '../../utils/noResultsText';
import { IPerson } from '../../utils/types';
import { ReactElement } from 'react';

interface UserState {
  searchPhrase: string;
  characters: IPerson[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  searchPhrase: '',
  characters: [],
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    charactersFetching(state) {
      state.isLoading = true;
    },
    charactersFetchingSuccess(state, action: PayloadAction<IPerson[]>) {
      state.isLoading = false;
      state.characters = action.payload;
      state.error = '';
    },
    charactersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
