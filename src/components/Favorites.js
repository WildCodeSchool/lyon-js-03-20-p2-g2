import React, { Component } from 'react';
import '../style/favorites.css';
// import { FavoriteItem as FavItem } from './FavoriteItem';
import Header from './Header';
import SearchBar from './SearchBar';

class Favorites extends Component {
  // addToFav = cityId => {
  //   this.setState(
  //     prevstate => {
  //       return {
  //         favList: [...prevstate.favList, cityId]
  //       };
  //     }
  //   );
  // };

  // removeToFav = cityId => {
  //   const removeCity = this.state.favList.findIndex(city => city === cityId);

  //   const newFavList = this.state.favList.slice(removeCity, 1);

  //   this.setState({ favList: newFavList });
  // };

  // favActive = city => {
  //   const newFavorite = !this.state.favorite;

  //   this.setState({ favorite: newFavorite });

  //   this.state.favList.city.favorite ? this.addToFav(city) : this.removeToFav(city);
  // };

  // getPath = () => {
  //   const params = this.props.match.params;

  //   const filteredCity = this.state.favList.filter(cityName => cityName === params.city);

  //   return filteredCity;
  // }

  render () {
    return (
      <div className='favorites'>
        <Header />
        <SearchBar />
        {console.log(this.state.favList)}
      </div>
    );
  }
}

export default Favorites;
