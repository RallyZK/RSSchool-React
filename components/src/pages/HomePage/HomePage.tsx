import React, { Component } from 'react';
import Card from '../../components/Card';
import { IHouse } from '../../utils/types';
import SearchBar from '../../components/SearchBar';

type Props = {
  catalog: IHouse[];
};

class HomePage extends Component<Props> {
  catalog: IHouse[] | undefined;

  render() {
    console.log(this.catalog);
    return (
      <div className='page'>
        <h1>Home Page</h1>
        <h3 className='page-title'>Home Page</h3>
        <SearchBar />
        <div className='cards-wrapper'>
          {this.catalog && this.catalog.map((card: IHouse) => <Card card={card} key={card.id} />)}
        </div>
      </div>
    );
  }
}

export default HomePage;
