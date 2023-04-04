import './CardModalWindow.css';
import React, { FC } from 'react';
import { IPerson } from '../../utils/types';

interface CardModalWindowProps {
  isModalOpen: boolean;
  closeModal: (card: IPerson) => void;
  card: IPerson;
}

const CardModalWindow: FC<CardModalWindowProps> = ({ isModalOpen, closeModal, card }) => {
  return (
    <div className={isModalOpen ? 'card-modal-background' : 'display-none'} onClick={() => closeModal(card)}>
      <div className={`card-modal-wrapper ${isModalOpen ? '' : 'display-none'}`}>
        <button className='close-btn' onClick={() => closeModal(card)}></button>
        <img className='card-modal-img' src={card.imgSrc} alt={card.name}></img>
        <div className='card-modal-content'>
          <h2>{card.name}</h2>
          <p>
            <span>Birth year: </span>
            {card.birth_year}
          </p>
          <p>
            <span>Gender: </span>
            {card.gender}
          </p>
          <p>
            <span>Eye color: </span>
            {card.eye_color}
          </p>
          <p>
            <span>Hair color: </span>
            {card.hair_color}
          </p>
          <p>
            <span>Height: </span>
            {card.height} sm
          </p>
          <p>
            <span>Mass: </span>
            {card.mass} kg
          </p>
          <p>
            <span>Skin color: </span>
            {card.skin_color}
          </p>
          <p>
            <span>Home planet: </span>
            {card.homePlanet}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardModalWindow;
