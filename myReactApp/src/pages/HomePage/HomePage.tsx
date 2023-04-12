import './HomePage.css';
import { IPerson } from '../../utils/types';
import Card from '../../components/Card/Card';
import { searchCharacter } from '../../utils/api';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import React, { useEffect, useState } from 'react';
import { noResultsText } from '../../utils/noResultsText';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardModalWindow from '../../components/CardModalWindow/CardModalWindow';
import { fetchUsers } from '../../store/reducers/ActionCreator';

const HomePage = () => {
  const [message, setMessage] = useState(<div></div>);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResponseReceived, setIsResponseReceived] = useState(false);
  const [characters1, setCharacters1] = useState<IPerson[]>([]);
  const [currentCard, setCurrentCard] = useState<IPerson | null>(null);
  const dispatch = useAppDispatch();
  const { characters, isLoading, error } = useAppSelector((state) => state.userReducer);

  const findCharacters = async (text: string) => {
    setIsResponseReceived(false);
    setMessage(<p className='loader'>Searching in a galaxy far, far away...</p>);
    const response = await searchCharacter(text);
    const data = response.results;
    if (response.count > 0) {
      setIsResponseReceived(true);
      setMessage(<div></div>);
      setCharacters1(data);
    } else {
      setIsResponseReceived(false);
      setMessage(noResultsText);
      setCharacters1([]);
    }
  };

  useEffect(() => {
    const searchFromLS = localStorage.getItem('searchPhraseToLS');
    // searchFromLS ? findCharacters(searchFromLS) : findCharacters('');
    searchFromLS ? dispatch(fetchUsers(searchFromLS)) : dispatch(fetchUsers(''));
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
