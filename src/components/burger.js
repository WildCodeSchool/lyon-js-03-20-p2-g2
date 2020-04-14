import React from 'react';
import '../style/burger.css';

const Burger = (props) => {
  let navClasses = 'nav-menu';
  if (props.show) {
    navClasses = 'nav-menu open';
  }
  return (
    <nav className={navClasses}>
      <div class='closing-menu'>
        <i class='fas fa-times' onClick={props.handleClick} />
      </div>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/'>My position</a></li>
        <li><a href='/'>Favorite places</a></li>
        <li><a href='/'>Suggestions</a></li>
        <li><a href='/'>Parameters</a></li>
      </ul>
    </nav>
  );
};

export default Burger;
