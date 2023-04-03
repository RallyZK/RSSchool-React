import './Card.css';
import React, { FC } from 'react';
import { IHouse } from '../../utils/types';

type Props = {
  card: IHouse;
};

const Card: FC<Props> = ({ card }) => {
  return (
    <div className='card'>
      <img className='card-img' src={card.picUrl} alt={card.title}></img>
      <div className='card-content'>
        <h4>{card.title}</h4>
        <p className='card-location'>{card.location}</p>
        <p className='card-price'>{card.price} AED</p>
        <div className='card-desc'>
          <p>{card.square} SqFt</p>
          <p>{card.bedroomsCount} Beds</p>
          <p>{card.bathroomsCount} Baths</p>
        </div>
        <a className='card-button' href={card.url} rel='noreferrer' target='_blank'>
          Details
        </a>
      </div>
    </div>
  );
};

export default Card;
