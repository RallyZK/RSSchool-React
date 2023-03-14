import './SearchBar.css';
import { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className='search-bar'>
        <input className='search-input'></input>
        <button className='search-button'>Search</button>
      </div>
    );
  }
}

export default SearchBar;
