import './SearchBar.css';
import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSearchPhrase } from '../../store/reducers/characters/CharactersSlice';
import { fetchCharacters } from '../../store/reducers/characters/ActionCreator';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { searchPhrase } = useAppSelector((state) => state.сharactersReducer);

  const searchBarRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchBarRef.current) {
      dispatch(setSearchPhrase(searchBarRef.current.value));
      dispatch(fetchCharacters(searchPhrase));
    }
  };

  return (
    <form className='search-bar' onSubmit={handleFormSubmit}>
      <div className='magnifier'></div>
      <input
        defaultValue={searchPhrase}
        ref={searchBarRef}
        className='search-input'
        placeholder='Enter character name. Example: Luke Skywalker'
      ></input>
    </form>
  );
};

export default SearchBar;
