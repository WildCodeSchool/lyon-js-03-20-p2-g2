import React, { Component } from 'react';
import Cold from './cold';
import Snowy from './snowy';
import Sunny from './sunny';
import Rainy from './rain';

let clothes = '';

class Weather extends Component {
  render () {
    const temperature = this.props.min;
    const description = this.props.main;

    if (temperature < 3 && description.includes('Snow')) {
      clothes = <Snowy />;
    } else if ((temperature < 8)) {
      clothes = <Cold />;
    } else if (((temperature >= 8 && temperature <= 18))) {
      clothes = <Cold />;
    } else if ((temperature > 18 && temperature <= 30)) {
      clothes = <Sunny />;
    } else if (description.includes('Rain')) {
      clothes = <Rainy />;
    }

    return (
      <div>{clothes}</div>
    );
  }
}

export default Weather;
