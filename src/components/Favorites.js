import React, { Component } from 'react';
import '../style/favorites.css';
import { FavItem } from './FavoriteItem';

class Favorites extends Component {
  constructor (props) {
    super(props);

    this.state = {
      list: [],
      favList: []
    };
    this.list = [(
      Lyon: 
        id: 1, 
        favorite: false,
      Paris: 
        id: 2, 
        favorite: false, 
      Maison: 
        id: 3, 
        favorite: false
    )];
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

  handleChange = (city) => {
    const newFavorite = !this.state.city.favorite;

    this.setState({ favorite: newFavorite });
  };

  render () {
    return (
      <div className='favorites'>
        <ul>
          {this.state.list.map(city => {
            return (<li key={city}>{city}</li>);
          })}
        </ul>
        <FavItem onClick={this.handleChange} active={this.state.city.favorite} />
      </div>
    );
  }
}

export default Favorites;
