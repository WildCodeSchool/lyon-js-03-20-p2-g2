import React from 'react';
import '../style/favorite-item.css';

class FavoriteItem extends React.Component {
  render () {
    return (
      <div>

        <span
          className={this.props.active ? 'is-favorite' : 'empty'}
          onClick={this.props.handleChange}
        >
          <i className='fas fa-heart' />

        </span>
      </div>

    );
  }
}
export default FavoriteItem;
