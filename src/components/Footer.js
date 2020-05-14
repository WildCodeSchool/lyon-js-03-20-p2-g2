import React, { Component } from 'react';
import '../style/footer.css';
import { Link } from 'react-router-dom';
import ModalSuggestions from './ModalSuggestions';

class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <div className='link-about-us'><Link to='/about'>About us</Link>  </div>
        <div className='link-ws'>© 2020 <Link to='/'>Weather Suggest</Link> <i className='fas fa-heart coeur' /> By Wilders </div>
        <div className='suggest'> <ModalSuggestions /></div>
      </footer>
    );
  }
}

export default Footer;
