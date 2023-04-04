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
  //const responce = await getResource('/people');
  const responce = await fetch(`${_apiBase}/people`);
  const data = await responce.json();
  data.results.forEach((person: IPerson) => {
    const urlArr = person.url.split('/');
    const id = +urlArr[urlArr.length - 2];
    //const imgSrc = await getImageOfPerson(id);
    person.id = id;
    //person.imgSrc = imgSrc;
  });
  console.log(data.results);
  return data.results;
}

export async function getPerson(id: number) {
  return getResource(`/people/${id}`);
}

export async function getImageOfPerson(id: number) {
  const responce = await fetch(`${_apiVisual}${id}.jpg`);
  if (!responce.ok) throw new Error(`Could not fetch: ${responce.status}`);
  return responce.url;
}

// export const mainArr = await getAllPeople();
