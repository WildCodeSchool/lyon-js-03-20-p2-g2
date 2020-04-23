import React from 'react';
import SearchBar from '../components/SearchBar';
import ModalSuggestions from '../components/ModalSuggestions';
import Header from '../components/Header';
import '../style/home.css';

const Home = (props) => {
  return (
    <div className='home'>
      <Header />
      <SearchBar />
      <ModalSuggestions />
    </div>
  );
};

export default Home;
