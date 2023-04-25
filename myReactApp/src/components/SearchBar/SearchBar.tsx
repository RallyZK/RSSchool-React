import './SearchBar.css';
import React, { FC, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSearchPhrase } from '../../store/reducers/characters/CharactersSlice';
// import { setSearchPhrase } from '../../store/reducers/characters/ActionCreator';
interface SearchBarProps {
  findCharacters: (text: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ findCharacters }) => {
  const dispatch = useAppDispatch();
  const { searchPhrase } = useAppSelector((state) => state.сharactersReducer);

  const searchBarRef = useRef<HTMLInputElement>(null);
  // searchBarRef.current = searchPhrase;

  // useEffect(() => {
  //   return () => {
  //     dispatch(setSearchPhrase(searchBarRef.current));
  //   };
  // }, [dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const phrase = event.target.value;
    dispatch(setSearchPhrase(phrase));
  };

  // const searchCharacter = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.code === 'Enter') {
  //     findCharacters(searchPhrase);
  //   }
  // };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    if (searchBarRef.current) dispatch(setSearchPhrase(searchBarRef.current.value));
    console.log('enter');
    event.preventDefault();
  };

  return (
    <form className='search-bar' onSubmit={handleFormSubmit}>
      <div className='magnifier'></div>
      {/* <input
        defaultValue={searchPhrase}
        ref={searchBarRef}
        // value={searchPhrase}
        className='search-input'
        // onChange={(event) => handleChange(event)}
        // onKeyDown={(event) => searchCharacter(event)}
        placeholder='Enter character name. Example: Luke Skywalker'
      ></input> */}
      <input
        value={searchPhrase}
        className='search-input'
        onChange={(event) => handleChange(event)}
        // onKeyDown={(event) => searchCharacter(event)}
        placeholder='Enter character name. Example: Luke Skywalker'
      ></input>
      <button type='submit'>click</button>
    </form>
  );
};

export default SearchBar;
