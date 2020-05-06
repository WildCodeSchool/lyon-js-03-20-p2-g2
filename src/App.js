import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
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
