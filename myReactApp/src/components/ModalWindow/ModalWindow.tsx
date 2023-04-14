import React, { FC } from 'react';
import './ModalWindow.css';
interface ModalWindowProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const ModalWindow: FC<ModalWindowProps> = ({ isModalOpen, closeModal }) => {
  const closeThisModal = () => {
    const timer = setTimeout(() => {
      closeModal();
      clearTimeout(timer);
    }, 5000);
  };
  closeThisModal();

  return (
    <div className={`modal-wrapper ${isModalOpen ? '' : 'display-none'}`}>
      <div className='modal-img'></div>
      <h2 className='modal-title'>A new character was successfully created!</h2>
      <h3 className='modal-title add'>May the Force be with you</h3>
    </div>
  );
};

export default ModalWindow;
