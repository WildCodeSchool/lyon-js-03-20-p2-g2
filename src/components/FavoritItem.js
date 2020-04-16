import React from 'react'
import '../style/favorit.css';



class Favorit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: true
    };
  }

  render() {
    return (
      <div>

        <span
          className={this.state.favorite ? 'is-favorite' : 'empty'}
          onClick={event => {
            const newFavorite = !this.state.favorite;

            this.setState({ favorite: newFavorite });
          }}
        >
          <i class='fas fa-heart' />

        </span>
      </div>

    );
  }
}
export default Favorit;
