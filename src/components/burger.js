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
function Favorite (props) {
  return <h1>Favorite</h1>;
}
function About (props) {
  return <h1>About</h1>;
}
function Parameters (props) {
  return <h1>Parameters</h1>;
}
function Places (props) {
  const params = props.match.params;
  return (
    <div>
      <h1>city: <em>{params.city}</em></h1>
    </div>
  );
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
                <Link to='/favorites'>Favorite places</Link>

                <ul>
                  <li>
                    <Link to='/Lyon'>Lyon</Link>
                  </li>
                  <li>
                    <Link to='/Paris'>Paris</Link>
                  </li>
                </ul>

              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/parameters'>Parameters</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path='/' component={Home} />

            <Route path='/favorites' component={Favorite} />

            <Route path='/about' component={About} />

            <Route path='/parameters' component={Parameters} />

            <Route path='/:city' component={Places} />
          </Switch>

        </div>
      </Router>

    );
  }
}

export default Burger;
