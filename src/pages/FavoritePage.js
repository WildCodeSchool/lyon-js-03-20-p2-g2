import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Favorites from '../components/Favorites';

class Favorite extends Component {
  render () {
    return (
      <div>
        <Header />
        <SearchBar />
        <Favorites />
      </div>
    );
  }
}

export default Favorite;
