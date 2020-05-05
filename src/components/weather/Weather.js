import React, { Component } from 'react';
import Cold from './Cold';
import Snowy from './Snowy';
import Sunny from './Sunny';
import Rainy from './Rain';
import VeryHot from './VeryHot';
import Temperate from './Temperate';

let clothes = '';
class Weather extends Component {
  render() {
    const temperature = this.props.min;
    const description = this.props.main;


    if (description.includes('Rain')) {
      clothes = <Rainy />;
    } else if (description.includes('Snow')) {
      clothes = <Snowy />;
    } else if (temperature <= 10) {
      clothes = <Cold />;
    } else if ((temperature >= 10 && temperature <= 18)) {
      clothes = <Temperate />;
    } else if ((temperature > 18 && temperature <= 30 && description.includes('Clouds'))) {
      clothes = <Temperate />;
    } else if (temperature > 18 && temperature <= 30) {
      clothes = <Temperate />;
    } else if (temperature >= 31) {
      clothes = <VeryHot />;
    }

    return (
      <div>{clothes}</div>
    );
  }
}

export default Weather;
