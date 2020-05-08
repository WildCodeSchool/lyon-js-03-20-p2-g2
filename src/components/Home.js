import React from 'react';
import SearchBar from './SearchBar';
import Header from './Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const today = new Date();
const Background = styled.div`
    background: ${({ time = today.getHours() }) =>
  (time >= 6 && time < 12 && 'url("https://img-weather.netlify.app/background/background_dawn1.jpg")') ||
  (time >= 12 && time < 18 && 'url("https://img-weather.netlify.app/background/background_day4.jpg")') ||
  (time >= 18 && time <= 23 && 'url("https://img-weather.netlify.app/background/background_dusk3.jpg")') ||
  (time >= 0 && time < 6 && 'url("https://img-weather.netlify.app/background/background_night4.jpg")')
};
    min-height: 100vh;
    background-size: cover;`;

function Home () {
  return (
    <Background>
      <Header />
      <SearchBar />
      <Footer />
    </Background>
  );
}

export default Home;
