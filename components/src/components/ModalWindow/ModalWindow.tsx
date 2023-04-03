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
    }, 4000);
  };
  closeThisModal();

  return (
    <div className={`modal-wrapper ${isModalOpen ? '' : 'display-none'}`}>
      <div className='modal-img'></div>
      <h2 className='modal-title'>You information is successfully saved!</h2>
    </div>
  );
};

export default ModalWindow;
