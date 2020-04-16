import React from 'react';
import '../style/burger.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import About from './About-us';
import SearchBar from './SearchBar';

// Function temporaire while components is not create

function Home (props) {
  return <h1>texte</h1>;
}
function Favorite (props) {
  return <h1>Favorite</h1>;
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

export const Burger = (props) => {
  let navClasses = 'nav-menu';
  if (props.show) {
    navClasses = 'nav-menu open';
  }

  return (
    <Router>
      <nav className={navClasses}>
        <div class='closing-menu'>
          <i class='fas fa-times' onClick={props.handleClick} />
        </div>
        <ul class='menuItems'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorite places </Link>

            <ul class='menuFavorites'>
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
        <Route exact path='/'>
          <SearchBar />
          <Home />
        </Route>

        <Route path='/favorites'>
          <SearchBar />
          <Favorite />
        </Route>

        <Route path='/about'>
          <SearchBar />
          <About />
        </Route>

        <Route path='/parameters'>
          <SearchBar />
          <Parameters />
        </Route>

        <Route path='/:city' component={Places}>
          <SearchBar />
        </Route>

      </Switch>
    </Router>
  );
};

export default Burger;
