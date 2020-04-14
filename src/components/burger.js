import React, { Component } from 'react';
import '../style/burger.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// Function temporaire while components is not create

function Home (props) {
  return <h1>Home</h1>;
}
function Position (props) {
  return <h1>position</h1>;
}
function Favorite (props) {
  return <h1>Favorite</h1>;
}
function Suggestions (props) {
  return <h1>Suggestions</h1>;
}
function Parameters (props) {
  return <h1>Parameters</h1>;
}

const button = () => {
  return (
    <button className='BtnBurger'>
      hello
    </button>
  );
};
class Burger extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Router>
        <div className='TheMenu'>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/position'>My position</Link>
              </li>
              <li>
                <Link to='/favorites'>Favorite places</Link>
              </li>
              <li>
                <Link to='/suggestions'>Suggestions</Link>
              </li>
              <li>
                <Link to='/parameters'>Parameters</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/position'>
              <Position />
            </Route>
            <Route path='/favorites'>
              <Favorite />
            </Route>
            <Route path='/suggestions'>
              <Suggestions />
            </Route>
            <Route path='/parameters'>
              <Parameters />
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default Burger;
