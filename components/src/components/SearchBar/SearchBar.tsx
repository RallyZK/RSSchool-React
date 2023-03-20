import './SearchBar.css';
import React, { Component } from 'react';

type SearchBarState = {
  searchPhrase: string;
};

type SearchBarProps = {
  smth?: string;
};

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchPhrase: '',
    };
  }

  myRef = React.createRef<HTMLInputElement>();

  saveToLS = () => {
    localStorage.setItem('searchPhraseToLS', this.state.searchPhrase);
  };

  componentWilldMount() {
    this.saveToLS();
  }

  componentDidMount() {
    const searchPhraseFromLS = localStorage.getItem('searchPhraseToLS');
    this.setState({ searchPhrase: searchPhraseFromLS || '' });
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchPhrase: event.target.value });
    this.saveToLS();
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.saveToLS();
  };

  render() {
    return (
      <form className='search-bar' onSubmit={(event) => this.handleFormSubmit(event)}>
        <input
          ref={this.myRef}
          type='text'
          placeholder='Enter something'
          className='search-input'
          value={this.state.searchPhrase}
          onChange={(event) => this.handleChange(event)}
        ></input>
        <button className='search-button' type='submit'></button>
      </form>
    );
  }
}

export default SearchBar;
