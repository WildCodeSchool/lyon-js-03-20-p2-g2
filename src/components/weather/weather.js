import React, { Component } from 'react';
import Cold from './cold';
import Snowy from './snowy';
import Sunny from './sunny';
import Rainy from './rain';
import VeryHot from './veryHot';
import Temperate from './temperate';

let clothes = '';
class Weather extends Component {
  render () {
    const temperature = this.props.min;
    const description = this.props.main;

    if (temperature < 3 && description.includes('Snow')) {
      clothes = <Snowy />;
    } else if (description.includes('Snow')) {
      clothes = <Snowy />;
    } else if ((temperature >= 3 && temperature <= 7) && description.includes('Clouds')) {
      clothes = <Cold />;
    } else if (temperature < 3 && description.includes('Sunny')) {
      clothes = <Cold />;
    } else if (temperature < 3 && description.includes('Clouds')) {
      clothes = <Cold />;
    } else if ((temperature > 18 && temperature <= 30) && description.includes('Sunny')) {
      clothes = <Sunny />;
    } else if ((temperature > 18 && temperature <= 30) && description.includes('Clouds')) {
      clothes = <Sunny />;
    } else if ((temperature >= 8 && temperature <= 18) && description.includes('Clear')) {
      clothes = <Temperate />;
    } else if ((temperature >= 8 && temperature <= 18) && description.includes('Clouds')) {
      clothes = <Temperate />;
    } else if ((temperature >= 8 && temperature <= 18) && description.includes('Sunny')) {
      clothes = <Temperate />;
    } else if (temperature > 18 && temperature <= 30) {
      clothes = <Sunny />;
    } else if (temperature >= 31) {
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
