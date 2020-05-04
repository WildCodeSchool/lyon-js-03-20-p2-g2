import React from 'react';
import '../style/burger.css';
import { Link } from 'react-router-dom';

export const Burger = (props) => {
  let navClasses = 'nav-menu';
  if (props.show) {
    navClasses = 'nav-menu open';
  }

  return (
    <nav className={navClasses}>
      <div className='closing-menu'>
        <i className='fas fa-times' onClick={props.handleClick} />
      </div>
      <ul className='menuItems'>
        <li>
          <Link to='/' onClick={props.handleClick}>Home</Link>
        </li>
        <li>
<<<<<<< HEAD
=======
          <Link to='/favorites' onClick={props.handleClick}>Favorite places </Link>

          <ul className='menuFavorites' onClick={props.handleClick}>
            <li>
              <Link to='/Lyon'>Lyon</Link>
            </li>
            <li>
              <Link to='/Paris'>Paris</Link>
            </li>
          </ul>

        </li>
        <li>
>>>>>>> 92ecec97d80139e7b3141d2fd79f6e19dd4fdc6c
          <Link to='/about' onClick={props.handleClick}>About us</Link>
        </li>
        <li>
          <Link to='/parameters' onClick={props.handleClick}>Parameters</Link>
        </li>
      </ul>
    </nav>

  );
};

export default Burger;
