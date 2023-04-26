import './HomePage.css';
import { IPerson } from '../../utils/types';
import Card from '../../components/Card/Card';
import React, { useEffect, useState } from 'react';
import { noResultsText } from '../../utils/noResultsText';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCharacters } from '../../store/reducers/characters/ActionCreator';
import CardModalWindow from '../../components/CardModalWindow/CardModalWindow';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState<IPerson | null>(null);
  const { characters, isLoading, message, searchPhrase } = useAppSelector((state) => state.сharactersReducer);

  useEffect(() => {
    if (characters.length === 0) dispatch(fetchCharacters(searchPhrase));
  }, [characters.length, dispatch, searchPhrase]);

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
      <SearchBar />
      {!isLoading ? (
        <div className='cards-wrapper'>
          {characters.map((card: IPerson) => (
            <Card card={card} key={card.name} openModal={() => openCardModal(card)} />
          ))}
        </div>
      ) : (
        <p className='loader'>{message}</p>
      )}
      {!isLoading && characters.length === 0 && noResultsText}
      <CardModalWindow isModalOpen={isModalOpen} closeModal={closeCardModal} card={currentCard} />
    </div>
  );
};

export default HomePage;
