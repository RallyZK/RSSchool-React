import React, { FC } from 'react';
import { IData } from '../../utils/types';
import CardInForms from '../CardInForms/CardInForms';
import './CardsList.css';

interface CardsListProps {
  cards: IData[];
}

const CardsList: FC<CardsListProps> = ({ cards }) => {
  return (
    <div className='cards-collection'>
      {cards.map((card: IData, index: number) => (index > 0 ? <CardInForms card={card} key={card.name} /> : ''))}
    </div>
  );
};

export default CardsList;
