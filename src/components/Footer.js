// const suggestChat = ....
import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer className='page-footer font-small blue'>
        <div className='footer-copyright text-center py-3 footer-style'>© 2020 Copyright: By Wilders <i className='fas fa-heart coeur' />
          <a href='/'> WeatherSuggest</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
