import { IData } from '../../../utils/types';
import { AppDispatch } from '../../store';
import { formsSlice } from './FormsSlice';

export const setCard = (characterCard: IData) => (dispatch: AppDispatch) => {
  dispatch(formsSlice.actions.setCard(characterCard));
};
