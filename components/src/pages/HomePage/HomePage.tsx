import './HomePage.css';
import React from 'react';
import Card from '../../components/Card/Card';
import { IHouse } from '../../utils/types';
import { catalog } from '../../utils/catalog';
import SearchBar from '../../components/SearchBar/SearchBar';

const HomePage = () => {
  return (
    <div className='page'>
      <h3 className='page-title'>Home Page</h3>
      <h1>Star Wars universe characters</h1>
      <SearchBar />
      {/* <div className='cards-wrapper'>
        {catalog && catalog.map((card: IHouse) => <Card card={card} key={card.id} />)}
      </div> */}
    </div>
  );
};

export default HomePage;
