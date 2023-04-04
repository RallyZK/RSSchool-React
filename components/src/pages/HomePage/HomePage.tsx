import './HomePage.css';
import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import { emptyPersonCard } from '../../utils/details';
import { getAllPeople, getImageOfPerson } from '../../utils/api';
import { IPerson } from '../../utils/types';
import CardModalWindow from '../../components/CardModalWindow/CardModalWindow';

const HomePage = () => {
  const [characters, setCharacters] = useState([emptyPersonCard]);
  const [isFullData, setIsFullData] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(emptyPersonCard);

  const getAllCharacters = async () => {
    const response = await getAllPeople();
    const data = response.results;
    // data.forEach(async (person: IPerson) => {
    //   const imgSrc = await getImageOfPerson(person.id);
    //   person.imgSrc = imgSrc;
    // });
    setCharacters(data);
    console.log('response on Home Page:::', data);
    setIsFullData(true);
  };

  useEffect(() => {
    getAllCharacters();
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
      <SearchBar />
      {isFullData ? (
        <div className='cards-wrapper'>
          {characters.map((card: IPerson) => (
            <Card card={card} key={card.id} openModal={() => openCardModal(card)} />
          ))}
        </div>
      ) : (
        <p className='loader'>Progressing...</p>
      )}
      <CardModalWindow isModalOpen={isModalOpen} closeModal={closeCardModal} card={currentCard} />
    </div>
  );
};

export default HomePage;
