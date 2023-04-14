import './FormsPage.css';
import React, { useState } from 'react';
import { IData } from '../../utils/types';
import Forms from '../../components/Forms/Forms';
import { useAppDispatch } from '../../hooks/redux';
import CardsList from '../../components/CardsList/CardsList';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { setCard } from '../../store/reducers/forms/ActionCreator';

const FormsPage = () => {
  const dispatch = useAppDispatch();
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);

  const handleChange = (newCard: IData) => {
    dispatch(setCard(newCard));
  };

  const openImgModal = () => {
    setIsImgModalOpen(true);
  };

  const closeImgModal = () => {
    setIsImgModalOpen(false);
  };

  return (
    <div className='page'>
      <h1>Create new character</h1>
      <h3 className='page-title'>Forms</h3>
      <Forms createNewCard={handleChange} openModal={openImgModal} />
      <CardsList />
      <ModalWindow isModalOpen={isImgModalOpen} closeModal={closeImgModal} />
    </div>
  );
};

export default FormsPage;
