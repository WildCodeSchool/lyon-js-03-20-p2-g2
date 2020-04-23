import React, { Component } from 'react';
import Burger from './Burger';
import BurgerButton from './BurgerButton';
import FavoriteItem from './FavoriteItem';

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      openBurger: false,
      favoritesList: ['Lyon', 'Paris']
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

  addFavorite = favorite => {
    const { favoritesList } = this.state;

    if (
      !favoritesList.some(alreadyFavorite => alreadyFavorite.id === favorite.id)
    ) {
      this.setState({
        favoritesList: [...this.state.favoritesList, favorite]
      });
    }
  };

  delFavorite = favorite => {
    const { favoritesList } = this.state;
    if (
      !favoritesList.some(alreadyFavorite => alreadyFavorite.id === !favorite.id)
    ) {
      this.setState({
        favoritesList: [...this.state.favoritesList, favoritesList.splice(0, 1)]
      });
    }
  };

  render () {
    return (
      <div className='header'>
        <FavoriteItem handleChange={this.favActive} active={false} />

        <BurgerButton handleClick={this.openBurgerMenu} />
        <h2 className='welcome-message'>Welcome to <strong>Weather Suggest</strong></h2>
        <img className='menu-logo-img' src={require('../images/logo.png')} alt='logo' />
        <Burger handleClick={this.closeBurgerMenu} show={this.state.openBurger} favoriteList={this.state.favoritesList} />
      </div>
    );
  }
}

export default Header;
