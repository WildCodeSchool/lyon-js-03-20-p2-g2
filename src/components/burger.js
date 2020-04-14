import React, { Component } from 'react';
import '../style/burger.css';

const button = () => {
  return (
    <button className="BtnBurger">
      hello
    </button>
  )
}
class Burger extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TheMenu">
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
