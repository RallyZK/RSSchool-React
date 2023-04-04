import { IPerson } from './types';

const _apiBase = 'https://swapi.dev/api';
const _apiVisual = 'https://starwars-visualguide.com/assets/img/characters/';

export async function getResource(url: string) {
  const responce = await fetch(`${_apiBase}${url}`);
  if (!responce.ok) throw new Error(`Could not fetch: ${responce.status}`);
  const data = await responce.json();
  return data;
}

export async function getAllPeople() {
  const responce = await fetch(`${_apiBase}/people`);
  const data = await responce.json();
  data.results.forEach(async (person: IPerson) => {
    const urlArr = person.url.split('/');
    const id = urlArr[urlArr.length - 2];
    const imgSrc = await getImageOfPerson(id);
    person.id = id;
    person.imgSrc = imgSrc;
  });
  console.log('data in api:::', data);
  return data;
}

export async function getPerson(id: number) {
  return getResource(`/people/${id}`);
}

export async function getImageOfPerson(id: string) {
  const responce = await fetch(`${_apiVisual}${id}.jpg`);
  if (!responce.ok) throw new Error(`Could not fetch: ${responce.status}`);
  return responce.url;
}
