import React from 'react';
import './App.css';
import Header from './components/Header';
import ModalSuggestions from './components/ModalSuggestions';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import About from './pages/About';
import Home from './pages/Home';
import Parameters from './pages/Parameters';
import Favorites from './pages/Favorites';

class App extends React.Component {
  render () {
    return (
      <Router>
        <div id='App'>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/favorites'>
              <Favorites />
            </Route>

            <Route path='/about'>
              <About />
            </Route>

            <Route path='/parameters'>
              <Parameters />
            </Route>

            <Route path='/:city' component={About}>
              <SearchBar />
            </Route>

          </Switch>
          <ModalSuggestions />
        </div>
      </Router>
    );
  }
}

export default App;
