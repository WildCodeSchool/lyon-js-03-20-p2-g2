import React, { Component } from 'react';
import '../style/search-bar.css';

class SearchBar extends Component {
  render () {
    return (
      <form className='search-bar'>
        <input type='text' onChange={this.props.search} name='search' placeholder='Search City' />
      </form>
    );
  }
}

export default SearchBar;
