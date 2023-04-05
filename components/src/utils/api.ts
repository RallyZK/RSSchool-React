import { IPerson, IResponse } from './types';

const _apiBase = 'https://swapi.dev/api/people';

export async function getAllCharacters() {
  const responce = await fetch(`${_apiBase}`);
  const data = await responce.json();
  console.log('data in api:::', data);
  return updateResponseData(data);
}

export async function searchCharacter(text: string) {
  const responce = await fetch(`${_apiBase}/?search=${text}`);
  if (!responce.ok) throw new Error(`Could not fetch: ${responce.status}`);
  const data = await responce.json();
  console.log('data in search:::', data);
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
