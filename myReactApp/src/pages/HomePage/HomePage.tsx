import './HomePage.css';
import React, { useEffect, useState } from 'react';
import { IPerson } from '../../utils/types';
import Card from '../../components/Card/Card';
import { searchCharacter } from '../../utils/api';
import { noResultsText } from '../../utils/noResultsText';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardModalWindow from '../../components/CardModalWindow/CardModalWindow';

const HomePage = () => {
  const [message, setMessage] = useState(<div></div>);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResponseReceived, setIsResponseReceived] = useState(false);
  const [characters, setCharacters] = useState<IPerson[]>([]);
  const [currentCard, setCurrentCard] = useState<IPerson | null>(null);

  const findCharacters = async (text: string) => {
    setIsResponseReceived(false);
    setMessage(<p className='loader'>Searching in a galaxy far, far away...</p>);
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

  useEffect(() => {
    const searchFromLS = localStorage.getItem('searchPhraseToLS');
    searchFromLS ? findCharacters(searchFromLS) : findCharacters('');
  }, []);

  const openCardModal = (card: IPerson) => {
    setIsModalOpen(true);
    setCurrentCard(card);
  };

  const closeCardModal = () => {
    setIsModalOpen(false);
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
