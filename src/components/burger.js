import React, { Component } from 'react';
import '../style/burger.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// Function temporaire while components is not create

function Home(props) {
  return <h1>Home</h1>;
}
function Position(props) {
  return <h1>Position</h1>;
}
function Favorite(props) {
  return <h1>Favorite</h1>;
}
function Suggestions(props) {
  return <h1>Suggestions</h1>;
}
function Parameters(props) {
  return <h1>Parameters</h1>;
}


function Places(props) {
  const params = props.match.params;
  return (
    <div>
      <h1>city: <em>{params.city}</em></h1>
    </div>
  );
}



class Burger extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
                <Link to='/suggestions'>Suggestions</Link>
              </li>
              <li>
                <Link to='/parameters'>Parameters</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path='/' component={Home} />

            <Route path='/position' component={Position} />

            <Route path='/favorites' component={Favorite} />

            <Route path='/suggestions' component={Suggestions} />

            <Route path='/parameters' component={Parameters} />

            <Route path='/:city' component={Places} />
          </Switch>

        </div>
      </Router>

    );
  }
}

export default Burger;