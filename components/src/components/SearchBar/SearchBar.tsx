import './SearchBar.css';
import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchPhrase: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.value;
    this.setState({ searchPhrase: value });
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchPhraseToLS = this.state.searchPhrase;
    localStorage.setItem('searchPhraseToLS', searchPhraseToLS);
  };

  componentDidMount() {
    const searchPhraseFromLS = localStorage.getItem('searchPhraseToLS');
    this.setState({ searchPhrase: searchPhraseFromLS });
  }

  render() {
    return (
      <form className='search-bar' onSubmit={(event) => this.handleFormSubmit(event)}>
        <input
          className='search-input'
          value={this.state.searchPhrase}
          onChange={this.handleChange}
          placeholder='Enter something'
        ></input>
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
