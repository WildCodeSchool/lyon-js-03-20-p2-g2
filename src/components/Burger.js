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
          <Link to='/favorites' onClick={props.handleClick}>Favorite places </Link>

          <ul className='menuFavorites' onClick={props.handleClick}>
            {this.state.list.map(city => {
              return (<li key={this.props.city.id}><Link to={this.props.city.name}>{this.props.city.name}</Link></li>);
            })}
          </ul>

        </li>
        <li>
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
