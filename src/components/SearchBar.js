import React, { Component } from 'react';
import '../style/search-bar.css';

class SearchBar extends Component {
  render () {
    return (
      <form className='search-bar'>
        <label className='search-label' htmlFor='search-input'>
          <input
            type='text'
            // value=""
            id='search-input'
            placeholder='Search City...'
            onChange={this.handleOnInputChange}
          />

        </label>
      </form>
    );
  }
}

export default SearchBar;
