import React, { Component } from 'react';
import '../style/favorites.css';
import FavoriteItem from './FavoriteItem';
// import { FavoriteItem as FavItem } from './FavoriteItem';
import Burger from './Burger';

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
        Maison: {
          name: 'Maison',
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
    const newFavorite = !this.state.city.favorite;

    this.setState({ favorite: newFavorite });
  };

  getPath = () => {
    const params = this.props.match.params;

    const filteredCity = this.state.list.filter(city => city.name === params.city);

    return filteredCity;
  }

  render () {
    return (
      <div className='favorites'>
        <Burger list={this.state.list} />
        <FavoriteItem handleChange={this.favActive} active={this.state.city.name.favorite} />
      </div>
    );
  }
}

export default Favorites;
