import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IData } from '../../../utils/types';
interface FormsState {
  cards: IData[];
}

const initialState: FormsState = {
  cards: [],
};

export const formsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<IData>) => {
      state.cards.push(action.payload);
    },
  },
});

export default formsSlice.reducer;
