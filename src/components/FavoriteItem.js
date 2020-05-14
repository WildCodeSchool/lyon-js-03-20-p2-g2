import React from 'react';
import styled from 'styled-components';

const Favorite = styled.span`
    color: rgb(255,0,0);
    font-size: 40px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    @media (max-width: 500px) {
    justify-content: center;
    margin-bottom: 20px;
  }`;

class FavoriteItem extends React.Component {
  render () {
    return (
      <div>
        <Favorite onClick={() => this.props.addFavorite(this.props.city)}>
          {this.props.liked ? <i className='fas fa-heart' /> : <i className='far fa-heart' />}
        </Favorite>
      </div>
    );
  }
}

export default FavoriteItem;
