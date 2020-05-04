import React, { Component } from 'react';
import Cold from './cold';
import Snowy from './snowy';
import Sunny from './sunny';
import Rainy from './rain';

let clothes = '';

class Weather extends Component {
  render() {
    const temperature = this.props.min;
    const description = this.props.main;


    /*switch (temperature, description) {
      case 'clear':
        return 'sunny';
      default:
        return '';
    }*/

    if (temperature < 3 && description.includes('Snow')) {

      clothes = <Cold />;
    } else if (temperature > 3 && description.includes('Clear')) {
      clothes = <Snowy />;
    }
    return (
      <div>{clothes}</div>
    );
  }
}

export default Weather;
