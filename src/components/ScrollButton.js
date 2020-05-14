import React from 'react';
import '../App.css';

function ScrollButton (props) {
  return (
    <>
      <div className='btnScrollToTop' onClick={props.onClick} style={styleBtn}>
        <i style={styleIcon} className='fas fa-arrow-up' />
      </div>
    </>
  );
}

const styleBtn = {
  position: 'fixed',
  right: '10px',
  bottom: '150px',
  width: '50px',
  height: '50px',
  background: '#005C89',
  color: '#99D7F5',
  borderRadius: '50%',
  display: 'flex',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'all 0.5s ease-in-out'

};

const styleIcon = {
  margin: 'auto',
  fontSize: '26px'
};

export default ScrollButton;
