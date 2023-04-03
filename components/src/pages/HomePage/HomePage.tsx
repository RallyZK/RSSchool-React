import './HomePage.css';
import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import { emptyPersonCard } from '../../utils/details';
import { getAllPeople, getImageOfPerson } from '../../utils/api';
import { IPerson } from '../../utils/types';

const HomePage = () => {
  const [people, setPeople] = useState([emptyPersonCard]);
  const getArr = async () => {
    const arr = await getAllPeople();
    return arr;
  };

  // setPeople(getArr());

  return (
    <div className='page'>
      <h3 className='page-title'>Home Page</h3>
      <h1>Star Wars universe characters</h1>
      <SearchBar />
      <div className='cards-wrapper'>
        {people.map((card: IPerson) => (
          <Card card={card} key={card.name} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
