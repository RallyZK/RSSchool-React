import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPerson, IResponse } from '../../../utils/types';

const _apiBase = 'https://swapi.dev/api/people';

export async function searchCharacter(text: string) {
  const url = text.length ? `${_apiBase}/?search=${text}` : _apiBase;
  const responce = await fetch(url);
  const data = await responce.json();
  return updateResponseData(data);
}

const updateResponseData = (data: IResponse) => {
  data.results.forEach((person: IPerson) => {
    const urlArr = person.url.split('/');
    person.id = urlArr[urlArr.length - 2];
    person.imgSrc = `https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`;
  });
  return data;
};

export const fetchCharacters = createAsyncThunk('characters/Search', async (text: string, thunkAPI) => {
  try {
    const response = await searchCharacter(text);
    return response.results;
  } catch (e) {
    return thunkAPI.rejectWithValue('Fetching Error');
  }
});
