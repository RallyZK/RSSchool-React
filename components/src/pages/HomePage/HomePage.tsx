import './HomePage.css';
import React, { useState } from 'react';
import { IPerson } from '../../utils/types';
import Card from '../../components/Card/Card';
import { searchCharacter } from '../../utils/api';
import { emptyPersonCard } from '../../utils/details';
import { noResultsText } from '../../utils/noResultsText';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardModalWindow from '../../components/CardModalWindow/CardModalWindow';

const HomePage = () => {
  const [message, setMessage] = useState(<div></div>);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResponseReceived, setIsResponseReceived] = useState(false);
  const [characters, setCharacters] = useState<IPerson[]>([]);
  const [currentCard, setCurrentCard] = useState<IPerson>(emptyPersonCard);

  const findCharacters = async (text: string) => {
    setIsResponseReceived(false);
    setMessage(<p className='loader'>Searching in The Galaxy far, far away...</p>);
    const response = await searchCharacter(text);
    const data = response.results;
    if (response.count > 0) {
      setIsResponseReceived(true);
      setMessage(<div></div>);
      setCharacters(data);
    } else {
      setIsResponseReceived(false);
      setMessage(noResultsText);
      setCharacters([]);
    }
  };

  const openCardModal = (card: IPerson) => {
    setIsModalOpen(true);
    setCurrentCard(card);
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';
  };

  const closeCardModal = () => {
    setIsModalOpen(false);
    document.body.style.height = '';
    document.body.style.overflowY = '';
  };

  return (
    <div className='page'>
      <h3 className='page-title'>Home Page</h3>
      <h1>Star Wars universe characters</h1>
      <SearchBar findCharacters={findCharacters} />
      {isResponseReceived ? (
        <div className='cards-wrapper'>
          {characters.map((card: IPerson) => (
            <Card card={card} key={card.name} openModal={() => openCardModal(card)} />
          ))}
        </div>
      ) : (
        <div>{message}</div>
      )}
      <CardModalWindow isModalOpen={isModalOpen} closeModal={closeCardModal} card={currentCard} />
    </div>
  );
};

export default HomePage;
