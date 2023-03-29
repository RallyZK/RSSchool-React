import './FormsPage.css';
import React, { useState } from 'react';
import Forms from '../../components/Forms/Forms';

const FormsPage = () => {
  const [cards, setCards] = useState([]);
  return (
    <div className='page'>
      <h1>Forms</h1>
      <h3 className='page-title'>Forms</h3>
      <h3>Plan your visit to Dubai:</h3>
      <Forms setCards={setCards} />
    </div>
  );
};

export default FormsPage;
