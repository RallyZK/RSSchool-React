import './CardInForms.css';
import React, { Component } from 'react';
import { IHouse } from '../../utils/types';

type Props = {
  card: IHouse;
};

class CardInForms extends Component<Props> {
  render() {
    return (
      <div className='card'>
        <img className='card-img' src={this.props.card.picUrl} alt={this.props.card.title}></img>
        <div className='card-content'>
          <h4>{this.props.card.title}</h4>
          <p className='card-location'>{this.props.card.location}</p>
          <p className='card-price'>{this.props.card.price} AED</p>
          <div className='card-desc'>
            <p>{this.props.card.square} SqFt</p>
            <p>{this.props.card.bedroomsCount} Beds</p>
            <p>{this.props.card.bathroomsCount} Baths</p>
          </div>
          <a className='card-button' href={this.props.card.url} rel='noreferrer' target='_blank'>
            Details
          </a>
        </div>
      </div>
    );
  }
}

export default CardInForms;
