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
import 'weather-icons/css/weather-icons.css';

class App extends React.Component {
  render () {
    return (
      <Router>
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
      </Router>
    );
  }
}

export default App;
