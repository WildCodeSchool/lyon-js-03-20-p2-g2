import React from 'react';
import '../style/search-bar.css';

class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null
    };
    this.getLocation = this.getLocation.bind(this);
  }

  getLocation () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      window.alert('Geolocation is not supported by this browser.');
    }
  }

  getCoordinates (position, event) {
    console.log(position);
    event.preventDefault();
  }

  render () {
    const handleButtonClick = this.getCoordinates;
    return (
      <form className='search-bar'>
        <label className='search-label' htmlFor='search-input'>
          <input
            type='text'
            // value=""
            id='search-input'
            placeholder='Type city name...'
          />
        </label>
        <button onClick={handleButtonClick} className='geoLocation-input'><i className='fas fa-map-marker-alt' /></button>
      </form>
    );
  }
}

export default SearchBar;
