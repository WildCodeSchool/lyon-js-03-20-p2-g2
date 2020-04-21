import React, { Component } from 'react';
import '../style/favorites.css';
import FavoriteItem, { FavItem } from './FavoriteItem';

class Favorites extends Component {
  constructor (props) {
    super(props);

    this.state = {
      list: [],
      favList: []
    };
    this.list = {
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

  handleChange = city => {
    const newFavorite = !this.state.city.favorite;

    this.setState({ favorite: newFavorite });
  };

  getPath = () => {
    const params = this.props.match.params;

    const filteredCity = this.list.filter(city => city.name === params.city);

    return filteredCity;
  }

  render () {
    return (
      <div className='favorites'>
        <FavItem onClick={this.handleChange} active={this.state.city.name.favorite} />
      </div>
    );
  }
}

export default Favorites;
