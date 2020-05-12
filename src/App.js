import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import styled from 'styled-components';

const today = new Date();
const Background = styled.div`
    background: ${({ time = today.getHours() }) =>

    (time >= 6 && time < 12 && 'url("https://img-weather.netlify.app/background/background_dawn2.jpg")') ||
    (time >= 12 && time < 18 && 'url("https://img-weather.netlify.app/background/background_day3.jpg")') ||
    (time >= 18 && time <= 23 && 'url("https://img-weather.netlify.app/background/background_dusk3.jpg")') ||
    (time >= 0 && time < 6 && 'url("https://img-weather.netlify.app/background/background_night7.jpg")')
  } no-repeat fixed center;
    min-height: 100vh;
    background-size: cover;`;

class App extends React.Component {
  render () {
    return (
      <Router>
        <main id='App'>
          <Switch>
            <Route exact path='/'>
              <Background>
                <Header />
                <SearchBar />
                <Footer />
              </Background>
            </Route>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
