import React, { useEffect, useRef, useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const searchPhraseFromLS = localStorage.getItem('searchPhraseToLS');
  const [searchPhrase, setSearchPhrase] = useState(searchPhraseFromLS ? searchPhraseFromLS : '');

  const searchBarRef = useRef('');
  searchBarRef.current = searchPhrase;

  useEffect(() => {
    return () => {
      localStorage.setItem('searchPhraseToLS', searchBarRef.current);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const phrase = event.target.value;
    setSearchPhrase(phrase);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className='search-bar' onSubmit={(event) => handleFormSubmit(event)}>
      <input
        placeholder='Enter character name. Example: Luke Skywalker'
        className='search-input'
        value={searchPhrase}
        onChange={(event) => handleChange(event)}
      ></input>
      <button className='search-button' type='submit'></button>
    </form>
  );
};

export default SearchBar;
