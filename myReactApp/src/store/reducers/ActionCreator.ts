import { noResultsText } from '../../utils/noResultsText';
import { searchCharacter } from '../../utils/api';
import { userSlice } from './UserSlice';
import { AppDispatch } from '../store';

export const fetchUsers = (text: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.charactersFetching());
    const response = await searchCharacter(text);
    console.log(response.results);
    dispatch(userSlice.actions.charactersFetchingSuccess(response.results));
  } catch (e) {
    dispatch(userSlice.actions.charactersFetchingError('No Data'));
  }
};
