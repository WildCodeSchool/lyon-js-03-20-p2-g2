import React, { Component } from 'react';
import '../style/header.css';

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <h2 className='welcome-message'>Welcome to <strong>Weather Suggest</strong></h2>
        <img className='menu-logo-img' src={require('../images/logo.png')} alt='logo' />
      </div>
    );
  }
}

export default Header;
