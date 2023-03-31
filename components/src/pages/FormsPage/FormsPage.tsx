import './FormsPage.css';
import React, { useState } from 'react';
import { IData } from '../../utils/types';
import { emptyCard } from '../../utils/details';
import Forms from '../../components/Forms/Forms';
import CardsList from '../../components/CardsList/CardsList';
import ModalWindow from '../../components/ModalWindow/ModalWindow';

const FormsPage = () => {
  const [cards, setCards] = useState([emptyCard]);
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);

  const handleChange = (newCard: IData) => {
    setCards([...cards, newCard]);
    console.log([...cards, newCard]);
  };

  const openImgModal = () => {
    setIsImgModalOpen(true);
  };

  const closeImgModal = () => {
    setIsImgModalOpen(false);
  };

  return (
    <div className='page'>
      <h1>Forms</h1>
      <h3 className='page-title'>Forms</h3>
      <h3>Plan your visit to Dubai:</h3>
      <Forms createNewCard={handleChange} openModal={openImgModal} />
      <CardsList cards={cards} />
      <ModalWindow isModalOpen={isImgModalOpen} closeModal={closeImgModal} />
    </div>
  );
};

export default FormsPage;
