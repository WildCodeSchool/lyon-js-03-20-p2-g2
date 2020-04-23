import React from 'react';
import '../style/favorite-item.css';

class FavoriteItem extends React.Component {
  render () {
    return (
      <div>

        <span
          className='is-favorite'
          onClick={() => this.props.addFavorite(this.props.city)}
        >
          <i className='fas fa-heart' />

        </span>
      </div>

    );
  }
}

export default FavoriteItem;
