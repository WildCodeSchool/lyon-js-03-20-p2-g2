import React from 'react';

function ScrollButton () {
  return (
    <>
      <a href='#' className='btnScrollToTop' style={styleBtn}>
        <i style={styleIcon} className='fas fa-arrow-up' />
      </a>
    </>
  );
}

const styleBtn = {
  position: 'absolute',
  right: '10px',
  bottom: '150px',
  width: '50px',
  height: '50px',
  background: '#005C89',
  color: '#99D7F5',
  borderRadius: '50%',
  display: 'flex',
  textDecoration: 'none'
};

const styleIcon = {
  margin: 'auto',
  fontSize: '26px'
};

export default ScrollButton;
