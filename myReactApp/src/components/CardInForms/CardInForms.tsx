import './CardInForms.css';
import React, { FC } from 'react';
import { IData } from '../../utils/types';

type FormCardProps = {
  card: IData;
};

const FormCard: FC<FormCardProps> = ({ card }) => {
  return (
    <div className='form-card'>
      <img className='form-card-img' src={card.file} alt={card.name}></img>
      <div className='form-card-content'>
        <h4>{card.name}</h4>
        <p className='form-card-desc'>
          <span className='span'>Birth date:</span> {card.date}
        </p>
        <p className='form-card-desc'>
          <span className='span'>Gender:</span> {card.gender}
        </p>
        <p className='form-card-desc'>
          <span className='span'>Character type:</span> {card.characterType}
        </p>
      </div>
    </div>
  );
};

export default FormCard;
