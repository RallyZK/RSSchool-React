import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const searchPhraseFromLS = localStorage.getItem('searchPhraseToLS');
  const [searchPhrase, setSearchPhrase] = useState(searchPhraseFromLS ? searchPhraseFromLS : '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(event.target.value);
    localStorage.setItem('searchPhraseToLS', searchPhrase);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('searchPhraseToLS', searchPhrase);
  };

  return (
    <form className='search-bar' onSubmit={(event) => handleFormSubmit(event)}>
      <input
        type='text'
        placeholder='Enter something'
        className='search-input'
        value={searchPhrase}
        onChange={(event) => handleChange(event)}
      ></input>
      <button className='search-button' type='submit'></button>
    </form>
  );
};

export default SearchBar;
