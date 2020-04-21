import React from 'react';
import SearchBar from '../components/SearchBar';
import ModalSuggestions from '../components/ModalSuggestions';
import '../style/home.css';

const Home = (props) => {
  return (
    <div className='home'>
      <SearchBar onClick={props.onClick} />
      <ModalSuggestions />
    </div>
  );
};

export default Home;
