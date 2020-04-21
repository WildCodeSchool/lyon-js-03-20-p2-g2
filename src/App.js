import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Header />
        <main id='App'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/favorites' />
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/parameters' />
            <Route path='/:city' component={About}>
              <SearchBar />
            </Route>
          </Switch>
        </main>
        <footer className='page-footer font-small blue'>
          <div className='footer-copyright text-center py-3 footer-style'>© 2020 Copyright: By Wilders <i className='fas fa-heart coeur' />
            <a href='/'> WeatherSuggest</a>
          </div>
        </footer>
      </Router>
    );
  }
}

export default App;
