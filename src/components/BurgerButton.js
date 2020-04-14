import React from 'react';
import '../style/burgerButton.css';

const BurgerButton = props => {
  return (
    <button className='toggle-button' onClick={props.handleClick}>
      <div className='toggle-button_line' />
      <div className='toggle-button_line' />
      <div className='toggle-button_line' />
    </button>
  );
};

export default BurgerButton;
