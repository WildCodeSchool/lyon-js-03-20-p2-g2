import React, { Component } from 'react';
import Cold from './cold';
import Snowy from './snowy';
import Sunny from './sunny';
import Rainy from './rain';

let clothes = '';

class Weather extends Component {




  render() {
    const temperature = this.props.min;

    if (temperature >= 16 && temperature <= 19) {
      clothes = <Cold />;
    } else if (temperature <= 3) {
      clothes = <Snowy />;
    } else if (temperature >= 4 && temperature <= 15) {
      clothes = <Rainy />;
    } else if (temperature >= 20 && temperature <= 35) {
      clothes = <Sunny />;
    }
    return (
      <div>{clothes}</div>
    );
  }
}

export default Weather;
