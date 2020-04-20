import React, { Component } from 'react';
import '../style/favorites.css';

const cities = [];

class Favorites extends Component {
  constructor (props) {
    super(props);

    this.state = {
      list: [],
      favList: []
    };
    this.list = [];
  }

  render () {
    return (
      <div className='favorites' />
    );
  }
}

export default Favorites;
