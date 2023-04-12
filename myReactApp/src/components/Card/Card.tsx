import './Card.css';
import React, { FC } from 'react';
import { IPerson } from '../../utils/types';

type Props = {
  card: IPerson;
  openModal: () => void;
};

const Card: FC<Props> = ({ card, openModal }) => {
  return (
    <div className='card'>
      <img className='card-img' src={card.imgSrc} alt={card.name}></img>
      <div className='card-content'>
        <h4>{card.name}</h4>
        <p className='card-location'>Birth year: {card.birth_year}</p>
        <p className='card-price'>Gender: {card.gender}</p>
        <button className='card-button' onClick={openModal}>
          More details
        </button>
      </div>
    </div>
  );
};

export default Card;
