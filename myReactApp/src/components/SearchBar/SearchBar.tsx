import React, { FC, useEffect, useRef, useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  findCharacters: (text: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ findCharacters }) => {
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

  const searchCharacter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      findCharacters(searchPhrase);
      localStorage.setItem('searchPhraseToLS', searchPhrase);
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className='search-bar' onSubmit={(event) => handleFormSubmit(event)}>
      <div className='magnifier'></div>
      <input
        placeholder='Enter character name. Example: Luke Skywalker'
        className='search-input'
        value={searchPhrase}
        onChange={(event) => handleChange(event)}
        onKeyDown={(event) => searchCharacter(event)}
      ></input>
    </form>
  );
};

export default SearchBar;
