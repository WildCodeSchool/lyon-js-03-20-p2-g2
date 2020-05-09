import React from 'react';
import '../style/favorite-item.css';

class FavoriteItem extends React.Component {
  render () {
    return (
      <div>

        <span
          onClick={() => this.props.addFavorite(this.props.city)}
          className='is-favorite'
        >
          {this.props.liked ? <i class="fas fa-heart"></i> : <i class="far fa-heart"></i>}
        </span>
      </div>

    );
  }
}

export default FavoriteItem;
