import './HomePage.css';
import React, { Component } from 'react';
import Card from '../../components/Card';
import { IHouse } from '../../utils/types';
import { catalog } from '../../utils/catalog';
import SearchBar from '../../components/SearchBar';

class HomePage extends Component {
  catalogForRender: IHouse[] | undefined = catalog;

  render() {
    console.log(this.catalogForRender);
    return (
      <div className='page'>
        <h1>Home Page</h1>
        <h3 className='page-title'>Home Page</h3>
        <SearchBar />
        <div className='cards-wrapper'>
          {this.catalogForRender && this.catalogForRender.map((card: IHouse) => <Card card={card} key={card.id} />)}
        </div>
      </div>
    );
  }
}

export default HomePage;
