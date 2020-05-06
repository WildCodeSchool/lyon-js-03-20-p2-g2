import React, { Component } from 'react';
import Burger from './Burger';
import BurgerButton from './BurgerButton';

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      openBurger: false
    };
  }

  openBurgerMenu = () => {
    this.setState((prevState) => {
      return { openBurger: !prevState.openBurger };
    });
  }

  closeBurgerMenu = () => {
    this.setState({ openBurger: false });
  }

  render () {
    return (
      <div className='header'>
        <span className={this.state.favorite ? 'empty' : 'is-favorite'} onClick={() => { const newFavorite = !this.state.favorite; this.setState({ favorite: newFavorite }); }}>
          <i className='fas fa-heart' />
        </span>
        <BurgerButton handleClick={this.openBurgerMenu} />
        <h2 className='welcome-message'>Welcome to <strong>Weather Suggest</strong></h2>
        <img className='menu-logo-img' src={require('../images/logo.png')} alt='logo' />
        <Burger handleClick={this.closeBurgerMenu} show={this.state.openBurger} />
      </div>
    );
  }
}

export default Header;
