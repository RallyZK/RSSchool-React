import './HomePage.css';
import { IPerson } from '../../utils/types';
import Card from '../../components/Card/Card';
import { getAllCharacters, searchCharacter } from '../../utils/api';
import React, { useEffect, useState } from 'react';
import { emptyPersonCard } from '../../utils/details';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardModalWindow from '../../components/CardModalWindow/CardModalWindow';

const HomePage = () => {
  const [characters, setCharacters] = useState([emptyPersonCard]);
  const [isFullData, setIsFullData] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(emptyPersonCard);
  const [message, setMessage] = useState('');

  const getCharactersForRender = async () => {
    setMessage('Progressing...');
    const response = await getAllCharacters();
    const data = response.results;
    setCharacters(data);
    console.log('response on Home Page:::', data);
    setIsFullData(true);
    setMessage('');
  };

  const findCharacters = async (text: string) => {
    setIsFullData(false);
    const response = await searchCharacter(text);
    const data = response.results;
    if (response.count > 0) {
      setIsFullData(true);
      setMessage('');
      setCharacters(data);
    } else {
      setMessage('No results :( Please, try something else');
      setCharacters([]);
    }
  };

  // useEffect(() => {
  //   getAllCharacters();
  // }, []);

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
      {isFullData ? (
        <div className='cards-wrapper'>
          {characters.map((card: IPerson) => (
            <Card card={card} key={card.id} openModal={() => openCardModal(card)} />
          ))}
        </div>
      ) : (
        <p className='loader'>{message}</p>
      )}
      <CardModalWindow isModalOpen={isModalOpen} closeModal={closeCardModal} card={currentCard} />
    </div>
  );
};

export default HomePage;
