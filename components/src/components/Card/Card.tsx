import './Card.css';
import React, { Component } from 'react';
import { IHouse } from '../../utils/types';

type Props = {
  card: IHouse;
};

class Card extends Component<Props> {
  render() {
    return (
      <div className='card'>
        <div className='card-img'></div>
        <div className='card-content'>
          <h3>{this.props.card.title}</h3>
        </div>
      </div>
    );
  }
}

export default Card;
