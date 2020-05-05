import React, { Component } from 'react';
import Cold from './Cold';
import Snowy from './Snowy';
import Sunny from './Sunny';
import Rainy from './Rain';
import VeryHot from './VeryHot';
import Temperate from './Temperate';

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
    } else clothes = <h2 align='center'>no data</h2>;

    return (
      <div>{clothes}</div>
    );
  }
}

export default Weather;
