import './HomePage.css';
import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import { emptyPersonCard } from '../../utils/details';
import { getAllPeople, getImageOfPerson } from '../../utils/api';
import { IPerson } from '../../utils/types';

const HomePage = () => {
  const [characters, setCharacters] = useState([emptyPersonCard]);
  const getAllCharacters = async () => {
    const arr = await getAllPeople();
    arr.forEach(async (person: IPerson) => {
      const imgSrc = person.id ? await getImageOfPerson(person.id) : '';
      person.imgSrc = imgSrc;
    });
    setCharacters(arr);
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <div className='page'>
      <h3 className='page-title'>Home Page</h3>
      <h1>Star Wars universe characters</h1>
      <SearchBar />
      <div className='cards-wrapper'>
        {characters.map((card: IPerson) => (
          <Card card={card} key={card.name} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
