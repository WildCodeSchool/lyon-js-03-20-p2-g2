import React, { Component } from 'react';
import Cold from './cold';
import Snowy from './snowy';
import Sunny from './sunny';
import Rainy from './rain';
import VeryHot from './veryHot';

let clothes = '';
/* "Clouds"
1: "Snow"
5: "Rain"
7: "Clear"
8: "Clouds"
" */
class Weather extends Component {
  render () {
    const temperature = this.props.min;
    const description = this.props.main;

    if (description.includes('Snow')) {
      clothes = <Snowy />;
    } else if ((temperature >= 3 && temperature <= 16) && description.includes('Clouds')) {
      clothes = <Cold />;
    } else if (temperature < 3 && description.includs('Sunny')) {
      clothes = <Cold />;
    } else if (temperature < 3 && description.includes('Clouds')) {
      clothes = <Cold />;
    } else if ((temperature > 17 && temperature <= 38) && description.includes('Sunny')) {
      clothes = <Sunny />;
    } else if ((temperature > 17 && temperature <= 38) && description.includes('Clouds')) {
      clothes = <Sunny />;
    } else if (temperature >= 39) {
      clothes = <VeryHot />;
    } else if (description.includes('Rain')) {
      clothes = <Rainy />;
    }

    return (
      <div>{clothes}</div>
    );
  }
}

export default Weather;
