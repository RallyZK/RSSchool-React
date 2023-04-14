import './CardsList.css';
import React from 'react';
import { IData } from '../../utils/types';
import { useAppSelector } from '../../hooks/redux';
import CardInForms from '../CardInForms/CardInForms';

const CardsList = () => {
  const { cards } = useAppSelector((state) => state.formsReducer);
  return (
    <div className='cards-collection'>
      {cards.map((card: IData) => (
        <CardInForms card={card} key={card.name} />
      ))}
    </div>
  );
};

export default CardsList;
