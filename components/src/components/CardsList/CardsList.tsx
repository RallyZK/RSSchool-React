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
      {cards.map((card: IData, index: number) => {
        if (index > 0) {
          return <CardInForms card={card} key={card.name} />;
        }
      })}
    </div>
  );
};

export default CardsList;
