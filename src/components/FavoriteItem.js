import React from 'react';
import '../style/favorite-item.css';

function FavoriteItem (props) {
  return (
    <div>

      <span
        className={props.active ? 'is-favorite' : 'empty'}
        onClick={props.handleChange}
      >
        <i className='fas fa-heart' />

      </span>
    </div>

  );
}

export default FavoriteItem;
