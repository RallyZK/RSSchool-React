import './CardInForms.css';
import React, { FC } from 'react';
import { IFormCard } from '../../utils/types';

type Props = {
  card: IFormCard;
};

const FormCard: FC<Props> = ({ card }) => {
  return (
    <div className='form-card'>
      <img className='form-card-img' src={card.file} alt={card.name}></img>
      <div className='form-card-content'>
        <h4>{card.name}</h4>
        <p className='form-card-desc'>
          <span className='span'>Visit date:</span> {card.date}
        </p>
        <p className='form-card-desc'>
          <span className='span'>Purpose of the visit:</span> {card.purpose}
        </p>
        <p className='form-card-desc'>
          <span className='span'>Transfer is needed:</span> {card.transfer}
        </p>
        <p className='form-card-desc'>
          <span className='span'>Interested in:</span> {card.realEstate.join(' ')}
        </p>
      </div>
    </div>
  );
};

export default FormCard;
