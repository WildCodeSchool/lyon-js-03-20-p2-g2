import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Favorites from './components/Favorites';
import Parameters from './pages/Parameters';

class App extends React.Component {
  render () {
    return (
      <Router>
        <div id='App'>

          <Switch>
            <Route exact path='/' component={Home} />

            <Route path='/favorites' component={Favorites} />

            <Route path='/about' component={About} />

            <Route path='/parameters' component={Parameters} />

            <Route path='/:city' component={Favorites} />

          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
