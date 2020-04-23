import React, { Component } from 'react';
import Burger from './Burger';
import BurgerButton from './BurgerButton';
import FavoriteItem from './FavoriteItem';

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      openBurger: false,
      favoritesList: ['Lyon', 'Paris', 'Autre']
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

  addFavorite = currentlyCity => {
    const { favoritesList } = this.state;
    const isFavorite = favoritesList.some(alreadyFavorite => alreadyFavorite === currentlyCity);

    if (!isFavorite) {
      this.setState({
        favoritesList: [...favoritesList, currentlyCity]
      });
    } else if (isFavorite) {
      const indexFavorite = favoritesList.indexOf(currentlyCity);
      console.log(indexFavorite);
      this.setState({
        favoritesList: [...favoritesList, favoritesList.splice(indexFavorite, 1)]
      });
    }
  }

  render () {
    return (
      <div className='header'>
        <FavoriteItem handleChange={this.addFavorite} active={(currentlyCity) => this.state.favoritesList.includes(currentlyCity)} />

        <BurgerButton handleClick={this.openBurgerMenu} />
        <h2 className='welcome-message'>Welcome to <strong>Weather Suggest</strong></h2>
        <img className='menu-logo-img' src={require('../images/logo.png')} alt='logo' />
        <Burger handleClick={this.closeBurgerMenu} show={this.state.openBurger} favoriteList={this.state.favoritesList} />
      </div>
    );
  }
}

export default Header;
