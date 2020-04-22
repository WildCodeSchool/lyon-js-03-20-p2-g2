import React, { Component } from 'react';
import '../style/favorites.css';
import FavoriteItem from './FavoriteItem';
// import { FavoriteItem as FavItem } from './FavoriteItem';
import Burger from './Burger';
import Header from './Header';
import SearchBar from './SearchBar';

class Favorites extends Component {
  constructor (props) {
    super(props);

    this.state = {
      list: {
        Lyon: {
          name: 'Lyon',
          id: 1,
          favorite: false
        },
        Paris: {
          name: 'Paris',
          id: 2,
          favorite: false
        },
        Besancon: {
          name: 'Besançon',
          id: 3,
          favorite: false
        }
      },
      favList: []
    };
  }

  addToFav = cityId => {
    this.setState(
      prevstate => {
        return {
          favList: [...prevstate.favList, cityId]
        };
      },
      () => {}
    );
  };

  favActive = city => {
    const newFavorite = !this.state.favorite;

    this.setState({ favorite: newFavorite });
  };

  getPath = () => {
    const params = this.props.match.params;

    const filteredCity = this.state.list.filter(cityName => cityName === params.city);

    return filteredCity;
  }

  render () {
    return (
      <div className='favorites'>
        <Header />
        <SearchBar />
        <FavoriteItem handleChange={this.favActive} active={this.state.list.favorite} />
        <Burger list={this.state.list} />
        <h1>city: {this.getPath()}</h1>
      </div>
    );
  }
}

export default Favorites;
