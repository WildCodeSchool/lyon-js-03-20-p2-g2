import React from 'react';
import SearchBar from '../components/SearchBar';
import ModalSuggestions from '../components/ModalSuggestions';
import '../style/home.css';
import Header from '../components/Header';

const Home = (props) => {
  return (
    <div className='home'>
      <Header />
      <SearchBar onClick={props.onClick} />
      <ModalSuggestions />
    </div>
  );
};

export default Home;
