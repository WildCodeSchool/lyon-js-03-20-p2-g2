import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ModalSuggestions from '../components/ModalSuggestions';
import Header from '../components/Header';
import '../style/home.css';

class Home extends Component {
  render () {
    return (
      <div className='home'>
        <Header />
        <SearchBar />
        <ModalSuggestions />
      </div>
    );
  }
}

export default Home;
