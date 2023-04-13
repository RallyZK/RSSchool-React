import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPerson } from '../../../utils/types';

interface CardsState {
  isModalOpen: boolean;
  currentCard: IPerson | null;
}

const initialState: CardsState = {
  isModalOpen: false,
  currentCard: null,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    openOrCloseCard: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setCurrentCard: (state, action: PayloadAction<IPerson>) => {
      state.currentCard = action.payload;
    },
  },
});

export default cardsSlice.reducer;
