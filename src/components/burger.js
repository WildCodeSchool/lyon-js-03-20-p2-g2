import React, { Component } from 'react';
import '../style/burger.css';

class Burger extends Component {
  constructor (props) {
    super(props);
  }

  show () {
    document.getElementById('sidebar').classList.toggle('active');
  }

  render () {
    return (
      <div id='sidebar'>
        <div className='toggle-btn' onClick={show()}>
          <span />
          <span />
          <span />
        </div>

        <ul>
          <li>Home</li>
          <li>My position</li>
          <li>Favorite places</li>
          <li>Suggestions</li>
          <li>Parameters</li>
        </ul>
      </div>
    );
  }
}

export default Burger;
