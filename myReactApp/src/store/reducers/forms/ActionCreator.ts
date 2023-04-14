import { IData } from '../../../utils/types';
import { AppDispatch } from '../../store';
import { formsSlice } from './FormsSlice';

export const setName = (name: string) => (dispatch: AppDispatch) => {
  dispatch(formsSlice.actions.setName(name));
};

export const setDate = (date: string) => (dispatch: AppDispatch) => {
  dispatch(formsSlice.actions.setDate(date));
};

export const setGender = (gender: string) => (dispatch: AppDispatch) => {
  dispatch(formsSlice.actions.setGender(gender));
};

export const setCharacterType = (type: string) => (dispatch: AppDispatch) => {
  dispatch(formsSlice.actions.setCharacterType(type));
};

export const setFile = (file: string | undefined) => (dispatch: AppDispatch) => {
  dispatch(formsSlice.actions.setFile(file));
};

export const setAgree = (agreement: boolean) => (dispatch: AppDispatch) => {
  dispatch(formsSlice.actions.setAgree(agreement));
};

export const setCard = (characterCard: IData) => (dispatch: AppDispatch) => {
  dispatch(formsSlice.actions.setCard(characterCard));
};
