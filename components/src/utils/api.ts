import { IPerson, IResponse } from './types';

const _apiBase = 'https://swapi.dev/api';
const _apiVisual = 'https://starwars-visualguide.com/assets/img/characters/';

// export async function getResource(url: string) {
//   const responce = await fetch(`${_apiBase}${url}`);
//   if (!responce.ok) throw new Error(`Could not fetch: ${responce.status}`);
//   const data = await responce.json();
//   return data;
// }

export async function getAllCharacters() {
  const responce = await fetch(`${_apiBase}/people`);
  const data = await responce.json();
  console.log('data in api:::', data);
  return updateResponseData(data);
}

// export async function getPerson(id: number) {
//   return getResource(`/people/${id}`);
// }

export async function getPlanet(planetUrl: string) {
  const responce = await fetch(planetUrl);
  const data = await responce.json();
  return data.name;
}

export async function getImageOfCharacter(id: string) {
  const responce = await fetch(`${_apiVisual}${id}.jpg`);
  if (!responce.ok) throw new Error(`Could not fetch: ${responce.status}`);
  return responce.url;
}

export async function searchCharacter(text: string) {
  const responce = await fetch(`${_apiBase}/people/?search=${text}`);
  if (!responce.ok) throw new Error(`Could not fetch: ${responce.status}`);
  const data = await responce.json();
  console.log('data in search:::', data);
  return updateResponseData(data);
}

const updateResponseData = (data: IResponse) => {
  data.results.forEach(async (person: IPerson) => {
    const urlArr = person.url.split('/');
    const id = urlArr[urlArr.length - 2];
    const imgSrc = await getImageOfCharacter(id);
    const planet = await getPlanet(person.homeworld);
    person.id = id;
    person.imgSrc = imgSrc;
    person.homePlanet = planet;
  });
  return data;
};
