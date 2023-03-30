import React, { FC, useState } from 'react';
import './ModalWindow.css';

interface ModalWindowProps {
  openModal: (isModalOpen: boolean) => void;
}

const ModalWindow: FC<ModalWindowProps> = ({ openModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    openModal(true);
    setIsOpen(true);
    const timer = setTimeout(() => {
      openModal(false);
      setIsOpen(false);
      clearTimeout(timer);
    }, 5000);
  };
  closeModal();

  return (
    <div className={`modal-wrapper ${isOpen ? '' : 'display-none'}`}>
      <div className='modal-img'></div>
      <h2 className='modal-title'>You information is successfully saved!</h2>
    </div>
  );
};

export default ModalWindow;
