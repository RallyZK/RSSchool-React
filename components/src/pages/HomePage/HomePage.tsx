import './HomePage.css';
import React from 'react';
import Card from '../../components/Card/Card';
import { IHouse } from '../../utils/types';
import { catalog } from '../../utils/catalog';
import SearchBar from '../../components/SearchBar/SearchBar';

const HomePage = () => {
  return (
    <div className='page'>
      <h1>Live the life you deserve</h1>
      <h3 className='page-title'>Home Page</h3>
      <SearchBar />
      <div className='cards-wrapper'>
        {catalog && catalog.map((card: IHouse) => <Card card={card} key={card.id} />)}
      </div>
    </div>
  );
};

export default HomePage;
