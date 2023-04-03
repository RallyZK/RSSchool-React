import './Card.css';
import React, { FC } from 'react';
import { IPerson } from '../../utils/types';
import { getImageOfPerson } from '../../utils/api';

type Props = {
  card: IPerson;
};

const Card: FC<Props> = ({ card }) => {
  return (
    <div className='card'>
      <img
        className='card-img'
        src={'https://starwars-visualguide.com/assets/img/characters/1.jpg'}
        alt={card.name}
      ></img>
      <div className='card-content'>
        <h4>{card.name} Luke Skywalker</h4>
        <p className='card-location'>Birth year: {card.birth_year}</p>
        <p className='card-price'>Gender: {card.gender}</p>
        <a className='card-button' href={card.url} rel='noreferrer' target='_blank'>
          More details
        </a>
      </div>
    </div>
  );
};

export default Card;
